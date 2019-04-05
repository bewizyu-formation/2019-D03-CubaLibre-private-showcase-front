import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PATH_REGISTER, PATH_LOGIN, PATH_WELCOME } from '../app.routes.constantes';

@Component({
  selector: 'app-header-picture',
  templateUrl: './header-picture.component.html',
  styleUrls: ['./header-picture.component.css']
})
export class HeaderPictureComponent implements OnInit {


  constructor(private router: Router) { }

  ngOnInit() {
  }

  isWelcome() {
    return (this.router.url === `/${PATH_WELCOME}`) ? true : false;
  }


  // If url is === PATH_LOGIN or PATH_REGISTER, arrows back redirect to WelcomeComponent
  hasReturn() {
    if (this.router.url === `/${PATH_LOGIN}`) {
      return true;
    } else if (this.router.url === `/${PATH_REGISTER}`) {
      return true;
    } else {
      return false;
    }
  }

  navigateToRegister() {
    this.navigateTo([PATH_REGISTER]);
  }

  navigateToLogin() {
    this.navigateTo([PATH_LOGIN]);
  }

  navigateToWelcome() {
    this.navigateTo([PATH_WELCOME]);
  }

  navigateTo(path: string[]) {
    this.router.navigate(path);
  }

}
