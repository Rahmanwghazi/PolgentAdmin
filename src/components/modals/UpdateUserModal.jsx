import axios from "axios";
import { useState } from "react";
import './Modal.css'

export const UpdateUserModal = (props) => {
    const [state, setState] = useState(props.data)

    const onChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        })
    }

    const header = {
        "Content-type": "application/json",
        Authorization: localStorage.getItem('token')
    }

    const onSubmit = e => {
        axios.post(`/user/updateUser`, state, {
            headers: header
        })
            .then(res => {
                console.log(res.data)
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="modal fade mt-5" id={`modalUser${props.data.id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-wrapepr">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-body">
                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button> 
                            <h5 className="label-modal edit">Update User</h5>
                            <div onSubmit={onSubmit}>
                                <div className="form-group">
                                    <label>Name</label>
                                    <input type="text" className="form-control form-field d-flex align-items-center " value={state.toko} name="toko" onChange={onChange} />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" className="form-control form-field d-flex align-items-center" value={state.email} name="email" onChange={onChange} />
                                </div>
                                <button onClick={onSubmit} style={{ marginTop: "-20px" }} type="submit" className="btn btn-e mb-5" data-bs-dismiss="modal">
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}