import './RectangleCard.css'

const RectangleCard = () => {
    return (
        <div className="outlined-card">
            <div className="card-history mb-3">
            <div className="card-body date">
                <p>25 Oct 2020</p>
                <div className="row">
                    <div className="col-8">
                        <h5 className="card-desc">(desc)</h5>
                    </div>
                    <div className="col-4 mb-4">
                        <h5 className="amount-text">(another desc)</h5>
                    </div>
                </div>

            </div>
        </div>
        </div>

    )
}

export default RectangleCard