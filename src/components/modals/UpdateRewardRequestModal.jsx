import { useState } from "react";
import './Modal.css'

export const UpdateRewardRequestModal = () => {
    const [state, setState] = useState("")
    const onChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        })
    }

    const onSubmit = e => {
        setState({
            ...state,
            status: "",
            notes: "",
        })
    }

    return (
        <div className="modal fade mt-5" id="modalReward" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-body">
                        <h5 className="label-modal edit">Update Status Reward Request</h5>
                        <div onSubmit={onSubmit}>
                            <div className="form-group">
                                <label>Status</label>
                                <select className="form-control" name="status" value={state.status} onChange={onChange} >
                                    <option value="" defaultValue >Select</option>
                                    <option value="Requested">Requested</option>
                                    <option value="Finished">Finished</option>
                                    <option value="Rejected">Rejected</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Notes  </label>
                                <input type="text" className="form-control" value={state.notes} name="notes" onChange={onChange} />
                            </div>
                            <button onClick={onSubmit} style={{ marginTop: "-20px" }} type="submit" className="btn btn-e mb-5" data-bs-dismiss="modal">
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}