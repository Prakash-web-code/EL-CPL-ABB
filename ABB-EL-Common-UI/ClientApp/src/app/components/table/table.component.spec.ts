import { TableComponent } from './table.component'
import { SimpleChanges, SimpleChange } from '@angular/core'
import { ColumnConfig } from './table.model';
import { DataSource } from '@angular/cdk/table';

describe('LoaderComponent', () => {
    let tableComponent: TableComponent;
    let simpleChange: SimpleChange;
    let simpleChanges: SimpleChanges;

    beforeEach(() => {
        tableComponent = new TableComponent();
        simpleChange = new SimpleChange(null,null,false);
    });

    it('should return list of column names', () => {
        const testColumns = [
            {
              name: 'energy',
              displayName: 'Energy',
              type: 'string',
              sort: false
            },
            {
              name: 'energyPrice',
              displayName: 'Energy Price',
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

          tableComponent.columns = <any>testColumns;
          tableComponent.ngOnInit();
          expect(tableComponent.displayedColumns).toContain('energy');
          expect(tableComponent.displayedColumns).toContain('energyPrice');
          expect(tableComponent.displayedColumns).toContain('icon');
    });

    it('should return column names based on index', () => {
        const testColumns = [
            {
              displayName: 'Energy',
              type: 'string',
              sort: false
            },
            {
              displayName: 'Energy Price',
              type: 'string',
              sort: false
            },
            {
              displayName: '',
              type: 'Icon',
              sort: false,
              isIcon: true,
            }
          ];

          tableComponent.columns = <any>testColumns;
          tableComponent.ngOnInit();
          expect(tableComponent.displayedColumns).toContain('col0');
          expect(tableComponent.displayedColumns).toContain('col1');
          expect(tableComponent.displayedColumns).toContain('col2');
    });

    it('ngOnChanges', () => {
        const testDataSource = [
            {
              'id': 'd3a3c2e1-1467-479e-ba3d-5b0355d2afbf',
              'elementId': 'Custom:d3a3c2e1-1467-479e-ba3d-5b0355d2afbf:a09fe0a1-b981-4e04-aeb5-2fa9ce3a9be1',
              'name': 'Total',
              'isDevice': false,
              'energy': 3893.0,
              'energyPrice': 1005.9512,
              'quality': 1,
              'icon': true
            },
            {
              'id': '8b32982d-dc29-4eb5-97fe-c50f954546fc',
              'elementId': 'Custom:8b32982d-dc29-4eb5-97fe-c50f954546fc:a09fe0a1-b981-4e04-aeb5-2fa9ce3a9be1',
              'name': 'Group 1LVL 2',
              'isDevice': false,
              'energy': 1320.0,
              'energyPrice': 341.0880,
              'quality': 1,
              'icon': true
            }
        ];
        tableComponent.ngOnChanges({data: new SimpleChange(null, null,false)});
        expect(tableComponent.dataSource).toEqual(undefined);
    })
})
