import axios from "axios";
import { useState } from "react";
import './Modal.css'

export const AddProductModal = () => {
    const [state, setState] = useState("");
    const [image, setImage] = useState("");

    const onChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        })
    }

    const onSubmit = e => {
        const data = new FormData()
        data.append("file", image)
        data.append("upload_preset", "lw7i8fyd")
        data.append("cloud_name", "chcpyto")
        axios.post(`https://api.cloudinary.com/v1_1/chcpyto/image/upload`, data)
            .then(res => {
                state.image = res.data.url
                axios.post(`https://61d6b4d235f71e0017c2e77e.mockapi.io/products`, state)
                    .then(res => {
                        console.log(res.data)
                    })
                    .catch(err => console.log(err))
            })
            .catch(err => console.log(err))
        setState({
            ...state,
            image: "",
            name: "",
            point: "",
        })
    }

    return (
        <div className="modal fade mt-5" id="modalFormName" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-body">
                        {/* <button type="button" className="close btn-close mt-5" data-bs-dismiss="modal" aria-label="Close"></button> */}
                        <h5 className="label-modal edit">Add Product</h5>
                        <div onSubmit={onSubmit}>
                            <div className="form-group">
                                <label>Name  </label>
                                <input type="text" className="form-control" value={state.name} name="name" onChange={onChange} />
                            </div>
                            <div className="form-group" >
                                <label>Image </label>
                                {/* <input type="file" className="form-control" value={state.image} id="img" onChange={onChange} name="img" accept="image/*"></input> */}
                                <input type="file" className="form-control" accept="image/*" onChange={(e) => setImage(e.target.files[0])}></input>
                            </div>
                            <div className="form-group">
                                <label>point  </label>
                                <input type="number" className="form-control" value={state.point} name="point" onChange={onChange} />
                            </div>
                            <button onClick={onSubmit} style={{ marginTop: "-20px" }} type="submit" className="btn btn-e mb-5" data-bs-dismiss="modal">
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}