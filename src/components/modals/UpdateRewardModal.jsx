import axios from "axios";
import { useState } from "react";
import { useMutation } from "react-query";
import { header } from "../../utils/headers";
import './Modal.css'

export const UpdateRewardModal = (props) => {
    
    const [state, setState] = useState(props.data)
    const [image, setImage] = useState("")

    let imgprev = state.img

    const onChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        })
    }

    const mutation = useMutation(state => {
        return axios.post(`/admin/updateRedem`, state, {
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
                    state.poin = state.poin / 1
                    state.nominalReward = state.nominalReward / 1
                    state.namaBank = "-"
                    mutation.mutate(state)
                })
                .catch(err => console.log(err))

        } else {
            state.id = props.data.id
            state.poin = state.poin / 1
            state.nominalReward = state.nominalReward / 1
            state.namaBank = "-"
            mutation.mutate(state)
        }

    }

    return (
        <div className="modal fade mt-5" id={`modalReward${props.data.id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-wrapper">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-body">
                            <h5 className="label-modal edit">Edit Reward</h5>
                            <div onSubmit={onSubmit}>
                                <div className="form-group">
                                    <label>Category</label>
                                    <select className="form-control form-field d-flex align-items-center" name="nameType" value={state.nameType} onChange={onChange} >
                                        <option value="" defaultValue >Select</option>
                                        <option value="cash out">cash out</option>
                                        <option value="emoney">emoney</option>
                                        <option value="pulsa">pulsa</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Description  </label>
                                    <input type="text" className="form-control form-field d-flex align-items-center" value={state.description} name="description" onChange={onChange} />
                                </div>
                                <div className="form-group" >
                                    <label>Image </label>
                                    <div className="row">
                                        <div className="col-md-10">
                                            <input type="file" className="form-control custom-file-input form-field align-items-center" accept="image/*" onChange={(e) => setImage(e.target.files[0])} />
                                        </div>
                                        <div className="col-md-2">
                                            <img src={imgprev} alt="preview" width={35} />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Nominal  </label>
                                    <input type="number" className="form-control form-field align-items-center" value={state.nominalReward} name="nominalReward" onChange={onChange} />
                                </div>
                                <div className="form-group">
                                    <label>point  </label>
                                    <input type="number" className="form-control form-field d-flex align-items-center" value={state.poin} name="poin" onChange={onChange} />
                                </div>
                                <button onClick={onSubmit} style={{ marginTop: "-20px" }} type="submit" className="btn btn-e mb-5" data-bs-dismiss="modal">
                                    Update
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}