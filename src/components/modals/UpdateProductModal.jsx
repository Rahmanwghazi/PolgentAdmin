import axios from "axios";
import { useState } from "react";
import './Modal.css'

export const UpdateProductModal = (props) => {
    console.log("perrops2", props.data)
    const [state, setState] = useState(props.data)
    const onChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        })
    }

    const onSubmit = e => {
        setState({
            ...state,
            name: "",
            img: "",
            point: "",
        })
        axios.put(`https://61d6b4d235f71e0017c2e77e.mockapi.io/products/${props.data.id}`, state)
        .then(res => {
            console.log(res)
            console.log(res.data)
        })
    }

    return (
        <div className="modal fade mt-5" id={`modalProduct${props.data.id}`}tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                <input type="file" className="form-control" value={state.img} id="img" onChange={onChange} name="img" accept="image/*"></input>
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