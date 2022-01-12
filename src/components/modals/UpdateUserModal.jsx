import axios from "axios";
import { useState } from "react";
import './Modal.css'

export const UpdateUserModal = (props) => {
    const [state, setState] = useState(props.data)
    const [passwordShown, setPasswordShown] = useState(false);
    const onChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        })
    }

    const togglePassword = () => {
        setPasswordShown(!passwordShown);
      };

    const onSubmit = e => {
        axios.put(`https://61d6b4d235f71e0017c2e77e.mockapi.io/users/${props.data.id}`, state)
            .then(res => {
                console.log(res.data)
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="modal fade mt-5" id={`modalUser${props.data.id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-body">
                        <h5 className="label-modal edit">Update User</h5>
                        <div onSubmit={onSubmit}>
                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" className="form-control" value={state.name} name="name" onChange={onChange} />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" className="form-control" value={state.email} name="email" onChange={onChange} />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input  type={passwordShown ? "text" : "password"} className="form-control" value={state.password} name="password" onChange={onChange} />
                                <button onClick={togglePassword}>Show Password</button>
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