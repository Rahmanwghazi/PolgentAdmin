
export const ConfirmDeleteModal = (props) => {
    // const desc = props.data.notes
    return (
        // <div className="modal fade mt-5" id={`modalDelete${"props.data.id"}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal fade mt-5" id={`modalDelete`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-body">
                        <button type="button" className="close btn-close text-white mt-5" data-bs-dismiss="modal" aria-label="Close"></button>
                        <p className="label-modal edit mb-5" style={{ fontWeight: "normal", fontSize: 20 }}>Confirmation Delete</p>
                        <div className="form-group text-white mt-2">
                            <label>Delete { } ? </label>
                        </div>
                        <button onClick={() => props.deleteRecord("props.data.id")} type="submit" className="btn btn-e mb-5" data-bs-dismiss="modal">
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}