import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";
import ApexCharts from "react-apexcharts";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "../atoms";

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
    const isDark = useRecoilValue(isDarkAtom);
    const {isLoading, data} = useQuery<IHistorical[]>(
        ["ohlcv", coinId], 
        () => fetchCoinHistory(coinId),
        {
            refetchInterval: 10000
        });

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
                            mode: isDark? "dark" : "light"
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
                            },
                            type:"datetime",
                            categories: data?.map((price) => price.time_close)
                        },
                        yaxis: {
                            show: false
                        },
                        fill: {
                            type: "gradient",
                            gradient: { gradientToColors:["#0be881"], stops: [0, 100] }
                        },
                        colors: ["#0fbcf9"],
                        tooltip: {
                            y: {
                                formatter: (value) => `$ ${value.toFixed(2)}`
                            }
                        }
                    }}
                />
            }
        </div>
    );
}

export default Chart;