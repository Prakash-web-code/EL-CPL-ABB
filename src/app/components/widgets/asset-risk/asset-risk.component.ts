import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import { HttpClient } from '@angular/common/http';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'elcp-asset-risk',
  templateUrl: './asset-risk.component.html',
  styleUrls: ['./asset-risk.component.scss']
})
export class AssetRiskComponent implements OnInit {

  options:any = [
    {value: 'default', viewValue: 'Select Manufacturer'},
    {value: 'default', viewValue: 'Select Manufacturer'},
    {value: 'default', viewValue: 'Select Manufacturer'},
    {value: 'default', viewValue: 'Select Manufacturer'}
  ];
  public chartOptions: any = {
    chart: {
      type: 'area'
  },
  credits: {
  enabled: false
  },
  legend: {
   align: 'right',
   verticalAlign: 'top'
  },
  xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      tickmarkPlacement: 'on',
      title: {
         text: 'Period'
      }
  },
  yAxis: {
    min: 0,
    max: 100,
    tickInterval: 20,
      labels: {
          format: '{value}%',
          text: 'Percentage'
      },
      title: {
          text: 'Percentage(%)'
      }
  },
  tooltip: {
      // pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.percentage:.1f}%</b> ({point.y:,.0f} millions)<br/>',
      // split: true
  },
  // plotOptions: {
  //     area: {
  //         stacking: 'percent',
  //         lineColor: '#ffffff',
  //         lineWidth: 1,
  //         marker: {
  //             lineWidth: 1,
  //             lineColor: '#ffffff'
  //         },
  //         accessibility: {
  //             pointDescriptionFormatter: function (point) {
  //                 function round(x) {
  //                   console.log(x)
  //                     return Math.round(x * 100) / 100;
  //                 }
  //                 return (point.index + 1) + ', ' + point.category + ', ' +
  //                     point.y + ' millions, ' + round(point.percentage) + '%, ' +
  //                     point.series.name;
  //             }
  //         }
  //     }
  // },
  series: [{
      name: 'Low',
      data: [100,100,100,100,100,100,100,100,100,100,100,100],
      color:'#4CAF50'
  }, {
      name: 'Medium',
      data: [60,60,60,60,60,60,60,60,60,60,60,60],
      color: '#FFA500',
      opacity: 0.7
  }, {
      name: 'High',
      data: [50,50,5,7,5,50,50,50,50,50,50,50],
      color: '#F08080',
      opacity:0.9
  }]
  }


  constructor() { }

  ngOnInit() {
  }

}
