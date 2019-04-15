import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Artist } from '../artist/artist';
import { Router } from '@angular/router';
import { PATH_ARTIST, PATH_EDIT } from '../app.routes.constantes';

@Component({
  selector: 'app-artist-presentation',
  templateUrl: './artist-presentation.component.html',
  styleUrls: ['./artist-presentation.component.css']
})
export class ArtistPresentationComponent implements OnInit {

  @Input()
  artist: Artist;

  @Output()
  handleArtistName: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  handleShortDescription: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  handleLongDescription: EventEmitter<string> = new EventEmitter<string>();


  isEditable: boolean;
  isChangeName: boolean;
  isChangeShortDescription: boolean;
  isChangeLongDescription: boolean;

  name() {
    this.isChangeName = !this.isChangeName;
  }

  shortDescription() {
      this.isChangeShortDescription = !this.isChangeShortDescription;
  }

  longDescription() {
    this.isChangeLongDescription = !this.isChangeLongDescription;
  }

  changeName($event){
    this.artist.artistName = $event.target.value;
    this.handleArtistName.emit(this.artist.artistName);
  }

  changeShortDescription($event){
    this.artist.shortDescription = $event.target.value;
    this.handleShortDescription.emit(this.artist.shortDescription);
  }

  changeLongDescription($event){
    this.artist.longDescription = $event.target.value;
    this.handleLongDescription.emit(this.artist.longDescription);
  }

  constructor(private router: Router) {
    this.isEditable = (this.router.url.includes(`${PATH_ARTIST}/${PATH_EDIT}`)) ? true : false;
  }

  ngOnInit() {
  }

}
