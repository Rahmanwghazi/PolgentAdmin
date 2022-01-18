import axios from "axios";
import { useState } from "react";
import { useMutation } from "react-query";
import { header } from "../../utils/headers";
import './Modal.css'

export const UpdateProductModal = (props) => {
    const [state, setState] = useState(props.data)
    const [image, setImage] = useState("")

    state.productName = state.nameProduct

    let imgprev = state.img

    const onChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        })
    }

    const mutation = useMutation(state => {
        return axios.post(`/admin/updateProduct`, state, {
            headers: header
        }).then(res => {
            console.log(res.data)
        })
    })

    const onSubmit = e => {
        const data = new FormData()
        data.append("file", image)
        data.append("upload_preset", "lw7i8fyd")
        data.append("cloud_name", "chcpyto")
        if (image !== state.img && image) {
            axios.post(`https://api.cloudinary.com/v1_1/chcpyto/image/upload`, data)
                .then(res => {
                    state.img = res.data.url
                    state.id = props.data.id
                    state.productName = state.nameProduct
                    state.poin = state.poin / 1
                    mutation.mutate(state)
                })
                .catch(err => console.log(err))

        } else {
            state.id = props.data.id
            state.productName = state.nameProduct
            state.poin = state.poin / 1
            mutation.mutate(state)
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
                                <input type="text" className="form-control" value={state.nameProduct} name="nameProduct" onChange={onChange} />
                            </div>
                            <div className="form-group">
                                <label>Amount  </label>
                                <input type="text" className="form-control" value={state.amount} name="amount" onChange={onChange} />
                            </div>
                            <div className="form-group" >
                                <label>Image </label>
                                <div className="row">
                                    <div className="col-md-10">
                                        <input type="file" className="form-control custom-file-input" accept="image/*" onChange={(e) => setImage(e.target.files[0])} />
                                    </div>
                                    <div className="col-md-2">
                                        <img src={imgprev} alt="preview" width={35} />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>point  </label>
                                <input type="number" className="form-control" value={state.poin} name="poin" onChange={onChange} />
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