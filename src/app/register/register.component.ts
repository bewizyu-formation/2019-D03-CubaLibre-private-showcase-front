import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, Validators, NgForm } from '@angular/forms';

import { Router } from '@angular/router';
import { PATH_LOGIN, PATH_WELCOME } from '../app.routes.constantes';

import { PASSWORD_REGEXP, checkPasswords, MyErrorStateMatcherPassword, MyErrorStateMatcher } from '../validators/validators';
import { UserService } from '../user/user.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  usernameCtrl: FormControl;
  passwordCtrl: FormControl;
  confirmPasswordCtrl: FormControl;
  emailCtrl: FormControl;
  cityCtrl: FormControl;

  passwordGroup: FormGroup;
  registerForm: FormGroup;

  matcher = new MyErrorStateMatcher();
  passwordMatcher = new MyErrorStateMatcherPassword();

  user: any;
  serverErrorMessage: string;

  constructor(fb: FormBuilder, private userService: UserService, private router: Router) {
    this.usernameCtrl = fb.control('', [Validators.required]);
    this.passwordCtrl = fb.control('',
      [
      Validators.required,
      Validators.pattern(PASSWORD_REGEXP)
      ]
      );
    this.confirmPasswordCtrl = fb.control('');
    this.emailCtrl = fb.control('', [Validators.email, Validators.required]);
    this.cityCtrl = fb.control('', [Validators.required]);

    this.passwordGroup = fb.group({
      password: this.passwordCtrl,
      confirmPassword: this.confirmPasswordCtrl
    }, { validator: checkPasswords });

    this.registerForm = fb.group({
      username: this.usernameCtrl,
      passwordGroup: this.passwordGroup,
      email: this.emailCtrl,
      city: this.cityCtrl
    });
  }

  handleCitySelect(event) {
    this.cityCtrl.setValue(event);
  }

  handleSubmit() {
    console.log("Ville", this.registerForm.value.city);
    this.userService.register(
      this.registerForm.value.username,
      this.registerForm.value.passwordGroup.password,
      this.registerForm.value.email,
      this.registerForm.value.city
      ).then((resp: any) => {
        if (resp.status === 400) {
          this.serverErrorMessage = resp.error.message;
        }
      },
      (err) => {
        console.log(err);
      });
    }


    toWelcome() {
      this.router.navigate([PATH_WELCOME]);
    }

    ngOnInit() {
    }

  }
