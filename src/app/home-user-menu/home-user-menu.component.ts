import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PATH_WELCOME } from '../app.routes.constantes';

@Component({
  selector: 'app-home-user-menu',
  templateUrl: './home-user-menu.component.html',
  styleUrls: ['./home-user-menu.component.css']
})
export class HomeUserMenuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToWelcome() {
    this.router.navigate([PATH_WELCOME]);
  }

  navigateToEvent() {
    // To do
  }
}
