import './Sidebar.css'
import logo from '../../assets/brand.png'
import dashboardImg from '../../assets/dashboard.png'
import requestImg from '../../assets/request.png'
import userImg from '../../assets/user.png'
import rewardImg from '../../assets/reaward.png'
import productImg from '../../assets/product.png'
import historyImg from '../../assets/history.png'
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidenav">
      <a href="/dashboard" className="mt-5">
        <img className="logo-sidebar"
          src={logo} alt="logo"></img>
      </a>
      <NavLink className={({ isActive }) => isActive ? "active" : ''} to="/dashboard">
        <img title="dashboard" src={dashboardImg} alt="illustration" width="30" /> {' '}
        Dashboard
      </NavLink>
      <NavLink className={({ isActive }) => isActive ? "active" : ''} to="/requests">
        <img title="dashboard" src={requestImg} alt="illustration" width="30" />{' '}
        Requests
      </NavLink>
      <NavLink className={({ isActive }) => isActive ? "active" : ''} to="/users">
        <img title="dashboard" src={userImg} alt="illustration" width="30" />{' '}
        Users
      </NavLink>
      <NavLink className={({ isActive }) => isActive ? "active" : ''} to="/rewards">
        <img title="dashboard" src={rewardImg} alt="illustration" width="30" />{' '}
        Rewards
      </NavLink>
      <NavLink className={({ isActive }) => isActive ? "active" : ''} to="/products">
        <img title="dashboard" src={productImg} alt="illustration" width="30" />{' '}
        Products
      </NavLink>
      <NavLink className={({ isActive }) => isActive ? "active" : ''} to="/history">
        <img title="dashboard" src={historyImg} alt="illustration" width="30" />{' '}
        History
      </NavLink>
    </div>
  );
};

export default Sidebar;