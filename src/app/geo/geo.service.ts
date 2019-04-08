import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

const PATH_BACK = 'http://localhost:8080';
const PATH_COMMUNES = 'communes/'
const PATH_DEPARTEMENTS = 'departements/'

@Injectable({
  providedIn: 'root'
})
export class GeoService {

  constructor(private httpClient: HttpClient) { }

  getCommunes(cityToFind: string): Observable<any> {
    let params = new HttpParams().set('nom', cityToFind);
    return this.httpClient.get(`${PATH_BACK}/${PATH_COMMUNES}`, { params: params });
  }

  getDepartements(departementsToFind: string){
    let params = new HttpParams().set('nom', departementsToFind);
    return this.httpClient.get(`${PATH_BACK}/${PATH_DEPARTEMENTS}`, { params: params });
  }
}
