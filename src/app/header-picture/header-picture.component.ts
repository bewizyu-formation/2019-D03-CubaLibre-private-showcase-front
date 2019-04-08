import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PATH_REGISTER, PATH_LOGIN, PATH_WELCOME, PATH_HOME } from '../app.routes.constantes';

@Component({
  selector: 'app-header-picture',
  templateUrl: './header-picture.component.html',
  styleUrls: ['./header-picture.component.css']
})
export class HeaderPictureComponent implements OnInit {

  visible: boolean;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  isWelcome() {
    return (this.router.url === `/${PATH_WELCOME}`) ? true : false;
  }

  isHome() {
    return (this.router.url === `/${PATH_HOME}`) ? true : false;
  }

  clickHomeUserSettings() {
    this.visible = !this.visible;
    console.log('clickHomeUser');
  }

  isVisible() {
    return (this.visible) ? true : false;
  }

  isHidden() {
    return (this.visible) ? false : true;
  }

  // If url is === PATH_LOGIN or PATH_REGISTER, arrows back redirect to WelcomeComponent
  hasReturn() {
    if ((this.router.url === `/${PATH_LOGIN}`) || (this.router.url === `/${PATH_REGISTER}`)) {
      return true;
    }
    return false;
  }

  needPicture() {
    return (this.router.url === `/${PATH_HOME}`) ? false : true;
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
