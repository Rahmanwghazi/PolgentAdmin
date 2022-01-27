import RectangleCard from "../../components/rectangle-card/RectangleCard"
import Sidebar from "../../components/sidebar/Sidebar"
import './Users.css'
import addButton from '../../assets/addbutton.png'
import { AddUserModal } from "../../components/modals/AddUserModal"
import { useGetUsers } from "../../hooks/useGetUsers"
import { useQuery } from "react-query"
import { Messaging } from "react-cssfx-loading/lib"
import { Navigate } from "react-router-dom"
import Navbar from "../../components/sidebar/Navbar"

const Users = () => {

    const { data, refetch, isRefetching } = useQuery("useGetUsers", useGetUsers)
    const isLogged = !!localStorage.getItem('token');

    const handleReRender = () => {
        refetch()
    };

    if (!isLogged) {
        alert("you are not logged in yet!")
        return (
            <Navigate to="/" />
        )
    }
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-3 d-none d-xxl-block">
                    <Sidebar />
                </div>
                <div className="col-md-3 d-xxl-none">
                    <Navbar />
                </div>
                <div className="col-md-9">
                    <div className="title-page row">
                        <div className="col-2">
                            <p>Users</p>
                        </div>
                        <div className="col-2">
                            <img src={addButton} alt="illustration" width="20" style={{ marginLeft: 35 }} data-bs-toggle="modal" data-bs-target="#modalFormName" />
                            <AddUserModal onReRender={handleReRender} />
                        </div>
                    </div>
                    {isRefetching ? <Messaging color="#FD7014" width="15px" height="15px" /> :
                        (data ?
                            Object.values(data.data)?.map(item => (
                                <div className="row">
                                    <RectangleCard type={"user"} data={item} />
                                </div>
                            )) :
                            <Messaging color="#FD7014" width="15px" height="15px" />
                        )}
                </div>
            </div>
        </div>
    )
}

export default Users