import './BoxCard.css'

const BoxCard = (props) => {
    return (
        <div className="text-white mb-3">
            <div className="card-body box-card">
                <h5 className="card-title text-center">{props.title}</h5>
                <p className="card-text text-center">{props.data}</p>
            </div>
        </div>
    )
}

export default BoxCard