import './Card.css'

const Card = (props) => {
    return (
        <div className="mb-3">
            <div className="card-body mycard">
                <div className='col'>
                    <img src={props.img} alt="illustration" width="200" style={{ marginLeft: 35 }} />
                </div>
                <div className='col'>
                    <p className="card-text-desc text-center">{props.desc}</p>
                </div>
                <div className='col'>
                    <p className="card-text-point text-center">{props.point} points</p>
                </div>
            </div>
        </div>
    )
}

export default Card