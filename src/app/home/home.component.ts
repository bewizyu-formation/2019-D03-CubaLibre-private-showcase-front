import { Component, OnInit } from '@angular/core';
import { ArtistService } from '../artist-card/artist.service';
import { Artist } from '../artist-card/Artist';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  artistList: Artist[];

  isAuthenticated: boolean;

  constructor(private artistService: ArtistService, private userService: UserService) { }

  ngOnInit() {
    this.isAuthenticated = !(this.userService.token == null);
    this.artistService.getArtistList().subscribe(
      (resp: any) => {
        this.artistList = resp;
      }
    );
  }

  artistListIsEmpty() {
    return (this.artistList === undefined) ? true : false;
  }

}
