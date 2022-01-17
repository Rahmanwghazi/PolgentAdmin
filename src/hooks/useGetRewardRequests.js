import axios from "axios";

export const useGetRewardRequests = async () =>
    await axios
    .get("/admin/viewRedemUser", {
        headers: {
            "Content-type": "application/json",
            Authorization: localStorage.getItem('token')
        }
    })
    .then((res) => res.data)
