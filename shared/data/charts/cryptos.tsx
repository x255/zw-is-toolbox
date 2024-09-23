import { ApexOptions } from 'apexcharts';
import dynamic from 'next/dynamic';
import React, { Component } from 'react';
const ReactBTC = dynamic(() => import('react-apexcharts'), { ssr: false });
const ReactETH = dynamic(() => import('react-apexcharts'), { ssr: false });
const ReactDASH = dynamic(() => import('react-apexcharts'), { ssr: false });
const ReactLTC = dynamic(() => import('react-apexcharts'), { ssr: false });
const ReactXRS = dynamic(() => import('react-apexcharts'), { ssr: false });
const ReactGLM = dynamic(() => import('react-apexcharts'), { ssr: false });
const ReactMonero = dynamic(() => import('react-apexcharts'), { ssr: false });
const ReactEOS = dynamic(() => import('react-apexcharts'), { ssr: false });
const ReactStatistics = dynamic(() => import('react-apexcharts'), { ssr: false });
interface spark3 {
  options?: ApexOptions,
  width?: number;
  height?: string | number,
  series?: ApexOptions['series'],
  [key: string]:any
  label?: XAxisAnnotations
  color?: string | string[] | (string & string[]) | undefined
  endingShape?: string
  enabled?: boolean;
  yaxis?:any
}
export class BTC extends Component<{}, spark3> {
  constructor(props: {}) {
    super(props);

    this.state = {

      series: [
        {
          name: "Value",
          data: [54, 38, 56, 35, 65, 43, 53, 45, 62, 80, 35, 48],
        },
      ],

      options: {
        chart: {
          type: "area",
          height: 60,
          sparkline: {
            enabled: true,
          },
          dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 0,
            left: 0,
            blur: 1,
            color: "#fff",
            opacity: 0.05,
          },
        },
        stroke: {
          show: true,
          curve: "smooth",
          lineCap: "butt",
          colors: undefined,
          width: 1.5,
          dashArray: 0,
        },
        fill: {
          gradient: {
            //   enabled: false,
          },
        },
        yaxis: {
          min: 0,
          show: false,
          axisBorder: {
            show: false,
          },
        },
        xaxis: {
          axisBorder: {
            show: false,
          },
        },
        colors: ["rgba(132, 90, 223,0.5)"],
        tooltip: {
          enabled: false,
        },
      }

    };
  }

  render() {
    return (
      <ReactBTC options={this.state.options} series={this.state.series} type="area" height={60} width={"100%"} />

    );
  }
}

//ETH
export class ETH extends Component<{}, spark3> {
  constructor(props: {}) {
    super(props);

    this.state = {

      series: [
        {
          name: "Value",
          data: [54, 38, 56, 35, 65, 43, 53, 45, 62, 80, 35, 48],
        },
      ],

      options: {
        chart: {
          type: "area",
          height: 60,
          sparkline: {
            enabled: true,
          },
          dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 0,
            left: 0,
            blur: 1,
            color: "#fff",
            opacity: 0.05,
          },
        },
        stroke: {
          show: true,
          curve: "smooth",
          lineCap: "butt",
          colors: undefined,
          width: 1.5,
          dashArray: 0,
        },
        fill: {
          gradient: {
            //   enabled: false,
          },
        },
        yaxis: {
          min: 0,
          show: false,
          axisBorder: {
            show: false,
          },
        },
        xaxis: {
          axisBorder: {
            show: false,
          },
        },
        colors: ["rgba(35, 183, 229,0.5)"],
        tooltip: {
          enabled: false,
        },
      }

    };
  }

  render() {
    return (
      <ReactETH options={this.state.options} series={this.state.series} type="area" height={60} width={"100%"} />

    );
  }
}

//DASH
export class DASH extends Component<{}, spark3> {
  constructor(props: {}) {
    super(props);

    this.state = {
      series: [
        {
          name: "Value",
          data: [54, 38, 56, 35, 65, 43, 53, 45, 62, 80, 35, 48],
        },
      ],
      options: {
        chart: {
          type: "area",
          height: 60,
          sparkline: {
            enabled: true,
          },
          dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 0,
            left: 0,
            blur: 1,
            color: "#fff",
            opacity: 0.05,
          },
        },
        stroke: {
          show: true,
          curve: "smooth",
          lineCap: "butt",
          colors: undefined,
          width: 1.5,
          dashArray: 0,
        },
        fill: {
          gradient: {
            //   enabled: false,
          },
        },
        yaxis: {
          min: 0,
          show: false,
          axisBorder: {
            show: false,
          },
        },
        xaxis: {
          axisBorder: {
            show: false,
          },
        },
        colors: ["rgba(38, 191, 148,0.5)"],
        tooltip: {
          enabled: false,
        },
      }

    };
  }

  render() {
    return (
      <ReactDASH options={this.state.options} series={this.state.series} type="area" height={60} width={"100%"} />

    );
  }
}
//LTC
export class LTC extends Component<{}, spark3> {
  constructor(props: {}) {
    super(props);

    this.state = {
      series: [
        {
          name: "Value",
          data: [54, 38, 56, 35, 65, 43, 53, 45, 62, 80, 35, 48],
        },
      ],
      options: {
        chart: {
          type: "area",
          height: 60,
          sparkline: {
            enabled: true,
          },
          dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 0,
            left: 0,
            blur: 1,
            color: "#fff",
            opacity: 0.05,
          },
        },
        stroke: {
          show: true,
          curve: "smooth",
          lineCap: "butt",
          colors: undefined,
          width: 1.5,
          // ltcArray: 0,
        },
        fill: {
          gradient: {
            //   enabled: false,
          },
        },
        yaxis: {
          min: 0,
          show: false,
          axisBorder: {
            show: false,
          },
        },
        xaxis: {
          axisBorder: {
            show: false,
          },
        },
        colors: ["rgba(245, 184, 73,0.5)"],
        tooltip: {
          enabled: false,
        },
      }

    };
  }

  render() {
    return (
      <ReactLTC options={this.state.options} series={this.state.series} type="area" height={60} width={"100%"} />

    );
  }
}

//XRS
export class XRS extends Component<{}, spark3> {
  constructor(props: {}) {
    super(props);

    this.state = {
      series: [
        {
          name: "Value",
          data: [54, 38, 56, 35, 65, 43, 53, 45, 62, 80, 35, 48],
        },
      ],
      options: {
        chart: {
          type: "area",
          height: 60,
          sparkline: {
            enabled: true,
          },
          dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 0,
            left: 0,
            blur: 1,
            color: "#fff",
            opacity: 0.05,
          },
        },
        stroke: {
          show: true,
          curve: "smooth",
          lineCap: "butt",
          colors: undefined,
          width: 1.5,
          // ltcArray: 0,
        },
        fill: {
          gradient: {
            //   enabled: false,
          },
        },

        yaxis: {
          min: 0,
          show: false,
          axisBorder: {
            show: false,
          },
        },
        xaxis: {
          axisBorder: {
            show: false,
          },
        },
        colors: ["rgba(231, 145, 188,0.5)"],
        tooltip: {
          enabled: false,
        },
      }

    };
  }

  render() {
    return (
      <ReactXRS options={this.state.options} series={this.state.series} type="area" height={60} width={"100%"} />

    );
  }
}

//GLM
export class GLM extends Component<{}, spark3> {
  constructor(props: {}) {
    super(props);

    this.state = {
      series: [
        {
          name: "Value",
          data: [54, 38, 56, 35, 65, 43, 53, 45, 62, 80, 35, 48],
        },
      ],
      options: {
        chart: {
          type: "area",
          height: 60,
          sparkline: {
            enabled: true,
          },
          dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 0,
            left: 0,
            blur: 1,
            color: "#fff",
            opacity: 0.05,
          },
        },
        stroke: {
          show: true,
          curve: "smooth",
          lineCap: "butt",
          colors: undefined,
          width: 1.5,
          // ltcArray: 0,
        },
        fill: {
          gradient: {
            //   enabled: false,
          },
        },
        yaxis: {
          min: 0,
          show: false,

          axisBorder: {
            show: false,
          },
        },
        xaxis: {
          axisBorder: {
            show: false,
          },
        },
        colors: ["rgba(137, 32, 173,0.5)"],
        tooltip: {
          enabled: false,
        },
      }

    };
  }

  render() {
    return (
      <ReactGLM options={this.state.options} series={this.state.series} type="area" height={60} width={"100%"} />

    );
  }
}

//Monero
export class Monero extends Component<{}, spark3> {
  constructor(props: {}) {
    super(props);

    this.state = {
      series: [
        {
          name: "Value",
          data: [54, 38, 56, 35, 65, 43, 53, 45, 62, 80, 35, 48],
        },
      ],
      options: {
        chart: {
          type: "area",
          height: 60,
          sparkline: {
            enabled: true,
          },
          dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 0,
            left: 0,
            blur: 1,
            color: "#fff",
            opacity: 0.05,
          },
        },
        stroke: {
          show: true,
          curve: "smooth",
          lineCap: "butt",
          colors: undefined,
          width: 1.5,
          // ltcArray: 0,
        },
        fill: {
          gradient: {
            //   enabled: false,
          },
        },

        yaxis: {
          min: 0,
          show: false,

          axisBorder: {
            show: false,
          },
        },
        xaxis: {
          axisBorder: {
            show: false,
          },
        },
        colors: ["rgba(230, 83, 60,0.5)"],
        tooltip: {
          enabled: false,
        },
      }

    };
  }

  render() {
    return (
      <ReactMonero options={this.state.options} series={this.state.series} type="area" height={60}  width={"100%"}/>

    );
  }
}

//EOS
export class EOS extends Component<{}, spark3> {
  constructor(props: {}) {
    super(props);

    this.state = {
      series: [
        {
          name: "Value",
          data: [54, 38, 56, 35, 65, 43, 53, 45, 62, 80, 35, 48],
        },
      ],
      options: {
        chart: {
          type: "area",
          height: 60,
          sparkline: {
            enabled: true,
          },
          dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 0,
            left: 0,
            blur: 1,
            color: "#fff",
            opacity: 0.05,
          },
        },
        stroke: {
          show: true,
          curve: "smooth",
          lineCap: "butt",
          colors: undefined,
          width: 1.5,
          // ltcArray: 0,
        },
        fill: {
          gradient: {
            //   enabled: false,
          },
        },

        yaxis: {
          min: 0,
          show: false,
          axisBorder: {
            show: false,
          },
        },
        xaxis: {
          axisBorder: {
            show: false,
          },
        },
        colors: ["rgba(73, 182, 245,0.5)"],
        tooltip: {
          enabled: false,
        },
      }

    };
  }

  render() {
    return (
      <ReactEOS options={this.state.options} series={this.state.series} type="area" height={60} width={"100%"} />

    );
  }
}
export class Statistics extends Component<{}, spark3> {
  constructor(props: {}) {
    super(props);

    this.state = {

      series: [{
        name: "Buy",
        data: [20, 38, 38, 72, 55, 63, 43, 76, 55, 80, 40, 80],
      }, {
        name: "Sell",
        data: [85, 65, 75, 38, 85, 35, 62, 40, 40, 64, 50, 89]
      }],

      options: {
        chart: {
          height: 300,
          type: 'line',
          zoom: {
            enabled: false
          },
          dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 5,
            left: 0,
            blur: 3,
            color: '#000',
            opacity: 0.1
          },
        },
        dataLabels: {
          enabled: false
        },
        legend: {
          position: "top",
          horizontalAlign: "center",
          offsetX: -15,
          fontWeight: "bold",
        },
        stroke: {
          curve: 'smooth',
          width: 3,
          dashArray: [0, 5],
        },
        grid: {
          borderColor: '#f2f6f7',
        },
        colors: ["rgb(38, 191, 148)", "rgba(230, 83, 60, 0.3)"],
        yaxis: {
          title: {
            text: 'Statistics',
            style: {
              color: '#adb5be',
              fontSize: '14px',
              fontFamily: 'poppins, sans-serif',
              fontWeight: 600,
              cssClass: 'apexcharts-yaxis-label',
            },
          },
          
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          axisBorder: {
            show: true,
            color: 'rgba(119, 119, 142, 0.05)',
            offsetX: 0,
            offsetY: 0,
          },
          axisTicks: {
            show: true,
            borderType: 'solid',
            color: 'rgba(119, 119, 142, 0.05)',
            offsetX: 0,
            offsetY: 0
          },
          labels: {
            rotate: -90
          }
        }
      }

    };
  }

  render() {
    return (
      <ReactStatistics options={this.state.options} series={this.state.series} type="line" height={300} width={"100%"} />

    );
  }
}
export const Options1 = [
  { value: 'Bitcoin', label: 'Bitcoin' },
  { value: 'Etherium', label: 'Etherium' },
  { value: 'Litecoin', label: 'Litecoin' },
  { value: 'Ripple', label: 'Ripple' },
  { value: 'Cardano', label: 'Cardano' },
  { value: 'Neo', label: 'Neo' },
  { value: 'Stellar', label: 'Stellar' },
  { value: 'EOS', label: 'EOS' },
  { value: 'NEM', label: 'NEM' },
];
export const Options2 = [
  { value: 'USD', label: 'USD' },
  { value: 'Pound', label: 'Pound' },
  { value: 'Rupee', label: 'Rupee' },
  { value: 'Euro', label: 'Euro' },
  { value: 'Won', label: 'Won' },
  { value: 'Dinar', label: 'Dinar' },
  { value: 'Rial', label: 'Rial' }
];
