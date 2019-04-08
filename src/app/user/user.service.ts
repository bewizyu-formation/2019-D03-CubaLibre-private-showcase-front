import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import { PATH_LOGIN } from '../app.routes.constantes';
import {UserRepository} from './user.repository';
import {HttpResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  /**
   * Authentification JWT Token
   */
   public token: string;

   constructor(private userRepository: UserRepository, private router:Router) {
   }

   register(username: string, password: string, email: string, city: string) {
     return new Promise ((resolve) => {
       this.userRepository
       .register(username, password, email, city)
       .subscribe(
         (response: HttpResponse<any>) => {
           console.log(response);
           this.router.navigate([PATH_LOGIN]);
         }, 

         (error) => {
           console.log(error);
         },

         () => {
           console.log('register completed');
           
         });

     })
   }

  /**
   * Login the user
   * @param username User login name
   * @param password User Password
   */
   login(username: string, password: string): Promise<string> {
     return new Promise ((resolve) => {
       this.userRepository
       .login(username, password)
       .subscribe((response: HttpResponse<any>) => {
         this.token = response.headers.get('Authorization');
         console.log('Response Token : ', this.token);
         resolve(this.token);
       });
     });
   }
 }
