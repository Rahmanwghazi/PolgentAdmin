import Card from "../../components/card/Card"
import Sidebar from "../../components/sidebar/Sidebar"
import './Products.css'
import addButton from '../../assets/addbutton.png'
import { AddProductModal } from "../../components/modals/AddProductModal"
import { useQuery } from "react-query"
import { useGetProducts } from "../../hooks/useGetProducts"
import { Messaging } from "react-cssfx-loading/lib"
import { Navigate } from "react-router-dom"
import { useState } from "react/cjs/react.development"

const Products = () => {

    const handleReRender = () => {
        setReRender(!reRender);
    };


    const [reRender, setReRender] = useState(false);
    const { data } = useQuery("useGetProducts", useGetProducts)
    console.log(reRender)

    const isLogged = !!localStorage.getItem('token');
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
                <div className="col-md-9">
                    <div className="title-page row">
                        <div className="col-2">
                            <p>Products {reRender === true ? "true" : "false"}</p>
                        </div>
                        <div className="col-2">
                            <img src={addButton} alt="illustration" width="20" style={{ marginLeft: 35 }} data-bs-toggle="modal" data-bs-target="#modalFormName" />
                            <AddProductModal onReRender={handleReRender} />
                        </div>
                    </div>
                    <div className="row">
                        {data ?
                            Object.values(data.data).map(item => (
                                <div className="col-md-4">
                                    <Card type={"products"} data={item} />
                                </div>
                            )) :
                            <Messaging color="#FD7014" width="15px" height="15px" />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products