import {Component, Input, OnInit} from '@angular/core';
import {Artist} from './Artist';
import {ArtistService} from './artist.service';

@Component({
  selector: 'app-artist-card',
  templateUrl: './artist-card.component.html',
  styleUrls: ['./artist-card.component.css']
})
export class ArtistCardComponent implements OnInit {

  @Input()
  artist: Artist;

  constructor() {
    console.log(this.artist);
  }

  ngOnInit() {

  }



}
