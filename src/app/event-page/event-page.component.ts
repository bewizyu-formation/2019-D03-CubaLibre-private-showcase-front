import { Component, OnInit } from '@angular/core';
import { Event } from '../event/event';

@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.css']
})
export class EventPageComponent implements OnInit {

  events: Event[];

  constructor() { }

  ngOnInit() {
    this.events = [new Event(new Date(Date.now()), 50, "Hearth"), new Event(new Date(Date.now()), 30, "Artist1")];
  }

}
