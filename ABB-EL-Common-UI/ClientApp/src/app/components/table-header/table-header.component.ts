import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

/* A modern JavaScript utility library delivering modularity, performance & extras. */
import * as _ from 'lodash';

interface Device {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'elcp-table-header',
  templateUrl: './table-header.component.html',
  styleUrls: ['./table-header.component.scss']
})




export class TableHeaderComponent implements OnInit {

  @Input() dataSource: Array<any>;
  @Output() toggleButton = new EventEmitter();
  filterList: Array<any>;

  constructor() { }
  devices: Device[] = [
    { value: 'device1', viewValue: 'Device1' },
    { value: 'device2', viewValue: 'Device2' },
    { value: 'device3', viewValue: 'Device3' }
  ];


  ngOnInit() {
  }

  /**
  *
  *
  * @param {string} filterParam
  * @memberof RealTimeCurrentsComponent
  * @description Based on toggle button selection (All/ Favourites),
  * Below method will filter in the data source.
  */
  displayFavour(filterParam: string) {
    if (filterParam === 'Favorites') {
      this.filterList = _.filter(this.dataSource, (object) => {
        if (object.icon) { return object; }
      });
      const active = 'Favorites';
      this.toggleButton.emit({ data: this.filterList, active : active });
    } else {
      const active = 'All';
      this.filterList = [...this.dataSource];
      this.toggleButton.emit({ data: this.filterList, active : active });
    }
  }
}
