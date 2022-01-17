import './RectangleCard.css'
import editButton from '../../assets/editButton.png'
import deleteButton from '../../assets/deleteButton.png'
import { UpdateRewardRequestModal } from '../modals/UpdateRewardRequestModal'
import { UpdatePointRequestModal } from '../modals/UpdatePointRequestModal'
import { UpdateUserModal } from '../modals/UpdateUserModal'
import { ConfirmDeleteModal } from '../modals/ConfirmDeleteModal'

const RectangleCard = (props) => {
    console.log(props.data)
    return (
        <div className="outlined-card">
            <div className="card-history mb-3">
                {
                    props.type === "user" ?
                        <div className="card-body date">
                            <p>{props.data.createdAt}</p>
                            <div className="row">
                                <div className="col-7">
                                    <h5 className="card-desc mb-3">{props.data.toko}</h5>
                                    <p>{props.data.email}</p>
                                </div>
                                <div className="col-3">
                                    <h5 className="amount-text">point: {props.data.poin}</h5>
                                </div>
                                <div className="col-2">
                                    <>
                                        <img src={editButton} className='buttton' alt="illustration" width="40" style={{ marginLeft: 35 }} data-bs-toggle="modal" data-bs-target={`#modalUser${props.data.id}`} />
                                        <UpdateUserModal data={props.data} />
                                        <img src={deleteButton} className='button' alt="illustration" width="40" style={{ marginLeft: 35 }} data-bs-toggle="modal" data-bs-target={`#modalDelete${props.data.id}`} />
                                        <ConfirmDeleteModal data={props.data} type={"users"} />
                                    </>
                                </div>
                            </div>
                        </div> :
                        <div className="card-body date">
                            <p>{props.data.CreatedAt}</p>
                            <div className="row">
                                <div className="col-7">
                                    <h5 className="card-desc mb-3">{props.data.User.Toko}</h5>
                                    <p>{props.data.Type === "Product" ? "Redeem point request" : "Redeem reward request"}</p>
                                </div>
                                <div className="col-3">
                                    <h5 className="amount-text">{props.data.Type === "Product" ? (props.data.Product.NameProduct) : (props.data.Reward.Description)}    </h5>
                                </div>
                                <div className="col-2">
                                    {
                                        props.data.Type === "Product" ?
                                            <>
                                                <img src={editButton} className='buttton' alt="illustration" width="40" style={{ marginLeft: 35 }} data-bs-toggle="modal" data-bs-target="#modalPoint" />
                                                <UpdatePointRequestModal />

                                            </>
                                            :
                                            <>
                                                <img src={editButton} className='buttton' alt="illustration" width="40" style={{ marginLeft: 35 }} data-bs-toggle="modal" data-bs-target="#modalReward" />
                                                <UpdateRewardRequestModal />

                                            </>
                                    }
                                </div>
                            </div>
                        </div>
                }
            </div>
        </div>

    )
}

export default RectangleCard