import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ArtistService } from '../artist/artist.service';
import { Router } from '@angular/router';
import { HelloRepository } from '../hello/hello.repository';


@Component({
  selector: 'app-register-artist',
  templateUrl: './register-artist.component.html',
  styleUrls: ['./register-artist.component.css']
})
export class RegisterArtistComponent implements OnInit {

  artistnameCtrl: FormControl;
  descriptionshortCtrl: FormControl;
  descriptionCtrl: FormControl;
  pictureCtrl: FormControl;

  registerArtistForm: FormGroup;

  isAlreadyExist: boolean;

  selectedFile: File;

  @Output()
  handleArtistName: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  handleShortDescription: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  handleLongDescription: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  handlePicture: EventEmitter<any> = new EventEmitter<any>();

  eventArtistName: string;
  eventShortDescription: string;
  eventLongDescription: string;
  eventPicture: any;

  constructor(
    fb: FormBuilder,
    private artistService: ArtistService,
    private router: Router,
    private hello: HelloRepository
  ) {
    this.artistnameCtrl = fb.control('', [Validators.required]);
    this.descriptionshortCtrl = fb.control('', [Validators.required]);
    this.descriptionCtrl = fb.control('');
    this.pictureCtrl = fb.control('', [Validators.required]);

    this.registerArtistForm = fb.group({
      artistname: this.artistnameCtrl,
      descriptionshort: this.descriptionshortCtrl,
      description: this.descriptionCtrl,
      picture: this.pictureCtrl,
    });
  }

  handleInputArtistName(event) {
    this.eventArtistName = event.target.value;
    this.handleArtistName.emit(this.eventArtistName);
  }

  handleInputShortDescription(event) {
    this.eventShortDescription = event.target.value;
    this.handleShortDescription.emit(this.eventShortDescription);
  }

  handleInputLongDescription(event) {
    this.eventLongDescription = event.target.value;
    this.handleLongDescription.emit(this.eventLongDescription);
  }

  handleInputPicture(event) {
    this.selectedFile = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      this.eventPicture = reader.result;

      const imageArtist: FormData = new FormData();
      imageArtist.append('artistName', this.eventArtistName);
      imageArtist.append('name', this.selectedFile.name);
      imageArtist.append('file', this.selectedFile);

      this.handlePicture.emit(imageArtist);
    };
    reader.readAsDataURL(this.selectedFile);
  }

  ngOnInit() {
  }
}
