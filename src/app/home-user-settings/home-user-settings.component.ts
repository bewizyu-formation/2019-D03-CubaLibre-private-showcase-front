import { Component, OnInit } from '@angular/core';
import { LogoutService } from '../services/logout.service';
import { PATH_PROFIL } from '../app.routes.constantes';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-home-user-settings',
  templateUrl: './home-user-settings.component.html',
  styleUrls: ['./home-user-settings.component.css']
})
export class HomeUserSettingsComponent implements OnInit {


  isArtist: boolean;

  constructor(
    private router: Router,
    private userService: UserService,
    private logoutService: LogoutService) { }

  ngOnInit() {
    this.isArtist = this.userService.getUser().artiste ? true : false;
  }

  navigateToArtist() {
    // TODO
  }

  navigateToProfil() {
    this.router.navigate([PATH_PROFIL]);
  }

  useServiceDisconnect() {
    this.logoutService.setDisconnect();
  }
}
