import { Component, OnInit, Input } from '@angular/core';
import { WidgetDetails } from '@appShared/models/dashboard.model';

@Component({
  selector: 'elcp-analog-data-monitoring',
  templateUrl: './analog-data-monitoring.component.html',
  styleUrls: ['./analog-data-monitoring.component.scss']
})
export class AnalogDataMonitoringComponent implements OnInit {
  @Input() widgetDetails: WidgetDetails;
  chartOptions =  {   
    chart: {
       type: "spline"
    },
    title: {
       text: " "
    },
    // subtitle: {
    //    text: "Source: WorldClimate.com"
    // },
    xAxis:{
      title:{
        text:"Today"
     } ,
       categories:["00:00", "01:00", "02:00", "03:00", "04:00", "05:00",
          "06:00", "07:00", "08:00", "09:00","10:00", "11:00", "12:00", "13:00", "14:00", "15:00",
          "16:00", "17:00", "18:00", "19:00","20:00","21:00","22:00","23:00"]
    },
    yAxis: {          
       title:{
          text:"Total Active Power(AW)"
       } ,
       plotLines: [{
        value: 25,
        color: 'orange',
        // dashStyle: 'shortdash',
        width: 2,
        label: {
            text: 'peek line'
        }
    }]
    },
    tooltip: {
       valueSuffix:"AW"
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'top',
      // y: 30,
  
  },
  credits: {
    enabled: false
},
    series: [
       {
          name: 'Tokyo',
          data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2,26.5, 23.3, 18.3, 13.9, 9.6,7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2,26.5, 23.3, 18.3, 13.9]
       },
 
    
    ]
 };


  constructor() { }

  ngOnInit() {
  }

}
