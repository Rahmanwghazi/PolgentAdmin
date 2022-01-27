import axios from "axios";

export const useGetAdminHistories = async () =>
    await axios
        .get("/admin/HistoryAdmin", {
            headers: {
                "Content-type": "application/json",
                Authorization: localStorage.getItem('token')
            }
        })
        .then((res) => res.data)
