import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ArtistService } from '../artist/artist.service';
import { Artist } from '../artist/artist';

@Component({
  selector: 'app-artist-page',
  templateUrl: './artist-page.component.html',
  styleUrls: ['./artist-page.component.css']
})
export class ArtistPageComponent implements OnInit {

  artist: Artist;

  isReqArtistDone: boolean;

  countys: any[];

  constructor(private router: Router, private artistService: ArtistService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.artistService.getArtistByName(this.route.snapshot.paramMap.get("artistName")).subscribe(
      (resp: any) => {
        this.artist = resp;
        this.isReqArtistDone = true;
      }
    );
  }

}
