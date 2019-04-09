import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, Validators, NgForm} from '@angular/forms';

import {Router} from '@angular/router';
import { PATH_LOGIN } from '../app.routes.constantes';

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
    }, {validator : checkPasswords});

    this.registerForm = fb.group({
      username: this.usernameCtrl,
      passwordGroup: this.passwordGroup,
      email: this.emailCtrl,
      city: this.cityCtrl
    });
  }

  handleCitySelect(event){
    this.cityCtrl.setValue(event);
    console.log(this.cityCtrl.dirty);
  }

  handleSubmit() {
    this.userService.register(
      this.registerForm.value.username,
      this.registerForm.value.passwordGroup.password,
      this.registerForm.value.email,
      this.cleanUpAccents(this.registerForm.value.city)
      );
  }

  cleanUpAccents(str)
  {
    const newStr:string = str.replace(/é|è|ê/g,"e");
    const newStr2:string = newStr.replace(/à|â/g,"a");
    return newStr2;
  }

  ngOnInit() {
  }

}
