import './RectangleCard.css'
import editButton from '../../assets/editButton.png'
import deleteButton from '../../assets/deleteButton.png'
import emailImg from '../../assets/email.png'
import pointImage from '../../assets/point.png'
import { UpdateRewardRequestModal } from '../modals/UpdateRewardRequestModal'
import { UpdatePointRequestModal } from '../modals/UpdatePointRequestModal'
import { UpdateUserModal } from '../modals/UpdateUserModal'
import { ConfirmDeleteModal } from '../modals/ConfirmDeleteModal'
import { extractDate } from '../../utils/dateFormatter'

const RectangleCard = (props) => {
console.log("heer",props.dataReward)
    return (
        <div className="outlined-card">
            <div className="card-history mb-3">
                {
                    props.type === "user" ?
                        <div className="card-body date">
                            <p>{extractDate(props.data.createdAt)}</p>
                            <div className="row">
                                <div className="col-6">
                                    <h5 className="card-desc mb-3">{props.data.toko}</h5>
                                    <p> <img src={emailImg} alt="email" width="20" /> {props.data.email}</p>
                                </div>
                                <div className="col-4">
                                    <div className="row">
                                        <div className="col">
                                            <h5 className="amount-text"> <img src={pointImage} alt="point" width="30" style={{ marginLeft: 5, marginBottom: 10 }} /> {props.data.poin}</h5>
                                        </div>
                                    </div>
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
                            {
                                props.type === "point" ?
                                    <><p>{extractDate(props.dataPoint.CreatedAt)}</p>
                                        <div className="row">
                                            <div className="col-5">
                                                <h5 className="card-desc mb-3">{props.dataPoint.User.Toko}</h5>
                                                <div className="chip">
                                                    {
                                                        props.dataPoint.Status === "Request" ?
                                                            <p className='chip' style={{ backgroundColor: "#c5d1dd" }}> {props.dataPoint.Status}</p> :
                                                            (props.dataPoint.Status === "Rejected" ?
                                                                <p className='chip' style={{ backgroundColor: "#FFCCCC" }}> {props.dataPoint.Status}</p> :
                                                                <p className='chip' style={{ backgroundColor: "#ccf1b4" }}> {props.dataPoint.Status}</p>
                                                            )
                                                    }
                                                </div>
                                            </div>
                                            <div className="col-5">
                                                <h5 className="amount-text"> {props.dataPoint.Product.Amount} x {props.dataPoint.Product.NameProduct} </h5>
                                                <h5 className="amount-text"> @{props.dataPoint.Product.Poin} pts </h5>
                                            </div>
                                            <div className="col-2">
                                                <>{
                                                    props.dataPoint.Status === "Accepted" ?
                                                        <p><a className="btn btn-i" href={props.dataPoint.ImageRequest} target="_blank" rel="noopener noreferrer">invoice</a>.</p>
                                                        : (
                                                            props.dataPoint.Status === "Rejected" ?
                                                                <p><a className="btn btn-i" href="https://res.cloudinary.com/chcpyto/image/upload/v1642491530/f40k84d78dgcgxcdylxw.png" target="_blank" rel="noopener noreferrer">invoice</a>.</p>
                                                                :
                                                                <><img src={editButton} className='buttton mb-2' alt="illustration" width="40" style={{ marginLeft: 35 }} data-bs-toggle="modal" data-bs-target={`#modalPoint${props.dataPoint.Id}`} />
                                                                    <UpdatePointRequestModal dataPoint={props.dataPoint} /><p>
                                                                        <a className="btn btn-i" href="https://res.cloudinary.com/chcpyto/image/upload/v1642491530/f40k84d78dgcgxcdylxw.png" target="_blank" rel="noopener noreferrer">invoice</a>.</p></>
                                                        )

                                                }
                                                </>

                                            </div>
                                        </div></>
                                    :
                                    (
                                        props.type === "reward" ?
                                            <><p>{extractDate(props.dataReward.CreatedAt)}</p>
                                                <div className="row">
                                                    <div className="col-5">
                                                        <h5 className="card-desc mb-3">{props.dataReward.User.Toko}</h5>
                                                        <p>{props.dataReward.Status}</p>
                                                    </div>
                                                    <div className="col-5">
                                                        <h5 className="amount-text">{props.dataReward.Reward.Description} </h5>
                                                    </div>
                                                    <div className="col-2">
                                                        <img src={editButton} className='buttton mb-2' alt="illustration" width="40" style={{ marginLeft: 35 }} data-bs-toggle="modal" data-bs-target="#modalReward" />
                                                        <UpdateRewardRequestModal dataReward={props.dataReward} />
                                                        <p><a className="btn btn-i" href={props.dataReward.MidtransLink} target="_blank" rel="noopener noreferrer">process</a>.</p>
                                                    </div>
                                                </div></>
                                            :
                                            <><p>{extractDate(props.dataHistory.createdAt)}</p>
                                                <div className="row">
                                                    <div className="col">
                                                        <h5 className="card-desc mb-3">{props.dataHistory.description}'s point request</h5>
                                                    </div>
                                                </div></>
                                    )

                            }
                        </div>
                }
            </div>
        </div>

    )
}

export default RectangleCard