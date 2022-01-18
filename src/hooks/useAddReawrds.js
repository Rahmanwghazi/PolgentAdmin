import axios from "axios";

export const useAddRewards = async () =>
    await axios
    .post("/rewards", {
        headers: {
            "Content-type": "application/json",
            Authorization: localStorage.getItem('token')
        }
    })
    .then((res) => res.data)