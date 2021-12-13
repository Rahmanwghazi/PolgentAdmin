import RectangleCard from "../../components/rectangle-card/RectangleCard"
import Sidebar from "../../components/sidebar/Sidebar"
import './Users.css'
import addButton from '../../assets/addbutton.png'

const Users = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-3 d-none d-xxl-block">
                    <Sidebar />
                </div>
                <div className="col-md-9">
                    <div className="title-page row">
                        <div className="col-2">
                            <p>Users</p>
                        </div>
                        <div className="col-2">
                            <img src={addButton} alt="illustration" width="20" style={{ marginLeft: 35 }} />
                        </div>
                    </div>
                    <div className="row">
                        <RectangleCard />
                    </div>
                    <div className="row">
                        <RectangleCard />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Users