import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'elcp-dynamic-chart',
  templateUrl: './dynamic-chart.component.html',
  styleUrls: ['./dynamic-chart.component.scss']
})
export class DynamicChartComponent implements OnInit {
     @Input() chartOptions: Array<any>;
  highcharts = Highcharts;
//   chartOptions = this.dataSource;

  constructor() {
     console.log(this.chartOptions)
   }

  ngOnInit() {
  }

}
