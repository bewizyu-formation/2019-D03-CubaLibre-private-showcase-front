import { Component } from '@angular/core';
import { UserService } from './user/user.service';
import { HelloRepository } from './hello/hello.repository';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor(private userService: UserService) {
    if (localStorage.getItem('token') && userService.token === undefined) {
      userService.token = localStorage.getItem('token');
    }
  }
}
