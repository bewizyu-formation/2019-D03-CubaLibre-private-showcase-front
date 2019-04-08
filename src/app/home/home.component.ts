import { Component, OnInit } from '@angular/core';
import { ArtistService } from '../artist-card/artist.service';
import { Artist } from '../artist-card/Artist';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  artistList: Artist[];

  constructor(private artistService: ArtistService) {
    console.log(this.artistList);
  }

  ngOnInit() {
    this.artistList = this.artistService.artistList;
    console.log(this.artistList);
  }

  artistListIsEmpty() {
    return (this.artistList.length === 0) ? true : false;
  }

  isArtistListEmpty() {
    return (this.artistList === undefined) ? true : false;
  }

  isArtistListNotEmpty() {
    return (this.artistList === undefined) ? false : true;
  }

}
