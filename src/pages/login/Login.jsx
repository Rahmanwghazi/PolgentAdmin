import './Login.css'
import logo from '../../assets/brand.png'
import { useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

const Login = () => {

    const [state, setState] = useState("");
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };

    const onChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        })
    }

    const onSubmit = e => {
        console.log("statelogin", state)
        axios.post(`/admin/login`, state)
            .then((response) => {
                console.log("datassss", response.data);
                console.log(response.status);
                console.log(response.statusText);
                console.log(response.headers);
                console.log(response.config);
                if (response.status === 200) {
                    localStorage.setItem("token", "Bearer " + response.data.data.token);
                    <Navigate to="/dashboard" />
                } else {
                    alert("username or password wrong!")
                }
            })
            .catch((err) => console.error(err));
    }

    const isLogged = !!localStorage.getItem('token');
    if (isLogged) {
        return (
            <Navigate to="/dashboard" />
        )
    }

    return (
        <div className='wrapper'>
            <div className="logo-modal">
                <img className="logo" src={logo} alt="logo"></img>
            </div>
            <div className="modal-body">
                <h5 className="label-card">Login as admin</h5>
                <form className="form-modal">
                    <div className="mb-3 mt-5">
                        <label className="form-label ">Username</label>
                        <input type="text" className="form-control form-field d-flex align-items-center" id="username" name="username" placeholder="username" value={state.username} onChange={onChange} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type={passwordShown ? "text" : "password"} className="form-control form-field d-flex align-items-center" id="password" name="password" placeholder="Password" value={state.password} onChange={onChange} />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" onChange={togglePassword} className="form-check-input" id="show" />
                        <label className="form-check-label">Show password</label>
                    </div>
                    <button onClick={onSubmit} type="submit" className="btn btn-signin">Login</button>
                </form>
            </div>
        </div>

    )
}

export default Login