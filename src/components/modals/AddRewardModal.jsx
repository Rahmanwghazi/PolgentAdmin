import axios from "axios";
import { useState } from "react";
import { useMutation } from "react-query";
import { header } from "../../utils/headers";
import './Modal.css'

export const AddRewardModal = (props) => {
    const { onReRender } = props;
    const [state, setState] = useState("")
    const [image, setImage] = useState("");

    const onChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        })
    }

    const mutation = useMutation(state => {
        return axios.post(`/admin/addRedem`, state, {
            headers: header
        }).then(() => onReRender())
    })

    const onSubmit = e => {
        const data = new FormData()
        data.append("file", image)
        data.append("upload_preset", "lw7i8fyd")
        data.append("cloud_name", "chcpyto")
        axios.post(`https://api.cloudinary.com/v1_1/chcpyto/image/upload`, data)
            .then(res => {
                state.img = res.data.url
                state.namaBank = "-"
                state.poin = state.poin / 1
                state.nominalReward = state.nominalReward / 1
                mutation.mutate(state)
            })
            .catch(err => console.log(err))
        setState({
            ...state,
            nameType: "",
            namaInstansi: "",
            description: "",
            nominalReward: "",
            img: "",
            poin: ""
        })
    }

    return (
        <div className="modal fade mt-5" id="modalFormName" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-wrapper">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-body">
                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button> 
                            <h5 className="label-modal edit">Add Reward</h5>
                            <div onSubmit={onSubmit}>
                                <div className="form-group">
                                    <label>Category</label>
                                    <select className="form-control form-field d-flex align-items-center" name="nameType" value={state.nameType} onChange={onChange} >
                                        <option value="" defaultValue >Select</option>
                                        <option value="Cash-Out">cash-out</option>
                                        <option value="emoney">emoney</option>
                                        <option value="Pulsa">pulsa</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Title  </label>
                                    <input type="text" className="form-control form-field d-flex align-items-center" value={state.description} name="description" onChange={onChange} />
                                </div>
                                <div className="form-group" >
                                    <label>Image </label>
                                    <input type="file" className="form-control form-field d-flex align-items-center" accept="image/*" onChange={(e) => setImage(e.target.files[0])}></input>
                                </div>
                                <div className="form-group">
                                    <label>Nominal  </label>
                                    <input type="number" className="form-control form-field d-flex align-items-center" value={state.nominalReward} name="nominalReward" onChange={onChange} />
                                </div>
                                <div className="form-group">
                                    <label>Point  </label>
                                    <input type="number" className="form-control form-field d-flex align-items-center" value={state.poin} name="poin" onChange={onChange} />
                                </div>
                                <button onClick={onSubmit} style={{ marginTop: "-20px" }} type="submit" className="btn btn-e mb-5" data-bs-dismiss="modal">
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}