import { Component, OnInit } from '@angular/core';
import {ArtistService} from '../artist-card/artist.service';
import {Artist} from '../artist-card/Artist';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  artistList: Artist [];

  constructor(private artistService: ArtistService) { }

  ngOnInit() {
    this.artistList = this.artistService.artistList;
  }

  artistListIsEmpty(){
    return (this.artistList.length == 0)? true: false;
  }

  
}
