import {Injectable, OnInit} from '@angular/core';
import {Artist} from './Artist';

@Injectable({
  providedIn: 'root'
})
export class ArtistService implements OnInit {

  artistList: Artist [];

  constructor() { 
    this.artistList = [new Artist('name', 'description', 'website', 'phone', 'address', 3, 'picture')];
  }

  ngOnInit(): void {
    
  }
}


