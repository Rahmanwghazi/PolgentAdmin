import Sidebar from "../../components/sidebar/Sidebar"
import './History.css'
import { Navigate } from "react-router-dom"
import { useGetAdminHistories } from "../../hooks/useGetAdminHistories"
import { useQuery } from "react-query"
import RectangleCard from "../../components/rectangle-card/RectangleCard"
import { Messaging } from "react-cssfx-loading/lib"
import { useGetPointRequests } from "../../hooks/useGetPointRequest";
import { useGetRewardRequests } from "../../hooks/useGetRewardRequests";
import { extractDate } from "../../utils/dateFormatter"
const History = () => {

    const { data: historyAdmin } = useQuery("useGetAdminHistories", useGetAdminHistories)
    const { data: pointRequestData } = useQuery("useGetPointRequests", useGetPointRequests)
    const { data: rewardRequestData } = useQuery("useGetRewardRequests", useGetRewardRequests)



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
                    Point Request
                    <table class="table">
                        
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Client</th>
                                <th scope="col">Date Requested</th>
                                <th scope="col">Product</th>
                                <th scope="col">Poin</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        {pointRequestData ?
                            Object.values(pointRequestData.data)?.map(data => {
                                return (
                                    <>
                                        <tbody>
                                            <tr>
                                                <th scope="row">{data.Id}</th>
                                                <th scope="row">{data.User.Toko}</th>
                                                <th scope="row">{extractDate(data.CreatedAt)}</th>
                                                <th scope="row">{data.Product.NameProduct} x {data.Product.Amount} pcs</th>
                                                <th scope="row">@{data.Product.Poin}</th>
                                                <th scope="row">{data.Status} {data.Status === "Accepted" ? extractDate(data.UpdatedAt) : "belum diproses"}</th>
                                            </tr>
                                        </tbody>
                                    </>
                                );
                            }) :
                            <Messaging color="#FD7014" width="15px" height="15px" />
                        }
                    </table>
                    <br></br>
                    Reward Request
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Client</th>
                                <th scope="col">Date Requested</th>
                                <th scope="col">Reward</th>
                                <th scope="col">Poin</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        {rewardRequestData ?
                            Object.values(rewardRequestData.data)?.map(data => {
                                return (
                                    <>
                                        <tbody>
                                            <tr>
                                                <th scope="row">{data.Id}</th>
                                                <th scope="row">{data.User.Toko}</th>
                                                <th scope="row">{extractDate(data.CreatedAt)}</th>
                                                <th scope="row">{data.Reward.NameType} Rp {data.Reward.NominalReward}</th>
                                                <th scope="row">{data.Reward.Poin}</th>
                                                <th scope="row">{data.Status} ({data.Status === "Accepted" ? extractDate(data.UpdatedAt) : "belum diproses"})</th>
                                            </tr>
                                        </tbody>
                                    </>
                                );
                            }) :
                            <Messaging color="#FD7014" width="15px" height="15px" />
                        }
                    </table>
                    {/* {historyAdmin ?
                        Object.values(historyAdmin.data)?.map(item => (
                            <div className="row">
                                <RectangleCard type={"history"} dataHistory={item} />
                            </div>
                        )) :
                        <Messaging color="#FD7014" width="15px" height="15px" />
                    } */}
                </div>
            </div>
        </div>
    )
}

export default History