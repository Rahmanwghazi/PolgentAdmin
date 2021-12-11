import BoxCard from "../../components/box-card/BoxCard"
import Sidebar from "../../components/sidebar/Sidebar"
import './Dashboard.css'
const Dashboard = () => {
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
                            <BoxCard />
                        </div>
                        <div className="col-md-6">
                            <BoxCard />
                        </div>
                        <div className="col-md-6">
                            <BoxCard />
                        </div>
                        <div className="col-md-6">
                            <BoxCard />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard