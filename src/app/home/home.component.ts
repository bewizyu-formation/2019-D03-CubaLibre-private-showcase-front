import { Component, OnInit } from '@angular/core';
import { ArtistService } from '../artist-card/artist.service';
import { Artist } from '../artist-card/Artist';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  artistList: Artist[];

  constructor(private artistService: ArtistService) { }

  ngOnInit() {
    this.artistService.getArtistList().subscribe(
      (resp: any) => {
        console.log(resp);
        this.artistList = resp;
      }
    )
  }

  artistListIsEmpty() {
    console.log(this.artistList);
    return (this.artistList === undefined) ? true : false;
  }

}
