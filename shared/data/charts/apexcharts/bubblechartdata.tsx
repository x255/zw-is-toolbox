import { ApexOptions } from 'apexcharts';
import dynamic from 'next/dynamic';
import React, { Component } from 'react';
const ReactBubbleChart = dynamic(() => import('react-apexcharts'), { ssr: false });
const ReactDBubbleChart = dynamic(() => import('react-apexcharts'), { ssr: false });
interface spark3 {
  options?: ApexOptions,
  width?: number;
  height?: string | number,
  series?: ApexOptions['series'],
  label?: XAxisAnnotations
  color?: string | string[] | (string & string[]) | undefined
  endingShape?: string
  enabled?: boolean;
  xaxis?:any;
  yaxis?:any;

}
function generateData(baseval: number, count: number, yrange: { min: any; max: any; }) {
  var i = 0;
  var series = [];
  while (i < count) {
    var x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;
    var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
    var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

    series.push([x, y, z]);
    baseval += 86400000;
    i++;
  }
  return series;
}
export class BubbleChart extends Component<{}, spark3> {
  constructor(props: {}) {
    super(props);

    this.state = {

      series: [{
        name: 'Bubble1',
        data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
          min: 10,
          max: 60
        })
      },
      {
        name: 'Bubble2',
        data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
          min: 10,
          max: 60
        })
      },
      {
        name: 'Bubble3',
        data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
          min: 10,
          max: 60
        })
      },
      {
        name: 'Bubble4',
        data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
          min: 10,
          max: 60
        })
      }],
      options: {
        chart: {
          height: 350,
          type: 'bubble',
        },
        dataLabels: {
          enabled: false
        },
        fill: {
          opacity: 0.8
        },
        title: {
          text: 'Simple Bubble Chart',
          style:{

            color: '#8c9097'
          }
        },
        colors: ["#845adf", "#23b7e5", "#f5b849"],
        xaxis: {
          tickAmount: 12,
          type: 'category',
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
          max: 70,
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
        <ReactBubbleChart options={this.state.options} series={this.state.series} type="bubble" height={350} width={"100%"} />
      </div>
    );
  }
}
export class DBubbleChart extends Component<{}, spark3>{
  constructor(props: {}) {
    super(props);

    this.state = {

      series: [{
        name: 'Product1',
        data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
          min: 10,
          max: 60
        })
      },
      {
        name: 'Product2',
        data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
          min: 10,
          max: 60
        })
      },
      {
        name: 'Product3',
        data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
          min: 10,
          max: 60
        })
      },
      {
        name: 'Product4',
        data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
          min: 10,
          max: 60
        })
      }],
      options: {
        chart: {
          height: 350,
          type: 'bubble',
        },
        dataLabels: {
          enabled: false
        },
        fill: {
          type: 'gradient',
        },
        colors: ["#845adf", "#23b7e5", "#f5b849"],
        title: {
          text: '3D Bubble Chart'
        },
        xaxis: {
          tickAmount: 12,
          type: 'datetime',
          labels: {
            rotate: 0,
          }
        },
        yaxis: {
          max: 70
        },
        theme: {
          palette: 'palette2'
        }
      },
    };
  }
  render() {
    return (
      <div id="chart">
        <ReactDBubbleChart options={this.state.options} series={this.state.series} type="bubble" height={350} width={"100%"} />
      </div>
    );
  }
}

