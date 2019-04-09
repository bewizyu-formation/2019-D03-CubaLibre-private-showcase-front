import { Component, OnInit } from '@angular/core';
import { PATH_HOME } from '../app.routes.constantes';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home-user-settings',
  templateUrl: './home-user-settings.component.html',
  styleUrls: ['./home-user-settings.component.css']
})
export class HomeUserSettingsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() { }

  navigateToProfil() {
    // To do
  }

  navigateToHome() {
    this.router.navigate([PATH_HOME]);
  }

  useServiceDisconnect() {
    // To do
  }
}
