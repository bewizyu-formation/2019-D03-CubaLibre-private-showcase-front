import { Injectable, OnInit } from '@angular/core';
import { Artist } from './Artist';
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

  getArtistList(){
    //return this.httpClient.get(this.env.getPrivateShowcaseApiConfig().uri);
    return undefined;
  }

}
