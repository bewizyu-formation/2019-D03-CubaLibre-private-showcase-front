import { Component, Input, OnInit } from '@angular/core';
import { Artist } from '../artist/artist';
import { ArtistService } from '../artist/artist.service';
import { PATH_ARTIST, PATH_BOOK } from '../app.routes.constantes';
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
  }

  toArtistPage() {
    this.router.navigate([PATH_ARTIST, this.artist.artistName]);
  }

  toArtistBook(){
    this.router.navigate([PATH_BOOK, this.artist.artistName]);
  }
}
