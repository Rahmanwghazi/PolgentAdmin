import axios from "axios";

export const useAddProduct = async () =>
    await axios
    .post("/admin/addProduct", {
        headers: {
            "Content-type": "application/json",
            Authorization: localStorage.getItem('token')
        }
    })
    .then((res) => res.data)

 