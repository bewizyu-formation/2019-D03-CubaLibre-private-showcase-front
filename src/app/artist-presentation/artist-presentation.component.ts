import { Component, OnInit, Input } from '@angular/core';
import { Artist } from '../artist/artist';

@Component({
  selector: 'app-artist-presentation',
  templateUrl: './artist-presentation.component.html',
  styleUrls: ['./artist-presentation.component.css']
})
export class ArtistPresentationComponent implements OnInit {

  @Input()
  artist: Artist;

  constructor() { }

  ngOnInit() {
  }

}
