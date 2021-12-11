import RectangleCard from "../../components/rectangle-card/RectangleCard"
import Sidebar from "../../components/sidebar/Sidebar"
import './History.css'
const History = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-3 d-none d-xxl-block">
                    <Sidebar />
                </div>
                <div className="col-md-9">
                    <div className="title-page row">
                        <div className="col">
                            <p>History</p>
                        </div>
                    </div>
                    <div className="row">
                            <RectangleCard />
                    </div>
                    <div className="row">
                            <RectangleCard />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default History