import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, Validators, NgForm} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {Router} from '@angular/router';
import { PATH_LOGIN } from '../app.routes.constantes';

import { PASSWORD_REGEXP, checkPasswords } from '../validators/validators';
import { UserService } from '../user/user.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    const invalidCtrl = !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    return invalidCtrl;
  }
}

export class MyErrorStateMatcherPassword implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    const invalidCtrl = !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);
    return (invalidCtrl || invalidParent);
  }
}

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

  user: any;


  constructor(fb: FormBuilder, private userService: UserService, private router:Router) {
    this.usernameCtrl = fb.control('', [Validators.required]);
    this.passwordCtrl = fb.control('',
      [
      Validators.required,
      Validators.pattern(PASSWORD_REGEXP)
      ]
      );
    this.confirmPasswordCtrl = fb.control('');
    this.emailCtrl = fb.control('', [Validators.email]);
    this.cityCtrl = fb.control('', Validators.required);

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

  matcher = new MyErrorStateMatcher();
  passwordMatcher = new MyErrorStateMatcherPassword();

  handleSubmit() {
    this.userService.register(
      this.registerForm.value.username,
      this.registerForm.value.passwordGroup.password,
      this.registerForm.value.email,
      this.registerForm.value.city
      );
    console.log(this.registerForm.value.username);
    
  }

  testNavigate(){
    console.log("machin")
    this.router.navigate([PATH_LOGIN]);
  }

  ngOnInit() {
  }

}
