import { ApexOptions } from 'apexcharts';
import dynamic from 'next/dynamic';
import React, { Component } from 'react';
const ReactTotalusers = dynamic(() => import('react-apexcharts'), { ssr: false });
const ReactBouncerate = dynamic(() => import('react-apexcharts'), { ssr: false });
const ReactSessionbydevice = dynamic(() => import('react-apexcharts'), { ssr: false });
const ReactTopCountries = dynamic(() => import('react-apexcharts'), { ssr: false });
const ReactAudienceReport = dynamic(() => import('react-apexcharts'), { ssr: false });
const ReactImpressions = dynamic(() => import('react-apexcharts'), { ssr: false });
const ReactClicks = dynamic(() => import('react-apexcharts'), { ssr: false });
const ReactSessionduration = dynamic(() => import('react-apexcharts'), { ssr: false });
const ReactTeammembers1 = dynamic(() => import('react-apexcharts'), { ssr: false });
const ReactTeammembers2 = dynamic(() => import('react-apexcharts'), { ssr: false });
const ReactTeammembers3 = dynamic(() => import('react-apexcharts'), { ssr: false });
const ReactTeammembers4 = dynamic(() => import('react-apexcharts'), { ssr: false });
const ReactTeammembers5 = dynamic(() => import('react-apexcharts'), { ssr: false });
const ReactProjectAnalysis = dynamic(() => import('react-apexcharts'), { ssr: false });
const ReactPerformancebycategory = dynamic(() => import('react-apexcharts'), { ssr: false });
const ReactJobsSummary = dynamic(() => import('react-apexcharts'), { ssr: false });
const ReactTotalInvested = dynamic(() => import('react-apexcharts'), { ssr: false });
const ReactNumberofInvested = dynamic(() => import('react-apexcharts'), { ssr: false });
const ReactPortfoliovalue = dynamic(() => import('react-apexcharts'), { ssr: false });
const ReactReturnsrate = dynamic(() => import('react-apexcharts'), { ssr: false });
const ReactTotalinvestments = dynamic(() => import('react-apexcharts'), { ssr: false });
const ReactEarningsreport = dynamic(() => import('react-apexcharts'), { ssr: false });
const ReactPayouts = dynamic(() => import('react-apexcharts'), { ssr: false });
const ReactWatertracking = dynamic(() => import('react-apexcharts'), { ssr: false });
const ReactSleeptracking = dynamic(() => import('react-apexcharts'), { ssr: false });
interface spark3 {
	options?: ApexOptions,
	width?: string | number,
	height?: string | number,
	series?: ApexOptions['series'],
	[key: string]: any
	label?: XAxisAnnotations
	endingShape?: string
}
export class Totalusers extends Component<{}, spark3> {
    constructor(props: {}) {
        super(props);

        this.state = {
            series: [{
                name: 'Value',
                data: [0, 21, 54, 38, 56, 24, 65]
            }],
            options: {
                chart: {
                    type: 'line',
                    height: 40,
                    width: 120,
                    sparkline: {
                        enabled: true
                    },
                    dropShadow: {
                        enabled: true,
                        enabledOnSeries: undefined,
                        top: 0,
                        left: 0,
                        blur: 3,
                        color: '#000',
                        opacity: 0.1
                    }
                },
                grid: {
                    show: false,
                    xaxis: {
                        lines: {
                            show: false
                        }
                    },
                    yaxis: {
                        lines: {
                            show: false
                        }
                    },
                },
                stroke: {
                    show: true,
                    curve: 'straight',
                    lineCap: 'butt',
                    colors: undefined,
                    width: 1.5,
                    dashArray: 0,
                },
                fill: {
                },
                yaxis: {
                    min: 0,
                    show: false,
                    axisBorder: {
                        show: false
                    },
                },
                xaxis: {
                    axisTicks: {
                        show: false
                    },
                    axisBorder: {
                        show: false
                    }
                },
                colors: ['#23b7e5'],
            }

        };
    }

    render() {
        return (
            <div>
                <ReactTotalusers options={this.state.options} series={this.state.series} type="line" height={40} width={120} />
            </div>

        );
    }
}
export class Bouncerate extends Component<{}, spark3> {
    constructor(props:{}) {
        super(props);

        this.state = {
            series: [{
                name: 'Value',
                data: [54, 38, 56, 35, 65, 43, 53, 45, 62, 80, 35, 48]
            }],
            options: {
                chart: {
                    type: 'line',
                    height: 45,
                    width:296,
                    sparkline: {
                        enabled: true
                    },
                    dropShadow: {
                        enabled: true,
                        enabledOnSeries: undefined,
                        top: 0,
                        left: 0,
                        blur: 1,
                        color: '#fff',
                        opacity: 0.05
                    }
                },
                stroke: {
                    show: true,
                    curve: 'smooth',
                    lineCap: 'butt',
                    colors: undefined,
                    width: 2,
                    dashArray: 0,
                },
                fill: {

                },
                yaxis: {
                    min: 0,
                    show: false,
                    axisBorder: {
                        show: false
                    },
                },
                xaxis: {
                    axisBorder: {
                        show: false
                    },
                },
                colors: ["rgba(132, 90, 223, 0.1)"],
                tooltip: {
                    enabled: false,
                }
            }

        };
    }

    render() {
        return (
            <div>
                <ReactBouncerate options={this.state.options} series={this.state.series} type="line" height={45}  width={"100%"} />
            </div>

        );
    }
}
export class Sessionbydevice extends Component<{}, spark3> {
    constructor(props:{}) {
        super(props);

        this.state = {
            series: [1754, 1234, 878, 270],
            options: {

                labels: ["Mobile", "Tablet", "Desktop", "Others"],
                chart: {
                    height: 257,
                    type: 'donut',
                },
                dataLabels: {
                    enabled: false,
                },

                legend: {
                    show: false,
                },
                stroke: {
                    show: true,
                    curve: 'smooth',
                    lineCap: 'round',
                    colors: ["#fff"],
                    width: 0,
                    dashArray: 0,
                },
                plotOptions: {
                    pie: {
                        expandOnClick: false,
                        donut: {
                            size: '80%',
                            background: 'transparent',
                            labels: {
                                show: true,
                                name: {
                                    show: true,
                                    fontSize: '20px',
                                    color: '#495057',
                                    offsetY: -4
                                },
                                value: {
                                    show: true,
                                    fontSize: '18px',
                                    color: undefined,
                                    offsetY: 8,
                                    formatter: function (val) {
                                        return val + "%";
                                    }
                                },
                                total: {
                                    show: true,
                                    showAlways: true,
                                    label: 'Total',
                                    fontSize: '22px',
                                    fontWeight: 600,
                                    color: '#495057',
                                }

                            }
                        }
                    }
                },
                colors: ["rgba(132, 90, 223, 1)", "rgba(35, 183, 229, 1)", "rgba(38, 191, 148, 1)", "rgba(245, 184, 73, 1)",],
            }

        };
    }

    render() {
        return (
            <div>
                <ReactSessionbydevice options={this.state.options} series={this.state.series} type="donut" height={257} width={"100%"}/>
            </div>

        );
    }
}
export class TopCountries extends Component<{}, spark3> {
    constructor(props:{}) {
        super(props);

        this.state = {
            series: [
                {
                    name: 'Session',
                    data: [24, 23, 20, 25, 27, 26, 24, 23, 23, 25, 23, 23],
                    type: 'line',
                },
                {
                    name: 'Bounce Rate',
                    data: [20, 23, 26, 22, 20, 26, 28, 26, 22, 27, 25, 26],
                    type: 'bar',
                },
            ],
            options: {
                chart: {
                    height: 308,
                    zoom: {
                        enabled: false
                    },
                },
                dataLabels: {
                    enabled: false,
                },
                grid: {
                    borderColor: '#f1f1f1',
                    strokeDashArray: 3
                },
                legend: {
                    show: true,
                    position: 'top',
                },
                plotOptions: {
                    bar: {
                        borderRadius: 5,
                        columnWidth: "40%",
                        dataLabels: {
                            position: 'top', // top, center, bottom
                        },
                    }
                },
                colors: ["rgb(132, 90, 223)", "#ededed"],
                stroke: {
                    curve: ['smooth', 'stepline'],
                    width: [2, 0],
                },
                xaxis: {
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    axisBorder: {
                        color: '#e9e9e9',
                    },
                }
            }

        };
    }

    render() {
        return (
            <div>
                <ReactTopCountries options={this.state.options} series={this.state.series} type="line" height={345} width={"100%"}/>
            </div>

        );
    }
}
export class AudienceReport extends Component<{}, spark3> {
    constructor(props:{}) {
        super(props);

        this.state = {
            series: [
                {
                    name: 'Views',
                    type: 'column',
                    data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 45, 35]
                },
                {
                    name: 'Followers',
                    type: 'line',
                    data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43, 27]
                },
            ],
            options: {
                chart: {
                    toolbar: {
                        show: false
                    },
                    type: 'line',
                    height: 250,
                },
                grid: {
                    borderColor: '#f1f1f1',
                    strokeDashArray: 3
                },
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    width: [1, 1.1],
                    curve: ['straight', 'smooth'],
                },
                legend: {
                    show: true,
                    position: 'top',
                },
                xaxis: {
                    axisBorder: {
                        color: '#e9e9e9',
                    },
                },
                plotOptions: {
                    bar: {
                        columnWidth: "20%",
                        borderRadius: 2
                    }
                },
                colors: ["rgba(132, 90, 223, 1)", '#23b7e5'],
            }

        };
    }

    render() {
        return (
            <div>
                <ReactAudienceReport options={this.state.options} series={this.state.series} type="line" height={257} width={"100%"} />
            </div>

        );
    }
}
export class Impressions extends Component<{}, spark3> {
    constructor(props:{}) {
        super(props);

        this.state = {
            series: [48],
            options: {
                chart: {
                    height: 120,
                    width: 100,
                    type: "radialBar",
                },
                colors: ["#23b7e5"],
                plotOptions: {
                    radialBar: {
                        hollow: {
                            margin: 0,
                            size: "50%",
                            background: "#fff"
                        },
                        dataLabels: {
                            name: {
                                offsetY: -10,
                                color: "#4b9bfa",
                                fontSize: "10px",
                                show: false
                            },
                            value: {
                                offsetY: 5,
                                color: "#4b9bfa",
                                fontSize: "12px",
                                show: true,
                                fontWeight: 800
                            }
                        }
                    }
                },
                stroke: {
                    lineCap: "round"
                },
                labels: ["Followers"]
            }

        };
    }

    render() {
        return (
        
                <ReactImpressions options={this.state.options} series={this.state.series} type="radialBar" width={150} height={120} />
          
        );
    }
}
export class Clicks extends Component<{}, spark3> {
    constructor(props:{}) {
        super(props);

        this.state = {
            series: [65],
            options: {
                chart: {
                    height: 120,
                    width: 100,
                    type: "radialBar",
                },
                colors: ["#f7b731"],
                plotOptions: {
                    radialBar: {
                        hollow: {
                            margin: 0,
                            size: "50%",
                            background: "#fff"
                        },
                        dataLabels: {
                            name: {
                                offsetY: -10,
                                color: "#4b9bfa",
                                fontSize: "10px",
                                show: false
                            },
                            value: {
                                offsetY: 5,
                                color: "#4b9bfa",
                                fontSize: "12px",
                                show: true,
                                fontWeight: 800
                            }
                        }
                    }
                },
                stroke: {
                    lineCap: "round"
                },
                labels: ["Views"]
            }

        };
    }

    render() {
        return (
           
                <ReactClicks options={this.state.options} series={this.state.series} type="radialBar" width={150} height={120} />
           

        );
    }
}
export class Sessionduration extends Component<{}, spark3> {
    constructor(props:{}) {
        super(props);

        this.state = {
            series: [{
                name: 'New Users',
                data: [32, 15, 63, 51, 36, 62, 99, 42, 78, 76, 32, 120],
            }, {
                name: 'Sessions',
                data: [56, 58, 38, 50, 64, 45, 55, 32, 15, 63, 51, 136]
            }, {
                name: 'Avg Session Duration',
                data: [48, 29, 50, 69, 20, 59, 52, 12, 48, 28, 17, 98]
            }],
            options: {

                chart: {
                    height: 385,
                    type: 'line',
                    toolbar: {
                        show: false,
                    },
                    background: 'none',
                },
                grid: {
                    borderColor: '#f2f6f7',
                },
                colors: ["rgb(132, 90, 223)", "#23b7e5", "#f5b849"],
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'straight',
                    width: 3
                },
                legend: {
                    show: true,
                    position: 'top',
                },
                xaxis: {
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    axisBorder: {
                        show: false,
                        color: 'rgba(119, 119, 142, 0.05)',
                        offsetX: 0,
                        offsetY: 0,
                    },
                    axisTicks: {
                        show: false,
                        borderType: 'solid',
                        color: 'rgba(119, 119, 142, 0.05)',
                        offsetX: 0,
                        offsetY: 0
                    },
                    labels: {
                        rotate: -90,
                    }
                },
                yaxis: {
                    show: false,
                    axisBorder: {
                        show: false,
                    },
                    axisTicks: {
                        show: false,
                    }
                },
                tooltip: {
                    x: {
                        format: 'dd/MM/yy HH:mm'
                    },
                },
            }

        };
    }

    render() {
        return (
            <div>
                <ReactSessionduration options={this.state.options} series={this.state.series} type="line" height={435} width={"100%"} />
            </div>

        );
    }
}
export class Teammembers1 extends Component<{}, spark3> {
    constructor(props:{}) {
        super(props);

        this.state = {
            series: [{
                name: 'Value',
                data: [54, 38, 56, 24, 65]
            }],
            options: {

                chart: {
                    type: 'line',
                    height: 20,
                    width: 80,
                    sparkline: {
                        enabled: true
                    },
                    dropShadow: {
                        enabled: true,
                        enabledOnSeries: undefined,
                        top: 0,
                        left: 0,
                        blur: 3,
                        color: '#000',
                        opacity: 0.1
                    }
                },
                grid: {
                    show: false,
                    xaxis: {
                        lines: {
                            show: false
                        }
                    },
                    yaxis: {
                        lines: {
                            show: false
                        }
                    },
                },
                stroke: {
                    show: true,
                    curve: 'smooth',
                    lineCap: 'butt',
                    colors: undefined,
                    width: 1.5,
                    dashArray: 0,
                },
                fill: {

                },
                series: [{
                    name: 'Value',
                    data: [54, 38, 56, 24, 65]
                }],
                yaxis: {
                    min: 0,
                    show: false,
                    axisBorder: {
                        show: false
                    },
                },
                xaxis: {
                    axisTicks: {
                        show: false
                    },
                    axisBorder: {
                        show: false
                    }
                },
                colors: ['#09ad95'],
            }

        };
    }

    render() {
        return (
            <div>
                <ReactTeammembers1 options={this.state.options} series={this.state.series} type="line" height={20} width={80} />
            </div>

        );
    }
}
export class Teammembers2 extends Component<{}, spark3> {
    constructor(props:{}) {
        super(props);

        this.state = {
            series: [{
                name: 'Value',
                data: [24, 54, 15, 42, 16]
            }],
            options: {

                chart: {
                    type: 'line',
                    height: 20,
                    width: 80,
                    sparkline: {
                        enabled: true
                    },
                    dropShadow: {
                        enabled: true,
                        enabledOnSeries: undefined,
                        top: 0,
                        left: 0,
                        blur: 3,
                        color: '#000',
                        opacity: 0.1
                    }
                },
                grid: {
                    show: false,
                    xaxis: {
                        lines: {
                            show: false
                        }
                    },
                    yaxis: {
                        lines: {
                            show: false
                        }
                    },
                },
                stroke: {
                    show: true,
                    curve: 'smooth',
                    lineCap: 'butt',
                    colors: undefined,
                    width: 1.5,
                    dashArray: 0,
                },
                fill: {

                },
                yaxis: {
                    min: 0,
                    show: false,
                    axisBorder: {
                        show: false
                    },
                },
                xaxis: {
                    axisTicks: {
                        show: false
                    },
                    axisBorder: {
                        show: false
                    }
                },

                colors: ['#fb6b27'],
            }

        };
    }

    render() {
        return (
            <div>
                <ReactTeammembers2 options={this.state.options} series={this.state.series} type="line" height={20} width={80} />
            </div>

        );
    }
}
export class Teammembers3 extends Component<{}, spark3> {
    constructor(props:{}) {
        super(props);

        this.state = {

            series: [{
                name: 'Value',
                data: [15, 42, 16, 44, 24]
            }],
            options: {

                chart: {
                    type: 'line',
                    height: 20,
                    width: 80,
                    sparkline: {
                        enabled: true
                    },
                    dropShadow: {
                        enabled: true,
                        enabledOnSeries: undefined,
                        top: 0,
                        left: 0,
                        blur: 3,
                        color: '#000',
                        opacity: 0.1
                    }
                },
                grid: {
                    show: false,
                    xaxis: {
                        lines: {
                            show: false
                        }
                    },
                    yaxis: {
                        lines: {
                            show: false
                        }
                    },
                },
                stroke: {
                    show: true,
                    curve: 'smooth',
                    lineCap: 'butt',
                    colors: undefined,
                    width: 1.5,
                    dashArray: 0,
                },
                yaxis: {
                    min: 0,
                    show: false,
                    axisBorder: {
                        show: false
                    },
                },
                xaxis: {
                    axisTicks: {
                        show: false
                    },
                    axisBorder: {
                        show: false
                    }
                },
                colors: ['#1170e4'],
            }

        };
    }

    render() {
        return (
            <div>
                <ReactTeammembers3 options={this.state.options} series={this.state.series} type="line" height={20} width={80} />
            </div>

        );
    }
}
export class Teammembers4 extends Component<{}, spark3> {
    constructor(props:{}) {
        super(props);

        this.state = {
            series: [{
                name: 'Value',
                data: [54, 38, 56, 24, 65]
            }],
            options: {

                chart: {
                    type: 'line',
                    height: 20,
                    width: 80,
                    sparkline: {
                        enabled: true
                    },
                    dropShadow: {
                        enabled: true,
                        enabledOnSeries: undefined,
                        top: 0,
                        left: 0,
                        blur: 3,
                        color: '#000',
                        opacity: 0.1
                    }
                },
                grid: {
                    show: false,
                    xaxis: {
                        lines: {
                            show: false
                        }
                    },
                    yaxis: {
                        lines: {
                            show: false
                        }
                    },
                },
                stroke: {
                    show: true,
                    curve: 'smooth',
                    lineCap: 'butt',
                    colors: undefined,
                    width: 1.5,
                    dashArray: 0,
                },
                fill: {

                },
                yaxis: {
                    min: 0,
                    show: false,
                    axisBorder: {
                        show: false
                    },
                },
                xaxis: {
                    axisTicks: {
                        show: false
                    },
                    axisBorder: {
                        show: false
                    }
                },
                colors: ['#e82646'],
            }

        };
    }

    render() {
        return (
            <div>
                <ReactTeammembers4 options={this.state.options} series={this.state.series} type="line" height={20} width={80} />
            </div>

        );
    }
}
export class Teammembers5 extends Component<{}, spark3> {
    constructor(props:{}) {
        super(props);

        this.state = {
            series: [{
                name: 'Value',
                data: [15, 42, 16, 44, 24]
            }],
            options: {
                chart: {
                    type: 'line',
                    height: 20,
                    width: 80,
                    sparkline: {
                        enabled: true
                    },
                    dropShadow: {
                        enabled: true,
                        enabledOnSeries: undefined,
                        top: 0,
                        left: 0,
                        blur: 3,
                        color: '#000',
                        opacity: 0.1
                    }
                },
                grid: {
                    show: false,
                    xaxis: {
                        lines: {
                            show: false
                        }
                    },
                    yaxis: {
                        lines: {
                            show: false
                        }
                    },
                },
                stroke: {
                    show: true,
                    curve: 'smooth',
                    lineCap: 'butt',
                    colors: undefined,
                    width: 1.5,
                    dashArray: 0,
                },
                fill: {

                },
                yaxis: {
                    min: 0,
                    show: false,
                    axisBorder: {
                        show: false
                    },
                },
                xaxis: {
                    axisTicks: {
                        show: false
                    },
                    axisBorder: {
                        show: false
                    }
                },
                colors: ['#f7b731'],
            }

        };
    }

    render() {
        return (
            <div>
                <ReactTeammembers5 options={this.state.options} series={this.state.series} type="line" height={20} width={80} />
            </div>

        );
    }
}
export class ProjectAnalysis extends Component<{}, spark3> {
    constructor(props:{}) {
        super(props);

        this.state = {
            series: [{
                name: 'Projects',
                type: 'column',
                data: [1.8, 2.5, 2.5, 1.5, 2.5, 2.8, 3.8]
            }, {
                name: 'Tasks',
                type: 'column',
                data: [1.1, 2.2, 3.1, 4, 4.1, 4.9, 6.5]
            }, {
                name: 'Revenue',
                type: 'line',
                data: [20, 29, 37, 35, 44, 43, 50],
            },
            ],
            options: {
                chart: {
                    toolbar: {
                        show: false
                    },
                    height: 280,
                    type: 'line',
                    stacked: false,
                    fontFamily: 'Poppins, Arial, sans-serif',
                },
                grid: {
                    borderColor: '#f5f4f4',
                    strokeDashArray: 3
                },
                dataLabels: {
                    enabled: false
                },
               
                xaxis: {
                    categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                },
                yaxis: [
                    {
                        show: true,
                        axisTicks: {
                            show: true,
                        },
                        axisBorder: {
                            show: false,
                            color: '#4eb6d0'
                        },
                        labels: {
                            style: {
                                colors: '#4eb6d0',
                            }
                        },
                       
                        // tooltip: {
                        //     enabled: true
                        // }
                    },
                    {
                        // seriesName: 'Projects',
                        opposite: true,
                        axisTicks: {
                            show: true,
                        },
                        axisBorder: {
                            show: false,
                        },
                        labels: {
                            style: {
                                colors: '#00E396',
                            }
                        },
                      
                    },
                    {
                        // seriesName: 'Revenue',
                        opposite: true,
                        axisTicks: {
                            show: true,
                        },
                        axisBorder: {
                            show: false,
                        },
                        labels: {
                            show: false,
                        },
                        title: {
                            text: undefined,
                        }
                    },
                ],
                tooltip: {
                    enabled: true,
                },
                legend: {
                    show: true,
                    position: 'top',
                    offsetX: 40,
                    fontSize: '13px',
                    fontWeight: 'normal',
                    labels: {
                        colors: '#acb1b1',
                    },
                  
                },
                stroke: {
                    width: [0, 0, 1.5],
                    curve: 'straight',
                    dashArray: [0, 0, 0],
                },
                plotOptions: {
                    bar: {
                        columnWidth: "35%",
                        borderRadius: 3
                    }
                },
                colors: ["rgb(132, 90, 223)", "#ededed", "#23b7e5"]
            }

        };
    }

    render() {
        return (
            <div>
                <ReactProjectAnalysis options={this.state.options} series={this.state.series} type="line" height={300} width={"100%"} />
            </div>

        );
    }
}
export class Performancebycategory extends Component<{}, spark3> {
    constructor(props:{}) {
        super(props);

        this.state = {
            series: [{
                name: 'Designing',
                data: [44, 55, 41, 67, 22, 43, 44, 55, 41, 67, 22, 43]
            }, {
                name: 'Development',
                data: [13, 23, 20, 8, 13, 27, 13, 23, 20, 8, 13, 27]
            }, {
                name: 'SEO',
                data: [11, 17, 15, 15, 21, 14, 11, 17, 15, 15, 21, 14]
            }],
            options: {

                chart: {
                    type: 'bar',
                    height: 310,
                    stacked: true,
                    toolbar: {
                        show: true
                    },
                    zoom: {
                        enabled: true
                    }
                },
                grid: {
                    borderColor: '#f1f1f1',
                    strokeDashArray: 3
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        legend: {
                            position: 'bottom',
                            offsetX: -10,
                            offsetY: 0
                        }
                    }
                }],
                colors: ["rgba(132, 90, 223, 1)", "rgba(132, 90, 223, 0.5)", "rgba(132, 90, 223, 0.2)"],
                legend: {
                    show: false,
                    position: 'top'
                },
                plotOptions: {
                    bar: {
                        columnWidth: "20%",
                    }
                },
                dataLabels: {
                    enabled: false
                },
                xaxis: {
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                },
                fill: {
                    opacity: 1
                }
            }

        };
    }

    render() {
        return (
            <div>
                <ReactPerformancebycategory options={this.state.options} series={this.state.series} type="bar" height={310} width={"100%"}/>
            </div>

        );
    }
}
export class JobsSummary extends Component<{}, spark3> {
    constructor(props:{}) {
        super(props);

        this.state = {
            series: [1754, 544, 682, 263],
            options: {

                labels: ["Published", "Private", "Closed", "On Hold"],
                chart: {
                    height: 250,
                    type: 'donut',
                },
                dataLabels: {
                    enabled: false,
                },

                legend: {
                    show: false,
                },
                stroke: {
                    show: true,
                    curve: 'smooth',
                    lineCap: 'round',
                    colors: ["#fff"],
                    width: 0,
                    dashArray: 0,
                },
                plotOptions: {

                    pie: {
                        expandOnClick: false,
                        donut: {
                            size: '70%',
                            background: 'transparent',
                            labels: {
                                show: true,
                                name: {
                                    show: true,
                                    fontSize: '20px',
                                    color: '#495057',
                                    offsetY: -4
                                },
                                value: {
                                    show: true,
                                    fontSize: '18px',
                                    color: undefined,
                                    offsetY: 8,
                                    formatter: function (val) {
                                        return val + "%";
                                    }
                                },
                                total: {
                                    show: true,
                                    showAlways: true,
                                    label: 'Total',
                                    fontSize: '22px',
                                    fontWeight: 600,
                                    color: '#495057',
                                }

                            }
                        }
                    }
                },
                colors: ["rgb(132, 90, 223)", "rgba(132, 90, 223, 0.7)", "rgba(132, 90, 223,0.4)", "rgba(132, 90, 223, 0.1)"],
            }

        };
    }

    render() {
        return (
            <div>
                <ReactJobsSummary options={this.state.options} series={this.state.series} type="donut" height={240} width={"100%"} />
            </div>

        );
    }
}
export class TotalInvested extends Component<{}, spark3> {
    constructor(props:{}) {
        super(props);

        this.state = {
            series: [{
                name: 'Value',
                data: [20, 14, 19, 10, 23, 20, 22, 9, 12]
            }],
            options: {

                chart: {
                    type: 'line',
                    height: 40,
                    width: 100,
                    sparkline: {
                        enabled: true
                    }
                },
                stroke: {
                    show: true,
                    curve: 'smooth',
                    lineCap: 'butt',
                    colors: undefined,
                    width: 1.5,
                    dashArray: 0,
                },
                fill: {
                    type: 'gradient',
                    gradient: {
                        opacityFrom: 0.9,
                        opacityTo: 0.9,
                        stops: [0, 98],
                    }
                },
                yaxis: {
                    min: 0,
                    show: false,
                    axisBorder: {
                        show: false
                    },
                },
                xaxis: {
                    axisBorder: {
                        show: false
                    },
                },
                tooltip: {
                    enabled: false,
                },
                colors: ["rgb(132, 90, 223)"],
            }

        };
    }

    render() {
        return (
            <div>
                <ReactTotalInvested options={this.state.options} series={this.state.series} type="line" height={40} width={"100"} />
            </div>

        );
    }
}
export class NumberofInvested extends Component<{}, spark3> {
    constructor(props:{}) {
        super(props);

        this.state = {
            series: [{
                name: 'Value',
                data: [20, 14, 19, 10, 23, 20, 22, 9, 12]
            }],
            options: {

                chart: {
                    type: 'line',
                    height: 40,
                    width: 100,
                    sparkline: {
                        enabled: true
                    }
                },
                stroke: {
                    show: true,
                    curve: 'smooth',
                    lineCap: 'butt',
                    colors: undefined,
                    width: 1.5,
                    dashArray: 0,
                },
                fill: {
                    type: 'gradient',
                    gradient: {
                        opacityFrom: 0.9,
                        opacityTo: 0.9,
                        stops: [0, 98],
                    }
                },

                yaxis: {
                    min: 0,
                    show: false,
                    axisBorder: {
                        show: false
                    },
                },
                xaxis: {
                    axisBorder: {
                        show: false
                    },
                },
                tooltip: {
                    enabled: false,
                },
                colors: ["rgb(14, 168, 186)"],
            }

        };
    }

    render() {
        return (
            <div>
                <ReactNumberofInvested options={this.state.options} series={this.state.series} type="line" height={40} width={"100"} />
            </div>

        );
    }
}
export class Portfoliovalue extends Component<{}, spark3> {
    constructor(props:{}) {
        super(props);

        this.state = {
            series: [{
                name: 'Value',
                data: [20, 14, 19, 10, 23, 20, 22, 9, 12]
            }],
            options: {

                chart: {
                    type: 'line',
                    height: 40,
                    width: 100,
                    sparkline: {
                        enabled: true
                    }
                },
                stroke: {
                    show: true,
                    curve: 'smooth',
                    lineCap: 'butt',
                    colors: undefined,
                    width: 1.5,
                    dashArray: 0,
                },
                fill: {
                    type: 'gradient',
                    gradient: {
                        opacityFrom: 0.9,
                        opacityTo: 0.9,
                        stops: [0, 98],
                    }
                },
                yaxis: {
                    min: 0,
                    show: false,
                    axisBorder: {
                        show: false
                    },
                },
                xaxis: {
                    axisBorder: {
                        show: false
                    },
                },
                tooltip: {
                    enabled: false,
                },
                colors: ["rgb(245, 184, 73)"],
            }

        };
    }

    render() {
        return (
            <div>
                <ReactPortfoliovalue options={this.state.options} series={this.state.series} type="line" height={40} width={"100"} />
            </div>

        );
    }
}
export class Returnsrate extends Component<{}, spark3> {
    constructor(props:{}) {
        super(props);

        this.state = {
            series: [{
                name: 'Value',
                data: [20, 14, 19, 10, 23, 20, 22, 9, 12]
            }],
            options: {

                chart: {
                    type: 'line',
                    height: 40,
                    width: 100,
                    sparkline: {
                        enabled: true
                    }
                },
                stroke: {
                    show: true,
                    curve: 'smooth',
                    lineCap: 'butt',
                    colors: undefined,
                    width: 1.5,
                    dashArray: 0,
                },
                fill: {
                    type: 'gradient',
                    gradient: {
                        opacityFrom: 0.9,
                        opacityTo: 0.9,
                        stops: [0, 98],
                    }
                },
                yaxis: {
                    min: 0,
                    show: false,
                    axisBorder: {
                        show: false
                    },
                },
                xaxis: {
                    axisBorder: {
                        show: false
                    },
                },
                tooltip: {
                    enabled: false,
                },
                colors: ["rgb(38, 191, 148)"],
            }

        };
    }

    render() {
        return (
            <div>
                <ReactReturnsrate options={this.state.options} series={this.state.series} type="line" height={40} width={"100"} />
            </div>

        );
    }
}
export class Totalinvestments extends Component<{}, spark3> {
    constructor(props:{}) {
        super(props);

        this.state = {
            series: [{
                'name': 'Invested',
                data: [
                    [1327359600000, 30.95],
                    [1327446000000, 31.34],
                    [1327532400000, 31.18],
                    [1327618800000, 31.05],
                    [1327878000000, 31.00],
                    [1327964400000, 30.95],
                    [1328050800000, 31.24],
                    [1328137200000, 31.29],
                    [1328223600000, 31.85],
                    [1328482800000, 31.86],
                    [1328569200000, 32.28],
                    [1328655600000, 32.10],
                    [1328742000000, 32.65],
                    [1328828400000, 32.21],
                    [1329087600000, 32.35],
                    [1329174000000, 32.44],
                    [1329260400000, 32.46],
                    [1329346800000, 32.86],
                    [1329433200000, 32.75],
                    [1329778800000, 32.54],
                    [1329865200000, 32.33],
                    [1329951600000, 32.97],
                    [1330038000000, 33.41],
                    [1330297200000, 33.27],
                    [1330383600000, 33.27],
                    [1330470000000, 32.89],
                    [1330556400000, 33.10],
                    [1330642800000, 33.73],
                    [1330902000000, 33.22],
                    [1330988400000, 31.99],
                    [1331074800000, 32.41],
                    [1331161200000, 33.05],
                    [1331247600000, 33.64],
                    [1331506800000, 33.56],
                    [1331593200000, 34.22],
                    [1331679600000, 33.77],
                    [1331766000000, 34.17],
                    [1331852400000, 33.82],
                    [1332111600000, 34.51],
                    [1332198000000, 33.16],
                    [1332284400000, 33.56],
                    [1332370800000, 33.71],
                    [1332457200000, 33.81],
                    [1332712800000, 34.40],
                    [1332799200000, 34.63],
                    [1332885600000, 34.46],
                    [1332972000000, 34.48],
                    [1333058400000, 34.31],
                    [1333317600000, 34.70],
                    [1333404000000, 34.31],
                    [1333490400000, 33.46],
                    [1333576800000, 33.59],
                    [1333922400000, 33.22],
                    [1334008800000, 32.61],
                    [1334095200000, 33.01],
                    [1334181600000, 33.55],
                    [1334268000000, 33.18],
                    [1334527200000, 32.84],
                    [1334613600000, 33.84],
                    [1334700000000, 33.39],
                    [1334786400000, 32.91],
                    [1334872800000, 33.06],
                    [1335132000000, 32.62],
                    [1335218400000, 32.40],
                    [1335304800000, 33.13],
                    [1335391200000, 33.26],
                    [1335477600000, 33.58],
                    [1335736800000, 33.55],
                    [1335823200000, 33.77],
                    [1335909600000, 33.76],
                    [1335996000000, 33.32],
                    [1336082400000, 32.61],
                    [1336341600000, 32.52],
                    [1336428000000, 32.67],
                    [1336514400000, 32.52],
                    [1336600800000, 31.92],
                    [1336687200000, 32.20],
                    [1336946400000, 32.23],
                    [1337032800000, 32.33],
                    [1337119200000, 32.36],
                    [1337205600000, 32.01],
                    [1337292000000, 31.31],
                    [1337551200000, 32.01],
                    [1337637600000, 32.01],
                    [1337724000000, 32.18],
                    [1337810400000, 31.54],
                    [1337896800000, 31.60],
                    [1338242400000, 32.05],
                    [1338328800000, 31.29],
                    [1338415200000, 31.05],
                    [1338501600000, 29.82],
                    [1338760800000, 30.31],
                    [1338847200000, 30.70],
                    [1338933600000, 31.69],
                    [1339020000000, 31.32],
                    [1339106400000, 31.65],
                    [1339365600000, 31.13],
                    [1339452000000, 31.77],
                    [1339538400000, 31.79],
                    [1339624800000, 31.67],
                    [1339711200000, 32.39],
                    [1339970400000, 32.63],
                    [1340056800000, 32.89],
                    [1340143200000, 31.99],
                    [1340229600000, 31.23],
                    [1340316000000, 31.57],
                    [1340575200000, 30.84],
                    [1340661600000, 31.07],
                    [1340748000000, 31.41],
                    [1340834400000, 31.17],
                    [1340920800000, 32.37],
                    [1341180000000, 32.19],
                    [1341266400000, 32.51],
                    [1341439200000, 32.53],
                    [1341525600000, 31.37],
                    [1341784800000, 30.43],
                    [1341871200000, 30.44],
                    [1341957600000, 30.20],
                    [1342044000000, 30.14],
                    [1342130400000, 30.65],
                    [1342389600000, 30.40],
                    [1342476000000, 30.65],
                    [1342562400000, 31.43],
                    [1342648800000, 31.89],
                    [1342735200000, 31.38],
                    [1342994400000, 30.64],
                    [1343080800000, 30.02],
                    [1343167200000, 30.33],
                    [1343253600000, 30.95],
                    [1343340000000, 31.89],
                    [1343599200000, 31.01],
                    [1343685600000, 30.88],
                    [1343772000000, 30.69],
                    [1343858400000, 30.58],
                    [1343944800000, 32.02],
                    [1344204000000, 32.14],
                    [1344290400000, 32.37],
                    [1344376800000, 32.51],
                    [1344463200000, 32.65],
                    [1344549600000, 32.64],
                    [1344808800000, 32.27],
                    [1344895200000, 32.10],
                    [1344981600000, 32.91],
                    [1345068000000, 33.65],
                    [1345154400000, 33.80],
                    [1345413600000, 33.92],
                    [1345500000000, 33.75],
                    [1345586400000, 33.84],
                    [1345672800000, 33.50],
                    [1345759200000, 32.26],
                    [1346018400000, 32.32],
                    [1346104800000, 32.06],
                    [1346191200000, 31.96],
                    [1346277600000, 31.46],
                    [1346364000000, 31.27],
                    [1346709600000, 31.43],
                    [1346796000000, 32.26],
                    [1346882400000, 32.79],
                    [1346968800000, 32.46],
                    [1347228000000, 32.13],
                    [1347314400000, 32.43],
                    [1347400800000, 32.42],
                    [1347487200000, 32.81],
                    [1347573600000, 33.34],
                    [1347832800000, 33.41],
                    [1347919200000, 32.57],
                    [1348005600000, 33.12],
                    [1348092000000, 34.53],
                    [1348178400000, 33.83],
                    [1348437600000, 33.41],
                    [1348524000000, 32.90],
                    [1348610400000, 32.53],
                    [1348696800000, 32.80],
                    [1348783200000, 32.44],
                    [1349042400000, 32.62],
                    [1349128800000, 32.57],
                    [1349215200000, 32.60],
                    [1349301600000, 32.68],
                    [1349388000000, 32.47],
                    [1349647200000, 32.23],
                    [1349733600000, 31.68],
                    [1349820000000, 31.51],
                    [1349906400000, 31.78],
                    [1349992800000, 31.94],
                    [1350252000000, 32.33],
                    [1350338400000, 33.24],
                    [1350424800000, 33.44],
                    [1350511200000, 33.48],
                    [1350597600000, 33.24],
                    [1350856800000, 33.49],
                    [1350943200000, 33.31],
                    [1351029600000, 33.36],
                    [1351116000000, 33.40],
                    [1351202400000, 34.01],
                    [1351638000000, 34.02],
                    [1351724400000, 34.36],
                    [1351810800000, 34.39],
                    [1352070000000, 34.24],
                    [1352156400000, 34.39],
                    [1352242800000, 33.47],
                    [1352329200000, 32.98],
                    [1352415600000, 32.90],
                    [1352674800000, 32.70],
                    [1352761200000, 32.54],
                    [1352847600000, 32.23],
                    [1352934000000, 32.64],
                    [1353020400000, 32.65],
                    [1353279600000, 32.92],
                    [1353366000000, 32.64],
                    [1353452400000, 32.84],
                    [1353625200000, 33.40],
                    [1353884400000, 33.30],
                    [1353970800000, 33.18],
                    [1354057200000, 33.88],
                    [1354143600000, 34.09],
                    [1354230000000, 34.61],
                    [1354489200000, 34.70],
                    [1354575600000, 35.30],
                    [1354662000000, 35.40],
                    [1354748400000, 35.14],
                    [1354834800000, 35.48],
                    [1355094000000, 35.75],
                    [1355180400000, 35.54],
                    [1355266800000, 35.96],
                    [1355353200000, 35.53],
                    [1355439600000, 37.56],
                    [1355698800000, 37.42],
                    [1355785200000, 37.49],
                    [1355871600000, 38.09],
                    [1355958000000, 37.87],
                    [1356044400000, 37.71],
                    [1356303600000, 37.53],
                    [1356476400000, 37.55],
                    [1356562800000, 37.30],
                    [1356649200000, 36.90],
                    [1356908400000, 37.68],
                    [1357081200000, 38.34],
                    [1357167600000, 37.75],
                    [1357254000000, 38.13],
                    [1357513200000, 37.94],
                    [1357599600000, 38.14],
                    [1357686000000, 38.66],
                    [1357772400000, 38.62],
                    [1357858800000, 38.09],
                    [1358118000000, 38.16],
                    [1358204400000, 38.15],
                    [1358290800000, 37.88],
                    [1358377200000, 37.73],
                    [1358463600000, 37.98],
                    [1358809200000, 37.95],
                    [1358895600000, 38.25],
                    [1358982000000, 38.10],
                    [1359068400000, 38.32],
                    [1359327600000, 38.24],
                    [1359414000000, 38.52],
                    [1359500400000, 37.94],
                    [1359586800000, 37.83],
                    [1359673200000, 38.34],
                    [1359932400000, 38.10],
                    [1360018800000, 38.51],
                    [1360105200000, 38.40],
                    [1360191600000, 38.07],
                    [1360278000000, 39.12],
                    [1360537200000, 38.64],
                    [1360623600000, 38.89],
                    [1360710000000, 38.81],
                    [1360796400000, 38.61],
                    [1360882800000, 38.63],
                    [1361228400000, 38.99],
                    [1361314800000, 38.77],
                    [1361401200000, 38.34],
                    [1361487600000, 38.55],
                    [1361746800000, 38.11],
                    [1361833200000, 38.59],
                    [1361919600000, 39.60],
                ]
            }],
            options: {

                chart: {
                    id: 'area-datetime',
                    fontFamily: 'Roboto, Arial, sans-serif',
                    type: 'area',
                    height: 320,
                    zoom: {
                        autoScaleYaxis: true
                    },
                    toolbar: {
                        show: false
                    }
                },
                grid: {
                    borderColor: '#f3f3f3',
                    strokeDashArray: 3
                },
                dataLabels: {
                    enabled: false
                },
                markers: {
                    size: 0,
                    // style: 'hollow',
                },
                xaxis: {
                    type: 'datetime',
                    min: new Date('01 Mar 2012').getTime(),
                    tickAmount: 6,
                },
                tooltip: {
                    x: {
                        format: 'dd MMM yyyy'
                    }
                },
                colors: ["rgb(132, 90, 223)"],
                stroke: {
                    width: [1.2],
                    curve: ['smooth']
                },
                fill: {
                    type: 'gradient',
                    gradient: {
                        shadeIntensity: 1,
                        opacityFrom: 0.5,
                        opacityTo: 0.7,
                        stops: [0, 100]
                    }
                },
            }

        };
    }

    render() {
        return (
            <div>
                <ReactTotalinvestments options={this.state.options} series={this.state.series} type="area" height={320} width={"100%"}/>
            </div>

        );
    }
}
export class Earningsreport extends Component<{}, spark3> {
    constructor(props:{}) {
        super(props);

        this.state = {
            series: [{
                name: "Earnings",
                data: [30, 25, 36, 30, 45, 35, 64, 51, 59, 36, 39, 51]
            }, {
                name: "Students",
                data: [33, 21, 32, 37, 23, 32, 47, 31, 54, 32, 20, 38]
            }],
            options: {
                chart: {
                    height: 340,
                    width:897,
                    type: "bar",
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    width: [1.1, 1.1],
                    show: true,
                    curve: ['smooth', 'smooth'],
                },
                grid: {
                    borderColor: '#f3f3f3',
                    strokeDashArray: 3
                },
                xaxis: {
                    axisBorder: {
                        color: 'rgba(119, 119, 142, 0.05)',
                    },
                },
                legend: {
                    show: false
                },
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                markers: {
                    size: 0
                },
                colors: ["rgb(132, 90, 223)", "#e9e9e9"],
                plotOptions: {
                    bar: {
                        columnWidth: "50%",
                        borderRadius: 2,
                    }
                },
            }

        };
    }

    render() {
        return (
            <div>
                <ReactEarningsreport options={this.state.options} series={this.state.series} type="bar" height={340} width={"100%"} />
            </div>

        );
    }
}
export class Payouts extends Component<{}, spark3> {
    constructor(props:{}) {
        super(props);

        this.state = {
            series: [{
                name: 'Paid',
                data: [55, 55, 42, 42, 55, 55, 38, 38, 53, 53, 35, 35],
                type: 'line',
            }, {
                name: 'UnPaid',
                data: [35, 35, 46, 46, 35, 35, 48, 48, 33, 33, 38, 38],
                type: "line",
            }],
            options: {
                chart: {
                    height: 270,
                    width:485,
                    toolbar: {
                        show: false,
                    },
                    background: 'none',
                },
                grid: {
                    borderColor: '#f2f6f7',
                },
                colors: ["rgb(132, 90, 223)", "rgba(230, 83, 60,0.5)"],
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'smooth',
                    width: 2,
                    dashArray: [0, 5],
                },
                legend: {
                    show: true,
                    position: 'top',
                },
                xaxis: {
                    axisBorder: {
                        show: false,
                        color: 'rgba(119, 119, 142, 0.05)',
                        offsetX: 0,
                        offsetY: 0,
                    },
                    axisTicks: {
                        show: false,
                        borderType: 'solid',
                        color: 'rgba(119, 119, 142, 0.05)',
                        offsetX: 0,
                        offsetY: 0
                    },
                    labels: {
                        rotate: -90,
                    }
                },
                yaxis: {
                    show: false,
                    axisBorder: {
                        show: false,
                    },
                    axisTicks: {
                        show: false,
                    }
                },
                tooltip: {
                    x: {
                        format: 'dd/MM/yy HH:mm'
                    },
                },
            }

        };
    }

    render() {
        return (
            <div>
                <ReactPayouts options={this.state.options} series={this.state.series} type="line" height={270} width={"100%"}  />
            </div>

        );
    }
}
export class Watertracking extends Component<{}, spark3> {
    constructor(props:{}) {
        super(props);

        this.state = {
            series: [{
                data: [98, 110, 80, 145, 105, 112, 87, 148, 102]
            }],
            options: {
                chart: {
                    height: 115,
                    type: 'area',
                    fontFamily: 'Roboto, Arial, sans-serif',
                    foreColor: '#5d6162',
                    zoom: {
                        enabled: false
                    },
                    sparkline: {
                        enabled: true
                    }
                },
                tooltip: {
                    enabled: true,
                    x: {
                        show: false
                    },
                    y: {
                        title: {
                            formatter: function () {
                                return '';
                            }
                        }
                    },
                    marker: {
                        show: false
                    }
                },
                dataLabels: {
                    enabled: false
                },
                title: {
                    text: undefined,
                },
                grid: {
                    borderColor: 'transparent',
                },
                xaxis: {
                    crosshairs: {
                        show: false,
                    }
                },
                colors: ["rgb(132, 90, 223)"],
                stroke: {
                    width: [1],
                },
                fill: {
                    type: 'gradient',
                    gradient: {
                        opacityFrom: 0.5,
                        opacityTo: 0.2,
                        stops: [0, 60],
                    }
                },
            }

        };
    }

    render() {
        return (
            <div>
                <ReactWatertracking options={this.state.options} series={this.state.series} type="area" height={115} width={"100%"} />
            </div>

        );
    }
}
export class Sleeptracking extends Component<{}, spark3> {
    constructor(props:{}) {
        super(props);

        this.state = {
            series: [{
                data: [102, 148, 87, 112, 105, 145, 80, 110, 98]
            }],
            options: {
                chart: {
                    height: 115,
                    type: 'area',
                    fontFamily: 'Roboto, Arial, sans-serif',
                    foreColor: '#5d6162',
                    zoom: {
                        enabled: false
                    },
                    sparkline: {
                        enabled: true
                    }
                },
                tooltip: {
                    enabled: true,
                    x: {
                        show: false
                    },
                    y: {
                        title: {
                            formatter: function () {
                                return '';
                            }
                        }
                    },
                    marker: {
                        show: false
                    }
                },
                dataLabels: {
                    enabled: false
                },
                title: {
                    text: undefined,
                },
                grid: {
                    borderColor: 'transparent',
                },
                xaxis: {
                    crosshairs: {
                        show: false,
                    }
                },
                colors: ["#64af6d"],
                stroke: {
                    width: [1],
                },
                fill: {
                    type: 'gradient',
                    gradient: {
                        opacityFrom: 0.5,
                        opacityTo: 0.2,
                        stops: [0, 60],
                    }
                },
            }

        };
    }

    render() {
        return (
            <div>
                <ReactSleeptracking options={this.state.options} series={this.state.series} type="area" height={115} width={"100%"} />
            </div>

        );
    }
}
