import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import { HttpClient } from '@angular/common/http';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'elcp-device-health',
  templateUrl: './device-health.component.html',
  styleUrls: ['./device-health.component.scss']
})
export class DeviceHealthComponent implements OnInit {

  options:any = [
    {value: 'default', viewValue: 'Current year'},
    {value: 'default', viewValue: 'Current year'},
    {value: 'default', viewValue: 'Current year'},
    {value: 'default', viewValue: 'Current year'}
  ];
  public chartOptions: any = {
    chart: {
      type: 'bar'
  },
  title: {
      text: ''
  },
  xAxis: {
      categories: ['Unknown', '0-10 years', '10-20 years', '20-30 years', '30-40 years', '>40 years']
  },
  yAxis: {
      min: 0,
      tickInterval: 1,
      title: {
          enabled: false
      },
      stackLabels: {
        enabled: true,
        style: {
            fontWeight: 'bold',
            color:'gray'
        }
     }
  },
  legend: {
      align: 'right',
      verticalAlign: 'top'
  },
  credits: {
    enabled: false
    },
  plotOptions: {
      series: {
          stacking: 'normal',
          pointWidth: 15
      }
  },
  series: [{
      name: 'High',
      data: [5, 3, 4, 7, 2,7]
  }, {
      name: 'Medium',
      data: [2, 2, 3, 2, 1,7]
  }, {
      name: 'Low',
      data: [3, 4, 4, 2, 5,7]
  },
  {
    name: 'Inactive',
    data: [3, 4, 4, 2, 5,7]
}]
 };
  constructor() { }

  ngOnInit() {
  }

}
