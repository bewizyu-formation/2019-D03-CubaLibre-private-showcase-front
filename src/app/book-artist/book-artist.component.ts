import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { EventService } from '../event/event.service';

@Component({
  selector: 'app-book-artist',
  templateUrl: './book-artist.component.html',
  styleUrls: ['./book-artist.component.css']
})
export class BookArtistComponent implements OnInit {

  dateCtrl: FormControl;
  maxPersonCtrl: FormControl;
  eventForm: FormGroup;

  invalidDate: Date[];

  // La pou plus tard
  /*myFilter = (d: Date): boolean => {
    const day = d.getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  }*/

  constructor(private fb: FormBuilder, private eventService: EventService) {
    this.dateCtrl = fb.control('');
    this.maxPersonCtrl = fb.control('');

    this.eventForm = fb.group({
      date: this.dateCtrl,
      maxPerson: this.maxPersonCtrl
    });
  }

  ngOnInit() {
  }

  handleReserve() {
    this.eventService.addNewEvent(this.eventForm.value);
  }
}
