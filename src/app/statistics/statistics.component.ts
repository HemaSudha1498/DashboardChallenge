import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto'
@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {

  ngOnInit(): void {

    let blue = "rgba(75,106,225,255)"
    let lightBlue = 'rgba(192,204,254,255)'

    const lineChartConfig: any = {
      type: 'line',
      data: {
        labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        datasets: [
          {
            label: 'All Days',
            data: [0, 20, 15, 30, 25, 40, 50],
            borderColor: blue
          }
        ]
      },
      options: {
        scales: {
          x: {
            grid: {
              display: false, // Set to false to hide horizontal grid lines
            }
          }
        },
        animations: {
          tension: {
            from: 0.3,
            to: 0.3
          }
        },
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
            labels: {
              font: {
                size: 14,
                family: 'Poppins'
              }
            }
          }
        }
      },
    }

    const barChartConfig: any = {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
          {
            label: 'Income',
            data: [40, 100, 60, 30, 20, 90, 20, 5, 50, 100, 60, 30],
            backgroundColor: blue,
            barThickness: 5,
            borderRadius: 5
          },
          {
            label: 'Borrow',
            data: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
            backgroundColor: lightBlue,
            barThickness: 5,
            borderRadius: 5
          }
        ],

      },
      options: {
        responsive: true,
        scales: {
          x: {
            stacked: true,
            grid: {
              display: false, // Set to false to hide horizontal grid lines
            }
          },
          y: {
            stacked: true
          }
        },
        plugins: {
          legend: {
            position: 'top',
            labels: {
              font: {
                size: 14,
                family: 'Poppins'
              },
              usePointStyle: true,
              pointStyle: 'rect',
            }
          }
        }
      }
    }

    const doughnutChartConfigin: any = {
      type: 'doughnut',
      data: {
        labels: [
          'Men',
          'Electronics',
          'Women'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [300, 50, 100],
          backgroundColor: [
            blue,
            'rgba(130,170,254,255)',
            lightBlue
          ],
          hoverOffset: 4,
          cutout: 110,
          radius: 90
        }]
      },
      options: {
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              font: {
                size: 12,
                family: 'Poppins'
              },
              usePointStyle: true,
              pointStyle: 'circle',
            }
          }
        }
      }
    }

    //line graph - statistics
    var ctx: any = document.getElementById('statistics');
    new Chart(ctx, lineChartConfig);

    //bar chart - balance
    var ctx_1: any = document.getElementById('balance');
    new Chart(ctx_1, barChartConfig);

    //doughnut chart - products
    var ctx_2: any = document.getElementById('products');
    new Chart(ctx_2, doughnutChartConfigin)
  }
}
