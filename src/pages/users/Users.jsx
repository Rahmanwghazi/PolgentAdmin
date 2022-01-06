import RectangleCard from "../../components/rectangle-card/RectangleCard"
import Sidebar from "../../components/sidebar/Sidebar"
import './Users.css'
import addButton from '../../assets/addbutton.png'
import { AddUserModal } from "../../components/modals/AddUserModal"
import axios from "axios"
import { useEffect, useState } from "react"

const Users = () => {

    const [usersData, setUsersData] = useState([])
    const [error, setError] = useState("");

    const apiUrl = "https://61d6b4d235f71e0017c2e77e.mockapi.io/users"

    useEffect(() => {
        const handleFetchData = async () => {
            try {
                const data = await axios.get(apiUrl);
                setUsersData(data.data);
            } catch (error) {
                setError(error);
            }
        }
        handleFetchData();
    }, []);

    console.log("usersData", usersData)
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
                            <img src={addButton} alt="illustration" width="20" style={{ marginLeft: 35 }} data-bs-toggle="modal" data-bs-target="#modalFormName" />
                            <AddUserModal />
                        </div>
                    </div>

                    {
                        Object.values(usersData).map(item => (
                            <div className="row">
                                <RectangleCard type={"user"} data={item} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Users