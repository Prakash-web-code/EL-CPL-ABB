import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'elcp-power-factor',
  templateUrl: './power-factor.component.html',
  styleUrls: ['./power-factor.component.scss']
})
export class PowerFactorComponent implements OnInit {
  options: any = [
    {value: '500w', viewValue: 'Lift power supply'},
    {value: '500w', viewValue: 'power supply'},
    {value: '500w', viewValue: 'power supply'}
  ];
  mainData: any = {
    day: 'Today',
    number: '0,97',
    property: 'Power Factor'

  }

  constructor() { }

  ngOnInit() {
  }

}
