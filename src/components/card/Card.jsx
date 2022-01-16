import './Card.css'
import editButton from '../../assets/editButton.png'
import deleteButton from '../../assets/deleteButton.png'
import { UpdateProductModal } from '../modals/UpdateProductModal'
import { UpdateRewardModal } from '../modals/UpdateRewardModal'
import { ConfirmDeleteModal } from '../modals/ConfirmDeleteModal'

const Card = (props) => {
    return (
        <div className="mb-3">
            <div className="card-body mycard">
                <div className='col' id="img-content">
                    <img src={props.data.img} alt="illustration" />
                </div>
                <div className='col'>
                    <p className="card-text-desc text-center">{props.data.nameProduct}</p>
                </div>
                {
                    props.type === "products" ?
                        <div className='col'>
                            <p className="card-text-point text-center">earn {props.data.poin} points</p>
                        </div> :
                        <div className='col'>
                            <p className="card-text-point text-center">need {props.data.poin} points</p>
                        </div>

                }

                <div className="container">
                    <div className="row">
                        {
                            props.type === "products" ?
                                <>
                                    <div className="onHover">
                                        <img src={deleteButton} className="deleteHover" alt="illustration" width="50" data-bs-toggle="modal" data-bs-target={`#modalDelete${props.data.id}`} />
                                        <img src={editButton} className="editHover" alt="illustration" width="50" data-bs-toggle="modal" data-bs-target={`#modalProduct${props.data.id}`} />
                                    </div>
                                    <ConfirmDeleteModal data={props.data} type={"products"} />
                                    <UpdateProductModal data={props.data} />
                                </>
                                :
                                <>
                                    <div className="onHover">
                                        <img src={deleteButton} className="deleteHover" alt="illustration" width="50" data-bs-toggle="modal" data-bs-target={`#modalDelete${props.data.id}`} />
                                        <img src={editButton} className="editHover" alt="illustration" width="50" data-bs-toggle="modal" data-bs-target={`#modalReward${props.data.id}`} />
                                    </div>
                                    <ConfirmDeleteModal data={props.data} type={"rewards"} />
                                    <UpdateRewardModal data={props.data} />
                                </>
                        }
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Card