import './Navbar.css'
import logo from '../../assets/brand.png'
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark small-sidenav">
                <a href="/#">
                    <img className="logo"
                        src={logo} alt="logo"></img>
                </a>
                <button className="navbar-toggler border-0" type="button" data-bs-toggle="modal" data-bs-target="#targetModal-item">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="modal-item modal fade" id="targetModal-item" tabIndex="-1" role="dialog"
                    aria-labelledby="targetModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content border-0">
                            <div className="modal-header border-0">
                                <a className="modal-title" href="/#" id="targetModalLabel">
                                    <img className="logo"
                                        src={logo}
                                        alt=""></img>
                                </a>
                                <button type="button" className="close btn-close text-white" data-bs-dismiss="modal" aria-label="Close">
                                </button>
                            </div>
                            <div className="modal-body">
                                <ul className="navbar-nav responsive me-auto mt-2 mt-lg-0">
                                    <li className="nav-items">
                                        <NavLink className={({ isActive }) => isActive ? "active" : ''} to="/dashboard">Dashboard</NavLink>
                                    </li>
                                    <li className="nav-items">
                                        <NavLink className={({ isActive }) => isActive ? "active" : ''} to="/requests">Requeests</NavLink>
                                    </li>
                                    <li className="nav-items">
                                        <NavLink className={({ isActive }) => isActive ? "active" : ''} to="/users">Users</NavLink>
                                    </li>
                                    <li className="nav-items">
                                        <NavLink className={({ isActive }) => isActive ? "active" : ''} to="/rewards">Rewards</NavLink>
                                    </li>
                                    <li className="nav-items">
                                        <NavLink className={({ isActive }) => isActive ? "active" : ''} to="/products">Products</NavLink>
                                    </li>
                                    <li className="nav-items">
                                        <NavLink className={({ isActive }) => isActive ? "active" : ''} to="/history">History</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>

    );
};

export default Navbar;