import Card from "../../components/card/Card"
import Sidebar from "../../components/sidebar/Sidebar"
import './Rewards.css'
import addButton from '../../assets/addbutton.png'
import { AddRewardModal } from "../../components/modals/AddRewardModal"
import { useGetRewards } from "../../hooks/useGetRewards"
import { useQuery } from "react-query"
import { Messaging } from "react-cssfx-loading/lib"
import { Navigate } from "react-router-dom"
const Rewards = () => {
    const { data } = useQuery("useGetRewards", useGetRewards)
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
                <div className="col-md-9">
                    <div className="title-page row">
                        <div className="col-2">
                            <p>Rewards</p>
                        </div>
                        <div className="col-2">
                            <img src={addButton} alt="illustration" width="20" style={{ marginLeft: 35 }} data-bs-toggle="modal" data-bs-target="#modalFormName" />
                            <AddRewardModal />
                        </div>
                    </div>
                    <div className="row">
                        {data ?
                            Object.values(data.data)?.map(item => (
                                <div className="col-md-4">
                                    <Card type={"rewards"} data={item} />
                                </div>
                            )) :
                            <Messaging color="#FD7014" width="15px" height="15px" />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Rewards