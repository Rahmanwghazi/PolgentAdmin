import Card from "../../components/card/Card"
import Sidebar from "../../components/sidebar/Sidebar"
import './Products.css'
const Products = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-3 d-none d-xxl-block">
                    <Sidebar />
                </div>
                <div className="col-md-9">
                    <div className="title-page row">
                        <div className="col">
                            <p>Products</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <Card />
                        </div>
                        <div className="col-md-4">
                            <Card />
                        </div>
                        <div className="col-md-4">
                            <Card />
                        </div>
                        <div className="col-md-4">
                            <Card />
                        </div>
                        <div className="col-md-4">
                            <Card />
                        </div>
                        <div className="col-md-4">
                            <Card />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products