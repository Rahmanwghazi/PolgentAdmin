import { Messaging } from "react-cssfx-loading/lib"
import { useQuery } from "react-query"
import BoxCard from "../../components/box-card/BoxCard"
import Sidebar from "../../components/sidebar/Sidebar"
import { useGetProducts } from "../../hooks/useGetProducts"
import { useGetRewards } from "../../hooks/useGetRewards"
import { useGetUsers } from "../../hooks/useGetUsers"
import './Dashboard.css'
const Dashboard = () => {
    const { data: dataProduct } = useQuery("useGetProducts", useGetProducts)
    const { data: dataReward } = useQuery("useGetRewards", useGetRewards)
    const { data: dataUser } = useQuery("useGetUsers", useGetUsers)

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-3 d-none d-xxl-block">
                    <Sidebar />
                </div>
                <div className="col-md-9">
                    <div className="title-page row">
                        <div className="col-md-6">
                            <p>Dashboard</p>
                        </div>
                        <div className="col-md-6 greetings">
                            <p>Hi, admin A</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <BoxCard data={dataUser ?
                                Object.keys(dataUser).length
                                :
                                <Messaging color="#FD7014" width="15px" height="15px" />
                            } title={"client registered"} />
                        </div>
                        <div className="col-md-6">
                            <BoxCard data={dataReward ?
                                Object.keys(dataReward).length
                                :
                                <Messaging color="#FD7014" width="15px" height="15px" />
                            } title={"total reward"} />
                        </div>
                        <div className="col-md-6">
                            <BoxCard data={dataProduct ?
                                Object.keys(dataProduct).length
                                :
                                <Messaging color="#FD7014" width="15px" height="15px" />
                            } title={"total product"} />
                        </div>
                        <div className="col-md-6">
                            <BoxCard data={dataProduct ?
                                Object.keys(dataProduct).length
                                :
                                <Messaging color="#FD7014" width="15px" height="15px" />
                            } title={"total apa gitu"} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard