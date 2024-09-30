import { Component, ViewChild, OnInit } from "@angular/core";
import { Chart, registerables } from 'node_modules/chart.js'
Chart.register(...registerables);
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexTooltip,
  ApexFill,
  ApexResponsive

} from "ng-apexcharts";
import { routes } from "src/app/core/helpers/routes/routes";
/* eslint-disable @typescript-eslint/no-explicit-any */
export type ChartOptions = {
  series: ApexAxisChartSeries | any;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis | ApexYAxis[];
  legend: ApexLegend;
  tooltip: ApexTooltip;
  responsive: ApexResponsive[];
  fill: ApexFill;
  labels: string[];

};

@Component({
  selector: "app-admin-dashboard",
  templateUrl: "./admin-dashboard.component.html",
  styleUrls: ["./admin-dashboard.component.scss"],
})
export class AdminDashboardComponent {
  @ViewChild("chart") chart: ChartComponent | any;
  public chartOptions2: Partial<ChartOptions> | any;
  public chartOptions1: Partial<ChartOptions> | any;
  public layoutWidth = '1';
  public routes = routes;
  constructor() {
    this.chartOptions2 = {
      series: [
        {
          name: "Total Income",
          data: [120, 90, 60, 90, 60, 90,120],
          color: '#ff9b44',
        },
        {
          name: "Total Outcome",
          data: [85, 75, 57, 85, 61, 75,85],
          color: '#fc6075',
        },
        
      ],
      chart: {
        type: "bar",
        height: 350
      },
      grid: {
        xaxis: {
            lines: {
                show: false
            }
        },   
        yaxis: {
            lines: {
                show: true
            }
        }
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "70%",
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"]
      },
      xaxis: {
        categories: [
          "2006",
          "2008",
          "2010",
          "2012",
          "2013",
          "2014"
        ]
      },
      yaxis: {
        title: {
          text: "$ (thousands)"
        }
      },
      fill: {
        opacity: 1
      },
    };
    this.chartOptions1 = {
      series: [
        {
          name: "series1",
          data: [50, 75, 50, 75, 50, 75, 100],
          color: '#ff9b44',

        },
        {
          name: "series2",
          data: [95, 70, 40, 65, 40, 45, 41],
          color: '#fc6075',
        }
      ],
      chart: {
        height: 350,
        type: "line"
      },
      grid: {
        xaxis: {
            lines: {
                show: false
            }
        },   
        yaxis: {
            lines: {
                show: true
            }
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth"
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z"
        ]
        
      },
    };
   }
   ngOnInit(): void 
   {
     new Chart("agent-login-summary", {
       type: 'pie',
       data: {
         labels: ['Idle Time', 'Talk Time', 'Hold Time','Wrap Time', 'Ringing Time','Dialing Time','Break Time',],
         datasets: [{
           label: '',
           data: [50, 70, 100,120, 150, 170,60],
           backgroundColor: [
             'rgb(255, 99, 132)',
             'rgb(54, 162, 235)',
             'rgb(255, 205, 86)',
             'rgb(75, 192, 192)',
             'rgb(34, 153, 84)',
             'rgb(159, 226, 191)',
             'rgb(220, 118, 51)'
           ],
           
         }]
       },
       options: {
         scales: {
           y: {
             beginAtZero: true
           }
         }
       }
     });
 
     new Chart("hourly-call-chart", {
       type: 'bar',
       data: {
         labels: ['8-9', '9-10', '10-11','11-12', '12-13','13-14','14-15',],
         datasets: [{
           label: '',
           data: [50, 70, 100,120, 150, 170,60],
           backgroundColor: [
             'rgb(255, 99, 132)',
             'rgb(54, 162, 235)',
             'rgb(255, 205, 86)',
             'rgb(75, 192, 192)',
             'rgb(34, 153, 84)',
             'rgb(159, 226, 191)',
             'rgb(220, 118, 51)'
           ],
           
           
         }]
       },
       options: {
         scales: {
           y: {
             beginAtZero: true
           }
         }
       }
     });
 
    
     new Chart("agent-call-summary", {
       type: 'pie',
       data: {
         labels: ['Total', 'Answered', 'Not Answered','Callback',],
         datasets: [{
           label: 'Agent Call Summary',
           data: [150, 100, 40,10],
           backgroundColor: [
             'rgb(255, 99, 132)',
             'rgb(54, 162, 235)',
             'rgb(255, 205, 86)',
             'rgb(75, 192, 192)',
 
           ],
           
         }]
       },
       options: {
         scales: {
           y: {
             beginAtZero: true
           }
         }
       }
     });
 
 
 
     }
}
