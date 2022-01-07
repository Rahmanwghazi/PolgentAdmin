import './Card.css'
import editButton from '../../assets/editButton.png'
import deleteButton from '../../assets/deleteButton.png'
import { UpdateProductModal } from '../modals/UpdateProductModal'
import { UpdateRewardModal } from '../modals/UpdateRewardModal'
import { ConfirmDeleteModal } from '../modals/ConfirmDeleteModal'

const Card = (props) => {
    console.log("props", props)
    return (
        <div className="mb-3">
            <div className="card-body mycard">
                <div className='col'>
                    <img src={props.data.image} alt="illustration" width="220" style={{ marginLeft: 35 }} />
                </div>
                <div className='col'>
                    <p className="card-text-desc text-center">{props.data.name}</p>
                </div>
                <div className='col'>
                    <p className="card-text-point text-center">{props.data.point} points</p>
                </div>
                <div className="container">
                    <div className="row">
                        {
                            props.type === "products" ?
                                <><div className="onHover">
                                    <img src={deleteButton} class="deleteHover" alt="illustration" width="20" data-bs-toggle="modal" data-bs-target="#modalProduct" />
                                    <ConfirmDeleteModal />
                                </div>
                                    <div className="onHover">
                                        <img src={editButton} class="editHover" alt="illustration" width="20" data-bs-toggle="modal" data-bs-target="#modalProduct" />
                                    </div>
                                    <UpdateProductModal />
                                </>
                                :
                                <><div className="onHover">
                                    <img src={deleteButton} class="deleteHover" alt="illustration" width="20" data-bs-toggle="modal" data-bs-target="#modalReward" />
                                    <ConfirmDeleteModal />
                                </div>
                                    <div className="onHover">
                                        <img src={editButton} class="editHover" alt="illustration" width="20" data-bs-toggle="modal" data-bs-target="#modalReward" />
                                    </div>
                                    <UpdateRewardModal />
                                </>
                        }
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Card