import { Component, OnInit, Input } from '@angular/core';
import { Artist } from '../artist/artist';
import { ArtistService } from '../artist/artist.service';
import { Event } from '../event/event';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css']
})
export class EventCardComponent implements OnInit {

  @Input()
  event: Event;

  artist: Artist;

  user: any;

  dateDay: string;
  dateFormat: string;

  dayTab = ['DIM', 'LUN', 'MAR', 'MER', 'JEU', 'VEN', 'SAM'];

  isArtistDone: boolean;

  isValidate: boolean = false;
  isOwner: boolean = false;

  constructor(private artistService: ArtistService) {}

  ngOnInit() {
    this.artistService.getArtistByName(this.event.artistName).subscribe(
      (resp: any) => {
        this.artist = resp;
        this.isArtistDone = true;
      }
    );

    this.dateDay = this.dayTab[this.event.date.getDay()];
    this.dateFormat = '' + this.event.date.getDate() + '/' + (this.event.date.getMonth()+1);
  }

  handleValidate(isAccept: boolean){
    //TODO
  }
}
