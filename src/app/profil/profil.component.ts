import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user/user.service';
import { Router } from '@angular/router';
import { PASSWORD_REGEXP, checkPasswords } from '../validators/validators';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  oldPasswordCtrl: FormControl;
  passwordCtrl: FormControl;
  confirmPasswordCtrl: FormControl;
  emailCtrl: FormControl;

  passwordGroup: FormGroup;
  profilForm: FormGroup;

  constructor(
    fb: FormBuilder,
    private userService: UserService,
    private router: Router) {
    this.passwordCtrl = fb.control('',
      [
        Validators.required,
        Validators.pattern(PASSWORD_REGEXP)
      ]
    );
    this.emailCtrl = fb.control('', [Validators.email, Validators.required]);

    this.passwordGroup = fb.group({
      oldPassword: this.oldPasswordCtrl,
      password: this.passwordCtrl,
      confirmPassword: this.confirmPasswordCtrl
    }, { validator: checkPasswords });

    this.profilForm = fb.group({
      passwordGroup: this.passwordGroup,
      email: this.emailCtrl
    })
  }

  handleSubmit() {
    this.userService.changePassword(
      this.profilForm.value.passwordGroup.oldPassword,
      this.profilForm.value.passwordGroup.password,
      this.profilForm.value.email
      )
    .then((resp: any) => {
      if (resp.status === 400) {
        return this.serverErrorMessage = resp.error.message;
      }
    });
  }

  ngOnInit() {

  }

}
