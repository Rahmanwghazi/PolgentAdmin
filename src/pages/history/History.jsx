import Sidebar from "../../components/sidebar/Sidebar"
import './History.css'
import { Navigate } from "react-router-dom"
import { useGetAdminHistories } from "../../hooks/useGetAdminHistories"
import { useQuery } from "react-query"
import RectangleCard from "../../components/rectangle-card/RectangleCard"
import { Messaging } from "react-cssfx-loading/lib"
const History = () => {
    const { data } = useQuery("useGetAdminHistories", useGetAdminHistories)
    console.log("sdsdsdsdd", data)
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
                            <p>History</p>
                        </div>
                    </div>
                    {data ?
                        Object.values(data.data)?.map(item => (
                            <div className="row">
                                <RectangleCard type={"history"} dataHistory={item} />
                            </div>
                        )) :
                        <Messaging color="#FD7014" width="15px" height="15px" />
                    }
                </div>
            </div>
        </div>
    )
}

export default History