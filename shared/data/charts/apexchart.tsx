
import { ApexOptions } from 'apexcharts';
import dynamic from 'next/dynamic';
import dayjs from "dayjs"
import React, { Component } from 'react';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });
const ReactApexCharts = dynamic(() => import('react-apexcharts'), { ssr: false });
const ReactCandleStickSynced = dynamic(() => import('react-apexcharts'), { ssr: false });
const ReactCandleStick = dynamic(() => import('react-apexcharts'), { ssr: false });
const ReactRadarChat = dynamic(() => import('react-apexcharts'), { ssr: false });
const ReactRadarChatMulti = dynamic(() => import('react-apexcharts'), { ssr: false });
const ReactRadarChartPoygon = dynamic(() => import('react-apexcharts'), { ssr: false });
const ReactPolarAreaChart = dynamic(() => import('react-apexcharts'), { ssr: false });
const ReactPolarAreaMonoChrome = dynamic(() => import('react-apexcharts'), { ssr: false });
const ReactPiechart = dynamic(() => import('react-apexcharts'), { ssr: false });
const ReactMultipleRadilBar = dynamic(() => import('react-apexcharts'), { ssr: false });
const ReactCustomAngleCircle = dynamic(() => import('react-apexcharts'), { ssr: false });
const ReactGradient = dynamic(() => import('react-apexcharts'), { ssr: false });
const ReactStrokedCircle = dynamic(() => import('react-apexcharts'), { ssr: false });
const ReactCircleWithImage = dynamic(() => import('react-apexcharts'), { ssr: false });
const ReactSemiCircle = dynamic(() => import('react-apexcharts'), { ssr: false });
const ReactSimplePie = dynamic(() => import('react-apexcharts'), { ssr: false });
const ReactSimpleDonut = dynamic(() => import('react-apexcharts'), { ssr: false });
const ReactGradientDonut = dynamic(() => import('react-apexcharts'), { ssr: false });
const ReactDonutUpdate = dynamic(() => import('react-apexcharts'), { ssr: false });
const ReactMonoChromePie = dynamic(() => import('react-apexcharts'), { ssr: false });
const ReactDonutChatrsWithPatterns = dynamic(() => import('react-apexcharts'), { ssr: false });
const ReactImageFilledChart = dynamic(() => import('react-apexcharts'), { ssr: false });
const ReactCandleLine = dynamic(() => import('react-apexcharts'), { ssr: false });
import { Button } from 'react-bootstrap';
interface spark3 {
	options?: ApexOptions,
	width?: string | number,
	height?: string | number,
	series?: ApexOptions['series'],
	[key: string]: any
	label?: XAxisAnnotations
	endingShape?: string
}
const chart = dynamic(() => import('react-apexcharts'), { ssr: false });
export class Linearea  extends Component<{}, spark3> {
  constructor(props: {}) {
    super(props);
    this.state = {
      series: [{
        name: 'TEAM A',
        type: 'area',
        data: [44, 55, 31, 47, 31, 43, 26, 41, 31, 47, 33]
      }, {
        name: 'TEAM B',
        type: 'line',
        data: [55, 69, 45, 61, 43, 54, 37, 52, 44, 61, 43]
      }],
      options: {
        chart: {
          height: 340,
          type: 'line',
          events: {
            mounted: (chart: { windowResizeHandler: () => void; }) => {
              chart.windowResizeHandler();
            }
          },
        },
        stroke: {
          curve: 'smooth'
        },
        colors: ["#845adf", "#23b7e5"],
        grid: {
          borderColor: '#f2f5f7',
        },
        fill: {
          type: 'solid',
          opacity: [0.35, 1],
        },
        labels: ['Dec 01', 'Dec 02', 'Dec 03', 'Dec 04', 'Dec 05', 'Dec 06', 'Dec 07', 'Dec 08', 'Dec 09 ', 'Dec 10', 'Dec 11'],
        markers: {
          size: 0
        },
        xaxis: {
          labels: {
            show: true,
            style: {
              colors: "#8c9097",
              fontSize: '11px',
              fontWeight: 600,
              cssClass: 'apexcharts-xaxis-label',
            },
          }
        },
        yaxis: [
          {
            title: {
              text: 'Series A',
              style: {
                color: "#8c9097",
              }
            },
            labels: {
              show: true,
              style: {
                colors: "#8c9097",
                fontSize: '11px',
                fontWeight: 600,
                cssClass: 'apexcharts-yaxis-label',
              },
            }
          },
          {
            opposite: true,
            title: {
              text: 'Series B',
              style: {
                color: "#8c9097",
              }
            },
            labels: {
              show: true,
              style: {
                colors: "#8c9097",
                fontSize: '11px',
                fontWeight: 600,
                cssClass: 'apexcharts-yaxis-label',
              },
            }
          },
        ],
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
      <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={320} width={"100%"}/>

    );
  }
}

export class ApexChart extends Component<{}, spark3> {
  constructor(props: {}) {
    super(props);

    this.state = {

      series: [44, 55, 41, 17],
      options: {
        chart: {
          type: 'donut',
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 100
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      },

    };
  }
  render() {
    return (
      <ReactApexChart options={this.state.options} series={this.state.series} type="donut"  width={"100%"}/>
    )
  }
}
export class ApexCharts extends Component<{}, spark3> {
  constructor(props: {}) {
    super(props);

    this.state = {

      series: [{
        name: 'candle',
        data: [
          {
            x: new Date(1538778600000),
            y: [6629.81, 6650.5, 6623.04, 6633.33]
          },
          {
            x: new Date(1538780400000),
            y: [6632.01, 6643.59, 6620, 6630.11]
          },
          {
            x: new Date(1538782200000),
            y: [6630.71, 6648.95, 6623.34, 6635.65]
          },
          {
            x: new Date(1538784000000),
            y: [6635.65, 6651, 6629.67, 6638.24]
          },
          {
            x: new Date(1538785800000),
            y: [6638.24, 6640, 6620, 6624.47]
          },
          {
            x: new Date(1538787600000),
            y: [6624.53, 6636.03, 6621.68, 6624.31]
          },
          {
            x: new Date(1538789400000),
            y: [6624.61, 6632.2, 6617, 6626.02]
          },
          {
            x: new Date(1538791200000),
            y: [6627, 6627.62, 6584.22, 6603.02]
          },
          {
            x: new Date(1538793000000),
            y: [6605, 6608.03, 6598.95, 6604.01]
          },
          {
            x: new Date(1538794800000),
            y: [6604.5, 6614.4, 6602.26, 6608.02]
          },
          {
            x: new Date(1538796600000),
            y: [6608.02, 6610.68, 6601.99, 6608.91]
          },
          {
            x: new Date(1538798400000),
            y: [6608.91, 6618.99, 6608.01, 6612]
          },
          {
            x: new Date(1538800200000),
            y: [6612, 6615.13, 6605.09, 6612]
          },
          {
            x: new Date(1538802000000),
            y: [6612, 6624.12, 6608.43, 6622.95]
          },
          {
            x: new Date(1538803800000),
            y: [6623.91, 6623.91, 6615, 6615.67]
          },
          {
            x: new Date(1538805600000),
            y: [6618.69, 6618.74, 6610, 6610.4]
          },
          {
            x: new Date(1538807400000),
            y: [6611, 6622.78, 6610.4, 6614.9]
          },
          {
            x: new Date(1538809200000),
            y: [6614.9, 6626.2, 6613.33, 6623.45]
          },
          {
            x: new Date(1538811000000),
            y: [6623.48, 6627, 6618.38, 6620.35]
          },
          {
            x: new Date(1538812800000),
            y: [6619.43, 6620.35, 6610.05, 6615.53]
          },
          {
            x: new Date(1538814600000),
            y: [6615.53, 6617.93, 6610, 6615.19]
          },
          {
            x: new Date(1538816400000),
            y: [6615.19, 6621.6, 6608.2, 6620]
          },
          {
            x: new Date(1538818200000),
            y: [6619.54, 6625.17, 6614.15, 6620]
          },
          {
            x: new Date(1538820000000),
            y: [6620.33, 6634.15, 6617.24, 6624.61]
          },
          {
            x: new Date(1538821800000),
            y: [6625.95, 6626, 6611.66, 6617.58]
          },
          {
            x: new Date(1538823600000),
            y: [6619, 6625.97, 6595.27, 6598.86]
          },
          {
            x: new Date(1538825400000),
            y: [6598.86, 6598.88, 6570, 6587.16]
          },
          {
            x: new Date(1538827200000),
            y: [6588.86, 6600, 6580, 6593.4]
          },
          {
            x: new Date(1538829000000),
            y: [6593.99, 6598.89, 6585, 6587.81]
          },
          {
            x: new Date(1538830800000),
            y: [6587.81, 6592.73, 6567.14, 6578]
          },
          {
            x: new Date(1538832600000),
            y: [6578.35, 6581.72, 6567.39, 6579]
          },
          {
            x: new Date(1538834400000),
            y: [6579.38, 6580.92, 6566.77, 6575.96]
          },
          {
            x: new Date(1538836200000),
            y: [6575.96, 6589, 6571.77, 6588.92]
          },
          {
            x: new Date(1538838000000),
            y: [6588.92, 6594, 6577.55, 6589.22]
          },
          {
            x: new Date(1538839800000),
            y: [6589.3, 6598.89, 6589.1, 6596.08]
          },
          {
            x: new Date(1538841600000),
            y: [6597.5, 6600, 6588.39, 6596.25]
          },
          {
            x: new Date(1538843400000),
            y: [6598.03, 6600, 6588.73, 6595.97]
          },
          {
            x: new Date(1538845200000),
            y: [6595.97, 6602.01, 6588.17, 6602]
          },
          {
            x: new Date(1538847000000),
            y: [6602, 6607, 6596.51, 6599.95]
          },
          {
            x: new Date(1538848800000),
            y: [6600.63, 6601.21, 6590.39, 6591.02]
          },
          {
            x: new Date(1538850600000),
            y: [6591.02, 6603.08, 6591, 6591]
          },
          {
            x: new Date(1538852400000),
            y: [6591, 6601.32, 6585, 6592]
          },
          {
            x: new Date(1538854200000),
            y: [6593.13, 6596.01, 6590, 6593.34]
          },
          {
            x: new Date(1538856000000),
            y: [6593.34, 6604.76, 6582.63, 6593.86]
          },
          {
            x: new Date(1538857800000),
            y: [6593.86, 6604.28, 6586.57, 6600.01]
          },
          {
            x: new Date(1538859600000),
            y: [6601.81, 6603.21, 6592.78, 6596.25]
          },
          {
            x: new Date(1538861400000),
            y: [6596.25, 6604.2, 6590, 6602.99]
          },
          {
            x: new Date(1538863200000),
            y: [6602.99, 6606, 6584.99, 6587.81]
          },
          {
            x: new Date(1538865000000),
            y: [6587.81, 6595, 6583.27, 6591.96]
          },
          {
            x: new Date(1538866800000),
            y: [6591.97, 6596.07, 6585, 6588.39]
          },
          {
            x: new Date(1538868600000),
            y: [6587.6, 6598.21, 6587.6, 6594.27]
          },
          {
            x: new Date(1538870400000),
            y: [6596.44, 6601, 6590, 6596.55]
          },
          {
            x: new Date(1538872200000),
            y: [6598.91, 6605, 6596.61, 6600.02]
          },
          {
            x: new Date(1538874000000),
            y: [6600.55, 6605, 6589.14, 6593.01]
          },
          {
            x: new Date(1538875800000),
            y: [6593.15, 6605, 6592, 6603.06]
          },
          {
            x: new Date(1538877600000),
            y: [6603.07, 6604.5, 6599.09, 6603.89]
          },
          {
            x: new Date(1538879400000),
            y: [6604.44, 6604.44, 6600, 6603.5]
          },
          {
            x: new Date(1538881200000),
            y: [6603.5, 6603.99, 6597.5, 6603.86]
          },
          {
            x: new Date(1538883000000),
            y: [6603.85, 6605, 6600, 6604.07]
          },
          {
            x: new Date(1538884800000),
            y: [6604.98, 6606, 6604.07, 6606]
          },
        ]
      }],
      options: {
        chart: {
          height: 350,
          type: 'candlestick',
        },
        title: {
          text: 'CandleStick Chart - Category X-axis',
          align: 'left',
          style: {
            fontSize: '13px',
            fontWeight: 'bold',
            color: '#8c9097'
          },
        },
        annotations: {
          xaxis: [
            {
              x: 'Oct 06 14:00',
              borderColor: '#5b67c7',
              label: {
                borderColor: '#5b67c7',
                style: {
                  fontSize: '12px',
                  color: '#fff',
                  background: '#5b67c7'
                },
                orientation: 'horizontal',
                offsetY: 7,
                text: 'Annotation Test'
              }
            },

          ]
        },
        grid: {
          borderColor: '#f2f5f7',
        },
        tooltip: {
          enabled: true,
        },
        plotOptions: {
          candlestick: {
            colors: {
              upward: '#845adf',
              downward: '#23b7e5'
            }
          }
        },
        xaxis: {
          type: 'category',
          labels: {
            formatter: function (val:any) {
              return dayjs(val).format('MMM DD HH:mm')
            },
            style: {
              colors: "#8c9097",
              fontSize: '11px',
              fontWeight: 600,
              cssClass: 'apexcharts-xaxis-label',
            },
          }
        },
        yaxis: {
          tooltip: {
            enabled: true
          },
          labels: {
            show: true,
            style: {
              colors: "#8c9097",
              fontSize: '11px',
              fontWeight: 600,
              cssClass: 'apexcharts-yaxis-label',
            },
          }
        }
      },

    };
  }

  render() {
    return (

      <div id="chart">
        <ReactApexCharts options={this.state.options} series={this.state.series} type="candlestick" height={350} width={"100%"}/>
      </div>

    );
  }
}


var seriesData = [{
  x: new Date(2016, 0o1, 0o1),
  y: [51.98, 56.29, 51.59, 53.85]
},
{
  x: new Date(2016, 0o2, 0o1),
  y: [53.66, 54.99, 51.35, 52.95]
},
{
  x: new Date(2016, 0o3, 0o1),
  y: [52.96, 53.78, 51.54, 52.48]
},
{
  x: new Date(2016, 0o4, 0o1),
  y: [52.54, 52.79, 47.88, 49.24]
},
{
  x: new Date(2016, 0o5, 0o1),
  y: [49.10, 52.86, 47.70, 52.78]
},
{
  x: new Date(2016, 0o6, 0o1),
  y: [52.83, 53.48, 50.32, 52.29]
},
{
  x: new Date(2016, 0o7, 0o1),
  y: [52.20, 54.48, 51.64, 52.58]
},
{
  x: new Date(2016, 8, 0o1),
  y: [52.76, 57.35, 52.15, 57.03]
},
{
  x: new Date(2016, 9, 0o1),
  y: [57.04, 58.15, 48.88, 56.19]
},
{
  x: new Date(2016, 10, 0o1),
  y: [56.09, 58.85, 55.48, 58.79]
},
{
  x: new Date(2016, 11, 0o1),
  y: [58.78, 59.65, 58.23, 59.05]
},
{
  x: new Date(2017, 0o0, 0o1),
  y: [59.37, 61.11, 59.35, 60.34]
},
{
  x: new Date(2017, 0o1, 0o1),
  y: [60.40, 60.52, 56.71, 56.93]
},
{
  x: new Date(2017, 0o2, 0o1),
  y: [57.02, 59.71, 56.04, 56.82]
},
{
  x: new Date(2017, 0o3, 0o1),
  y: [56.97, 59.62, 54.77, 59.30]
},
{
  x: new Date(2017, 0o4, 0o1),
  y: [59.11, 62.29, 59.10, 59.85]
},
{
  x: new Date(2017, 0o5, 0o1),
  y: [59.97, 60.11, 55.66, 58.42]
},
{
  x: new Date(2017, 0o6, 0o1),
  y: [58.34, 60.93, 56.75, 57.42]
},
{
  x: new Date(2017, 0o7, 0o1),
  y: [57.76, 58.08, 51.18, 54.71]
},
{
  x: new Date(2017, 8, 0o1),
  y: [54.80, 61.42, 53.18, 57.35]
},
{
  x: new Date(2017, 9, 0o1),
  y: [57.56, 63.09, 57.00, 62.99]
},
{
  x: new Date(2017, 10, 0o1),
  y: [62.89, 63.42, 59.72, 61.76]
},
{
  x: new Date(2017, 11, 0o1),
  y: [61.71, 64.15, 61.29, 63.04]
}
]

var seriesDataLinear = [{
  x: new Date(2016, 0o1, 0o1),
  y: 3.85
},
{
  x: new Date(2016, 0o2, 0o1),
  y: 2.95
},
{
  x: new Date(2016, 0o3, 0o1),
  y: -12.48
},
{
  x: new Date(2016, 0o4, 0o1),
  y: 19.24
},
{
  x: new Date(2016, 0o5, 0o1),
  y: 12.78
},
{
  x: new Date(2016, 0o6, 0o1),
  y: 22.29
},
{
  x: new Date(2016, 0o7, 0o1),
  y: -12.58
},
{
  x: new Date(2016, 8, 0o1),
  y: -17.03
},
{
  x: new Date(2016, 9, 0o1),
  y: -19.19
},
{
  x: new Date(2016, 10, 0o1),
  y: -28.79
},
{
  x: new Date(2016, 11, 0o1),
  y: -39.05
},
{
  x: new Date(2017, 0o0, 0o1),
  y: 20.34
},
{
  x: new Date(2017, 0o1, 0o1),
  y: 36.93
},
{
  x: new Date(2017, 0o2, 0o1),
  y: 36.82
},
{
  x: new Date(2017, 0o3, 0o1),
  y: 29.30
},
{
  x: new Date(2017, 0o4, 0o1),
  y: 39.85
},
{
  x: new Date(2017, 0o5, 0o1),
  y: 28.42
},
{
  x: new Date(2017, 0o6, 0o1),
  y: 37.42
},
{
  x: new Date(2017, 0o7, 0o1),
  y: 24.71
},
{
  x: new Date(2017, 8, 0o1),
  y: 37.35
},
{
  x: new Date(2017, 9, 0o1),
  y: 32.99
},
{
  x: new Date(2017, 10, 0o1),
  y: 31.76
},
{
  x: new Date(2017, 11, 0o1),
  y: 43.04
}
]

export class CandleStickSynced extends Component<{}, spark3> {
  constructor(props: {}) {
    super(props);

    this.state = {

      series: [{
        data: seriesData
      }],
      options: {
        chart: {
          type: 'candlestick',
          height: 215,
          id: 'candles',
          toolbar: {
            autoSelected: 'pan',
            show: false
          },
          zoom: {
            enabled: false
          },
        },
        grid: {
          borderColor: '#f2f5f7',
        },
        plotOptions: {
          candlestick: {
            colors: {
              upward: '#845adf',
              downward: '#23b7e5'
            }
          }
        },
        xaxis: {
          type: 'datetime',
          labels: {
            show: true,
            style: {
              colors: "#8c9097",
              fontSize: '11px',
              fontWeight: 600,
              cssClass: 'apexcharts-xaxis-label',
            },
          }
        },
        yaxis: {
          labels: {
            show: true,
            style: {
              colors: "#8c9097",
              fontSize: '11px',
              fontWeight: 600,
              cssClass: 'apexcharts-yaxis-label',
            },
          }
        },
      },
      seriesBar: [{
        name: 'volume',
        data: seriesDataLinear
      }],
      optionsBar: {
        chart: {
          height: 160,
          type: 'bar',
          brush: {
            enabled: true,
            target: 'candles'
          },
          selection: {
            enabled: true,
            xaxis: {
              min: new Date('20 Jan 2017').getTime(),
              max: new Date('10 Dec 2017').getTime()
            },
            fill: {
              color: '#ccc',
              opacity: 0.4
            },
            stroke: {
              color: '#0D47A1',
            }
          },
        },
        dataLabels: {
          enabled: false
        },
        plotOptions: {
          bar: {
            columnWidth: '80%',
            colors: {
              ranges: [{
                from: -1000,
                to: 0,
                color: '#F15B46'
              }, {
                from: 1,
                to: 10000,
                color: '#FEB019'
              }],

            },
          }
        },
        stroke: {
          width: 0
        },
        xaxis: {
          type: 'datetime',
          axisBorder: {
            offsetX: 13
          }
        },
        yaxis: {
          labels: {
            show: false
          }
        }
      },

    };
  }

  render() {
    return (

      <div className="chart-box">
        <div id="chart-candlestick">
          <ReactCandleStickSynced options={this.state.options} series={this.state.series} type="candlestick" height={175} width={"100%"} />
        </div>
        <div id="chart-bar">
          <ReactCandleStickSynced options={this.state.optionsBar} series={this.state.seriesBar} type="bar" height={160} width={"100%"}/>
        </div>
      </div>

    );
  }
}

export class CandleStick extends Component<{}, spark3> {
  constructor(props: {}) {
    super(props);

    this.state = {

      series: [{
        data: [{
          x: new Date(1538778600000),
          y: [6629.81, 6650.5, 6623.04, 6633.33]
        },
        {
          x: new Date(1538780400000),
          y: [6632.01, 6643.59, 6620, 6630.11]
        },
        {
          x: new Date(1538782200000),
          y: [6630.71, 6648.95, 6623.34, 6635.65]
        },
        {
          x: new Date(1538784000000),
          y: [6635.65, 6651, 6629.67, 6638.24]
        },
        {
          x: new Date(1538785800000),
          y: [6638.24, 6640, 6620, 6624.47]
        },
        {
          x: new Date(1538787600000),
          y: [6624.53, 6636.03, 6621.68, 6624.31]
        },
        {
          x: new Date(1538789400000),
          y: [6624.61, 6632.2, 6617, 6626.02]
        },
        {
          x: new Date(1538791200000),
          y: [6627, 6627.62, 6584.22, 6603.02]
        },
        {
          x: new Date(1538793000000),
          y: [6605, 6608.03, 6598.95, 6604.01]
        },
        {
          x: new Date(1538794800000),
          y: [6604.5, 6614.4, 6602.26, 6608.02]
        },
        {
          x: new Date(1538796600000),
          y: [6608.02, 6610.68, 6601.99, 6608.91]
        },
        {
          x: new Date(1538798400000),
          y: [6608.91, 6618.99, 6608.01, 6612]
        },
        {
          x: new Date(1538800200000),
          y: [6612, 6615.13, 6605.09, 6612]
        },
        {
          x: new Date(1538802000000),
          y: [6612, 6624.12, 6608.43, 6622.95]
        },
        {
          x: new Date(1538803800000),
          y: [6623.91, 6623.91, 6615, 6615.67]
        },
        {
          x: new Date(1538805600000),
          y: [6618.69, 6618.74, 6610, 6610.4]
        },
        {
          x: new Date(1538807400000),
          y: [6611, 6622.78, 6610.4, 6614.9]
        },
        {
          x: new Date(1538809200000),
          y: [6614.9, 6626.2, 6613.33, 6623.45]
        },
        {
          x: new Date(1538811000000),
          y: [6623.48, 6627, 6618.38, 6620.35]
        },
        {
          x: new Date(1538812800000),
          y: [6619.43, 6620.35, 6610.05, 6615.53]
        },
        {
          x: new Date(1538814600000),
          y: [6615.53, 6617.93, 6610, 6615.19]
        },
        {
          x: new Date(1538816400000),
          y: [6615.19, 6621.6, 6608.2, 6620]
        },
        {
          x: new Date(1538818200000),
          y: [6619.54, 6625.17, 6614.15, 6620]
        },
        {
          x: new Date(1538820000000),
          y: [6620.33, 6634.15, 6617.24, 6624.61]
        },
        {
          x: new Date(1538821800000),
          y: [6625.95, 6626, 6611.66, 6617.58]
        },
        {
          x: new Date(1538823600000),
          y: [6619, 6625.97, 6595.27, 6598.86]
        },
        {
          x: new Date(1538825400000),
          y: [6598.86, 6598.88, 6570, 6587.16]
        },
        {
          x: new Date(1538827200000),
          y: [6588.86, 6600, 6580, 6593.4]
        },
        {
          x: new Date(1538829000000),
          y: [6593.99, 6598.89, 6585, 6587.81]
        },
        {
          x: new Date(1538830800000),
          y: [6587.81, 6592.73, 6567.14, 6578]
        },
        {
          x: new Date(1538832600000),
          y: [6578.35, 6581.72, 6567.39, 6579]
        },
        {
          x: new Date(1538834400000),
          y: [6579.38, 6580.92, 6566.77, 6575.96]
        },
        {
          x: new Date(1538836200000),
          y: [6575.96, 6589, 6571.77, 6588.92]
        },
        {
          x: new Date(1538838000000),
          y: [6588.92, 6594, 6577.55, 6589.22]
        },
        {
          x: new Date(1538839800000),
          y: [6589.3, 6598.89, 6589.1, 6596.08]
        },
        {
          x: new Date(1538841600000),
          y: [6597.5, 6600, 6588.39, 6596.25]
        },
        {
          x: new Date(1538843400000),
          y: [6598.03, 6600, 6588.73, 6595.97]
        },
        {
          x: new Date(1538845200000),
          y: [6595.97, 6602.01, 6588.17, 6602]
        },
        {
          x: new Date(1538847000000),
          y: [6602, 6607, 6596.51, 6599.95]
        },
        {
          x: new Date(1538848800000),
          y: [6600.63, 6601.21, 6590.39, 6591.02]
        },
        {
          x: new Date(1538850600000),
          y: [6591.02, 6603.08, 6591, 6591]
        },
        {
          x: new Date(1538852400000),
          y: [6591, 6601.32, 6585, 6592]
        },
        {
          x: new Date(1538854200000),
          y: [6593.13, 6596.01, 6590, 6593.34]
        },
        {
          x: new Date(1538856000000),
          y: [6593.34, 6604.76, 6582.63, 6593.86]
        },
        {
          x: new Date(1538857800000),
          y: [6593.86, 6604.28, 6586.57, 6600.01]
        },
        {
          x: new Date(1538859600000),
          y: [6601.81, 6603.21, 6592.78, 6596.25]
        },
        {
          x: new Date(1538861400000),
          y: [6596.25, 6604.2, 6590, 6602.99]
        },
        {
          x: new Date(1538863200000),
          y: [6602.99, 6606, 6584.99, 6587.81]
        },
        {
          x: new Date(1538865000000),
          y: [6587.81, 6595, 6583.27, 6591.96]
        },
        {
          x: new Date(1538866800000),
          y: [6591.97, 6596.07, 6585, 6588.39]
        },
        {
          x: new Date(1538868600000),
          y: [6587.6, 6598.21, 6587.6, 6594.27]
        },
        {
          x: new Date(1538870400000),
          y: [6596.44, 6601, 6590, 6596.55]
        },
        {
          x: new Date(1538872200000),
          y: [6598.91, 6605, 6596.61, 6600.02]
        },
        {
          x: new Date(1538874000000),
          y: [6600.55, 6605, 6589.14, 6593.01]
        },
        {
          x: new Date(1538875800000),
          y: [6593.15, 6605, 6592, 6603.06]
        },
        {
          x: new Date(1538877600000),
          y: [6603.07, 6604.5, 6599.09, 6603.89]
        },
        {
          x: new Date(1538879400000),
          y: [6604.44, 6604.44, 6600, 6603.5]
        },
        {
          x: new Date(1538881200000),
          y: [6603.5, 6603.99, 6597.5, 6603.86]
        },
        {
          x: new Date(1538883000000),
          y: [6603.85, 6605, 6600, 6604.07]
        },
        {
          x: new Date(1538884800000),
          y: [6604.98, 6606, 6604.07, 6606]
        },
        ]
      }],
      options: {
        chart: {
          type: 'candlestick',
          height: 350
        },
 
        title: {
          text: 'CandleStick Chart',
          align: 'left',
          style: {
            color: "#8c9097",
            fontSize: '13px',
            fontWeight: 'bold',
          }
        },
        
        plotOptions: {
          candlestick: {
            colors: {
              upward: '#845adf',
              downward: '#23b7e5'
            }
          }
        },
        grid: {
          borderColor: '#f2f5f7',
        },
        xaxis: {
          type: 'datetime',
          labels: {
            show: true,
            style: {
              colors: "#8c9097",
              fontSize: '11px',
              fontWeight: 600,
              cssClass: 'apexcharts-xaxis-label',
            },
          }
        },

        yaxis: {
          tooltip: {
            enabled: true
          },
          labels: {
            show: true,
            style: {
              colors: "#8c9097",
              fontSize: '11px',
              fontWeight: 600,
              cssClass: 'apexcharts-yaxis-label',
            },
          }
        }
      },

    };
  }

  render() {
    return (

      <div id="chart">
        <ReactCandleStick options={this.state.options} series={this.state.series} type="candlestick" height={350} width={"100%"} />
      </div>

    );
  }
}

export class RadarChat extends Component<{}, spark3> {
  constructor(props: {}) {
    super(props);

    this.state = {

      series: [{
        name: 'Series 1',
        data: [80, 50, 30, 40, 100, 20],
      }],
      options: {
        chart: {
          height: 350,
          type: 'radar',
        },
        title: {
          text: 'Basic Radar Chart',
          style:{
             color: '#8c9097'
          },
        },
        colors: ["#845adf"],
        xaxis: {
          categories: ['January', 'February', 'March', 'April', 'May', 'June']
        }
      },

    };
  }

  render() {
    return (

      <div id="chart">
        <ReactRadarChat options={this.state.options} series={this.state.series} type="radar" height={350} width={"100%"}/>
      </div>

    );
  }
}

export class RadarChatMulti extends Component<{}, spark3> {
  constructor(props: {}) {
    super(props);

    this.state = {

      series: [{
        name: 'Series 1',
        data: [80, 50, 30, 40, 100, 20],
      }, {
        name: 'Series 2',
        data: [20, 30, 40, 80, 20, 80],
      }, {
        name: 'Series 3',
        data: [44, 76, 78, 13, 43, 10],
      }],
      options: {
        chart: {
          height: 350,
          type: 'radar',
          dropShadow: {
            enabled: true,
            blur: 1,
            left: 1,
            top: 1
          }
        },
        colors: ["#845adf", "#23b7e5", "#f5b849"],
        title: {
          text: 'Radar Chart - Multi Series'
        },
        stroke: {
          width: 2
        },
        fill: {
          opacity: 0.1
        },
        markers: {
          size: 0
        },
        xaxis: {
          categories: ['2011', '2012', '2013', '2014', '2015', '2016']
        }
      },

    };
  }

  render() {
    return (

      <div id="chart">
        <ReactRadarChatMulti options={this.state.options} series={this.state.series} type="radar" height={350} width={"100%"} />
      </div>

    );
  }
}

export class RadarChartPoygon extends Component<{}, spark3> {
  constructor(props: {}) {
    super(props);

    this.state = {
      series: [{
        name: 'Series 1',
        data: [20, 100, 40, 30, 50, 80, 33],
    }],
    options: {
        chart: {
            height: 320,
            type: 'radar',
            events: {
                mounted: (chart) => {
                  chart.windowResizeHandler();
                }
              },
        },

        dataLabels: {
            enabled: true
        },
        plotOptions: {
            radar: {
                size: 80,
                polygons: {
                    strokeColors: '#e9e9e9',
                }
            }
        },
        title: {
            text: 'Radar with Polygon Fill',
            align: 'left',
            style: {
                fontSize: '13px',
                fontWeight: 'bold',
                color: '#8c9097'
            },
        },
        colors: ['#23b7e5'],
        markers: {
            size: 4,
            colors: ['#fff'],
            // strokeColor: ['#23b7e5'],
            strokeWidth: 2,
        },
        tooltip: {
            y: {
                formatter: (val) => {
                    return val.toString(); // Convert to string
                }
            }
        },
        xaxis: {
            categories: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        },
        yaxis: {
            tickAmount: 7,
            labels: {
                formatter: (val, i) => {
                    if (i % 2 === 0) {
                        return val.toString(); // Convert to string
                    } else {
                        return '';
                    }
                }
            }
        
          }
        }
      }
    }

  render() {
    return (

      <div id="chart">
        <ReactRadarChartPoygon options={this.state.options} series={this.state.series} type="radar" height={350} width={"100%"} />
      </div>

    );
  }
}
export class Basicpolararea extends Component<{}, spark3> {
  constructor(props: {}) {
    super(props);

    this.state = {
      series: [14, 23, 21, 17, 15, 10, 12, 17, 21],
      options: {
        chart: {
          type: 'polarArea',
          height: 300,
          events: {
            mounted: (chart: { windowResizeHandler: () => void; }) => {
              chart.windowResizeHandler();
            }
          },
        },
        stroke: {
          colors: ['#fff']
        },
        fill: {
          opacity: 0.8
        },
        legend: {
          position: 'bottom'
        },
        colors: ["#845adf", "#23b7e5", "#f5b849", "#49b6f5", "#e6533c", "#26bf94", "#a65e76", "#49b6f5", "#5b67c7"],
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      }

    };
  }

  render() {
    return (
      <ReactApexChart options={this.state.options} series={this.state.series} type="polarArea" height={320} width={"100%"} />

    );
  }
}

export class PolarAreaMonoChrome extends Component<{}, spark3> {
  constructor(props: {}) {
    super(props);

    this.state = {

      series: [42, 47, 52, 58, 65],
      options: {
        chart: {
          width: 380,
          type: 'polarArea'
        },
        labels: ['Rose A', 'Rose B', 'Rose C', 'Rose D', 'Rose E'],
        fill: {
          opacity: 1
        },
        stroke: {
          width: 1,
          colors: undefined
        },
        yaxis: {
          show: false
        },
        legend: {
          position: 'bottom'
        },
        plotOptions: {
          polarArea: {
            rings: {
              strokeWidth: 0
            },
            spokes: {
              strokeWidth: 0
            },
          }
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 300
            },
            legend: {
              position: 'bottom'
            }
          }
        }],
        theme: {
          monochrome: {
            enabled: true,
            shadeTo: 'light',
            shadeIntensity: 0.6,
            color: "#845adf",
          }
        }
      },

    };
  }

  render() {
    return (

      <div id="chart">
        <ReactPolarAreaMonoChrome options={this.state.options} series={this.state.series} type="polarArea" height={320} width={380}  />
      </div>

    );
  }
}

export class Piechart extends Component<{}, spark3> {
  constructor(props: {}) {
    super(props);

    this.state = {

      series: [70],
      options: {
        chart: {
          height: 350,
          type: 'radialBar',
        },
        colors: ["#845adf"],
        plotOptions: {
          radialBar: {
            hollow: {
              size: '70%',
            }
          },
        },
        labels: ['Cricket'],
      },

    };
  }

  render() {
    return (

      <div id="chart">
        <ReactPiechart options={this.state.options} series={this.state.series} type="radialBar" height={300} width={"100%"}/>
      </div>

    );
  }
}

export class MultipleRadilBar extends Component<{}, any> {
  constructor(props: {}) {
    super(props);

    this.state = {

      series: [44, 55, 67, 83],
      options: {
        chart: {
          height: 350,
          type: 'radialBar',
        },
        plotOptions: {
          radialBar: {
            dataLabels: {
              name: {
                fontSize: '22px',
              },
              value: {
                fontSize: '16px',
              },
              colors: ["#845adf", "#23b7e5", "#f5b849", "#e6533c"],
              total: {
                show: true,
                label: 'Total',
              }
            }
          }
        },
        labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
      },

    };
  }

  render() {
    return (

      <div id="chart">
        <ReactMultipleRadilBar options={this.state.options} series={this.state.series} type="radialBar" height={300} width={"100%"} />
      </div>

    );
  }
}

export class CustomAngleCircle extends Component<{}, spark3> {
  constructor(props: {}) {
    super(props);

    this.state = {

      series: [76, 67, 61, 90],
      options: {
        chart: {
          height: 390,
          type: 'radialBar',
        },
        plotOptions: {
          radialBar: {
            offsetY: 0,
            startAngle: 0,
            endAngle: 270,
            hollow: {
              margin: 5,
              size: '30%',
              background: 'transparent',
              image: undefined,
            },
            dataLabels: {
              name: {
                show: false,
              },
              value: {
                show: false,
              }
            }
          }
        },
        colors: ['#845adf', '#23b7e5', '#f5b849', '#e6533c'],
        labels: ['Vimeo', 'Messenger', 'Facebook', 'LinkedIn'],
        legend: {
          show: true,
          floating: true,
          fontSize: '16px',
          position: 'left',
          offsetX: 0,
          offsetY: 15,
          labels: {
            useSeriesColors: true,
          },
         
          formatter: function (seriesName: string, opts: { w: { globals: { series: { [x: string]: string; }; }; }; seriesIndex: string | number; }) {
            return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
          },
          itemMargin: {
            vertical: 3
          }
        },
        responsive: [{
          breakpoint: 480,
          options: {
            legend: {
              show: false
            }
          }
        }]
      },

    };
  }

  render() {
    return (

      <div id="chart">
        <ReactCustomAngleCircle options={this.state.options} series={this.state.series} type="radialBar" height={300} width={"100%"} />
      </div>

    );
  }
}

export class Gradient extends Component<{}, spark3> {
  constructor(props: {}) {
    super(props);

    this.state = {

      series: [75],
      options: {
        chart: {
          height: 320,
          type: 'radialBar',
          toolbar: {
            show: true
          }
        },
        plotOptions: {
          radialBar: {
            startAngle: -135,
            endAngle: 225,
            hollow: {
              margin: 0,
              size: '70%',
              background: '#fff',
              image: undefined,
              imageOffsetX: 0,
              imageOffsetY: 0,
              position: 'front',
              dropShadow: {
                enabled: true,
                top: 3,
                left: 0,
                blur: 4,
                opacity: 0.24
              }
            },
            track: {
              background: '#fff',
              strokeWidth: '67%',
              margin: 0, // margin is in pixels
              dropShadow: {
                enabled: true,
                top: -3,
                left: 0,
                blur: 4,
                opacity: 0.35
              }
            },

            dataLabels: {
              show: true,
              name: {
                offsetY: -10,
                show: true,
                color: '#888',
                fontSize: '17px'
              },
              value: {
               
                color: '#111',
                fontSize: '36px',
                show: true,
              }
            }
          }
        },
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'dark',
            type: 'horizontal',
            shadeIntensity: 0.5,
            gradientToColors: ['#23b7e5'],
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100]
          }
        },
        stroke: {
          lineCap: 'round'
        },
        labels: ['Percent'],
      },

    };
  }

  render() {
    return (

      <div id="card">
        <div id="chart">
          <ReactGradient options={this.state.options} series={this.state.series} type="radialBar" height={300}  width={"100%"}/>
        </div>
      </div>

    );
  }
}

export class StrokedCircle extends Component<{}, spark3> {
  constructor(props: {}) {
    super(props);

    this.state = {

      series: [67],
      options: {
        chart: {
          height: 320,
          type: 'radialBar',
          offsetY: -10
        },
        colors: ["#845adf"],
        plotOptions: {
          radialBar: {
            startAngle: -135,
            endAngle: 135,
            dataLabels: {
              name: {
                fontSize: '16px',
                color: undefined,
                offsetY: 120
              },
              value: {
                offsetY: 76,
                fontSize: '22px',
                color: undefined,
                formatter: function (val: number) {
                  return val + "%";
                }
              }
            }
          }
        },
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'dark',
            shadeIntensity: 0.15,
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 50, 65, 91]
          },
        },
        stroke: {
          dashArray: 4
        },
        labels: ['Median Ratio'],
      },

    };
  }

  render() {
    return (

      <div id="chart">
        <ReactStrokedCircle options={this.state.options} series={this.state.series} type="radialBar" height={300} width={"100%"} />
      </div>

    );
  }
}

export class CircleWithImage extends Component<{}, spark3> {
  constructor(props: {}) {
    super(props);

    this.state = {

      series: [67],
      options: {
        chart: {
          height: 330,
          type: 'radialBar',
        },
        plotOptions: {
          radialBar: {
            hollow: {
              margin: 15,
              size: '70%',
              // image: '../../../...png',
              imageWidth: 32,
              imageHeight: 32,
              imageClipped: false
            },
            dataLabels: {
              name: {
                show: false,
                color: '#fff'
              },
              value: {
                show: true,
                color: '#333',
                offsetY: 10,
                fontSize: '22px'
              }
            }
          }
        },
        fill: {
          type: 'image',
          image: {
            src: ['../../../assets/images/media/media-64.jpg'],
          }
        },
        stroke: {
          lineCap: 'round'
        },
        labels: ['Volatility'],
      },

    };
  }

  render() {
    return (

      <div id="chart">
        <ReactCircleWithImage options={this.state.options} series={this.state.series} type="radialBar" height={300} width={"100%"}/>
      </div>

    );
  }
}

export class SemiCircle extends Component<{}, spark3> {
  constructor(props: {}) {
    super(props);

    this.state = {

      series: [76],
			options: {
				chart: {
					type: "radialBar",
					height: 320,
					offsetY: -20,
					sparkline: {
						enabled: true
					},
					events: {
						mounted: (chart: { windowResizeHandler: () => void; }) => {
							chart.windowResizeHandler();
						}
					},
				},
				plotOptions: {
					radialBar: {
						startAngle: -90,
						endAngle: 90,
						track: {
							background: "#fff",
							strokeWidth: "97%",
							margin: 5, // margin is in pixels
							dropShadow: {
								enabled: false,
								top: 2,
								left: 0,
								color: "#999",
								opacity: 1,
								blur: 2
							}
						},
						dataLabels: {
							name: {
								show: false
							},
							value: {
								offsetY: -2,
								fontSize: "22px"
							}
						}
					}
				},
        colors: ["#845adf"],
				grid: {
					padding: {
						top: -10
					}
				},
				fill: {
					type: "gradient",
					gradient: {
						shade: "light",
						shadeIntensity: 0.4,
						inverseColors: false,
						opacityFrom: 1,
						opacityTo: 1,
						stops: [0, 50, 53, 91]
					},
				},
				labels: ["Average Results"],

    }
  };
  }
  render() {
    return (

      <div id="chart">
        <ReactSemiCircle options={this.state.options} series={this.state.series} type="radialBar" height={320} width={"100%"} />
      </div>

    );
  }
};

export class SimplePie extends Component<{}, spark3> {
  constructor(props: {}) {
    super(props);

    this.state = {

      series: [44, 55, 13, 43, 22],
      options: {
        chart: {
          width: 380,
          type: 'pie',
        },
        colors: ["#845adf", "#23b7e5", "#f5b849", "#49b6f5", "#e6533c"],
        labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
        legend: {
          position: "bottom",
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 300
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      },

    };
  }

  render() {
    return (

      <div id="chart">
        <ReactSimplePie options={this.state.options} series={this.state.series} type="pie" width={"100%"}  />
      </div>

    );
  }
}

export class SimpleDonut extends Component<{}, spark3> {
  constructor(props: {}) {
    super(props);

    this.state = {

      series: [44, 55, 41, 17, 15],
      options: {
        chart: {
          type: 'donut',
        },
        colors: ["#845adf", "#23b7e5", "#f5b849", "#49b6f5", "#e6533c"],
        legend: {
          position: "bottom",
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 280,
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      },

    };
  }

  render() {
    return (

      <div id="chart">
        <ReactSimpleDonut options={this.state.options} series={this.state.series} type="donut" width={284} height={300} />
      </div>

    );
  }
}

export class GradientDonut extends Component<{}, spark3> {
  constructor(props: {}) {
    super(props);

    this.state = {

      series: [44, 55, 41, 17, 15],
      options: {
        chart: {
          width: 380,
          type: 'donut',
        },
        plotOptions: {
          pie: {
            startAngle: -90,
            endAngle: 270
          }
        },
        colors: ["#845adf", "#23b7e5", "#f5b849", "#49b6f5", "#e6533c"],

        dataLabels: {
          enabled: false
        },
        fill: {
          type: 'gradient',
        },
        legend: {
          formatter: function (val: string, opts: { w: { globals: { series: { [x: string]: string; }; }; }; seriesIndex: string | number; }) {
            return val + " - " + opts.w.globals.series[opts.seriesIndex]
          },
          position: "bottom",
        },
        
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 300
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      },

    };
  }

  render() {
    return (

      <div id="chart">
        <ReactGradientDonut options={this.state.options} series={this.state.series} type="donut" width={410} height={287} />
      </div>

    );
  }
}

export class DonutUpdate extends Component<{}, spark3> {
  constructor(props: {}) {
    super(props);

    this.state = {

      series: [44, 55, 13, 33],
      options: {
        chart: {
          type: 'donut',
        },
        dataLabels: {
          enabled: false
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              show: false
            }
          }
        }],
        legend: {
          position: 'right',
          offsetY: 0,
          height: 230,
        }
      },

    };
  }
  appendData = () => {
    const arr:any = this.state.series ? [...this.state.series] : [];
    arr.push(Math.floor(Math.random() * (100 - 1 + 1)) + 1);

    this.setState({
        series: arr,
    });
}

removeData = () => {
    if (!this.state.series || this.state.series.length === 1) return;

    const arr = this.state.series.slice();
    arr.pop();

    this.setState({
        series: arr,
    });
}

randomize = () => {
    this.setState((prevState) => ({
        series: prevState.series
            ? prevState.series.map(() => Math.floor(Math.random() * (100 - 1 + 1)) + 1)
            : [],
    }));
}

reset() {
    this.setState({
        series: [44, 55, 13, 33],
    });
}



  render() {
    return (

      <div>
        <div className="chart-wrap">
          <div id="chart">
            <ReactDonutUpdate options={this.state.options} series={this.state.series} type="donut" width={380} height={287} />
          </div>
          <div className="text-center mt-4">
                                <Button variant="primary" size="sm" className="m-1" id="randomize"  onClick={() => this.randomize()}>Randomize</Button>{' '}
                                <Button variant="primary" size="sm" className="m-1" id="add"  onClick={() => this.appendData()}>Add</Button>{' '}
                                <Button variant="primary" size="sm" className="m-1" id="remove"   onClick={() => this.removeData()}>Remove</Button>{' '}
                                <Button variant="primary" size="sm" className="m-1" id="reset" onClick={() => this.reset()}>Reset</Button>{' '}
                            </div>
                         
        </div>

      </div>

    );
  }
}

export class MonoChromePie extends Component<{}, spark3> {
  constructor(props: {}) {
    super(props);

    this.state = {

      series: [25, 15, 44, 55, 41, 17],
      options: {
        chart: {
          width: 300,
          type: 'pie',
        },
        labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        theme: {
          monochrome: {
            enabled: true,
            color: "#845adf",
          }
        },
        plotOptions: {
          pie: {
            dataLabels: {
              offset: -5
            }
          }
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 280
            },
            legend: {
              position: 'bottom'
            }
          }
        }],
        title: {
          text: "Monochrome Pie",
          align: "left",
          style: {
            fontSize: "13px",
            fontWeight: "bold",
            color: "#8c9097",
          },
        },
    
        legend: {
          show: false
        }
      },

    };
  }

  render() {
    return (

      <div id="chart">
        <ReactMonoChromePie options={this.state.options} series={this.state.series} type="pie" width={340} height={287} />
      </div>

    );
  }
}

export class DonutChatrsWithPatterns extends Component<{}, spark3> {
  constructor(props: {}) {
    super(props);

    this.state = {

      series: [44, 55, 41, 17, 15],
      options: {
        chart: {
          width: 380,
          type: 'donut',
          dropShadow: {
            enabled: true,
            color: '#111',
            top: -1,
            left: 3,
            blur: 3,
            opacity: 0.2
          }
        },
        stroke: {
          width: 0,
        },
        plotOptions: {
          pie: {
            donut: {
              labels: {
                show: true,
                total: {
                  showAlways: true,
                  show: true
                }
              }
            }
          }
        },
        labels: ["Comedy", "Action", "SciFi", "Drama", "Horror"],
        colors: ["#845adf", "#23b7e5", "#f5b849", "#49b6f5", "#e6533c"],

        dataLabels: {
          dropShadow: {
            blur: 3,
            opacity: 0.8
          }
        },
        fill: {
          type: 'pattern',
          opacity: 1,
          pattern: {
            style: ['verticalLines', 'squares', 'horizontalLines', 'circles', 'slantedLines'],
          },
        },
      
        theme: {
          palette: 'palette2'
        },
        title: {
          text: "Favourite Movie Type"
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 300
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      },

    };
  }

  render() {
    return (

      <div id="chart">
        <ReactDonutChatrsWithPatterns options={this.state.options} series={this.state.series} type="donut" width={380} height={287}/>
      </div>

    );
  }
}

export class ImageFilledChart extends Component<{}, spark3> {
  constructor(props: {}) {
    super(props);

    this.state = {

      series: [44, 33, 54, 45],
      options: {
        chart: {
          width: 380,
          type: 'pie',
        },
        colors: ["#93C3EE", "#E5C6A0", "#669DB5", "#94A74A"],
        legend: {
          position: "bottom",
        },
        fill: {
          type: 'image',
          opacity: 0.85,
          image: {
            src: [
              "../../../assets/images/media/media-21.jpg",
              "../../../assets/images/media/media-21.jpg",
              "../../../assets/images/media/media-21.jpg",
              "../../../assets/images/media/media-21.jpg",
            ],
            width: 25,
            height: 25
          },
        },
        stroke: {
          width: 4
        },
        dataLabels: {
          enabled: true,
          style: {
            colors: ['#111']
          },
          background: {
            enabled: true,
            foreColor: '#fff',
            borderWidth: 0
          }
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 300
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      },

    };
  }

  render() {
    return (

      <div id="chart">
        <ReactImageFilledChart options={this.state.options} series={this.state.series} type="pie" width={380} height={287}  />
      </div>

    );
  }
}

export class Candleline extends Component<{}, spark3> {
  constructor(props: {}) {
    super(props)

    this.state = {

      series: [{
        name: 'line',
        type: 'line',
        color: "#49b6f5",
        data: [
            {
                x: new Date(1538778600000),
                y: 6604
            }, {
                x: new Date(1538782200000),
                y: 6602
            }, {
                x: new Date(1538814600000),
                y: 6607
            }, {
                x: new Date(1538884800000),
                y: 6620
            }
        ]
    }, {
        name: 'candle',
        type: 'candlestick',
        data: [
            {
                x: new Date(1538778600000),
                y: [6629.81, 6650.5, 6623.04, 6633.33]
            },
            {
                x: new Date(1538780400000),
                y: [6632.01, 6643.59, 6620, 6630.11]
            },
            {
                x: new Date(1538782200000),
                y: [6630.71, 6648.95, 6623.34, 6635.65]
            },
            {
                x: new Date(1538784000000),
                y: [6635.65, 6651, 6629.67, 6638.24]
            },
            {
                x: new Date(1538785800000),
                y: [6638.24, 6640, 6620, 6624.47]
            },
            {
                x: new Date(1538787600000),
                y: [6624.53, 6636.03, 6621.68, 6624.31]
            },
            {
                x: new Date(1538789400000),
                y: [6624.61, 6632.2, 6617, 6626.02]
            },
            {
                x: new Date(1538791200000),
                y: [6627, 6627.62, 6584.22, 6603.02]
            },
            {
                x: new Date(1538793000000),
                y: [6605, 6608.03, 6598.95, 6604.01]
            },
            {
                x: new Date(1538794800000),
                y: [6604.5, 6614.4, 6602.26, 6608.02]
            },
            {
                x: new Date(1538796600000),
                y: [6608.02, 6610.68, 6601.99, 6608.91]
            },
            {
                x: new Date(1538798400000),
                y: [6608.91, 6618.99, 6608.01, 6612]
            },
            {
                x: new Date(1538800200000),
                y: [6612, 6615.13, 6605.09, 6612]
            },
            {
                x: new Date(1538802000000),
                y: [6612, 6624.12, 6608.43, 6622.95]
            },
            {
                x: new Date(1538803800000),
                y: [6623.91, 6623.91, 6615, 6615.67]
            },
            {
                x: new Date(1538805600000),
                y: [6618.69, 6618.74, 6610, 6610.4]
            },
            {
                x: new Date(1538807400000),
                y: [6611, 6622.78, 6610.4, 6614.9]
            },
            {
                x: new Date(1538809200000),
                y: [6614.9, 6626.2, 6613.33, 6623.45]
            },
            {
                x: new Date(1538811000000),
                y: [6623.48, 6627, 6618.38, 6620.35]
            },
            {
                x: new Date(1538812800000),
                y: [6619.43, 6620.35, 6610.05, 6615.53]
            },
            {
                x: new Date(1538814600000),
                y: [6615.53, 6617.93, 6610, 6615.19]
            },
            {
                x: new Date(1538816400000),
                y: [6615.19, 6621.6, 6608.2, 6620]
            },
            {
                x: new Date(1538818200000),
                y: [6619.54, 6625.17, 6614.15, 6620]
            },
            {
                x: new Date(1538820000000),
                y: [6620.33, 6634.15, 6617.24, 6624.61]
            },
            {
                x: new Date(1538821800000),
                y: [6625.95, 6626, 6611.66, 6617.58]
            },
            {
                x: new Date(1538823600000),
                y: [6619, 6625.97, 6595.27, 6598.86]
            },
            {
                x: new Date(1538825400000),
                y: [6598.86, 6598.88, 6570, 6587.16]
            },
            {
                x: new Date(1538827200000),
                y: [6588.86, 6600, 6580, 6593.4]
            },
            {
                x: new Date(1538829000000),
                y: [6593.99, 6598.89, 6585, 6587.81]
            },
            {
                x: new Date(1538830800000),
                y: [6587.81, 6592.73, 6567.14, 6578]
            },
            {
                x: new Date(1538832600000),
                y: [6578.35, 6581.72, 6567.39, 6579]
            },
            {
                x: new Date(1538834400000),
                y: [6579.38, 6580.92, 6566.77, 6575.96]
            },
            {
                x: new Date(1538836200000),
                y: [6575.96, 6589, 6571.77, 6588.92]
            },
            {
                x: new Date(1538838000000),
                y: [6588.92, 6594, 6577.55, 6589.22]
            },
            {
                x: new Date(1538839800000),
                y: [6589.3, 6598.89, 6589.1, 6596.08]
            },
            {
                x: new Date(1538841600000),
                y: [6597.5, 6600, 6588.39, 6596.25]
            },
            {
                x: new Date(1538843400000),
                y: [6598.03, 6600, 6588.73, 6595.97]
            },
            {
                x: new Date(1538845200000),
                y: [6595.97, 6602.01, 6588.17, 6602]
            },
            {
                x: new Date(1538847000000),
                y: [6602, 6607, 6596.51, 6599.95]
            },
            {
                x: new Date(1538848800000),
                y: [6600.63, 6601.21, 6590.39, 6591.02]
            },
            {
                x: new Date(1538850600000),
                y: [6591.02, 6603.08, 6591, 6591]
            },
            {
                x: new Date(1538852400000),
                y: [6591, 6601.32, 6585, 6592]
            },
            {
                x: new Date(1538854200000),
                y: [6593.13, 6596.01, 6590, 6593.34]
            },
            {
                x: new Date(1538856000000),
                y: [6593.34, 6604.76, 6582.63, 6593.86]
            },
            {
                x: new Date(1538857800000),
                y: [6593.86, 6604.28, 6586.57, 6600.01]
            },
            {
                x: new Date(1538859600000),
                y: [6601.81, 6603.21, 6592.78, 6596.25]
            },
            {
                x: new Date(1538861400000),
                y: [6596.25, 6604.2, 6590, 6602.99]
            },
            {
                x: new Date(1538863200000),
                y: [6602.99, 6606, 6584.99, 6587.81]
            },
            {
                x: new Date(1538865000000),
                y: [6587.81, 6595, 6583.27, 6591.96]
            },
            {
                x: new Date(1538866800000),
                y: [6591.97, 6596.07, 6585, 6588.39]
            },
            {
                x: new Date(1538868600000),
                y: [6587.6, 6598.21, 6587.6, 6594.27]
            },
            {
                x: new Date(1538870400000),
                y: [6596.44, 6601, 6590, 6596.55]
            },
            {
                x: new Date(1538872200000),
                y: [6598.91, 6605, 6596.61, 6600.02]
            },
            {
                x: new Date(1538874000000),
                y: [6600.55, 6605, 6589.14, 6593.01]
            },
            {
                x: new Date(1538875800000),
                y: [6593.15, 6605, 6592, 6603.06]
            },
            {
                x: new Date(1538877600000),
                y: [6603.07, 6604.5, 6599.09, 6603.89]
            },
            {
                x: new Date(1538879400000),
                y: [6604.44, 6604.44, 6600, 6603.5]
            },
            {
                x: new Date(1538881200000),
                y: [6603.5, 6603.99, 6597.5, 6603.86]
            },
            {
                x: new Date(1538883000000),
                y: [6603.85, 6605, 6600, 6604.07]
            },
            {
                x: new Date(1538884800000),
                y: [6604.98, 6606, 6604.07, 6606]
            },
        ]
    }],
    options: {
        chart: {
            height: 350,
            type: 'line'
          
        },
        grid: {
            borderColor: '#f2f5f7',
        },
        title: {
            text: 'CandleStick Chart',
            align: 'left',
            style: {
                fontSize: '13px',
                fontWeight: 'bold',
                color: '#8c9097'
            },
        },
        stroke: {
            width: [3, 1]
        },
        colors: ["#49b6f5"],
        tooltip: {
            shared: true,
            custom: [function ({ seriesIndex, dataPointIndex, w }) {
                return w.globals.series[seriesIndex][dataPointIndex];
            },
            ]
        },
        plotOptions: {
            candlestick: {
                colors: {
                    upward: '#845adf',
                    downward: '#23b7e5'
                }
            }
        },
        xaxis: {
            type: 'datetime',
            labels: {
                show: true,
                style: {
                    colors: "#8c9097",
                    fontSize: '11px',
                    fontWeight: 600,
                    cssClass: 'apexcharts-xaxis-label',
                },
            }
        },
        yaxis: {
            labels: {
                show: true,
                style: {
                    colors: "#8c9097",
                    fontSize: '11px',
                    fontWeight: 600,
                    cssClass: 'apexcharts-yaxis-label',
                },
            }
        }
    },

    };
  }
  render() {
    return (
      <ReactCandleLine options={this.state.options} series={this.state.series} type="candlestick" height={350} width={"100%"} />

    )
  }
}

export class Basicpiechart extends Component<{}, spark3> {
  constructor(props: {}) {
    super(props);

    this.state = {
      series: [44, 55, 13, 43, 22],
      options: {
        chart: {
          height: 300,
          type: 'pie',
          events: {
            mounted: (chart: { windowResizeHandler: () => void; }) => {
              chart.windowResizeHandler();
            }
          },
        },
        colors: ["#845adf", "#23b7e5", "#f5b849", "#49b6f5", "#e6533c"],
        labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
        legend: {
          position: "bottom"
        },
        dataLabels: {
          dropShadow: {
            enabled: false
          }
        },
      }

    };
  }

  render() {
    return (
      <ReactApexChart options={this.state.options} series={this.state.series} type="pie" height={300} width={"100%"} />

    );
  }
}
