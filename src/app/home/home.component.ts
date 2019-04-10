import { Component, OnInit } from '@angular/core';
import { ArtistService } from '../artist/artist.service';
import { Artist } from '../artist/artist';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  artistList: Artist[] | undefined;

  isAuthenticated: boolean;

  isError = false;

  constructor(private artistService: ArtistService, private userService: UserService) { }

  ngOnInit() {
    this.isAuthenticated = !(this.userService.token == null);
    this.artistService.getArtistList().subscribe(
      (resp: any) => {
        this.artistList = resp;
      }
      );
  }

  artistListIsUndefined() {
    return this.artistList === undefined;
  }

  artistListIsEmpty() {
    if (this.artistList !== undefined) {
      return this.artistList.length === 0;
    }
    return true;
  }


}
