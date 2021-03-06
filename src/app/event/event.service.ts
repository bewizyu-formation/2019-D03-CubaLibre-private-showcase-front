import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Event } from './event';
import { EnvironmentService } from '../services/environment.service';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private httpClient: HttpClient, private env: EnvironmentService) { }

  addNewEvent(newEvent: Event) {
    return this.httpClient.post(`${this.env.getPrivateShowcaseApiConfig().uri}/event/new`, newEvent);
  }

  getAllEvent() {
    return this.httpClient.get(`${this.env.getPrivateShowcaseApiConfig().uri}/event/all`);
  }
}
