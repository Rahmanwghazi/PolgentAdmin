import axios from "axios"

export const ConfirmDeleteModal = (props) => {

    const onDelete = id => {
        axios.delete(`https://61d6b4d235f71e0017c2e77e.mockapi.io/${props.type}/${props.data.id}`)
        .then(res => {
            console.log(res)
            console.log(res.data)
        })
    }

    return (
        <div className="modal fade mt-5" id={`modalDelete${props.data.id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-body">
                        <p className="label-modal mb-2" style={{ fontWeight: "bold", fontSize: 30 }}>Confirmation Delete</p>
                        <div className="form-group">
                            <p className="label-modal" style={{ fontWeight: "normal", fontSize: 20 }}>Delete {props.data.name} ?</p>
                        </div>
                        <button onClick={() => onDelete(props.data.id)} type="submit" className="btn btn-e mb-3" data-bs-dismiss="modal">
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}