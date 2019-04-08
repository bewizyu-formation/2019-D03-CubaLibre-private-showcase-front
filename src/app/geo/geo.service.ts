import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EnvironmentService } from '../services/environment.service';

const PATH_COMMUNES = '/communes';
const PATH_DEPARTEMENTS = '/departements';

@Injectable({
  providedIn: 'root'
})
export class GeoService {

  constructor(private httpClient: HttpClient, private env: EnvironmentService) { }

  getCommunes(cityToFind: string): Observable<any> {
    const params = new HttpParams().set('nom', cityToFind);
    return this.httpClient.get(`${this.env.getPrivateShowcaseApiConfig().uri}${PATH_COMMUNES}/`, { params: params });
  }

  getDepartements(departementsToFind: string) {
    const params = new HttpParams().set('nom', departementsToFind);
    return this.httpClient.get(`${this.env.getPrivateShowcaseApiConfig().uri}${PATH_DEPARTEMENTS}/`, { params: params });
  }
}
