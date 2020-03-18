import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import {  tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AssetpageService {

  /**
   *Creates an instance of PlantService.
   * @param {HttpClient} http
   * @memberof AssetpageService
   */
  constructor(private http: HttpClient) { }


/**
 *
 *
 * @memberof AssetpageService
 * @desc GET AllAssets from the server
 */

  getAllAssets(page: number, offset: number,id:any):Observable<any>{
    const url = `${environment.assetsURL}/${id}?page=${page}&offset=${offset}`;
    return this.http.get<any>(url)
      .pipe(
        tap(assetsDetails => assetsDetails)
      );
  }
}
