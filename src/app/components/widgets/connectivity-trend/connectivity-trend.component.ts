import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import { HttpClient } from '@angular/common/http';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'elcp-connectivity-trend',
  templateUrl: './connectivity-trend.component.html',
  styleUrls: ['./connectivity-trend.component.scss']
})
export class ConnectivityTrendComponent implements OnInit {

  options:any = [
    {value: 'default', viewValue: 'Current year'},
    {value: 'default', viewValue: 'Current year'},
    {value: 'default', viewValue: 'Current year'},
    {value: 'default', viewValue: 'Current year'}
  ];
  public chartOptions: any = {
    chart: {
      type: 'column'
  },
  title: {
      text: ''
  },
  xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      title: {
        text: 'Period'
      }
  },
  yAxis: {
      min: 0,
      max: 40,
      tickInterval: 5,
      title: {
          text: 'Device'
      },
      stackLabels: {
          enabled: true,
          style: {
              fontWeight: 'bold',
              color: ( // theme
                  Highcharts.defaultOptions.title.style &&
                  Highcharts.defaultOptions.title.style.color
              ) || 'gray'
          }
      }
  },
  credits: {
    enabled: false
    },
  legend: {
      align: 'right',
      verticalAlign: 'top',
      backgroundColor:
          Highcharts.defaultOptions.legend.backgroundColor || 'white',
      shadow: false
  },
  tooltip: {
      headerFormat: '<b>{point.x}</b><br/>',
      pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
  },
  plotOptions: {
      column: {
          stacking: 'normal',
          dataLabels: {
              enabled: true
          }
      },
      series: {
        pointWidth: 20
    }
  },
  series: [{
      name: 'Gateway offline',
      data: [15, 3, 4, 7, 2, 5, 3, 4, 7, 2, 1,2]
  }, {
      name: 'Disconnected',
      data: [5, 2, 3, 2, 1,2, 2, 3, 2, 1,2,1]
  }, {
      name: 'Partially connected',
      data: [17, 4, 4, 2, 5,3, 30, 4, 2, 5,5,6],
  },
   {
    name: 'Connected',
    data: [3, 4, 4, 2, 5,3, 4, 4, 2, 5,5,6]
}]
 };
  constructor() { }

  ngOnInit() {
  }
}
