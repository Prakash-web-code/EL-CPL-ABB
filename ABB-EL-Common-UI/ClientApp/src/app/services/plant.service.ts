import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PlantService {

  /**
   *Creates an instance of PlantService.
   * @param {HttpClient} http
   * @memberof PlantService
   */
  constructor(private http: HttpClient) { }


  /**
   *
   *
   * @memberof PlantService
   * @desc GET Plants from the server
   */
  getPlantList(page: number, offset: number): Observable<any> {
    const url = `${environment.plantsURL}?page=${page}&offset=${offset}`;
    return this.http.get<any>(url)
      .pipe(
        tap(plantsDetails => plantsDetails)
      );
  }

  getWidgetsList(): Array<any> {
    return [
      {
        'id': '5e92744c-7962-4e8c-b1b5-9676854ca46a',
        'settings': '{"deviceId":null,"navigationIds":null,"pageIndex":0,"summaryMode":"Favourites","favouriteDeviceIds":[]}',
        'templateName': 'RealTimeCurrents',
        'panelId': '0b503b5e-33d1-449a-afd4-19d964041892',
        'plantId': 'a09fe0a1-b981-4e04-aeb5-2fa9ce3a9be1',
        'templateId': 'a8737da4-8e97-4686-8599-7be33eb52910',
        'title': 'Real Time Currents',
        'templateSizes': [
          'size1x1'
        ],
        cols: 5, rows: 3
      },
      {
        'id': '0bf3fbcb-b69c-488d-bc9e-41efe031beac',
        'settings': '{"deviceId":"bd6a080a-9031-4ca0-bce7-970e03c663ae"}',
        'templateName': 'RealTimePower',
        'panelId': '0b503b5e-33d1-449a-afd4-19d964041892',
        'plantId': 'a09fe0a1-b981-4e04-aeb5-2fa9ce3a9be1',
        'templateId': 'c709b1c0-5f71-4de3-a5e7-1012b9f84af7',
        'title': 'Real Time Power',
        'templateSizes': [
          'size1x1'
        ],
        cols: 3, rows: 3
      },
      {
        'id': '8617d3ba-f5fb-4db8-994e-f03778109a9b',
        'settings': '{"period":"Yesterday","groupId":"PowerUsage:34394bb2-e5e5-4ed7-a469-b46e0287d16a:a09fe0a1-b981-4e04-aeb5-2fa9ce3a9be1","dateStart":null,"dateEnd":null}',
        'templateName': 'EnergyCost',
        'panelId': '0b503b5e-33d1-449a-afd4-19d964041892',
        'plantId': 'a09fe0a1-b981-4e04-aeb5-2fa9ce3a9be1',
        'templateId': '41fe2d0a-1d24-45af-9601-9330ca245efa',
        'title': 'Energy Cost',
        'templateSizes': [
          'size2x1'
        ],
        cols: 3, rows: 3
      },
      {
        'id': 'dc31fa1a-cb9d-49f2-b828-97b2395b51d4',
        'settings': '{"deviceId":"f26127b0-084a-4364-83de-a1c7b11e9347","period":"Yesterday","dateStart":null,"dateEnd":null}',
        'templateName': 'RealTimeVoltage',
        'panelId': '0b503b5e-33d1-449a-afd4-19d964041892',
        'plantId': 'a09fe0a1-b981-4e04-aeb5-2fa9ce3a9be1',
        'templateId': 'b183fa5e-e4eb-4e49-9e5b-1ef110e1d1ae',
        'title': 'Real Time Voltage',
        'templateSizes': [
          'size3x1'
        ],
        cols: 5, rows: 3
      }
    ];
  }
}
