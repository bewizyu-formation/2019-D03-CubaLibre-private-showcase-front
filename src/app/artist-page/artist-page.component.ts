import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ArtistService } from '../artist/artist.service';
import { Artist } from '../artist/artist';
import { PATH_ARTIST, PATH_EDIT } from '../app.routes.constantes';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { GeoService } from '../geo/geo.service';

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

  options: string[] = [];
  optionsSubscription: Subscription;

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

  constructor(private router: Router, private artistService: ArtistService, private route: ActivatedRoute, private fb: FormBuilder,private geoService: GeoService) {
    this.isEditable = (this.router.url.includes(`${PATH_ARTIST}/${PATH_EDIT}`)) ? true : false;
    if (this.isEditable === true) {
      this.websiteCtrl = fb.control('', [Validators.pattern('[a-zA-Z0-9]*[.][com]')]);
      this.phoneCtrl = fb.control('', [Validators.minLength(10), Validators.maxLength(10)]);
      this.addressCtrl = fb.control('');

      this.artistForm = fb.group({
        website: this.websiteCtrl,
        phone: this.phoneCtrl,
        address: this.addressCtrl
      });
    }
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
    /*if(this.isEditable){
      this.optionsSubscription = this.countyCtrl.valueChanges
      .pipe(
        switchMap(value => {
          return this.geoService.getDepartements(value);
        }),
        map(resp => resp.map(ville => ville.nom).slice(0, 20))
      ).subscribe(value => this.options = value,
        error => console.log(error));
    }*/
  }

  ngOnDestroy() {
    this.optionsSubscription.unsubscribe();
  }

}
