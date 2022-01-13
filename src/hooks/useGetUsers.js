import axios from "axios";

export const useGetUsers = async () =>
    await axios
    .get("https://61d6b4d235f71e0017c2e77e.mockapi.io/users", {
        headers: {
            "Content-type": "application/json",
        }
    })
    .then((res) => res.data)