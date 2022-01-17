import { ConfirmDeleteModal } from "../../components/modals/ConfirmDeleteModal"
import { UpdateUserModal } from "../../components/modals/UpdateUserModal"
import RectangleCard from "../../components/rectangle-card/RectangleCard"
import Sidebar from "../../components/sidebar/Sidebar"
import editButton from '../../assets/editButton.png'
import deleteButton from '../../assets/deleteButton.png'
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
                                            <img src={editButton} className='buttton' alt="illustration" width="40" style={{ marginLeft: 35 }} data-bs-toggle="modal" data-bs-target={"sd"} />
                                           
                                            <img src={deleteButton} className='button' alt="illustration" width="40" style={{ marginLeft: 35 }} data-bs-toggle="modal" data-bs-target={`ssd`} />
                                            
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