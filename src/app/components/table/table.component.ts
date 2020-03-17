import { Component, OnInit, ViewChild, Input, SimpleChanges } from '@angular/core';
import { MatSort, MatPaginator } from '@angular/material';
import { DataSource } from '@angular/cdk/table';
import { ColumnConfig } from './table.model';

@Component({
  selector: 'elcp-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() columns: ColumnConfig[];
  @Input() dataSource: Array<any>;
  @Input() pageSize: Number = 20;
  @Input() stickyHeader: Boolean = false;
  displayedColumns: string[];
  constructor() { }

  ngOnInit() {

    this.displayedColumns = this.columns.map((column, index) => this.prepareColumnName(column.name, index));

  }

  ngOnChanges(changes: SimpleChanges) {
    /* checking undefined condition */
    if (changes.dataSourceMain) {
      this.dataSource = changes.dataSourceMain.currentValue;
    }
  }

/**
 *
 *
 * @param {string} name
 * @param {number} columnNumber
 * @returns {string}
 * @memberof TableComponent
 */
prepareColumnName(name: string, columnNumber: number) {
    return name || 'col' + columnNumber;
  }
}
