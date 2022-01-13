import axios from "axios";

export const useGetRewards = async () =>
    await axios
    .get("/rewards", {
        headers: {
            "Content-type": "application/json",
        }
    })
    .then((res) => res.data)