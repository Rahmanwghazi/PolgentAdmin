import Card from "../../components/card/Card"
import Sidebar from "../../components/sidebar/Sidebar"
import './Products.css'
import addButton from '../../assets/addbutton.png'
import { AddProductModal } from "../../components/modals/AddProductModal"
import { useEffect, useState } from "react"
import axios from "axios"

const Products = () => {
    const [productsData, setProductsData] = useState([])

    const apiUrl = "https://61d6b4d235f71e0017c2e77e.mockapi.io/products"

    useEffect(() => {
        const handleFetchData = async () => {
            try {
                const data = await axios.get(apiUrl);
                setProductsData(data.data);
            } catch (err) {
                setProductsData(err.response?.data || err);
            }
        }
        handleFetchData();
    }, []);
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-3 d-none d-xxl-block">
                    <Sidebar />
                </div>
                <div className="col-md-9">
                    <div className="title-page row">
                        <div className="col-2">
                            <p>Products</p>
                        </div>
                        <div className="col-2">
                            <img src={addButton} alt="illustration" width="20" style={{ marginLeft: 35 }} data-bs-toggle="modal" data-bs-target="#modalFormName" />
                            <AddProductModal />
                        </div>
                    </div>
                    <div className="row">
                    {
                        Object.values(productsData).map(item => (
                            <div className="col-md-4">
                                <Card type={"products"} data={item} />
                            </div>
                        ))
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products