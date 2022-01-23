import './Sidebar.css'
import logo from '../../assets/brand.png'
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidenav">
      <a href="/dashboard" className="mt-5">
        <img className="logo-sidebar"
          src={logo} alt="logo"></img>
      </a>
      <NavLink className={({ isActive }) => isActive? "active": ''} to="/dashboard">Dashboard</NavLink>
      <NavLink className={({ isActive }) => isActive? "active": ''} to="/requests">Requests</NavLink>
      <NavLink className={({ isActive }) => isActive? "active": ''} to="/users">Users</NavLink>
      <NavLink className={({ isActive }) => isActive? "active": ''} to="/rewards">Rewards</NavLink>
      <NavLink className={({ isActive }) => isActive? "active": ''} to="/products">Products</NavLink>
      <NavLink className={({ isActive }) => isActive? "active": ''} to="/history">History</NavLink>
    </div>
  );
};

export default Sidebar;