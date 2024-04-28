import {Component, OnInit} from '@angular/core';
import {HighchartsChartModule} from "highcharts-angular";
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-area-chart',
  standalone: true,
  imports: [HighchartsChartModule],
  templateUrl: './area-chart.component.html',
  styleUrl: './area-chart.component.scss'
})


export class AreaChartComponent {
  highcharts = Highcharts;
  chartOptions : Highcharts.Options = {
    chart: {
      type: 'spline',
      backgroundColor: '#2a2a2b',
      style: {
        fontFamily: 'Arial, sans-serif'
      }
    },
    title: {
      text: 'Page access',
      style: {
        color: '#FFF'
      }
    },
    xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      labels: {
        style: {
          color: '#DDD'
        }
      }
    },
    yAxis: {
      title: {
        text: 'No. access',
        style: {
          color: '#DDD'
        }
      },
      labels: {
        style: {
          color: '#DDD'
        }
      }
    },
    tooltip: {
      valueSuffix: ' visits',
      backgroundColor: 'rgba(0, 0, 0, 0.85)',
      style: {
        color: '#FFF'
      }
    },
    legend: {
      itemStyle: {
        color: '#FFF' // Set legend label color to white
      }
    },
    series: <Highcharts.SeriesOptionsType[]> [
      {
        type: 'spline',
        name: 'home',
        data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
        color: '#FFA500'
      },
      {
        type: 'spline',
        name: 'login',
        data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5],
        color: '#00FFFF'
      },
      {
        type: 'spline',
        name: 'register',
        data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0],
        color: '#FF6347'
      },
      {
        type: 'spline',
        name: 'checkout',
        data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8],
        color: '#ADFF2F'
      }
    ]
  };
}





