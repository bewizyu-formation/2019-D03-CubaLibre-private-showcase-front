import {Injectable, OnInit} from '@angular/core';
import {Artist} from './Artist';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArtistService implements OnInit {

  artistList: Artist [];

  constructor() { 
    this.artistList = [new Artist('name', 'description', 'website', 'phone', 'address', 3, 'picture',6)];
  }

  ngOnInit(): void {  }

  //getArtistList

}


