
import dynamic from 'next/dynamic';
import React, { Component, useState } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import { ComposableMap, Geographies, Geography, ZoomableGroup } from 'react-simple-maps';
import { ApexOptions } from 'apexcharts';
interface spark3 {
	options?: ApexOptions,
	width?: string | number,
	height?: string | number,
	series?: ApexOptions['series'],
	[key: string]: any
	label?: XAxisAnnotations
	endingShape?: string
}
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });
export class BTC extends Component<{}, spark3> {
  constructor(props: {}) {
    super(props);

    this.state = {
      series: [
        {
          data: [34, 55, 41, 67, 22, 43, 21]
        },
      ],
      color: ['#47bbed'],
      options: {
        chart: {
          events: {
            mounted: (chart: { windowResizeHandler: () => void; }) => {
              chart.windowResizeHandler();
            }
          },
          sparkline: {
            enabled: true
          },
          dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 3,
            blur: 3,
            opacity: 0.2
          },
          type: 'line',
          height: 20,
          width: 100
        },
        tooltip: {
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
        colors: ["#47bbed"],
        stroke: {
          width: [1.5],
          curve: ['smooth'],
        },
        xaxis: {
          crosshairs: {
            show: false,
          }
        },
        fill: {
          type: 'gradient',
          gradient: {
            opacityFrom: 0.9,
            opacityTo: 0.9,
            stops: [0, 98],
          }
        },
      }

    };
  }

  render() {
    return (
      <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={20} width={100} />
    );
  }
}
export class ETH extends Component<{}, spark3> {
  constructor(props: {}) {
    super(props);

    this.state = {
      series: [
        {
          data: [34, 55, 41, 47, 32, 53, 31]
        },
      ],
      color: ['#28D193'],
      options: {
        chart: {
          events: {
            mounted: (chart: { windowResizeHandler: () => void; }) => {
              chart.windowResizeHandler();
            }
          },
          sparkline: {
            enabled: true
          },
          dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 3,
            blur: 3,
            opacity: 0.2
          },
          type: 'line',
          height: 20,
          width: 100
        },
        tooltip: {
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
        colors: ["#28D193"],
        stroke: {
          width: [1.5],
          curve: ['smooth'],
        },
        xaxis: {
          crosshairs: {
            show: false,
          }
        },
        fill: {
          type: 'gradient',
          gradient: {
            opacityFrom: 0.9,
            opacityTo: 0.9,
            stops: [0, 98],
          }
        },
      }

    };
  }

  render() {
    return (
      <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={20} width={100} />
    );
  }
}
export class DASH extends Component<{}, spark3> {
  constructor(props: {}) {
    super(props);

    this.state = {
      series: [
        {
          data: [31, 53, 32, 47, 41, 55, 44]
        },
      ],
      color: ['#FF534D'],
      options: {
        chart: {
          events: {
            mounted: (chart: { windowResizeHandler: () => void; }) => {
              chart.windowResizeHandler();
            }
          },
          sparkline: {
            enabled: true
          },
          dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 3,
            blur: 3,
            opacity: 0.2
          },
          type: 'line',
          height: 20,
          width: 100
        },
        tooltip: {
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
        colors: ["#FF534D"],
        stroke: {
          width: [1.5],
          curve: ['smooth'],
        },
        xaxis: {
          crosshairs: {
            show: false,
          }
        },
        fill: {
          type: 'gradient',
          gradient: {
            opacityFrom: 0.9,
            opacityTo: 0.9,
            stops: [0, 98],
          }
        },
      }

    };
  }

  render() {
    return (
      <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={20} width={100} />

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
          data: [21, 43, 22, 45, 35, 55, 34]
        },
      ],
      color: ['#FFBE14'],
      options: {
        chart: {
          events: {
            mounted: (chart: { windowResizeHandler: () => void; }) => {
              chart.windowResizeHandler();
            }
          },
          sparkline: {
            enabled: true
          },
          dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 3,
            blur: 3,
            opacity: 0.2
          },
          type: 'line',
          height: 20,
          width: 100
        },
        tooltip: {
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
        colors: ["#FFBE14"],
        stroke: {
          width: [1.5],
          curve: ['smooth'],
        },
        xaxis: {
          crosshairs: {
            show: false,
          }
        },
        fill: {
          type: 'gradient',
          gradient: {
            opacityFrom: 0.9,
            opacityTo: 0.9,
            stops: [0, 98],
          }
        },
      }

    };
  }

  render() {
    return (
      <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={20} width={100} />

    );
  }
}
export class TotalRevenue extends Component<{}, spark3> {
  constructor(props: {}) {
    super(props);

    this.state = {
      series: [{
        name: "Revenue",
        data: [55, 55, 52, 52, 55, 55, 58, 58, 53, 53, 55, 55]
      }],
      options: {
        chart: {
          events: {
            mounted: (chart: { windowResizeHandler: () => void; }) => {
              chart.windowResizeHandler();
            }
          },
          height: 180,
          type: "area",
          sparkline: {
            enabled: true
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: [1.4],
          show: true,
          curve: ['smooth'],
        },
        xaxis: {
          crosshairs: {
            show: false,
          }
        },
        legend: {
          show: false
        },
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        markers: {
          size: 0
        },
        colors: ["#FFBE14"],
        fill: {
          type: 'gradient',
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.4,
            opacityTo: 0.7,
            stops: [0, 100]
          }
        },
      }

    };
  }

  render() {
    return (
      <ReactApexChart options={this.state.options} series={this.state.series} type="area" height={180} width={"100%"} />

    );
  }
}
export class Applicants extends Component<{}, spark3> {
  constructor(props: {}) {
    super(props);

    this.state = {
      series: [{
        name: 'Job Applied',
        type: 'line',
        data: [25, 50, 30, 55, 20, 45, 30]
      }, {
        name: 'Job Viewed',
        type: 'area',
        data: [35, 25, 40, 30, 45, 35, 60]
      }],
      options: {
        colors: ["#845adf", "rgba(132, 90, 223, 0.1)"],
        chart: {
          events: {
            mounted: (chart: { windowResizeHandler: () => void; }) => {
              chart.windowResizeHandler();
            }
          },
          height: 348,
          type: 'line',
          stacked: false,
          toolbar: {
            show: false
          },
          dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 7,
            left: 1,
            blur: 3,
            color: '#000',
            opacity: 0.2
          },
        },
        grid: {
          borderColor: '#e9edf4',
          padding: {
            top: 10,
            right: 0,
            bottom: 0,
            left: 0
          },
        },
        stroke: {
          width: [2, 2],
          curve: 'smooth',
          dashArray: [0, 4]
        },
        labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        markers: {
          size: 4,
          hover: {
            size: 5
          }
        },
        fill: {
          opacity: [0.85, 0.25, 1],
          gradient: {
            inverseColors: false,
            shadeIntensity: 1,
            shade: 'light',
            type: "vertical",
            opacityFrom: 0.85,
            opacityTo: 0.55,
            stops: [0, 100, 100, 100]
          }
        },
        legend: {
          show: true,
          position: 'top',
          fontFamily: 'Inter, sans-serif',
        
        },
        xaxis: {
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
        },
        yaxis: {
          title: {
            style: {
              color: '#adb5be',
              fontSize: '14px',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 600
            },
          },
          labels: {
            formatter: function (y: number) {
              return y.toFixed(0) + "";
            }
          }
        },
        tooltip: {
          shared: true,
          intersect: false,
          y: {
            formatter: function (y: number) {
              if (typeof y !== "undefined") {
                return y.toFixed(0) + " points";
              }
              return y;

            }
          }
        }
      }

    };
  }

  render() {
    return (
      <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={350} width={"100%"} />

    );
  }
}
export class Sessions extends Component<{}, spark3> {
  constructor(props: {}) {
    super(props);

    this.state = {
      series: [
        {
          name: "Tablet",
          data: [[10, 35, 80]]
        },
        {
          name: "Mobile",
          data: [[22, 10, 80]]
        },
        {
          name: "Desktop",
          data: [[25, 25, 150]]
        },
      ],
      options: {
        chart: {
          events: {
            mounted: (chart: { windowResizeHandler: () => void; }) => {
              chart.windowResizeHandler();
            }
          },
          height: 350,
          type: "bubble",
          toolbar: {
            show: false
          }
        },
        grid: {
          borderColor: '#f3f3f3',
          strokeDashArray: 3
        },
        colors: ["#ff8c33", "#28d193", "#4b9bfa"],
        dataLabels: {
          enabled: false
        },
        legend: {
          show: true,
          fontSize: '13px',
          labels: {
            colors: '#959595',
          },
        
        },
        xaxis: {
          min: 0,
          max: 50,
          labels: {
            show: false,
          },
          axisBorder: {
            show: false,
          },
        },
        yaxis: {
          max: 50,
          labels: {
            show: false,
          },
        }
      }

    };
  }

  render() {
    return (
      <ReactApexChart options={this.state.options} series={this.state.series} type="bubble" height={350} width={"100%"} />

    );
  }
}
export class Targetreport extends Component<{}, spark3> {
  constructor(props: {}) {
    super(props);

    this.state = {
      series: [{
        data: [17, 22, 37, 47, 39, 28, 14],
        name: 'Revenue',
      }],
      options: {
        chart: {
          events: {
            mounted: (chart: { windowResizeHandler: () => void; }) => {
              chart.windowResizeHandler();
            }
          },
          type: 'bar',
          height: 235,
          toolbar: {
            show: false
          },
          dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 6,
            left: 6,
            blur: 3,
            color: '#000',
            opacity: 0.05
          },
        },
        plotOptions: {
          bar: {
            columnWidth: '35%',
            borderRadius: 4,
            horizontal: false,
            colors: {
              ranges: [{
                from: 41,
                to: Infinity,
                color: '#5f40a3'
              },
              {
                from: 0,
                to: 40,
                color: '#e4dcf8'
              }]
            },
          }
        },
        dataLabels: {
          enabled: false
        },
        grid: {
          show: false,
          borderColor: 'transparent',
          padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          },
          yaxis: {
            lines: {
              show: false
            }
          },
        },
        xaxis: {
          categories: ['Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          },
          labels: {
            rotate: -90,
            style: {
              fontFamily: 'Inter, sans-serif',
            },
          }
        },
        yaxis: {
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          },
          labels: {
            show: false
          }
        }
      }

    };
  }

  render() {
    return (
      <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={235} width={"100%"} />

    );
  }
}
const icon1 = "ri-briefcase-2-line fs-16"
const icon2 = "ri-bill-line fs-16"
const icon3 = "ri-wallet-2-line fs-16"
const icon4 = "ri-line-chart-line fs-16"
const icon5 = "ri-money-dollar-box-line fs-16"
const icon6 = "ri-profile-line fs-16"
export const icon = [
  { icon: icon1, text1: 'Total Sales', text2: '$15,800', text3: '+25.8%', text4: 'primary', color: 'success-transparent' },
  { icon: icon2, text1: 'Total Tax', text2: '$12,650', text3: '+12.2%', text4: 'secondary', color: 'success-transparent' },
  { icon: icon3, text1: 'Total Income', text2: '$14,800', text3: '+7.45%', text4: 'success', color: 'success-transparent' },
  { icon: icon4, text1: 'Total Expenses', text2: '$7,566', text3: '-3.21%', text4: 'info', color: 'danger-transparent' },
  { icon: icon5, text1: 'Sales Profit', text2: '$7,474', text3: '+36.03%', text4: 'warning', color: 'success-transparent' },
  { icon: icon6, text1: 'Opex Ratio', text2: '32%', text3: '+0.89%', text4: 'danger', color: 'success-transparent' }
]
// World map
export function MapData({ setTooltipContent }:any) {
  const [position, setPosition] = useState({ coordinates: [0, 0], zoom: 1 });

  const geoUrl = {
    type: 'Topology',
    objects: {
      world: {
        type: 'GeometryCollection',
        geometries: [
          {
            type: 'Polygon',
            arcs: [[0, 1, 2, 3, 4, 5]],
            id: 'AFG',
            properties: { name: 'Afghanistan' }
          },
          {
            type: 'MultiPolygon',
            arcs: [[[6, 7, 8, 9]], [[10, 11, 12]]],
            id: 'AGO',
            properties: { name: 'Angola' }
          },
          {
            type: 'Polygon',
            arcs: [[13, 14, 15, 16, 17]],
            id: 'ALB',
            properties: { name: 'Albania' }
          },
          {
            type: 'Polygon',
            arcs: [[18, 19, 20, 21, 22]],
            id: 'ARE',
            properties: { name: 'United Arab Emirates' }
          },
          {
            type: 'MultiPolygon',
            arcs: [[[23, 24]], [[25, 26, 27, 28, 29, 30]]],
            id: 'ARG',
            properties: { name: 'Argentina' }
          },
          {
            type: 'Polygon',
            arcs: [[31, 32, 33, 34, 35]],
            id: 'ARM',
            properties: { name: 'Armenia' }
          },
          {
            type: 'Polygon',
            arcs: [[36]],
            id: 'ATF',
            properties: { name: 'French Southern Territories' }
          },
          {
            type: 'MultiPolygon',
            arcs: [[[37]], [[38]]],
            id: 'AUS',
            properties: { name: 'Australia' }
          },
          {
            type: 'Polygon',
            arcs: [[39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49]],
            id: 'AUT',
            properties: { name: 'Austria' }
          },
          {
            type: 'MultiPolygon',
            arcs: [[[50, -35]], [[51, 52, -33, 53, 54]]],
            id: 'AZE',
            properties: { name: 'Azerbaijan' }
          },
          {
            type: 'Polygon',
            arcs: [[55, 56, 57, 58]],
            id: 'BDI',
            properties: { name: 'Burundi' }
          },
          {
            type: 'Polygon',
            arcs: [[59, 60, 61, 62, 63]],
            id: 'BEL',
            properties: { name: 'Belgium' }
          },
          {
            type: 'Polygon',
            arcs: [[64, 65, 66, 67, 68]],
            id: 'BEN',
            properties: { name: 'Benin' }
          },
          {
            type: 'Polygon',
            arcs: [[69, 70, 71, -67, 72, 73]],
            id: 'BFA',
            properties: { name: 'Burkina Faso' }
          },
          {
            type: 'Polygon',
            arcs: [[74, 75, 76]],
            id: 'BGD',
            properties: { name: 'Bangladesh' }
          },
          {
            type: 'Polygon',
            arcs: [[77, 78, 79, 80, 81, 82]],
            id: 'BGR',
            properties: { name: 'Bulgaria' }
          },
          {
            type: 'MultiPolygon',
            arcs: [[[83]], [[84]], [[85]]],
            id: 'BHS',
            properties: { name: 'Bahamas' }
          },
          {
            type: 'Polygon',
            arcs: [[86, 87, 88, 89]],
            id: 'BIH',
            properties: { name: 'Bosnia and Herzegovina' }
          },
          {
            type: 'Polygon',
            arcs: [[90, 91, 92, 93, 94, 95, 96, 97]],
            id: 'BLR',
            properties: { name: 'Belarus' }
          },
          {
            type: 'Polygon',
            arcs: [[98, 99, 100]],
            id: 'BLZ',
            properties: { name: 'Belize' }
          },
          {
            type: 'Polygon',
            arcs: [[101, 102, 103, 104, -31]],
            id: 'BOL',
            properties: { name: 'Bolivia' }
          },
          {
            type: 'Polygon',
            arcs: [[-27, 105, -104, 106, 107, 108, 109, 110, 111, 112, 113]],
            id: 'BRA',
            properties: { name: 'Brazil' }
          },
          {
            type: 'Polygon',
            arcs: [[114, 115]],
            id: 'BRN',
            properties: { name: 'Brunei' }
          },
          {
            type: 'Polygon',
            arcs: [[116, 117]],
            id: 'BTN',
            properties: { name: 'Bhutan' }
          },
          {
            type: 'Polygon',
            arcs: [[118, 119, 120, 121]],
            id: 'BWA',
            properties: { name: 'Botswana' }
          },
          {
            type: 'Polygon',
            arcs: [[122, 123, 124, 125, 126, 127, 128]],
            id: 'CAF',
            properties: { name: 'Central African Republic' }
          },
          {
            type: 'MultiPolygon',
            arcs: [
              [[129]],
              [[130]],
              [[131]],
              [[132]],
              [[133]],
              [[134]],
              [[135]],
              [[136]],
              [[137]],
              [[138]],
              [[139, 140, 141, 142, 143, 144]],
              [[145]],
              [[146]],
              [[147]],
              [[148]],
              [[149]],
              [[150]],
              [[151]],
              [[152]],
              [[153]],
              [[154]],
              [[155]],
              [[156]],
              [[157]],
              [[158]],
              [[159]],
              [[160]],
              [[161]],
              [[162]],
              [[163]]
            ],
            id: 'CAN',
            properties: { name: 'Canada' }
          },
          {
            type: 'Polygon',
            arcs: [[-47, 164, 165, 166, -43, 167, 168, 169]],
            id: 'CHE',
            properties: { name: 'Switzerland' }
          },
          {
            type: 'MultiPolygon',
            arcs: [[[-24, 170]], [[-30, 171, 172, -102]]],
            id: 'CHL',
            properties: { name: 'Chile' }
          },
          {
            type: 'MultiPolygon',
            arcs: [
              [[173]],
              [
                [
                  174,
                  175,
                  176,
                  177,
                  178,
                  179,
                  180,
                  181,
                  182,
                  183,
                  184,
                  185,
                  186,
                  187,
                  -118,
                  188,
                  189,
                  190,
                  191,
                  -4,
                  192,
                  193,
                  194,
                  195,
                  196,
                  197,
                  198,
                  199,
                  200,
                  201,
                  202
                ]
              ]
            ],
            id: 'CHN',
            properties: { name: 'China' }
          },
          {
            type: 'Polygon',
            arcs: [[203, 204, 205, 206, -70, 207]],
            id: 'CIV',
            properties: { name: "Cote d'Ivoire" }
          },
          {
            type: 'Polygon',
            arcs: [[208, 209, 210, 211, 212, 213, 214, -129, 215]],
            id: 'CMR',
            properties: { name: 'Cameroon' }
          },
          {
            type: 'Polygon',
            arcs: [
              [
                216,
                217,
                218,
                219,
                -56,
                220,
                221,
                222,
                -10,
                223,
                -13,
                224,
                -127,
                225,
                226
              ]
            ],
            id: 'COD',
            properties: { name: 'Democratic Republic of Congo' }
          },
          {
            type: 'Polygon',
            arcs: [[-12, 227, 228, -216, -128, -225]],
            id: 'COG',
            properties: { name: 'Congo' }
          },
          {
            type: 'Polygon',
            arcs: [[229, 230, 231, 232, 233, -108, 234]],
            id: 'COL',
            properties: { name: 'Colombia' }
          },
          {
            type: 'Polygon',
            arcs: [[235, 236, 237, 238]],
            id: 'CRI',
            properties: { name: 'Costa Rica' }
          },
          {
            type: 'Polygon',
            arcs: [[239]],
            id: 'CUB',
            properties: { name: 'Cuba' }
          },
          {
            type: 'Polygon',
            arcs: [[240]],
            id: 'CYP',
            properties: { name: 'Cyprus' }
          },
          {
            type: 'Polygon',
            arcs: [[-49, 241, 242, 243]],
            id: 'CZE',
            properties: { name: 'Czechia' }
          },
          {
            type: 'Polygon',
            arcs: [[244, 245, -242, -48, -170, 246, 247, -61, 248, 249, 250]],
            id: 'DEU',
            properties: { name: 'Germany' }
          },
          {
            type: 'Polygon',
            arcs: [[251, 252, 253, 254]],
            id: 'DJI',
            properties: { name: 'Djibouti' }
          },
          {
            type: 'MultiPolygon',
            arcs: [[[255]], [[-251, 256]]],
            id: 'DNK',
            properties: { name: 'Denmark' }
          },
          {
            type: 'MultiPolygon',
            arcs: [[[257]]],
            id: 'GRL',
            properties: { name: 'Greenland' }
          },
          {
            type: 'Polygon',
            arcs: [[258, 259]],
            id: 'DOM',
            properties: { name: 'Dominican Republic' }
          },
          {
            type: 'Polygon',
            arcs: [[260, 261, 262, 263, 264, 265, 266, 267]],
            id: 'DZA',
            properties: { name: 'Algeria' }
          },
          {
            type: 'Polygon',
            arcs: [[268, -230, 269]],
            id: 'ECU',
            properties: { name: 'Ecuador' }
          },
          {
            type: 'Polygon',
            arcs: [[270, 271, 272]],
            id: 'EGY',
            properties: { name: 'Egypt' }
          },
          {
            type: 'Polygon',
            arcs: [[273, 274, 275, 276, 277, 278, 279, -255]],
            id: 'ERI',
            properties: { name: 'Eritrea' }
          },
          {
            type: 'Polygon',
            arcs: [[280, 281, 282, 283]],
            id: 'ESP',
            properties: { name: 'Spain' }
          },
          {
            type: 'Polygon',
            arcs: [[284, 285, 286, 287]],
            id: 'EST',
            properties: { name: 'Estonia' }
          },
          {
            type: 'Polygon',
            arcs: [
              [288, 289, -274, -254, 290, 291, 292, 293, 294, 295, 296, 297, -277]
            ],
            id: 'ETH',
            properties: { name: 'Ethiopia' }
          },
          {
            type: 'Polygon',
            arcs: [[298, 299, 300, 301]],
            id: 'FIN',
            properties: { name: 'Finland' }
          },
          {
            type: 'MultiPolygon',
            arcs: [[[302]], [[303]], [[304]]],
            id: 'FJI',
            properties: { name: 'Fiji' }
          },
          {
            type: 'MultiPolygon',
            arcs: [[[305]], [[306, -247, -169, 307, 308, -282, 309, -63]]],
            id: 'FRA',
            properties: { name: 'France' }
          },
          {
            type: 'Polygon',
            arcs: [[310, 311, 312, -112]],
            id: 'GUF',
            properties: { name: 'French Guiana' }
          },
          {
            type: 'Polygon',
            arcs: [[313, 314, -209, -229]],
            id: 'GAB',
            properties: { name: 'Gabon' }
          },
          {
            type: 'MultiPolygon',
            arcs: [[[315, 316]], [[317]]],
            id: 'GBR',
            properties: { name: 'United Kingdom' }
          },
          {
            type: 'Polygon',
            arcs: [[318, 319, 320, 321, 322, -54, -32, 323]],
            id: 'GEO',
            properties: { name: 'Georgia' }
          },
          {
            type: 'Polygon',
            arcs: [[324, -208, -74, 325]],
            id: 'GHA',
            properties: { name: 'Ghana' }
          },
          {
            type: 'Polygon',
            arcs: [[326, 327, 328, 329, 330, 331, -206]],
            id: 'GIN',
            properties: { name: 'Guinea' }
          },
          {
            type: 'Polygon',
            arcs: [[332, 333]],
            id: 'GMB',
            properties: { name: 'Gambia' }
          },
          {
            type: 'Polygon',
            arcs: [[334, 335, -330]],
            id: 'GNB',
            properties: { name: 'Guinea-Bissau' }
          },
          {
            type: 'Polygon',
            arcs: [[336, -210, -315]],
            id: 'GNQ',
            properties: { name: 'Equatorial Guinea' }
          },
          {
            type: 'MultiPolygon',
            arcs: [[[337]], [[338, -14, 339, -81, 340]]],
            id: 'GRC',
            properties: { name: 'Greece' }
          },
          {
            type: 'Polygon',
            arcs: [[341, 342, -101, 343, 344, 345]],
            id: 'GTM',
            properties: { name: 'Guatemala' }
          },
          {
            type: 'Polygon',
            arcs: [[346, 347, -110, 348]],
            id: 'GUY',
            properties: { name: 'Guyana' }
          },
          {
            type: 'Polygon',
            arcs: [[349, 350, -345, 351, 352]],
            id: 'HND',
            properties: { name: 'Honduras' }
          },
          {
            type: 'Polygon',
            arcs: [[353, 354, 355, -90, 356, 357, 358]],
            id: 'HRV',
            properties: { name: 'Croatia' }
          },
          {
            type: 'Polygon',
            arcs: [[-260, 359]],
            id: 'HTI',
            properties: { name: 'Haiti' }
          },
          {
            type: 'Polygon',
            arcs: [[-40, 360, 361, 362, 363, 364, -359, 365]],
            id: 'HUN',
            properties: { name: 'Hungary' }
          },
          {
            type: 'MultiPolygon',
            arcs: [
              [[366]],
              [[367, 368]],
              [[369]],
              [[370]],
              [[371]],
              [[372]],
              [[373]],
              [[374]],
              [[375, 376]],
              [[377]],
              [[378]],
              [[379, 380]],
              [[381]]
            ],
            id: 'IDN',
            properties: { name: 'Indonesia' }
          },
          {
            type: 'Polygon',
            arcs: [[-191, 382, -189, -117, -188, 383, -77, 384, 385]],
            id: 'IND',
            properties: { name: 'India' }
          },
          {
            type: 'Polygon',
            arcs: [[386, -316]],
            id: 'IRL',
            properties: { name: 'Ireland' }
          },
          {
            type: 'Polygon',
            arcs: [[387, -6, 388, 389, 390, 391, 392, -51, -34, -53, 393]],
            id: 'IRN',
            properties: { name: 'Iran' }
          },
          {
            type: 'Polygon',
            arcs: [[-391, 394, 395, 396, 397, 398, 399, 400]],
            id: 'IRQ',
            properties: { name: 'Iraq' }
          },
          {
            type: 'Polygon',
            arcs: [[401]],
            id: 'ISL',
            properties: { name: 'Iceland' }
          },
          {
            type: 'Polygon',
            arcs: [[402, 403, 404, 405, 406, 407]],
            id: 'ISR',
            properties: { name: 'Israel' }
          },
          {
            type: 'MultiPolygon',
            arcs: [[[408]], [[409]], [[410, 411, -308, -168, -42]]],
            id: 'ITA',
            properties: { name: 'Italy' }
          },
          {
            type: 'Polygon',
            arcs: [[412]],
            id: 'JAM',
            properties: { name: 'Jamaica' }
          },
          {
            type: 'Polygon',
            arcs: [[-403, 413, -398, 414, 415, -405, 416]],
            id: 'JOR',
            properties: { name: 'Jordan' }
          },
          {
            type: 'MultiPolygon',
            arcs: [[[417]], [[418]], [[419]]],
            id: 'JPN',
            properties: { name: 'Japan' }
          },
          {
            type: 'Polygon',
            arcs: [
              [
                420,
                421,
                422,
                423,
                424,
                425,
                426,
                427,
                428,
                429,
                430,
                431,
                432,
                -195,
                433
              ]
            ],
            id: 'KAZ',
            properties: { name: 'Kazakhstan' }
          },
          {
            type: 'Polygon',
            arcs: [[434, 435, 436, 437, -295, 438]],
            id: 'KEN',
            properties: { name: 'Kenya' }
          },
          {
            type: 'Polygon',
            arcs: [[-434, -194, 439, 440]],
            id: 'KGZ',
            properties: { name: 'Kyrgyzstan' }
          },
          {
            type: 'Polygon',
            arcs: [[441, 442, 443, 444]],
            id: 'KHM',
            properties: { name: 'Cambodia' }
          },
          {
            type: 'Polygon',
            arcs: [[445, 446]],
            id: 'KOR',
            properties: { name: 'South Korea' }
          },
          {
            type: 'Polygon',
            arcs: [[447, 448, 449, 450, 451]],
            id: 'XXK',
            properties: { name: 'Kosovo' }
          },
          {
            type: 'Polygon',
            arcs: [[452, 453, -396]],
            id: 'KWT',
            properties: { name: 'Kuwait' }
          },
          {
            type: 'Polygon',
            arcs: [[454, 455, -186, 456, -443]],
            id: 'LAO',
            properties: { name: 'Laos' }
          },
          {
            type: 'Polygon',
            arcs: [[-407, 457, 458]],
            id: 'LBN',
            properties: { name: 'Lebanon' }
          },
          {
            type: 'Polygon',
            arcs: [[459, 460, -327, -205]],
            id: 'LBR',
            properties: { name: 'Liberia' }
          },
          {
            type: 'Polygon',
            arcs: [[461, -268, 462, 463, -272, 464, 465]],
            id: 'LBY',
            properties: { name: 'Libya' }
          },
          {
            type: 'Polygon',
            arcs: [[466]],
            id: 'LKA',
            properties: { name: 'Sri Lanka' }
          },
          {
            type: 'Polygon',
            arcs: [[467]],
            id: 'LSO',
            properties: { name: 'Lesotho' }
          },
          {
            type: 'Polygon',
            arcs: [[468, 469, 470, -91, 471]],
            id: 'LTU',
            properties: { name: 'Lithuania' }
          },
          {
            type: 'Polygon',
            arcs: [[-248, -307, -62]],
            id: 'LUX',
            properties: { name: 'Luxembourg' }
          },
          {
            type: 'Polygon',
            arcs: [[472, -288, 473, -92, -471]],
            id: 'LVA',
            properties: { name: 'Latvia' }
          },
          {
            type: 'Polygon',
            arcs: [[-265, 474, 475]],
            id: 'MAR',
            properties: { name: 'Morocco' }
          },
          {
            type: 'Polygon',
            arcs: [[476, 477]],
            id: 'MDA',
            properties: { name: 'Moldova' }
          },
          {
            type: 'Polygon',
            arcs: [[478]],
            id: 'MDG',
            properties: { name: 'Madagascar' }
          },
          {
            type: 'Polygon',
            arcs: [[-99, -343, 479, 480, 481]],
            id: 'MEX',
            properties: { name: 'Mexico' }
          },
          {
            type: 'Polygon',
            arcs: [[-452, 482, -82, -340, 483]],
            id: 'MKD',
            properties: { name: 'North Macedonia' }
          },
          {
            type: 'Polygon',
            arcs: [[484, -262, 485, -71, -207, -332, 486]],
            id: 'MLI',
            properties: { name: 'Mali' }
          },
          {
            type: 'Polygon',
            arcs: [[487, -75, -384, -187, -456, 488]],
            id: 'MMR',
            properties: { name: 'Myanmar' }
          },
          {
            type: 'Polygon',
            arcs: [[489, -89, 490, -450, -16]],
            id: 'MNE',
            properties: { name: 'Montenegro' }
          },
          {
            type: 'Polygon',
            arcs: [[491, 492, 493, 494, 495, 496, 497, 498, -197]],
            id: 'MNG',
            properties: { name: 'Mongolia' }
          },
          {
            type: 'Polygon',
            arcs: [[499, 500, 501, 502, 503, 504, 505, 506, 507]],
            id: 'MOZ',
            properties: { name: 'Mozambique' }
          },
          {
            type: 'Polygon',
            arcs: [[508, 509, 510, -263, -485]],
            id: 'MRT',
            properties: { name: 'Mauritania' }
          },
          {
            type: 'Polygon',
            arcs: [[-508, 511, 512, 513]],
            id: 'MWI',
            properties: { name: 'Malawi' }
          },
          {
            type: 'MultiPolygon',
            arcs: [[[514, 515, 516, 517]], [[-380, 518, -116, 519]]],
            id: 'MYS',
            properties: { name: 'Malaysia' }
          },
          {
            type: 'Polygon',
            arcs: [[520, -8, 521, -120, 522]],
            id: 'NAM',
            properties: { name: 'Namibia' }
          },
          {
            type: 'Polygon',
            arcs: [[523]],
            id: 'NCL',
            properties: { name: 'New Caledonia' }
          },
          {
            type: 'Polygon',
            arcs: [
              [-72, -486, -261, -462, 524, 525, 526, 527, 528, -213, 529, -68]
            ],
            id: 'NER',
            properties: { name: 'Niger' }
          },
          {
            type: 'Polygon',
            arcs: [[530, -69, -530, -212]],
            id: 'NGA',
            properties: { name: 'Nigeria' }
          },
          {
            type: 'Polygon',
            arcs: [[531, -353, 532, -237]],
            id: 'NIC',
            properties: { name: 'Nicaragua' }
          },
          {
            type: 'Polygon',
            arcs: [[-249, -60, 533]],
            id: 'NLD',
            properties: { name: 'Netherlands' }
          },
          {
            type: 'MultiPolygon',
            arcs: [[[-302, 534, 535]], [[536]], [[537]], [[538]]],
            id: 'NOR',
            properties: { name: 'Norway' }
          },
          {
            type: 'Polygon',
            arcs: [[-383, -190]],
            id: 'NPL',
            properties: { name: 'Nepal' }
          },
          {
            type: 'MultiPolygon',
            arcs: [[[539]], [[540]]],
            id: 'NZL',
            properties: { name: 'New Zealand' }
          },
          {
            type: 'MultiPolygon',
            arcs: [[[541, 542, -22, 543]], [[-20, 544]]],
            id: 'OMN',
            properties: { name: 'Oman' }
          },
          {
            type: 'Polygon',
            arcs: [[-192, -386, 545, -389, -5]],
            id: 'PAK',
            properties: { name: 'Pakistan' }
          },
          {
            type: 'Polygon',
            arcs: [[546, -239, 547, -232]],
            id: 'PAN',
            properties: { name: 'Panama' }
          },
          {
            type: 'Polygon',
            arcs: [[-173, 548, -270, -235, -107, -103]],
            id: 'PER',
            properties: { name: 'Peru' }
          },
          {
            type: 'MultiPolygon',
            arcs: [
              [[549]],
              [[550]],
              [[551]],
              [[552]],
              [[553]],
              [[554]],
              [[555]]
            ],
            id: 'PHL',
            properties: { name: 'Philippines' }
          },
          {
            type: 'MultiPolygon',
            arcs: [[[556]], [[557]], [[-376, 558]], [[559]]],
            id: 'PNG',
            properties: { name: 'Papua New Guinea' }
          },
          {
            type: 'Polygon',
            arcs: [[-246, 560, 561, -472, -98, 562, 563, -243]],
            id: 'POL',
            properties: { name: 'Poland' }
          },
          {
            type: 'Polygon',
            arcs: [[564]],
            id: 'PRI',
            properties: { name: 'Puerto Rico' }
          },
          {
            type: 'Polygon',
            arcs: [[565, -447, 566, -183]],
            id: 'PRK',
            properties: { name: 'North Korea' }
          },
          {
            type: 'Polygon',
            arcs: [[-284, 567]],
            id: 'PRT',
            properties: { name: 'Portugal' }
          },
          {
            type: 'Polygon',
            arcs: [[-105, -106, -26]],
            id: 'PRY',
            properties: { name: 'Paraguay' }
          },
          {
            type: 'Polygon',
            arcs: [[568, 569]],
            id: 'QAT',
            properties: { name: 'Qatar' }
          },
          {
            type: 'Polygon',
            arcs: [[570, -478, 571, 572, -78, 573, -363]],
            id: 'ROU',
            properties: { name: 'Romania' }
          },
          {
            type: 'MultiPolygon',
            arcs: [
              [[574]],
              [[-562, 575, -469]],
              [[576]],
              [[577]],
              [[578]],
              [[579]],
              [[580]],
              [[581]],
              [[582]],
              [
                [
                  -181,
                  583,
                  584,
                  585,
                  -177,
                  586,
                  -175,
                  587,
                  -202,
                  588,
                  -200,
                  589,
                  -198,
                  -499,
                  590,
                  591,
                  -496,
                  592,
                  -494,
                  593,
                  -492,
                  -196,
                  -433,
                  594,
                  -431,
                  595,
                  596,
                  -428,
                  597,
                  -426,
                  598,
                  599,
                  600,
                  -55,
                  601,
                  -322,
                  602,
                  -320,
                  603,
                  604,
                  605,
                  606,
                  607,
                  608,
                  609,
                  610,
                  611,
                  -95,
                  612,
                  -93,
                  -474,
                  -287,
                  613,
                  614,
                  -299,
                  615
                ]
              ],
              [[616]],
              [[617]],
              [[618]]
            ],
            id: 'RUS',
            properties: { name: 'Russia' }
          },
          {
            type: 'Polygon',
            arcs: [[619, 620, -57, -220, 621]],
            id: 'RWA',
            properties: { name: 'Rwanda' }
          },
          {
            type: 'Polygon',
            arcs: [[-475, -264, -511, 622]],
            id: 'ESH',
            properties: { name: 'Western Sahara' }
          },
          {
            type: 'Polygon',
            arcs: [[623, -415, -397, -454, 624, -570, 625, -23, -543, 626]],
            id: 'SAU',
            properties: { name: 'Saudi Arabia' }
          },
          {
            type: 'Polygon',
            arcs: [
              [627, 628, -124, 629, -465, -271, 630, -279, 631, -298, 632]
            ],
            id: 'SDN',
            properties: { name: 'Sudan' }
          },
          {
            type: 'Polygon',
            arcs: [[633, -296, -438, 634, 635, -226, -126, 636, -628]],
            id: 'SSD',
            properties: { name: 'South Sudan' }
          },
          {
            type: 'Polygon',
            arcs: [[637, -509, -487, -331, -336, 638, -334]],
            id: 'SEN',
            properties: { name: 'Senegal' }
          },
          {
            type: 'MultiPolygon',
            arcs: [[[639]], [[640]], [[641]], [[642]], [[643]]],
            id: 'SLB',
            properties: { name: 'Solomon Islands' }
          },
          {
            type: 'Polygon',
            arcs: [[644, -328, -461]],
            id: 'SLE',
            properties: { name: 'Sierra Leone' }
          },
          {
            type: 'Polygon',
            arcs: [[645, -346, -351]],
            id: 'SLV',
            properties: { name: 'El Salvador' }
          },
          {
            type: 'Polygon',
            arcs: [[646, 647, -291, -253, 648, -439, -294]],
            id: 'SOM',
            properties: { name: 'Somalia' }
          },
          {
            type: 'Polygon',
            arcs: [[-83, -483, -451, -491, -88, 649, -355, 650, -364, -574]],
            id: 'SRB',
            properties: { name: 'Serbia' }
          },
          {
            type: 'Polygon',
            arcs: [[651, -312, 652, -111, -348]],
            id: 'SUR',
            properties: { name: 'Suriname' }
          },
          {
            type: 'Polygon',
            arcs: [[-564, 653, -361, -50, -244]],
            id: 'SVK',
            properties: { name: 'Slovakia' }
          },
          {
            type: 'Polygon',
            arcs: [[-41, -366, -358, 654, -411]],
            id: 'SVN',
            properties: { name: 'Slovenia' }
          },
          {
            type: 'Polygon',
            arcs: [[-535, -301, 655]],
            id: 'SWE',
            properties: { name: 'Sweden' }
          },
          {
            type: 'Polygon',
            arcs: [[656, -504]],
            id: 'SWZ',
            properties: { name: 'Eswatini' }
          },
          {
            type: 'Polygon',
            arcs: [[-414, -408, -459, 657, 658, -399]],
            id: 'SYR',
            properties: { name: 'Syria' }
          },
          {
            type: 'Polygon',
            arcs: [[-529, 659, -527, 660, -525, -466, -630, -123, -215, 661]],
            id: 'TCD',
            properties: { name: 'Chad' }
          },
          {
            type: 'Polygon',
            arcs: [[662, -326, -73, -66]],
            id: 'TGO',
            properties: { name: 'Togo' }
          },
          {
            type: 'Polygon',
            arcs: [[663, -518, 664, -489, -455, -442]],
            id: 'THA',
            properties: { name: 'Thailand' }
          },
          {
            type: 'Polygon',
            arcs: [[-440, -193, -3, 665]],
            id: 'TJK',
            properties: { name: 'Tajikistan' }
          },
          {
            type: 'Polygon',
            arcs: [[-388, 666, -422, 667, -1]],
            id: 'TKM',
            properties: { name: 'Turkmenistan' }
          },
          {
            type: 'Polygon',
            arcs: [[668, -368]],
            id: 'TLS',
            properties: { name: 'Timor' }
          },
          {
            type: 'Polygon',
            arcs: [[669]],
            id: 'TTO',
            properties: { name: 'Trinidad and Tobago' }
          },
          {
            type: 'Polygon',
            arcs: [[-267, 670, -463]],
            id: 'TUN',
            properties: { name: 'Tunisia' }
          },
          {
            type: 'MultiPolygon',
            arcs: [
              [[-324, -36, -393, 671, -400, -659, 672]],
              [[-341, -80, 673]]
            ],
            id: 'TUR',
            properties: { name: 'Turkey' }
          },
          {
            type: 'Polygon',
            arcs: [[674]],
            id: 'TWN',
            properties: { name: 'Taiwan' }
          },
          {
            type: 'Polygon',
            arcs: [
              [
                -436,
                675,
                676,
                -500,
                677,
                678,
                679,
                680,
                -221,
                -59,
                681,
                -620,
                682
              ]
            ],
            id: 'TZA',
            properties: { name: 'Tanzania' }
          },
          {
            type: 'Polygon',
            arcs: [[-622, -219, 683, -217, 684, -635, -437, -683]],
            id: 'UGA',
            properties: { name: 'Uganda' }
          },
          {
            type: 'Polygon',
            arcs: [
              [
                685,
                -611,
                686,
                -609,
                687,
                688,
                689,
                -605,
                690,
                -572,
                -477,
                -571,
                -362,
                -654,
                -563,
                -97
              ]
            ],
            id: 'UKR',
            properties: { name: 'Ukraine' }
          },
          {
            type: 'Polygon',
            arcs: [[-114, 691, -28]],
            id: 'URY',
            properties: { name: 'Uruguay' }
          },
          {
            type: 'MultiPolygon',
            arcs: [
              [[692]],
              [[693]],
              [[694]],
              [[695]],
              [[696]],
              [[697, -481, 698, -140]],
              [[699]],
              [[700]],
              [[701]],
              [[-144, 702, -142, 703]]
            ],
            id: 'USA',
            properties: { name: 'United States' }
          },
          {
            type: 'Polygon',
            arcs: [[-668, -421, -441, -666, -2]],
            id: 'UZB',
            properties: { name: 'Uzbekistan' }
          },
          {
            type: 'Polygon',
            arcs: [[704, -349, -109, -234]],
            id: 'VEN',
            properties: { name: 'Venezuela' }
          },
          {
            type: 'Polygon',
            arcs: [[705, -444, -457, -185]],
            id: 'VNM',
            properties: { name: 'Vietnam' }
          },
          {
            type: 'MultiPolygon',
            arcs: [[[706]], [[707]]],
            id: 'VUT',
            properties: { name: 'Vanuatu' }
          },
          {
            type: 'Polygon',
            arcs: [[-417, -404]],
            id: 'PSX',
            properties: { name: 'West Bank' }
          },
          {
            type: 'Polygon',
            arcs: [[708, -627, -542]],
            id: 'YEM',
            properties: { name: 'Yemen' }
          },
          {
            type: 'Polygon',
            arcs: [[-523, -119, 709, -505, -657, -503, 710], [-468]],
            id: 'ZAF',
            properties: { name: 'South Africa' }
          },
          {
            type: 'Polygon',
            arcs: [[-512, -507, 711, -121, -522, -7, -223, 712, -680]],
            id: 'ZMB',
            properties: { name: 'Zambia' }
          },
          {
            type: 'Polygon',
            arcs: [[-710, -122, -712, -506]],
            id: 'ZWE',
            properties: { name: 'Zimbabwe' }
          },
          {
            type: 'MultiPolygon',
            arcs: [
              [[713]],
              [[714]],
              [[715]],
              [[716]],
              [[717]],
              [[718]],
              [[719]],
              [[720]]
            ],
            id: 'CPV',
            properties: { name: 'Cape Verde' }
          },
          {
            type: 'MultiPolygon',
            arcs: [[[721]], [[722]], [[723]]],
            id: 'COM',
            properties: { name: 'Comoros' }
          },
          {
            type: 'Polygon',
            arcs: [[724]],
            id: 'MUS',
            properties: { name: 'Mauritius' }
          },
          {
            type: 'Polygon',
            arcs: [[725]],
            id: 'SYC',
            properties: { name: 'Seychelles' }
          },
          {
            type: 'Polygon',
            arcs: [[726]],
            id: 'BHR',
            properties: { name: 'Bahrain' }
          },
          {
            type: 'MultiPolygon',
            arcs: [[[727]], [[728]]],
            id: 'MDV',
            properties: { name: 'Maldives' }
          },
          {
            type: 'MultiPolygon',
            arcs: [[[729]], [[730]]],
            id: 'MHL',
            properties: { name: 'Marshall Islands' }
          },
          {
            type: 'MultiPolygon',
            arcs: [[[731]], [[732]], [[733]], [[734]], [[735]]],
            id: 'FSM',
            properties: { name: 'Micronesia (country)' }
          },
          {
            type: 'Polygon',
            arcs: [[736]],
            id: 'NRU',
            properties: { name: 'Nauru' }
          },
          {
            type: 'Polygon',
            arcs: [[737]],
            id: 'PLW',
            properties: { name: 'Palau' }
          },
          {
            type: 'MultiPolygon',
            arcs: [[[738]], [[739]]],
            id: 'WSM',
            properties: { name: 'Samoa' }
          },
          {
            type: 'Polygon',
            arcs: [[515, 740]],
            id: 'SGP',
            properties: { name: 'Singapore' }
          },
          {
            type: 'MultiPolygon',
            arcs: [[[741]], [[742]], [[743]]],
            id: 'TON',
            properties: { name: 'Tonga' }
          },
          {
            type: 'MultiPolygon',
            arcs: [
              [[744]],
              [[745]],
              [[746]],
              [[747]],
              [[748]],
              [[749]],
              [[750]]
            ],
            id: 'TUV',
            properties: { name: 'Tuvalu' }
          },
          {
            type: 'MultiPolygon',
            arcs: [[[751]], [[752]]],
            id: 'ATG',
            properties: { name: 'Antigua and Barbuda' }
          },
          {
            type: 'Polygon',
            arcs: [[753]],
            id: 'BRB',
            properties: { name: 'Barbados' }
          },
          {
            type: 'Polygon',
            arcs: [[754]],
            id: 'DMA',
            properties: { name: 'Dominica' }
          },
          {
            type: 'Polygon',
            arcs: [[755]],
            id: 'GRD',
            properties: { name: 'Grenada' }
          },
          {
            type: 'MultiPolygon',
            arcs: [[[756]], [[757]]],
            id: 'KNA',
            properties: { name: 'Saint Kitts and Nevis' }
          },
          {
            type: 'Polygon',
            arcs: [[758]],
            id: 'LCA',
            properties: { name: 'Saint Lucia' }
          },
          {
            type: 'Polygon',
            arcs: [[759]],
            id: 'VCT',
            properties: { name: 'Saint Vincent and the Grenadines' }
          },
          {
            type: 'Polygon',
            arcs: [[760]],
            id: 'AND',
            properties: { name: 'Andorra' }
          },
          {
            type: 'Polygon',
            arcs: [[-45, 761, -166, 762]],
            id: 'LIE',
            properties: { name: 'Liechtenstein' }
          },
          {
            type: 'Polygon',
            arcs: [[763]],
            id: 'MLT',
            properties: { name: 'Malta' }
          },
          {
            type: 'Polygon',
            arcs: [[764]],
            id: 'MCO',
            properties: { name: 'Monaco' }
          },
          {
            type: 'Polygon',
            arcs: [[765]],
            id: 'SMR',
            properties: { name: 'San Marino' }
          },
          {
            type: 'Polygon',
            arcs: [[766]],
            id: 'KIR',
            properties: { name: 'Kiribati' }
          },
          {
            type: 'Polygon',
            arcs: [[767]],
            id: 'STP',
            properties: { name: 'Sao Tome and Principe' }
          }
        ]
      }
    },
    arcs: [
      [
        [61.21, 35.65],
        [62.23, 35.27],
        [62.98, 35.4],
        [63.19, 35.86],
        [63.98, 36.01],
        [64.55, 36.31],
        [64.75, 37.11],
        [65.59, 37.31],
        [65.75, 37.66],
        [66.22, 37.39],
        [66.52, 37.36]
      ],
      [
        [66.52, 37.36],
        [67.08, 37.36],
        [67.83, 37.14]
      ],
      [
        [67.83, 37.14],
        [68.14, 37.02],
        [68.86, 37.34],
        [69.2, 37.15],
        [69.52, 37.61],
        [70.12, 37.59],
        [70.27, 37.74],
        [70.38, 38.14],
        [70.81, 38.49],
        [71.35, 38.26],
        [71.24, 37.95],
        [71.54, 37.91],
        [71.45, 37.07],
        [71.84, 36.74],
        [72.19, 36.95],
        [72.64, 37.05],
        [73.26, 37.5],
        [73.95, 37.42],
        [74.98, 37.42]
      ],
      [
        [74.98, 37.42],
        [75.16, 37.13]
      ],
      [
        [75.16, 37.13],
        [74.58, 37.02],
        [74.07, 36.84],
        [72.92, 36.72],
        [71.85, 36.51],
        [71.26, 36.07],
        [71.5, 35.65],
        [71.61, 35.15],
        [71.12, 34.73],
        [71.16, 34.35],
        [70.88, 33.99],
        [69.93, 34.02],
        [70.32, 33.36],
        [69.69, 33.11],
        [69.26, 32.5],
        [69.32, 31.9],
        [68.93, 31.62],
        [68.56, 31.71],
        [67.79, 31.58],
        [67.68, 31.3],
        [66.94, 31.3],
        [66.38, 30.74],
        [66.35, 29.89],
        [65.05, 29.47],
        [64.35, 29.56],
        [64.15, 29.34],
        [63.55, 29.47],
        [62.55, 29.32],
        [60.87, 29.83]
      ],
      [
        [60.87, 29.83],
        [61.78, 30.74],
        [61.7, 31.38],
        [60.94, 31.55],
        [60.86, 32.18],
        [60.54, 32.98],
        [60.96, 33.53],
        [60.53, 33.68],
        [60.8, 34.4],
        [61.21, 35.65]
      ],
      [
        [23.91, -10.93],
        [24.02, -11.24],
        [23.9, -11.72],
        [24.08, -12.19],
        [23.93, -12.57],
        [24.02, -12.91],
        [21.93, -12.9],
        [21.89, -16.08],
        [22.56, -16.9],
        [23.22, -17.52]
      ],
      [
        [23.22, -17.52],
        [21.38, -17.93],
        [18.96, -17.79],
        [18.26, -17.31],
        [14.21, -17.35],
        [14.06, -17.42],
        [13.46, -16.97],
        [12.81, -16.94],
        [12.22, -17.11],
        [11.73, -17.3]
      ],
      [
        [11.73, -17.3],
        [11.64, -16.67],
        [11.78, -15.79],
        [12.12, -14.88],
        [12.18, -14.45],
        [12.5, -13.55],
        [12.74, -13.14],
        [13.31, -12.48],
        [13.63, -12.04],
        [13.74, -11.3],
        [13.69, -10.73],
        [13.39, -10.37],
        [13.12, -9.77],
        [12.88, -9.17],
        [12.93, -8.96],
        [13.24, -8.56],
        [12.93, -7.6],
        [12.73, -6.93],
        [12.23, -6.29],
        [12.32, -6.1]
      ],
      [
        [12.32, -6.1],
        [12.74, -5.97],
        [13.02, -5.98],
        [13.38, -5.86],
        [16.33, -5.88],
        [16.57, -6.62],
        [16.86, -7.22],
        [17.09, -7.55],
        [17.47, -8.07],
        [18.13, -7.99],
        [18.46, -7.85],
        [19.02, -7.99],
        [19.17, -7.74],
        [19.42, -7.16],
        [20.04, -7.12],
        [20.09, -6.94],
        [20.6, -6.94],
        [20.51, -7.3],
        [21.73, -7.29],
        [21.75, -7.92],
        [21.95, -8.31],
        [21.8, -8.91],
        [21.88, -9.52],
        [22.21, -9.89],
        [22.16, -11.08],
        [22.4, -10.99],
        [22.84, -11.02],
        [23.46, -10.87],
        [23.91, -10.93]
      ],
      [
        [12.18, -5.79],
        [11.91, -5.04]
      ],
      [
        [11.91, -5.04],
        [12.32, -4.61],
        [12.62, -4.44],
        [13, -4.78]
      ],
      [
        [13, -4.78],
        [12.63, -4.99],
        [12.47, -5.25],
        [12.44, -5.68],
        [12.18, -5.79]
      ],
      [
        [21.02, 40.84],
        [21, 40.58],
        [20.67, 40.44],
        [20.62, 40.11],
        [20.15, 39.62]
      ],
      [
        [20.15, 39.62],
        [19.98, 39.69],
        [19.96, 39.92],
        [19.41, 40.25],
        [19.32, 40.73],
        [19.4, 41.41],
        [19.54, 41.72],
        [19.37, 41.88],
        [19.3, 42.2],
        [19.74, 42.69]
      ],
      [
        [19.74, 42.69],
        [19.8, 42.5],
        [20.07, 42.59]
      ],
      [
        [20.07, 42.59],
        [20.28, 42.32],
        [20.52, 42.22]
      ],
      [
        [20.52, 42.22],
        [20.59, 41.86],
        [20.46, 41.52],
        [20.61, 41.09],
        [21.02, 40.84]
      ],
      [
        [51.58, 24.25],
        [51.76, 24.29],
        [51.79, 24.02],
        [52.58, 24.18],
        [53.4, 24.15],
        [54.01, 24.12],
        [54.69, 24.8],
        [55.44, 25.44],
        [56.07, 26.06]
      ],
      [
        [56.07, 26.06],
        [56.26, 25.71]
      ],
      [
        [56.26, 25.71],
        [56.4, 24.92]
      ],
      [
        [56.4, 24.92],
        [55.89, 24.92],
        [55.8, 24.27],
        [55.98, 24.13],
        [55.53, 23.93],
        [55.53, 23.52],
        [55.23, 23.11],
        [55.21, 22.71]
      ],
      [
        [55.21, 22.71],
        [55.01, 22.5],
        [52, 23],
        [51.62, 24.01],
        [51.58, 24.25]
      ],
      [
        [-66.96, -54.9],
        [-67.56, -54.87],
        [-68.63, -54.87],
        [-68.63, -52.64]
      ],
      [
        [-68.63, -52.64],
        [-68.25, -53.1],
        [-67.75, -53.85],
        [-66.45, -54.45],
        [-65.05, -54.7],
        [-65.5, -55.2],
        [-66.45, -55.25],
        [-66.96, -54.9]
      ],
      [
        [-62.69, -22.25],
        [-60.85, -23.88],
        [-60.03, -24.03],
        [-58.81, -24.77],
        [-57.78, -25.16],
        [-57.63, -25.6],
        [-58.62, -27.12],
        [-57.61, -27.4],
        [-56.49, -27.55],
        [-55.7, -27.39],
        [-54.79, -26.62],
        [-54.63, -25.74]
      ],
      [
        [-54.63, -25.74],
        [-54.13, -25.55],
        [-53.63, -26.12],
        [-53.65, -26.92],
        [-54.49, -27.47],
        [-55.16, -27.88],
        [-56.29, -28.85],
        [-57.63, -30.22]
      ],
      [
        [-57.63, -30.22],
        [-57.87, -31.02],
        [-58.14, -32.04],
        [-58.13, -33.04],
        [-58.35, -33.26],
        [-58.43, -33.91]
      ],
      [
        [-58.43, -33.91],
        [-58.5, -34.43],
        [-57.23, -35.29],
        [-57.36, -35.98],
        [-56.74, -36.41],
        [-56.79, -36.9],
        [-57.75, -38.18],
        [-59.23, -38.72],
        [-61.24, -38.93],
        [-62.34, -38.83],
        [-62.13, -39.42],
        [-62.33, -40.17],
        [-62.15, -40.68],
        [-62.75, -41.03],
        [-63.77, -41.17],
        [-64.73, -40.8],
        [-65.12, -41.06],
        [-64.98, -42.06],
        [-64.3, -42.36],
        [-63.76, -42.04],
        [-63.46, -42.56],
        [-64.38, -42.87],
        [-65.18, -43.5],
        [-65.33, -44.5],
        [-65.57, -45.04],
        [-66.51, -45.04],
        [-67.29, -45.55],
        [-67.58, -46.3],
        [-66.6, -47.03],
        [-65.64, -47.24],
        [-65.99, -48.13],
        [-67.17, -48.7],
        [-67.82, -49.87],
        [-68.73, -50.26],
        [-69.14, -50.73],
        [-68.82, -51.77],
        [-68.15, -52.35],
        [-68.57, -52.3]
      ],
      [
        [-68.57, -52.3],
        [-69.5, -52.14],
        [-71.91, -52.01],
        [-72.33, -51.43],
        [-72.31, -50.68],
        [-72.98, -50.74],
        [-73.33, -50.38],
        [-73.42, -49.32],
        [-72.65, -48.88],
        [-72.33, -48.24],
        [-72.45, -47.74],
        [-71.92, -46.88],
        [-71.55, -45.56],
        [-71.66, -44.97],
        [-71.22, -44.78],
        [-71.33, -44.41],
        [-71.79, -44.21],
        [-71.46, -43.79],
        [-71.92, -43.41],
        [-72.15, -42.25],
        [-71.75, -42.05],
        [-71.92, -40.83],
        [-71.68, -39.81],
        [-71.41, -38.92],
        [-70.81, -38.55],
        [-71.12, -37.58],
        [-71.12, -36.66],
        [-70.36, -36.01],
        [-70.39, -35.17],
        [-69.82, -34.19],
        [-69.81, -33.27],
        [-70.07, -33.09],
        [-70.54, -31.37],
        [-69.92, -30.34],
        [-70.01, -29.37],
        [-69.66, -28.46],
        [-69, -27.52],
        [-68.3, -26.9],
        [-68.59, -26.51],
        [-68.39, -26.19],
        [-68.42, -24.52],
        [-67.33, -24.03],
        [-66.99, -22.99],
        [-67.11, -22.74]
      ],
      [
        [-67.11, -22.74],
        [-66.27, -21.83],
        [-64.96, -22.08],
        [-64.38, -22.8],
        [-63.99, -21.99],
        [-62.85, -22.03],
        [-62.69, -22.25]
      ],
      [
        [43.58, 41.09],
        [44.97, 41.25]
      ],
      [
        [44.97, 41.25],
        [45.18, 40.99],
        [45.56, 40.81],
        [45.36, 40.56],
        [45.89, 40.22],
        [45.61, 39.9],
        [46.03, 39.63],
        [46.48, 39.46],
        [46.51, 38.77]
      ],
      [
        [46.51, 38.77],
        [46.14, 38.74]
      ],
      [
        [46.14, 38.74],
        [45.74, 39.32],
        [45.74, 39.47],
        [45.3, 39.47],
        [45, 39.74],
        [44.79, 39.71]
      ],
      [
        [44.79, 39.71],
        [44.4, 40.01],
        [43.66, 40.25],
        [43.75, 40.74],
        [43.58, 41.09]
      ],
      [
        [68.94, -48.62],
        [69.58, -48.94],
        [70.53, -49.06],
        [70.56, -49.25],
        [70.28, -49.71],
        [68.75, -49.77],
        [68.72, -49.24],
        [68.87, -48.83],
        [68.94, -48.62]
      ],
      [
        [145.4, -40.79],
        [146.36, -41.14],
        [146.91, -41],
        [147.69, -40.81],
        [148.29, -40.88],
        [148.36, -42.06],
        [148.02, -42.41],
        [147.91, -43.21],
        [147.56, -42.94],
        [146.87, -43.63],
        [146.66, -43.58],
        [146.05, -43.55],
        [145.43, -42.69],
        [145.3, -42.03],
        [144.72, -41.16],
        [144.74, -40.7],
        [145.4, -40.79]
      ],
      [
        [143.56, -13.76],
        [143.92, -14.55],
        [144.56, -14.17],
        [144.89, -14.59],
        [145.37, -14.98],
        [145.27, -15.43],
        [145.49, -16.29],
        [145.64, -16.78],
        [145.89, -16.91],
        [146.16, -17.76],
        [146.06, -18.28],
        [146.39, -18.96],
        [147.47, -19.48],
        [148.18, -19.96],
        [148.85, -20.39],
        [148.72, -20.63],
        [149.29, -21.26],
        [149.68, -22.34],
        [150.08, -22.12],
        [150.48, -22.56],
        [150.73, -22.4],
        [150.9, -23.46],
        [151.61, -24.08],
        [152.07, -24.46],
        [152.86, -25.27],
        [153.14, -26.07],
        [153.16, -26.64],
        [153.09, -27.26],
        [153.57, -28.11],
        [153.51, -29],
        [153.34, -29.46],
        [153.07, -30.35],
        [153.09, -30.92],
        [152.89, -31.64],
        [152.45, -32.55],
        [151.71, -33.04],
        [151.34, -33.82],
        [151.01, -34.31],
        [150.71, -35.17],
        [150.33, -35.67],
        [150.08, -36.42],
        [149.95, -37.11],
        [150, -37.43],
        [149.42, -37.77],
        [148.3, -37.81],
        [147.38, -38.22],
        [146.92, -38.61],
        [146.32, -39.04],
        [145.49, -38.59],
        [144.88, -38.42],
        [145.03, -37.9],
        [144.49, -38.09],
        [143.61, -38.81],
        [142.75, -38.54],
        [142.18, -38.38],
        [141.61, -38.31],
        [140.64, -38.02],
        [139.99, -37.4],
        [139.81, -36.64],
        [139.57, -36.14],
        [139.08, -35.73],
        [138.12, -35.61],
        [138.45, -35.13],
        [138.21, -34.38],
        [137.72, -35.08],
        [136.83, -35.26],
        [137.35, -34.71],
        [137.5, -34.13],
        [137.89, -33.64],
        [137.81, -32.9],
        [137, -33.75],
        [136.37, -34.09],
        [135.99, -34.89],
        [135.21, -34.48],
        [135.24, -33.95],
        [134.61, -33.22],
        [134.09, -32.85],
        [134.27, -32.62],
        [132.99, -32.01],
        [132.29, -31.98],
        [131.33, -31.5],
        [129.54, -31.59],
        [128.24, -31.95],
        [127.1, -32.28],
        [126.15, -32.22],
        [125.09, -32.73],
        [124.22, -32.96],
        [124.03, -33.48],
        [123.66, -33.89],
        [122.81, -33.91],
        [122.18, -34],
        [121.3, -33.82],
        [120.58, -33.93],
        [119.89, -33.98],
        [119.3, -34.51],
        [119.01, -34.46],
        [118.51, -34.75],
        [118.02, -35.06],
        [117.3, -35.03],
        [116.63, -35.03],
        [115.56, -34.39],
        [115.03, -34.2],
        [115.05, -33.62],
        [115.55, -33.49],
        [115.71, -33.26],
        [115.68, -32.9],
        [115.8, -32.21],
        [115.69, -31.61],
        [115.16, -30.6],
        [115, -30.03],
        [115.04, -29.46],
        [114.64, -28.81],
        [114.62, -28.52],
        [114.17, -28.12],
        [114.05, -27.33],
        [113.48, -26.54],
        [113.34, -26.12],
        [113.78, -26.55],
        [113.44, -25.62],
        [113.94, -25.91],
        [114.23, -26.3],
        [114.22, -25.79],
        [113.72, -25],
        [113.63, -24.68],
        [113.39, -24.38],
        [113.5, -23.81],
        [113.71, -23.56],
        [113.84, -23.06],
        [113.74, -22.48],
        [114.15, -21.76],
        [114.23, -22.52],
        [114.65, -21.83],
        [115.46, -21.5],
        [115.95, -21.07],
        [116.71, -20.7],
        [117.17, -20.62],
        [117.44, -20.75],
        [118.23, -20.37],
        [118.84, -20.26],
        [118.99, -20.04],
        [119.25, -19.95],
        [119.81, -19.98],
        [120.86, -19.68],
        [121.4, -19.24],
        [121.66, -18.71],
        [122.24, -18.2],
        [122.29, -17.8],
        [122.31, -17.25],
        [123.01, -16.41],
        [123.43, -17.27],
        [123.86, -17.07],
        [123.5, -16.6],
        [123.82, -16.11],
        [124.26, -16.33],
        [124.38, -15.57],
        [124.93, -15.08],
        [125.17, -14.68],
        [125.67, -14.51],
        [125.69, -14.23],
        [126.13, -14.35],
        [126.14, -14.1],
        [126.58, -13.95],
        [127.07, -13.82],
        [127.8, -14.28],
        [128.36, -14.87],
        [128.99, -14.88],
        [129.62, -14.97],
        [129.41, -14.42],
        [129.89, -13.62],
        [130.34, -13.36],
        [130.18, -13.11],
        [130.62, -12.54],
        [131.22, -12.18],
        [131.74, -12.3],
        [132.58, -12.11],
        [132.56, -11.6],
        [131.82, -11.27],
        [132.36, -11.13],
        [133.02, -11.38],
        [133.55, -11.79],
        [134.39, -12.04],
        [134.68, -11.94],
        [135.3, -12.25],
        [135.88, -11.96],
        [136.26, -12.05],
        [136.49, -11.86],
        [136.95, -12.35],
        [136.69, -12.89],
        [136.31, -13.29],
        [135.96, -13.32],
        [136.08, -13.72],
        [135.78, -14.22],
        [135.43, -14.72],
        [135.5, -15],
        [136.3, -15.55],
        [137.07, -15.87],
        [137.58, -16.22],
        [138.3, -16.81],
        [138.59, -16.81],
        [139.11, -17.06],
        [139.26, -17.37],
        [140.22, -17.71],
        [140.88, -17.37],
        [141.07, -16.83],
        [141.27, -16.39],
        [141.4, -15.84],
        [141.7, -15.04],
        [141.56, -14.56],
        [141.64, -14.27],
        [141.52, -13.7],
        [141.65, -12.94],
        [141.84, -12.74],
        [141.69, -12.41],
        [141.93, -11.88],
        [142.12, -11.33],
        [142.14, -11.04],
        [142.52, -10.67],
        [142.8, -11.16],
        [142.87, -11.78],
        [143.12, -11.91],
        [143.16, -12.33],
        [143.52, -12.83],
        [143.6, -13.4],
        [143.56, -13.76]
      ],
      [
        [16.98, 48.12],
        [16.9, 47.71],
        [16.34, 47.71],
        [16.53, 47.5],
        [16.2, 46.85]
      ],
      [
        [16.2, 46.85],
        [16.01, 46.68],
        [15.14, 46.66],
        [14.63, 46.43],
        [13.81, 46.51]
      ],
      [
        [13.81, 46.51],
        [12.38, 46.77],
        [12.15, 47.12],
        [11.16, 46.94],
        [11.05, 46.75],
        [10.44, 46.89]
      ],
      [
        [10.44, 46.89],
        [9.88, 46.93],
        [9.87, 47.02]
      ],
      [
        [9.87, 47.02],
        [9.61, 47.06]
      ],
      [
        [9.61, 47.06],
        [9.64, 47.1],
        [9.62, 47.15],
        [9.56, 47.17],
        [9.58, 47.21]
      ],
      [
        [9.58, 47.21],
        [9.53, 47.27],
        [9.63, 47.36]
      ],
      [
        [9.63, 47.36],
        [9.59, 47.53]
      ],
      [
        [9.59, 47.53],
        [9.9, 47.58],
        [10.4, 47.3],
        [10.54, 47.57],
        [11.43, 47.52],
        [12.14, 47.7],
        [12.62, 47.67],
        [12.93, 47.47],
        [13.03, 47.64],
        [12.88, 48.29],
        [13.24, 48.42],
        [13.6, 48.88]
      ],
      [
        [13.6, 48.88],
        [14.34, 48.56],
        [14.9, 48.96],
        [15.25, 49.04],
        [16.03, 48.73],
        [16.5, 48.79],
        [16.96, 48.6]
      ],
      [
        [16.96, 48.6],
        [16.88, 48.47],
        [16.98, 48.12]
      ],
      [
        [46.14, 38.74],
        [45.46, 38.87],
        [44.95, 39.34],
        [44.79, 39.71]
      ],
      [
        [47.99, 41.41],
        [48.58, 41.81],
        [49.11, 41.28],
        [49.62, 40.57],
        [50.08, 40.53],
        [50.39, 40.26],
        [49.57, 40.18],
        [49.4, 39.4],
        [49.22, 39.05],
        [48.86, 38.82],
        [48.88, 38.32]
      ],
      [
        [48.88, 38.32],
        [48.63, 38.27],
        [48.01, 38.79],
        [48.36, 39.29],
        [48.06, 39.58],
        [47.69, 39.51],
        [46.51, 38.77]
      ],
      [
        [44.97, 41.25],
        [45.22, 41.41],
        [45.96, 41.12],
        [46.5, 41.06],
        [46.64, 41.18],
        [46.15, 41.72],
        [46.4, 41.86]
      ],
      [
        [46.4, 41.86],
        [46.69, 41.83],
        [47.37, 41.22],
        [47.82, 41.15],
        [47.99, 41.41]
      ],
      [
        [29.34, -4.5],
        [29.28, -3.29],
        [29.02, -2.84]
      ],
      [
        [29.02, -2.84],
        [29.63, -2.92],
        [29.94, -2.35],
        [30.47, -2.41]
      ],
      [
        [30.47, -2.41],
        [30.53, -2.81],
        [30.74, -3.03],
        [30.75, -3.36],
        [30.51, -3.57],
        [30.12, -4.09],
        [29.75, -4.45]
      ],
      [
        [29.75, -4.45],
        [29.34, -4.5]
      ],
      [
        [4.05, 51.27],
        [4.97, 51.48],
        [5.61, 51.04],
        [6.16, 50.8]
      ],
      [
        [6.16, 50.8],
        [6.04, 50.13]
      ],
      [
        [6.04, 50.13],
        [5.78, 50.09],
        [5.67, 49.53]
      ],
      [
        [5.67, 49.53],
        [4.8, 49.99],
        [4.29, 49.91],
        [3.59, 50.38],
        [3.12, 50.78],
        [2.66, 50.8],
        [2.51, 51.15]
      ],
      [
        [2.51, 51.15],
        [3.31, 51.35],
        [4.05, 51.27]
      ],
      [
        [2.69, 6.26],
        [1.87, 6.14]
      ],
      [
        [1.87, 6.14],
        [1.62, 6.83],
        [1.66, 9.13],
        [1.46, 9.33],
        [1.43, 9.83],
        [1.08, 10.18],
        [0.77, 10.47],
        [0.9, 11]
      ],
      [
        [0.9, 11],
        [1.24, 11.11],
        [1.45, 11.55],
        [1.94, 11.64],
        [2.15, 11.94]
      ],
      [
        [2.15, 11.94],
        [2.49, 12.23],
        [2.85, 12.24],
        [3.61, 11.66]
      ],
      [
        [3.61, 11.66],
        [3.57, 11.33],
        [3.8, 10.73],
        [3.6, 10.33],
        [3.71, 10.06],
        [3.22, 9.44],
        [2.91, 9.14],
        [2.72, 8.51],
        [2.75, 7.87],
        [2.69, 6.26]
      ],
      [
        [-2.83, 9.64],
        [-3.51, 9.9],
        [-3.98, 9.86],
        [-4.33, 9.61],
        [-4.78, 9.82],
        [-4.95, 10.15],
        [-5.4, 10.37]
      ],
      [
        [-5.4, 10.37],
        [-5.47, 10.95],
        [-5.2, 11.38],
        [-5.22, 11.71],
        [-4.43, 12.54],
        [-4.28, 13.23],
        [-4.01, 13.47],
        [-3.52, 13.34],
        [-3.1, 13.54],
        [-2.97, 13.8],
        [-2.19, 14.25],
        [-2, 14.56],
        [-1.07, 14.97],
        [-0.52, 15.12],
        [-0.27, 14.92],
        [0.37, 14.93]
      ],
      [
        [0.37, 14.93],
        [0.3, 14.44],
        [0.43, 13.99],
        [0.99, 13.34],
        [1.02, 12.85],
        [2.18, 12.63],
        [2.15, 11.94]
      ],
      [
        [0.9, 11],
        [0.02, 11.02]
      ],
      [
        [0.02, 11.02],
        [-0.44, 11.1],
        [-0.76, 10.94],
        [-1.2, 11.01],
        [-2.94, 10.96],
        [-2.96, 10.4],
        [-2.83, 9.64]
      ],
      [
        [92.67, 22.04],
        [92.65, 21.32],
        [92.3, 21.48],
        [92.37, 20.67]
      ],
      [
        [92.37, 20.67],
        [92.08, 21.19],
        [92.03, 21.7],
        [91.83, 22.18],
        [91.42, 22.77],
        [90.5, 22.81],
        [90.59, 22.39],
        [90.27, 21.84],
        [89.85, 22.04],
        [89.7, 21.86],
        [89.42, 21.97],
        [89.03, 22.06]
      ],
      [
        [89.03, 22.06],
        [88.88, 22.88],
        [88.53, 23.63],
        [88.7, 24.23],
        [88.08, 24.5],
        [88.31, 24.87],
        [88.93, 25.24],
        [88.21, 25.77],
        [88.56, 26.45],
        [89.36, 26.01],
        [89.83, 25.97],
        [89.92, 25.27],
        [90.87, 25.13],
        [91.8, 25.15],
        [92.38, 24.98],
        [91.92, 24.13],
        [91.47, 24.07],
        [91.16, 23.5],
        [91.71, 22.99],
        [91.87, 23.62],
        [92.15, 23.63],
        [92.67, 22.04]
      ],
      [
        [22.66, 44.23],
        [22.94, 43.82],
        [23.33, 43.9],
        [24.1, 43.74],
        [25.57, 43.69],
        [26.07, 43.94],
        [27.24, 44.18],
        [27.97, 43.81],
        [28.56, 43.71]
      ],
      [
        [28.56, 43.71],
        [28.04, 43.29],
        [27.67, 42.58],
        [28, 42.01]
      ],
      [
        [28, 42.01],
        [27.14, 42.14],
        [26.12, 41.83]
      ],
      [
        [26.12, 41.83],
        [26.11, 41.33],
        [25.2, 41.23],
        [24.49, 41.58],
        [23.69, 41.31],
        [22.95, 41.34]
      ],
      [
        [22.95, 41.34],
        [22.88, 42],
        [22.38, 42.32]
      ],
      [
        [22.38, 42.32],
        [22.55, 42.46],
        [22.44, 42.58],
        [22.6, 42.9],
        [22.99, 43.21],
        [22.5, 43.64],
        [22.41, 44.01],
        [22.66, 44.23]
      ],
      [
        [-77.53, 23.76],
        [-77.78, 23.71],
        [-78.03, 24.29],
        [-78.41, 24.58],
        [-78.19, 25.21],
        [-77.89, 25.17],
        [-77.54, 24.34],
        [-77.53, 23.76]
      ],
      [
        [-77.82, 26.58],
        [-78.91, 26.42],
        [-78.98, 26.79],
        [-78.51, 26.87],
        [-77.85, 26.84],
        [-77.82, 26.58]
      ],
      [
        [-77, 26.59],
        [-77.17, 25.88],
        [-77.36, 26.01],
        [-77.34, 26.53],
        [-77.79, 26.93],
        [-77.79, 27.04],
        [-77, 26.59]
      ],
      [
        [19.01, 44.86],
        [19.37, 44.86]
      ],
      [
        [19.37, 44.86],
        [19.12, 44.42],
        [19.6, 44.04],
        [19.45, 43.57],
        [19.22, 43.52]
      ],
      [
        [19.22, 43.52],
        [19.03, 43.43],
        [18.71, 43.2],
        [18.56, 42.65]
      ],
      [
        [18.56, 42.65],
        [17.67, 43.03],
        [17.3, 43.45],
        [16.92, 43.67],
        [16.46, 44.04],
        [16.24, 44.35],
        [15.75, 44.82],
        [15.96, 45.23],
        [16.32, 45],
        [16.53, 45.21],
        [17, 45.23],
        [17.86, 45.07],
        [18.55, 45.08],
        [19.01, 44.86]
      ],
      [
        [23.48, 53.91],
        [24.45, 53.91],
        [25.54, 54.28],
        [25.77, 54.85],
        [26.59, 55.17],
        [26.49, 55.62]
      ],
      [
        [26.49, 55.62],
        [27.1, 55.78],
        [28.18, 56.17]
      ],
      [
        [28.18, 56.17],
        [29.23, 55.92],
        [29.37, 55.67],
        [29.9, 55.79],
        [30.87, 55.55],
        [30.97, 55.08],
        [30.76, 54.81],
        [31.38, 54.16],
        [31.79, 53.97],
        [31.73, 53.79],
        [32.41, 53.62],
        [32.69, 53.35],
        [32.3, 53.13]
      ],
      [
        [32.3, 53.13],
        [31.5, 53.17],
        [31.31, 53.07]
      ],
      [
        [31.31, 53.07],
        [31.54, 52.74]
      ],
      [
        [31.54, 52.74],
        [31.79, 52.1]
      ],
      [
        [31.79, 52.1],
        [30.93, 52.04],
        [30.62, 51.82],
        [30.56, 51.32],
        [30.16, 51.42],
        [29.25, 51.37],
        [28.99, 51.6],
        [28.62, 51.43],
        [28.24, 51.57],
        [27.45, 51.59],
        [26.34, 51.83],
        [25.33, 51.91],
        [24.55, 51.89],
        [24.01, 51.62],
        [23.53, 51.58]
      ],
      [
        [23.53, 51.58],
        [23.51, 52.02],
        [23.2, 52.49],
        [23.8, 52.69],
        [23.8, 53.09],
        [23.53, 53.47],
        [23.48, 53.91]
      ],
      [
        [-89.14, 17.81],
        [-89.15, 17.96],
        [-89.03, 18],
        [-88.85, 17.88],
        [-88.49, 18.49],
        [-88.3, 18.5]
      ],
      [
        [-88.3, 18.5],
        [-88.3, 18.35],
        [-88.11, 18.35],
        [-88.12, 18.08],
        [-88.29, 17.64],
        [-88.2, 17.49],
        [-88.3, 17.13],
        [-88.24, 17.04],
        [-88.36, 16.53],
        [-88.55, 16.27],
        [-88.73, 16.23],
        [-88.93, 15.89]
      ],
      [
        [-88.93, 15.89],
        [-89.23, 15.89],
        [-89.15, 17.02],
        [-89.14, 17.81]
      ],
      [
        [-67.11, -22.74],
        [-67.83, -22.87],
        [-68.22, -21.49],
        [-68.76, -20.37],
        [-68.44, -19.41],
        [-68.97, -18.98],
        [-69.1, -18.26],
        [-69.59, -17.58]
      ],
      [
        [-69.59, -17.58],
        [-68.96, -16.5],
        [-69.39, -15.66],
        [-69.16, -15.32],
        [-69.34, -14.95],
        [-68.95, -14.45],
        [-68.93, -13.6],
        [-68.88, -12.9],
        [-68.67, -12.56],
        [-69.53, -10.95]
      ],
      [
        [-69.53, -10.95],
        [-68.79, -11.04],
        [-68.27, -11.01],
        [-68.05, -10.71],
        [-67.17, -10.31],
        [-66.65, -9.93],
        [-65.34, -9.76],
        [-65.44, -10.51],
        [-65.32, -10.9],
        [-65.4, -11.57],
        [-64.32, -12.46],
        [-63.2, -12.63],
        [-62.8, -13],
        [-62.13, -13.2],
        [-61.71, -13.49],
        [-61.08, -13.48],
        [-60.5, -13.78],
        [-60.46, -14.35],
        [-60.26, -14.65],
        [-60.25, -15.08],
        [-60.54, -15.09],
        [-60.16, -16.26],
        [-58.24, -16.3],
        [-58.39, -16.88],
        [-58.28, -17.27],
        [-57.73, -17.55],
        [-57.5, -18.17],
        [-57.68, -18.96],
        [-57.95, -19.4],
        [-57.85, -19.97],
        [-58.17, -20.18]
      ],
      [
        [-58.17, -20.18],
        [-58.18, -19.87],
        [-59.12, -19.36],
        [-60.04, -19.34],
        [-61.79, -19.63],
        [-62.27, -20.51],
        [-62.29, -21.05],
        [-62.69, -22.25]
      ],
      [
        [-54.63, -25.74],
        [-54.43, -25.16],
        [-54.29, -24.57],
        [-54.29, -24.02],
        [-54.65, -23.84],
        [-55.03, -24],
        [-55.4, -23.96],
        [-55.52, -23.57],
        [-55.61, -22.66],
        [-55.8, -22.36],
        [-56.47, -22.09],
        [-56.88, -22.28],
        [-57.94, -22.09],
        [-57.87, -20.73],
        [-58.17, -20.18]
      ],
      [
        [-69.53, -10.95],
        [-70.09, -11.12],
        [-70.55, -11.01],
        [-70.48, -9.49],
        [-71.3, -10.08],
        [-72.18, -10.05],
        [-72.56, -9.52],
        [-73.23, -9.46],
        [-73.02, -9.03],
        [-73.57, -8.42],
        [-73.99, -7.52],
        [-73.72, -7.34],
        [-73.72, -6.92],
        [-73.12, -6.63],
        [-73.22, -6.09],
        [-72.96, -5.74],
        [-72.89, -5.27],
        [-71.75, -4.59],
        [-70.93, -4.4],
        [-70.79, -4.25],
        [-69.89, -4.3]
      ],
      [
        [-69.89, -4.3],
        [-69.44, -1.56],
        [-69.42, -1.12],
        [-69.58, -0.55],
        [-70.02, -0.19],
        [-70.02, 0.54],
        [-69.45, 0.71],
        [-69.25, 0.6],
        [-69.22, 0.99],
        [-69.8, 1.09],
        [-69.82, 1.71],
        [-67.87, 1.69],
        [-67.54, 2.04],
        [-67.26, 1.72],
        [-67.07, 1.13],
        [-66.88, 1.25]
      ],
      [
        [-66.88, 1.25],
        [-66.33, 0.72],
        [-65.55, 0.79],
        [-65.35, 1.1],
        [-64.61, 1.33],
        [-64.2, 1.49],
        [-64.08, 1.92],
        [-63.37, 2.2],
        [-63.42, 2.41],
        [-64.27, 2.5],
        [-64.41, 3.13],
        [-64.37, 3.8],
        [-64.82, 4.06],
        [-64.63, 4.15],
        [-63.89, 4.02],
        [-63.09, 3.77],
        [-62.8, 4.01],
        [-62.09, 4.16],
        [-60.97, 4.54],
        [-60.6, 4.92],
        [-60.73, 5.2]
      ],
      [
        [-60.73, 5.2],
        [-60.21, 5.24],
        [-59.98, 5.01],
        [-60.11, 4.57],
        [-59.77, 4.42],
        [-59.54, 3.96],
        [-59.82, 3.61],
        [-59.97, 2.76],
        [-59.72, 2.25],
        [-59.65, 1.79],
        [-59.03, 1.32],
        [-58.54, 1.27],
        [-58.43, 1.46],
        [-58.11, 1.51],
        [-57.66, 1.68],
        [-57.34, 1.95],
        [-56.78, 1.86],
        [-56.54, 1.9]
      ],
      [
        [-56.54, 1.9],
        [-56, 1.82],
        [-55.91, 2.02],
        [-56.07, 2.22],
        [-55.97, 2.51],
        [-55.57, 2.42],
        [-55.1, 2.52],
        [-54.52, 2.31]
      ],
      [
        [-54.52, 2.31],
        [-54.09, 2.11],
        [-53.78, 2.38],
        [-53.55, 2.33],
        [-53.42, 2.05],
        [-52.94, 2.12],
        [-52.56, 2.5],
        [-52.25, 3.24],
        [-51.66, 4.16]
      ],
      [
        [-51.66, 4.16],
        [-51.32, 4.2],
        [-51.07, 3.65],
        [-50.51, 1.9],
        [-49.97, 1.74],
        [-49.95, 1.05],
        [-50.7, 0.22],
        [-50.39, -0.08],
        [-48.62, -0.24],
        [-48.58, -1.24],
        [-47.82, -0.58],
        [-46.57, -0.94],
        [-44.91, -1.55],
        [-44.42, -2.14],
        [-44.58, -2.69],
        [-43.42, -2.38],
        [-41.47, -2.91],
        [-39.98, -2.87],
        [-38.5, -3.7],
        [-37.22, -4.82],
        [-36.45, -5.11],
        [-35.6, -5.15],
        [-35.24, -5.46],
        [-34.9, -6.74],
        [-34.73, -7.34],
        [-35.13, -9],
        [-35.64, -9.65],
        [-37.05, -11.04],
        [-37.68, -12.17],
        [-38.42, -13.04],
        [-38.67, -13.06],
        [-38.95, -13.79],
        [-38.88, -15.67],
        [-39.16, -17.21],
        [-39.27, -17.87],
        [-39.58, -18.26],
        [-39.76, -19.6],
        [-40.77, -20.9],
        [-40.94, -21.94],
        [-41.75, -22.37],
        [-41.99, -22.97],
        [-43.07, -22.97],
        [-44.65, -23.35],
        [-45.35, -23.8],
        [-46.47, -24.09],
        [-47.65, -24.89],
        [-48.5, -25.88],
        [-48.64, -26.62],
        [-48.47, -27.18],
        [-48.66, -28.19],
        [-48.89, -28.67],
        [-49.59, -29.22],
        [-50.7, -30.98],
        [-51.58, -31.78],
        [-52.26, -32.25],
        [-52.71, -33.2],
        [-53.37, -33.77]
      ],
      [
        [-53.37, -33.77],
        [-53.65, -33.2],
        [-53.21, -32.73],
        [-53.79, -32.05],
        [-54.57, -31.49],
        [-55.6, -30.85],
        [-55.97, -30.88],
        [-56.98, -30.11],
        [-57.63, -30.22]
      ],
      [
        [114.2, 4.53],
        [114.6, 4.9],
        [115.45, 5.45]
      ],
      [
        [115.45, 5.45],
        [115.41, 4.96],
        [115.35, 4.32],
        [114.87, 4.35],
        [114.66, 4.01],
        [114.2, 4.53]
      ],
      [
        [91.7, 27.77],
        [92.1, 27.45],
        [92.03, 26.84],
        [91.22, 26.81],
        [90.37, 26.88],
        [89.74, 26.72],
        [88.84, 27.1],
        [88.81, 27.3]
      ],
      [
        [88.81, 27.3],
        [89.48, 28.04],
        [90.02, 28.3],
        [90.73, 28.06],
        [91.26, 28.04],
        [91.7, 27.77]
      ],
      [
        [29.43, -22.09],
        [28.02, -22.83],
        [27.12, -23.57],
        [26.79, -24.24],
        [26.49, -24.62],
        [25.94, -24.7],
        [25.77, -25.17],
        [25.66, -25.49],
        [25.03, -25.72],
        [24.21, -25.67],
        [23.73, -25.39],
        [23.31, -25.27],
        [22.82, -25.5],
        [22.58, -25.98],
        [22.11, -26.28],
        [21.61, -26.73],
        [20.89, -26.83],
        [20.67, -26.48],
        [20.76, -25.87],
        [20.17, -24.92],
        [19.9, -24.77]
      ],
      [
        [19.9, -24.77],
        [19.9, -21.85],
        [20.88, -21.81],
        [20.91, -18.25],
        [21.66, -18.22],
        [23.2, -17.87],
        [23.58, -18.28],
        [24.22, -17.89],
        [24.52, -17.89],
        [25.08, -17.66]
      ],
      [
        [25.08, -17.66],
        [25.26, -17.74]
      ],
      [
        [25.26, -17.74],
        [25.65, -18.54],
        [25.85, -18.71],
        [26.16, -19.29],
        [27.3, -20.39],
        [27.72, -20.5],
        [27.73, -20.85],
        [28.02, -21.49],
        [28.79, -21.64],
        [29.43, -22.09]
      ],
      [
        [15.28, 7.42],
        [16.11, 7.5],
        [16.29, 7.75],
        [16.46, 7.73],
        [16.71, 7.51],
        [17.96, 7.89],
        [18.39, 8.28],
        [18.91, 8.63],
        [18.81, 8.98],
        [19.09, 9.07],
        [20.06, 9.01],
        [21, 9.48],
        [21.72, 10.57],
        [22.23, 10.97],
        [22.86, 11.14]
      ],
      [
        [22.86, 11.14],
        [22.98, 10.71],
        [23.55, 10.09],
        [23.56, 9.68],
        [23.39, 9.27],
        [23.46, 8.95],
        [23.81, 8.67]
      ],
      [
        [23.81, 8.67],
        [24.57, 8.23]
      ],
      [
        [24.57, 8.23],
        [25.11, 7.83],
        [25.12, 7.5],
        [25.8, 6.98],
        [26.21, 6.55],
        [26.47, 5.95],
        [27.21, 5.55],
        [27.37, 5.23]
      ],
      [
        [27.37, 5.23],
        [27.04, 5.13],
        [26.4, 5.15],
        [25.65, 5.26],
        [25.28, 5.17],
        [25.13, 4.93],
        [24.81, 4.9],
        [24.41, 5.11],
        [23.3, 4.61],
        [22.84, 4.71],
        [22.7, 4.63],
        [22.41, 4.03],
        [21.66, 4.22],
        [20.93, 4.32],
        [20.29, 4.69],
        [19.47, 5.03],
        [18.93, 4.71],
        [18.54, 4.2],
        [18.45, 3.5]
      ],
      [
        [18.45, 3.5],
        [17.81, 3.56],
        [17.13, 3.73],
        [16.54, 3.2],
        [16.01, 2.27]
      ],
      [
        [16.01, 2.27],
        [15.91, 2.56],
        [15.86, 3.01],
        [15.41, 3.34],
        [15.04, 3.85],
        [14.95, 4.21],
        [14.48, 4.73],
        [14.56, 5.03],
        [14.46, 5.45],
        [14.54, 6.23],
        [14.78, 6.41],
        [15.28, 7.42]
      ],
      [
        [-63.66, 46.55],
        [-62.94, 46.42],
        [-62.01, 46.44],
        [-62.5, 46.03],
        [-62.87, 45.97],
        [-64.14, 46.39],
        [-64.39, 46.73],
        [-64.01, 47.04],
        [-63.66, 46.55]
      ],
      [
        [-61.81, 49.11],
        [-62.29, 49.09],
        [-63.59, 49.4],
        [-64.52, 49.87],
        [-64.17, 49.96],
        [-62.86, 49.71],
        [-61.84, 49.29],
        [-61.81, 49.11]
      ],
      [
        [-123.51, 48.51],
        [-124.01, 48.37],
        [-125.66, 48.83],
        [-125.95, 49.18],
        [-126.85, 49.53],
        [-127.03, 49.81],
        [-128.06, 49.99],
        [-128.44, 50.54],
        [-128.36, 50.77],
        [-127.31, 50.55],
        [-126.7, 50.4],
        [-125.76, 50.3],
        [-125.42, 49.95],
        [-124.92, 49.48],
        [-123.92, 49.06],
        [-123.51, 48.51]
      ],
      [
        [-56.13, 50.69],
        [-56.8, 49.81],
        [-56.14, 50.15],
        [-55.47, 49.94],
        [-55.82, 49.59],
        [-54.94, 49.31],
        [-54.47, 49.56],
        [-53.48, 49.25],
        [-53.79, 48.52],
        [-53.09, 48.69],
        [-52.96, 48.16],
        [-52.65, 47.54],
        [-53.07, 46.66],
        [-53.52, 46.62],
        [-54.18, 46.81],
        [-53.96, 47.63],
        [-54.24, 47.75],
        [-55.4, 46.88],
        [-56, 46.92],
        [-55.29, 47.39],
        [-56.25, 47.63],
        [-57.33, 47.57],
        [-59.27, 47.6],
        [-59.42, 47.9],
        [-58.8, 48.25],
        [-59.23, 48.52],
        [-58.39, 49.13],
        [-57.36, 50.72],
        [-56.74, 51.29],
        [-55.87, 51.63],
        [-55.41, 51.59],
        [-55.6, 51.32],
        [-56.13, 50.69]
      ],
      [
        [-132.71, 54.04],
        [-132.71, 54.04],
        [-132.71, 54.04],
        [-132.71, 54.04],
        [-131.75, 54.12],
        [-132.05, 52.98],
        [-131.18, 52.18],
        [-131.58, 52.18],
        [-132.18, 52.64],
        [-132.55, 53.1],
        [-133.05, 53.41],
        [-133.24, 53.85],
        [-133.18, 54.17],
        [-132.71, 54.04]
      ],
      [
        [-79.27, 62.16],
        [-79.66, 61.63],
        [-80.1, 61.72],
        [-80.36, 62.02],
        [-80.32, 62.09],
        [-79.93, 62.39],
        [-79.52, 62.36],
        [-79.27, 62.16]
      ],
      [
        [-81.9, 62.71],
        [-83.07, 62.16],
        [-83.77, 62.18],
        [-83.99, 62.45],
        [-83.25, 62.91],
        [-81.88, 62.9],
        [-81.9, 62.71]
      ],
      [
        [-85.16, 65.66],
        [-84.98, 65.22],
        [-84.46, 65.37],
        [-83.88, 65.11],
        [-82.79, 64.77],
        [-81.64, 64.46],
        [-81.55, 63.98],
        [-80.82, 64.06],
        [-80.1, 63.73],
        [-80.99, 63.41],
        [-82.55, 63.65],
        [-83.11, 64.1],
        [-84.1, 63.57],
        [-85.52, 63.05],
        [-85.87, 63.64],
        [-87.22, 63.54],
        [-86.35, 64.04],
        [-86.22, 64.82],
        [-85.88, 65.74],
        [-85.16, 65.66]
      ],
      [
        [-75.87, 67.15],
        [-76.99, 67.1],
        [-77.24, 67.59],
        [-76.81, 68.15],
        [-75.9, 68.29],
        [-75.11, 68.01],
        [-75.1, 67.58],
        [-75.22, 67.44],
        [-75.87, 67.15]
      ],
      [
        [-95.65, 69.11],
        [-96.27, 68.76],
        [-97.62, 69.06],
        [-98.43, 68.95],
        [-99.8, 69.4],
        [-98.92, 69.71],
        [-98.22, 70.14],
        [-97.16, 69.86],
        [-96.56, 69.68],
        [-96.26, 69.49],
        [-95.65, 69.11]
      ],
      [
        [-67.14, 45.14],
        [-67.79, 45.7],
        [-67.79, 47.07],
        [-68.23, 47.35],
        [-68.9, 47.19],
        [-69.24, 47.45],
        [-70, 46.69],
        [-70.31, 45.92],
        [-70.66, 45.46],
        [-71.08, 45.31],
        [-71.4, 45.26],
        [-71.51, 45.01],
        [-73.35, 45.01],
        [-74.87, 45],
        [-75.32, 44.82],
        [-76.37, 44.1],
        [-76.5, 44.02],
        [-76.82, 43.63],
        [-77.74, 43.63],
        [-78.72, 43.63],
        [-79.17, 43.47],
        [-79.01, 43.27],
        [-78.92, 42.97],
        [-78.94, 42.86],
        [-80.25, 42.37],
        [-81.28, 42.21],
        [-82.44, 41.68],
        [-82.69, 41.68],
        [-83.03, 41.83],
        [-83.14, 41.98],
        [-83.12, 42.08],
        [-82.9, 42.43],
        [-82.43, 42.98],
        [-82.14, 43.57],
        [-82.34, 44.44],
        [-82.55, 45.35],
        [-83.59, 45.82],
        [-83.47, 45.99],
        [-83.62, 46.12],
        [-83.89, 46.12],
        [-84.09, 46.28],
        [-84.14, 46.51],
        [-84.34, 46.41],
        [-84.6, 46.44],
        [-84.54, 46.54],
        [-84.78, 46.64],
        [-84.88, 46.9],
        [-85.65, 47.22],
        [-86.46, 47.55],
        [-87.44, 47.94],
        [-88.38, 48.3],
        [-89.27, 48.02],
        [-89.6, 48.01],
        [-90.83, 48.27],
        [-91.64, 48.14],
        [-92.61, 48.45],
        [-93.63, 48.61],
        [-94.33, 48.67],
        [-94.64, 48.84],
        [-94.82, 49.39],
        [-95.16, 49.38],
        [-95.16, 49],
        [-97.23, 49],
        [-100.65, 49],
        [-104.05, 49],
        [-107.05, 49],
        [-110.05, 49],
        [-113, 49],
        [-116.05, 49],
        [-117.03, 49],
        [-120, 49],
        [-122.84, 49]
      ],
      [
        [-122.84, 49],
        [-122.97, 49],
        [-124.91, 49.98],
        [-125.62, 50.42],
        [-127.44, 50.83],
        [-127.99, 51.72],
        [-127.85, 52.33],
        [-129.13, 52.76],
        [-129.31, 53.56],
        [-130.51, 54.29],
        [-130.54, 54.8],
        [-129.98, 55.29],
        [-130.01, 55.92]
      ],
      [
        [-130.01, 55.92],
        [-131.71, 56.55],
        [-132.73, 57.69]
      ],
      [
        [-132.73, 57.69],
        [-133.36, 58.41],
        [-134.27, 58.86]
      ],
      [
        [-134.27, 58.86],
        [-134.94, 59.27],
        [-135.48, 59.79],
        [-136.48, 59.46],
        [-137.45, 58.91],
        [-138.34, 59.56]
      ],
      [
        [-138.34, 59.56],
        [-139.04, 60],
        [-140.01, 60.28],
        [-141, 60.31],
        [-140.99, 66],
        [-140.99, 69.71],
        [-139.12, 69.47],
        [-137.55, 68.99],
        [-136.5, 68.9],
        [-135.63, 69.32],
        [-134.41, 69.63],
        [-132.93, 69.51],
        [-131.43, 69.94],
        [-129.79, 70.19],
        [-129.11, 69.78],
        [-128.36, 70.01],
        [-128.14, 70.48],
        [-127.45, 70.38],
        [-125.76, 69.48],
        [-124.42, 70.16],
        [-124.29, 69.4],
        [-123.06, 69.56],
        [-122.68, 69.86],
        [-121.47, 69.8],
        [-119.94, 69.38],
        [-117.6, 69.01],
        [-116.23, 68.84],
        [-115.25, 68.91],
        [-113.9, 68.4],
        [-115.3, 67.9],
        [-113.5, 67.69],
        [-110.8, 67.81],
        [-109.95, 67.98],
        [-108.88, 67.38],
        [-107.79, 67.89],
        [-108.81, 68.31],
        [-108.17, 68.65],
        [-106.95, 68.7],
        [-106.15, 68.8],
        [-105.34, 68.56],
        [-104.34, 68.02],
        [-103.22, 68.1],
        [-101.45, 67.65],
        [-99.9, 67.81],
        [-98.44, 67.78],
        [-98.56, 68.4],
        [-97.67, 68.58],
        [-96.12, 68.24],
        [-96.13, 67.29],
        [-95.49, 68.09],
        [-94.68, 68.06],
        [-94.23, 69.07],
        [-95.3, 69.69],
        [-96.47, 70.09],
        [-96.39, 71.19],
        [-95.21, 71.92],
        [-93.89, 71.76],
        [-92.88, 71.32],
        [-91.52, 70.19],
        [-92.41, 69.7],
        [-90.55, 69.5],
        [-90.55, 68.47],
        [-89.22, 69.26],
        [-88.02, 68.62],
        [-88.32, 67.87],
        [-87.35, 67.2],
        [-86.31, 67.92],
        [-85.58, 68.78],
        [-85.52, 69.88],
        [-84.1, 69.81],
        [-82.62, 69.66],
        [-81.28, 69.16],
        [-81.22, 68.67],
        [-81.96, 68.13],
        [-81.26, 67.6],
        [-81.39, 67.11],
        [-83.34, 66.41],
        [-84.74, 66.26],
        [-85.77, 66.56],
        [-86.07, 66.06],
        [-87.03, 65.21],
        [-87.32, 64.78],
        [-88.48, 64.1],
        [-89.91, 64.03],
        [-90.7, 63.61],
        [-90.77, 62.96],
        [-91.93, 62.84],
        [-93.16, 62.02],
        [-94.24, 60.9],
        [-94.63, 60.11],
        [-94.68, 58.95],
        [-93.22, 58.78],
        [-92.76, 57.85],
        [-92.3, 57.09],
        [-90.9, 57.28],
        [-89.04, 56.85],
        [-88.04, 56.47],
        [-87.32, 56],
        [-86.07, 55.72],
        [-85.01, 55.3],
        [-83.36, 55.24],
        [-82.27, 55.15],
        [-82.44, 54.28],
        [-82.13, 53.28],
        [-81.4, 52.16],
        [-79.91, 51.21],
        [-79.14, 51.53],
        [-78.6, 52.56],
        [-79.12, 54.14],
        [-79.83, 54.67],
        [-78.23, 55.14],
        [-77.1, 55.84],
        [-76.54, 56.53],
        [-76.62, 57.2],
        [-77.3, 58.05],
        [-78.52, 58.8],
        [-77.34, 59.85],
        [-77.77, 60.76],
        [-78.11, 62.32],
        [-77.41, 62.55],
        [-75.7, 62.28],
        [-74.67, 62.18],
        [-73.84, 62.44],
        [-72.91, 62.11],
        [-71.68, 61.53],
        [-71.37, 61.14],
        [-69.59, 61.06],
        [-69.62, 60.22],
        [-69.29, 58.96],
        [-68.37, 58.8],
        [-67.65, 58.21],
        [-66.2, 58.77],
        [-65.25, 59.87],
        [-64.58, 60.34],
        [-63.8, 59.44],
        [-62.5, 58.17],
        [-61.4, 56.97],
        [-61.8, 56.34],
        [-60.47, 55.78],
        [-59.57, 55.2],
        [-57.98, 54.95],
        [-57.33, 54.63],
        [-56.94, 53.78],
        [-56.16, 53.65],
        [-55.76, 53.27],
        [-55.68, 52.15],
        [-56.41, 51.77],
        [-57.13, 51.42],
        [-58.77, 51.06],
        [-60.03, 50.24],
        [-61.72, 50.08],
        [-63.86, 50.29],
        [-65.36, 50.3],
        [-66.4, 50.23],
        [-67.24, 49.51],
        [-68.51, 49.07],
        [-69.95, 47.74],
        [-71.1, 46.82],
        [-70.26, 46.99],
        [-68.65, 48.3],
        [-66.55, 49.13],
        [-65.06, 49.23],
        [-64.17, 48.74],
        [-65.12, 48.07],
        [-64.8, 46.99],
        [-64.47, 46.24],
        [-63.17, 45.74],
        [-61.52, 45.88],
        [-60.52, 47.01],
        [-60.45, 46.28],
        [-59.8, 45.92],
        [-61.04, 45.27],
        [-63.25, 44.67],
        [-64.25, 44.27],
        [-65.36, 43.55],
        [-66.12, 43.62],
        [-66.16, 44.47],
        [-64.43, 45.29],
        [-66.03, 45.26],
        [-67.14, 45.14]
      ],
      [
        [-114.17, 73.12],
        [-114.67, 72.65],
        [-112.44, 72.96],
        [-111.05, 72.45],
        [-109.92, 72.96],
        [-109.01, 72.63],
        [-108.19, 71.65],
        [-107.69, 72.07],
        [-108.4, 73.09],
        [-107.52, 73.24],
        [-106.52, 73.08],
        [-105.4, 72.67],
        [-104.77, 71.7],
        [-104.46, 70.99],
        [-102.79, 70.5],
        [-100.98, 70.02],
        [-101.09, 69.58],
        [-102.73, 69.5],
        [-102.09, 69.12],
        [-102.43, 68.75],
        [-104.24, 68.91],
        [-105.96, 69.18],
        [-107.12, 69.12],
        [-109, 68.78],
        [-111.53, 68.63],
        [-113.31, 68.54],
        [-113.85, 69.01],
        [-115.22, 69.28],
        [-116.11, 69.17],
        [-117.34, 69.96],
        [-116.67, 70.07],
        [-115.13, 70.24],
        [-113.72, 70.19],
        [-112.42, 70.37],
        [-114.35, 70.6],
        [-116.49, 70.52],
        [-117.9, 70.54],
        [-118.43, 70.91],
        [-116.11, 71.31],
        [-117.66, 71.3],
        [-119.4, 71.56],
        [-118.56, 72.31],
        [-117.87, 72.71],
        [-115.19, 73.31],
        [-114.17, 73.12]
      ],
      [
        [-104.5, 73.42],
        [-105.38, 72.76],
        [-106.94, 73.46],
        [-106.6, 73.6],
        [-105.26, 73.64],
        [-104.5, 73.42]
      ],
      [
        [-76.34, 73.1],
        [-76.25, 72.83],
        [-77.31, 72.86],
        [-78.39, 72.88],
        [-79.49, 72.74],
        [-79.78, 72.8],
        [-80.88, 73.33],
        [-80.83, 73.69],
        [-80.35, 73.76],
        [-78.06, 73.65],
        [-76.34, 73.1]
      ],
      [
        [-86.56, 73.16],
        [-85.77, 72.53],
        [-84.85, 73.34],
        [-82.32, 73.75],
        [-80.6, 72.72],
        [-80.75, 72.06],
        [-78.77, 72.35],
        [-77.82, 72.75],
        [-75.61, 72.24],
        [-74.23, 71.77],
        [-74.1, 71.33],
        [-72.24, 71.56],
        [-71.2, 70.92],
        [-68.79, 70.53],
        [-67.91, 70.12],
        [-66.97, 69.19],
        [-68.81, 68.72],
        [-66.45, 68.07],
        [-64.86, 67.85],
        [-63.42, 66.93],
        [-61.85, 66.86],
        [-62.16, 66.16],
        [-63.92, 65],
        [-65.15, 65.43],
        [-66.72, 66.39],
        [-68.02, 66.26],
        [-68.14, 65.69],
        [-67.09, 65.11],
        [-65.73, 64.65],
        [-65.32, 64.38],
        [-64.67, 63.39],
        [-65.01, 62.67],
        [-66.28, 62.95],
        [-68.78, 63.75],
        [-67.37, 62.88],
        [-66.33, 62.28],
        [-66.17, 61.93],
        [-68.88, 62.33],
        [-71.02, 62.91],
        [-72.24, 63.4],
        [-71.89, 63.68],
        [-73.38, 64.19],
        [-74.83, 64.68],
        [-74.82, 64.39],
        [-77.71, 64.23],
        [-78.56, 64.57],
        [-77.9, 65.31],
        [-76.02, 65.33],
        [-73.96, 65.45],
        [-74.29, 65.81],
        [-73.94, 66.31],
        [-72.65, 67.28],
        [-72.93, 67.73],
        [-73.31, 68.07],
        [-74.84, 68.55],
        [-76.87, 68.89],
        [-76.23, 69.15],
        [-77.29, 69.77],
        [-78.17, 69.83],
        [-78.96, 70.17],
        [-79.49, 69.87],
        [-81.31, 69.74],
        [-84.94, 69.97],
        [-87.06, 70.26],
        [-88.68, 70.41],
        [-89.51, 70.76],
        [-88.47, 71.22],
        [-89.89, 71.22],
        [-90.21, 72.24],
        [-89.44, 73.13],
        [-88.41, 73.54],
        [-85.83, 73.8],
        [-86.56, 73.16]
      ],
      [
        [-100.36, 73.84],
        [-99.16, 73.63],
        [-97.38, 73.76],
        [-97.12, 73.47],
        [-98.05, 72.99],
        [-96.54, 72.56],
        [-96.72, 71.66],
        [-98.36, 71.27],
        [-99.32, 71.36],
        [-100.01, 71.74],
        [-102.5, 72.51],
        [-102.48, 72.83],
        [-100.44, 72.71],
        [-101.54, 73.36],
        [-100.36, 73.84]
      ],
      [
        [-93.2, 72.77],
        [-94.27, 72.02],
        [-95.41, 72.06],
        [-96.03, 72.94],
        [-96.02, 73.44],
        [-95.5, 73.86],
        [-94.5, 74.13],
        [-92.42, 74.1],
        [-90.51, 73.86],
        [-92, 72.97],
        [-93.2, 72.77]
      ],
      [
        [-120.46, 71.38],
        [-123.09, 70.9],
        [-123.62, 71.34],
        [-125.93, 71.87],
        [-125.5, 72.29],
        [-124.81, 73.02],
        [-123.94, 73.68],
        [-124.92, 74.29],
        [-121.54, 74.45],
        [-120.11, 74.24],
        [-117.56, 74.19],
        [-116.58, 73.9],
        [-115.51, 73.48],
        [-116.77, 73.22],
        [-119.22, 72.52],
        [-120.46, 71.82],
        [-120.46, 71.38]
      ],
      [
        [-93.61, 74.98],
        [-94.16, 74.59],
        [-95.61, 74.67],
        [-96.82, 74.93],
        [-96.29, 75.38],
        [-94.85, 75.65],
        [-93.98, 75.3],
        [-93.61, 74.98]
      ],
      [
        [-98.5, 76.72],
        [-97.74, 76.26],
        [-97.7, 75.74],
        [-98.16, 75],
        [-99.81, 74.9],
        [-100.88, 75.06],
        [-100.86, 75.64],
        [-102.5, 75.56],
        [-102.57, 76.34],
        [-101.49, 76.31],
        [-99.98, 76.65],
        [-98.58, 76.59],
        [-98.5, 76.72]
      ],
      [
        [-108.21, 76.2],
        [-107.82, 75.85],
        [-106.93, 76.01],
        [-105.88, 75.97],
        [-105.7, 75.48],
        [-106.31, 75.01],
        [-109.7, 74.85],
        [-112.22, 74.42],
        [-113.74, 74.39],
        [-113.87, 74.72],
        [-111.79, 75.16],
        [-116.31, 75.04],
        [-117.71, 75.22],
        [-116.35, 76.2],
        [-115.4, 76.48],
        [-112.59, 76.14],
        [-110.81, 75.55],
        [-109.07, 75.47],
        [-110.5, 76.43],
        [-109.58, 76.79],
        [-108.55, 76.68],
        [-108.21, 76.2]
      ],
      [
        [-94.68, 77.1],
        [-93.57, 76.78],
        [-91.61, 76.78],
        [-90.74, 76.45],
        [-90.97, 76.07],
        [-89.82, 75.85],
        [-89.19, 75.61],
        [-87.84, 75.57],
        [-86.38, 75.48],
        [-84.79, 75.7],
        [-82.75, 75.78],
        [-81.13, 75.71],
        [-80.06, 75.34],
        [-79.83, 74.92],
        [-80.46, 74.66],
        [-81.95, 74.44],
        [-83.23, 74.56],
        [-86.1, 74.41],
        [-88.15, 74.39],
        [-89.76, 74.52],
        [-92.42, 74.84],
        [-92.77, 75.39],
        [-92.89, 75.88],
        [-93.89, 76.32],
        [-95.96, 76.44],
        [-97.12, 76.75],
        [-96.75, 77.16],
        [-94.68, 77.1]
      ],
      [
        [-116.2, 77.65],
        [-116.34, 76.88],
        [-117.11, 76.53],
        [-118.04, 76.48],
        [-119.9, 76.05],
        [-121.5, 75.9],
        [-122.85, 76.12],
        [-122.85, 76.12],
        [-121.16, 76.86],
        [-119.1, 77.51],
        [-117.57, 77.5],
        [-116.2, 77.65]
      ],
      [
        [-93.84, 77.52],
        [-94.3, 77.49],
        [-96.17, 77.56],
        [-96.44, 77.83],
        [-94.42, 77.82],
        [-93.72, 77.63],
        [-93.84, 77.52]
      ],
      [
        [-110.19, 77.7],
        [-112.05, 77.41],
        [-113.53, 77.73],
        [-112.72, 78.05],
        [-111.26, 78.15],
        [-109.85, 78],
        [-110.19, 77.7]
      ],
      [
        [-109.66, 78.6],
        [-110.88, 78.41],
        [-112.54, 78.41],
        [-112.53, 78.55],
        [-111.5, 78.85],
        [-110.96, 78.8],
        [-109.66, 78.6]
      ],
      [
        [-95.83, 78.06],
        [-97.31, 77.85],
        [-98.12, 78.08],
        [-98.55, 78.46],
        [-98.63, 78.87],
        [-97.34, 78.83],
        [-96.75, 78.77],
        [-95.56, 78.42],
        [-95.83, 78.06]
      ],
      [
        [-100.06, 78.32],
        [-99.67, 77.91],
        [-101.3, 78.02],
        [-102.95, 78.34],
        [-105.18, 78.38],
        [-104.21, 78.68],
        [-105.42, 78.92],
        [-105.49, 79.3],
        [-103.53, 79.17],
        [-100.83, 78.8],
        [-100.06, 78.32]
      ],
      [
        [-87.02, 79.66],
        [-85.81, 79.34],
        [-87.19, 79.04],
        [-89.04, 78.29],
        [-90.8, 78.22],
        [-92.88, 78.34],
        [-93.95, 78.75],
        [-93.94, 79.11],
        [-93.15, 79.38],
        [-94.97, 79.37],
        [-96.08, 79.71],
        [-96.71, 80.16],
        [-96.02, 80.6],
        [-95.32, 80.91],
        [-94.3, 80.98],
        [-94.74, 81.21],
        [-92.41, 81.26],
        [-91.13, 80.72],
        [-89.45, 80.51],
        [-87.81, 80.32],
        [-87.02, 79.66]
      ],
      [
        [-68.5, 83.11],
        [-65.83, 83.03],
        [-63.68, 82.9],
        [-61.85, 82.63],
        [-61.89, 82.36],
        [-64.33, 81.93],
        [-66.75, 81.73],
        [-67.66, 81.5],
        [-65.48, 81.51],
        [-67.84, 80.9],
        [-69.47, 80.62],
        [-71.18, 79.8],
        [-73.24, 79.63],
        [-73.88, 79.43],
        [-76.91, 79.32],
        [-75.53, 79.2],
        [-76.22, 79.02],
        [-75.39, 78.53],
        [-76.34, 78.18],
        [-77.89, 77.9],
        [-78.36, 77.51],
        [-79.76, 77.21],
        [-79.62, 76.98],
        [-77.91, 77.02],
        [-77.89, 76.78],
        [-80.56, 76.18],
        [-83.17, 76.45],
        [-86.11, 76.3],
        [-87.6, 76.42],
        [-89.49, 76.47],
        [-89.62, 76.95],
        [-87.77, 77.18],
        [-88.26, 77.9],
        [-87.65, 77.97],
        [-84.98, 77.54],
        [-86.34, 78.18],
        [-87.96, 78.37],
        [-87.15, 78.76],
        [-85.38, 79],
        [-85.09, 79.35],
        [-86.51, 79.74],
        [-86.93, 80.25],
        [-84.2, 80.21],
        [-83.41, 80.1],
        [-81.85, 80.46],
        [-84.1, 80.58],
        [-87.6, 80.52],
        [-89.37, 80.86],
        [-90.2, 81.26],
        [-91.37, 81.55],
        [-91.59, 81.89],
        [-90.1, 82.09],
        [-88.93, 82.12],
        [-86.97, 82.28],
        [-85.5, 82.65],
        [-84.26, 82.6],
        [-83.18, 82.32],
        [-82.42, 82.86],
        [-81.1, 83.02],
        [-79.31, 83.13],
        [-76.25, 83.17],
        [-75.72, 83.06],
        [-72.83, 83.23],
        [-70.67, 83.17],
        [-68.5, 83.11]
      ],
      [
        [9.63, 47.36],
        [9.53, 47.27],
        [9.49, 47.18]
      ],
      [
        [9.49, 47.18],
        [9.51, 47.09],
        [9.47, 47.06],
        [9.56, 47.05]
      ],
      [
        [9.56, 47.05],
        [9.61, 47.06],
        [9.87, 47.02]
      ],
      [
        [10.44, 46.89],
        [10.36, 46.48],
        [9.92, 46.31],
        [9.18, 46.44],
        [8.97, 46.04],
        [8.49, 46.01],
        [8.32, 46.16],
        [7.76, 45.82],
        [7.27, 45.78],
        [6.84, 45.99]
      ],
      [
        [6.84, 45.99],
        [6.5, 46.43],
        [6.02, 46.27],
        [6.04, 46.73],
        [6.77, 47.29],
        [6.74, 47.54],
        [7.19, 47.45],
        [7.47, 47.62]
      ],
      [
        [7.47, 47.62],
        [8.32, 47.61],
        [8.52, 47.83],
        [9.59, 47.53]
      ],
      [
        [-66.96, -54.9],
        [-67.29, -55.3],
        [-68.15, -55.61],
        [-68.64, -55.58],
        [-69.23, -55.5],
        [-69.96, -55.2],
        [-71.01, -55.05],
        [-72.26, -54.5],
        [-73.29, -53.96],
        [-74.66, -52.84],
        [-73.84, -53.05],
        [-72.43, -53.72],
        [-71.11, -54.07],
        [-70.59, -53.62],
        [-70.27, -52.93],
        [-69.35, -52.52],
        [-68.63, -52.64]
      ],
      [
        [-68.57, -52.3],
        [-69.46, -52.29],
        [-69.94, -52.54],
        [-70.85, -52.9],
        [-71.01, -53.83],
        [-71.43, -53.86],
        [-72.56, -53.53],
        [-73.7, -52.84],
        [-73.7, -52.84],
        [-74.95, -52.26],
        [-75.26, -51.63],
        [-74.98, -51.04],
        [-75.48, -50.38],
        [-75.61, -48.67],
        [-75.18, -47.71],
        [-74.13, -46.94],
        [-75.64, -46.65],
        [-74.69, -45.76],
        [-74.35, -44.1],
        [-73.24, -44.45],
        [-72.72, -42.38],
        [-73.39, -42.12],
        [-73.7, -43.37],
        [-74.33, -43.22],
        [-74.02, -41.79],
        [-73.68, -39.94],
        [-73.22, -39.26],
        [-73.51, -38.28],
        [-73.59, -37.16],
        [-73.17, -37.12],
        [-72.55, -35.51],
        [-71.86, -33.91],
        [-71.44, -32.42],
        [-71.67, -30.92],
        [-71.37, -30.1],
        [-71.49, -28.86],
        [-70.91, -27.64],
        [-70.72, -25.71],
        [-70.4, -23.63],
        [-70.09, -21.39],
        [-70.16, -19.76],
        [-70.37, -18.35]
      ],
      [
        [-70.37, -18.35],
        [-69.86, -18.09],
        [-69.59, -17.58]
      ],
      [
        [110.34, 18.68],
        [109.48, 18.2],
        [108.66, 18.51],
        [108.63, 19.37],
        [109.12, 19.82],
        [110.21, 20.1],
        [110.79, 20.08],
        [111.01, 19.7],
        [110.57, 19.26],
        [110.34, 18.68]
      ],
      [
        [129.4, 49.44],
        [130.58, 48.73]
      ],
      [
        [130.58, 48.73],
        [130.99, 47.79],
        [132.51, 47.79],
        [133.37, 48.18]
      ],
      [
        [133.37, 48.18],
        [135.03, 48.48]
      ],
      [
        [135.03, 48.48],
        [134.5, 47.58],
        [134.11, 47.21],
        [133.77, 46.12]
      ],
      [
        [133.77, 46.12],
        [133.1, 45.14],
        [131.88, 45.32]
      ],
      [
        [131.88, 45.32],
        [131.03, 44.97],
        [131.29, 44.11]
      ],
      [
        [131.29, 44.11],
        [131.14, 42.93],
        [130.63, 42.9]
      ],
      [
        [130.63, 42.9],
        [130.64, 42.4]
      ],
      [
        [130.64, 42.4],
        [129.99, 42.99],
        [129.6, 42.42],
        [128.05, 41.99],
        [128.21, 41.47],
        [127.34, 41.5],
        [126.87, 41.82],
        [126.18, 41.11],
        [125.08, 40.57],
        [124.27, 39.93]
      ],
      [
        [124.27, 39.93],
        [122.87, 39.64],
        [122.13, 39.17],
        [121.05, 38.9],
        [121.59, 39.36],
        [121.38, 39.75],
        [122.17, 40.42],
        [121.64, 40.95],
        [120.77, 40.59],
        [119.64, 39.9],
        [119.02, 39.25],
        [118.04, 39.2],
        [117.53, 38.74],
        [118.06, 38.06],
        [118.88, 37.9],
        [118.91, 37.45],
        [119.7, 37.16],
        [120.82, 37.87],
        [121.71, 37.48],
        [122.36, 37.45],
        [122.52, 36.93],
        [121.1, 36.65],
        [120.64, 36.11],
        [119.66, 35.61],
        [119.15, 34.91],
        [120.23, 34.36],
        [120.62, 33.38],
        [121.23, 32.46],
        [121.91, 31.69],
        [121.89, 30.95],
        [121.26, 30.68],
        [121.5, 30.14],
        [122.09, 29.83],
        [121.94, 29.02],
        [121.68, 28.23],
        [121.13, 28.14],
        [120.4, 27.05],
        [119.59, 25.74],
        [118.66, 24.55],
        [117.28, 23.62],
        [115.89, 22.78],
        [114.76, 22.67],
        [114.15, 22.22],
        [113.81, 22.55],
        [113.24, 22.05],
        [111.84, 21.55],
        [110.79, 21.4],
        [110.44, 20.34],
        [109.89, 20.28],
        [109.63, 21.01],
        [109.86, 21.4],
        [108.52, 21.72],
        [108.05, 21.55]
      ],
      [
        [108.05, 21.55],
        [107.04, 21.81],
        [106.57, 22.22],
        [106.73, 22.79],
        [105.81, 22.98],
        [105.33, 23.35],
        [104.48, 22.82],
        [103.5, 22.7],
        [102.71, 22.71],
        [102.17, 22.46]
      ],
      [
        [102.17, 22.46],
        [101.65, 22.32],
        [101.8, 21.17],
        [101.27, 21.2],
        [101.18, 21.44]
      ],
      [
        [101.18, 21.44],
        [101.15, 21.85],
        [100.42, 21.56],
        [99.98, 21.74],
        [99.24, 22.12],
        [99.53, 22.95],
        [98.9, 23.14],
        [98.66, 24.06],
        [97.6, 23.9],
        [97.72, 25.08],
        [98.67, 25.92],
        [98.71, 26.74],
        [98.68, 27.51],
        [98.25, 27.75],
        [97.91, 28.34],
        [97.33, 28.26]
      ],
      [
        [97.33, 28.26],
        [96.25, 28.41],
        [96.59, 28.83],
        [96.12, 29.45],
        [95.4, 29.03],
        [94.57, 29.28],
        [93.41, 28.64],
        [92.5, 27.9],
        [91.7, 27.77]
      ],
      [
        [88.81, 27.3],
        [88.73, 28.09],
        [88.12, 27.88]
      ],
      [
        [88.12, 27.88],
        [86.95, 27.97],
        [85.82, 28.2],
        [85.01, 28.64],
        [84.23, 28.84],
        [83.9, 29.32],
        [83.34, 29.46],
        [82.33, 30.12],
        [81.53, 30.42],
        [81.11, 30.18]
      ],
      [
        [81.11, 30.18],
        [79.72, 30.88],
        [78.74, 31.52],
        [78.46, 32.62],
        [79.18, 32.48],
        [79.21, 32.99],
        [78.81, 33.51],
        [78.91, 34.32],
        [77.84, 35.49]
      ],
      [
        [77.84, 35.49],
        [76.19, 35.9],
        [75.9, 36.67],
        [75.16, 37.13]
      ],
      [
        [74.98, 37.42],
        [74.83, 37.99],
        [74.86, 38.38],
        [74.26, 38.61],
        [73.93, 38.51],
        [73.68, 39.43]
      ],
      [
        [73.68, 39.43],
        [73.96, 39.66],
        [73.82, 39.89],
        [74.78, 40.37],
        [75.47, 40.56],
        [76.53, 40.43],
        [76.9, 41.07],
        [78.19, 41.19],
        [78.54, 41.58],
        [80.12, 42.12],
        [80.26, 42.35]
      ],
      [
        [80.26, 42.35],
        [80.18, 42.92],
        [80.87, 43.18],
        [79.97, 44.92],
        [81.95, 45.32],
        [82.46, 45.54],
        [83.18, 47.33],
        [85.16, 47],
        [85.72, 47.45],
        [85.77, 48.46],
        [86.6, 48.55],
        [87.36, 49.21]
      ],
      [
        [87.36, 49.21],
        [87.75, 49.3]
      ],
      [
        [87.75, 49.3],
        [88.01, 48.6],
        [88.85, 48.07],
        [90.28, 47.69],
        [90.97, 46.89],
        [90.59, 45.72],
        [90.95, 45.29],
        [92.13, 45.12],
        [93.48, 44.98],
        [94.69, 44.35],
        [95.31, 44.24],
        [95.76, 43.32],
        [96.35, 42.73],
        [97.45, 42.75],
        [99.52, 42.52],
        [100.85, 42.66],
        [101.83, 42.51],
        [103.31, 41.91],
        [104.52, 41.91],
        [104.96, 41.6],
        [106.13, 42.13],
        [107.74, 42.48],
        [109.24, 42.52],
        [110.41, 42.87],
        [111.13, 43.41],
        [111.83, 43.74],
        [111.67, 44.07],
        [111.35, 44.46],
        [111.87, 45.1],
        [112.44, 45.01],
        [113.46, 44.81],
        [114.46, 45.34],
        [115.99, 45.73],
        [116.72, 46.39],
        [117.42, 46.67],
        [118.87, 46.81],
        [119.66, 46.69],
        [119.77, 47.05],
        [118.87, 47.75],
        [118.06, 48.07],
        [117.3, 47.7],
        [116.31, 47.85],
        [115.74, 47.73],
        [115.49, 48.14],
        [116.19, 49.13],
        [116.68, 49.89]
      ],
      [
        [116.68, 49.89],
        [117.88, 49.51],
        [119.29, 50.14]
      ],
      [
        [119.29, 50.14],
        [119.28, 50.58],
        [120.18, 51.64],
        [120.74, 51.96],
        [120.73, 52.52]
      ],
      [
        [120.73, 52.52],
        [120.18, 52.75],
        [121, 53.25],
        [122.25, 53.43]
      ],
      [
        [122.25, 53.43],
        [123.57, 53.46],
        [125.07, 53.16]
      ],
      [
        [125.07, 53.16],
        [125.95, 52.79],
        [126.56, 51.78],
        [126.94, 51.35],
        [127.29, 50.74]
      ],
      [
        [127.29, 50.74],
        [127.66, 49.76],
        [129.4, 49.44]
      ],
      [
        [-2.86, 4.99],
        [-3.31, 4.98],
        [-4.01, 5.18],
        [-4.65, 5.17],
        [-5.83, 4.99],
        [-6.53, 4.71],
        [-7.52, 4.34],
        [-7.71, 4.36]
      ],
      [
        [-7.71, 4.36],
        [-7.64, 5.19],
        [-7.54, 5.31],
        [-7.57, 5.71],
        [-7.99, 6.13],
        [-8.31, 6.19],
        [-8.6, 6.47],
        [-8.39, 6.91],
        [-8.49, 7.4],
        [-8.44, 7.69]
      ],
      [
        [-8.44, 7.69],
        [-8.28, 7.69],
        [-8.22, 8.12],
        [-8.3, 8.32],
        [-8.2, 8.46],
        [-7.83, 8.58],
        [-8.08, 9.38],
        [-8.31, 9.79],
        [-8.23, 10.13],
        [-8.03, 10.21]
      ],
      [
        [-8.03, 10.21],
        [-7.9, 10.3],
        [-7.62, 10.15],
        [-6.85, 10.14],
        [-6.67, 10.43],
        [-6.49, 10.41],
        [-6.21, 10.52],
        [-6.05, 10.1],
        [-5.82, 10.22],
        [-5.4, 10.37]
      ],
      [
        [-2.83, 9.64],
        [-2.56, 8.22],
        [-2.98, 7.38],
        [-3.24, 6.25],
        [-2.81, 5.39],
        [-2.86, 4.99]
      ],
      [
        [13.08, 2.27],
        [12.95, 2.32],
        [12.36, 2.19],
        [11.75, 2.33],
        [11.28, 2.26]
      ],
      [
        [11.28, 2.26],
        [9.65, 2.28]
      ],
      [
        [9.65, 2.28],
        [9.8, 3.07],
        [9.4, 3.73],
        [8.95, 3.9],
        [8.74, 4.35],
        [8.49, 4.5],
        [8.5, 4.77]
      ],
      [
        [8.5, 4.77],
        [8.76, 5.48],
        [9.23, 6.44],
        [9.52, 6.45],
        [10.12, 7.04],
        [10.5, 7.06],
        [11.06, 6.64],
        [11.75, 6.98],
        [11.84, 7.4],
        [12.06, 7.8],
        [12.22, 8.31],
        [12.75, 8.72],
        [12.96, 9.42],
        [13.17, 9.64],
        [13.31, 10.16],
        [13.57, 10.8],
        [14.42, 11.57],
        [14.47, 11.9],
        [14.58, 12.09],
        [14.18, 12.48]
      ],
      [
        [14.18, 12.48],
        [14.21, 12.8],
        [14.5, 12.86]
      ],
      [
        [14.5, 12.86],
        [14.89, 12.22],
        [14.96, 11.56]
      ],
      [
        [14.96, 11.56],
        [14.92, 10.89],
        [15.47, 9.98],
        [14.91, 9.99],
        [14.63, 9.92],
        [14.17, 10.02],
        [13.95, 9.55],
        [14.54, 8.97],
        [14.98, 8.8],
        [15.12, 8.38],
        [15.44, 7.69],
        [15.28, 7.42]
      ],
      [
        [16.01, 2.27],
        [15.94, 1.73],
        [15.15, 1.96],
        [14.34, 2.23],
        [13.08, 2.27]
      ],
      [
        [31.17, 2.2],
        [30.85, 1.85],
        [30.47, 1.58],
        [30.09, 1.06],
        [29.88, 0.6]
      ],
      [
        [29.88, 0.6],
        [29.82, -0.21],
        [29.59, -0.59]
      ],
      [
        [29.59, -0.59],
        [29.58, -1.34]
      ],
      [
        [29.58, -1.34],
        [29.29, -1.62],
        [29.25, -2.22],
        [29.12, -2.29],
        [29.02, -2.84]
      ],
      [
        [29.34, -4.5],
        [29.52, -5.42],
        [29.42, -5.94]
      ],
      [
        [29.42, -5.94],
        [29.62, -6.52],
        [30.2, -7.08],
        [30.74, -8.34]
      ],
      [
        [30.74, -8.34],
        [30.35, -8.24],
        [29, -8.41],
        [28.73, -8.53],
        [28.45, -9.16],
        [28.67, -9.61],
        [28.5, -10.79],
        [28.37, -11.79],
        [28.64, -11.97],
        [29.34, -12.36],
        [29.62, -12.18],
        [29.7, -13.26],
        [28.93, -13.25],
        [28.52, -12.7],
        [28.16, -12.27],
        [27.39, -12.13],
        [27.16, -11.61],
        [26.55, -11.92],
        [25.75, -11.78],
        [25.42, -11.33],
        [24.78, -11.24],
        [24.31, -11.26],
        [24.26, -10.95],
        [23.91, -10.93]
      ],
      [
        [12.32, -6.1],
        [12.18, -5.79]
      ],
      [
        [13, -4.78],
        [13.26, -4.88],
        [13.6, -4.5],
        [14.14, -4.51],
        [14.21, -4.79],
        [14.58, -4.97],
        [15.17, -4.34],
        [15.75, -3.86],
        [16.01, -3.54],
        [15.97, -2.71],
        [16.41, -1.74],
        [16.87, -1.23],
        [17.52, -0.74],
        [17.64, -0.42],
        [17.66, -0.06],
        [17.83, 0.29],
        [17.77, 0.86],
        [17.9, 1.74],
        [18.09, 2.37],
        [18.39, 2.9],
        [18.45, 3.5]
      ],
      [
        [27.37, 5.23],
        [27.98, 4.41],
        [28.43, 4.29],
        [28.7, 4.46],
        [29.16, 4.39],
        [29.72, 4.6]
      ],
      [
        [29.72, 4.6],
        [29.95, 4.17],
        [30.83, 3.51],
        [30.77, 2.34],
        [31.17, 2.2]
      ],
      [
        [11.91, -5.04],
        [11.09, -3.98]
      ],
      [
        [11.09, -3.98],
        [11.86, -3.43],
        [11.48, -2.77],
        [11.82, -2.51],
        [12.5, -2.39],
        [12.58, -1.95],
        [13.11, -2.43],
        [13.99, -2.47],
        [14.3, -2],
        [14.43, -1.33],
        [14.32, -0.55],
        [13.84, 0.04],
        [14.28, 1.2],
        [14.03, 1.4],
        [13.28, 1.31],
        [13, 1.83],
        [13.08, 2.27]
      ],
      [
        [-75.37, -0.15],
        [-75.8, 0.08],
        [-76.29, 0.42],
        [-76.58, 0.26],
        [-77.42, 0.4],
        [-77.67, 0.83],
        [-77.86, 0.81],
        [-78.86, 1.38]
      ],
      [
        [-78.86, 1.38],
        [-78.99, 1.69],
        [-78.62, 1.77],
        [-78.66, 2.27],
        [-78.43, 2.63],
        [-77.93, 2.7],
        [-77.51, 3.33],
        [-77.13, 3.85],
        [-77.5, 4.09],
        [-77.31, 4.67],
        [-77.53, 5.58],
        [-77.32, 5.85],
        [-77.48, 6.69],
        [-77.88, 7.22]
      ],
      [
        [-77.88, 7.22],
        [-77.75, 7.71],
        [-77.43, 7.64],
        [-77.24, 7.94],
        [-77.47, 8.52],
        [-77.35, 8.67]
      ],
      [
        [-77.35, 8.67],
        [-76.84, 8.64],
        [-76.09, 9.34],
        [-75.67, 9.44],
        [-75.66, 9.77],
        [-75.48, 10.62],
        [-74.91, 11.08],
        [-74.28, 11.1],
        [-74.2, 11.31],
        [-73.41, 11.23],
        [-72.63, 11.73],
        [-72.24, 11.96],
        [-71.75, 12.44],
        [-71.4, 12.38],
        [-71.14, 12.11],
        [-71.33, 11.78]
      ],
      [
        [-71.33, 11.78],
        [-71.97, 11.61],
        [-72.23, 11.11],
        [-72.61, 10.82],
        [-72.91, 10.45],
        [-73.03, 9.74],
        [-73.3, 9.15],
        [-72.79, 9.09],
        [-72.66, 8.63],
        [-72.44, 8.41],
        [-72.36, 8],
        [-72.48, 7.63],
        [-72.44, 7.42],
        [-72.2, 7.34],
        [-71.96, 6.99],
        [-70.67, 7.09],
        [-70.09, 6.96],
        [-69.39, 6.1],
        [-68.99, 6.21],
        [-68.27, 6.15],
        [-67.7, 6.27],
        [-67.34, 6.1],
        [-67.52, 5.56],
        [-67.74, 5.22],
        [-67.82, 4.5],
        [-67.62, 3.84],
        [-67.34, 3.54],
        [-67.3, 3.32],
        [-67.81, 2.82],
        [-67.45, 2.6],
        [-67.18, 2.25],
        [-66.88, 1.25]
      ],
      [
        [-69.89, -4.3],
        [-70.39, -3.77],
        [-70.69, -3.74],
        [-70.05, -2.73],
        [-70.81, -2.26],
        [-71.41, -2.34],
        [-71.77, -2.17],
        [-72.33, -2.43],
        [-73.07, -2.31],
        [-73.66, -1.26],
        [-74.12, -1],
        [-74.44, -0.53],
        [-75.11, -0.06],
        [-75.37, -0.15]
      ],
      [
        [-82.97, 8.23],
        [-83.51, 8.45],
        [-83.71, 8.66],
        [-83.6, 8.83],
        [-83.63, 9.05],
        [-83.91, 9.29],
        [-84.3, 9.49],
        [-84.65, 9.62],
        [-84.71, 9.91],
        [-84.98, 10.09],
        [-84.91, 9.8],
        [-85.11, 9.56],
        [-85.34, 9.83],
        [-85.66, 9.93],
        [-85.8, 10.13],
        [-85.79, 10.44],
        [-85.66, 10.75],
        [-85.94, 10.9],
        [-85.71, 11.09]
      ],
      [
        [-85.71, 11.09],
        [-85.56, 11.22],
        [-84.9, 10.95],
        [-84.67, 11.08],
        [-84.36, 11],
        [-84.19, 10.79],
        [-83.9, 10.73],
        [-83.66, 10.94]
      ],
      [
        [-83.66, 10.94],
        [-83.4, 10.4],
        [-83.02, 9.99],
        [-82.55, 9.57]
      ],
      [
        [-82.55, 9.57],
        [-82.93, 9.48],
        [-82.93, 9.07],
        [-82.72, 8.93],
        [-82.87, 8.81],
        [-82.83, 8.63],
        [-82.91, 8.42],
        [-82.97, 8.23]
      ],
      [
        [-82.27, 23.19],
        [-81.4, 23.12],
        [-80.62, 23.11],
        [-79.68, 22.77],
        [-79.28, 22.4],
        [-78.35, 22.51],
        [-77.99, 22.28],
        [-77.15, 21.66],
        [-76.52, 21.21],
        [-76.19, 21.22],
        [-75.6, 21.02],
        [-75.67, 20.74],
        [-74.93, 20.69],
        [-74.18, 20.28],
        [-74.3, 20.05],
        [-74.96, 19.92],
        [-75.63, 19.87],
        [-76.32, 19.95],
        [-77.76, 19.86],
        [-77.09, 20.41],
        [-77.49, 20.67],
        [-78.14, 20.74],
        [-78.48, 21.03],
        [-78.72, 21.6],
        [-79.28, 21.56],
        [-80.22, 21.83],
        [-80.52, 22.04],
        [-81.82, 22.19],
        [-82.17, 22.39],
        [-81.8, 22.64],
        [-82.78, 22.69],
        [-83.49, 22.17],
        [-83.91, 22.15],
        [-84.05, 21.91],
        [-84.55, 21.8],
        [-84.97, 21.9],
        [-84.45, 22.2],
        [-84.23, 22.57],
        [-83.78, 22.79],
        [-83.27, 22.98],
        [-82.51, 23.08],
        [-82.27, 23.19]
      ],
      [
        [32.73, 35.14],
        [32.8, 35.15],
        [32.95, 35.39],
        [33.67, 35.37],
        [34.58, 35.67],
        [33.9, 35.25],
        [33.97, 35.06],
        [34, 34.98],
        [32.98, 34.57],
        [32.49, 34.7],
        [32.26, 35.1],
        [32.73, 35.14]
      ],
      [
        [13.6, 48.88],
        [13.03, 49.31],
        [12.52, 49.55],
        [12.42, 49.97],
        [12.24, 50.27],
        [12.97, 50.48],
        [13.34, 50.73],
        [14.06, 50.93],
        [14.31, 51.12],
        [14.57, 51],
        [15.02, 51.11]
      ],
      [
        [15.02, 51.11],
        [15.49, 50.78],
        [16.24, 50.7],
        [16.18, 50.42],
        [16.72, 50.22],
        [16.87, 50.47],
        [17.55, 50.36],
        [17.65, 50.05],
        [18.39, 49.99],
        [18.85, 49.5]
      ],
      [
        [18.85, 49.5],
        [18.55, 49.5],
        [18.4, 49.32],
        [18.17, 49.27],
        [18.1, 49.04],
        [17.91, 49],
        [17.89, 48.9],
        [17.55, 48.8],
        [17.1, 48.82],
        [16.96, 48.6]
      ],
      [
        [9.92, 54.98],
        [9.94, 54.6],
        [10.95, 54.36],
        [10.94, 54.01],
        [11.96, 54.2],
        [12.52, 54.47],
        [13.65, 54.08],
        [14.12, 53.76]
      ],
      [
        [14.12, 53.76],
        [14.35, 53.25],
        [14.07, 52.98],
        [14.44, 52.62],
        [14.69, 52.09],
        [14.61, 51.75],
        [15.02, 51.11]
      ],
      [
        [7.47, 47.62],
        [7.59, 48.33],
        [8.1, 49.02],
        [6.66, 49.2],
        [6.19, 49.46]
      ],
      [
        [6.19, 49.46],
        [6.24, 49.9],
        [6.04, 50.13]
      ],
      [
        [6.16, 50.8],
        [5.99, 51.85],
        [6.59, 51.85],
        [6.84, 52.23],
        [7.09, 53.14],
        [6.91, 53.48]
      ],
      [
        [6.91, 53.48],
        [7.1, 53.69],
        [7.94, 53.75],
        [8.12, 53.53],
        [8.8, 54.02],
        [8.57, 54.4],
        [8.53, 54.96]
      ],
      [
        [8.53, 54.96],
        [9.28, 54.83],
        [9.92, 54.98]
      ],
      [
        [43.08, 12.7],
        [43.32, 12.39],
        [43.29, 11.97],
        [42.72, 11.74],
        [43.15, 11.46]
      ],
      [
        [43.15, 11.46],
        [42.78, 10.93]
      ],
      [
        [42.78, 10.93],
        [42.55, 11.11],
        [42.31, 11.03],
        [41.76, 11.05],
        [41.74, 11.36],
        [41.66, 11.63],
        [42, 12.1],
        [42.35, 12.54]
      ],
      [
        [42.35, 12.54],
        [42.78, 12.46],
        [43.08, 12.7]
      ],
      [
        [12.69, 55.61],
        [12.09, 54.8],
        [11.04, 55.36],
        [10.9, 55.78],
        [12.37, 56.11],
        [12.69, 55.61]
      ],
      [
        [8.53, 54.96],
        [8.12, 55.52],
        [8.09, 56.54],
        [8.26, 56.81],
        [8.54, 57.11],
        [9.42, 57.17],
        [9.78, 57.45],
        [10.58, 57.73],
        [10.55, 57.22],
        [10.25, 56.89],
        [10.37, 56.61],
        [10.91, 56.46],
        [10.67, 56.08],
        [10.37, 56.19],
        [9.65, 55.47],
        [9.92, 54.98]
      ],
      [
        [-46.76, 82.63],
        [-43.41, 83.23],
        [-39.9, 83.18],
        [-38.62, 83.55],
        [-35.09, 83.65],
        [-27.1, 83.52],
        [-20.85, 82.73],
        [-22.69, 82.34],
        [-26.52, 82.3],
        [-31.9, 82.2],
        [-31.4, 82.02],
        [-27.86, 82.13],
        [-24.84, 81.79],
        [-22.9, 82.09],
        [-22.07, 81.73],
        [-23.17, 81.15],
        [-20.62, 81.52],
        [-15.77, 81.91],
        [-12.77, 81.72],
        [-12.21, 81.29],
        [-16.29, 80.58],
        [-16.85, 80.35],
        [-20.05, 80.18],
        [-17.73, 80.13],
        [-18.9, 79.4],
        [-19.7, 78.75],
        [-19.67, 77.64],
        [-18.47, 76.99],
        [-20.04, 76.94],
        [-21.68, 76.63],
        [-19.83, 76.1],
        [-19.6, 75.25],
        [-20.67, 75.16],
        [-19.37, 74.3],
        [-21.59, 74.22],
        [-20.43, 73.82],
        [-20.76, 73.46],
        [-22.17, 73.31],
        [-23.57, 73.31],
        [-22.31, 72.63],
        [-22.3, 72.18],
        [-24.28, 72.6],
        [-24.79, 72.33],
        [-23.44, 72.08],
        [-22.13, 71.47],
        [-21.75, 70.66],
        [-23.54, 70.47],
        [-24.31, 70.86],
        [-25.54, 71.43],
        [-25.2, 70.75],
        [-26.36, 70.23],
        [-23.73, 70.18],
        [-22.35, 70.13],
        [-25.03, 69.26],
        [-27.75, 68.47],
        [-30.67, 68.13],
        [-31.78, 68.12],
        [-32.81, 67.74],
        [-34.2, 66.68],
        [-36.35, 65.98],
        [-37.04, 65.94],
        [-38.38, 65.69],
        [-39.81, 65.46],
        [-40.67, 64.84],
        [-40.68, 64.14],
        [-41.19, 63.48],
        [-42.82, 62.68],
        [-42.42, 61.9],
        [-42.87, 61.07],
        [-43.38, 60.1],
        [-44.79, 60.04],
        [-46.26, 60.85],
        [-48.26, 60.86],
        [-49.23, 61.41],
        [-49.9, 62.38],
        [-51.63, 63.63],
        [-52.14, 64.28],
        [-52.28, 65.18],
        [-53.66, 66.1],
        [-53.3, 66.84],
        [-53.97, 67.19],
        [-52.98, 68.36],
        [-51.48, 68.73],
        [-51.08, 69.15],
        [-50.87, 69.93],
        [-52.01, 69.57],
        [-52.56, 69.43],
        [-53.46, 69.28],
        [-54.68, 69.61],
        [-54.75, 70.29],
        [-54.36, 70.82],
        [-53.43, 70.84],
        [-51.39, 70.57],
        [-53.11, 71.2],
        [-54, 71.55],
        [-55, 71.41],
        [-55.83, 71.65],
        [-54.72, 72.59],
        [-55.33, 72.96],
        [-56.12, 73.65],
        [-57.32, 74.71],
        [-58.6, 75.1],
        [-58.59, 75.52],
        [-61.27, 76.1],
        [-63.39, 76.18],
        [-66.06, 76.13],
        [-68.5, 76.06],
        [-69.66, 76.38],
        [-71.4, 77.01],
        [-68.78, 77.32],
        [-66.76, 77.38],
        [-71.04, 77.64],
        [-73.3, 78.04],
        [-73.16, 78.43],
        [-69.37, 78.91],
        [-65.71, 79.39],
        [-65.32, 79.76],
        [-68.02, 80.12],
        [-67.15, 80.52],
        [-63.69, 81.21],
        [-62.23, 81.32],
        [-62.65, 81.77],
        [-60.28, 82.03],
        [-57.21, 82.19],
        [-54.13, 82.2],
        [-53.04, 81.89],
        [-50.39, 82.44],
        [-48, 82.06],
        [-46.6, 81.99],
        [-44.52, 81.66],
        [-46.9, 82.2],
        [-46.76, 82.63]
      ],
      [
        [-71.71, 19.71],
        [-71.59, 19.88],
        [-70.81, 19.88],
        [-70.21, 19.62],
        [-69.95, 19.65],
        [-69.77, 19.29],
        [-69.22, 19.31],
        [-69.25, 19.02],
        [-68.81, 18.98],
        [-68.32, 18.61],
        [-68.69, 18.21],
        [-69.16, 18.42],
        [-69.62, 18.38],
        [-69.95, 18.43],
        [-70.13, 18.25],
        [-70.52, 18.18],
        [-70.67, 18.43],
        [-71, 18.28],
        [-71.4, 17.6],
        [-71.66, 17.76],
        [-71.71, 18.04]
      ],
      [
        [-71.71, 18.04],
        [-71.69, 18.32],
        [-71.95, 18.62],
        [-71.7, 18.79],
        [-71.62, 19.17],
        [-71.71, 19.71]
      ],
      [
        [12, 23.47],
        [8.57, 21.57],
        [5.68, 19.6],
        [4.27, 19.16]
      ],
      [
        [4.27, 19.16],
        [3.16, 19.06],
        [3.15, 19.69],
        [2.68, 19.86],
        [2.06, 20.14],
        [1.82, 20.61],
        [-1.55, 22.79],
        [-4.92, 24.97]
      ],
      [
        [-4.92, 24.97],
        [-8.68, 27.4]
      ],
      [
        [-8.68, 27.4],
        [-8.67, 27.59],
        [-8.67, 27.6]
      ],
      [
        [-8.67, 27.6],
        [-8.67, 28.84],
        [-7.06, 29.58],
        [-6.06, 29.73],
        [-5.24, 30],
        [-4.86, 30.5],
        [-3.69, 30.9],
        [-3.65, 31.64],
        [-3.07, 31.72],
        [-2.62, 32.09],
        [-1.31, 32.26],
        [-1.12, 32.65],
        [-1.39, 32.86],
        [-1.73, 33.92],
        [-1.79, 34.53],
        [-2.17, 35.17]
      ],
      [
        [-2.17, 35.17],
        [-1.21, 35.71],
        [-0.13, 35.89],
        [0.5, 36.3],
        [1.47, 36.61],
        [3.16, 36.78],
        [4.82, 36.87],
        [5.32, 36.72],
        [6.26, 37.11],
        [7.33, 37.12],
        [7.74, 36.89],
        [8.42, 36.95]
      ],
      [
        [8.42, 36.95],
        [8.22, 36.43],
        [8.38, 35.48],
        [8.14, 34.66],
        [7.52, 34.1],
        [7.61, 33.34],
        [8.43, 32.75],
        [8.44, 32.51],
        [9.06, 32.1],
        [9.48, 30.31]
      ],
      [
        [9.48, 30.31],
        [9.81, 29.42],
        [9.86, 28.96],
        [9.68, 28.14],
        [9.76, 27.69],
        [9.63, 27.14],
        [9.72, 26.51],
        [9.32, 26.09],
        [9.91, 25.37],
        [9.95, 24.94],
        [10.3, 24.38],
        [10.77, 24.56],
        [11.56, 24.1],
        [12, 23.47]
      ],
      [
        [-80.3, -3.4],
        [-79.77, -2.66],
        [-79.99, -2.22],
        [-80.37, -2.69],
        [-80.97, -2.25],
        [-80.76, -1.97],
        [-80.93, -1.06],
        [-80.58, -0.91],
        [-80.4, -0.28],
        [-80.02, 0.36],
        [-80.09, 0.77],
        [-79.54, 0.98],
        [-78.86, 1.38]
      ],
      [
        [-75.37, -0.15],
        [-75.23, -0.91],
        [-75.54, -1.56],
        [-76.64, -2.61],
        [-77.84, -3],
        [-78.45, -3.87],
        [-78.64, -4.55],
        [-79.21, -4.96],
        [-79.62, -4.45],
        [-80.03, -4.35],
        [-80.44, -4.43],
        [-80.47, -4.06],
        [-80.18, -3.82],
        [-80.3, -3.4]
      ],
      [
        [36.87, 22],
        [32.9, 22],
        [29.02, 22],
        [25, 22]
      ],
      [
        [25, 22],
        [25, 25.68],
        [25, 29.24],
        [24.7, 30.04],
        [24.96, 30.66],
        [24.8, 31.09],
        [25.16, 31.57]
      ],
      [
        [25.16, 31.57],
        [26.5, 31.59],
        [27.46, 31.32],
        [28.45, 31.03],
        [28.91, 30.87],
        [29.68, 31.19],
        [30.1, 31.47],
        [30.98, 31.56],
        [31.69, 31.43],
        [31.96, 30.93],
        [32.19, 31.26],
        [32.99, 31.02],
        [33.77, 30.97],
        [34.27, 31.22],
        [34.92, 29.5],
        [34.64, 29.1],
        [34.43, 28.34],
        [34.15, 27.82],
        [33.92, 27.65],
        [33.59, 27.97],
        [33.14, 28.42],
        [32.42, 29.85],
        [32.32, 29.76],
        [32.73, 28.71],
        [33.35, 27.7],
        [34.1, 26.14],
        [34.47, 25.6],
        [34.8, 25.03],
        [35.69, 23.93],
        [35.49, 23.75],
        [35.53, 23.1],
        [36.69, 22.2],
        [36.87, 22]
      ],
      [
        [42.35, 12.54],
        [42.01, 12.87],
        [41.6, 13.45]
      ],
      [
        [41.6, 13.45],
        [41.16, 13.77],
        [40.9, 14.12]
      ],
      [
        [40.9, 14.12],
        [40.03, 14.52],
        [39.34, 14.53]
      ],
      [
        [39.34, 14.53],
        [39.1, 14.74],
        [38.51, 14.51],
        [37.91, 14.96],
        [37.59, 14.21],
        [36.43, 14.42]
      ],
      [
        [36.43, 14.42],
        [36.32, 14.82],
        [36.75, 16.29],
        [36.85, 16.96]
      ],
      [
        [36.85, 16.96],
        [37.17, 17.26],
        [37.9, 17.43],
        [38.41, 18]
      ],
      [
        [38.41, 18],
        [38.99, 16.84],
        [39.27, 15.92],
        [39.81, 15.44],
        [41.18, 14.49],
        [41.73, 13.92],
        [42.28, 13.34],
        [42.59, 13],
        [43.08, 12.7]
      ],
      [
        [-9.03, 41.88],
        [-8.98, 42.59],
        [-9.39, 43.03],
        [-7.98, 43.75],
        [-6.75, 43.57],
        [-5.41, 43.57],
        [-4.35, 43.4],
        [-3.52, 43.46],
        [-1.9, 43.42]
      ],
      [
        [-1.9, 43.42],
        [-1.5, 43.03],
        [0.34, 42.58],
        [0.7, 42.8],
        [1.83, 42.34],
        [2.99, 42.47]
      ],
      [
        [2.99, 42.47],
        [3.04, 41.89],
        [2.09, 41.23],
        [0.81, 41.01],
        [0.72, 40.68],
        [0.11, 40.12],
        [-0.28, 39.31],
        [0.11, 38.74],
        [-0.47, 38.29],
        [-0.68, 37.64],
        [-1.44, 37.44],
        [-2.15, 36.67],
        [-3.42, 36.66],
        [-4.37, 36.68],
        [-5, 36.32],
        [-5.38, 35.95],
        [-5.87, 36.03],
        [-6.24, 36.37],
        [-6.52, 36.94],
        [-7.45, 37.1]
      ],
      [
        [-7.45, 37.1],
        [-7.54, 37.43],
        [-7.17, 37.8],
        [-7.03, 38.08],
        [-7.37, 38.37],
        [-7.1, 39.03],
        [-7.5, 39.63],
        [-7.07, 39.71],
        [-7.03, 40.18],
        [-6.86, 40.33],
        [-6.85, 41.11],
        [-6.39, 41.38],
        [-6.67, 41.88],
        [-7.25, 41.92],
        [-7.42, 41.79],
        [-8.01, 41.79],
        [-8.26, 42.28],
        [-8.67, 42.13],
        [-9.03, 41.88]
      ],
      [
        [24.31, 57.79],
        [24.43, 58.38],
        [24.06, 58.26],
        [23.43, 58.61],
        [23.34, 59.19],
        [24.6, 59.47],
        [25.86, 59.61],
        [26.95, 59.45],
        [27.98, 59.48],
        [28.13, 59.3]
      ],
      [
        [28.13, 59.3],
        [27.42, 58.72],
        [27.72, 57.79]
      ],
      [
        [27.72, 57.79],
        [27.29, 57.47]
      ],
      [
        [27.29, 57.47],
        [26.46, 57.48],
        [25.6, 57.85],
        [25.16, 57.97],
        [24.31, 57.79]
      ],
      [
        [39.34, 14.53],
        [40.03, 14.52],
        [40.9, 14.12]
      ],
      [
        [40.9, 14.12],
        [41.16, 13.77],
        [41.6, 13.45]
      ],
      [
        [42.78, 10.93],
        [42.56, 10.57],
        [42.93, 10.02]
      ],
      [
        [42.93, 10.02],
        [43.3, 9.54],
        [43.68, 9.18]
      ],
      [
        [43.68, 9.18],
        [46.95, 8],
        [47.79, 8]
      ],
      [
        [47.79, 8],
        [44.96, 5],
        [43.66, 4.96],
        [42.77, 4.25],
        [42.13, 4.23],
        [41.86, 3.92]
      ],
      [
        [41.86, 3.92],
        [41.17, 3.92],
        [40.77, 4.26],
        [39.85, 3.84],
        [39.56, 3.42],
        [38.89, 3.5],
        [38.67, 3.62],
        [38.44, 3.59],
        [38.12, 3.6],
        [36.86, 4.45],
        [36.16, 4.45],
        [35.82, 4.78],
        [35.82, 5.34],
        [35.3, 5.51]
      ],
      [
        [35.3, 5.51],
        [34.71, 6.59],
        [34.25, 6.83],
        [34.08, 7.23],
        [33.57, 7.71],
        [32.95, 7.78],
        [33.29, 8.35],
        [33.83, 8.38],
        [33.97, 8.68]
      ],
      [
        [33.97, 8.68],
        [33.96, 9.58]
      ],
      [
        [33.96, 9.58],
        [34.26, 10.63],
        [34.73, 10.91],
        [34.83, 11.32],
        [35.26, 12.08],
        [35.86, 12.58],
        [36.27, 13.56],
        [36.43, 14.42]
      ],
      [
        [28.59, 69.06],
        [28.45, 68.36],
        [29.98, 67.7],
        [29.05, 66.94],
        [30.22, 65.81],
        [29.54, 64.95],
        [30.44, 64.2],
        [30.04, 63.55],
        [31.52, 62.87],
        [31.14, 62.36],
        [30.21, 61.78]
      ],
      [
        [30.21, 61.78],
        [28.07, 60.5],
        [26.26, 60.42],
        [24.5, 60.06],
        [22.87, 59.85],
        [22.29, 60.39],
        [21.32, 60.72],
        [21.54, 61.71],
        [21.06, 62.61],
        [21.54, 63.19],
        [22.44, 63.82],
        [24.73, 64.9],
        [25.4, 65.11],
        [25.29, 65.53],
        [23.9, 66.01]
      ],
      [
        [23.9, 66.01],
        [23.57, 66.4],
        [23.54, 67.94],
        [21.98, 68.62],
        [20.65, 69.11]
      ],
      [
        [20.65, 69.11],
        [21.24, 69.37],
        [22.36, 68.84],
        [23.66, 68.89],
        [24.74, 68.65],
        [25.69, 69.09],
        [26.18, 69.83],
        [27.73, 70.16],
        [29.02, 69.77],
        [28.59, 69.06]
      ],
      [
        [178.37, -17.34],
        [178.72, -17.63],
        [178.55, -18.15],
        [177.93, -18.29],
        [177.38, -18.16],
        [177.29, -17.72],
        [177.67, -17.38],
        [178.13, -17.5],
        [178.37, -17.34]
      ],
      [
        [179.36, -16.8],
        [178.73, -17.01],
        [178.6, -16.64],
        [179.1, -16.43],
        [179.41, -16.38],
        [180, -16.07],
        [180, -16.56],
        [179.36, -16.8]
      ],
      [
        [-179.92, -16.5],
        [-180, -16.56],
        [-180, -16.07],
        [-179.79, -16.02],
        [-179.92, -16.5]
      ],
      [
        [9.56, 42.15],
        [9.23, 41.38],
        [8.78, 41.58],
        [8.54, 42.26],
        [8.75, 42.63],
        [9.39, 43.01],
        [9.56, 42.15]
      ],
      [
        [5.67, 49.53],
        [5.9, 49.44],
        [6.19, 49.46]
      ],
      [
        [6.84, 45.99],
        [6.8, 45.71],
        [7.1, 45.33],
        [6.75, 45.03],
        [7.01, 44.25],
        [7.55, 44.13],
        [7.44, 43.69]
      ],
      [
        [7.44, 43.69],
        [6.53, 43.13],
        [4.56, 43.4],
        [3.1, 43.08],
        [2.99, 42.47]
      ],
      [
        [-1.9, 43.42],
        [-1.38, 44.02],
        [-1.19, 46.01],
        [-2.23, 47.06],
        [-2.96, 47.57],
        [-4.49, 47.95],
        [-4.59, 48.68],
        [-3.3, 48.9],
        [-1.62, 48.64],
        [-1.93, 49.78],
        [-0.99, 49.35],
        [1.34, 50.13],
        [1.64, 50.95],
        [2.51, 51.15]
      ],
      [
        [-54.52, 2.31],
        [-54.27, 2.74],
        [-54.18, 3.19],
        [-54.01, 3.62],
        [-54.4, 4.21]
      ],
      [
        [-54.4, 4.21],
        [-54.48, 4.9],
        [-53.96, 5.76]
      ],
      [
        [-53.96, 5.76],
        [-53.62, 5.65],
        [-52.88, 5.41],
        [-51.82, 4.57],
        [-51.66, 4.16]
      ],
      [
        [11.09, -3.98],
        [10.07, -2.97],
        [9.41, -2.14],
        [8.8, -1.11],
        [8.83, -0.78],
        [9.05, -0.46],
        [9.29, 0.27],
        [9.49, 1.01]
      ],
      [
        [9.49, 1.01],
        [9.83, 1.07],
        [11.29, 1.06],
        [11.28, 2.26]
      ],
      [
        [-6.2, 53.87],
        [-6.95, 54.07],
        [-7.57, 54.06],
        [-7.37, 54.6],
        [-7.57, 55.13]
      ],
      [
        [-7.57, 55.13],
        [-6.73, 55.17],
        [-5.66, 54.55],
        [-6.2, 53.87]
      ],
      [
        [-3.01, 58.64],
        [-4.07, 57.55],
        [-3.06, 57.69],
        [-1.96, 57.68],
        [-2.22, 56.87],
        [-3.12, 55.97],
        [-2.09, 55.91],
        [-2.01, 55.8],
        [-1.11, 54.62],
        [-0.43, 54.46],
        [0.18, 53.33],
        [0.47, 52.93],
        [1.68, 52.74],
        [1.56, 52.1],
        [1.05, 51.81],
        [1.45, 51.29],
        [0.55, 50.77],
        [-0.79, 50.77],
        [-2.49, 50.5],
        [-2.96, 50.7],
        [-3.62, 50.23],
        [-4.54, 50.34],
        [-5.25, 49.96],
        [-5.78, 50.16],
        [-4.31, 51.21],
        [-3.41, 51.43],
        [-3.42, 51.43],
        [-4.98, 51.59],
        [-5.27, 51.99],
        [-4.22, 52.3],
        [-4.77, 52.84],
        [-4.58, 53.5],
        [-3.09, 53.4],
        [-3.09, 53.4],
        [-2.95, 53.99],
        [-3.61, 54.6],
        [-3.63, 54.62],
        [-4.84, 54.79],
        [-5.08, 55.06],
        [-4.72, 55.51],
        [-5.05, 55.78],
        [-5.59, 55.31],
        [-5.64, 56.28],
        [-6.15, 56.79],
        [-5.79, 57.82],
        [-5.01, 58.63],
        [-4.21, 58.55],
        [-3.01, 58.64]
      ],
      [
        [41.55, 41.54],
        [41.7, 41.96],
        [41.45, 42.65],
        [40.88, 43.01],
        [40.32, 43.13],
        [39.96, 43.43]
      ],
      [
        [39.96, 43.43],
        [40.08, 43.55]
      ],
      [
        [40.08, 43.55],
        [40.92, 43.38],
        [42.39, 43.22],
        [43.76, 42.74],
        [43.93, 42.55],
        [44.54, 42.71]
      ],
      [
        [44.54, 42.71],
        [45.47, 42.5]
      ],
      [
        [45.47, 42.5],
        [45.78, 42.09],
        [46.4, 41.86]
      ],
      [
        [43.58, 41.09],
        [42.62, 41.58],
        [41.55, 41.54]
      ],
      [
        [1.06, 5.93],
        [-0.51, 5.34],
        [-1.06, 5],
        [-1.96, 4.71],
        [-2.86, 4.99]
      ],
      [
        [0.02, 11.02],
        [-0.05, 10.71],
        [0.37, 10.19],
        [0.37, 9.47],
        [0.46, 8.68],
        [0.71, 8.31],
        [0.49, 7.41],
        [0.57, 6.91],
        [0.84, 6.28],
        [1.06, 5.93]
      ],
      [
        [-8.44, 7.69],
        [-8.72, 7.71],
        [-8.93, 7.31],
        [-9.21, 7.31],
        [-9.4, 7.53],
        [-9.34, 7.93],
        [-9.76, 8.54],
        [-10.02, 8.43],
        [-10.23, 8.41]
      ],
      [
        [-10.23, 8.41],
        [-10.51, 8.35],
        [-10.49, 8.72],
        [-10.65, 8.98],
        [-10.62, 9.27],
        [-10.84, 9.69],
        [-11.12, 10.05],
        [-11.92, 10.05],
        [-12.15, 9.86],
        [-12.43, 9.84],
        [-12.6, 9.62],
        [-12.71, 9.34],
        [-13.25, 8.9]
      ],
      [
        [-13.25, 8.9],
        [-13.69, 9.49],
        [-14.07, 9.89],
        [-14.33, 10.02],
        [-14.58, 10.21],
        [-14.69, 10.66],
        [-14.84, 10.88],
        [-15.13, 11.04]
      ],
      [
        [-15.13, 11.04],
        [-14.69, 11.53],
        [-14.38, 11.51],
        [-14.12, 11.68],
        [-13.9, 11.68],
        [-13.74, 11.81],
        [-13.83, 12.14],
        [-13.72, 12.25],
        [-13.7, 12.59]
      ],
      [
        [-13.7, 12.59],
        [-13.22, 12.58],
        [-12.5, 12.33],
        [-12.28, 12.35],
        [-12.2, 12.47],
        [-11.66, 12.39],
        [-11.51, 12.44]
      ],
      [
        [-11.51, 12.44],
        [-11.46, 12.08],
        [-11.3, 12.08],
        [-11.04, 12.21],
        [-10.87, 12.18],
        [-10.59, 11.92],
        [-10.17, 11.84],
        [-9.89, 12.06],
        [-9.57, 12.19],
        [-9.33, 12.33],
        [-9.13, 12.31],
        [-8.91, 12.09],
        [-8.79, 11.81],
        [-8.38, 11.39],
        [-8.58, 11.14],
        [-8.62, 10.81],
        [-8.41, 10.91],
        [-8.28, 10.79],
        [-8.34, 10.49],
        [-8.03, 10.21]
      ],
      [
        [-16.84, 13.15],
        [-16.71, 13.59]
      ],
      [
        [-16.71, 13.59],
        [-15.62, 13.62],
        [-15.4, 13.86],
        [-15.08, 13.88],
        [-14.69, 13.63],
        [-14.38, 13.63],
        [-14.05, 13.79],
        [-13.84, 13.51],
        [-14.28, 13.28],
        [-14.71, 13.3],
        [-15.14, 13.51],
        [-15.51, 13.28],
        [-15.69, 13.27],
        [-15.93, 13.13],
        [-16.84, 13.15]
      ],
      [
        [-15.13, 11.04],
        [-15.66, 11.46],
        [-16.09, 11.52],
        [-16.31, 11.81],
        [-16.31, 11.96],
        [-16.61, 12.17],
        [-16.68, 12.38]
      ],
      [
        [-16.68, 12.38],
        [-16.15, 12.55],
        [-15.82, 12.52],
        [-15.55, 12.63],
        [-13.7, 12.59]
      ],
      [
        [9.49, 1.01],
        [9.31, 1.16],
        [9.65, 2.28]
      ],
      [
        [23.7, 35.71],
        [24.25, 35.37],
        [25.03, 35.42],
        [25.77, 35.35],
        [25.75, 35.18],
        [26.29, 35.3],
        [26.16, 35],
        [24.72, 34.92],
        [24.74, 35.08],
        [23.51, 35.28],
        [23.7, 35.71]
      ],
      [
        [26.06, 40.82],
        [25.45, 40.85],
        [24.93, 40.95],
        [23.71, 40.69],
        [24.41, 40.12],
        [23.9, 39.96],
        [23.34, 39.96],
        [22.81, 40.48],
        [22.63, 40.26],
        [22.85, 39.66],
        [23.35, 39.19],
        [22.97, 38.97],
        [23.53, 38.51],
        [24.03, 38.22],
        [24.04, 37.66],
        [23.12, 37.92],
        [23.41, 37.41],
        [22.77, 37.31],
        [23.15, 36.42],
        [22.49, 36.41],
        [21.67, 36.84],
        [21.3, 37.64],
        [21.12, 38.31],
        [20.73, 38.77],
        [20.22, 39.34],
        [20.15, 39.62]
      ],
      [
        [21.02, 40.84],
        [21.67, 40.93],
        [22.06, 41.15],
        [22.6, 41.13],
        [22.76, 41.3],
        [22.95, 41.34]
      ],
      [
        [26.12, 41.83],
        [26.6, 41.56],
        [26.29, 40.94],
        [26.06, 40.82]
      ],
      [
        [-90.1, 13.74],
        [-90.61, 13.91],
        [-91.23, 13.93],
        [-91.69, 14.13],
        [-92.23, 14.54]
      ],
      [
        [-92.23, 14.54],
        [-92.2, 14.83],
        [-92.09, 15.06],
        [-92.23, 15.25],
        [-91.75, 16.07],
        [-90.46, 16.07],
        [-90.44, 16.41],
        [-90.6, 16.47],
        [-90.71, 16.69],
        [-91.08, 16.92],
        [-91.45, 17.25],
        [-91, 17.25],
        [-91, 17.82],
        [-90.07, 17.82],
        [-89.14, 17.81]
      ],
      [
        [-88.93, 15.89],
        [-88.6, 15.71],
        [-88.52, 15.86],
        [-88.23, 15.73]
      ],
      [
        [-88.23, 15.73],
        [-88.68, 15.35],
        [-89.15, 15.07],
        [-89.23, 14.87],
        [-89.15, 14.68],
        [-89.35, 14.42]
      ],
      [
        [-89.35, 14.42],
        [-89.59, 14.36],
        [-89.53, 14.24],
        [-89.72, 14.13],
        [-90.06, 13.88],
        [-90.1, 13.74]
      ],
      [
        [-59.76, 8.37],
        [-59.1, 8],
        [-58.48, 7.35],
        [-58.45, 6.83],
        [-58.08, 6.81],
        [-57.54, 6.32],
        [-57.15, 5.97]
      ],
      [
        [-57.15, 5.97],
        [-57.31, 5.07],
        [-57.91, 4.81],
        [-57.86, 4.58],
        [-58.04, 4.06],
        [-57.6, 3.33],
        [-57.28, 3.33],
        [-57.15, 2.77],
        [-56.54, 1.9]
      ],
      [
        [-60.73, 5.2],
        [-61.41, 5.96],
        [-61.14, 6.23],
        [-61.16, 6.7],
        [-60.54, 6.86],
        [-60.3, 7.04],
        [-60.64, 7.42],
        [-60.55, 7.78],
        [-59.76, 8.37]
      ],
      [
        [-87.32, 12.98],
        [-87.49, 13.3],
        [-87.79, 13.38]
      ],
      [
        [-87.79, 13.38],
        [-87.72, 13.79],
        [-87.86, 13.89],
        [-88.07, 13.96],
        [-88.5, 13.85],
        [-88.54, 13.98],
        [-88.84, 14.14],
        [-89.06, 14.34],
        [-89.35, 14.42]
      ],
      [
        [-88.23, 15.73],
        [-88.12, 15.69],
        [-87.9, 15.86],
        [-87.62, 15.88],
        [-87.52, 15.8],
        [-87.37, 15.85],
        [-86.9, 15.76],
        [-86.44, 15.78],
        [-86.12, 15.89],
        [-86, 16.01],
        [-85.68, 15.95],
        [-85.44, 15.89],
        [-85.18, 15.91],
        [-84.98, 16],
        [-84.53, 15.86],
        [-84.37, 15.84],
        [-84.06, 15.65],
        [-83.77, 15.42],
        [-83.41, 15.27],
        [-83.15, 15]
      ],
      [
        [-83.15, 15],
        [-83.49, 15.02],
        [-83.63, 14.88],
        [-83.98, 14.75],
        [-84.23, 14.75],
        [-84.45, 14.62],
        [-84.65, 14.67],
        [-84.82, 14.82],
        [-84.92, 14.79],
        [-85.05, 14.55],
        [-85.15, 14.56],
        [-85.17, 14.35],
        [-85.51, 14.08],
        [-85.7, 13.96],
        [-85.8, 13.84],
        [-86.1, 14.04],
        [-86.31, 13.77],
        [-86.52, 13.78],
        [-86.76, 13.75],
        [-86.73, 13.26],
        [-86.88, 13.25],
        [-87.01, 13.03],
        [-87.32, 12.98]
      ],
      [
        [18.83, 45.91],
        [19.07, 45.52]
      ],
      [
        [19.07, 45.52],
        [19.39, 45.24]
      ],
      [
        [19.39, 45.24],
        [19.01, 44.86]
      ],
      [
        [18.56, 42.65],
        [18.45, 42.48],
        [17.51, 42.85],
        [16.93, 43.21],
        [16.02, 43.51],
        [15.17, 44.24],
        [15.38, 44.32],
        [14.92, 44.74],
        [14.9, 45.08],
        [14.26, 45.23],
        [13.95, 44.8],
        [13.66, 45.14],
        [13.68, 45.48],
        [13.72, 45.5]
      ],
      [
        [13.72, 45.5],
        [14.41, 45.47],
        [14.6, 45.63],
        [14.94, 45.47],
        [15.33, 45.45],
        [15.32, 45.73],
        [15.67, 45.83],
        [15.77, 46.24],
        [16.56, 46.5]
      ],
      [
        [16.56, 46.5],
        [16.88, 46.38],
        [17.63, 45.95],
        [18.46, 45.76],
        [18.83, 45.91]
      ],
      [
        [-71.71, 18.04],
        [-72.37, 18.21],
        [-72.84, 18.15],
        [-73.45, 18.22],
        [-73.92, 18.03],
        [-74.46, 18.34],
        [-74.37, 18.66],
        [-73.45, 18.53],
        [-72.69, 18.45],
        [-72.33, 18.67],
        [-72.79, 19.1],
        [-72.78, 19.48],
        [-73.42, 19.64],
        [-73.19, 19.92],
        [-72.58, 19.87],
        [-71.71, 19.71]
      ],
      [
        [16.98, 48.12],
        [17.49, 47.87],
        [17.86, 47.76],
        [18.7, 47.88],
        [18.78, 48.08],
        [19.17, 48.11],
        [19.66, 48.27],
        [19.77, 48.2],
        [20.24, 48.33],
        [20.47, 48.56],
        [20.8, 48.62],
        [21.87, 48.32],
        [22.09, 48.42]
      ],
      [
        [22.09, 48.42],
        [22.64, 48.15],
        [22.71, 47.88]
      ],
      [
        [22.71, 47.88],
        [22.1, 47.67],
        [21.63, 46.99],
        [21.02, 46.32],
        [20.22, 46.13]
      ],
      [
        [20.22, 46.13],
        [19.6, 46.17]
      ],
      [
        [19.6, 46.17],
        [18.83, 45.91]
      ],
      [
        [16.56, 46.5],
        [16.37, 46.84],
        [16.2, 46.85]
      ],
      [
        [120.72, -10.24],
        [120.3, -10.26],
        [118.97, -9.56],
        [119.9, -9.36],
        [120.43, -9.67],
        [120.78, -9.97],
        [120.72, -10.24]
      ],
      [
        [124.97, -8.89],
        [125.07, -9.09],
        [125.09, -9.39]
      ],
      [
        [125.09, -9.39],
        [124.44, -10.14],
        [123.58, -10.36],
        [123.46, -10.24],
        [123.55, -9.9],
        [123.98, -9.29],
        [124.97, -8.89]
      ],
      [
        [117.9, -8.1],
        [118.26, -8.36],
        [118.88, -8.28],
        [119.13, -8.71],
        [117.97, -8.91],
        [117.28, -9.04],
        [116.74, -9.03],
        [117.08, -8.46],
        [117.63, -8.45],
        [117.9, -8.1]
      ],
      [
        [122.9, -8.09],
        [122.76, -8.65],
        [121.25, -8.93],
        [119.92, -8.81],
        [119.92, -8.44],
        [120.72, -8.24],
        [121.34, -8.54],
        [122.01, -8.46],
        [122.9, -8.09]
      ],
      [
        [108.62, -6.78],
        [110.54, -6.88],
        [110.76, -6.47],
        [112.61, -6.95],
        [112.98, -7.59],
        [114.48, -7.78],
        [115.71, -8.37],
        [114.56, -8.75],
        [113.46, -8.35],
        [112.56, -8.38],
        [111.52, -8.3],
        [110.59, -8.12],
        [109.43, -7.74],
        [108.69, -7.64],
        [108.28, -7.77],
        [106.45, -7.35],
        [106.28, -6.92],
        [105.37, -6.85],
        [106.05, -5.9],
        [107.27, -5.95],
        [108.07, -6.35],
        [108.49, -6.42],
        [108.62, -6.78]
      ],
      [
        [134.72, -6.21],
        [134.21, -6.9],
        [134.11, -6.14],
        [134.29, -5.78],
        [134.5, -5.45],
        [134.73, -5.74],
        [134.72, -6.21]
      ],
      [
        [127.25, -3.46],
        [126.87, -3.79],
        [126.18, -3.61],
        [125.99, -3.18],
        [127, -3.13],
        [127.25, -3.46]
      ],
      [
        [130.47, -3.09],
        [130.83, -3.86],
        [129.99, -3.45],
        [129.16, -3.36],
        [128.59, -3.43],
        [127.9, -3.39],
        [128.14, -2.84],
        [129.37, -2.8],
        [130.47, -3.09]
      ],
      [
        [141, -2.6],
        [141.02, -5.86],
        [141.03, -9.12]
      ],
      [
        [141.03, -9.12],
        [140.14, -8.3],
        [139.13, -8.1],
        [138.88, -8.38],
        [137.61, -8.41],
        [138.04, -7.6],
        [138.67, -7.32],
        [138.41, -6.23],
        [137.93, -5.39],
        [135.99, -4.55],
        [135.16, -4.46],
        [133.66, -3.54],
        [133.37, -4.02],
        [132.98, -4.11],
        [132.76, -3.75],
        [132.75, -3.31],
        [131.99, -2.82],
        [133.07, -2.46],
        [133.78, -2.48],
        [133.7, -2.21],
        [132.23, -2.21],
        [131.84, -1.62],
        [130.94, -1.43],
        [130.52, -0.94],
        [131.87, -0.7],
        [132.38, -0.37],
        [133.99, -0.78],
        [134.14, -1.15],
        [134.42, -2.77],
        [135.46, -3.37],
        [136.29, -2.31],
        [137.44, -1.7],
        [138.33, -1.7],
        [139.18, -2.05],
        [139.93, -2.41],
        [141, -2.6]
      ],
      [
        [125.24, 1.42],
        [124.44, 0.43],
        [123.69, 0.24],
        [122.72, 0.43],
        [121.06, 0.38],
        [120.18, 0.24],
        [120.04, -0.52],
        [120.94, -1.41],
        [121.48, -0.96],
        [123.34, -0.62],
        [123.26, -1.08],
        [122.82, -0.93],
        [122.39, -1.52],
        [121.51, -1.9],
        [122.45, -3.19],
        [122.27, -3.53],
        [123.17, -4.68],
        [123.16, -5.34],
        [122.63, -5.63],
        [122.24, -5.28],
        [122.72, -4.46],
        [121.74, -4.85],
        [121.49, -4.57],
        [121.62, -4.19],
        [120.9, -3.6],
        [120.97, -2.63],
        [120.31, -2.93],
        [120.39, -4.1],
        [120.43, -5.53],
        [119.8, -5.67],
        [119.37, -5.38],
        [119.65, -4.46],
        [119.5, -3.49],
        [119.08, -3.49],
        [118.77, -2.8],
        [119.18, -2.15],
        [119.32, -1.35],
        [119.83, 0.15],
        [120.04, 0.57],
        [120.89, 1.31],
        [121.67, 1.01],
        [122.93, 0.88],
        [124.08, 0.92],
        [125.07, 1.64],
        [125.24, 1.42]
      ],
      [
        [128.69, 1.13],
        [128.64, 0.26],
        [128.12, 0.36],
        [127.97, -0.25],
        [128.38, -0.78],
        [128.1, -0.9],
        [127.7, -0.27],
        [127.4, 1.01],
        [127.6, 1.81],
        [127.93, 2.17],
        [128, 1.63],
        [128.59, 1.54],
        [128.69, 1.13]
      ],
      [
        [109.66, 2.01],
        [109.83, 1.34],
        [110.51, 0.77],
        [111.16, 0.98],
        [111.8, 0.9],
        [112.38, 1.41],
        [112.86, 1.5],
        [113.81, 1.22],
        [114.62, 1.43],
        [115.13, 2.82],
        [115.52, 3.17],
        [115.87, 4.31],
        [117.02, 4.31],
        [117.88, 4.14]
      ],
      [
        [117.88, 4.14],
        [117.31, 3.23],
        [118.05, 2.29],
        [117.88, 1.83],
        [119, 0.9],
        [117.81, 0.78],
        [117.48, 0.1],
        [117.52, -0.8],
        [116.56, -1.49],
        [116.53, -2.48],
        [116.15, -4.01],
        [116, -3.66],
        [114.86, -4.11],
        [114.47, -3.5],
        [113.76, -3.44],
        [113.26, -3.12],
        [112.07, -3.48],
        [111.7, -2.99],
        [111.05, -3.05],
        [110.22, -2.93],
        [110.07, -1.59],
        [109.57, -1.31],
        [109.09, -0.46],
        [108.95, 0.42],
        [109.07, 1.34],
        [109.66, 2.01]
      ],
      [
        [105.82, -5.85],
        [104.71, -5.87],
        [103.87, -5.04],
        [102.58, -4.22],
        [102.16, -3.61],
        [101.4, -2.8],
        [100.9, -2.05],
        [100.14, -0.65],
        [99.26, 0.18],
        [98.97, 1.04],
        [98.6, 1.82],
        [97.7, 2.45],
        [97.18, 3.31],
        [96.42, 3.87],
        [95.38, 4.97],
        [95.29, 5.48],
        [95.94, 5.44],
        [97.48, 5.25],
        [98.37, 4.27],
        [99.14, 3.59],
        [99.69, 3.17],
        [100.64, 2.1],
        [101.66, 2.08],
        [102.5, 1.4],
        [103.08, 0.56],
        [103.84, 0.1],
        [103.44, -0.71],
        [104.01, -1.06],
        [104.37, -1.08],
        [104.54, -1.78],
        [104.89, -2.34],
        [105.62, -2.43],
        [106.11, -3.06],
        [105.86, -4.31],
        [105.82, -5.85]
      ],
      [
        [81.11, 30.18],
        [80.48, 29.73],
        [80.09, 28.79],
        [81.06, 28.42],
        [82, 27.93],
        [83.3, 27.36],
        [84.68, 27.23],
        [85.25, 26.73],
        [86.02, 26.63],
        [87.23, 26.4],
        [88.06, 26.41],
        [88.17, 26.81],
        [88.04, 27.45],
        [88.12, 27.88]
      ],
      [
        [97.33, 28.26],
        [97.4, 27.88],
        [97.05, 27.7],
        [97.13, 27.08],
        [96.42, 27.26],
        [95.12, 26.57],
        [95.16, 26],
        [94.6, 25.16],
        [94.55, 24.68],
        [94.11, 23.85],
        [93.33, 24.08],
        [93.29, 23.04],
        [93.06, 22.7],
        [93.17, 22.28],
        [92.67, 22.04]
      ],
      [
        [89.03, 22.06],
        [88.89, 21.69],
        [88.21, 21.7],
        [86.98, 21.5],
        [87.03, 20.74],
        [86.5, 20.15],
        [85.06, 19.48],
        [83.94, 18.3],
        [83.19, 17.67],
        [82.19, 17.02],
        [82.19, 16.56],
        [81.69, 16.31],
        [80.79, 15.95],
        [80.32, 15.9],
        [80.03, 15.14],
        [80.23, 13.84],
        [80.29, 13.01],
        [79.86, 12.06],
        [79.86, 10.36],
        [79.34, 10.31],
        [78.89, 9.55],
        [79.19, 9.22],
        [78.28, 8.93],
        [77.94, 8.25],
        [77.54, 7.97],
        [76.59, 8.9],
        [76.13, 10.3],
        [75.75, 11.31],
        [75.4, 11.78],
        [74.86, 12.74],
        [74.62, 13.99],
        [74.44, 14.62],
        [73.53, 15.99],
        [73.12, 17.93],
        [72.82, 19.21],
        [72.82, 20.42],
        [72.63, 21.36],
        [71.18, 20.76],
        [70.47, 20.88],
        [69.16, 22.09],
        [69.64, 22.45],
        [69.35, 22.84],
        [68.18, 23.69]
      ],
      [
        [68.18, 23.69],
        [68.84, 24.36],
        [71.04, 24.36],
        [70.84, 25.22],
        [70.28, 25.72],
        [70.17, 26.49],
        [69.51, 26.94],
        [70.62, 27.99],
        [71.78, 27.91],
        [72.82, 28.96],
        [73.45, 29.98],
        [74.42, 30.98],
        [74.41, 31.69],
        [75.26, 32.27],
        [74.45, 32.76],
        [74.1, 33.44],
        [73.75, 34.32],
        [74.24, 34.75],
        [75.76, 34.5],
        [76.87, 34.65],
        [77.84, 35.49]
      ],
      [
        [-6.2, 53.87],
        [-6.03, 53.15],
        [-6.79, 52.26],
        [-8.56, 51.67],
        [-9.98, 51.82],
        [-9.17, 52.86],
        [-9.69, 53.88],
        [-8.33, 54.66],
        [-7.57, 55.13]
      ],
      [
        [53.92, 37.2],
        [54.8, 37.39],
        [55.51, 37.96],
        [56.18, 37.94],
        [56.62, 38.12],
        [57.33, 38.03],
        [58.44, 37.52],
        [59.23, 37.41],
        [60.38, 36.53],
        [61.12, 36.49],
        [61.21, 35.65]
      ],
      [
        [60.87, 29.83],
        [61.37, 29.3],
        [61.77, 28.7],
        [62.73, 28.26],
        [62.76, 27.38],
        [63.23, 27.22],
        [63.32, 26.76],
        [61.87, 26.24],
        [61.5, 25.08]
      ],
      [
        [61.5, 25.08],
        [59.62, 25.38],
        [58.53, 25.61],
        [57.4, 25.74],
        [56.97, 26.97],
        [56.49, 27.14],
        [55.72, 26.96],
        [54.72, 26.48],
        [53.49, 26.81],
        [52.48, 27.58],
        [51.52, 27.87],
        [50.85, 28.81],
        [50.12, 30.15],
        [49.58, 29.99],
        [48.94, 30.32],
        [48.57, 29.93]
      ],
      [
        [48.57, 29.93],
        [48.01, 30.45],
        [48, 30.99],
        [47.69, 30.98],
        [47.85, 31.71],
        [47.33, 32.47],
        [46.11, 33.02],
        [45.42, 33.97],
        [45.65, 34.75],
        [46.15, 35.09],
        [46.08, 35.68],
        [45.42, 35.98]
      ],
      [
        [45.42, 35.98],
        [44.77, 37.17],
        [44.23, 37.97]
      ],
      [
        [44.23, 37.97],
        [44.42, 38.28],
        [44.11, 39.43],
        [44.79, 39.71]
      ],
      [
        [48.88, 38.32],
        [49.2, 37.58],
        [50.15, 37.37],
        [50.84, 36.87],
        [52.26, 36.7],
        [53.83, 36.97],
        [53.92, 37.2]
      ],
      [
        [48.57, 29.93],
        [47.97, 29.98]
      ],
      [
        [47.97, 29.98],
        [47.3, 30.06],
        [46.57, 29.1]
      ],
      [
        [46.57, 29.1],
        [44.71, 29.18],
        [41.89, 31.19],
        [40.4, 31.89],
        [39.2, 32.16]
      ],
      [
        [39.2, 32.16],
        [38.79, 33.38]
      ],
      [
        [38.79, 33.38],
        [41.01, 34.42],
        [41.38, 35.63],
        [41.29, 36.36],
        [41.84, 36.61],
        [42.35, 37.23]
      ],
      [
        [42.35, 37.23],
        [42.78, 37.39],
        [43.94, 37.26],
        [44.29, 37],
        [44.77, 37.17]
      ],
      [
        [44.77, 37.17],
        [45.42, 35.98]
      ],
      [
        [-14.51, 66.46],
        [-14.74, 65.81],
        [-13.61, 65.13],
        [-14.91, 64.36],
        [-17.79, 63.68],
        [-18.66, 63.5],
        [-19.97, 63.64],
        [-22.76, 63.96],
        [-21.78, 64.4],
        [-23.96, 64.89],
        [-22.18, 65.08],
        [-22.23, 65.38],
        [-24.33, 65.61],
        [-23.65, 66.26],
        [-22.13, 66.41],
        [-20.58, 65.73],
        [-19.06, 66.28],
        [-17.8, 65.99],
        [-16.17, 66.53],
        [-14.51, 66.46]
      ],
      [
        [35.72, 32.71],
        [35.55, 32.39]
      ],
      [
        [35.55, 32.39],
        [35.18, 32.53],
        [34.97, 31.87],
        [35.23, 31.75],
        [34.97, 31.62],
        [34.93, 31.35],
        [35.4, 31.49]
      ],
      [
        [35.4, 31.49],
        [35.42, 31.1],
        [34.92, 29.5]
      ],
      [
        [34.92, 29.5],
        [34.27, 31.22],
        [34.56, 31.55],
        [34.49, 31.61],
        [34.75, 32.07],
        [34.96, 32.83],
        [35.1, 33.08],
        [35.13, 33.09]
      ],
      [
        [35.13, 33.09],
        [35.46, 33.09],
        [35.55, 33.26],
        [35.82, 33.28]
      ],
      [
        [35.82, 33.28],
        [35.84, 32.87],
        [35.7, 32.72],
        [35.72, 32.71]
      ],
      [
        [15.52, 38.23],
        [15.16, 37.44],
        [15.31, 37.13],
        [15.1, 36.62],
        [14.34, 37],
        [13.83, 37.1],
        [12.43, 37.61],
        [12.57, 38.13],
        [13.74, 38.03],
        [14.76, 38.14],
        [15.52, 38.23]
      ],
      [
        [9.21, 41.21],
        [9.81, 40.5],
        [9.67, 39.18],
        [9.21, 39.24],
        [8.81, 38.91],
        [8.43, 39.17],
        [8.39, 40.38],
        [8.16, 40.95],
        [8.71, 40.9],
        [9.21, 41.21]
      ],
      [
        [13.81, 46.51],
        [13.7, 46.02],
        [13.94, 45.59]
      ],
      [
        [13.94, 45.59],
        [13.14, 45.74],
        [12.33, 45.38],
        [12.38, 44.89],
        [12.26, 44.6],
        [12.59, 44.09],
        [13.53, 43.59],
        [14.03, 42.76],
        [15.14, 41.96],
        [15.93, 41.96],
        [16.17, 41.74],
        [15.89, 41.54],
        [16.79, 41.18],
        [17.52, 40.88],
        [18.38, 40.36],
        [18.48, 40.17],
        [18.29, 39.81],
        [17.74, 40.28],
        [16.87, 40.44],
        [16.45, 39.8],
        [17.17, 39.42],
        [17.05, 38.9],
        [16.64, 38.84],
        [16.1, 37.99],
        [15.68, 37.91],
        [15.69, 38.21],
        [15.89, 38.75],
        [16.11, 38.96],
        [15.72, 39.54],
        [15.41, 40.05],
        [15, 40.17],
        [14.7, 40.6],
        [14.06, 40.79],
        [13.63, 41.19],
        [12.89, 41.25],
        [12.11, 41.7],
        [11.19, 42.36],
        [10.51, 42.93],
        [10.2, 43.92],
        [9.7, 44.04],
        [8.89, 44.37],
        [8.43, 44.23],
        [7.85, 43.77],
        [7.44, 43.69]
      ],
      [
        [-77.57, 18.49],
        [-76.9, 18.4],
        [-76.37, 18.16],
        [-76.2, 17.89],
        [-76.9, 17.87],
        [-77.21, 17.7],
        [-77.77, 17.86],
        [-78.34, 18.23],
        [-78.22, 18.45],
        [-77.8, 18.52],
        [-77.57, 18.49]
      ],
      [
        [35.72, 32.71],
        [36.83, 32.31],
        [38.79, 33.38]
      ],
      [
        [39.2, 32.16],
        [39, 32.01],
        [37, 31.51],
        [38, 30.51],
        [37.67, 30.34],
        [37.5, 30],
        [36.74, 29.87],
        [36.5, 29.51],
        [36.07, 29.2],
        [34.96, 29.36]
      ],
      [
        [34.96, 29.36],
        [34.92, 29.5]
      ],
      [
        [35.4, 31.49],
        [35.55, 31.78],
        [35.55, 32.39]
      ],
      [
        [134.64, 34.15],
        [134.77, 33.81],
        [134.2, 33.2],
        [133.79, 33.52],
        [133.28, 33.29],
        [133.01, 32.7],
        [132.36, 32.99],
        [132.37, 33.46],
        [132.92, 34.06],
        [133.49, 33.94],
        [133.9, 34.36],
        [134.64, 34.15]
      ],
      [
        [140.98, 37.14],
        [140.6, 36.34],
        [140.77, 35.84],
        [140.25, 35.14],
        [138.98, 34.67],
        [137.22, 34.61],
        [135.79, 33.46],
        [135.12, 33.85],
        [135.08, 34.6],
        [133.34, 34.38],
        [132.16, 33.9],
        [130.99, 33.89],
        [132, 33.15],
        [131.33, 31.45],
        [130.69, 31.03],
        [130.2, 31.42],
        [130.45, 32.32],
        [129.81, 32.61],
        [129.41, 33.3],
        [130.35, 33.6],
        [130.88, 34.23],
        [131.88, 34.75],
        [132.62, 35.43],
        [134.61, 35.73],
        [135.68, 35.53],
        [136.72, 37.3],
        [137.39, 36.83],
        [138.86, 37.83],
        [139.43, 38.22],
        [140.05, 39.44],
        [139.88, 40.56],
        [140.31, 41.2],
        [141.37, 41.38],
        [141.91, 39.99],
        [141.88, 39.18],
        [140.96, 38.17],
        [140.98, 37.14]
      ],
      [
        [143.91, 44.17],
        [144.61, 43.96],
        [145.32, 44.38],
        [145.54, 43.26],
        [144.06, 42.99],
        [143.18, 42],
        [141.61, 42.68],
        [141.07, 41.58],
        [139.96, 41.57],
        [139.82, 42.56],
        [140.31, 43.33],
        [141.38, 43.39],
        [141.67, 44.77],
        [141.97, 45.55],
        [143.14, 44.51],
        [143.91, 44.17]
      ],
      [
        [70.96, 42.27],
        [70.39, 42.08],
        [69.07, 41.38],
        [68.63, 40.67],
        [68.26, 40.66],
        [67.99, 41.14],
        [66.71, 41.17],
        [66.51, 41.99],
        [66.02, 41.99],
        [66.1, 43],
        [64.9, 43.73],
        [63.19, 43.65],
        [62.01, 43.5],
        [61.06, 44.41],
        [60.24, 44.78],
        [58.69, 45.5],
        [58.5, 45.59],
        [55.93, 45],
        [55.97, 41.31]
      ],
      [
        [55.97, 41.31],
        [55.46, 41.26],
        [54.76, 42.04],
        [54.08, 42.32],
        [52.94, 42.12],
        [52.5, 41.78]
      ],
      [
        [52.5, 41.78],
        [52.45, 42.03],
        [52.69, 42.44],
        [52.5, 42.79],
        [51.34, 43.13],
        [50.89, 44.03],
        [50.34, 44.28],
        [50.31, 44.61],
        [51.28, 44.51],
        [51.32, 45.25],
        [52.17, 45.41],
        [53.04, 45.26],
        [53.22, 46.23],
        [53.04, 46.85],
        [52.04, 46.8],
        [51.19, 47.05],
        [50.03, 46.61],
        [49.1, 46.4]
      ],
      [
        [49.1, 46.4],
        [48.59, 46.56],
        [48.69, 47.08]
      ],
      [
        [48.69, 47.08],
        [48.06, 47.74],
        [47.32, 47.72],
        [46.47, 48.39]
      ],
      [
        [46.47, 48.39],
        [47.04, 49.15],
        [46.75, 49.36],
        [47.55, 50.45],
        [48.58, 49.87],
        [48.7, 50.61],
        [50.77, 51.69],
        [52.33, 51.72],
        [54.53, 51.03]
      ],
      [
        [54.53, 51.03],
        [55.72, 50.62],
        [56.78, 51.04],
        [58.36, 51.06],
        [59.64, 50.55]
      ],
      [
        [59.64, 50.55],
        [59.93, 50.84],
        [61.34, 50.8],
        [61.59, 51.27],
        [59.97, 51.96],
        [60.93, 52.45],
        [60.74, 52.72],
        [61.7, 52.98],
        [60.98, 53.66]
      ],
      [
        [60.98, 53.66],
        [61.44, 54.01],
        [65.18, 54.35]
      ],
      [
        [65.18, 54.35],
        [65.67, 54.6],
        [68.17, 54.97]
      ],
      [
        [68.17, 54.97],
        [69.07, 55.39],
        [70.87, 55.17],
        [71.18, 54.13],
        [72.22, 54.38],
        [73.51, 54.04],
        [73.43, 53.49]
      ],
      [
        [73.43, 53.49],
        [74.38, 53.55],
        [76.89, 54.49]
      ],
      [
        [76.89, 54.49],
        [76.53, 54.18],
        [77.8, 53.4],
        [80.04, 50.86],
        [80.57, 51.39],
        [81.95, 50.81],
        [83.38, 51.07],
        [83.94, 50.89],
        [84.42, 50.31],
        [85.12, 50.12],
        [85.54, 49.69],
        [86.83, 49.83],
        [87.36, 49.21]
      ],
      [
        [80.26, 42.35],
        [79.64, 42.5],
        [79.14, 42.86],
        [77.66, 42.96],
        [76, 42.99],
        [75.64, 42.88],
        [74.21, 43.3],
        [73.65, 43.09],
        [73.49, 42.5],
        [71.84, 42.85],
        [71.19, 42.7],
        [70.96, 42.27]
      ],
      [
        [41.59, -1.68],
        [40.88, -2.08],
        [40.64, -2.5],
        [40.26, -2.57],
        [40.12, -3.28],
        [39.8, -3.68],
        [39.6, -4.35],
        [39.2, -4.68]
      ],
      [
        [39.2, -4.68],
        [37.77, -3.68],
        [37.7, -3.1],
        [34.07, -1.06],
        [33.9, -0.95]
      ],
      [
        [33.9, -0.95],
        [33.89, 0.11],
        [34.18, 0.52],
        [34.67, 1.18],
        [35.04, 1.91],
        [34.6, 3.05],
        [34.48, 3.56],
        [34.01, 4.25]
      ],
      [
        [34.01, 4.25],
        [34.62, 4.85],
        [35.3, 5.51]
      ],
      [
        [41.86, 3.92],
        [40.98, 2.78],
        [40.99, -0.86],
        [41.59, -1.68]
      ],
      [
        [73.68, 39.43],
        [71.78, 39.28],
        [70.55, 39.6],
        [69.46, 39.53],
        [69.56, 40.1],
        [70.65, 39.94],
        [71.01, 40.24]
      ],
      [
        [71.01, 40.24],
        [71.77, 40.15],
        [73.06, 40.87],
        [71.87, 41.39],
        [71.16, 41.14],
        [70.42, 41.52],
        [71.26, 42.17],
        [70.96, 42.27]
      ],
      [
        [102.58, 12.19],
        [102.35, 13.39],
        [102.99, 14.23],
        [104.28, 14.42],
        [105.22, 14.27]
      ],
      [
        [105.22, 14.27],
        [106.04, 13.88],
        [106.5, 14.57],
        [107.38, 14.2]
      ],
      [
        [107.38, 14.2],
        [107.61, 13.54],
        [107.49, 12.34],
        [105.81, 11.57],
        [106.25, 10.96],
        [105.2, 10.89],
        [104.33, 10.49]
      ],
      [
        [104.33, 10.49],
        [103.5, 10.63],
        [103.09, 11.15],
        [102.58, 12.19]
      ],
      [
        [128.35, 38.61],
        [129.21, 37.43],
        [129.46, 36.78],
        [129.47, 35.63],
        [129.09, 35.08],
        [128.19, 34.89],
        [127.39, 34.48],
        [126.49, 34.39],
        [126.37, 34.93],
        [126.56, 35.68],
        [126.12, 36.73],
        [126.86, 36.89],
        [126.17, 37.75]
      ],
      [
        [126.17, 37.75],
        [126.24, 37.84],
        [126.68, 37.8],
        [127.07, 38.26],
        [127.78, 38.3],
        [128.21, 38.37],
        [128.35, 38.61]
      ],
      [
        [20.59, 41.86],
        [20.52, 42.22]
      ],
      [
        [20.52, 42.22],
        [20.28, 42.32],
        [20.07, 42.59]
      ],
      [
        [20.07, 42.59],
        [20.26, 42.81]
      ],
      [
        [20.26, 42.81],
        [20.5, 42.88],
        [20.64, 43.22],
        [20.81, 43.27],
        [20.96, 43.13],
        [21.14, 43.07],
        [21.27, 42.91],
        [21.44, 42.86],
        [21.63, 42.68],
        [21.78, 42.68],
        [21.66, 42.44],
        [21.54, 42.32],
        [21.58, 42.25]
      ],
      [
        [21.58, 42.25],
        [21.35, 42.21],
        [20.76, 42.05],
        [20.72, 41.85],
        [20.59, 41.86]
      ],
      [
        [47.97, 29.98],
        [48.18, 29.53],
        [48.09, 29.31],
        [48.42, 28.55]
      ],
      [
        [48.42, 28.55],
        [47.71, 28.53],
        [47.46, 29],
        [46.57, 29.1]
      ],
      [
        [105.22, 14.27],
        [105.54, 14.72],
        [105.59, 15.57],
        [104.78, 16.44],
        [104.72, 17.43],
        [103.96, 18.24],
        [103.2, 18.31],
        [103, 17.96],
        [102.41, 17.93],
        [102.11, 18.11],
        [101.06, 17.51],
        [101.04, 18.41],
        [101.28, 19.46],
        [100.61, 19.51],
        [100.55, 20.11],
        [100.12, 20.42]
      ],
      [
        [100.12, 20.42],
        [100.33, 20.79],
        [101.18, 21.44]
      ],
      [
        [102.17, 22.46],
        [102.75, 21.68],
        [103.2, 20.77],
        [104.44, 20.76],
        [104.82, 19.89],
        [104.18, 19.62],
        [103.9, 19.27],
        [105.09, 18.67],
        [105.93, 17.49],
        [106.56, 16.6],
        [107.31, 15.91],
        [107.56, 15.2],
        [107.38, 14.2]
      ],
      [
        [35.13, 33.09],
        [35.48, 33.91],
        [35.98, 34.61],
        [36, 34.64]
      ],
      [
        [36, 34.64],
        [36.45, 34.59],
        [36.61, 34.2],
        [36.07, 33.82],
        [35.82, 33.28]
      ],
      [
        [-7.71, 4.36],
        [-7.97, 4.36],
        [-9, 4.83],
        [-9.91, 5.59],
        [-10.77, 6.14],
        [-11.44, 6.79]
      ],
      [
        [-11.44, 6.79],
        [-11.2, 7.11],
        [-11.15, 7.4],
        [-10.7, 7.94],
        [-10.23, 8.41]
      ],
      [
        [14.85, 22.86],
        [14.14, 22.49],
        [13.58, 23.04],
        [12, 23.47]
      ],
      [
        [9.48, 30.31],
        [9.97, 30.54],
        [10.06, 30.96],
        [9.95, 31.38],
        [10.64, 31.76],
        [10.94, 32.08],
        [11.43, 32.37],
        [11.49, 33.14]
      ],
      [
        [11.49, 33.14],
        [12.66, 32.79],
        [13.08, 32.88],
        [13.92, 32.71],
        [15.25, 32.27],
        [15.71, 31.38],
        [16.61, 31.18],
        [18.02, 30.76],
        [19.09, 30.27],
        [19.57, 30.53],
        [20.05, 30.99],
        [19.82, 31.75],
        [20.13, 32.24],
        [20.85, 32.71],
        [21.54, 32.84],
        [22.9, 32.64],
        [23.24, 32.19],
        [23.61, 32.19],
        [23.93, 32.02],
        [24.92, 31.9],
        [25.16, 31.57]
      ],
      [
        [25, 22],
        [25, 20],
        [23.85, 20],
        [23.84, 19.58]
      ],
      [
        [23.84, 19.58],
        [19.85, 21.5],
        [15.86, 23.41],
        [14.85, 22.86]
      ],
      [
        [81.79, 7.52],
        [81.64, 6.48],
        [81.22, 6.2],
        [80.35, 5.97],
        [79.87, 6.76],
        [79.7, 8.2],
        [80.15, 9.82],
        [80.84, 9.27],
        [81.3, 8.56],
        [81.79, 7.52]
      ],
      [
        [28.98, -28.96],
        [29.33, -29.26],
        [29.02, -29.74],
        [28.85, -30.07],
        [28.29, -30.23],
        [28.11, -30.55],
        [27.75, -30.65],
        [27, -29.88],
        [27.53, -29.24],
        [28.07, -28.85],
        [28.54, -28.65],
        [28.98, -28.96]
      ],
      [
        [22.73, 54.33],
        [22.65, 54.58],
        [22.76, 54.86],
        [22.32, 55.02],
        [21.27, 55.19]
      ],
      [
        [21.27, 55.19],
        [21.06, 56.03]
      ],
      [
        [21.06, 56.03],
        [22.2, 56.34],
        [23.88, 56.27],
        [24.86, 56.37],
        [25, 56.16],
        [25.53, 56.1],
        [26.49, 55.62]
      ],
      [
        [23.48, 53.91],
        [23.24, 54.22],
        [22.73, 54.33]
      ],
      [
        [21.06, 56.03],
        [21.09, 56.78],
        [21.58, 57.41],
        [22.52, 57.75],
        [23.32, 57.01],
        [24.12, 57.03],
        [24.31, 57.79]
      ],
      [
        [27.29, 57.47],
        [27.77, 57.24],
        [27.86, 56.76],
        [28.18, 56.17]
      ],
      [
        [-8.67, 27.6],
        [-13.1, 27.6]
      ],
      [
        [-13.1, 27.6],
        [-12.36, 28.16],
        [-10.9, 28.83],
        [-10.4, 29.1],
        [-9.56, 29.93],
        [-9.81, 31.18],
        [-9.43, 32.04],
        [-9.3, 32.56],
        [-8.66, 33.24],
        [-7.65, 33.7],
        [-6.91, 34.11],
        [-6.24, 35.15],
        [-5.93, 35.76],
        [-5.19, 35.76],
        [-4.59, 35.33],
        [-3.64, 35.4],
        [-2.6, 35.18],
        [-2.17, 35.17]
      ],
      [
        [26.62, 48.22],
        [26.86, 48.37],
        [27.52, 48.47],
        [28.26, 48.16],
        [28.67, 48.12],
        [29.12, 47.85],
        [29.05, 47.51],
        [29.42, 47.35],
        [29.56, 46.93],
        [29.91, 46.67],
        [29.84, 46.53],
        [30.02, 46.42],
        [29.76, 46.35],
        [29.17, 46.38],
        [29.07, 46.52],
        [28.86, 46.44],
        [28.93, 46.26],
        [28.66, 45.94],
        [28.49, 45.6],
        [28.23, 45.49]
      ],
      [
        [28.23, 45.49],
        [28.05, 45.94],
        [28.16, 46.37],
        [28.13, 46.81],
        [27.55, 47.41],
        [27.23, 47.83],
        [26.92, 48.12],
        [26.62, 48.22]
      ],
      [
        [49.54, -12.47],
        [49.81, -12.9],
        [50.06, -13.56],
        [50.22, -14.76],
        [50.48, -15.23],
        [50.38, -15.71],
        [50.2, -16],
        [49.86, -15.41],
        [49.67, -15.71],
        [49.86, -16.45],
        [49.77, -16.88],
        [49.5, -17.11],
        [49.44, -17.95],
        [49.04, -19.12],
        [48.55, -20.5],
        [47.93, -22.39],
        [47.55, -23.78],
        [47.1, -24.94],
        [46.28, -25.18],
        [45.41, -25.6],
        [44.83, -25.35],
        [44.04, -24.99],
        [43.76, -24.46],
        [43.7, -23.57],
        [43.35, -22.78],
        [43.25, -22.06],
        [43.43, -21.34],
        [43.89, -21.16],
        [43.9, -20.83],
        [44.37, -20.07],
        [44.46, -19.44],
        [44.23, -18.96],
        [44.04, -18.33],
        [43.96, -17.41],
        [44.31, -16.85],
        [44.45, -16.22],
        [44.94, -16.18],
        [45.5, -15.97],
        [45.87, -15.79],
        [46.31, -15.78],
        [46.88, -15.21],
        [47.71, -14.59],
        [48.01, -14.09],
        [47.87, -13.66],
        [48.29, -13.78],
        [48.85, -13.09],
        [48.86, -12.49],
        [49.19, -12.04],
        [49.54, -12.47]
      ],
      [
        [-92.23, 14.54],
        [-93.36, 15.62],
        [-93.88, 15.94],
        [-94.69, 16.2],
        [-95.25, 16.13],
        [-96.05, 15.75],
        [-96.56, 15.65],
        [-97.26, 15.92],
        [-98.01, 16.11],
        [-98.95, 16.57],
        [-99.7, 16.71],
        [-100.83, 17.17],
        [-101.67, 17.65],
        [-101.92, 17.92],
        [-102.48, 17.98],
        [-103.5, 18.29],
        [-103.92, 18.75],
        [-104.99, 19.32],
        [-105.49, 19.95],
        [-105.73, 20.43],
        [-105.4, 20.53],
        [-105.5, 20.82],
        [-105.27, 21.08],
        [-105.27, 21.42],
        [-105.6, 21.87],
        [-105.69, 22.27],
        [-106.03, 22.77],
        [-106.91, 23.77],
        [-107.92, 24.55],
        [-108.4, 25.17],
        [-109.26, 25.58],
        [-109.44, 25.82],
        [-109.29, 26.44],
        [-109.8, 26.68],
        [-110.39, 27.16],
        [-110.64, 27.86],
        [-111.18, 27.94],
        [-111.76, 28.47],
        [-112.23, 28.95],
        [-112.27, 29.27],
        [-112.81, 30.02],
        [-113.16, 30.79],
        [-113.15, 31.17],
        [-113.87, 31.57],
        [-114.21, 31.52],
        [-114.78, 31.8],
        [-114.94, 31.39],
        [-114.77, 30.91],
        [-114.67, 30.16],
        [-114.33, 29.75],
        [-113.59, 29.06],
        [-113.42, 28.83],
        [-113.27, 28.75],
        [-113.14, 28.41],
        [-112.96, 28.43],
        [-112.76, 27.78],
        [-112.46, 27.53],
        [-112.24, 27.17],
        [-111.62, 26.66],
        [-111.28, 25.73],
        [-110.99, 25.29],
        [-110.71, 24.83],
        [-110.66, 24.3],
        [-110.17, 24.27],
        [-109.77, 23.81],
        [-109.41, 23.36],
        [-109.43, 23.19],
        [-109.85, 22.82],
        [-110.03, 22.82],
        [-110.3, 23.43],
        [-110.95, 24],
        [-111.67, 24.48],
        [-112.18, 24.74],
        [-112.15, 25.47],
        [-112.3, 26.01],
        [-112.78, 26.32],
        [-113.46, 26.77],
        [-113.6, 26.64],
        [-113.85, 26.9],
        [-114.47, 27.14],
        [-115.06, 27.72],
        [-114.98, 27.8],
        [-114.57, 27.74],
        [-114.2, 28.12],
        [-114.16, 28.57],
        [-114.93, 29.28],
        [-115.52, 29.56],
        [-115.89, 30.18],
        [-116.26, 30.84],
        [-116.72, 31.64],
        [-117.13, 32.54]
      ],
      [
        [-117.13, 32.54],
        [-115.99, 32.61],
        [-114.72, 32.72],
        [-114.81, 32.53],
        [-113.3, 32.04],
        [-111.02, 31.33],
        [-109.03, 31.34],
        [-108.24, 31.34],
        [-108.24, 31.75],
        [-106.51, 31.75],
        [-106.14, 31.4],
        [-105.63, 31.08],
        [-105.04, 30.64],
        [-104.71, 30.12],
        [-104.46, 29.57],
        [-103.94, 29.27],
        [-103.11, 28.97],
        [-102.48, 29.76],
        [-101.66, 29.78],
        [-100.96, 29.38],
        [-100.46, 28.7],
        [-100.11, 28.11],
        [-99.52, 27.54],
        [-99.3, 26.84],
        [-99.02, 26.37],
        [-98.24, 26.06],
        [-97.53, 25.84]
      ],
      [
        [-97.53, 25.84],
        [-97.14, 25.87],
        [-97.53, 24.99],
        [-97.7, 24.27],
        [-97.78, 22.93],
        [-97.87, 22.44],
        [-97.7, 21.9],
        [-97.39, 21.41],
        [-97.19, 20.64],
        [-96.53, 19.89],
        [-96.29, 19.32],
        [-95.9, 18.83],
        [-94.84, 18.56],
        [-94.43, 18.14],
        [-93.55, 18.42],
        [-92.79, 18.52],
        [-92.04, 18.7],
        [-91.41, 18.88],
        [-90.77, 19.28],
        [-90.53, 19.87],
        [-90.45, 20.71],
        [-90.28, 21],
        [-89.6, 21.26],
        [-88.54, 21.49],
        [-87.66, 21.46],
        [-87.05, 21.54],
        [-86.81, 21.33],
        [-86.85, 20.85],
        [-87.38, 20.26],
        [-87.62, 19.65],
        [-87.44, 19.47],
        [-87.59, 19.04],
        [-87.84, 18.26],
        [-88.09, 18.52],
        [-88.3, 18.5]
      ],
      [
        [21.58, 42.25],
        [21.92, 42.3],
        [22.38, 42.32]
      ],
      [
        [21.02, 40.84],
        [20.61, 41.09],
        [20.46, 41.52],
        [20.59, 41.86]
      ],
      [
        [-12.17, 14.62],
        [-11.83, 14.8],
        [-11.67, 15.39],
        [-11.35, 15.41],
        [-10.65, 15.13],
        [-10.09, 15.33],
        [-9.7, 15.26],
        [-9.55, 15.49],
        [-5.54, 15.5],
        [-5.32, 16.2],
        [-5.49, 16.33],
        [-5.97, 20.64],
        [-6.45, 24.96],
        [-4.92, 24.97]
      ],
      [
        [4.27, 19.16],
        [4.27, 16.85],
        [3.72, 16.18],
        [3.64, 15.57],
        [2.75, 15.41],
        [1.39, 15.32],
        [1.02, 14.97],
        [0.37, 14.93]
      ],
      [
        [-11.51, 12.44],
        [-11.47, 12.75],
        [-11.55, 13.14],
        [-11.93, 13.42],
        [-12.12, 13.99],
        [-12.17, 14.62]
      ],
      [
        [98.55, 9.93],
        [98.46, 10.68],
        [98.76, 11.44],
        [98.43, 12.03],
        [98.51, 13.12],
        [98.1, 13.64],
        [97.78, 14.84],
        [97.6, 16.1],
        [97.16, 16.93],
        [96.51, 16.43],
        [95.37, 15.71],
        [94.81, 15.8],
        [94.19, 16.04],
        [94.53, 17.28],
        [94.32, 18.21],
        [93.54, 19.37],
        [93.66, 19.73],
        [93.08, 19.86],
        [92.37, 20.67]
      ],
      [
        [100.12, 20.42],
        [99.54, 20.19],
        [98.96, 19.75],
        [98.25, 19.71],
        [97.8, 18.63],
        [97.38, 18.45],
        [97.86, 17.57],
        [98.49, 16.84],
        [98.9, 16.18],
        [98.54, 15.31],
        [98.19, 15.12],
        [98.43, 14.62],
        [99.1, 13.83],
        [99.21, 13.27],
        [99.2, 12.8],
        [99.59, 11.89],
        [99.04, 10.96],
        [98.55, 9.93]
      ],
      [
        [19.74, 42.69],
        [19.3, 42.2],
        [19.37, 41.88],
        [19.16, 41.96],
        [18.88, 42.28],
        [18.45, 42.48],
        [18.56, 42.65]
      ],
      [
        [19.22, 43.52],
        [19.48, 43.35],
        [19.63, 43.21],
        [19.96, 43.11],
        [20.34, 42.9],
        [20.26, 42.81]
      ],
      [
        [87.75, 49.3],
        [88.81, 49.47],
        [90.71, 50.33],
        [92.23, 50.8]
      ],
      [
        [92.23, 50.8],
        [93.1, 50.5],
        [94.15, 50.48]
      ],
      [
        [94.15, 50.48],
        [94.82, 50.01]
      ],
      [
        [94.82, 50.01],
        [95.81, 49.98],
        [97.26, 49.73],
        [98.23, 50.42]
      ],
      [
        [98.23, 50.42],
        [97.83, 51.01],
        [98.86, 52.05],
        [99.98, 51.63],
        [100.89, 51.52]
      ],
      [
        [100.89, 51.52],
        [102.07, 51.26],
        [102.26, 50.51],
        [103.68, 50.09]
      ],
      [
        [103.68, 50.09],
        [104.62, 50.28],
        [105.89, 50.41]
      ],
      [
        [105.89, 50.41],
        [106.89, 50.27],
        [107.87, 49.79],
        [108.48, 49.28],
        [109.4, 49.29],
        [110.66, 49.13],
        [111.58, 49.38],
        [112.9, 49.54],
        [114.36, 50.25],
        [114.96, 50.14],
        [115.49, 49.81],
        [116.68, 49.89]
      ],
      [
        [34.56, -11.52],
        [35.31, -11.44],
        [36.51, -11.72],
        [36.78, -11.59]
      ],
      [
        [36.78, -11.59],
        [37.47, -11.57],
        [37.83, -11.27],
        [38.43, -11.29]
      ],
      [
        [38.43, -11.29],
        [39.52, -10.9],
        [40.32, -10.32],
        [40.48, -10.77],
        [40.44, -11.76],
        [40.56, -12.64],
        [40.6, -14.2],
        [40.78, -14.69],
        [40.48, -15.41],
        [40.09, -16.1],
        [39.45, -16.72],
        [38.54, -17.1],
        [37.41, -17.59],
        [36.28, -18.66],
        [35.9, -18.84],
        [35.2, -19.55],
        [34.79, -19.78],
        [34.7, -20.5],
        [35.18, -21.25],
        [35.37, -21.84],
        [35.39, -22.14],
        [35.56, -22.09],
        [35.53, -23.07],
        [35.37, -23.54],
        [35.61, -23.71],
        [35.46, -24.12],
        [35.04, -24.48],
        [34.22, -24.82],
        [33.01, -25.36],
        [32.57, -25.73],
        [32.66, -26.15],
        [32.92, -26.22],
        [32.83, -26.74]
      ],
      [
        [32.83, -26.74],
        [32.07, -26.73]
      ],
      [
        [32.07, -26.73],
        [31.99, -26.29],
        [31.84, -25.84]
      ],
      [
        [31.84, -25.84],
        [31.75, -25.48],
        [31.93, -24.37],
        [31.67, -23.66],
        [31.19, -22.25]
      ],
      [
        [31.19, -22.25],
        [32.24, -21.12],
        [32.51, -20.4],
        [32.66, -20.3],
        [32.77, -19.72],
        [32.61, -19.42],
        [32.65, -18.67],
        [32.85, -17.98],
        [32.85, -16.71],
        [32.33, -16.39],
        [31.85, -16.32],
        [31.64, -16.07],
        [31.17, -15.86],
        [30.34, -15.88],
        [30.27, -15.51]
      ],
      [
        [30.27, -15.51],
        [30.18, -14.8],
        [33.21, -13.97]
      ],
      [
        [33.21, -13.97],
        [33.79, -14.45],
        [34.06, -14.36],
        [34.46, -14.61],
        [34.52, -15.01],
        [34.31, -15.48],
        [34.38, -16.18],
        [35.03, -16.8],
        [35.34, -16.11],
        [35.77, -15.9],
        [35.69, -14.61],
        [35.27, -13.89],
        [34.91, -13.57],
        [34.56, -13.58],
        [34.28, -12.28],
        [34.56, -11.52]
      ],
      [
        [-12.17, 14.62],
        [-12.83, 15.3],
        [-13.44, 16.04],
        [-14.1, 16.3],
        [-14.58, 16.6],
        [-15.14, 16.59],
        [-15.62, 16.37],
        [-16.12, 16.46],
        [-16.46, 16.14]
      ],
      [
        [-16.46, 16.14],
        [-16.55, 16.67],
        [-16.27, 17.17],
        [-16.15, 18.11],
        [-16.26, 19.1],
        [-16.38, 19.59],
        [-16.28, 20.09],
        [-16.54, 20.57],
        [-17.06, 21]
      ],
      [
        [-17.06, 21],
        [-16.85, 21.33],
        [-12.93, 21.33],
        [-13.12, 22.77],
        [-12.87, 23.28],
        [-11.94, 23.37],
        [-11.97, 25.93],
        [-8.69, 25.88],
        [-8.68, 27.4]
      ],
      [
        [33.21, -13.97],
        [32.69, -13.71],
        [32.99, -12.78],
        [33.31, -12.44],
        [33.11, -11.61],
        [33.32, -10.8],
        [33.49, -10.53],
        [33.23, -9.68],
        [32.76, -9.23]
      ],
      [
        [32.76, -9.23],
        [33.74, -9.42],
        [33.94, -9.69]
      ],
      [
        [33.94, -9.69],
        [34.28, -10.16],
        [34.56, -11.52]
      ],
      [
        [102.14, 6.22],
        [102.37, 6.13],
        [102.96, 5.52],
        [103.38, 4.86],
        [103.44, 4.18],
        [103.33, 3.73],
        [103.43, 3.38],
        [103.5, 2.79],
        [103.85, 2.52],
        [104.25, 1.63],
        [104.29, 1.37],
        [104.13, 1.27]
      ],
      [
        [104.13, 1.27],
        [103.74, 1.13],
        [103.56, 1.19]
      ],
      [
        [103.56, 1.19],
        [102.57, 1.97],
        [101.39, 2.76],
        [101.27, 3.27],
        [100.7, 3.94],
        [100.56, 4.77],
        [100.2, 5.31],
        [100.31, 6.04],
        [100.09, 6.46]
      ],
      [
        [100.09, 6.46],
        [100.26, 6.64],
        [101.08, 6.2],
        [101.15, 5.69],
        [101.81, 5.81],
        [102.14, 6.22]
      ],
      [
        [109.66, 2.01],
        [110.4, 1.66],
        [111.17, 1.85],
        [111.37, 2.7],
        [111.8, 2.89],
        [113, 3.1],
        [113.71, 3.89],
        [114.2, 4.53]
      ],
      [
        [115.45, 5.45],
        [116.22, 6.14],
        [116.73, 6.92],
        [117.13, 6.93],
        [117.64, 6.42],
        [117.69, 5.99],
        [118.35, 5.71],
        [119.18, 5.41],
        [119.11, 5.02],
        [118.44, 4.97],
        [118.62, 4.48],
        [117.88, 4.14]
      ],
      [
        [16.34, -28.58],
        [15.6, -27.82],
        [15.21, -27.09],
        [14.99, -26.12],
        [14.74, -25.39],
        [14.41, -23.85],
        [14.39, -22.66],
        [14.26, -22.11],
        [13.87, -21.7],
        [13.35, -20.87],
        [12.83, -19.67],
        [12.61, -19.05],
        [11.79, -18.07],
        [11.73, -17.3]
      ],
      [
        [23.22, -17.52],
        [24.03, -17.3],
        [24.68, -17.35],
        [25.08, -17.58],
        [25.08, -17.66]
      ],
      [
        [19.9, -24.77],
        [19.89, -28.46],
        [19, -28.97],
        [18.46, -29.05],
        [17.84, -28.86],
        [17.39, -28.78],
        [17.22, -28.36],
        [16.82, -28.08],
        [16.34, -28.58]
      ],
      [
        [165.78, -21.08],
        [166.6, -21.7],
        [167.12, -22.16],
        [166.74, -22.4],
        [166.19, -22.13],
        [165.47, -21.68],
        [164.83, -21.15],
        [164.17, -20.44],
        [164.03, -20.11],
        [164.46, -20.12],
        [165.02, -20.46],
        [165.46, -20.8],
        [165.78, -21.08]
      ],
      [
        [14.85, 22.86],
        [15.1, 21.31]
      ],
      [
        [15.1, 21.31],
        [15.47, 21.05],
        [15.49, 20.73]
      ],
      [
        [15.49, 20.73],
        [15.9, 20.39],
        [15.69, 19.96],
        [15.3, 17.93],
        [15.25, 16.63]
      ],
      [
        [15.25, 16.63],
        [13.97, 15.68],
        [13.54, 14.37]
      ],
      [
        [13.54, 14.37],
        [13.96, 14],
        [13.95, 13.35],
        [14.6, 13.33],
        [14.5, 12.86]
      ],
      [
        [14.18, 12.48],
        [14, 12.46],
        [13.32, 13.56],
        [13.08, 13.6],
        [12.3, 13.04],
        [11.53, 13.33],
        [10.99, 13.39],
        [10.7, 13.25],
        [10.11, 13.28],
        [9.52, 12.85],
        [9.01, 12.83],
        [7.8, 13.34],
        [7.33, 13.1],
        [6.82, 13.12],
        [6.45, 13.49],
        [5.44, 13.87],
        [4.37, 13.75],
        [4.11, 13.53],
        [3.97, 12.96],
        [3.68, 12.55],
        [3.61, 11.66]
      ],
      [
        [8.5, 4.77],
        [7.46, 4.41],
        [7.08, 4.46],
        [6.7, 4.24],
        [5.9, 4.26],
        [5.36, 4.89],
        [5.03, 5.61],
        [4.33, 6.27],
        [3.57, 6.26],
        [2.69, 6.26]
      ],
      [
        [-85.71, 11.09],
        [-86.06, 11.4],
        [-86.53, 11.81],
        [-86.75, 12.14],
        [-87.17, 12.46],
        [-87.67, 12.91],
        [-87.56, 13.06],
        [-87.39, 12.91],
        [-87.32, 12.98]
      ],
      [
        [-83.15, 15],
        [-83.23, 14.9],
        [-83.28, 14.68],
        [-83.18, 14.31],
        [-83.41, 13.97],
        [-83.52, 13.57],
        [-83.55, 13.13],
        [-83.5, 12.87],
        [-83.47, 12.42],
        [-83.63, 12.32],
        [-83.72, 11.89],
        [-83.65, 11.63],
        [-83.86, 11.37],
        [-83.81, 11.1],
        [-83.66, 10.94]
      ],
      [
        [4.05, 51.27],
        [3.31, 51.35],
        [3.83, 51.62],
        [4.71, 53.09],
        [6.07, 53.51],
        [6.91, 53.48]
      ],
      [
        [20.65, 69.11],
        [20.03, 69.07],
        [19.88, 68.41],
        [17.99, 68.57],
        [17.73, 68.01],
        [16.77, 68.01],
        [16.11, 67.3],
        [15.11, 66.19],
        [13.56, 64.79],
        [13.92, 64.45],
        [13.57, 64.05],
        [12.58, 64.07],
        [11.93, 63.13],
        [11.99, 61.8],
        [12.63, 61.29],
        [12.3, 60.12],
        [11.47, 59.43],
        [11.03, 58.86]
      ],
      [
        [11.03, 58.86],
        [10.36, 59.47],
        [8.38, 58.31],
        [7.05, 58.08],
        [5.67, 58.59],
        [5.31, 59.66],
        [4.99, 61.97],
        [5.91, 62.61],
        [8.55, 63.45],
        [10.53, 64.49],
        [12.36, 65.88],
        [14.76, 67.81],
        [16.44, 68.56],
        [19.18, 69.82],
        [21.38, 70.26],
        [23.02, 70.2],
        [24.55, 71.03],
        [26.37, 70.99],
        [28.17, 71.19],
        [31.29, 70.45],
        [30.01, 70.19],
        [31.1, 69.56],
        [29.4, 69.16],
        [28.59, 69.06]
      ],
      [
        [24.72, 77.85],
        [22.49, 77.44],
        [20.73, 77.68],
        [21.42, 77.94],
        [20.81, 78.25],
        [22.88, 78.45],
        [23.28, 78.08],
        [24.72, 77.85]
      ],
      [
        [18.25, 79.7],
        [21.54, 78.96],
        [19.03, 78.56],
        [18.47, 77.83],
        [17.59, 77.64],
        [17.12, 76.81],
        [15.91, 76.77],
        [13.76, 77.38],
        [14.67, 77.74],
        [13.17, 78.02],
        [11.22, 78.87],
        [10.44, 79.65],
        [13.17, 80.01],
        [13.72, 79.66],
        [15.14, 79.67],
        [15.52, 80.02],
        [16.99, 80.05],
        [18.25, 79.7]
      ],
      [
        [25.45, 80.41],
        [27.41, 80.06],
        [25.92, 79.52],
        [23.02, 79.4],
        [20.08, 79.57],
        [19.9, 79.84],
        [18.46, 79.86],
        [17.37, 80.32],
        [20.46, 80.6],
        [21.91, 80.36],
        [22.92, 80.66],
        [25.45, 80.41]
      ],
      [
        [173.02, -40.92],
        [173.25, -41.33],
        [173.96, -40.93],
        [174.25, -41.35],
        [174.25, -41.77],
        [173.88, -42.23],
        [173.22, -42.97],
        [172.71, -43.37],
        [173.08, -43.85],
        [172.31, -43.87],
        [171.45, -44.24],
        [171.19, -44.9],
        [170.62, -45.91],
        [169.83, -46.36],
        [169.33, -46.64],
        [168.41, -46.62],
        [167.76, -46.29],
        [166.68, -46.22],
        [166.51, -45.85],
        [167.05, -45.11],
        [168.3, -44.12],
        [168.95, -43.94],
        [169.67, -43.56],
        [170.52, -43.03],
        [171.13, -42.51],
        [171.57, -41.77],
        [171.95, -41.51],
        [172.1, -40.96],
        [172.8, -40.49],
        [173.02, -40.92]
      ],
      [
        [174.61, -36.16],
        [175.34, -37.21],
        [175.36, -36.53],
        [175.81, -36.8],
        [175.96, -37.56],
        [176.76, -37.88],
        [177.44, -37.96],
        [178.01, -37.58],
        [178.52, -37.7],
        [178.27, -38.58],
        [177.97, -39.17],
        [177.21, -39.15],
        [176.94, -39.45],
        [177.03, -39.88],
        [176.89, -40.07],
        [176.51, -40.6],
        [176.01, -41.29],
        [175.24, -41.69],
        [175.07, -41.43],
        [174.65, -41.28],
        [175.23, -40.46],
        [174.9, -39.91],
        [173.82, -39.51],
        [173.85, -39.15],
        [174.57, -38.8],
        [174.74, -38.03],
        [174.7, -37.38],
        [174.29, -36.71],
        [174.32, -36.53],
        [173.84, -36.12],
        [173.05, -35.24],
        [172.64, -34.53],
        [173.01, -34.45],
        [173.55, -35.01],
        [174.33, -35.27],
        [174.61, -36.16]
      ],
      [
        [53.11, 16.65],
        [52.78, 17.35],
        [52, 19]
      ],
      [
        [52, 19],
        [55, 20],
        [55.67, 22],
        [55.21, 22.71]
      ],
      [
        [56.4, 24.92],
        [56.85, 24.24],
        [57.4, 23.88],
        [58.14, 23.75],
        [58.73, 23.57],
        [59.18, 22.99],
        [59.45, 22.66],
        [59.81, 22.53],
        [59.81, 22.31],
        [59.44, 21.71],
        [59.28, 21.43],
        [58.86, 21.11],
        [58.49, 20.43],
        [58.03, 20.48],
        [57.83, 20.24],
        [57.67, 19.74],
        [57.79, 19.07],
        [57.69, 18.94],
        [57.23, 18.95],
        [56.61, 18.57],
        [56.51, 18.09],
        [56.28, 17.88],
        [55.66, 17.88],
        [55.27, 17.63],
        [55.27, 17.23],
        [54.79, 16.95],
        [54.24, 17.04],
        [53.57, 16.71],
        [53.11, 16.65]
      ],
      [
        [56.07, 26.06],
        [56.36, 26.4],
        [56.49, 26.31],
        [56.39, 25.9],
        [56.26, 25.71]
      ],
      [
        [68.18, 23.69],
        [67.44, 23.94],
        [67.15, 24.66],
        [66.37, 25.43],
        [64.53, 25.24],
        [62.91, 25.22],
        [61.5, 25.08]
      ],
      [
        [-77.88, 7.22],
        [-78.21, 7.51],
        [-78.43, 8.05],
        [-78.18, 8.32],
        [-78.44, 8.39],
        [-78.62, 8.72],
        [-79.12, 9],
        [-79.56, 8.93],
        [-79.76, 8.58],
        [-80.16, 8.33],
        [-80.38, 8.3],
        [-80.48, 8.09],
        [-80, 7.55],
        [-80.28, 7.42],
        [-80.42, 7.27],
        [-80.89, 7.22],
        [-81.06, 7.82],
        [-81.19, 7.65],
        [-81.52, 7.71],
        [-81.72, 8.11],
        [-82.13, 8.18],
        [-82.39, 8.29],
        [-82.82, 8.29],
        [-82.85, 8.07],
        [-82.97, 8.23]
      ],
      [
        [-82.55, 9.57],
        [-82.19, 9.21],
        [-82.21, 9],
        [-81.81, 8.95],
        [-81.71, 9.03],
        [-81.44, 8.79],
        [-80.95, 8.86],
        [-80.52, 9.11],
        [-79.91, 9.31],
        [-79.57, 9.61],
        [-79.02, 9.55],
        [-79.06, 9.45],
        [-78.5, 9.42],
        [-78.06, 9.25],
        [-77.73, 8.95],
        [-77.35, 8.67]
      ],
      [
        [-70.37, -18.35],
        [-71.38, -17.77],
        [-71.46, -17.36],
        [-73.44, -16.36],
        [-75.24, -15.27],
        [-76.01, -14.65],
        [-76.42, -13.82],
        [-76.26, -13.54],
        [-77.11, -12.22],
        [-78.09, -10.38],
        [-79.04, -8.39],
        [-79.45, -7.93],
        [-79.76, -7.19],
        [-80.54, -6.54],
        [-81.25, -6.14],
        [-80.93, -5.69],
        [-81.41, -4.74],
        [-81.1, -4.04],
        [-80.3, -3.4]
      ],
      [
        [126.38, 8.41],
        [126.48, 7.75],
        [126.54, 7.19],
        [126.2, 6.27],
        [125.83, 7.29],
        [125.36, 6.79],
        [125.68, 6.05],
        [125.4, 5.58],
        [124.22, 6.16],
        [123.94, 6.89],
        [124.24, 7.36],
        [123.61, 7.83],
        [123.3, 7.42],
        [122.83, 7.46],
        [122.09, 6.9],
        [121.92, 7.19],
        [122.31, 8.03],
        [122.94, 8.32],
        [123.49, 8.69],
        [123.84, 8.24],
        [124.6, 8.51],
        [124.76, 8.96],
        [125.47, 8.99],
        [125.41, 9.76],
        [126.22, 9.29],
        [126.31, 8.78],
        [126.38, 8.41]
      ],
      [
        [123.98, 10.28],
        [123.62, 9.95],
        [123.31, 9.32],
        [123, 9.02],
        [122.38, 9.71],
        [122.59, 9.98],
        [122.84, 10.26],
        [122.95, 10.88],
        [123.5, 10.94],
        [123.34, 10.27],
        [124.08, 11.23],
        [123.98, 10.28]
      ],
      [
        [118.5, 9.32],
        [117.17, 8.37],
        [117.66, 9.07],
        [118.39, 9.68],
        [118.99, 10.38],
        [119.51, 11.37],
        [119.69, 10.55],
        [119.03, 10],
        [118.5, 9.32]
      ],
      [
        [121.88, 11.89],
        [122.48, 11.58],
        [123.12, 11.58],
        [123.1, 11.17],
        [122.64, 10.74],
        [122, 10.44],
        [121.97, 10.91],
        [122.04, 11.42],
        [121.88, 11.89]
      ],
      [
        [125.5, 12.16],
        [125.78, 11.05],
        [125.01, 11.31],
        [125.03, 10.98],
        [125.28, 10.36],
        [124.8, 10.13],
        [124.76, 10.84],
        [124.46, 10.89],
        [124.3, 11.5],
        [124.89, 11.42],
        [124.88, 11.79],
        [124.27, 12.56],
        [125.23, 12.54],
        [125.5, 12.16]
      ],
      [
        [121.53, 13.07],
        [121.26, 12.21],
        [120.83, 12.7],
        [120.32, 13.47],
        [121.18, 13.43],
        [121.53, 13.07]
      ],
      [
        [121.32, 18.5],
        [121.94, 18.22],
        [122.25, 18.48],
        [122.34, 18.22],
        [122.17, 17.81],
        [122.52, 17.09],
        [122.25, 16.26],
        [121.66, 15.93],
        [121.51, 15.12],
        [121.73, 14.33],
        [122.26, 14.22],
        [122.7, 14.34],
        [123.95, 13.78],
        [123.86, 13.24],
        [124.18, 13],
        [124.08, 12.54],
        [123.3, 13.03],
        [122.93, 13.55],
        [122.67, 13.19],
        [122.03, 13.78],
        [121.13, 13.64],
        [120.63, 13.86],
        [120.68, 14.27],
        [120.99, 14.53],
        [120.69, 14.76],
        [120.56, 14.4],
        [120.07, 14.97],
        [119.92, 15.41],
        [119.88, 16.36],
        [120.29, 16.03],
        [120.39, 17.6],
        [120.72, 18.51],
        [121.32, 18.5]
      ],
      [
        [155.88, -6.82],
        [155.6, -6.92],
        [155.17, -6.54],
        [154.73, -5.9],
        [154.51, -5.14],
        [154.65, -5.04],
        [154.76, -5.34],
        [155.06, -5.57],
        [155.55, -6.2],
        [156.02, -6.54],
        [155.88, -6.82]
      ],
      [
        [151.98, -5.48],
        [151.46, -5.56],
        [151.3, -5.84],
        [150.75, -6.08],
        [150.24, -6.32],
        [149.71, -6.32],
        [148.89, -6.03],
        [148.32, -5.75],
        [148.4, -5.44],
        [149.3, -5.58],
        [149.85, -5.51],
        [150, -5.03],
        [150.14, -5],
        [150.24, -5.53],
        [150.81, -5.46],
        [151.09, -5.11],
        [151.65, -4.76],
        [151.54, -4.17],
        [152.14, -4.15],
        [152.34, -4.31],
        [152.32, -4.87],
        [151.98, -5.48]
      ],
      [
        [141, -2.6],
        [142.74, -3.29],
        [144.58, -3.86],
        [145.27, -4.37],
        [145.83, -4.88],
        [145.98, -5.47],
        [147.65, -6.08],
        [147.89, -6.61],
        [146.97, -6.72],
        [147.19, -7.39],
        [148.08, -8.04],
        [148.73, -9.1],
        [149.31, -9.07],
        [149.27, -9.51],
        [150.04, -9.68],
        [149.74, -9.87],
        [150.8, -10.29],
        [150.69, -10.58],
        [150.03, -10.65],
        [149.78, -10.39],
        [148.92, -10.28],
        [147.91, -10.13],
        [147.14, -9.49],
        [146.57, -8.94],
        [146.05, -8.07],
        [144.74, -7.63],
        [143.9, -7.92],
        [143.29, -8.25],
        [143.41, -8.98],
        [142.63, -9.33],
        [142.07, -9.16],
        [141.03, -9.12]
      ],
      [
        [153.14, -4.5],
        [152.83, -4.77],
        [152.64, -4.18],
        [152.41, -3.79],
        [151.95, -3.46],
        [151.38, -3.04],
        [150.66, -2.74],
        [150.94, -2.5],
        [151.48, -2.78],
        [151.82, -3],
        [152.24, -3.24],
        [152.64, -3.66],
        [153.02, -3.98],
        [153.14, -4.5]
      ],
      [
        [14.12, 53.76],
        [14.8, 54.05],
        [16.36, 54.51],
        [17.62, 54.85],
        [18.62, 54.68],
        [18.7, 54.44],
        [19.66, 54.43]
      ],
      [
        [19.66, 54.43],
        [20.89, 54.31],
        [22.73, 54.33]
      ],
      [
        [23.53, 51.58],
        [24.03, 50.71],
        [23.92, 50.42],
        [23.43, 50.31],
        [22.52, 49.48],
        [22.78, 49.03],
        [22.56, 49.09]
      ],
      [
        [22.56, 49.09],
        [21.61, 49.47],
        [20.89, 49.33],
        [20.42, 49.43],
        [19.83, 49.22],
        [19.32, 49.57],
        [18.91, 49.44],
        [18.85, 49.5]
      ],
      [
        [-66.28, 18.51],
        [-65.77, 18.43],
        [-65.59, 18.23],
        [-65.85, 17.98],
        [-66.6, 17.98],
        [-67.18, 17.95],
        [-67.24, 18.37],
        [-67.1, 18.52],
        [-66.28, 18.51]
      ],
      [
        [130.64, 42.4],
        [130.78, 42.22],
        [130.4, 42.28],
        [129.97, 41.94],
        [129.67, 41.6],
        [129.71, 40.88],
        [129.19, 40.66],
        [129.01, 40.49],
        [128.63, 40.19],
        [127.97, 40.03],
        [127.53, 39.76],
        [127.5, 39.32],
        [127.39, 39.21],
        [127.78, 39.05],
        [128.35, 38.61]
      ],
      [
        [126.17, 37.75],
        [125.69, 37.94],
        [125.57, 37.75],
        [125.28, 37.67],
        [125.24, 37.86],
        [124.98, 37.95],
        [124.71, 38.11],
        [124.99, 38.55],
        [125.22, 38.67],
        [125.13, 38.85],
        [125.39, 39.39],
        [125.32, 39.55],
        [124.74, 39.66],
        [124.27, 39.93]
      ],
      [
        [-7.45, 37.1],
        [-7.86, 36.84],
        [-8.38, 36.98],
        [-8.9, 36.87],
        [-8.75, 37.65],
        [-8.84, 38.27],
        [-9.29, 38.36],
        [-9.53, 38.74],
        [-9.45, 39.39],
        [-9.05, 39.76],
        [-8.98, 40.16],
        [-8.77, 40.76],
        [-8.79, 41.18],
        [-8.99, 41.54],
        [-9.03, 41.88]
      ],
      [
        [50.81, 24.75],
        [50.74, 25.48],
        [51.01, 26.01],
        [51.29, 26.11],
        [51.59, 25.8],
        [51.61, 25.22],
        [51.39, 24.63]
      ],
      [
        [51.39, 24.63],
        [51.11, 24.56],
        [50.81, 24.75]
      ],
      [
        [22.71, 47.88],
        [23.14, 48.1],
        [23.76, 47.99],
        [24.4, 47.98],
        [24.87, 47.74],
        [25.21, 47.89],
        [25.95, 47.99],
        [26.2, 48.22],
        [26.62, 48.22]
      ],
      [
        [28.23, 45.49],
        [28.68, 45.3],
        [29.15, 45.46],
        [29.6, 45.29]
      ],
      [
        [29.6, 45.29],
        [29.63, 45.04],
        [29.14, 44.82],
        [28.84, 44.91],
        [28.56, 43.71]
      ],
      [
        [22.66, 44.23],
        [22.47, 44.41],
        [22.71, 44.58],
        [22.46, 44.7],
        [22.15, 44.48],
        [21.56, 44.77],
        [21.48, 45.18],
        [20.87, 45.42],
        [20.76, 45.73],
        [20.22, 46.13]
      ],
      [
        [143.65, 50.75],
        [144.65, 48.98],
        [143.17, 49.31],
        [142.56, 47.86],
        [143.53, 46.84],
        [143.51, 46.14],
        [142.75, 46.74],
        [142.09, 45.97],
        [141.91, 46.81],
        [142.02, 47.78],
        [141.9, 48.86],
        [142.14, 49.62],
        [142.18, 50.95],
        [141.59, 51.94],
        [141.68, 53.3],
        [142.61, 53.76],
        [142.21, 54.23],
        [142.65, 54.37],
        [142.91, 53.7],
        [143.26, 52.74],
        [143.24, 51.76],
        [143.65, 50.75]
      ],
      [
        [19.66, 54.43],
        [19.89, 54.87],
        [21.27, 55.19]
      ],
      [
        [-175.01, 66.58],
        [-174.34, 66.34],
        [-174.57, 67.06],
        [-171.86, 66.91],
        [-169.9, 65.98],
        [-170.89, 65.54],
        [-172.53, 65.44],
        [-172.55, 64.46],
        [-172.96, 64.25],
        [-173.89, 64.28],
        [-174.65, 64.63],
        [-175.98, 64.92],
        [-176.21, 65.36],
        [-177.22, 65.52],
        [-178.36, 65.39],
        [-178.9, 65.74],
        [-178.69, 66.11],
        [-179.88, 65.87],
        [-179.43, 65.4],
        [-180, 64.98],
        [-180, 68.96],
        [-177.55, 68.2],
        [-174.93, 67.21],
        [-175.01, 66.58]
      ],
      [
        [180, 70.83],
        [178.9, 70.78],
        [178.73, 71.1],
        [180, 71.52],
        [180, 70.83]
      ],
      [
        [-178.69, 70.89],
        [-180, 70.83],
        [-180, 71.52],
        [-179.87, 71.56],
        [-179.02, 71.56],
        [-177.58, 71.27],
        [-177.66, 71.13],
        [-178.69, 70.89]
      ],
      [
        [143.6, 73.21],
        [142.09, 73.21],
        [140.04, 73.32],
        [139.86, 73.37],
        [140.81, 73.77],
        [142.06, 73.86],
        [143.48, 73.48],
        [143.6, 73.21]
      ],
      [
        [150.73, 75.08],
        [149.58, 74.69],
        [147.98, 74.78],
        [146.12, 75.17],
        [146.36, 75.5],
        [148.22, 75.35],
        [150.73, 75.08]
      ],
      [
        [145.09, 75.56],
        [144.3, 74.82],
        [140.61, 74.85],
        [138.96, 74.61],
        [136.97, 75.26],
        [137.51, 75.95],
        [138.83, 76.14],
        [141.47, 76.09],
        [145.09, 75.56]
      ],
      [
        [57.54, 70.72],
        [56.94, 70.63],
        [53.68, 70.76],
        [53.41, 71.21],
        [51.6, 71.47],
        [51.46, 72.01],
        [52.48, 72.23],
        [52.44, 72.77],
        [54.43, 73.63],
        [53.51, 73.75],
        [55.9, 74.63],
        [55.63, 75.08],
        [57.87, 75.61],
        [61.17, 76.25],
        [64.5, 76.44],
        [66.21, 76.81],
        [68.16, 76.94],
        [68.85, 76.54],
        [68.18, 76.23],
        [64.64, 75.74],
        [61.58, 75.26],
        [58.48, 74.31],
        [56.99, 73.33],
        [55.42, 72.37],
        [55.62, 71.54],
        [57.54, 70.72]
      ],
      [
        [131.29, 44.11],
        [131.03, 44.97],
        [131.88, 45.32]
      ],
      [
        [131.88, 45.32],
        [133.1, 45.14],
        [133.77, 46.12]
      ],
      [
        [133.77, 46.12],
        [134.11, 47.21],
        [134.5, 47.58],
        [135.03, 48.48]
      ],
      [
        [133.37, 48.18],
        [132.51, 47.79],
        [130.99, 47.79],
        [130.58, 48.73]
      ],
      [
        [129.4, 49.44],
        [127.66, 49.76],
        [127.29, 50.74]
      ],
      [
        [125.07, 53.16],
        [123.57, 53.46],
        [122.25, 53.43]
      ],
      [
        [120.73, 52.52],
        [120.74, 51.96],
        [120.18, 51.64],
        [119.28, 50.58],
        [119.29, 50.14]
      ],
      [
        [105.89, 50.41],
        [104.62, 50.28],
        [103.68, 50.09]
      ],
      [
        [103.68, 50.09],
        [102.26, 50.51],
        [102.07, 51.26],
        [100.89, 51.52]
      ],
      [
        [98.23, 50.42],
        [97.26, 49.73],
        [95.81, 49.98],
        [94.82, 50.01]
      ],
      [
        [94.15, 50.48],
        [93.1, 50.5],
        [92.23, 50.8]
      ],
      [
        [76.89, 54.49],
        [74.38, 53.55],
        [73.43, 53.49]
      ],
      [
        [68.17, 54.97],
        [65.67, 54.6],
        [65.18, 54.35]
      ],
      [
        [65.18, 54.35],
        [61.44, 54.01],
        [60.98, 53.66]
      ],
      [
        [59.64, 50.55],
        [58.36, 51.06],
        [56.78, 51.04],
        [55.72, 50.62],
        [54.53, 51.03]
      ],
      [
        [46.47, 48.39],
        [47.32, 47.72],
        [48.06, 47.74],
        [48.69, 47.08]
      ],
      [
        [48.69, 47.08],
        [48.59, 46.56],
        [49.1, 46.4]
      ],
      [
        [49.1, 46.4],
        [48.65, 45.81],
        [47.68, 45.64],
        [46.68, 44.61],
        [47.59, 43.66],
        [47.49, 42.99],
        [48.58, 41.81],
        [47.99, 41.41]
      ],
      [
        [46.4, 41.86],
        [45.78, 42.09],
        [45.47, 42.5]
      ],
      [
        [44.54, 42.71],
        [43.93, 42.55],
        [43.76, 42.74],
        [42.39, 43.22],
        [40.92, 43.38],
        [40.08, 43.55]
      ],
      [
        [39.96, 43.43],
        [38.68, 44.28],
        [37.54, 44.66],
        [36.68, 45.24],
        [37.4, 45.4],
        [38.23, 46.24],
        [37.67, 46.64],
        [39.15, 47.04],
        [39.12, 47.26],
        [38.22, 47.1]
      ],
      [
        [38.22, 47.1],
        [38.26, 47.55]
      ],
      [
        [38.26, 47.55],
        [38.77, 47.83],
        [39.74, 47.9]
      ],
      [
        [39.74, 47.9],
        [39.9, 48.23],
        [39.67, 48.78],
        [40.08, 49.31]
      ],
      [
        [40.08, 49.31],
        [40.07, 49.6],
        [38.59, 49.93]
      ],
      [
        [38.59, 49.93],
        [38.01, 49.92],
        [37.39, 50.38],
        [36.63, 50.23],
        [35.36, 50.58]
      ],
      [
        [35.36, 50.58],
        [35.38, 50.77],
        [35.02, 51.21]
      ],
      [
        [35.02, 51.21],
        [34.22, 51.26],
        [34.14, 51.57],
        [34.39, 51.77],
        [33.75, 52.34],
        [32.72, 52.24],
        [32.41, 52.29]
      ],
      [
        [32.41, 52.29],
        [32.16, 52.06],
        [31.79, 52.1],
        [31.54, 52.74]
      ],
      [
        [31.31, 53.07],
        [31.5, 53.17],
        [32.3, 53.13]
      ],
      [
        [27.72, 57.79],
        [27.42, 58.72],
        [28.13, 59.3]
      ],
      [
        [28.13, 59.3],
        [27.98, 59.48],
        [29.12, 60.03],
        [28.07, 60.5],
        [30.21, 61.78]
      ],
      [
        [28.59, 69.06],
        [29.4, 69.16],
        [31.1, 69.56],
        [32.13, 69.91],
        [33.78, 69.3],
        [36.51, 69.06],
        [40.29, 67.93],
        [41.06, 67.46],
        [41.13, 66.79],
        [40.02, 66.27],
        [38.38, 66],
        [33.92, 66.76],
        [33.18, 66.63],
        [34.81, 65.9],
        [34.88, 65.44],
        [34.94, 64.41],
        [36.23, 64.11],
        [37.01, 63.85],
        [37.14, 64.33],
        [36.54, 64.76],
        [37.18, 65.14],
        [39.59, 64.52],
        [40.44, 64.76],
        [39.76, 65.5],
        [42.09, 66.48],
        [43.02, 66.42],
        [43.95, 66.07],
        [44.53, 66.76],
        [43.7, 67.35],
        [44.19, 67.95],
        [43.45, 68.57],
        [46.25, 68.25],
        [46.82, 67.69],
        [45.56, 67.57],
        [45.56, 67.01],
        [46.35, 66.67],
        [47.89, 66.88],
        [48.14, 67.52],
        [50.23, 68],
        [53.72, 68.86],
        [54.47, 68.81],
        [53.49, 68.2],
        [54.73, 68.1],
        [55.44, 68.44],
        [57.32, 68.47],
        [58.8, 68.88],
        [59.94, 68.28],
        [61.08, 68.94],
        [60.03, 69.52],
        [60.55, 69.85],
        [63.5, 69.55],
        [64.89, 69.23],
        [68.51, 68.09],
        [69.18, 68.62],
        [68.16, 69.14],
        [68.14, 69.36],
        [66.93, 69.45],
        [67.26, 69.93],
        [66.72, 70.71],
        [66.69, 71.03],
        [68.54, 71.93],
        [69.2, 72.84],
        [69.94, 73.04],
        [72.59, 72.78],
        [72.8, 72.22],
        [71.85, 71.41],
        [72.47, 71.09],
        [72.79, 70.39],
        [72.56, 69.02],
        [73.67, 68.41],
        [73.24, 67.74],
        [71.28, 66.32],
        [72.42, 66.17],
        [72.82, 66.53],
        [73.92, 66.79],
        [74.19, 67.28],
        [75.05, 67.76],
        [74.47, 68.33],
        [74.94, 68.99],
        [73.84, 69.07],
        [73.6, 69.63],
        [74.4, 70.63],
        [73.1, 71.45],
        [74.89, 72.12],
        [74.66, 72.83],
        [75.16, 72.85],
        [75.68, 72.3],
        [75.29, 71.34],
        [76.36, 71.15],
        [75.9, 71.87],
        [77.58, 72.27],
        [79.65, 72.32],
        [81.5, 71.75],
        [80.61, 72.58],
        [80.51, 73.65],
        [82.25, 73.85],
        [84.66, 73.81],
        [86.82, 73.94],
        [86.01, 74.46],
        [87.17, 75.12],
        [88.32, 75.14],
        [90.26, 75.64],
        [92.9, 75.77],
        [93.23, 76.05],
        [95.86, 76.14],
        [96.68, 75.92],
        [98.92, 76.45],
        [100.76, 76.43],
        [101.04, 76.86],
        [101.99, 77.29],
        [104.35, 77.7],
        [106.07, 77.37],
        [104.71, 77.13],
        [106.97, 76.97],
        [107.24, 76.48],
        [108.15, 76.72],
        [111.08, 76.71],
        [113.33, 76.22],
        [114.13, 75.85],
        [113.89, 75.33],
        [112.78, 75.03],
        [110.15, 74.48],
        [109.4, 74.18],
        [110.64, 74.04],
        [112.12, 73.79],
        [113.02, 73.98],
        [113.53, 73.34],
        [113.97, 73.59],
        [115.57, 73.75],
        [118.78, 73.59],
        [119.02, 73.12],
        [123.2, 72.97],
        [123.26, 73.74],
        [125.38, 73.56],
        [126.98, 73.57],
        [128.59, 73.04],
        [129.05, 72.4],
        [128.46, 71.98],
        [129.72, 71.19],
        [131.29, 70.79],
        [132.25, 71.84],
        [133.86, 71.39],
        [135.56, 71.66],
        [137.5, 71.35],
        [138.23, 71.63],
        [139.87, 71.49],
        [139.15, 72.42],
        [140.47, 72.85],
        [149.5, 72.2],
        [150.35, 71.61],
        [152.97, 70.84],
        [157.01, 71.03],
        [159, 70.87],
        [159.83, 70.45],
        [159.71, 69.72],
        [160.94, 69.44],
        [162.28, 69.64],
        [164.05, 69.67],
        [165.94, 69.47],
        [167.84, 69.58],
        [169.58, 68.69],
        [170.82, 69.01],
        [170.01, 69.65],
        [170.45, 70.1],
        [173.64, 69.82],
        [175.72, 69.88],
        [178.6, 69.4],
        [180, 68.96],
        [180, 64.98],
        [179.99, 64.97],
        [178.71, 64.53],
        [177.41, 64.61],
        [178.31, 64.08],
        [178.91, 63.25],
        [179.37, 62.98],
        [179.49, 62.57],
        [179.23, 62.3],
        [177.36, 62.52],
        [174.57, 61.77],
        [173.68, 61.65],
        [172.15, 60.95],
        [170.7, 60.34],
        [170.33, 59.88],
        [168.9, 60.57],
        [166.29, 59.79],
        [165.84, 60.16],
        [164.88, 59.73],
        [163.54, 59.87],
        [163.22, 59.21],
        [162.02, 58.24],
        [162.05, 57.84],
        [163.19, 57.62],
        [163.06, 56.16],
        [162.13, 56.12],
        [161.7, 55.29],
        [162.12, 54.86],
        [160.37, 54.34],
        [160.02, 53.2],
        [158.53, 52.96],
        [158.23, 51.94],
        [156.79, 51.01],
        [156.42, 51.7],
        [155.99, 53.16],
        [155.43, 55.38],
        [155.91, 56.77],
        [156.76, 57.36],
        [156.81, 57.83],
        [158.36, 58.06],
        [160.15, 59.31],
        [161.87, 60.34],
        [163.67, 61.14],
        [164.47, 62.55],
        [163.26, 62.47],
        [162.66, 61.64],
        [160.12, 60.54],
        [159.3, 61.77],
        [156.72, 61.43],
        [154.22, 59.76],
        [155.04, 59.14],
        [152.81, 58.88],
        [151.27, 58.78],
        [151.34, 59.5],
        [149.78, 59.66],
        [148.54, 59.16],
        [145.49, 59.34],
        [142.2, 59.04],
        [138.96, 57.09],
        [135.13, 54.73],
        [136.7, 54.6],
        [137.19, 53.98],
        [138.16, 53.76],
        [138.8, 54.25],
        [139.9, 54.19],
        [141.35, 53.09],
        [141.38, 52.24],
        [140.6, 51.24],
        [140.51, 50.05],
        [140.06, 48.45],
        [138.55, 47],
        [138.22, 46.31],
        [136.86, 45.14],
        [135.52, 43.99],
        [134.87, 43.4],
        [133.54, 42.81],
        [132.91, 42.8],
        [132.28, 43.28],
        [130.94, 42.55],
        [130.78, 42.22],
        [130.64, 42.4],
        [130.63, 42.9]
      ],
      [
        [105.08, 78.31],
        [99.44, 77.92],
        [101.26, 79.23],
        [102.09, 79.35],
        [102.84, 79.28],
        [105.37, 78.71],
        [105.08, 78.31]
      ],
      [
        [51.14, 80.55],
        [49.79, 80.42],
        [48.89, 80.34],
        [48.75, 80.18],
        [47.59, 80.01],
        [46.5, 80.25],
        [47.07, 80.56],
        [44.85, 80.59],
        [46.8, 80.77],
        [48.32, 80.78],
        [48.52, 80.51],
        [49.1, 80.75],
        [50.04, 80.92],
        [51.52, 80.7],
        [51.14, 80.55]
      ],
      [
        [99.94, 78.88],
        [97.76, 78.76],
        [94.97, 79.04],
        [93.31, 79.43],
        [92.55, 80.14],
        [91.18, 80.34],
        [93.78, 81.02],
        [95.94, 81.25],
        [97.88, 80.75],
        [100.19, 79.78],
        [99.94, 78.88]
      ],
      [
        [30.42, -1.13],
        [30.82, -1.7],
        [30.76, -2.29]
      ],
      [
        [30.76, -2.29],
        [30.47, -2.41]
      ],
      [
        [29.58, -1.34],
        [29.82, -1.44],
        [30.42, -1.13]
      ],
      [
        [-17.06, 21],
        [-17.02, 21.41],
        [-16.98, 21.89],
        [-16.58, 22.16],
        [-16.26, 22.68],
        [-16.33, 23.02],
        [-15.99, 23.73],
        [-15.43, 24.36],
        [-15.09, 24.52],
        [-14.83, 25.1],
        [-14.8, 25.64],
        [-14.44, 26.25],
        [-13.78, 26.62],
        [-13.41, 27.2],
        [-13.26, 27.44],
        [-13.1, 27.6]
      ],
      [
        [42.78, 16.35],
        [42.65, 16.77],
        [42.35, 17.08],
        [42.27, 17.47],
        [41.75, 17.83],
        [41.22, 18.67],
        [40.94, 19.49],
        [40.25, 20.17],
        [39.8, 20.34],
        [39.14, 21.29],
        [39.02, 21.99],
        [39.07, 22.58],
        [38.49, 23.69],
        [38.02, 24.08],
        [37.48, 24.29],
        [37.15, 24.86],
        [37.21, 25.08],
        [36.93, 25.6],
        [36.64, 25.83],
        [36.25, 26.57],
        [35.64, 27.38],
        [35.13, 28.06],
        [34.63, 28.06],
        [34.79, 28.61],
        [34.83, 28.96],
        [34.96, 29.36]
      ],
      [
        [48.42, 28.55],
        [48.81, 27.69],
        [49.3, 27.46],
        [49.47, 27.11],
        [50.15, 26.69],
        [50.21, 26.28],
        [50.11, 25.94],
        [50.24, 25.61],
        [50.53, 25.33],
        [50.66, 25],
        [50.81, 24.75]
      ],
      [
        [51.39, 24.63],
        [51.58, 24.25]
      ],
      [
        [52, 19],
        [49.12, 18.62],
        [48.18, 18.17],
        [47.47, 17.12],
        [47, 16.95],
        [46.75, 17.28],
        [46.37, 17.23],
        [45.4, 17.33],
        [45.22, 17.43],
        [44.06, 17.41],
        [43.79, 17.32],
        [43.38, 17.58],
        [43.12, 17.09],
        [43.22, 16.67],
        [42.78, 16.35]
      ],
      [
        [33.96, 9.46],
        [33.82, 9.48],
        [33.84, 9.98],
        [33.72, 10.33],
        [33.21, 10.72],
        [33.09, 11.44],
        [33.21, 12.18],
        [32.74, 12.25],
        [32.67, 12.02],
        [32.07, 11.97],
        [32.31, 11.68],
        [32.4, 11.08],
        [31.85, 10.53],
        [31.35, 9.81],
        [30.84, 9.71],
        [30, 10.29],
        [29.62, 10.08],
        [29.52, 9.79],
        [29, 9.6],
        [28.97, 9.4],
        [27.97, 9.4],
        [27.83, 9.6],
        [27.11, 9.64],
        [26.75, 9.47],
        [26.48, 9.55],
        [25.96, 10.14],
        [25.79, 10.41],
        [25.07, 10.27],
        [24.79, 9.81],
        [24.54, 8.92],
        [24.19, 8.73],
        [23.89, 8.62]
      ],
      [
        [23.89, 8.62],
        [23.81, 8.67]
      ],
      [
        [22.86, 11.14],
        [22.88, 11.38],
        [22.51, 11.68],
        [22.5, 12.26],
        [22.29, 12.65],
        [21.94, 12.59],
        [22.04, 12.96],
        [22.3, 13.37],
        [22.18, 13.79],
        [22.51, 14.09],
        [22.3, 14.33],
        [22.57, 14.94],
        [23.02, 15.68],
        [23.89, 15.61],
        [23.84, 19.58]
      ],
      [
        [36.87, 22],
        [37.19, 21.02],
        [36.97, 20.84],
        [37.11, 19.81],
        [37.48, 18.61],
        [37.86, 18.37],
        [38.41, 18]
      ],
      [
        [36.85, 16.96],
        [36.75, 16.29],
        [36.32, 14.82],
        [36.43, 14.42]
      ],
      [
        [33.96, 9.58],
        [33.96, 9.46]
      ],
      [
        [33.96, 9.46],
        [33.97, 8.68]
      ],
      [
        [34.01, 4.25],
        [33.39, 3.79],
        [32.69, 3.79],
        [31.88, 3.56],
        [31.25, 3.78],
        [30.83, 3.51]
      ],
      [
        [30.83, 3.51],
        [29.95, 4.17],
        [29.72, 4.6]
      ],
      [
        [24.57, 8.23],
        [23.89, 8.62]
      ],
      [
        [-16.71, 13.59],
        [-17.13, 14.37],
        [-17.63, 14.73],
        [-17.19, 14.92],
        [-16.7, 15.62],
        [-16.46, 16.14]
      ],
      [
        [-16.68, 12.38],
        [-16.84, 13.15]
      ],
      [
        [162.12, -10.48],
        [162.4, -10.83],
        [161.7, -10.82],
        [161.32, -10.2],
        [161.92, -10.45],
        [162.12, -10.48]
      ],
      [
        [160.85, -9.87],
        [160.46, -9.9],
        [159.85, -9.79],
        [159.64, -9.64],
        [159.7, -9.24],
        [160.36, -9.4],
        [160.69, -9.61],
        [160.85, -9.87]
      ],
      [
        [161.68, -9.6],
        [161.53, -9.78],
        [160.79, -8.92],
        [160.58, -8.32],
        [160.92, -8.32],
        [161.28, -9.12],
        [161.68, -9.6]
      ],
      [
        [159.88, -8.34],
        [159.92, -8.54],
        [159.13, -8.11],
        [158.59, -7.75],
        [158.21, -7.42],
        [158.36, -7.32],
        [158.82, -7.56],
        [159.64, -8.02],
        [159.88, -8.34]
      ],
      [
        [157.54, -7.35],
        [157.34, -7.4],
        [156.9, -7.18],
        [156.49, -6.77],
        [156.54, -6.6],
        [157.14, -7.02],
        [157.54, -7.35]
      ],
      [
        [-11.44, 6.79],
        [-11.71, 6.86],
        [-12.43, 7.26],
        [-12.95, 7.8],
        [-13.12, 8.16],
        [-13.25, 8.9]
      ],
      [
        [-87.79, 13.38],
        [-87.9, 13.15],
        [-88.48, 13.16],
        [-88.84, 13.26],
        [-89.26, 13.46],
        [-89.81, 13.52],
        [-90.1, 13.74]
      ],
      [
        [47.79, 8],
        [46.95, 8],
        [43.68, 9.18]
      ],
      [
        [43.68, 9.18],
        [43.3, 9.54],
        [42.93, 10.02]
      ],
      [
        [43.15, 11.46],
        [43.47, 11.28],
        [43.67, 10.86],
        [44.12, 10.45],
        [44.61, 10.44],
        [45.56, 10.7],
        [46.65, 10.82],
        [47.53, 11.13],
        [48.02, 11.19],
        [48.38, 11.38],
        [48.95, 11.41],
        [48.94, 11.39],
        [48.95, 11.41],
        [49.27, 11.43],
        [49.73, 11.58],
        [50.26, 11.68],
        [50.73, 12.02],
        [51.11, 12.02],
        [51.13, 11.75],
        [51.04, 11.17],
        [51.05, 10.64],
        [50.83, 10.28],
        [50.55, 9.2],
        [50.07, 8.08],
        [49.45, 6.8],
        [48.59, 5.34],
        [47.74, 4.22],
        [46.56, 2.86],
        [45.56, 2.05],
        [44.07, 1.05],
        [43.14, 0.29],
        [42.04, -0.92],
        [41.81, -1.45],
        [41.59, -1.68]
      ],
      [
        [19.37, 44.86],
        [19.01, 44.86],
        [19.39, 45.24]
      ],
      [
        [19.07, 45.52],
        [18.83, 45.91],
        [19.6, 46.17]
      ],
      [
        [-57.15, 5.97],
        [-55.95, 5.77],
        [-55.84, 5.95],
        [-55.03, 6.03],
        [-53.96, 5.76]
      ],
      [
        [-54.4, 4.21],
        [-54.01, 3.62],
        [-54.18, 3.19],
        [-54.27, 2.73],
        [-54.52, 2.31]
      ],
      [
        [22.56, 49.09],
        [22.28, 48.83],
        [22.09, 48.42]
      ],
      [
        [13.72, 45.5],
        [13.94, 45.59]
      ],
      [
        [23.9, 66.01],
        [22.18, 65.72],
        [21.21, 65.03],
        [21.37, 64.41],
        [19.78, 63.61],
        [17.85, 62.75],
        [17.12, 61.34],
        [17.83, 60.64],
        [18.79, 60.08],
        [17.87, 58.95],
        [16.83, 58.72],
        [16.45, 57.04],
        [15.88, 56.1],
        [14.67, 56.2],
        [14.1, 55.41],
        [12.94, 55.36],
        [12.63, 56.31],
        [11.79, 57.44],
        [11.03, 58.86]
      ],
      [
        [32.07, -26.73],
        [31.87, -27.18],
        [31.28, -27.29],
        [30.69, -26.74],
        [30.68, -26.4],
        [30.95, -26.02],
        [31.04, -25.73],
        [31.33, -25.66],
        [31.84, -25.84]
      ],
      [
        [36, 34.64],
        [35.91, 35.41],
        [36.15, 35.82]
      ],
      [
        [36.15, 35.82],
        [36.42, 36.04],
        [36.69, 36.26],
        [36.74, 36.82],
        [37.07, 36.62],
        [38.17, 36.9],
        [38.7, 36.71],
        [39.52, 36.72],
        [40.67, 37.09],
        [41.21, 37.07],
        [42.35, 37.23]
      ],
      [
        [13.54, 14.37],
        [13.97, 15.68],
        [15.25, 16.63]
      ],
      [
        [15.49, 20.73],
        [15.47, 21.05],
        [15.1, 21.31]
      ],
      [
        [14.96, 11.56],
        [14.89, 12.22],
        [14.5, 12.86]
      ],
      [
        [1.87, 6.14],
        [1.06, 5.93]
      ],
      [
        [102.58, 12.19],
        [101.69, 12.65],
        [100.83, 12.63],
        [100.98, 13.41],
        [100.1, 13.41],
        [100.02, 12.31],
        [99.48, 10.85],
        [99.15, 9.96],
        [99.22, 9.24],
        [99.87, 9.21],
        [100.28, 8.3],
        [100.46, 7.43],
        [101.02, 6.86],
        [101.62, 6.74],
        [102.14, 6.22]
      ],
      [
        [100.09, 6.46],
        [99.69, 6.85],
        [99.52, 7.34],
        [98.99, 7.91],
        [98.5, 8.38],
        [98.34, 7.79],
        [98.15, 8.35],
        [98.26, 8.97],
        [98.55, 9.93]
      ],
      [
        [67.83, 37.14],
        [68.39, 38.16],
        [68.18, 38.9],
        [67.44, 39.14],
        [67.7, 39.58],
        [68.54, 39.53],
        [69.01, 40.09],
        [69.33, 40.73],
        [70.67, 40.96],
        [70.46, 40.5],
        [70.6, 40.22],
        [71.01, 40.24]
      ],
      [
        [53.92, 37.2],
        [53.74, 37.91],
        [53.88, 38.95],
        [53.1, 39.29],
        [53.36, 39.98],
        [52.69, 40.03],
        [52.92, 40.88],
        [53.86, 40.63],
        [54.74, 40.95],
        [54.01, 41.55],
        [53.72, 42.12],
        [52.92, 41.87],
        [52.81, 41.14],
        [52.5, 41.78]
      ],
      [
        [55.97, 41.31],
        [57.1, 41.32],
        [56.93, 41.83],
        [57.79, 42.17],
        [58.63, 42.75],
        [59.98, 42.22],
        [60.08, 41.43],
        [60.47, 41.22],
        [61.55, 41.27],
        [61.88, 41.08],
        [62.37, 40.05],
        [63.52, 39.36],
        [64.17, 38.89],
        [65.22, 38.4],
        [66.55, 37.97],
        [66.52, 37.36]
      ],
      [
        [124.97, -8.89],
        [125.09, -8.66],
        [125.95, -8.43],
        [126.64, -8.4],
        [126.96, -8.27],
        [127.34, -8.4],
        [126.97, -8.67],
        [125.93, -9.11],
        [125.09, -9.39]
      ],
      [
        [-61.68, 10.76],
        [-61.1, 10.89],
        [-60.89, 10.86],
        [-60.93, 10.11],
        [-61.77, 10],
        [-61.95, 10.09],
        [-61.66, 10.37],
        [-61.68, 10.76]
      ],
      [
        [8.42, 36.95],
        [9.51, 37.35],
        [10.21, 37.23],
        [10.18, 36.72],
        [11.03, 37.09],
        [11.1, 36.9],
        [10.6, 36.41],
        [10.59, 35.95],
        [10.94, 35.7],
        [10.81, 34.83],
        [10.15, 34.33],
        [10.34, 33.79],
        [10.86, 33.77],
        [11.11, 33.29],
        [11.49, 33.14]
      ],
      [
        [44.23, 37.97],
        [44.77, 37.17]
      ],
      [
        [36.15, 35.82],
        [35.78, 36.27],
        [36.16, 36.65],
        [35.55, 36.57],
        [34.71, 36.8],
        [34.03, 36.22],
        [32.51, 36.11],
        [31.7, 36.64],
        [30.62, 36.68],
        [30.39, 36.26],
        [29.7, 36.14],
        [28.73, 36.68],
        [27.64, 36.66],
        [27.05, 37.65],
        [26.32, 38.21],
        [26.8, 38.99],
        [26.17, 39.46],
        [27.28, 40.42],
        [28.82, 40.46],
        [29.24, 41.22],
        [31.15, 41.09],
        [32.35, 41.74],
        [33.51, 42.02],
        [35.17, 42.04],
        [36.91, 41.34],
        [38.35, 40.95],
        [39.51, 41.1],
        [40.37, 41.01],
        [41.55, 41.54]
      ],
      [
        [28, 42.01],
        [28.12, 41.62],
        [28.99, 41.3],
        [28.81, 41.05],
        [27.62, 41],
        [27.19, 40.69],
        [26.36, 40.15],
        [26.04, 40.62],
        [26.06, 40.82]
      ],
      [
        [121.78, 24.39],
        [121.18, 22.79],
        [120.75, 21.97],
        [120.22, 22.81],
        [120.11, 23.56],
        [120.69, 24.54],
        [121.5, 25.3],
        [121.95, 25],
        [121.78, 24.39]
      ],
      [
        [39.2, -4.68],
        [38.74, -5.91],
        [38.8, -6.48],
        [39.44, -6.84],
        [39.47, -7.1],
        [39.19, -7.7],
        [39.25, -8.01],
        [39.19, -8.49],
        [39.54, -9.11],
        [39.95, -10.1],
        [40.32, -10.32],
        [39.52, -10.9],
        [38.43, -11.29]
      ],
      [
        [38.43, -11.29],
        [37.83, -11.27],
        [37.47, -11.57],
        [36.78, -11.59]
      ],
      [
        [34.56, -11.52],
        [34.28, -10.16],
        [33.94, -9.69]
      ],
      [
        [33.94, -9.69],
        [33.74, -9.42],
        [32.76, -9.23]
      ],
      [
        [32.76, -9.23],
        [32.19, -8.93],
        [31.56, -8.76],
        [31.16, -8.59]
      ],
      [
        [31.16, -8.59],
        [30.74, -8.34],
        [30.2, -7.08],
        [29.62, -6.52],
        [29.42, -5.94]
      ],
      [
        [29.75, -4.45],
        [30.12, -4.09],
        [30.51, -3.57],
        [30.75, -3.36],
        [30.74, -3.03],
        [30.53, -2.81],
        [30.47, -2.41],
        [30.76, -2.29]
      ],
      [
        [30.42, -1.13],
        [30.77, -1.01],
        [31.87, -1.03],
        [33.9, -0.95]
      ],
      [
        [29.59, -0.59],
        [29.82, -0.21],
        [29.88, 0.6]
      ],
      [
        [31.17, 2.2],
        [30.77, 2.34],
        [30.83, 3.51]
      ],
      [
        [31.79, 52.1],
        [32.16, 52.06],
        [32.41, 52.29]
      ],
      [
        [35.02, 51.21],
        [35.38, 50.77],
        [35.36, 50.58]
      ],
      [
        [38.59, 49.93],
        [40.07, 49.6],
        [40.08, 49.31]
      ],
      [
        [40.08, 49.31],
        [39.67, 48.78],
        [39.9, 48.23],
        [39.74, 47.9]
      ],
      [
        [39.74, 47.9],
        [38.77, 47.83],
        [38.26, 47.55]
      ],
      [
        [38.22, 47.1],
        [37.43, 47.02],
        [36.76, 46.7],
        [35.82, 46.65],
        [34.96, 46.27],
        [35.02, 45.65],
        [35.51, 45.41],
        [36.53, 45.47],
        [36.33, 45.11],
        [35.24, 44.94],
        [33.88, 44.36],
        [33.33, 44.56],
        [33.55, 45.03],
        [32.45, 45.33],
        [32.63, 45.52],
        [33.59, 45.85],
        [33.3, 46.08],
        [31.74, 46.33],
        [31.68, 46.71],
        [30.75, 46.58],
        [30.38, 46.03],
        [29.6, 45.29]
      ],
      [
        [-53.37, -33.77],
        [-53.81, -34.4],
        [-54.94, -34.95],
        [-55.67, -34.75],
        [-56.22, -34.86],
        [-57.14, -34.43],
        [-57.82, -34.46],
        [-58.43, -33.91]
      ],
      [
        [-155.54, 19.08],
        [-155.69, 18.92],
        [-155.94, 19.06],
        [-155.91, 19.34],
        [-156.07, 19.7],
        [-156.02, 19.81],
        [-155.85, 19.98],
        [-155.92, 20.17],
        [-155.86, 20.27],
        [-155.79, 20.25],
        [-155.4, 20.08],
        [-155.22, 19.99],
        [-155.06, 19.86],
        [-154.81, 19.51],
        [-154.83, 19.45],
        [-155.22, 19.24],
        [-155.54, 19.08]
      ],
      [
        [-156.08, 20.64],
        [-156.41, 20.57],
        [-156.59, 20.78],
        [-156.7, 20.86],
        [-156.71, 20.93],
        [-156.61, 21.01],
        [-156.26, 20.92],
        [-156, 20.76],
        [-156.08, 20.64]
      ],
      [
        [-156.76, 21.18],
        [-156.79, 21.07],
        [-157.33, 21.1],
        [-157.25, 21.22],
        [-156.76, 21.18]
      ],
      [
        [-157.65, 21.32],
        [-157.71, 21.26],
        [-157.78, 21.28],
        [-158.13, 21.31],
        [-158.25, 21.54],
        [-158.29, 21.58],
        [-158.03, 21.72],
        [-157.94, 21.65],
        [-157.65, 21.32]
      ],
      [
        [-159.35, 21.98],
        [-159.46, 21.88],
        [-159.8, 22.07],
        [-159.75, 22.14],
        [-159.6, 22.24],
        [-159.37, 22.21],
        [-159.35, 21.98]
      ],
      [
        [-67.14, 45.14],
        [-66.96, 44.81],
        [-68.03, 44.33],
        [-69.06, 43.98],
        [-70.12, 43.68],
        [-70.65, 43.09],
        [-70.81, 42.87],
        [-70.82, 42.34],
        [-70.49, 41.81],
        [-70.08, 41.78],
        [-70.18, 42.15],
        [-69.88, 41.92],
        [-69.97, 41.64],
        [-70.64, 41.48],
        [-71.12, 41.49],
        [-71.86, 41.32],
        [-72.29, 41.27],
        [-72.88, 41.22],
        [-73.71, 40.93],
        [-72.24, 41.12],
        [-71.94, 40.93],
        [-73.34, 40.63],
        [-73.98, 40.63],
        [-73.95, 40.75],
        [-74.26, 40.47],
        [-73.96, 40.43],
        [-74.18, 39.71],
        [-74.91, 38.94],
        [-74.98, 39.2],
        [-75.2, 39.25],
        [-75.53, 39.5],
        [-75.32, 38.96],
        [-75.07, 38.78],
        [-75.06, 38.4],
        [-75.38, 38.02],
        [-75.94, 37.22],
        [-76.03, 37.26],
        [-75.72, 37.94],
        [-76.23, 38.32],
        [-76.35, 39.15],
        [-76.54, 38.72],
        [-76.33, 38.08],
        [-76.99, 38.24],
        [-76.3, 37.92],
        [-76.26, 36.97],
        [-75.97, 36.9],
        [-75.87, 36.55],
        [-75.73, 35.55],
        [-76.36, 34.81],
        [-77.4, 34.51],
        [-78.05, 33.93],
        [-78.55, 33.86],
        [-79.06, 33.49],
        [-79.2, 33.16],
        [-80.3, 32.51],
        [-80.86, 32.03],
        [-81.34, 31.44],
        [-81.49, 30.73],
        [-81.31, 30.04],
        [-80.98, 29.18],
        [-80.54, 28.47],
        [-80.53, 28.04],
        [-80.06, 26.88],
        [-80.09, 26.21],
        [-80.13, 25.82],
        [-80.38, 25.21],
        [-80.68, 25.08],
        [-81.17, 25.2],
        [-81.33, 25.64],
        [-81.71, 25.87],
        [-82.24, 26.73],
        [-82.71, 27.5],
        [-82.86, 27.89],
        [-82.65, 28.55],
        [-82.93, 29.1],
        [-83.71, 29.94],
        [-84.1, 30.09],
        [-85.11, 29.64],
        [-85.29, 29.69],
        [-85.77, 30.15],
        [-86.4, 30.4],
        [-87.53, 30.27],
        [-88.42, 30.38],
        [-89.18, 30.32],
        [-89.59, 30.16],
        [-89.41, 29.89],
        [-89.43, 29.49],
        [-89.22, 29.29],
        [-89.41, 29.16],
        [-89.78, 29.31],
        [-90.15, 29.12],
        [-90.88, 29.15],
        [-91.63, 29.68],
        [-92.5, 29.55],
        [-93.23, 29.78],
        [-93.85, 29.71],
        [-94.69, 29.48],
        [-95.6, 28.74],
        [-96.59, 28.31],
        [-97.14, 27.83],
        [-97.37, 27.38],
        [-97.38, 26.69],
        [-97.33, 26.21],
        [-97.14, 25.87],
        [-97.53, 25.84]
      ],
      [
        [-117.13, 32.54],
        [-117.3, 33.05],
        [-117.94, 33.62],
        [-118.41, 33.74],
        [-118.52, 34.03],
        [-119.08, 34.08],
        [-119.44, 34.35],
        [-120.37, 34.45],
        [-120.62, 34.61],
        [-120.74, 35.16],
        [-121.71, 36.16],
        [-122.55, 37.55],
        [-122.51, 37.78],
        [-122.95, 38.11],
        [-123.73, 38.95],
        [-123.87, 39.77],
        [-124.4, 40.31],
        [-124.18, 41.14],
        [-124.21, 42],
        [-124.53, 42.77],
        [-124.14, 43.71],
        [-124.02, 44.62],
        [-123.9, 45.52],
        [-124.08, 46.86],
        [-124.4, 47.72],
        [-124.69, 48.18],
        [-124.57, 48.38],
        [-123.12, 48.04],
        [-122.59, 47.1],
        [-122.34, 47.36],
        [-122.5, 48.18],
        [-122.84, 49]
      ],
      [
        [-153.01, 57.12],
        [-154.01, 56.73],
        [-154.52, 56.99],
        [-154.67, 57.46],
        [-153.76, 57.82],
        [-153.23, 57.97],
        [-152.56, 57.9],
        [-152.14, 57.59],
        [-153.01, 57.12]
      ],
      [
        [-165.58, 59.91],
        [-166.19, 59.75],
        [-166.85, 59.94],
        [-167.46, 60.21],
        [-166.47, 60.38],
        [-165.67, 60.29],
        [-165.58, 59.91]
      ],
      [
        [-171.73, 63.78],
        [-171.11, 63.59],
        [-170.49, 63.69],
        [-169.68, 63.43],
        [-168.69, 63.3],
        [-168.77, 63.19],
        [-169.53, 62.98],
        [-170.29, 63.19],
        [-170.67, 63.38],
        [-171.55, 63.32],
        [-171.79, 63.41],
        [-171.73, 63.78]
      ],
      [
        [-134.27, 58.86],
        [-133.36, 58.41],
        [-132.73, 57.69]
      ],
      [
        [-130.01, 55.92],
        [-129.98, 55.28],
        [-130.54, 54.8],
        [-131.09, 55.18],
        [-131.97, 55.5],
        [-132.25, 56.37],
        [-133.54, 57.18],
        [-134.08, 58.12],
        [-135.04, 58.19],
        [-136.63, 58.21],
        [-137.8, 58.5],
        [-139.87, 59.54],
        [-140.83, 59.73],
        [-142.57, 60.08],
        [-143.96, 60],
        [-145.93, 60.46],
        [-147.11, 60.88],
        [-148.22, 60.67],
        [-148.02, 59.98],
        [-148.57, 59.91],
        [-149.73, 59.71],
        [-150.61, 59.37],
        [-151.72, 59.16],
        [-151.86, 59.74],
        [-151.41, 60.73],
        [-150.35, 61.03],
        [-150.62, 61.28],
        [-151.9, 60.73],
        [-152.58, 60.06],
        [-154.02, 59.35],
        [-153.29, 58.86],
        [-154.23, 58.15],
        [-155.31, 57.73],
        [-156.31, 57.42],
        [-156.56, 56.98],
        [-158.12, 56.46],
        [-158.43, 55.99],
        [-159.6, 55.57],
        [-160.29, 55.64],
        [-161.22, 55.36],
        [-162.24, 55.02],
        [-163.07, 54.69],
        [-164.79, 54.4],
        [-164.94, 54.57],
        [-163.85, 55.04],
        [-162.87, 55.35],
        [-161.8, 55.89],
        [-160.56, 56.01],
        [-160.07, 56.42],
        [-158.68, 57.02],
        [-158.46, 57.22],
        [-157.72, 57.57],
        [-157.55, 58.33],
        [-157.04, 58.92],
        [-158.19, 58.62],
        [-158.52, 58.79],
        [-159.06, 58.42],
        [-159.71, 58.93],
        [-159.98, 58.57],
        [-160.36, 59.07],
        [-161.36, 58.67],
        [-161.97, 58.67],
        [-162.05, 59.27],
        [-161.87, 59.63],
        [-162.52, 59.99],
        [-163.82, 59.8],
        [-164.66, 60.27],
        [-165.35, 60.51],
        [-165.35, 61.07],
        [-166.12, 61.5],
        [-165.73, 62.07],
        [-164.92, 62.63],
        [-164.56, 63.15],
        [-163.75, 63.22],
        [-163.07, 63.06],
        [-162.26, 63.54],
        [-161.53, 63.46],
        [-160.77, 63.77],
        [-160.96, 64.22],
        [-161.52, 64.4],
        [-160.78, 64.79],
        [-161.39, 64.78],
        [-162.45, 64.56],
        [-162.76, 64.34],
        [-163.55, 64.56],
        [-164.96, 64.45],
        [-166.43, 64.69],
        [-166.85, 65.09],
        [-168.11, 65.67],
        [-166.71, 66.09],
        [-164.47, 66.58],
        [-163.65, 66.58],
        [-163.79, 66.08],
        [-161.68, 66.12],
        [-162.49, 66.74],
        [-163.72, 67.12],
        [-164.43, 67.62],
        [-165.39, 68.04],
        [-166.76, 68.36],
        [-166.2, 68.88],
        [-164.43, 68.92],
        [-163.17, 69.37],
        [-162.93, 69.86],
        [-161.91, 70.33],
        [-160.93, 70.45],
        [-159.04, 70.89],
        [-158.12, 70.82],
        [-156.58, 71.36],
        [-155.07, 71.15],
        [-154.34, 70.7],
        [-153.9, 70.89],
        [-152.21, 70.83],
        [-152.27, 70.6],
        [-150.74, 70.43],
        [-149.72, 70.53],
        [-147.61, 70.21],
        [-145.69, 70.12],
        [-144.92, 69.99],
        [-143.59, 70.15],
        [-142.07, 69.85],
        [-140.99, 69.71],
        [-140.99, 69.71],
        [-140.99, 66],
        [-141, 60.31],
        [-140.01, 60.28],
        [-139.04, 60],
        [-138.34, 59.56]
      ],
      [
        [-71.33, 11.78],
        [-71.36, 11.54],
        [-71.95, 11.42],
        [-71.62, 10.97],
        [-71.63, 10.45],
        [-72.07, 9.87],
        [-71.7, 9.07],
        [-71.26, 9.14],
        [-71.04, 9.86],
        [-71.35, 10.21],
        [-71.4, 10.97],
        [-70.16, 11.38],
        [-70.29, 11.85],
        [-69.94, 12.16],
        [-69.58, 11.46],
        [-68.88, 11.44],
        [-68.23, 10.89],
        [-68.19, 10.55],
        [-67.3, 10.55],
        [-66.23, 10.65],
        [-65.66, 10.2],
        [-64.89, 10.08],
        [-64.33, 10.39],
        [-64.32, 10.64],
        [-63.08, 10.7],
        [-61.88, 10.72],
        [-62.73, 10.42],
        [-62.39, 9.95],
        [-61.59, 9.87],
        [-60.83, 9.38],
        [-60.67, 8.58],
        [-60.15, 8.6],
        [-59.76, 8.37]
      ],
      [
        [108.05, 21.55],
        [106.72, 20.7],
        [105.88, 19.75],
        [105.66, 19.06],
        [106.43, 18],
        [107.36, 16.7],
        [108.27, 16.08],
        [108.88, 15.28],
        [109.34, 13.43],
        [109.2, 11.67],
        [108.37, 11.01],
        [107.22, 10.36],
        [106.41, 9.53],
        [105.16, 8.6],
        [104.8, 9.24],
        [105.08, 9.92],
        [104.33, 10.49]
      ],
      [
        [167.84, -16.47],
        [167.52, -16.6],
        [167.18, -16.16],
        [167.22, -15.89],
        [167.84, -16.47]
      ],
      [
        [167.11, -14.93],
        [167.27, -15.74],
        [167, -15.61],
        [166.79, -15.67],
        [166.65, -15.39],
        [166.63, -14.63],
        [167.11, -14.93]
      ],
      [
        [53.11, 16.65],
        [52.39, 16.38],
        [52.19, 15.94],
        [52.17, 15.6],
        [51.17, 15.18],
        [49.57, 14.71],
        [48.68, 14],
        [48.24, 13.95],
        [47.94, 14.01],
        [47.35, 13.59],
        [46.72, 13.4],
        [45.88, 13.35],
        [45.63, 13.29],
        [45.41, 13.03],
        [45.14, 12.95],
        [44.99, 12.7],
        [44.49, 12.72],
        [44.18, 12.59],
        [43.48, 12.64],
        [43.22, 13.22],
        [43.25, 13.77],
        [43.09, 14.06],
        [42.89, 14.8],
        [42.6, 15.21],
        [42.81, 15.26],
        [42.7, 15.72],
        [42.82, 15.91],
        [42.78, 16.35]
      ],
      [
        [29.43, -22.09],
        [29.84, -22.1],
        [30.32, -22.27],
        [30.66, -22.15],
        [31.19, -22.25]
      ],
      [
        [32.83, -26.74],
        [32.58, -27.47],
        [32.46, -28.3],
        [32.2, -28.75],
        [31.52, -29.26],
        [31.33, -29.4],
        [30.9, -29.91],
        [30.62, -30.42],
        [30.06, -31.14],
        [28.93, -32.17],
        [28.22, -32.77],
        [27.46, -33.23],
        [26.42, -33.61],
        [25.91, -33.67],
        [25.78, -33.94],
        [25.17, -33.8],
        [24.68, -33.99],
        [23.59, -33.79],
        [22.99, -33.92],
        [22.57, -33.86],
        [21.54, -34.26],
        [20.69, -34.42],
        [20.07, -34.8],
        [19.62, -34.82],
        [19.19, -34.46],
        [18.86, -34.44],
        [18.42, -34],
        [18.38, -34.14],
        [18.24, -33.87],
        [18.25, -33.28],
        [17.93, -32.61],
        [18.25, -32.43],
        [18.22, -31.66],
        [17.57, -30.73],
        [17.06, -29.88],
        [17.06, -29.88],
        [16.34, -28.58]
      ],
      [
        [30.27, -15.51],
        [29.52, -15.64],
        [28.95, -16.04],
        [28.83, -16.39],
        [28.47, -16.47],
        [27.6, -17.29],
        [27.04, -17.94],
        [26.71, -17.96],
        [26.38, -17.85],
        [25.26, -17.74]
      ],
      [
        [30.74, -8.34],
        [31.16, -8.59]
      ],
      [
        [-24.32, 14.85],
        [-24.39, 14.81],
        [-24.46, 14.83],
        [-24.54, 14.92],
        [-24.5, 14.97],
        [-24.39, 15.02],
        [-24.36, 15],
        [-24.32, 14.92],
        [-24.32, 14.85]
      ],
      [
        [-23.2, 15.13],
        [-23.24, 15.13],
        [-23.28, 15.18],
        [-23.28, 15.25],
        [-23.24, 15.32],
        [-23.17, 15.32],
        [-23.13, 15.26],
        [-23.13, 15.16],
        [-23.2, 15.13]
      ],
      [
        [-23.46, 15],
        [-23.53, 14.9],
        [-23.67, 14.92],
        [-23.82, 15.07],
        [-23.82, 15.16],
        [-23.78, 15.23],
        [-23.78, 15.32],
        [-23.71, 15.32],
        [-23.71, 15.26],
        [-23.56, 15.13],
        [-23.46, 15]
      ],
      [
        [-22.95, 16.24],
        [-22.84, 16.2],
        [-22.77, 16.22],
        [-22.7, 16.17],
        [-22.7, 16.1],
        [-22.74, 16.03],
        [-22.84, 15.98],
        [-22.92, 15.98],
        [-22.99, 16.03],
        [-22.92, 16.13],
        [-22.95, 16.24]
      ],
      [
        [-24.1, 16.62],
        [-24.07, 16.57],
        [-24.1, 16.55],
        [-24.25, 16.58],
        [-24.28, 16.57],
        [-24.36, 16.48],
        [-24.43, 16.6],
        [-24.43, 16.65],
        [-24.39, 16.67],
        [-24.28, 16.64],
        [-24.1, 16.62]
      ],
      [
        [-22.92, 16.65],
        [-22.95, 16.6],
        [-22.99, 16.67],
        [-23.02, 16.79],
        [-22.95, 16.83],
        [-22.92, 16.83],
        [-22.92, 16.65]
      ],
      [
        [-24.9, 16.81],
        [-25.04, 16.79],
        [-25.11, 16.83],
        [-25.08, 16.86],
        [-24.97, 16.91],
        [-24.9, 16.84],
        [-24.9, 16.81]
      ],
      [
        [-25.18, 16.93],
        [-25.29, 16.91],
        [-25.33, 16.93],
        [-25.33, 17],
        [-25.36, 17.05],
        [-25.36, 17.09],
        [-25.15, 17.19],
        [-25.04, 17.17],
        [-25, 17.09],
        [-25.04, 17.04],
        [-25.18, 16.93]
      ],
      [
        [43.76, -12.32],
        [43.65, -12.36],
        [43.62, -12.29],
        [43.62, -12.25],
        [43.69, -12.27],
        [43.76, -12.32]
      ],
      [
        [44.45, -12.1],
        [44.52, -12.24],
        [44.52, -12.34],
        [44.48, -12.36],
        [44.45, -12.34],
        [44.37, -12.25],
        [44.19, -12.18],
        [44.27, -12.17],
        [44.3, -12.18],
        [44.37, -12.17],
        [44.37, -12.13],
        [44.41, -12.1],
        [44.45, -12.1]
      ],
      [
        [43.44, -11.91],
        [43.44, -11.92],
        [43.29, -11.85],
        [43.22, -11.77],
        [43.22, -11.44],
        [43.26, -11.4],
        [43.33, -11.39],
        [43.37, -11.42],
        [43.37, -11.63],
        [43.44, -11.77],
        [43.47, -11.87],
        [43.44, -11.91]
      ],
      [
        [57.62, -20.5],
        [57.52, -20.52],
        [57.37, -20.52],
        [57.3, -20.47],
        [57.34, -20.41],
        [57.34, -20.34],
        [57.37, -20.24],
        [57.41, -20.19],
        [57.48, -20.15],
        [57.48, -20.07],
        [57.55, -20.01],
        [57.62, -20],
        [57.73, -20.1],
        [57.77, -20.22],
        [57.77, -20.34],
        [57.7, -20.38],
        [57.7, -20.45],
        [57.62, -20.5]
      ],
      [
        [55.54, -4.7],
        [55.54, -4.79],
        [55.46, -4.77],
        [55.46, -4.7],
        [55.39, -4.67],
        [55.36, -4.61],
        [55.43, -4.56],
        [55.54, -4.7]
      ],
      [
        [50.6, 25.87],
        [50.57, 25.8],
        [50.53, 25.82],
        [50.46, 25.96],
        [50.46, 26.05],
        [50.42, 26.18],
        [50.46, 26.22],
        [50.57, 26.24],
        [50.53, 26.18],
        [50.6, 26.12],
        [50.6, 25.87]
      ],
      [
        [73.39, 3.22],
        [73.36, 3.23],
        [73.36, 3.27],
        [73.39, 3.28],
        [73.43, 3.27],
        [73.43, 3.23],
        [73.39, 3.22]
      ],
      [
        [73.5, 4.15],
        [73.47, 4.15],
        [73.47, 4.21],
        [73.5, 4.22],
        [73.5, 4.15]
      ],
      [
        [169.63, 5.82],
        [169.59, 5.85],
        [169.63, 5.94],
        [169.67, 5.92],
        [169.63, 5.82]
      ],
      [
        [171.07, 7.12],
        [171.22, 7.07],
        [171.36, 7.1],
        [171.36, 7.09],
        [171.25, 7.05],
        [171.22, 7.05],
        [171.07, 7.1],
        [171.07, 7.12]
      ],
      [
        [162.97, 5.32],
        [162.97, 5.26],
        [162.9, 5.3],
        [162.93, 5.33],
        [162.97, 5.32]
      ],
      [
        [158.29, 6.81],
        [158.25, 6.77],
        [158.18, 6.79],
        [158.15, 6.88],
        [158.11, 6.9],
        [158.11, 6.93],
        [158.18, 6.97],
        [158.29, 6.95],
        [158.33, 6.88],
        [158.29, 6.84],
        [158.29, 6.81]
      ],
      [
        [151.63, 7.33],
        [151.59, 7.35],
        [151.59, 7.38],
        [151.63, 7.38],
        [151.63, 7.33]
      ],
      [
        [151.88, 7.42],
        [151.85, 7.42],
        [151.85, 7.45],
        [151.88, 7.45],
        [151.88, 7.42]
      ],
      [
        [138.13, 9.5],
        [138.13, 9.57],
        [138.16, 9.59],
        [138.2, 9.54],
        [138.16, 9.5],
        [138.13, 9.5]
      ],
      [
        [166.89, -0.52],
        [166.93, -0.5],
        [166.97, -0.52],
        [166.97, -0.55],
        [166.93, -0.55],
        [166.89, -0.55],
        [166.89, -0.53],
        [166.89, -0.52]
      ],
      [
        [134.56, 7.36],
        [134.53, 7.35],
        [134.49, 7.43],
        [134.49, 7.52],
        [134.53, 7.59],
        [134.6, 7.61],
        [134.6, 7.49],
        [134.56, 7.43],
        [134.56, 7.36]
      ],
      [
        [-171.47, -14.06],
        [-171.76, -14.06],
        [-171.9, -14.01],
        [-171.94, -14.01],
        [-172.04, -13.92],
        [-172.08, -13.87],
        [-172.01, -13.83],
        [-171.86, -13.82],
        [-171.61, -13.89],
        [-171.58, -13.96],
        [-171.54, -13.96],
        [-171.47, -13.99],
        [-171.47, -14.06]
      ],
      [
        [-172.37, -13.47],
        [-172.22, -13.57],
        [-172.19, -13.69],
        [-172.26, -13.82],
        [-172.33, -13.78],
        [-172.51, -13.82],
        [-172.55, -13.8],
        [-172.76, -13.59],
        [-172.8, -13.52],
        [-172.69, -13.54],
        [-172.51, -13.49],
        [-172.37, -13.47]
      ],
      [
        [103.56, 1.19],
        [103.67, 1.42],
        [103.72, 1.46],
        [103.86, 1.47],
        [104, 1.42],
        [104.08, 1.43],
        [104.08, 1.36],
        [104.13, 1.27]
      ],
      [
        [-174.92, -21.32],
        [-174.92, -21.46],
        [-175, -21.39],
        [-175, -21.35],
        [-174.92, -21.32]
      ],
      [
        [-175.18, -21.18],
        [-175.14, -21.14],
        [-175.1, -21.18],
        [-175.18, -21.26],
        [-175.21, -21.23],
        [-175.36, -21.16],
        [-175.32, -21.13],
        [-175.25, -21.13],
        [-175.18, -21.18]
      ],
      [
        [-173.99, -18.64],
        [-174.02, -18.71],
        [-174.1, -18.64],
        [-174.02, -18.57],
        [-173.95, -18.59],
        [-173.95, -18.63],
        [-173.99, -18.64]
      ],
      [
        [178.31, -8.03],
        [178.38, -7.93],
        [178.45, -7.97],
        [178.38, -8.09],
        [178.31, -8.03]
      ],
      [
        [178.67, -7.46],
        [178.7, -7.48],
        [178.67, -7.5],
        [178.67, -7.46]
      ],
      [
        [179.14, -8.42],
        [179.17, -8.43],
        [179.21, -8.52],
        [179.1, -8.59],
        [179.1, -8.63],
        [179.06, -8.64],
        [179.06, -8.59],
        [179.03, -8.52],
        [179.1, -8.43],
        [179.14, -8.42]
      ],
      [
        [179.86, -9.35],
        [179.86, -9.37],
        [179.89, -9.39],
        [179.86, -9.44],
        [179.86, -9.42],
        [179.82, -9.37],
        [179.82, -9.35],
        [179.86, -9.35]
      ],
      [
        [176.98, -12.46],
        [177.16, -12.48],
        [177.16, -12.53],
        [177.01, -12.51],
        [176.98, -12.46]
      ],
      [
        [177.16, -7.25],
        [177.12, -7.18],
        [177.16, -7.2],
        [177.16, -7.25]
      ],
      [
        [176.08, -5.64],
        [176.11, -5.66],
        [176.15, -5.71],
        [176.11, -5.67],
        [176.04, -5.64],
        [176.08, -5.64]
      ],
      [
        [-61.73, 17.04],
        [-61.76, 16.98],
        [-61.87, 17],
        [-61.91, 17.05],
        [-61.91, 17.09],
        [-61.84, 17.16],
        [-61.69, 17.09],
        [-61.69, 17.05],
        [-61.73, 17.04]
      ],
      [
        [-61.76, 17.57],
        [-61.76, 17.54],
        [-61.87, 17.59],
        [-61.87, 17.71],
        [-61.76, 17.66],
        [-61.76, 17.57]
      ],
      [
        [-59.5, 13.08],
        [-59.53, 13.06],
        [-59.64, 13.09],
        [-59.68, 13.15],
        [-59.68, 13.3],
        [-59.6, 13.3],
        [-59.46, 13.15],
        [-59.5, 13.08]
      ],
      [
        [-61.3, 15.25],
        [-61.4, 15.21],
        [-61.44, 15.39],
        [-61.51, 15.52],
        [-61.48, 15.59],
        [-61.48, 15.63],
        [-61.33, 15.58],
        [-61.3, 15.52],
        [-61.26, 15.37],
        [-61.3, 15.25]
      ],
      [
        [-61.73, 12],
        [-61.76, 12.04],
        [-61.76, 12.1],
        [-61.69, 12.23],
        [-61.62, 12.21],
        [-61.66, 12.05],
        [-61.73, 12]
      ],
      [
        [-62.56, 17.1],
        [-62.59, 17.09],
        [-62.63, 17.12],
        [-62.63, 17.19],
        [-62.59, 17.19],
        [-62.56, 17.16],
        [-62.56, 17.1]
      ],
      [
        [-62.66, 17.23],
        [-62.74, 17.28],
        [-62.81, 17.3],
        [-62.84, 17.33],
        [-62.84, 17.38],
        [-62.81, 17.4],
        [-62.74, 17.35],
        [-62.7, 17.28],
        [-62.66, 17.26],
        [-62.66, 17.23]
      ],
      [
        [-60.9, 13.81],
        [-60.97, 13.7],
        [-61.08, 13.77],
        [-61.08, 13.91],
        [-61.01, 14],
        [-60.97, 14.07],
        [-60.94, 14.08],
        [-60.9, 14],
        [-60.9, 13.81]
      ],
      [
        [-61.19, 13.15],
        [-61.22, 13.13],
        [-61.3, 13.2],
        [-61.3, 13.29],
        [-61.22, 13.32],
        [-61.19, 13.35],
        [-61.15, 13.35],
        [-61.15, 13.2],
        [-61.19, 13.15]
      ],
      [
        [1.42, 42.59],
        [1.49, 42.63],
        [1.57, 42.63],
        [1.71, 42.57],
        [1.71, 42.52],
        [1.67, 42.49],
        [1.46, 42.42],
        [1.42, 42.44],
        [1.42, 42.49],
        [1.39, 42.52],
        [1.42, 42.59]
      ],
      [
        [9.61, 47.06],
        [9.56, 47.05]
      ],
      [
        [9.49, 47.18],
        [9.53, 47.27],
        [9.58, 47.21]
      ],
      [
        [14.56, 35.84],
        [14.53, 35.8],
        [14.42, 35.82],
        [14.35, 35.86],
        [14.35, 35.98],
        [14.53, 35.87],
        [14.56, 35.84]
      ],
      [
        [7.43, 43.74],
        [7.36, 43.72],
        [7.36, 43.75],
        [7.43, 43.74]
      ],
      [
        [12.37, 43.93],
        [12.44, 43.98],
        [12.51, 43.95],
        [12.48, 43.89],
        [12.4, 43.89],
        [12.37, 43.93]
      ],
      [
        [-157.42, 2.02],
        [-157.39, 1.99],
        [-157.32, 1.97],
        [-157.31, 1.97],
        [-157.31, 1.96],
        [-157.32, 1.95],
        [-157.32, 1.95],
        [-157.34, 1.94],
        [-157.34, 1.93],
        [-157.34, 1.91],
        [-157.35, 1.86],
        [-157.33, 1.84],
        [-157.29, 1.82],
        [-157.25, 1.8],
        [-157.24, 1.78],
        [-157.22, 1.77],
        [-157.21, 1.77],
        [-157.19, 1.76],
        [-157.18, 1.75],
        [-157.17, 1.73],
        [-157.18, 1.72],
        [-157.19, 1.72],
        [-157.2, 1.72],
        [-157.21, 1.71],
        [-157.22, 1.71],
        [-157.24, 1.71],
        [-157.25, 1.71],
        [-157.25, 1.72],
        [-157.26, 1.73],
        [-157.27, 1.73],
        [-157.28, 1.75],
        [-157.29, 1.75],
        [-157.31, 1.75],
        [-157.41, 1.78],
        [-157.45, 1.8],
        [-157.48, 1.83],
        [-157.51, 1.85],
        [-157.53, 1.86],
        [-157.54, 1.86],
        [-157.55, 1.86],
        [-157.57, 1.86],
        [-157.58, 1.88],
        [-157.58, 1.91],
        [-157.57, 1.91],
        [-157.54, 1.93],
        [-157.53, 1.93],
        [-157.52, 1.93],
        [-157.52, 1.92],
        [-157.52, 1.92],
        [-157.53, 1.92],
        [-157.55, 1.9],
        [-157.55, 1.88],
        [-157.54, 1.87],
        [-157.53, 1.86],
        [-157.51, 1.87],
        [-157.5, 1.87],
        [-157.5, 1.86],
        [-157.49, 1.85],
        [-157.48, 1.85],
        [-157.45, 1.85],
        [-157.43, 1.84],
        [-157.43, 1.84],
        [-157.44, 1.85],
        [-157.45, 1.86],
        [-157.46, 1.86],
        [-157.47, 1.87],
        [-157.48, 1.88],
        [-157.46, 1.88],
        [-157.45, 1.88],
        [-157.45, 1.88],
        [-157.45, 1.9],
        [-157.44, 1.89],
        [-157.43, 1.88],
        [-157.43, 1.87],
        [-157.42, 1.86],
        [-157.41, 1.86],
        [-157.41, 1.87],
        [-157.41, 1.88],
        [-157.42, 1.9],
        [-157.43, 1.91],
        [-157.42, 1.92],
        [-157.42, 1.93],
        [-157.41, 1.92],
        [-157.4, 1.92],
        [-157.41, 1.94],
        [-157.39, 1.94],
        [-157.39, 1.93],
        [-157.4, 1.92],
        [-157.39, 1.91],
        [-157.38, 1.9],
        [-157.38, 1.91],
        [-157.37, 1.91],
        [-157.36, 1.92],
        [-157.36, 1.92],
        [-157.35, 1.93],
        [-157.35, 1.94],
        [-157.36, 1.95],
        [-157.36, 1.95],
        [-157.38, 1.96],
        [-157.41, 1.97],
        [-157.45, 1.99],
        [-157.45, 2],
        [-157.46, 2],
        [-157.47, 2.01],
        [-157.48, 2.02],
        [-157.48, 2.01],
        [-157.49, 2],
        [-157.5, 2],
        [-157.51, 2.01],
        [-157.51, 2.02],
        [-157.5, 2.03],
        [-157.47, 2.03],
        [-157.42, 2.02]
      ],
      [
        [6.66, 0.42],
        [6.77, 0.28],
        [6.66, 0.12],
        [6.53, 0.02],
        [6.46, 0.21],
        [6.49, 0.31],
        [6.66, 0.42]
      ]
    ],
    bbox: [-180, -55.61183, 180, 83.64513]
  };

  const handleZoomIn = () => {
    if (position.zoom >= 4) return;
    setPosition(pos => ({ ...pos, zoom: pos.zoom * 2 }));
  };

  const handleZoomOut = () => {
    if (position.zoom <= 1) return;
    setPosition(pos => ({ ...pos, zoom: pos.zoom / 2 }));
  };

  const handleMoveEnd = (position: React.SetStateAction<{ coordinates: number[]; zoom: number; }>) => {
    setPosition(position);
  };

  return (

    <div>
      <div className="controls">
        <ButtonGroup>
          <Button variant='' onClick={handleZoomIn}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </Button>
          <Button variant='' className='me-2' onClick={handleZoomOut}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </Button>
        </ButtonGroup>
      </div>
      <ComposableMap className='wd-100p' data-tip="" projectionConfig={{ scale: 200 }}>
        <ZoomableGroup zoom={position.zoom} center={position.coordinates} onMoveEnd={handleMoveEnd}>
          <Geographies geography={geoUrl}>
            {({ geographies }:any) =>
              geographies.map((geo: { rsmKey: React.Key | null | undefined; properties: { name: any; }; }) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => {
                    setTooltipContent(`${geo.properties.name}`);
                  }}
                  onMouseLeave={() => {
                    setTooltipContent('');
                  }}
                  style={{
                    default: {
                      fill: '#D6D6DA',
                      outline: 'none'
                    },
                    hover: {
                      fill: '#6c5ffc',
                      outline: 'none'
                    },
                    pressed: {
                      fill: '#E42',
                      outline: 'none'
                    }
                  }}
                />
              ))
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
}
export function WorldMap() {
  const [content, setContent] = useState('');
  return (
    <div>
      <MapData setTooltipContent={setContent} />
      <ReactTooltip>{content}</ReactTooltip>
    </div>
  );
}
