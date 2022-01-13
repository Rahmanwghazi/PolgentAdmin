import axios from "axios";

export const useGetProducts = async () =>
    await axios
    .get("https://61d6b4d235f71e0017c2e77e.mockapi.io/products", {
        headers: {
            "Content-type": "application/json",
        }
    })
    .then((res) => res.data)