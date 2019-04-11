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

  constructor(private router: Router) {
  starsList: number[] = [];
  }

  ngOnInit() {
  }

  toArtistPage() {
    this.router.navigate([PATH_ARTIST, this.artist.artistName]);
  }
}
