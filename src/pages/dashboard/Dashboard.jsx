import { Messaging } from "react-cssfx-loading/lib"
import { useQuery } from "react-query"
import { Link, Navigate } from "react-router-dom"
import BoxCard from "../../components/box-card/BoxCard"
import Sidebar from "../../components/sidebar/Sidebar"
import { useGetProducts } from "../../hooks/useGetProducts"
import { useGetRewards } from "../../hooks/useGetRewards"
import { useGetUsers } from "../../hooks/useGetUsers"
import logoutButton from '../../assets/logout.png'
import userImg from '../../assets/user.png'
import rewardImg from '../../assets/reaward.png'
import productImg from '../../assets/product.png'

import './Dashboard.css'
import PolgentChart from "../../components/chart/PolgentChart"
import Navbar from "../../components/sidebar/Navbar"
const Dashboard = () => {
    const { data: dataProduct } = useQuery("useGetProducts", useGetProducts)
    const { data: dataReward } = useQuery("useGetRewards", useGetRewards)
    const { data: dataUser } = useQuery("useGetUsers", useGetUsers)
    const isLogged = !!localStorage.getItem('token');

    if (!isLogged) {
        alert("you are not logged in yet!")
        return (
            <Navigate to="/" />
        )
    }

    const logoutHandler = () => {
        localStorage.removeItem("token");
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
                        <div className="col-md-9">
                            <p>Dashboard</p>
                        </div>
                        <div className="col-md-3 greetings">
                            <div className="row">
                                <div className="col">
                                </div>
                                <div className="col-6">
                                    <p>Hi, admin A</p>
                                </div>
                                <div className="col-2 btn-logout">
                                    <Link to="/">
                                        <img className="button" title="logout" src={logoutButton} onClick={() => { logoutHandler() }} alt="illustration" width="20" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <BoxCard data={dataUser ?
                                Object.keys(dataUser.data).length
                                :
                                <Messaging color="#FD7014" width="15px" height="15px" />
                            } title={"client registered"} img={<img title="client" src={userImg} alt="illustration" width="150" style={{ "marginTop": "-100px", "opacity": "0.1" }} />} />
                        </div>
                        <div className="col-md-6">
                            <BoxCard data={dataReward ?
                                Object.keys(dataReward.data).length
                                :
                                <Messaging color="#FD7014" width="15px" height="15px" />
                            } title={"total reward"} img={<img title="rewardImg" src={rewardImg} alt="illustration" width="150" style={{ "marginTop": "-100px", "opacity": "0.1" }} />} />
                        </div>
                        <div className="col-md-6">
                            <BoxCard data={dataProduct ?
                                Object.keys(dataProduct.data).length
                                :
                                <Messaging color="#FD7014" width="15px" height="15px" />
                            } title={"total product"} img={<img title="productImg" src={productImg} alt="illustration" width="150" style={{ "marginTop": "-100px", "opacity": "0.1" }} />} />
                        </div>
                        <div className="col-md-6">
                            <BoxCard data={
                                <PolgentChart />
                            } title={"statistics"} src={productImg} alt="illustration" width="150" style={{ "marginTop": "-100px", "opacity": "0.1" }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard