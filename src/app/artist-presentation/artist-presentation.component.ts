import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Artist } from '../artist/artist';
import { UserService } from '../user/user.service'
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

  @Input()
  isEditable: boolean;

  @Input()
  currentUser: any;

  @Output()
  handleArtistName: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  handleShortDescription: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  handleLongDescription: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  handlePicture: EventEmitter<any> = new EventEmitter<any>();

  
  isChangeName: boolean = false;
  isChangeShortDescription: boolean = false;
  isChangeLongDescription: boolean = false;
  selectedFile: File;


  handleInputPicture(event) {
    this.selectedFile = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      this.artist.picture = reader.result;
      const imageArtist = reader.result;
      this.handlePicture.emit(imageArtist);
    };
    reader.readAsDataURL(this.selectedFile);
  }

  changeName($event) {
    this.artist.artistName = $event.target.value;
    this.handleArtistName.emit(this.artist.artistName);
  }

  changeShortDescription($event) {
    this.artist.shortDescription = $event.target.value;
    this.handleShortDescription.emit(this.artist.shortDescription);
  }

  changeLongDescription($event) {
    this.artist.longDescription = $event.target.value;
    this.handleLongDescription.emit(this.artist.longDescription);
  }

  constructor(private router: Router, private userService: UserService) {
   
  }

  ngOnInit() {    
     
  }

}
