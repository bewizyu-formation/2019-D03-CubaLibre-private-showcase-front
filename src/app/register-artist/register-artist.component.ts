import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ArtistService } from '../artist-card/artist.service';
import { Router } from '@angular/router';


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
  handleArtistName:EventEmitter<string> = new EventEmitter<string>();

  @Output()
  handleShortDescription:EventEmitter<string> = new EventEmitter<string>();

  @Output()
  handleLongDescription:EventEmitter<string> = new EventEmitter<string>();

  eventArtistName:string;
  eventShortDescription:string;
  eventLongDescription:string;

  constructor(fb: FormBuilder, private artistService: ArtistService, private router: Router) {
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

  onFileUpload(event) {

    /*this.selecetdFile = event.target.files[0];

    const reader = new FileReader();
    reader.onloadend = () => {
      this.imagePreview = reader.result;
      this.hello.uploadFile(this.selecetdFile)
        .subscribe(
          () => console.log('Upload success'),
          error => console.log('Upload error', error),
        );
    };
    reader.readAsDataURL(this.selecetdFile);*/
  }

  handleInputArtistName(event){
    this.eventArtistName = event.target.value;
    this.handleArtistName.emit(this.eventArtistName);
  }

  handleInputShortDescription(event){
    this.eventShortDescription = event.target.value;
    this.handleShortDescription.emit(this.eventShortDescription);
  }

  handleInputLongDescription(event){
    this.eventLongDescription = event.target.value;
    this.handleLongDescription.emit(this.eventLongDescription);
  }

  ngOnInit() {
  }

}
