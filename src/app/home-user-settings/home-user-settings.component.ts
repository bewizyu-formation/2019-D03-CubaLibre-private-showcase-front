import { Component, OnInit } from '@angular/core';
import { LogoutService } from '../services/logout.service';
import { PATH_PROFIL, PATH_ARTIST } from '../app.routes.constantes';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../user/user.service';
import { Artist } from '../artist/artist';

@Component({
  selector: 'app-home-user-settings',
  templateUrl: './home-user-settings.component.html',
  styleUrls: ['./home-user-settings.component.css']
})
export class HomeUserSettingsComponent implements OnInit {


  isArtist: boolean;
  artistName: string;
  currentUser: any;

  constructor(
    private router: Router,
    private userService: UserService,
    private logoutService: LogoutService) { }

  ngOnInit() {
    this.userService.getCurrentUserAndArtist().
      subscribe(
        (resp: any) => {
          console.log('currentUser', resp);
          this.currentUser = resp;
          if (this.currentUser.user.artistName !== null) {
            this.isArtist = (this.currentUser.user.artistName !== null);
            this.artistName = this.currentUser.user.artistName;
          }
        }
      );
  }

  navigateToArtist() {
    this.router.navigate([`${PATH_ARTIST}/${this.artistName}`]);
  }

  navigateToProfil() {
    this.router.navigate([PATH_PROFIL]);
  }

  useServiceDisconnect() {
    this.logoutService.setDisconnect();
  }
}
