import { Injectable, OnInit } from '@angular/core';
import { Artist } from './artist';
import { HttpClient } from '@angular/common/http';
import { EnvironmentService } from '../services/environment.service';

@Injectable({
  providedIn: 'root'
})
export class ArtistService implements OnInit {

  artistList: Artist[];

  constructor(private httpClient: HttpClient, private env: EnvironmentService) {
  }

  ngOnInit(): void { }

  getArtistList() {
    return this.httpClient.get(`${this.env.getPrivateShowcaseApiConfig().uri}/artists/`);
  }

  getArtistByName(artistName: string) {
    return this.httpClient.get(`${this.env.getPrivateShowcaseApiConfig().uri}/artists/${artistName}`);
  }

  getArtistCountys(artistName: string) {
    return this.httpClient.get(`${this.env.getPrivateShowcaseApiConfig().uri}/county/${artistName}`);
  }

  putArtistUpdate(artist: Artist) {
    return this.httpClient.put(`${this.env.getPrivateShowcaseApiConfig().uri}/artists/`, artist);
  }

  putArtistPicture(picture: FormData) {
    return this.httpClient.post(`${this.env.getPrivateShowcaseApiConfig().uri}/artists/picture`, picture);
  }
}

