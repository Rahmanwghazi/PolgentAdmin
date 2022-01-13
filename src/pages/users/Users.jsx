import RectangleCard from "../../components/rectangle-card/RectangleCard"
import Sidebar from "../../components/sidebar/Sidebar"
import './Users.css'
import addButton from '../../assets/addbutton.png'
import { AddUserModal } from "../../components/modals/AddUserModal"
import axios from "axios"
import { useEffect, useState } from "react"
import { useGetUsers } from "../../hooks/useGetUsers"
import { useQuery } from "react-query"
import { Messaging } from "react-cssfx-loading/lib"

const Users = () => {

    const { data } = useQuery("useGetUsers", useGetUsers)

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
                    {data ?
                        Object.values(data)?.map(item => (
                            <div className="row">
                                <RectangleCard type={"user"} data={item} />
                            </div>
                        )) :
                        <Messaging color="#FD7014" width="15px" height="15px" />
                    }
                </div>
            </div>
        </div>
    )
}

export default Users