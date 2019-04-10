import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EnvironmentService } from './environment.service';
import { PATH_WELCOME, PATH_LOGOUT } from '../app.routes.constantes';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor(private httpClient: HttpClient, private env: EnvironmentService, private router: Router) { }

  setDisconnect() {

    this.httpClient.get(`${this.env.getPrivateShowcaseApiConfig().uri}/logout/`)
      .subscribe(() => {
        this.router.navigate([PATH_WELCOME]);
      });
  }
}
