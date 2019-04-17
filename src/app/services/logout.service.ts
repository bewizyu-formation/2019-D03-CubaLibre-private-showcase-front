import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EnvironmentService } from './environment.service';
import { PATH_WELCOME, PATH_LOGOUT, PATH_HOME } from '../app.routes.constantes';
import { Router } from '@angular/router';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor(private httpClient: HttpClient, private env: EnvironmentService, private router: Router, private userService: UserService) { }

  setDisconnect() {

    this.httpClient.get(`${this.env.getPrivateShowcaseApiConfig().uri}/logout/`)
      .subscribe(() => {
        localStorage.clear();
        this.userService.token = undefined;
        if (this.router.url === `/${PATH_WELCOME}`) {
          window.location.reload();
        }
        this.router.navigate([PATH_WELCOME]);
      });
  }
}
