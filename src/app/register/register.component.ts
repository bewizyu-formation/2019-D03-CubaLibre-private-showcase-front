import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import {Observable, interval, Subscription} from 'rxjs';
import {map, startWith, auditTime, throttle, switchMap} from 'rxjs/operators';

import { PATH_LOGIN, PATH_WELCOME } from '../app.routes.constantes';
import { PASSWORD_REGEXP, checkPasswords, MyErrorStateMatcherPassword, MyErrorStateMatcher } from '../validators/validators';
import { UserService } from '../user/user.service';
import { GeoService } from '../geo/geo.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit, OnDestroy {


  usernameCtrl: FormControl;
  passwordCtrl: FormControl;
  confirmPasswordCtrl: FormControl;
  emailCtrl: FormControl;
  cityCtrl: FormControl;

  passwordGroup: FormGroup;
  registerForm: FormGroup;

  matcher = new MyErrorStateMatcher();
  passwordMatcher = new MyErrorStateMatcherPassword();

  options: string[] = [];
  optionsSubscription: Subscription;

  user: any;
  serverErrorMessage: string;

  isArtist: boolean;

  artistName: string;
  shortDescription: string;
  longDescription: string;

  constructor(
    fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private geoService: GeoService
    ) {
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

  toWelcome() {
    this.router.navigate([PATH_WELCOME]);
  }

  isChecked(event) {
    event.preventDefault();
    this.isArtist = !this.isArtist;
  }

  handleInputArtistName(event) {
    this.artistName = event;
  }

  handleInputShortDescription(event) {
    this.shortDescription = event;
  }

  handleInputLongDescription(event) {
    this.longDescription = event;
  }

  handleSubmit() {
    this.userService.register(
      this.registerForm.value.username,
      this.registerForm.value.passwordGroup.password,
      this.registerForm.value.email,
      this.registerForm.value.city,
      this.artistName,
      this.shortDescription,
      this.longDescription
      )
    .then((resp: any) => {
      if (resp.status === 400) {
        return this.serverErrorMessage = resp.error.message;
      }
    });
  }


  ngOnInit() {
    this.optionsSubscription = this.cityCtrl.valueChanges
    .pipe(
      switchMap(value => {
        return this.geoService.getCommunes(value);
      }),
      map(resp => resp.map(ville => ville.nom).slice(0, 20))
      ).subscribe(value => this.options = value,
      error => console.log(error));
    }

    ngOnDestroy() {
      this.optionsSubscription.unsubscribe();
    }




  }

}
