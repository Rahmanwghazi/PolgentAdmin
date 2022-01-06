import './RectangleCard.css'
import editButton from '../../assets/editButton.png'
import deleteButton from '../../assets/deleteButton.png'
import { UpdateRewardRequestModal } from '../modals/UpdateRewardRequestModal'
import { UpdatePointRequestModal } from '../modals/UpdatePointRequestModal'
import { UpdateUserModal } from '../modals/UpdateUserModal'
import { ConfirmDeleteModal } from '../modals/ConfirmDeleteModal'

const RectangleCard = (props) => {
    return (
        <div className="outlined-card">
            <div className="card-history mb-3">
                <div className="card-body date">
                    <p>25 Oct 2020</p>
                    <div className="row">
                        <div className="col-8">
                            <h5 className="card-desc">(desc)</h5>
                        </div>
                        <div className="col-3 mb-4">
                            <h5 className="amount-text">(another desc)</h5>
                        </div>
                        <div className="col-1">
                            {
                                props.type === "point" ?
                                    <>
                                        <img src={editButton} alt="illustration" width="20" style={{ marginLeft: 35 }} data-bs-toggle="modal" data-bs-target="#modalPoint" />
                                        <UpdatePointRequestModal />
                                        <img src={deleteButton} alt="illustration" width="20" style={{ marginLeft: 35 }} data-bs-toggle="modal" data-bs-target="#modalDelete" />
                                        <ConfirmDeleteModal />
                                    </>
                                    : (
                                        props.type === "reward" ?
                                            <>
                                                <img src={editButton} alt="illustration" width="20" style={{ marginLeft: 35 }} data-bs-toggle="modal" data-bs-target="#modalReward" />
                                                <UpdateRewardRequestModal />
                                                <img src={deleteButton} alt="illustration" width="20" style={{ marginLeft: 35 }} data-bs-toggle="modal" data-bs-target="#modalDelete" />
                                                <ConfirmDeleteModal />
                                            </>
                                            :
                                            <>
                                                <img src={editButton} alt="illustration" width="20" style={{ marginLeft: 35 }} data-bs-toggle="modal" data-bs-target="#modalUser" />
                                                <UpdateUserModal />
                                                <img src={deleteButton} alt="illustration" width="20" style={{ marginLeft: 35 }} data-bs-toggle="modal" data-bs-target="#modalDelete" />
                                                <ConfirmDeleteModal />
                                            </>
                                    )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default RectangleCard