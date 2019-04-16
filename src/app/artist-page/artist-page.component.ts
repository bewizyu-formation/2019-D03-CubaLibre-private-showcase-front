import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ArtistService } from '../artist/artist.service';
import { Artist } from '../artist/artist';
import { PATH_ARTIST, PATH_EDIT, PATH_HOME } from '../app.routes.constantes';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-artist-page',
  templateUrl: './artist-page.component.html',
  styleUrls: ['./artist-page.component.css']
})
export class ArtistPageComponent implements OnInit {

  artist: Artist;

  isReqArtistDone: boolean;

  countys: any[];

  isEditable: boolean;

  websiteCtrl: FormControl;
  phoneCtrl: FormControl;
  addressCtrl: FormControl;

  artistForm: FormGroup;

  changeWebsite($event) { this.artist.website = $event.target.value; }
  changePhone($event) { this.artist.phone = $event.target.value; }
  changeAddress($event) { this.artist.address = $event.target.value; }

  handleInputArtistName(event) { this.artist.artistName = event; }
  handleInputShortDescription(event) { this.artist.shortDescription = event; }
  handleInputLongDescription(event) { this.artist.longDescription = event; }
  handlePicture(event) { this.artist.picture = event; }

  constructor(private router: Router, private artistService: ArtistService, private route: ActivatedRoute, private fb: FormBuilder) {
    this.isEditable = (this.router.url.includes(`${PATH_ARTIST}/${PATH_EDIT}`)) ? true : false;
    this.websiteCtrl = fb.control('', [Validators.pattern('[a-zA-Z0-9]*[.][com]')]);
    this.phoneCtrl = fb.control('', [Validators.minLength(10), Validators.maxLength(10)]);
    this.addressCtrl = fb.control('');

    this.artistForm = fb.group({
      website: this.websiteCtrl,
      phone: this.phoneCtrl,
      address: this.addressCtrl
    });
  }

  handleSubmit() {
    this.artist.website = this.websiteCtrl.value;
    this.artist.phone = this.phoneCtrl.value;
    this.artist.address = this.addressCtrl.value;
    this.artistService.putArtistUpdate(this.artist).subscribe(
      (resp: any) => {
        window.location.reload();
      }
    );
  }

  ngOnInit() {
    this.artistService.getArtistByName(this.route.snapshot.paramMap.get('artistName')).subscribe(
      (resp: any) => {
        this.artist = resp;
        this.isReqArtistDone = true;
      }
    );
    this.artistService.getArtistCountys(this.route.snapshot.paramMap.get('artistName')).subscribe(
      (resp: any) => {
        this.countys = resp;
      }
    );
  }

}
