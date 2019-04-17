import {FormControl, FormGroup, FormGroupDirective, NgForm} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import _ from 'lodash';

export const PASSWORD_REGEXP = new RegExp('(?=.{8,}$)(?=.*[a-z]+)(?=.*[A-Z]+)(?=.*[0-9]+)');

export function checkPasswords(group: FormGroup) { // here we have the 'passwords' group
  const pass = group.get('password').value;
  const confirmPass = group.get('confirmPassword').value;

  return pass === confirmPass ? null : { notSame: true };
}

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


