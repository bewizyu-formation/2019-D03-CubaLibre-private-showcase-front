import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { PATH_LOGIN } from '../app.routes.constantes';
import { UserRepository } from './user.repository';
import { HttpResponse } from '@angular/common/http';
import { ArtistService } from '../artist/artist.service';
import { LogoutService } from '../services/logout.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  /**
   * Authentification JWT Token
   */
  public token: string;

  constructor(private userRepository: UserRepository, private router: Router, private artistService: ArtistService) {
  }

  register(username: string, password: string, email: string, city: string,
    artistName?: string, shortDescription?: string, longDescription?: string, picture?: string) {
    return new Promise((resolve) => {
      this.userRepository
        .register(username, password, email, city, artistName, shortDescription, longDescription, picture)
        .subscribe(
          (response: HttpResponse<any>) => {
            this.router.navigate([PATH_LOGIN]);
          },

          (error) => {
            resolve(error);
          },

          () => {
            console.log('register completed');

          });

    });
  }

  changePassword(oldPassword: string, password: string, email: string) {
    return new Promise((resolve) => {
      this.userRepository
        .changePassword(oldPassword, password, email)
        .subscribe((resp: any) => {
          if (resp.status === 400) {
            return resp.error.message;
          }
        });
    });
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
            localStorage.setItem('token', this.token);
            resolve(response);
          },
          (error: HttpResponse<any>) => {
            resolve(error);
          }
        );
    });
  }

  getUser() {

    // TODO

    const mockUser = {
      'username': 'test',
      'email': 'fake@nul.o',
      'city': 'pluton',
      'codeDepartement': 9,
      // 'artiste': {'nom': 'coucou'},
      'artiste': null,
    };
    return mockUser;
  }
}
