import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor() { }

  addNewEvent(infoEvent: any) {
    console.log(infoEvent.date, infoEvent.maxPerson);

    //TODO
  }
}
