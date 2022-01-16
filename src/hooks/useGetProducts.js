import axios from "axios";

export const useGetProducts = async () =>
    await axios
    .get("/viewProduct", {
        headers: {
            'Content-type': 'application/json',
        },
    })
    .then((res) => res.data)