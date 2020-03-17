import { Component, OnInit, Input } from "@angular/core";
import * as Highcharts from "highcharts";
// import { IDonut } from'./health-overview-interface';
import { RestApiService } from "./health-overview-service";
import { WidgetDetails } from "@app/shared/models";
@Component({
  selector: "elcp-health-overview",
  templateUrl: "./health-overview.component.html",
  styleUrls: ["./health-overview.component.scss"]
})
export class HealthOverviewComponent implements OnInit {
  @Input() widgetDetails: WidgetDetails;

  healthOverview = {
    "data": [
            {
    "headerTitle": "Health Overview",
    "chartValue": "150",
    "subTitle": "Total Assets",
    "chartData": [  {
    "name": "120 Active",
    "value": 86,
    "color": "#0CA919"
       },
      {
         "name": "3 Warnings",
         "value": 8,
        "color": "#FF7300"
          },
      {
        "name": "1 Critical",
        "value": 1,
        "color": "#F03040"
         },
        {
        "name": "26 Inactive",
        "value": 5,
        "color": "#DBDBDB"
                                                                                }                                                                        
      ],
     "name": "Assets Sharing",
    "ABBVoice": "Planned Service",
    "ABBVoice0": "Current Year",
    "ABBVoice1": "Current Month",
    "ABBVoice2": "23",
    "ABBVoice3": "70",
    "ABBVoice4": "3"
            }
        ]
    };
  errorMessage: any;
  chartOptions: any;
  Donut: any;
  constructor(private DonutService: RestApiService) {
    this.getHighChart(this.healthOverview);

  }
  highcharts = Highcharts;
  getHighChart(chartValue: any): void {
    this.chartOptions = {
      chart: {
        backgroundColor: null,
        plotBorderWidth: null,
        plotBackgroundColor: null,
        plotShadow: false,
        height: 320,
        width: 320,
        style: {
          margin: "auto"
        }
      },
      title: {
        text: this.healthOverview.data[0].chartValue,
        align: "center",
        verticalAlign: "middle",
        y: 20,
        x: -55,
        style: {
          fontWeight: "bold",
          color: "#1F1F1F",
          fontSize: "44px",
          letterSpacing: "-3px"
        }
      },
      subtitle: {
        text: this.healthOverview.data[0].subTitle,
        align: "center",
        verticalAlign: "middle",
        y: 25,
        x: -45,
        style: {
          color: "#1F1F1F",
          fontSize: "14px"
        }
      },
      credits: {
        enabled: false
      },
      tooltip: {
        pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>"
      },
      plotOptions: {
        pie: {
          dataLabels: {
            enabled: false,
            distance: -100,
            style: {
              fontWeight: "bold",
              color: "red"
            }
          },
          startAngle: -360,
          endAngle: 360,
          center: ["48%", "45%"],
          size: "110%"
        }
      },
      legend: {
        layout: "vertical",
        align: "right",
        verticalAlign: "top",
        y: 80,
        x: 16,
        symbolHeight: 8,
        symbolWidth: 8,
        symbolRadius: 0
      },
      series: [
        {
          colorByPoint: true,
          data: chartValue.data[0].chartData.map(val => {
            return { name: val.name, y: val.value, color: val.color };
          }),
          type: "pie",
          name: chartValue.data[0].name,
          innerSize: "86%",
          showInLegend: true
        }
      ]
    };
  }
  ngOnInit(): void {

  }
}
