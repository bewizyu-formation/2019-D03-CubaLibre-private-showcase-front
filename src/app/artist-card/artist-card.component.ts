import { Component, Input, OnInit } from '@angular/core';
import { Artist } from '../artist/artist';
import { ArtistService } from '../artist/artist.service';
import { PATH_ARTIST } from '../app.routes.constantes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artist-card',
  templateUrl: './artist-card.component.html',
  styleUrls: ['./artist-card.component.css']
})
export class ArtistCardComponent implements OnInit {

  @Input()
  artist: Artist;

  starsList: number[] = [];

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.setStarsList();
  }

  setStarsList() {
    for (let i = 0; i < 5; i++) {
      if (this.artist.rating >= 2) {
        this.starsList = [... this.starsList, 1];
        this.artist.rating -= 2;
      } else if (this.artist.rating >= 1) {
        this.starsList = [... this.starsList, 0.5];
        this.artist.rating--;
      } else {
        this.starsList = [... this.starsList, 0];
      }
    }
  }

  toArtistPage(){
    this.router.navigate([PATH_ARTIST, this.artist.artistName])
  }
}
