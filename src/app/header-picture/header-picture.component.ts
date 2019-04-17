import { Component, OnInit, HostListener, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import {
  PATH_REGISTER, PATH_LOGIN, PATH_WELCOME, PATH_HOME,
  PATH_ARTIST, PATH_BOOK, PATH_PROFIL, PATH_EVENT
} from '../app.routes.constantes';
import { UserService } from '../user/user.service';


@Component({
  selector: 'app-header-picture',
  templateUrl: './header-picture.component.html',
  styleUrls: ['./header-picture.component.css']
})
export class HeaderPictureComponent implements OnInit {

  visibleHomeUserSettings = false;
  visibleHomeUserMenu = false;
  visibleLogMenu = false;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
  }

  artistPage() {
    return this.router.url.includes(PATH_ARTIST) ? true : false;
  }

  isWelcomeAuthenticated() {
    return (this.isWelcome() && !this.isLogged()) ? true : false;
  }

  needPicture() {
    return (this.router.url === `/${PATH_HOME}`) ? false : true;
  }

  needTitleWelcomePage() {
    return (this.isWelcome() || this.isLogPage()) ? true : false;
  }

  isWelcome() {
    return (this.router.url === `/${PATH_WELCOME}`) ? true : false;
  }

  isHome() {
    return (this.router.url === `/${PATH_HOME}`) ? true : false;
  }

  isLogged() {
    return this.userService.token !== undefined ? true : false;
  }

  isLogPage() {
    return ((this.router.url === `/${PATH_LOGIN}`) || (this.router.url === `/${PATH_REGISTER}`)) ? true : false;
  }

  isEventPage() {
    return (this.router.url === `/${PATH_EVENT}`) ? true : false;
  }

  isBooking() {
    return this.router.url.includes(PATH_BOOK);
  }

  isProfil() {
    return (this.router.url === `/${PATH_PROFIL}`) ? true : false;
  }

  clickHomeUserSettings($event) {
    $event.stopPropagation();
    this.visibleHomeUserSettings = !this.visibleHomeUserSettings;
    this.visibleHomeUserMenu = false;
  }

  clickHomeUserMenu($event) {
    $event.stopPropagation();
    this.visibleHomeUserMenu = !this.visibleHomeUserMenu;
    this.visibleHomeUserSettings = false;
  }

  clickLogMenu($event) {
    $event.stopPropagation();
    this.visibleLogMenu = !this.visibleLogMenu;
  }

  @HostListener('click', ['$event']) click(e) {
    // e.stopPropagation();

  }

  @HostListener('document:click') resetToggle() {
    this.visibleHomeUserSettings = false;
    this.visibleHomeUserMenu = false;
  }



  // If url is !== PATH_WELCOME or PATH_HOME, arrows back redirect to WelcomeComponent or HomeComponent
  hasReturn() {
    if ((this.router.url !== `/${PATH_WELCOME}`) && (this.router.url !== `/${PATH_HOME}`)) {
      return true;
    }
    return false;
  }

  navigateToRegister() {
    this.navigateTo([PATH_REGISTER]);
  }

  navigateToLogin() {
    this.navigateTo([PATH_LOGIN]);
  }

  navigateToPrevious() {
    if (this.router.url === `/${PATH_HOME}`) {
      this.navigateTo([PATH_WELCOME]);
    } else {
      this.navigateTo([PATH_HOME]);
    }
  }

  navigateTo(path: string[]) {
    this.router.navigate(path);
  }

}
