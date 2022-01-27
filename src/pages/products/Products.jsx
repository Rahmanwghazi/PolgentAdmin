import Card from "../../components/card/Card"
import Sidebar from "../../components/sidebar/Sidebar"
import './Products.css'
import addButton from '../../assets/addbutton.png'
import { AddProductModal } from "../../components/modals/AddProductModal"
import { useQuery } from "react-query"
import { useGetProducts } from "../../hooks/useGetProducts"
import { Messaging } from "react-cssfx-loading/lib"
import { Navigate } from "react-router-dom"
import Navbar from "../../components/sidebar/Navbar"

const Products = () => {
    const { data, refetch, isRefetching } = useQuery("useGetProducts", useGetProducts)
    const handleReRender = () => {
        refetch()
    };


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
                <div className="col-md-3 d-xxl-none">
                    <Navbar />
                </div>
                <div className="col-md-9">
                    <div className="title-page row">
                        <div className="col-2">
                            <p>Products</p>
                           
                        </div>
                        <div className="col-2">
                            <img src={addButton} alt="illustration" width="20" style={{ marginLeft: 35 }} data-bs-toggle="modal" data-bs-target="#modalFormName" />
                            <AddProductModal onReRender={handleReRender} />
                        </div>
                    </div>
                    
                    <div className="row">
                    {isRefetching ? <Messaging color="#FD7014" width="15px" height="15px"/> :
                        (data ?
                            Object.values(data.data).map(item => (
                                <div className="col-md-4">
                                    <Card type={"products"} data={item} onReRender={handleReRender} />
                                </div>
                            )) :
                            <Messaging color="#FD7014" width="15px" height="15px" />
                        )
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products