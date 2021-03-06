import Sidebar from "../../components/sidebar/Sidebar"
import RectangleCard from "../../components/rectangle-card/RectangleCard"
import { useState } from "react";
import './Requests.css'
import { useQuery } from "react-query";
import { Messaging } from "react-cssfx-loading/lib";
import { useGetPointRequests } from "../../hooks/useGetPointRequest";
import { useGetRewardRequests } from "../../hooks/useGetRewardRequests";
import { Navigate } from "react-router-dom";
import Navbar from "../../components/sidebar/Navbar";


const Requests = () => {
    const { data: pointRequestData, isRefetching: isRefetchingPoint } = useQuery("useGetPointRequests", useGetPointRequests)
    const { data: rewardRequestData, isRefetching: isRefetchingReward } = useQuery("useGetRewardRequests", useGetRewardRequests)

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    const isLogged = !!localStorage.getItem('token');
    if (!isLogged) {
        alert("you are not logged in yet!")
        return (
            <Navigate to="/" />
        )
    }

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-3 d-none d-xxl-block">
                    <Sidebar />
                </div>
                <div className="col-md-3 d-xxl-none">
                    <Navbar />
                </div>
                <div className="col-md-9">
                    <div className="title-page row">
                        <div className="col">
                            <p>Requests</p>
                        </div>
                    </div>
                    <div className="bloc-tabs">
                        <button
                            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                            onClick={() => toggleTab(1)}
                        >
                            Point Redeem
                        </button>
                        <button
                            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                            onClick={() => toggleTab(2)}
                        >
                            Reward Redeem
                        </button>
                    </div>

                    <div className="content-tabs">
                        <div
                            className={toggleState === 1 ? "content  active-content" : "content"}
                        >{isRefetchingPoint ? <Messaging color="#FD7014" width="15px" height="15px" /> :
                            (pointRequestData ?
                                Object.values(pointRequestData.data)?.map(item => (
                                    <RectangleCard type={"point"} dataPoint={item} />
                                )) :
                                <Messaging color="#FD7014" width="15px" height="15px" />
                            )
                            }

                        </div>
                        <div
                            className={toggleState === 2 ? "content  active-content" : "content"}
                        >
                            {isRefetchingReward ? <Messaging color="#FD7014" width="15px" height="15px" /> :
                                (rewardRequestData ?
                                    Object.values(rewardRequestData.data)?.map(item => (
                                        <RectangleCard type={"reward"} dataReward={item} />
                                    )) :
                                    <Messaging color="#FD7014" width="15px" height="15px" />
                                )
                            }
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Requests

