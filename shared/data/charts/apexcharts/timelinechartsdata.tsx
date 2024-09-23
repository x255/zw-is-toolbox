import dynamic from 'next/dynamic';
import React, { Component } from 'react';
const ReactTimeLine = dynamic(() => import('react-apexcharts'), { ssr: false });
const ReactCustomColor = dynamic(() => import('react-apexcharts'), { ssr: false });
const ReactMultiSeriesTimeLine = dynamic(() => import('react-apexcharts'), { ssr: false });
const ReactAdvanceTimeLine = dynamic(() => import('react-apexcharts'), { ssr: false });
const ReactGroupedRows = dynamic(() => import('react-apexcharts'), { ssr: false });
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
}
import moment from "moment";
import { ApexOptions } from 'apexcharts';
export class TimeLine extends Component<{}, spark3> {
  constructor(props: {}) {
    super(props);

    this.state = {

      series: [
        {
          data: [
            {
              x: 'Code',
              y: [
                new Date('2019-03-02').getTime(),
                new Date('2019-03-04').getTime()
              ]
            },
            {
              x: 'Test',
              y: [
                new Date('2019-03-04').getTime(),
                new Date('2019-03-08').getTime()
              ]
            },
            {
              x: 'Validation',
              y: [
                new Date('2019-03-08').getTime(),
                new Date('2019-03-12').getTime()
              ]
            },
            {
              x: 'Deployment',
              y: [
                new Date('2019-03-12').getTime(),
                new Date('2019-03-18').getTime()
              ]
            }
          ]
        }
      ],
      options: {
        chart: {
          height: 350,
          type: 'rangeBar'
        },
        plotOptions: {
          bar: {
            horizontal: true
          }
        },
        colors: ["#845adf"],
        xaxis: {
          type: 'datetime'
        }
      },
    };
  }

  render() {
    return (
      <div id="chart">
        <ReactTimeLine options={this.state.options} series={this.state.series} type="rangeBar" height={350} width={"100%"}/>
      </div>
    );
  }
}

export class CustomColor extends Component<{}, spark3> {
  constructor(props: {}) {
    super(props);

    this.state = {

      series: [
        {
          data: [
            {
              x: 'Analysis',
              y: [
                new Date('2019-02-27').getTime(),
                new Date('2019-03-04').getTime()
              ],
              fillColor: '#845adf'
            },
            {
              x: 'Design',
              y: [
                new Date('2019-03-04').getTime(),
                new Date('2019-03-08').getTime()
              ],
              fillColor: '#23b7e5'
            },
            {
              x: 'Coding',
              y: [
                new Date('2019-03-07').getTime(),
                new Date('2019-03-10').getTime()
              ],
              fillColor: '#f5b849'
            },
            {
              x: 'Testing',
              y: [
                new Date('2019-03-08').getTime(),
                new Date('2019-03-12').getTime()
              ],
              fillColor: '#49b6f5'
            },
            {
              x: 'Deployment',
              y: [
                new Date('2019-03-12').getTime(),
                new Date('2019-03-17').getTime()
              ],
              fillColor: '#e6533c'
            }
          ]
        }
      ],
      options: {
        chart: {
          height: 350,
          type: 'rangeBar'
        },
        plotOptions: {
          bar: {
            horizontal: true,
            distributed: true,
            dataLabels: {
              hideOverflowingLabels: false
            }
          }
        },
        dataLabels: {
          enabled: true,
          formatter: function (val: any, opts: { w: { globals: { labels: { [x: string]: any; }; }; }; dataPointIndex: string | number; }) {
            var label = opts.w.globals.labels[opts.dataPointIndex]
            var a = moment(val[0])
            var b = moment(val[1])
            var diff = b.diff(a, 'days')
            return label + ': ' + diff + (diff > 1 ? ' days' : ' day')
          },
          style: {
            colors: ['#f3f4f5', '#fff']
          }
        },
        xaxis: {
          type: 'datetime'
        },
        yaxis: {
          show: false
        },
        grid: {
          borderColor: '#f2f5f7',
        }
      },
    };
  }
  render() {
    return (
      <div id="chart">
        <ReactCustomColor options={this.state.options} series={this.state.series} type="rangeBar" height={350} width={"100%"} />
      </div>
    );
  }
}

export class MultiSeriesTimeLine extends Component<{}, spark3> {
  constructor(props: {}) {
    super(props);

    this.state = {

      series: [
        {
          name: 'Bob',
          data: [
            {
              x: 'Design',
              y: [
                new Date('2019-03-05').getTime(),
                new Date('2019-03-08').getTime()
              ]
            },
            {
              x: 'Code',
              y: [
                new Date('2019-03-08').getTime(),
                new Date('2019-03-11').getTime()
              ]
            },
            {
              x: 'Test',
              y: [
                new Date('2019-03-11').getTime(),
                new Date('2019-03-16').getTime()
              ]
            }
          ]
        },
        {
          name: 'Joe',
          data: [
            {
              x: 'Design',
              y: [
                new Date('2019-03-02').getTime(),
                new Date('2019-03-05').getTime()
              ]
            },
            {
              x: 'Code',
              y: [
                new Date('2019-03-06').getTime(),
                new Date('2019-03-09').getTime()
              ]
            },
            {
              x: 'Test',
              y: [
                new Date('2019-03-10').getTime(),
                new Date('2019-03-19').getTime()
              ]
            }
          ]
        }
      ],
      options: {
        chart: {
          height: 350,
          type: 'rangeBar'
        },
        plotOptions: {
          bar: {
            horizontal: true
          }
        },
        dataLabels: {
          enabled: true,
          formatter: function (val: any) {
            var a = moment(val[0])
            var b = moment(val[1])
            var diff = b.diff(a, 'days')
            return diff + (diff > 1 ? ' days' : ' day')
          }
        },
        colors: ["#845adf", "#23b7e5"],

        fill: {
          type: 'gradient',
          gradient: {
            shade: 'light',
            type: 'vertical',
            shadeIntensity: 0.25,
            gradientToColors: undefined,
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [50, 0, 100, 100]
          }
        },
        xaxis: {
          type: 'datetime'
        },
        legend: {
          position: 'top'
        }
      },
    };
  }
  render() {
    return (
      <div id="chart">
        <ReactMultiSeriesTimeLine options={this.state.options} series={this.state.series} type="rangeBar" height={350} width={"100%"} />
      </div>

    );
  }
}

export class AdvanceTimeLine extends Component<{}, spark3> {
  constructor(props: {}) {
    super(props);

    this.state = {

      series: [
        {
          name: 'Bob',
          data: [
            {
              x: 'Design',
              y: [
                new Date('2019-03-05').getTime(),
                new Date('2019-03-08').getTime()
              ]
            },
            {
              x: 'Code',
              y: [
                new Date('2019-03-02').getTime(),
                new Date('2019-03-05').getTime()
              ]
            },
            {
              x: 'Code',
              y: [
                new Date('2019-03-05').getTime(),
                new Date('2019-03-07').getTime()
              ]
            },
            {
              x: 'Test',
              y: [
                new Date('2019-03-03').getTime(),
                new Date('2019-03-09').getTime()
              ]
            },
            {
              x: 'Test',
              y: [
                new Date('2019-03-08').getTime(),
                new Date('2019-03-11').getTime()
              ]
            },
            {
              x: 'Validation',
              y: [
                new Date('2019-03-11').getTime(),
                new Date('2019-03-16').getTime()
              ]
            },
            {
              x: 'Design',
              y: [
                new Date('2019-03-01').getTime(),
                new Date('2019-03-03').getTime()
              ],
            }
          ]
        },
        {
          name: 'Joe',
          data: [
            {
              x: 'Design',
              y: [
                new Date('2019-03-02').getTime(),
                new Date('2019-03-05').getTime()
              ]
            },
            {
              x: 'Test',
              y: [
                new Date('2019-03-06').getTime(),
                new Date('2019-03-16').getTime()
              ],
              goals: [
                {
                  name: 'Break',
                  value: new Date('2019-03-10').getTime(),
                  strokeColor: '#CD2F2A'
                }
              ]
            },
            {
              x: 'Code',
              y: [
                new Date('2019-03-03').getTime(),
                new Date('2019-03-07').getTime()
              ]
            },
            {
              x: 'Deployment',
              y: [
                new Date('2019-03-20').getTime(),
                new Date('2019-03-22').getTime()
              ]
            },
            {
              x: 'Design',
              y: [
                new Date('2019-03-10').getTime(),
                new Date('2019-03-16').getTime()
              ]
            }
          ]
        },
        {
          name: 'Dan',
          data: [
            {
              x: 'Code',
              y: [
                new Date('2019-03-10').getTime(),
                new Date('2019-03-17').getTime()
              ]
            },
            {
              x: 'Validation',
              y: [
                new Date('2019-03-05').getTime(),
                new Date('2019-03-09').getTime()
              ],
              goals: [
                {
                  name: 'Break',
                  value: new Date('2019-03-07').getTime(),
                  strokeColor: '#CD2F2A'
                }
              ]
            },
          ]
        }
      ],
      options: {
        chart: {
          height: 450,
          type: 'rangeBar'
        },
        plotOptions: {
          bar: {
            horizontal: true,
            barHeight: '80%'
          }
        },
        colors: ["#845adf", "#23b7e5", "#f5b849"],

        xaxis: {
          type: 'datetime'
        },
        stroke: {
          width: 1
        },
        fill: {
          type: 'solid',
          opacity: 0.6
        },
        legend: {
          position: 'top',
          horizontalAlign: 'left'
        }
      },
    };
  }
  render() {
    return (
      <div id="chart">
        <ReactAdvanceTimeLine options={this.state.options} series={this.state.series} type="rangeBar" height={350} width={"100%"}/>
      </div>
    );
  }
}

export class GroupedRows extends Component<{}, spark3>{
  constructor(props: {}) {
    super(props);

    this.state = {

      series: [
        // George Washington
        {
          name: 'George Washington',
          data: [
            {
              x: 'President',
              y: [
                new Date(1789, 3, 30).getTime(),
                new Date(1797, 2, 4).getTime()
              ]
            },
          ]
        },
        // John Adams
        {
          name: 'John Adams',
          data: [
            {
              x: 'President',
              y: [
                new Date(1797, 2, 4).getTime(),
                new Date(1801, 2, 4).getTime()
              ]
            },
            {
              x: 'Vice President',
              y: [
                new Date(1789, 3, 21).getTime(),
                new Date(1797, 2, 4).getTime()
              ]
            }
          ]
        },
        // Thomas Jefferson
        {
          name: 'Thomas Jefferson',
          data: [
            {
              x: 'President',
              y: [
                new Date(1801, 2, 4).getTime(),
                new Date(1809, 2, 4).getTime()
              ]
            },
            {
              x: 'Vice President',
              y: [
                new Date(1797, 2, 4).getTime(),
                new Date(1801, 2, 4).getTime()
              ]
            },
            {
              x: 'Secretary of State',
              y: [
                new Date(1790, 2, 22).getTime(),
                new Date(1793, 11, 31).getTime()
              ]
            }
          ]
        },
        // Aaron Burr
        {
          name: 'Aaron Burr',
          data: [
            {
              x: 'Vice President',
              y: [
                new Date(1801, 2, 4).getTime(),
                new Date(1805, 2, 4).getTime()
              ]
            }
          ]
        },
        // George Clinton
        {
          name: 'George Clinton',
          data: [
            {
              x: 'Vice President',
              y: [
                new Date(1805, 2, 4).getTime(),
                new Date(1812, 3, 20).getTime()
              ]
            }
          ]
        },
        // John Jay
        {
          name: 'John Jay',
          data: [
            {
              x: 'Secretary of State',
              y: [
                new Date(1789, 8, 25).getTime(),
                new Date(1790, 2, 22).getTime()
              ]
            }
          ]
        },
        // Edmund Randolph
        {
          name: 'Edmund Randolph',
          data: [
            {
              x: 'Secretary of State',
              y: [
                new Date(1794, 0, 2).getTime(),
                new Date(1795, 7, 20).getTime()
              ]
            }
          ]
        },
        // Timothy Pickering
        {
          name: 'Timothy Pickering',
          data: [
            {
              x: 'Secretary of State',
              y: [
                new Date(1795, 7, 20).getTime(),
                new Date(1800, 4, 12).getTime()
              ]
            }
          ]
        },
        // Charles Lee
        {
          name: 'Charles Lee',
          data: [
            {
              x: 'Secretary of State',
              y: [
                new Date(1800, 4, 13).getTime(),
                new Date(1800, 5, 5).getTime()
              ]
            }
          ]
        },
        // John Marshall
        {
          name: 'John Marshall',
          data: [
            {
              x: 'Secretary of State',
              y: [
                new Date(1800, 5, 13).getTime(),
                new Date(1801, 2, 4).getTime()
              ]
            }
          ]
        },
        // Levi Lincoln
        {
          name: 'Levi Lincoln',
          data: [
            {
              x: 'Secretary of State',
              y: [
                new Date(1801, 2, 5).getTime(),
                new Date(1801, 4, 1).getTime()
              ]
            }
          ]
        },
        // James Madison
        {
          name: 'James Madison',
          data: [
            {
              x: 'Secretary of State',
              y: [
                new Date(1801, 4, 2).getTime(),
                new Date(1809, 2, 3).getTime()
              ]
            }
          ]
        },
      ],
      options: {
        chart: {
          height: 350,
          type: 'rangeBar'
        },
        plotOptions: {
          bar: {
            horizontal: true,
            barHeight: '50%',
            rangeBarGroupRows: true
          }
        },
        colors: [
          "#845adf", "#23b7e5", "#f5b849", "#e6533c", "#5b67c7",
          "#3F51B5", "#546E7A", "#D4526E", "#8D5B4C", "#F86624",
          "#D7263D", "#1B998B", "#2E294E", "#F46036", "#E2C044"
        ],
        fill: {
          type: 'solid'
        },
        xaxis: {
          type: 'datetime'
        },
        legend: {
          position: 'right'
        },
        tooltip: {
          custom: function (opts: { y1: string | number | Date; y2: string | number | Date; }) {
            const fromYear = new Date(opts.y1).getFullYear()
            const toYear = new Date(opts.y2).getFullYear()
            // const values = opts.ctx.rangeBar.getTooltipValues(opts)

            return (
              ''
            )
          }
        }
      },

    };
  }

  render() {
    return (
      <div id="chart">
        <ReactGroupedRows options={this.state.options} series={this.state.series} type="rangeBar" height={350} width={"100%"} />
      </div>
    );
  }
}
