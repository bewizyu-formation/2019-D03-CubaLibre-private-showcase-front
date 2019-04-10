import { Component, OnInit } from '@angular/core';
import { LogoutService } from '../services/logout.service';
import { PATH_HOME, PATH_WELCOME } from '../app.routes.constantes';
import { Router } from '@angular/router';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-home-user-settings',
  templateUrl: './home-user-settings.component.html',
  styleUrls: ['./home-user-settings.component.css']
})
export class HomeUserSettingsComponent implements OnInit {


  isArtist: boolean;

  constructor(private router: Router, private userService: UserService, private logoutService: LogoutService) { }

  ngOnInit() {
    this.isArtist = this.userService.getUser().artiste ? true : false;
  }

  navigateToArtist(){
    // TODO
  }

  navigateToProfil() {
    // To do
  }

  useServiceDisconnect() {
    this.logoutService.setDisconnect();
    localStorage.clear();
    this.userService.token = null;
    this.router.navigate([PATH_WELCOME]);
  }
}
