import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, Validators, NgForm } from '@angular/forms';

import { Router } from '@angular/router';
import { PATH_LOGIN, PATH_WELCOME } from '../app.routes.constantes';

import { PASSWORD_REGEXP, checkPasswords, MyErrorStateMatcherPassword, MyErrorStateMatcher } from '../validators/validators';
import { UserService } from '../user/user.service';
import {Artist} from "../artist-card/Artist";


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

  isAlreadyExist: boolean;

  isArtist: boolean;

  artistName:string;
  shortDescription:string;
  longDescription:string;
  artist:Artist;

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
    if(this.isArtist) {
      this.artist.artistName = this.artistName;
      this.artist.shortDescription = this.shortDescription;
      this.artist.longDescription = this.longDescription;
    }

    this.userService.register(
      this.registerForm.value.username,
      this.registerForm.value.passwordGroup.password,
      this.registerForm.value.email,
      this.registerForm.value.city,
      this.artist

    ).then((resp: any) => {
      if (resp.status === 400) {
        this.isAlreadyExist = true;
      } else {
        this.isAlreadyExist = false;
      }
    });
  }

  userNameExist() {
    return this.isAlreadyExist;
  }

  isChecked(event){
    event.preventDefault();
    this.isArtist = !this.isArtist;
  }

  toWelcome() {
    this.router.navigate([PATH_WELCOME]);
  }

  handleInputArtistName(event){
    this.artistName=event;
  }

  handleInputShortDescription(event){
    this.shortDescription=event;
  }

  handleInputLongDescription(event){
    this.longDescription=event;
  }

  ngOnInit() {
  }

}
