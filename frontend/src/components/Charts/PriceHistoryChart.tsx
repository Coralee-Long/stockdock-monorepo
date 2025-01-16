import { ApexOptions } from 'apexcharts';
import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { mockPriceHistoryChartData } from "../../models/PriceHistoryChartData";

interface PriceHistoryState {
    series: {
        name: string;
        data: [number, number][];
    }[];
}

const PriceHistoryChart: React.FC = () => {
    // Initialize state using mock data
    const [state, setState] = useState<PriceHistoryState>({
        series: [
            {
                name: 'Price',
                // Use mock data to map timestamps and prices
                data: mockPriceHistoryChartData.priceHistory.map(({ timestamp, price }) => [timestamp, price]),
            },
        ],
    });

    // // Update the state
    // const updateState = () => {
    //     setState((prevState) => ({
    //         ...prevState,
    //         // Update the desired properties
    //     }));
    // };
    // updateState;

    const options: ApexOptions = {
        colors: ['#3C50E0'],
        chart: {
            fontFamily: 'Satoshi, sans-serif',
            height: 310,
            id: 'area-datetime',
            type: 'area',
            toolbar: {
                show: false,
            },
        },
        legend: {
            show: false,
            position: 'top',
            horizontalAlign: 'left',
        },
        stroke: {
            curve: 'straight',
            width: [1, 1],
        },

        dataLabels: {
            enabled: false,
        },

        markers: {
            size: 0,
        },

        labels: {
            show: false,
            position: 'top',
        } as any,

        xaxis: {
            type: 'datetime',
            tickAmount: 10,
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
        },

        tooltip: {
            x: {
                format: 'dd MMM yyyy',
            },
        },

        fill: {
            gradient: {
                enabled: true,
                opacityFrom: 0.55,
                opacityTo: 0,
            } as any,
        },

        grid: {
            strokeDashArray: 7,
            xaxis: {
                lines: {
                    show: true,
                },
            },
            yaxis: {
                lines: {
                    show: true,
                },
            },
        },

        responsive: [
            {
                breakpoint: 1024,
                options: {
                    chart: {
                        height: 300,
                    },
                },
            },
            {
                breakpoint: 1366,
                options: {
                    chart: {
                        height: 320,
                    },
                },
            },
        ],
    };

    return (
        <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-7">
            <div className="mb-5.5 flex flex-wrap items-center justify-between gap-2">
                <div>
                    <h4 className="text-title-sm2 font-bold text-black dark:text-white">
                        {mockPriceHistoryChartData.stockName}
                    </h4>
                </div>
                <div className="relative z-20 inline-block rounded">
                    <select className="relative z-20 inline-flex appearance-none rounded border border-stroke bg-transparent py-[5px] pl-3 pr-8 text-sm font-medium outline-none dark:border-strokedark">
                        {mockPriceHistoryChartData.timeSpans.map((span, index) => (
                            <option key={index} value={span} className="dark:bg-boxdark">
                                {span}
                            </option>
                        ))}
                    </select>
                    <span className="absolute right-3 top-1/2 z-10 -translate-y-1/2">
            <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
              <path
                  d="M8.61025 11.8872C8.46025 11.8872 8.33525 11.8372 8.21025 11.7372L2.46025 6.08723C2.23525 5.86223 2.23525 5.51223 2.46025 5.28723C2.68525 5.06223 3.03525 5.06223 3.26025 5.28723L8.61025 10.5122L13.9603 5.23723C14.1853 5.01223 14.5353 5.01223 14.7603 5.23723C14.9853 5.46223 14.9853 5.81223 14.7603 6.03723L9.01025 11.6872C8.88525 11.8122 8.76025 11.8872 8.61025 11.8872Z"
                  fill="#64748B"
              />
            </svg>
          </span>
                </div>
            </div>

            <div className="mb-3 flex flex-wrap gap-6">
                <div>
                    <p className="mb-1.5 text-sm font-medium">Invested Value</p>
                    <div className="flex items-center gap-2.5">
                        <p className="font-medium text-black dark:text-white">
                            $1,279.95
                        </p>
                        <p className="flex items-center gap-1 font-medium text-meta-3">
                            1,22%
                            <svg
                                className="fill-current"
                                width="11"
                                height="8"
                                viewBox="0 0 11 8"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M5.77105 0.0465078L10.7749 7.54651L0.767256 7.54651L5.77105 0.0465078Z"
                                    fill=""
                                />
                            </svg>
                        </p>
                    </div>
                </div>

                <div>
                    <p className="mb-1.5 text-sm font-medium">Total Returns</p>
                    <div className="flex items-center gap-2.5">
                        <p className="font-medium text-black dark:text-white">
                            $22,543.87
                        </p>
                        <p className="flex items-center gap-1 font-medium text-meta-3">
                            10.14%
                            <svg
                                className="fill-current"
                                width="11"
                                height="8"
                                viewBox="0 0 11 8"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M5.77105 0.0465078L10.7749 7.54651L0.767256 7.54651L5.77105 0.0465078Z"
                                    fill=""
                                />
                            </svg>
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <div id="chartThirteen" className="-ml-5">
                    <ReactApexChart
                        options={options}
                        series={state.series}
                        type="area"
                        height={310}
                    />
                </div>
            </div>
        </div>
    );
};

export default PriceHistoryChart;
