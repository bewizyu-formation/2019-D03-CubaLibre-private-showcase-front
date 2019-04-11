import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PATH_WELCOME, PATH_HOME } from '../app.routes.constantes';

@Component({
  selector: 'app-home-user-menu',
  templateUrl: './home-user-menu.component.html',
  styleUrls: ['./home-user-menu.component.css']
})
export class HomeUserMenuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  isHome() {
    return this.router.url === `/${PATH_HOME}` ? true : false;
  }

  isWelcome() {
    return this.router.url === `/${PATH_WELCOME}` ? true : false;
  }

  navigateToHome() {
    this.router.navigate([PATH_HOME]);
  }

  navigateToWelcome() {
    this.router.navigate([PATH_WELCOME]);
  }

  navigateToEvent() {
    // To do
  }
}
