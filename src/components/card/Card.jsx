import './Card.css'

const Card = () => {
    return (
        <div className="text-white mb-3">
            <div className="card-body mycard">
                <h5 className="card-title text-center">(card tite)</h5>
                <p className="card-text text-center">[card content]</p>
            </div>
        </div>
    )
}

export default Card