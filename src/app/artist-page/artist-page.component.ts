import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ArtistService } from '../artist/artist.service';
import { UserService } from '../user/user.service'
import { Artist } from '../artist/artist';
import { PATH_ARTIST, PATH_EDIT } from '../app.routes.constantes';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { GeoService } from '../geo/geo.service';
import { map, startWith, auditTime, throttle, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-artist-page',
  templateUrl: './artist-page.component.html',
  styleUrls: ['./artist-page.component.css']
})
export class ArtistPageComponent implements OnInit {

  artist: Artist;
  currentUser: any;

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

  constructor(
    private router: Router,
    private userService: UserService,
    private artistService: ArtistService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private geoService: GeoService
    ) { 
    this.websiteCtrl = fb.control('')//, [Validators.pattern('[a-zA-Z0-9]*[.][com]')]);
    this.phoneCtrl = fb.control('', [Validators.minLength(10), Validators.maxLength(10)]);
    this.addressCtrl = fb.control('');

    this.artistForm = fb.group({
      website: this.websiteCtrl,
      phone: this.phoneCtrl,
      address: this.addressCtrl
    });
  }

  handleSubmit() {
    /*this.artist.website = this.websiteCtrl.value;
    this.artist.phone = this.phoneCtrl.value;
    this.artist.address = this.addressCtrl.value;*/
    this.artistService.putArtistUpdate(this.artist).subscribe(
      (resp: any) => {
        this.router.navigate([PATH_ARTIST, this.artist.artistName]);
      }
      );
  }

  ngOnInit() {
    this.artistService.getArtistByName(this.route.snapshot.paramMap.get('artistName')).pipe(
      switchMap((resp:any) => {
        this.artist = resp;
        return this.artistService.getArtistCountys(resp.artistName);
      }),
      switchMap((resp:any) => {
        this.countys = resp;
        return this.userService.getCurrentUserAndArtist();
      })).
    subscribe(
      (resp: any) => {
        console.log("currentUser", resp);
        this.currentUser = resp;
        this.isEditable = (this.currentUser.user.artistName === this.artist.artistName);
        this.isReqArtistDone = true;
      }
      );
  }

  ngOnDestroy() {

  }

}
