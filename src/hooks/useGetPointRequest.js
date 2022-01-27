import axios from "axios";

export const useGetPointRequests = async () =>
    await axios
    .get("/admin/ViewRequest", {
        headers: {
            "Content-type": "application/json",
            Authorization: localStorage.getItem('token')
        }
    })
    .then((res) => res.data)
