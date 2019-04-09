import { Component, OnInit } from '@angular/core';
import { LogoutService } from '../services/logout.service';

@Component({
  selector: 'app-home-user-settings',
  templateUrl: './home-user-settings.component.html',
  styleUrls: ['./home-user-settings.component.css']
})
export class HomeUserSettingsComponent implements OnInit {

  constructor(private logoutService: LogoutService) { }

  ngOnInit() { }

  navigateToProfil() {
    // To do
  }

  useServiceDisconnect() {
    this.logoutService.setDisconnect();
  }
}
