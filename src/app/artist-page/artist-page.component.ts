import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArtistService } from '../artist/artist.service';

@Component({
  selector: 'app-artist-page',
  templateUrl: './artist-page.component.html',
  styleUrls: ['./artist-page.component.css']
})
export class ArtistPageComponent implements OnInit {

  constructor(private router: Router, private artistService: ArtistService) { }

  ngOnInit() {
  }

}
