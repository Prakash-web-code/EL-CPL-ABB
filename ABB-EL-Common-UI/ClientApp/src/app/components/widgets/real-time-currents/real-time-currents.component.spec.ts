import { RealTimeCurrentsComponent } from './real-time-currents.component';
import { WidgetDetails } from '@appShared/models/dashboard.model';
import { MatPaginatorIntl } from '@angular/material';

const dataSource = [
    {
      'id': 'f26127b0-084a-4364-83de-a1c7b11e9347',
      'name': 'QG1-Trafo 1',
      'iL1': 144.0,
      'iL2': 170.0,
      'iL3': 128.0,
      'quality': 2,
      'icon': true
    },
    {
      'id': '0f304277-8a15-4ad2-9467-f80aea6aad0e',
      'name': 'QG2-Trafo 2',
      'iL1': 140.0,
      'iL2': 166.0,
      'iL3': 123.0,
      'quality': 2,
      'icon': false
    },
    {
      'id': 'f66c71bd-0114-455f-867b-c3251b766810',
      'name': 'QG3-Trafo 3',
      'iL1': 158.0,
      'iL2': 148.0,
      'iL3': 150.0,
      'quality': 2,
      'icon': true
    },
    {
      'id': '524bbe55-71c6-4f53-92fc-17e38b16e1f3',
      'name': 'QG4-Trafo 4',
      'iL1': 0.0,
      'iL2': 0.0,
      'iL3': 0.0,
      'quality': 2,
      'icon': false
    },
    {
      'id': '06b99a53-d77e-44f9-87f5-3d1bfaac439a',
      'name': 'Solar Roof',
      'iL1': 0.0,
      'iL2': 0.0,
      'iL3': 0.0,
      'quality': 2,
      'icon': true
    },
    {
      'id': 'ebfcfe96-420f-478b-9615-5bb66ae3cd86',
      'name': 'UPS',
      'iL1': 26.0,
      'iL2': 47.0,
      'iL3': 49.0,
      'quality': 4,
      'icon': true
    },
    {
      'id': '7268f1fd-f259-430e-b6e9-1a499ceafb9b',
      'name': 'UTA - NORD',
      'iL1': 77.0,
      'iL2': 72.0,
      'iL3': 73.0,
      'quality': 2,
      'icon': false
    },
    {
      'id': 'e83103a6-634f-4c36-9c79-74ae1b21d29a',
      'name': 'UTA - SUD',
      'iL1': 86.0,
      'iL2': 83.0,
      'iL3': 82.0,
      'quality': 2,
      'icon': true
    },
    {
      'id': 'f26127b0-084a-4364-83de-a1c7b11e9347',
      'name': 'QG1-Trafo 1',
      'iL1': 144.0,
      'iL2': 170.0,
      'iL3': 128.0,
      'quality': 2,
      'icon': true
    },
    {
      'id': '0f304277-8a15-4ad2-9467-f80aea6aad0e',
      'name': 'QG2-Trafo 2',
      'iL1': 140.0,
      'iL2': 166.0,
      'iL3': 123.0,
      'quality': 2,
      'icon': false
    },
    {
      'id': 'f66c71bd-0114-455f-867b-c3251b766810',
      'name': 'QG3-Trafo 3',
      'iL1': 158.0,
      'iL2': 148.0,
      'iL3': 150.0,
      'quality': 2,
      'icon': true
    },
    {
      'id': '524bbe55-71c6-4f53-92fc-17e38b16e1f3',
      'name': 'QG4-Trafo 4',
      'iL1': 0.0,
      'iL2': 0.0,
      'iL3': 0.0,
      'quality': 2,
      'icon': false
    },
    {
      'id': '06b99a53-d77e-44f9-87f5-3d1bfaac439a',
      'name': 'Solar Roof',
      'iL1': 0.0,
      'iL2': 0.0,
      'iL3': 0.0,
      'quality': 2,
      'icon': false
    },
    {
      'id': 'ebfcfe96-420f-478b-9615-5bb66ae3cd86',
      'name': 'UPS',
      'iL1': 26.0,
      'iL2': 47.0,
      'iL3': 49.0,
      'quality': 4,
      'icon': false
    },
    {
      'id': '7268f1fd-f259-430e-b6e9-1a499ceafb9b',
      'name': 'UTA - NORD',
      'iL1': 77.0,
      'iL2': 72.0,
      'iL3': 73.0,
      'quality': 2,
      'icon': false
    },
    {
      'id': 'e83103a6-634f-4c36-9c79-74ae1b21d29a',
      'name': 'UTA - SUD',
      'iL1': 86.0,
      'iL2': 83.0,
      'iL3': 82.0,
      'quality': 2,
      'icon': true
    }
  ];


describe('RealTimeCurrentsComponent', () => {
    let realtimecurrentsComponent : RealTimeCurrentsComponent;

    beforeEach(() => {
        realtimecurrentsComponent = new RealTimeCurrentsComponent();
    });

    it('RealTimeCurrents paginationLogic', () => {
        realtimecurrentsComponent.paginationLogic(dataSource);
        expect(realtimecurrentsComponent.filledArray.length).toEqual(2);
    });

    it('RealTimeCurrents pageChangeEvent', () => {
        var event = { value : true};
        realtimecurrentsComponent.toggleList['active'] = "Favorites";
        realtimecurrentsComponent.toggleList['data'] = dataSource;
        realtimecurrentsComponent.pageChanged(event);
        expect(realtimecurrentsComponent.filterList.length).toEqual(9);
    });

    it('RealTimeCurrents pageChangeEventCase', () => {
        var event = { value : true};
        realtimecurrentsComponent.toggleList['data'] = dataSource;
        realtimecurrentsComponent.pageChanged(event);
        expect(realtimecurrentsComponent.filterList.length).toEqual(9);
    });

    it('RealTimeCurrents toggleButton', () => {
        var event = { data : dataSource};
        realtimecurrentsComponent.toggleList = null;
        realtimecurrentsComponent.toggleButton(event);
        expect(realtimecurrentsComponent.toggleList.length).toEqual(undefined);
    });

})
