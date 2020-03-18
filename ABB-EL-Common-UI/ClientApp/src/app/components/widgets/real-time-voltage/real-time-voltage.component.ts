import { Component, OnInit, Input } from '@angular/core';
import { WidgetDetails } from '@app/shared/models/dashboard.model';

/* A modern JavaScript utility library delivering modularity, performance & extras. */
import * as _ from 'lodash';


@Component({
  selector: 'elcp-real-time-voltage',
  templateUrl: './real-time-voltage.component.html',
  styleUrls: ['./real-time-voltage.component.scss']
})
export class RealTimeVoltageComponent implements OnInit {
  @Input() widgetDetails: WidgetDetails;

  dataSource = [
    {
      'id': '23aae302-0fed-4087-922b-648019e743cc',
      'name': 'Breaker UPS',
      'u12': 0.0,
      'u23': 0.0,
      'u31': 0.0,
      'u1N': 0.0,
      'u2N': 0.0,
      'u3N': 0.0,
      'isAlternateVoltage': false,
      'quality': 4,
      icon: false
    },
    {
      'id': '2f88e3e6-220a-45c4-ba72-3bc1e83ccb79',
      'name': 'Charger A - fast',
      'u12': 397.0,
      'u23': 397.0,
      'u31': 397.0,
      'u1N': 229.0,
      'u2N': 229.0,
      'u3N': 229.0,
      'isAlternateVoltage': false,
      'quality': 2,
      icon: true
    },
    {
      'id': '92b64dc2-501f-46cc-9c41-3fbd552cc08a',
      'name': 'Charger B',
      'u12': 396.0,
      'u23': 397.0,
      'u31': 396.0,
      'u1N': 229.0,
      'u2N': 229.0,
      'u3N': 229.0,
      'isAlternateVoltage': false,
      'quality': 2,
      icon: false
    },
    {
      'id': 'be562891-c512-4178-9faa-7503353161de',
      'name': 'Charger C',
      'u12': 397.0,
      'u23': 397.0,
      'u31': 395.0,
      'u1N': 229.0,
      'u2N': 229.0,
      'u3N': 229.0,
      'isAlternateVoltage': false,
      'quality': 2,
      icon: true
    },
    {
      'id': '420889ad-f349-4716-8817-16e9a4bc6b74',
      'name': 'Charger D',
      'u12': 397.0,
      'u23': 398.0,
      'u31': 396.0,
      'u1N': 229.0,
      'u2N': 229.0,
      'u3N': 229.0,
      'isAlternateVoltage': false,
      'quality': 2,
      icon: false
    },
    {
      'id': '862bd0d2-f03b-4757-8ddf-92c315d11bab',
      'name': 'Charger E',
      'u12': 397.0,
      'u23': 398.0,
      'u31': 395.0,
      'u1N': 229.0,
      'u2N': 229.0,
      'u3N': 229.0,
      'isAlternateVoltage': false,
      'quality': 2,
      icon: true
    },
    {
      'id': '03ae5fb1-0fa0-4074-8ef6-14c1d51c7206',
      'name': 'EV Charger Bridge',
      'u12': 396.0,
      'u23': 396.0,
      'u31': 397.0,
      'u1N': null,
      'u2N': null,
      'u3N': null,
      'isAlternateVoltage': false,
      'quality': 2,
      icon: true
    },
    {
      'id': '03ae5fb1-0fa0-4074-8ef6-14c1d51c7206',
      'name': 'EV Charger Bridge',
      'u12': 396.0,
      'u23': 396.0,
      'u31': 397.0,
      'u1N': null,
      'u2N': null,
      'u3N': null,
      'isAlternateVoltage': false,
      'quality': 2,
      icon: true
    }];

  columns = [
    {
      name: 'name',
      displayName: 'Device',
      type: 'string',
      sort: false
    },
    {
      name: 'u12',
      displayName: 'U12(V)',
      type: 'string',
      sort: false
    },
    {
      name: 'u23',
      displayName: 'u23(V)',
      type: 'string',
      sort: false
    },
    {
      name: 'u31',
      displayName: 'u31(V)',
      type: 'string',
      sort: false
    },
    {
      name: 'icon',
      displayName: '',
      type: 'Icon',
      sort: false,
      isIcon: true,
    }
  ];

  filledArray: Array<string>;
  selectedPage: any = 1;

  filterList: Array<any>;


  constructor() {
    this.filterList = this.dataSource.slice(0, 9);
    this.paginationLogic();
  }

  paginationLogic() {
    const page = Math.ceil(_.size(this.dataSource) / 10);
    this.filledArray = new Array(page).fill('hello');
    console.log(this.filledArray);
  }

  pageChanged(event) {
    if (event && event.value) {
      const endPage = this.selectedPage * 10 - 1;
      const startPage = (this.selectedPage * 10) - 10;
       this.filterList = this.dataSource.slice(startPage, endPage );
    }
  }
  ngOnInit() {
  }

  
 /**
 *
 *
 * @param {*} event
 * @memberof EnergyCostComponent
 * @description Toggle button event Handler : Based on selection (All/Favourites) filtered will applied
 */
toggleButton(event: any) {
  if (event && _.hasIn(event, 'data')) {
    this.filterList = event['data'];
  }
}

}
