import { AssetpageService } from './assetpage.service';
import { of, Observable } from 'rxjs';
import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule, HttpClientXsrfModule, HttpClient } from '@angular/common/http';

describe('Assetpage Service', () => {
    let assetpageService : AssetpageService,
    mockassetHttp;
    beforeEach(() => {
      mockassetHttp = jasmine.createSpyObj('mockHttp',['post', 'get'])
      assetpageService = new AssetpageService(mockassetHttp);
      })

      describe('GetAllAssets', () => {
        it('should get assets list', () => {
          var data = {
            "AllAssetsData": {
              "Value": [
                {
                    "SlaveId": 75,
                    "Id": "917244c3-f596-4362-9190-c06d903166cd",
                    "Name": "Connectivity Module",
                    "Condition": "Warning",
                    "DeviceConnectivityStatus": "Unavailable",
                    "DeviceClass": "CircuitBreaker",
                    "Manufacturer": "ABB",
                    "SerialNumber": "616004540520W000",
                    "HealthIndex": "Good"
                },
                {
                    "SlaveId": 132,
                    "Id": "f26127b0-084a-4364-83de-a1c7b11e9347",
                    "Name": "QG1-Trafo 1",
                    "Condition": "Warning",
                    "DeviceConnectivityStatus": "Unavailable",
                    "DeviceClass": "CircuitBreaker",
                    "Manufacturer": "ABB",
                    "Model": "Ekip Touch",
                    "SerialNumber": "3D1025017440X010",
                    "HealthIndex": "Good"
                }
              ],
              "Code" : "Success",
              "Message": "Equipment retrieved successfully."
            }
          }
          mockassetHttp.get.and.returnValue(of(false));
          assetpageService.getAllAssets(1, 10,'a09fe0a1-b981-4e04-aeb5-2fa9ce3a9be1');
          expect(data.AllAssetsData.Value.length).toBe(2);
        })
    
        it('should call get assets with right URL', () => {
          mockassetHttp.get.and.returnValue(of(false));
          assetpageService.getAllAssets(1, 10, 'a09fe0a1-b981-4e04-aeb5-2fa9ce3a9be1');
          expect(mockassetHttp.get).toHaveBeenCalledWith('https://electrificationapi-ams-dev-01.azure-api.net/common/api/devices/a09fe0a1-b981-4e04-aeb5-2fa9ce3a9be1?page=1&offset=10');
    
        })
      })
})

describe('asset service mock', () => {
  let assetServcie : AssetpageService;
  let httpClientSpy : {get: jasmine.Spy};
  let expectedassets;

  beforeEach(() =>{
    TestBed.configureTestingModule({
      imports: [HttpClientModule,HttpClientXsrfModule],
      providers:[AssetpageService, HttpClient]  
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    assetServcie = new AssetpageService(<any> httpClientSpy);
  });

  it('should be created', inject([AssetpageService], (service: AssetpageService) => {
    expect(service).toBeTruthy();
  }));

  it('should return expected assets (HttpClient called once)', () => {
    const data = {
      "AllAssetsData": {
        "Value": [
          {
              "SlaveId": 75,
              "Id": "917244c3-f596-4362-9190-c06d903166cd",
              "Name": "Connectivity Module",
              "Condition": "Warning",
              "DeviceConnectivityStatus": "Unavailable",
              "DeviceClass": "CircuitBreaker",
              "Manufacturer": "ABB",
              "SerialNumber": "616004540520W000",
              "HealthIndex": "Good"
          },
          {
              "SlaveId": 132,
              "Id": "f26127b0-084a-4364-83de-a1c7b11e9347",
              "Name": "QG1-Trafo 1",
              "Condition": "Warning",
              "DeviceConnectivityStatus": "Unavailable",
              "DeviceClass": "CircuitBreaker",
              "Manufacturer": "ABB",
              "Model": "Ekip Touch",
              "SerialNumber": "3D1025017440X010",
              "HealthIndex": "Good"
          }
        ],
        "Code" : "Success",
        "Message": "Equipment retrieved successfully."
      }
    }
    httpClientSpy.get.and.returnValue(of(data));
    assetServcie.getAllAssets(1,10,'testid').subscribe(
      assets => expect(assets).toEqual(data, 'expected assets'),
      fail
    );
    expect(httpClientSpy.get.calls.count()).toBe(1,'one call');
  });
})

