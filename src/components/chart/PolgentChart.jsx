import { Chart } from "react-google-charts";
import { Messaging } from "react-cssfx-loading/lib";
import { useGetProducts } from "../../hooks/useGetProducts";
import { useGetRewards } from "../../hooks/useGetRewards";
import { useGetUsers } from "../../hooks/useGetUsers";
import { useQuery } from "react-query";



const PolgentChart = () => {
    const { data: dataProduct, isLoading: loadingProduct } = useQuery("useGetProducts", useGetProducts)
    const { data: dataReward, isLoading: loadingReward } = useQuery("useGetRewards", useGetRewards)
    const { data: dataUser, isLoading: loadingUser } = useQuery("useGetUsers", useGetUsers)

    if (loadingProduct || loadingReward || loadingUser) {
        return (
            <Messaging style={{ marginLeft: 70, marginTop: 80 }} color="#EEEEEE" width="15px" height="15px" />
        )
    }

    return (
        <Chart
            width={'430px'}
            height={'200px'}
            chartType="BarChart"
            data={[
                ['Type', 'amount'],
                ['Total Reward', dataReward.data.length],
                ['Total Product', dataProduct.data.length],
                ['Total User', dataUser.data.length],
            ]}
            options={{
                legend: 'none',
                chartArea: { width: "50%" },
                backgroundColor: '#EEEEEE',
                colors: ['#FF872E', '#FD7014'],
                hAxis: {
                    minValue: 0,
                },
                vAxis: {

                },
            }}
            rootProps={{ 'data-testid': '1' }}
        />
    );
};
export default PolgentChart;