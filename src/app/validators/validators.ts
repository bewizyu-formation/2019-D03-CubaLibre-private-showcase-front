import {FormControl, FormGroup} from '@angular/forms';
import _ from 'lodash';

export const PASSWORD_REGEXP = new RegExp('(?=.{8,}$)(?=.*[a-z]+)(?=.*[A-Z]+)(?=.*[0-9]+)');

export function checkPasswords(group: FormGroup) { // here we have the 'passwords' group
  const pass = group.get('password').value;
  const confirmPass = group.get('confirmPassword').value;

  return pass === confirmPass ? null : { notSame: true };
}

