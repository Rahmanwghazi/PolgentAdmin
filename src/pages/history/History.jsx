import Sidebar from "../../components/sidebar/Sidebar"
import './History.css'
import { Navigate } from "react-router-dom"
import { useQuery } from "react-query"
import { Messaging } from "react-cssfx-loading/lib"
import { useGetPointRequests } from "../../hooks/useGetPointRequest";
import { extractDate } from "../../utils/dateFormatter"
import { useRef, useState } from "react"
import ReactToPrint from "react-to-print";
import Navbar from "../../components/sidebar/Navbar"

const History = () => {

    const { data: pointRequestData } = useQuery("useGetPointRequests", useGetPointRequests)
    const [q, setQ] = useState("")
    let componentRef = useRef();


    const isLogged = !!localStorage.getItem('token');
    if (!isLogged) {
        alert("you are not logged in yet!")
        return (
            <Navigate to="/" />
        )
    }

    function search(rows) {
        return rows.filter((row) =>
            row.User.Toko.toLowerCase().indexOf(q) > -1 ||
            row.CreatedAt.toLowerCase().indexOf(q) > -1 ||
            row.Status.toLowerCase().indexOf(q) > -1
        );
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
                            <p>History</p>
                        </div>
                    </div>
                    <div className="text-white mb-3">
                        <div className="card-body box-history">
                            <div className="row">
                                <div className="col-10">
                                    <input className="form-field" type="text" placeholder="search data" value={q} onChange={(e) => setQ(e.target.value)}></input>
                                </div>
                                <div className="col-2">
                                    <ReactToPrint
                                        trigger={() => <button type="button" style={{"width": "120px"}} className="btn btn-warning">Print</button>}
                                        content={() => componentRef}
                                    />
                                </div>
                            </div>
                            <table className="table table-hover" ref={(el) => (componentRef = el)}>
                                <thead>
                                    <tr>
                                        <th scope="col">ID</th>
                                        <th scope="col">Client</th>
                                        <th scope="col">Date Requested</th>
                                        <th scope="col">Product</th>
                                        <th scope="col">Poin</th>
                                        <th scope="col">Status</th>
                                    </tr>
                                </thead>
                                {pointRequestData ?
                                    Object.values(search(pointRequestData.data))?.map(data => {
                                        return (
                                            <>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">{data.Id}</th>
                                                        <th scope="row">{data.User.Toko}</th>
                                                        <th scope="row">{extractDate(data.CreatedAt)}</th>
                                                        <th scope="row">{data.Product.NameProduct} x {data.Product.Amount} pcs</th>
                                                        <th scope="row">@{data.Product.Poin}</th>
                                                        <th scope="row">{data.Status} {data.Status === "Accepted" ? "by admin A " + extractDate(data.UpdatedAt) : "has not been processed"}</th>
                                                    </tr>
                                                </tbody>
                                            </>
                                        );
                                    }) :
                                    <Messaging color="#FD7014" width="15px" height="15px" />
                                }
                            </table>
                        </div>
                    </div>

                    <br></br>
                </div>
            </div>
        </div>
    )
}

export default History