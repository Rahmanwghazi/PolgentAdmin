import axios from "axios";
import { useState } from "react";
import './Modal.css'

export const AddRewardModal = () => {
    const [state, setState] = useState("")
    const onChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        })
    }

    const onSubmit = e => {
        setState({
            ...state,
            category: "",
            company: "",
            name: "",
            img: "",
            point: "",
        })
        axios.post(`https://61d6b4d235f71e0017c2e77e.mockapi.io/rewards`, {state})
        .then(res => {
            console.log(res)
            console.log(res.data)
        })
    }

    return (
        <div className="modal fade mt-5" id="modalFormName" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-body">
                        {/* <button type="button" className="close btn-close mt-5" data-bs-dismiss="modal" aria-label="Close"></button> */}
                        <h5 className="label-modal edit">Add Reward</h5>
                        <div onSubmit={onSubmit}>
                            <div className="form-group">
                                <label>Category</label>
                                <select className="form-control" name="category" value={state.category} onChange={onChange} >
                                    <option value="" defaultValue >Select</option>
                                    <option value="Food">cash-out</option>
                                    <option value="Education">emoney</option>
                                    <option value="Sport">pulsa</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Company</label>
                                <select className="form-control" name="company" value={state.company} onChange={onChange} >
                                    <option value="" defaultValue >Select</option>
                                    <option value="Food">Telkomsel</option>
                                    <option value="Education">Indosat</option>
                                    <option value="Sport">Smartfren</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Title  </label>
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