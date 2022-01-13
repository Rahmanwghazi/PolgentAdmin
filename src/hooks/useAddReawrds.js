import axios from "axios";

export const useAddRewards = async () =>
    await axios
    .post("https://61d6b4d235f71e0017c2e77e.mockapi.io/rewards", {
        headers: {
            "Content-type": "application/json",
        }
    })
    .then((res) => res.data)