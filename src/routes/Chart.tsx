import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";
import ApexCharts from "react-apexcharts";

interface ChartProps {
    coinId: string;
}

interface IHistorical {
    time_open: number;
    time_close: number;
    open: string;
    high: string;
    low: string;
    close: string;
    volume: string;
    market_cap: number;
}

function Chart({coinId} : ChartProps){
    const {isLoading, data} = useQuery<IHistorical[]>(["ohlcv", coinId], () => fetchCoinHistory(coinId));

    return (
        <div>
            {isLoading? 
                "Loading chart..." : 
                <ApexCharts 
                    type="line" 
                    series={[
                        {
                            name: "Price",
                            data: data?.map(price => Number(price.close)) as number[],
                        }
                    ]}
                    options={{ 
                        theme: {
                            mode:"dark"
                        },
                        chart: {
                            height:300, 
                            width:500,
                            toolbar: {
                                show: false
                            },
                            background: "transparent"
                        },
                        stroke: {
                            curve: "smooth",
                            width:4
                        },
                        grid: {
                            show: false
                        },
                        xaxis: {
                            labels: {
                                show: false
                            },
                            axisBorder: {
                                show: false
                            },
                            axisTicks: {
                                show: false
                            }
                        },
                        yaxis: {
                            show: false
                        }
                    }}
                />
            }
        </div>
    );
}

export default Chart;