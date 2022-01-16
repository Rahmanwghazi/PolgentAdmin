import axios from "axios";

export const useGetRewards = async () =>
    await axios
    .get("/admin/viewRedem", {
        headers: {
            "Content-type": "application/json",
        }
    })
    .then((res) => res.data)