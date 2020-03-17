import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap} from 'rxjs/operators';
import { IDonut } from './health-overview-interface';
 
@Injectable({
    providedIn: 'root'
})
 
export class RestApiService {
 
   public healthOverview = {
    "data": [
            {
    "headerTitle": "Health Overview",
    "chartValue": "150",
    "subTitle": "Total Assets",
    "chartData": [  {
    "name": "120 Active",
    "value": 86,
    "color": "#0CA919"
       },
      {
         "name": "3 Warnings",
         "value": 8,
        "color": "#FF7300"
          },
      {
        "name": "1 Critical",
        "value": 1,
        "color": "#F03040"
         },
        {
        "name": "26 Inactive",
        "value": 5,
        "color": "#DBDBDB"
                                                                                }                                                                        
      ],
     "name": "Assets Sharing",
    "ABBVoice": "Planned Service",
    "ABBVoice0": "Current Year",
    "ABBVoice1": "Current Month",
    "ABBVoice2": "23",
    "ABBVoice3": "70",
    "ABBVoice4": "3"
            }
        ]
    };
 
    constructor(private http: HttpClient) { }
    getData() {
        return this.healthOverview;
      
            
    }  
 
    private handleError(err: HttpErrorResponse) {
        let errMessage = '';
 
        if (err.error instanceof ErrorEvent) {
            errMessage = `An error occured: ${err.error.message}`;
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        return throwError(errMessage);
    }
}