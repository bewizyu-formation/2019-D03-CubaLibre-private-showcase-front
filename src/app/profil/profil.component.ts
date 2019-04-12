import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user/user.service';
import { Router } from '@angular/router';
import { MyErrorStateMatcher, MyErrorStateMatcherPassword, PASSWORD_REGEXP, checkPasswords } from '../validators/validators';
import { PATH_HOME } from '../app.routes.constantes';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  oldPasswordCtrl: FormControl;
  newPasswordCtrl: FormControl;
  newConfirmPasswordCtrl: FormControl;
  emailCtrl: FormControl;

  newPasswordGroup: FormGroup;
  registerForm: FormGroup;

  matcher = new MyErrorStateMatcher();
  passwordMatcher = new MyErrorStateMatcherPassword();

  serverErrorMessage: string;

  constructor(fb: FormBuilder, private userService: UserService, private router: Router) { 
    this.oldPasswordCtrl = fb.control('',
    [
    Validators.required,
    Validators.pattern(PASSWORD_REGEXP)
    ]
    );
    /*this.newPasswordCtrl = fb.control('',
      [
      Validators.required,
      Validators.pattern(PASSWORD_REGEXP)
      ]
      );
    this.newConfirmPasswordCtrl = fb.control('');
    this.emailCtrl = fb.control('', [Validators.email, Validators.required]);

    this.newPasswordGroup = fb.group({
      newPassword: this.newPasswordCtrl,
      confirmPassword: this.newConfirmPasswordCtrl
    }, { validator: checkPasswords });*/

    this.registerForm = fb.group({
      oldPassword: this.oldPasswordCtrl,
      /*newPasswordGroup: this.newPasswordGroup,
      email: this.emailCtrl*/
    });
  }

  /*handleSubmit() {
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
  }*/

  toHome(){
    this.router.navigate([PATH_HOME]);
  }

  ngOnInit() {
  }

}
