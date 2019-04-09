import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EnvironmentService } from './environment.service';
import { PATH_WELCOME, PATH_DISCONNECT } from '../app.routes.constantes';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DisconnectService {

  constructor(private httpClient: HttpClient, private env: EnvironmentService, private router: Router) {
  }

  ngOnInit(): void { }

  setDisconnect() {
    this.httpClient.get(`${this.env.getPrivateShowcaseApiConfig().uri}/${PATH_DISCONNECT}/`);
    this.router.navigate([PATH_WELCOME]);
  }
}
