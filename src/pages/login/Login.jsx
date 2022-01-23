import './Login.css'
import logo from '../../assets/brand.png'
import { useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

const Login = () => {

    const [state, setState] = useState("");
    const [passwordShown, setPasswordShown] = useState(false);
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };

    const onChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        })
        console.log(state)
    }

    const onSubmit = async e => {
        e.preventDefault();
        try {
            const res = await axios.post(`admin/login`, state)
            console.log(res?.data)
            const token = res?.data?.data?.token
            localStorage.setItem("token", "Bearer " + token);
            setSuccess(true);
        } catch (err) {
            if (!err?.res) {
                setErrMsg('Wrong Username or Password!');
            }
        }
    }

    return (
        <>
            {
                !success ? (
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
                                <p className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                            </form>
                        </div>
                    </div>
                ) :
                    <Navigate to="/dashboard"></Navigate>

            }
        </>
    )
}

export default Login