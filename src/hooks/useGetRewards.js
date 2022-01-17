import axios from "axios";

export const useGetRewards = async () =>
    await axios
    .get("/viewRedem", {
        headers: {
            "Content-type": "application/json",
        }
    })
    .then((res) => res.data)