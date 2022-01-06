import Card from "../../components/card/Card"
import Sidebar from "../../components/sidebar/Sidebar"
import './Products.css'

import addButton from '../../assets/addbutton.png'

import ip12pro from '../../assets/ip12pro.jpg'
import ip12promax from '../../assets/ip12promax.jpg'
import ip13mini from '../../assets/ip13mini.jpg'
import ip13 from '../../assets/ip13.jpg'
import { AddProductModal } from "../../components/modals/AddProductModal"

const Products = () => {
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
                        <div className="col-md-4">
                            <Card img={ip13mini} desc={"iPhone 13 mini"} point={"+10"} type={"products"}/>
                        </div>
                        <div className="col-md-4">
                            <Card img={ip13} desc={"iPhone 13"} point={"+12"} type={"products"}/>
                        </div>
                        <div className="col-md-4">
                            <Card img={ip12pro} desc={"iPhone 12 Pro"} point={"+15"} type={"products"} />
                        </div>
                        <div className="col-md-4">
                            <Card img={ip12promax} desc={"iPhone 12 Pro Max"} point={"+18"} type={"products"} />
                        </div>
                        <div className="col-md-4">
                            <Card img={ip12pro} desc={"other iPhone"} point={"+12"} type={"products"} />
                        </div>
                        <div className="col-md-4">
                            <Card img={ip12pro} desc={"iPhone too"} point={"+10"} type={"products"} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products