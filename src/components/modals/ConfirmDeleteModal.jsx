import axios from "axios"

export const ConfirmDeleteModal = (props) => {


    const onDelete = id => {
        const header = {
            "Content-type": "application/json",
            Authorization: localStorage.getItem('token')
        }
        if (props.type === "products") {
            axios.post(`/admin/DeleteProduct`, { id: props.data.id }, {
                headers: header
            })
                .then(res => {
                    console.log("responnya = ", res.data)
                })
        } else if (props.type === "rewards") {
            axios.post(`/admin/deleteRedem`, { id: props.data.id }, {
                headers: header
            })
                .then(res => {
                    console.log("responnya = ", res.data)
                })
        } else {
            axios.post(`/admin/deleteUser`, { id: props.data.id }, {
                headers: header
            })
                .then(res => {
                    console.log("responnya = ", res.data)
                })
        }
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