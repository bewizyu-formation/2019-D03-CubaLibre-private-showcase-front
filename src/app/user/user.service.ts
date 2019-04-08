import { Injectable } from '@angular/core';
import { UserRepository } from './user.repository';
import { HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  /**
   * Authentification JWT Token
   */
  public token: string;

  constructor(private userRepository: UserRepository) {
  }

  /**
   * Login the user
   * @param username User login name
   * @param password User Password
   */
  login(username: string, password: string): Promise<HttpResponse<any>> {
    return new Promise((resolve) => {
      this.userRepository
        .login(username, password)
        .subscribe(
          (response: HttpResponse<any>) => {
            this.token = response.headers.get('Authorization');
            resolve(response);
          },
          (error: HttpResponse<any>) => {
            resolve(error);
          }
        );
    });
  }
}
