import axios from "axios";

export const useGetUsers = async () =>
    await axios
    .get("/admin/viewUser", {
        headers: {
            "Content-type": "application/json",
            Authorization: localStorage.getItem('token')
        }
    })
    .then((res) => res.data)