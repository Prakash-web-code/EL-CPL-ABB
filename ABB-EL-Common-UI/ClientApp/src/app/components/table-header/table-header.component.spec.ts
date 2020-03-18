import { TableHeaderComponent } from './table-header.component'
import { TableComponent } from '../table/table.component';

describe('TableHeaderComponent', () => {
    let tableheaderComponent: TableHeaderComponent;

    beforeEach(() => {
        tableheaderComponent = new TableHeaderComponent();
    });


    it('display favourites', () => {
        const testDataSource = [
            {
              'id': 'f26127b0-084a-4364-83de-a1c7b11e9347',
              'name': 'test1',
              'iL1': 144.0,
              'iL2': 170.0,
              'iL3': 128.0,
              'quality': 2,
              'icon': true
            },
            {
              'id': '0f304277-8a15-4ad2-9467-f80aea6aad0e',
              'name': 'jasmine',
              'iL1': 140.0,
              'iL2': 166.0,
              'iL3': 123.0,
              'quality': 2,
              'icon': false
            },
            {
                'id': '0f304277-8a15-4ad2-9467-f80aea6aad0e',
                'name': 'krma',
                'iL1': 140.0,
                'iL2': 166.0,
                'iL3': 123.0,
                'quality': 2,
                'icon': false
              }
        ];
        tableheaderComponent.dataSource = testDataSource;
        tableheaderComponent.displayFavour("Favorites");
        expect(tableheaderComponent.filterList.length).toEqual(1);

        tableheaderComponent.displayFavour("All");
        expect(tableheaderComponent.filterList.length).toEqual(3);
    })


})
