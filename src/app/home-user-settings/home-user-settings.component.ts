import { Component, OnInit } from '@angular/core';
import { PATH_HOME, PATH_WELCOME } from '../app.routes.constantes';
import { Router } from '@angular/router';
import { UserService } from '../user/user.service';



@Component({
  selector: 'app-home-user-settings',
  templateUrl: './home-user-settings.component.html',
  styleUrls: ['./home-user-settings.component.css']
})
export class HomeUserSettingsComponent implements OnInit {

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() { }

  navigateToProfil() {
    // To do
  }

  navigateToHome() {
    this.router.navigate([PATH_HOME]);
  }

  useServiceDisconnect() {
    localStorage.clear();
    this.userService.token = null;
    this.router.navigate([PATH_WELCOME]);
  }
}
