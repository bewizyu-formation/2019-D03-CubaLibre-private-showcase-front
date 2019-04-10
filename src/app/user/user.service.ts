
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {PATH_LOGIN} from '../app.routes.constantes';
import {UserRepository} from './user.repository';
import {HttpResponse} from '@angular/common/http';
import {Artist} from "../artist-card/Artist";


@Injectable({
  providedIn: 'root'
})
export class UserService {

  /**
   * Authentification JWT Token
   */
   public token: string;

   constructor(private userRepository: UserRepository, private router: Router) {
   }

   register(username: string, password: string, email: string, city: string, artist?: Artist) {
     return new Promise ((resolve) => {

       this.userRepository
       .register(username, password, email, city, artist)
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
}
