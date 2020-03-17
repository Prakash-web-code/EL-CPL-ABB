import { Component, OnInit, Input } from '@angular/core';
import { WidgetDetails } from '@appShared/models/dashboard.model';
import { RestApiService } from '../health-overview/health-overview-service';
import * as Highcharts from 'highcharts';
export interface ISemiDonut {
  data: IData  
}

interface IChartData {
  name: string;
  value: number,
}

interface IData {
  title: string,
  chartData: IChartData[],
  header: string,
  ABBVoice: string,
  ABBVoice1: string,
  ABBVoice2: string,
  ABBVoice3: string
}
@Component({
  selector: 'elcp-power-generation',
  templateUrl: './power-generation.component.html',
  styleUrls: ['./power-generation.component.scss']
})
export class PowerGenerationComponent implements OnInit {
  @Input() widgetDetails: WidgetDetails;
  errorMessage: any;
  _donutData = '';
  chartOptions: any;
  semiDonut: ISemiDonut;
  powerGeneration={
    "data": 
        {
            "header": "Power Generations",
            "title": "11,25%",
            "width":"600",
            "chartData": [
                {
                    "name": "Power1",
                    "value": 30
                }
            ],
            "ABBVoice": "Site generator capacity",
            "ABBVoice1": "Generated Power",
            "ABBVoice2": "80,0kwp",
            "ABBVoice3": "9,0kw"
        }
   
  }
  ngOnInit(): void {
    this.getHighChart(this.powerGeneration);
  }

  // Display chart options
  getHighChart(chartValue: ISemiDonut): void {
    console.log(chartValue.data);
    this.chartOptions = {
      chart: {
        plotBackgroundColor: null,
        plotShadow: false,
        backgroundColor: null,
        width: 456,
        height: 200,
        justifyContent: "center"
      },
      accessibility: {
        point: {
          valueSuffix: '%'
        }
      },
      credits: {
        enabled: false
      },
      colors: ['#FFFFFF', '#D3D3D3'],

      title: {
        style: {
          color: 'white',
          font: '35px sans-serif'
        },
        text: chartValue.data.title,
        align: 'center',
        verticalAlign: 'middle',
        y: 40,
        x: -80
      },
      subtitle: {
        style: {
          color: 'white',
          font: '12px sans-serif',
        },
        text: chartValue.data.header,
        align: 'center',
        verticalAlign: 'middle',
        y: 48,
        x: -80
      },
      plotOptions: {
        pie: {
          dataLabels: {
            enabled: false,
            distance: -50,
            style: {
              fontWeight: 'bold',
              color: 'white'
            },
          },
          startAngle: -90,
          endAngle: 90,
          center: ['30%', '80%'],
          size: '120%',
        }
      },
      series: [{
        type: 'pie',
        name: 'Power Generation',
        innerSize: '95%',
        data:
        chartValue.data.chartData.map(val => {
            return { name: val.name, y: val.value }
          }),
      }]
    };
  }

  constructor(private semiDonutService: RestApiService) { }

  highcharts = Highcharts;

}
