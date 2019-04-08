import {Component, Input, OnInit} from '@angular/core';
import {Artist} from './Artist';
import {ArtistService} from './artist.service';

@Component({
  selector: 'app-artist-card',
  templateUrl: './artist-card.component.html',
  styleUrls: ['./artist-card.component.css']
})
export class ArtistCardComponent implements OnInit {

  @Input()
  artist: Artist;

  starsList:number[] = [];

  constructor() {
    console.log(this.artist);
  }

  ngOnInit() {

  }

  setStarsList(){
    for(let i = 0; i < 5; i ++){
      if(this.artist.rating >= 2){
        this.starsList = [... this.starsList, 1];
        this.artist.rating -=2;
      }else if(this.artist.rating >= 1){
        this.starsList = [ ... this.starsList, 0.5]
        this.artist.rating --;
      }else{
        this.starsList = [ ... this.starsList, 0];
      }
    }
  }

}
