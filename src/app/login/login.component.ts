import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PATH_WELCOME, PATH_HOME } from '../app.routes.constantes';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private fb: FormBuilder) {
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

  ngOnInit() {

  }

  validate() {
    this.router.navigate([PATH_HOME]);
  }

  toHome() {
    this.router.navigate([PATH_WELCOME]);
  }
}
