import axios from "axios";

export const useAddProduct = async () =>
    await axios
    .post("/products", {
        headers: {
            "Content-type": "application/json",
        }
    })
    .then((res) => res.data)