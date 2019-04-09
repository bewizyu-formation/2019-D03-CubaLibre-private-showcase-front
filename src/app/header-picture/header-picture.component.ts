import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PATH_REGISTER, PATH_LOGIN, PATH_WELCOME, PATH_HOME } from '../app.routes.constantes';
import { UserService } from '../user/user.service';


@Component({
  selector: 'app-header-picture',
  templateUrl: './header-picture.component.html',
  styleUrls: ['./header-picture.component.css']
})
export class HeaderPictureComponent implements OnInit {

  visibleHomeUserSettings: boolean;
  visibleHomeUserMenu: boolean;

  isAuthenticated: boolean;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.isAuthenticated = !(this.userService.token == null);
  }

  isWelcome() {
    return (this.router.url === `/${PATH_WELCOME}`) ? true : false;
  }

  isHome() {
    return (this.router.url === `/${PATH_HOME}`) ? true : false;
  }

  clickHomeUserSettings() {
    this.visibleHomeUserSettings = !this.visibleHomeUserSettings;
  }

  clickHomeUserMenu() {
    this.visibleHomeUserMenu = !this.visibleHomeUserMenu;
  }

  isVisibleHomeUserSettings() {
    return (this.visibleHomeUserSettings) ? true : false;
  }

  isVisibleHomeUserMenu() {
    return (this.visibleHomeUserMenu) ? true : false;
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
