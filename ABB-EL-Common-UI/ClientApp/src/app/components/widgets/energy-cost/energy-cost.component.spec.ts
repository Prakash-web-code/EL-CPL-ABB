import { EnergyCostComponent } from './energy-cost.component'
import { WidgetDetails } from '@appShared/models/dashboard.model';

const  dataSource = [
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
    },
    {
      'id': 'fa5b80bf-fb13-420f-bbbb-11683a21510c',
      'elementId': 'Custom:fa5b80bf-fb13-420f-bbbb-11683a21510c:a09fe0a1-b981-4e04-aeb5-2fa9ce3a9be1',
      'name': 'Group 2 LVL 2',
      'isDevice': false,
      'energy': 6390.0,
      'energyPrice': 1651.1760,
      'quality': 1,
      'icon': true
    },
    {
      'id': '08926415-4e46-428c-9b48-b8514fcba9a2',
      'elementId': 'Custom:08926415-4e46-428c-9b48-b8514fcba9a2:a09fe0a1-b981-4e04-aeb5-2fa9ce3a9be1',
      'name': 'my gruoup',
      'isDevice': false,
      'energy': 2573.0,
      'energyPrice': 664.8632,
      'quality': 1
    },
    {
      'id': '3702d6f2-4e62-4649-83a7-10ec3d532dac',
      'elementId': 'Custom:3702d6f2-4e62-4649-83a7-10ec3d532dac:a09fe0a1-b981-4e04-aeb5-2fa9ce3a9be1',
      'name': 'Example',
      'isDevice': false,
      'energy': 1244.0,
      'energyPrice': 321.4496,
      'quality': 1
    },
    {
      'id': 'fa2dd47a-4e38-4147-8709-8b9f7286c121',
      'elementId': 'Runtime:Generators:a09fe0a1-b981-4e04-aeb5-2fa9ce3a9be1',
      'name': 'Plant generators',
      'isDevice': false,
      'energy': 76.0,
      'energyPrice': 19.6384,
      'quality': 1,
      'icon': true
    },
    {
      'id': 'df831512-d822-4d11-a101-c1b6d68fac9c',
      'elementId': 'Custom:df831512-d822-4d11-a101-c1b6d68fac9c:a09fe0a1-b981-4e04-aeb5-2fa9ce3a9be1',
      'name': 'Air Conditioning System',
      'isDevice': false,
      'energy': 1372.0,
      'energyPrice': 354.5248,
      'quality': 1,
      'icon': true
    },
    {
      'id': 'd3a3c2e1-1467-479e-ba3d-5b0355d2afbf',
      'elementId': 'Custom:d3a3c2e1-1467-479e-ba3d-5b0355d2afbf:a09fe0a1-b981-4e04-aeb5-2fa9ce3a9be1',
      'name': 'Total',
      'isDevice': false,
      'energy': 3893.0,
      'energyPrice': 1005.9512,
      'quality': 1,
      'icon': false
    },
    {
      'id': '08926415-4e46-428c-9b48-b8514fcba9a2',
      'elementId': 'Custom:08926415-4e46-428c-9b48-b8514fcba9a2:a09fe0a1-b981-4e04-aeb5-2fa9ce3a9be1',
      'name': 'my gruoup',
      'isDevice': false,
      'energy': 2573.0,
      'energyPrice': 664.8632,
      'quality': 1
    },
    {
      'id': '3702d6f2-4e62-4649-83a7-10ec3d532dac',
      'elementId': 'Custom:3702d6f2-4e62-4649-83a7-10ec3d532dac:a09fe0a1-b981-4e04-aeb5-2fa9ce3a9be1',
      'name': 'Example',
      'isDevice': false,
      'energy': 1244.0,
      'energyPrice': 321.4496,
      'quality': 1
    },
    {
      'id': 'fa2dd47a-4e38-4147-8709-8b9f7286c121',
      'elementId': 'Runtime:Generators:a09fe0a1-b981-4e04-aeb5-2fa9ce3a9be1',
      'name': 'Plant generators',
      'isDevice': false,
      'energy': 76.0,
      'energyPrice': 19.6384,
      'quality': 1,
      'icon': true
    },
    {
      'id': 'df831512-d822-4d11-a101-c1b6d68fac9c',
      'elementId': 'Custom:df831512-d822-4d11-a101-c1b6d68fac9c:a09fe0a1-b981-4e04-aeb5-2fa9ce3a9be1',
      'name': 'Air Conditioning System',
      'isDevice': false,
      'energy': 1372.0,
      'energyPrice': 354.5248,
      'quality': 1,
      'icon': true
    },
    {
      'id': 'd3a3c2e1-1467-479e-ba3d-5b0355d2afbf',
      'elementId': 'Custom:d3a3c2e1-1467-479e-ba3d-5b0355d2afbf:a09fe0a1-b981-4e04-aeb5-2fa9ce3a9be1',
      'name': 'Total',
      'isDevice': false,
      'energy': 3893.0,
      'energyPrice': 1005.9512,
      'quality': 1,
      'icon': false
    },
    {
      'id': '3702d6f2-4e62-4649-83a7-10ec3d532dac',
      'elementId': 'Custom:3702d6f2-4e62-4649-83a7-10ec3d532dac:a09fe0a1-b981-4e04-aeb5-2fa9ce3a9be1',
      'name': 'Example',
      'isDevice': false,
      'energy': 1244.0,
      'energyPrice': 321.4496,
      'quality': 1
    },
    {
      'id': 'fa2dd47a-4e38-4147-8709-8b9f7286c121',
      'elementId': 'Runtime:Generators:a09fe0a1-b981-4e04-aeb5-2fa9ce3a9be1',
      'name': 'Plant generators',
      'isDevice': false,
      'energy': 76.0,
      'energyPrice': 19.6384,
      'quality': 1,
      'icon': true
    },
    {
      'id': 'df831512-d822-4d11-a101-c1b6d68fac9c',
      'elementId': 'Custom:df831512-d822-4d11-a101-c1b6d68fac9c:a09fe0a1-b981-4e04-aeb5-2fa9ce3a9be1',
      'name': 'Air Conditioning System',
      'isDevice': false,
      'energy': 1372.0,
      'energyPrice': 354.5248,
      'quality': 1,
      'icon': true
    },
    {
      'id': 'd3a3c2e1-1467-479e-ba3d-5b0355d2afbf',
      'elementId': 'Custom:d3a3c2e1-1467-479e-ba3d-5b0355d2afbf:a09fe0a1-b981-4e04-aeb5-2fa9ce3a9be1',
      'name': 'Total',
      'isDevice': false,
      'energy': 3893.0,
      'energyPrice': 1005.9512,
      'quality': 1,
      'icon': false
    },
    {
      'id': '3702d6f2-4e62-4649-83a7-10ec3d532dac',
      'elementId': 'Custom:3702d6f2-4e62-4649-83a7-10ec3d532dac:a09fe0a1-b981-4e04-aeb5-2fa9ce3a9be1',
      'name': 'Example',
      'isDevice': false,
      'energy': 1244.0,
      'energyPrice': 321.4496,
      'quality': 1
    },
    {
      'id': 'fa2dd47a-4e38-4147-8709-8b9f7286c121',
      'elementId': 'Runtime:Generators:a09fe0a1-b981-4e04-aeb5-2fa9ce3a9be1',
      'name': 'Plant generators',
      'isDevice': false,
      'energy': 76.0,
      'energyPrice': 19.6384,
      'quality': 1,
      'icon': true
    },
    {
      'id': 'df831512-d822-4d11-a101-c1b6d68fac9c',
      'elementId': 'Custom:df831512-d822-4d11-a101-c1b6d68fac9c:a09fe0a1-b981-4e04-aeb5-2fa9ce3a9be1',
      'name': 'Air Conditioning System',
      'isDevice': false,
      'energy': 1372.0,
      'energyPrice': 354.5248,
      'quality': 1,
      'icon': true
    },
    {
      'id': 'd3a3c2e1-1467-479e-ba3d-5b0355d2afbf',
      'elementId': 'Custom:d3a3c2e1-1467-479e-ba3d-5b0355d2afbf:a09fe0a1-b981-4e04-aeb5-2fa9ce3a9be1',
      'name': 'Total',
      'isDevice': false,
      'energy': 3893.0,
      'energyPrice': 1005.9512,
      'quality': 1,
      'icon': false
    },
    {
      'id': '3702d6f2-4e62-4649-83a7-10ec3d532dac',
      'elementId': 'Custom:3702d6f2-4e62-4649-83a7-10ec3d532dac:a09fe0a1-b981-4e04-aeb5-2fa9ce3a9be1',
      'name': 'Example',
      'isDevice': false,
      'energy': 1244.0,
      'energyPrice': 321.4496,
      'quality': 1
    },
    {
      'id': 'fa2dd47a-4e38-4147-8709-8b9f7286c121',
      'elementId': 'Runtime:Generators:a09fe0a1-b981-4e04-aeb5-2fa9ce3a9be1',
      'name': 'Plant generators',
      'isDevice': false,
      'energy': 76.0,
      'energyPrice': 19.6384,
      'quality': 1,
      'icon': true
    },
    {
      'id': 'df831512-d822-4d11-a101-c1b6d68fac9c',
      'elementId': 'Custom:df831512-d822-4d11-a101-c1b6d68fac9c:a09fe0a1-b981-4e04-aeb5-2fa9ce3a9be1',
      'name': 'Air Conditioning System',
      'isDevice': false,
      'energy': 1372.0,
      'energyPrice': 354.5248,
      'quality': 1,
      'icon': true
    },
    {
      'id': 'd3a3c2e1-1467-479e-ba3d-5b0355d2afbf',
      'elementId': 'Custom:d3a3c2e1-1467-479e-ba3d-5b0355d2afbf:a09fe0a1-b981-4e04-aeb5-2fa9ce3a9be1',
      'name': 'Total',
      'isDevice': false,
      'energy': 3893.0,
      'energyPrice': 1005.9512,
      'quality': 1,
      'icon': false
    }
  ];

describe('EnergyCostComponent', () => {
    let energeycostComponent : EnergyCostComponent;

    beforeEach(() => {
        energeycostComponent = new EnergyCostComponent();
    });

    it('paginationLogic', () => {
        energeycostComponent.paginationLogic(dataSource);
        expect(energeycostComponent.filledArray.length).toEqual(3);
    });

    it('should return filterList value', () => {
        expect(energeycostComponent.filterList.length).toEqual(9);
    });

    it('pageChangeEvent', () => {
        var event = { value : true};
        energeycostComponent.toggleList['active'] = "Favorites";
        energeycostComponent.toggleList['data'] = dataSource;
        energeycostComponent.pageChanged(event);
        expect(energeycostComponent.filterList.length).toEqual(9);
    });

    it('pageChangeEventCase', () => {
        var event = { value : true};
        energeycostComponent.toggleList['data'] = dataSource;
        energeycostComponent.pageChanged(event);
        expect(energeycostComponent.filterList.length).toEqual(9);
    });

    it('toggleButton', () => {
        var event = { data : dataSource};
        energeycostComponent.toggleList = null;
        energeycostComponent.toggleButton(event);
        expect(energeycostComponent.toggleList.length).toEqual(undefined);
    });
})