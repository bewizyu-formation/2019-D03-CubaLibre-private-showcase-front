import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ArtistService } from '../artist/artist.service';
import { Artist } from '../artist/artist';
import { PATH_ARTIST, PATH_EDIT, PATH_HOME } from '../app.routes.constantes';

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
  

  changeWebsite($event) { this.artist.website = $event.target.value; console.log(this.artist.website) }
  changePhone($event) { this.artist.phone = $event.target.value; console.log(this.artist.phone) }
  changeAddress($event) { this.artist.address = $event.target.value; console.log(this.artist.address) }

  handleInputArtistName(event) { this.artist.artistName = event; }
  handleInputShortDescription(event) { this.artist.shortDescription = event; }
  handleInputLongDescription(event) { this.artist.longDescription = event; }

  constructor(private router: Router, private artistService: ArtistService, private route: ActivatedRoute) {
    this.isEditable = (this.router.url.includes(`${PATH_ARTIST}/${PATH_EDIT}`)) ? true : false;
  }

  submit(){
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
        console.log(resp);
      }
    );
  }

}
