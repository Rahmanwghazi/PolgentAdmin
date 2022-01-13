import axios from "axios";

export const useGetUsers = async () =>
    await axios
    .get("/users", {
        headers: {
            "Content-type": "application/json",
        }
    })
    .then((res) => res.data)