import { Component, OnInit, HostListener, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { PATH_REGISTER, PATH_LOGIN, PATH_WELCOME, PATH_HOME, PATH_ARTIST } from '../app.routes.constantes';
import { UserService } from '../user/user.service';


@Component({
  selector: 'app-header-picture',
  templateUrl: './header-picture.component.html',
  styleUrls: ['./header-picture.component.css']
})
export class HeaderPictureComponent implements OnInit {

  visibleHomeUserSettings = false;
  visibleHomeUserMenu = false;

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

  isLogPage() {
    return ((this.router.url === `/${PATH_LOGIN}`) || (this.router.url === `/${PATH_REGISTER}`)) ? true : false;
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

  @HostListener('click', ['$event']) click(e) {
    // e.stopPropagation();

  }

  @HostListener('document:click') resetToggle() {
    this.visibleHomeUserSettings = false;
    this.visibleHomeUserMenu = false;
  }



  // If url is === PATH_LOGIN or PATH_REGISTER, arrows back redirect to WelcomeComponent
  hasReturn() {
    if ((this.router.url !== `/${PATH_WELCOME}`) && (this.router.url !== `/${PATH_HOME}`)) {
      return true;
    }
    return false;
  }

  notArtistPage(){
    return this.router.url.includes(PATH_ARTIST) ? false : true;
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

  navigateToPrevious() {
    if(this.router.url === `/${PATH_HOME}`){
      this.navigateTo([PATH_WELCOME]);
    }else{
      this.navigateTo([PATH_HOME]);
    }
  }

  navigateTo(path: string[]) {
    this.router.navigate(path);
  }

}
