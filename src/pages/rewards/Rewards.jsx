import Card from "../../components/card/Card"
import Sidebar from "../../components/sidebar/Sidebar"
import './Rewards.css'
import addButton from '../../assets/addbutton.png'
import { AddRewardModal } from "../../components/modals/AddRewardModal"
import { useEffect, useState } from "react"
import axios from "axios"
const Rewards = () => {
    const [rewardsData, setRewardsData] = useState([])

    const apiUrl = "https://61d6b4d235f71e0017c2e77e.mockapi.io/rewards"

    useEffect(() => {
        const handleFetchData = async () => {
            try {
                const data = await axios.get(apiUrl);
                setRewardsData(data.data);
            } catch (err) {
                setRewardsData(err.response?.data || err);
            }
        }
        handleFetchData();
    }, []);
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-3 d-none d-xxl-block">
                    <Sidebar />
                </div>
                <div className="col-md-9">
                    <div className="title-page row">
                        <div className="col-2">
                            <p>Rewards</p>
                        </div>
                        <div className="col-2">
                            <img src={addButton} alt="illustration" width="20" style={{ marginLeft: 35 }} data-bs-toggle="modal" data-bs-target="#modalFormName" />
                            <AddRewardModal />
                        </div>
                    </div>
                    <div className="row">
                    {
                        Object.values(rewardsData).map(item => (
                            <div className="col-md-4">
                                <Card type={"user"} data={item} />
                            </div>
                        ))
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Rewards