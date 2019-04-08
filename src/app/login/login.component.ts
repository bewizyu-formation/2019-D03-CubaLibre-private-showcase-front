import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PATH_WELCOME, PATH_HOME } from '../app.routes.constantes';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private fb: FormBuilder, private httpClient: HttpClient, private userService: UserService) {
    this.loginCtrl = fb.control('', [Validators.required]);
    this.passwordCtrl = fb.control('', [Validators.required]);

    this.userForm = fb.group({
      login: this.loginCtrl,
      password: this.passwordCtrl
    });
  }

  loginCtrl: FormControl;
  passwordCtrl: FormControl;
  userForm: FormGroup;

  isError = false;

  ngOnInit() {

  }

  validate() {
    this.userService
      .login(this.userForm.value.login, this.userForm.value.password)
      .then(
        (resp: any) => {
          if (resp.status === 403) {
            this.isError = true;
          } else if (resp.status === 200) {
            this.isError = false;
            this.router.navigate([PATH_HOME]);
          }
        }
      );
  }

  toHome() {
    this.router.navigate([PATH_WELCOME]);
  }
}
