import { ApexOptions } from 'apexcharts';
import dynamic from 'next/dynamic';
import React, { Component } from 'react';
const ReactInvoiceStats = dynamic(() => import('react-apexcharts'), { ssr: false });
interface spark3 {
	options?: ApexOptions,
	width?: string | number,
	height?: string | number,
	series?: ApexOptions['series'],
	[key: string]: any
	label?: XAxisAnnotations
	endingShape?: string
}
export class InvoiceStats extends Component<{}, spark3> {
    constructor(props: {}) {
        super(props);

        this.state = {
            series: [{
                name: 'New',
                data: [76, 85, 101, 98, 87, 105]
            }, {
                name: 'Pending',
                data: [35, 41, 36, 26, 45, 48]
            }, {
                name: 'Completed',
                data: [44, 55, 57, 56, 61, 58]
            }, {
                name: 'Inprogress',
                data: [13, 27, 31, 29, 35, 25]
            }],
            options: {
                chart: {
                    type: 'bar',
                    height: 210,
                    stacked: true
                },
                plotOptions: {
                    bar: {
                        horizontal: false,
                        columnWidth: '25%',
                    },
                },
                grid: {
                    borderColor: "#f2f5f7",
                },
                dataLabels: {
                    enabled: false
                },
                colors: ["#845adf", "#28d193", "#ffbe14", "#23b7e5"],
                stroke: {
                    show: true,
                    colors: ['transparent']
                },
                xaxis: {
                    categories: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
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
                    title: {
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
                            cssClass: 'apexcharts-xaxis-label',
                        },
                    }
                },
                fill: {
                    opacity: 1
                },
                tooltip: {
                    y: {
                        formatter: function (val: any) {
                            return "$ " + val + " thousands";
                        }
                    }
                }
            }

        };
    }

    render() {
        return (
            <ReactInvoiceStats options={this.state.options} series={this.state.series} type="bar" height={210} width={"100%"} />

        );
    }
}
const checkbox = <input className="form-check-input" type="checkbox" id="checkboxNoLabel2" value="" aria-label="..." />
const checked = <input className="form-check-input" type="checkbox" id="checkboxNoLabel5" value="" aria-label="..." defaultChecked />
export const Manageinvoices = [
    { id: 1,avatarImages: ["../../assets/images/faces/2.jpg", "../../assets/images/faces/8.jpg", "../../assets/images/faces/2.jpg"], number: '+2', task: 'Design New Landing Page', taskid: 'SPK - 01', priority: 'Medium', status: 'New', assigndate: '02-06-2023', duedate: '10-06-2023', color: 'secondary' ,color1:"primary",ckeck: checkbox },
    { id: 2,avatarImages: ["../../assets/images/faces/12.jpg", "../../assets/images/faces/11.jpg"], number: '+4', task: 'New Project Buleprint', taskid: 'SPK - 04', priority: 'High', status: 'Inprogress', assigndate: '05-06-2023', duedate: '15-06-2023', color: 'danger' ,color1:"secondary", ckeck: checked },
    { id: 3,avatarImages: ["../../assets/images/faces/5.jpg", "../../assets/images/faces/9.jpg", "../../assets/images/faces/13.jpg"], number: '+5', task: 'Server Side Validation', taskid: 'SPK - 11', priority: 'Low', status: 'Pending', assigndate: '12-06-2023', duedate: '16-06-2023', color: 'success' ,color1:"warning", ckeck: checkbox },
    { id: 4, avatarImages: ["../../assets/images/faces/2.jpg", "../../assets/images/faces/8.jpg", "../../assets/images/faces/2.jpg"], number: '+2', task: 'New Plugin Development', taskid: 'SPK - 24', priority: 'Low', status: 'Completed', assigndate: '08-06-2023', duedate: '17-06-2023', color: 'success' ,color1:"success", ckeck: checkbox },
    { id: 5, avatarImages: ["../../assets/images/faces/10.jpg", "../../assets/images/faces/15.jpg"], number: '+3', task: 'Designing New Authentication Page', taskid: 'SPK - 16', priority: 'Medium', status: 'Inprogress', assigndate: '03-06-2023', duedate: '08-06-2023', color: 'secondary' ,color1:"secondary", ckeck: checked },
    { id: 6, avatarImages: ["../../assets/images/faces/12.jpg"], number: '+1', task: 'Documentation For New Template', taskid: 'SPK - 07', priority: 'High', status: 'New', assigndate: ' 12-06-2023', duedate: '25-06-2023', color: 'danger' ,color1:"primary", ckeck: checked },
    { id: 7, avatarImages: ["../../assets/images/faces/11.jpg","../../assets/images/faces/1.jpg","../../assets/images/faces/10.jpg"], number: '+1', task: 'Updating Old UI', taskid: 'SPK - 13', priority: 'Low', status: 'Completed', assigndate: '06-06-2023', duedate: '12-06-2023', color: 'success' ,color1:"success", ckeck: checkbox },
    { id: 8, avatarImages: ["../../assets/images/faces/11.jpg","../../assets/images/faces/1.jpg","../../assets/images/faces/10.jpg"], number: '+2', task: 'Developing New Events In Plugins', taskid: 'SPK - 20', priority: 'High', status: 'Pending', assigndate: '14-06-2023', duedate: '19-06-2023', color: 'danger' ,color1:"warning", ckeck: checked },
    { id: 9, avatarImages: ["../../assets/images/faces/5.jpg","../../assets/images/faces/14.jpg","../../assets/images/faces/12.jpg","../../assets/images/faces/3.jpg"], number: '+1', task: 'Fixing Minor Ui Issues', taskid: 'SPK - 26', priority: 'Medium', status: 'Completed', assigndate: '11-06-2023', duedate: '18-06-2023', color: 'secondary' ,color1:"success", ckeck: checkbox },
    { id: 10, avatarImages: ["../../assets/images/faces/12.jpg","../../assets/images/faces/6.jpg"], number: '+4', task: 'Designing Of New Ecommerce Website', taskid: 'SPK - 32', priority: 'Low', status: 'Inprogress', assigndate: '03-06-2023', duedate: '09-06-2023', color: 'secondary' ,color1:"success", ckeck: checkbox },
]
