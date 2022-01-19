import Sidebar from "../../components/sidebar/Sidebar"
import './History.css'
import { Navigate } from "react-router-dom"
const History = () => {
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
                        <div className="col">
                            <p>History</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="outlined-card">
                            <div className="card-history mb-3">
                                <div className="card-body date">
                            <div className="row">
                                    <div className="col-8">
                                        <h5 className="card-desc mb-3">(date)</h5>
                                        <p>(desc)</p>
                                    </div>
                                    <div className="col-3">
                                        <h5 className="amount-text">(desc)</h5>
                                    </div>
                                    <div className="col-1">
                                        <>
                                           
                                            
                                        </>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div >
    )
}

export default History