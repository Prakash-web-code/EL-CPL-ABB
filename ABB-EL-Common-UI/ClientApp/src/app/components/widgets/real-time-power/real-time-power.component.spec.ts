import { RealTimePowerComponent } from './real-time-power.component';
import { WidgetDetails } from '@appShared/models/dashboard.model';

const dataSource = [
    {
      'id': 'f26127b0-084a-4364-83de-a1c7b11e9347',
      'name': 'QG1-Trafo 1',
      'iL1': 144.0,
      'iL2': 170.0,
      'iL3': 128.0,
      'quality': 2,
      icon: true

    },
    {
      'id': '0f304277-8a15-4ad2-9467-f80aea6aad0e',
      'name': 'QG2-Trafo 2',
      'iL1': 140.0,
      'iL2': 166.0,
      'iL3': 123.0,
      'quality': 2,
      icon: false
    },
    {
      'id': 'f66c71bd-0114-455f-867b-c3251b766810',
      'name': 'QG3-Trafo 3',
      'iL1': 158.0,
      'iL2': 148.0,
      'iL3': 150.0,
      'quality': 2,
      icon: false
    },
    {
      'id': '524bbe55-71c6-4f53-92fc-17e38b16e1f3',
      'name': 'QG4-Trafo 4',
      'iL1': 0.0,
      'iL2': 0.0,
      'iL3': 0.0,
      'quality': 2,
      icon: true
    },
    {
      'id': '06b99a53-d77e-44f9-87f5-3d1bfaac439a',
      'name': 'Solar Roof',
      'iL1': 0.0,
      'iL2': 0.0,
      'iL3': 0.0,
      'quality': 2,
      icon: true
    },
    {
      'id': 'ebfcfe96-420f-478b-9615-5bb66ae3cd86',
      'name': 'UPS',
      'iL1': 26.0,
      'iL2': 47.0,
      'iL3': 49.0,
      'quality': 4,
      icon: true
    },
    {
      'id': '7268f1fd-f259-430e-b6e9-1a499ceafb9b',
      'name': 'UTA - NORD',
      'iL1': 77.0,
      'iL2': 72.0,
      'iL3': 73.0,
      'quality': 2,
      icon: false
    },
    {
      'id': 'e83103a6-634f-4c36-9c79-74ae1b21d29a',
      'name': 'UTA - SUD',
      'iL1': 86.0,
      'iL2': 83.0,
      'iL3': 82.0,
      'quality': 2,
      icon: false
    }
  ];
describe('RealTimePowerComponent', () => {
    let realtimepowerComponent : RealTimePowerComponent;

    beforeEach(() => {
        realtimepowerComponent = new RealTimePowerComponent();
    });

    it('RealTimePower paginationLogic', () => {
        realtimepowerComponent.paginationLogic(dataSource);
        expect(realtimepowerComponent.filledArray.length).toEqual(1);
    });

    it('RealTimePower pageChangeEvent', () => {
        var event = { value : true};
        realtimepowerComponent.dataSource = dataSource;
        realtimepowerComponent.pageChanged(event);
        expect(realtimepowerComponent.filterList.length).toEqual(8);
    });

    it('RealTimePower toggleButton', () => {
        var event = { data : dataSource};
        realtimepowerComponent.toggleButton(event);
        expect(realtimepowerComponent.filterList.length).toEqual(8);
    });
});

