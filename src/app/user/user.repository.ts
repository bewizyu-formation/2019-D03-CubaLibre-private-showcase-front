import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EnvironmentService } from '../services/environment.service';


export const RESOURCES_LOGIN = '/login';
export const RESOURCES_USERS = '/users/';
export const RESOURCES_UPLOAD = '/upload';
export const RESOURCES_HELLO = '/hello';

@Injectable({
  providedIn: 'root'
})
export class UserRepository {

  constructor(private http: HttpClient, private env: EnvironmentService) {
  }

  register(username: string, password: string, email: string, city: string,
    artistName?: string, shortDescription?: string, longDescription?: string, picture?: string) {
    let userAndArtist: any;
    if (artistName !== undefined) {
      userAndArtist = {
        user : {
          username: username,
          password: password,
          email: email,
          city: city,
          artistName: artistName
        },
        artist: {
          artistName: artistName,
          shortDescription: shortDescription,
          longDescription: longDescription,
          picture: picture
        }
      };
    } else {
      userAndArtist = {
        user : {
          username: username,
          password: password,
          email: email,
          city: city,
        }
      };
    }
    return this.http.post(`${this.env.getPrivateShowcaseApiConfig().uri}${RESOURCES_USERS}new`, userAndArtist);
  }

  changePassword(oldPassword: string, password: string, email: string) {
    return this.http.put(`${this.env.getPrivateShowcaseApiConfig().uri}${RESOURCES_USERS}changePassword`, [oldPassword, password, email]);
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
     { observe: 'response' }
     );
   }
 }
