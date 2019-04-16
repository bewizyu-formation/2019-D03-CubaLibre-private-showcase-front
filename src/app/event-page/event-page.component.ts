import { Component, OnInit } from '@angular/core';
import { Event } from '../event/event';
import { EventService } from '../event/event.service';

@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.css']
})
export class EventPageComponent implements OnInit {

  events: Event[];

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.eventService.getAllEvent().subscribe(
      (resp: any) => {
        this.events = resp;
      });
  }

}
