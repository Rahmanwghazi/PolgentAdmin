import axios from "axios";
import { useState } from "react";
import './Modal.css'

export const UpdateProductModal = (props) => {
    const [state, setState] = useState(props.data)
    const [image, setImage] = useState("");

    let imgprev = state.image

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
        if (state.image == null) {
            axios.post(`https://api.cloudinary.com/v1_1/chcpyto/image/upload`, data)
                .then(res => {
                    state.image = res.data.url
                    axios.put(`https://61d6b4d235f71e0017c2e77e.mockapi.io/products/${props.data.id}`, state)
                        .then(res => {
                            console.log(res.data)
                        })
                        .catch(err => console.log(err))
                })
                .catch(err => console.log(err))
        } else {
            axios.put(`https://61d6b4d235f71e0017c2e77e.mockapi.io/products/${props.data.id}`, state)
                .then(res => {
                    console.log(res.data)
                })
                .catch(err => console.log(err))
        }

    }

    return (
        <div className="modal fade mt-5" id={`modalProduct${props.data.id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-body">
                        <h5 className="label-modal edit">Edit Product</h5>
                        <div onSubmit={onSubmit}>
                            <div className="form-group">
                                <label>Name  </label>
                                <input type="text" className="form-control" value={state.name} name="name" onChange={onChange} />
                            </div>
                            <div className="form-group" >
                                <label>Image </label>
                                <input type="file" className="form-control" accept="image/*" onChange={(e) => setImage(e.target.files[0])}></input>
                                <img src={imgprev} alt="preview" width={35} />
                                <p style={{ fontSize: 10 }}>{imgprev}</p>
                            </div>
                            <div className="form-group">
                                <label>point  </label>
                                <input type="number" className="form-control" value={state.point} name="point" onChange={onChange} />
                            </div>
                            <button onClick={onSubmit} style={{ marginTop: "-20px" }} type="submit" className="btn btn-e mb-5" data-bs-dismiss="modal">
                                Update
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}