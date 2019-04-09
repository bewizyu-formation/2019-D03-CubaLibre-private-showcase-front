import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-home-user-settings',
  templateUrl: './home-user-settings.component.html',
  styleUrls: ['./home-user-settings.component.css']
})
export class HomeUserSettingsComponent implements OnInit {

  isArtist: boolean;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  navigateToProfil() {
    // To do
  }

  useServiceDisconnect() {
    // To do
  }
}
