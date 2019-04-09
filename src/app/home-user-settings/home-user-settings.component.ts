import { Component, OnInit } from '@angular/core';
import { DisconnectService } from '../services/disconnect.service';

@Component({
  selector: 'app-home-user-settings',
  templateUrl: './home-user-settings.component.html',
  styleUrls: ['./home-user-settings.component.css']
})
export class HomeUserSettingsComponent implements OnInit {

  constructor(private disconnectService: DisconnectService) { }

  ngOnInit() { }

  navigateToProfil() {
    // To do
  }

  useServiceDisconnect() {
    this.disconnectService.setDisconnect();
  }
}
