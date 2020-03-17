import { Component, OnInit, Input } from '@angular/core';
import { WidgetDetails } from '@appShared/models/dashboard.model';
interface Device {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'elcp-real-time-power',
  templateUrl: './real-time-power.component.html',
  styleUrls: ['./real-time-power.component.scss']
})
export class RealTimePowerComponent implements OnInit {
  @Input() widgetDetails: WidgetDetails;
  dataSource = [
  {
    'id': 'f26127b0-084a-4364-83de-a1c7b11e9347',
    'name': 'QG1-Trafo 1',
    'iL1': 144.0,
    'iL2': 170.0,
    'iL3': 128.0,
    'quality': 2
  },
  {
    'id': '0f304277-8a15-4ad2-9467-f80aea6aad0e',
    'name': 'QG2-Trafo 2',
    'iL1': 140.0,
    'iL2': 166.0,
    'iL3': 123.0,
    'quality': 2
  },
  {
    'id': 'f66c71bd-0114-455f-867b-c3251b766810',
    'name': 'QG3-Trafo 3',
    'iL1': 158.0,
    'iL2': 148.0,
    'iL3': 150.0,
    'quality': 2
  },
  {
    'id': '524bbe55-71c6-4f53-92fc-17e38b16e1f3',
    'name': 'QG4-Trafo 4',
    'iL1': 0.0,
    'iL2': 0.0,
    'iL3': 0.0,
    'quality': 2
  },
  {
    'id': '06b99a53-d77e-44f9-87f5-3d1bfaac439a',
    'name': 'Solar Roof',
    'iL1': 0.0,
    'iL2': 0.0,
    'iL3': 0.0,
    'quality': 2
  },
  {
    'id': 'ebfcfe96-420f-478b-9615-5bb66ae3cd86',
    'name': 'UPS',
    'iL1': 26.0,
    'iL2': 47.0,
    'iL3': 49.0,
    'quality': 4
  },
  {
    'id': '7268f1fd-f259-430e-b6e9-1a499ceafb9b',
    'name': 'UTA - NORD',
    'iL1': 77.0,
    'iL2': 72.0,
    'iL3': 73.0,
    'quality': 2
  },
  {
    'id': 'e83103a6-634f-4c36-9c79-74ae1b21d29a',
    'name': 'UTA - SUD',
    'iL1': 86.0,
    'iL2': 83.0,
    'iL3': 82.0,
    'quality': 2
  }
  ];

  
  columns = [
    {
      name: 'name',
      displayName: 'Device',
      type: 'string',
      sort: false
    },
    {
      name: 'iL1',
      displayName: 'P(KW)',
      type: 'string',
      sort: false
    },
    {
      name: 'iL3',
      displayName: 'Q(KVAR)',
      type: 'string',
      sort: false
    },
    {
      name: 'iL2',
      displayName: 'S(KVA)',
      type: 'string',
      sort: false
    },
    {
      name: '',
      displayName: '',
      type: 'icon',
    }
  ];

  constructor() { }
  devices: Device[] = [
    {value: 'device1', viewValue: 'Device1'},
    {value: 'device2', viewValue: 'Device2'},
    {value: 'device3', viewValue: 'Device3'}
  ];

  ngOnInit() {
  }

}
