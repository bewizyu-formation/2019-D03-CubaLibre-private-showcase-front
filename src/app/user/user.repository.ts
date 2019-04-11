import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {EnvironmentService} from '../services/environment.service';


export const RESOURCES_LOGIN = '/login';
export const RESOURCES_USERS = '/users/';

@Injectable({
  providedIn: 'root'
})
export class UserRepository {

  constructor(private http: HttpClient, private env: EnvironmentService) {
  }

  register(username: string, password: string, email: string, city: string,
           artistName?: string, shortDescription?: string, longDescription?: string) {
    let user: any;
    if (artistName !== undefined) {
      user = {
        username: username,
        password: password,
        email: email,
        city: city,
        artist: {
          artistName: artistName,
          shortDescription: shortDescription,
          longDescription: longDescription
        }
      };
    } else {
      user = {
        username: username,
        password: password,
        email: email,
        city: city,
      };
    }

    return this.http.put(`${this.env.getPrivateShowcaseApiConfig().uri}${RESOURCES_USERS}`, user);
  }

  /**
   * login the current user and get the JWT token
   * @param username User login name
   * @param password User Password
   */
   login(username: string, password: string): Observable<any> {
     return this.http.post(`${this.env.getPrivateShowcaseApiConfig().uri}${RESOURCES_LOGIN}`, {
       username,
       password,
     },
     {observe: 'response'}
     );
   }
 }
