import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { EventService } from '../event/event.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Event } from '../event/event';
import { PATH_HOME } from '../app.routes.constantes';
import { ArtistService } from '../artist/artist.service';
import { Artist } from '../artist/artist';

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

  artist: Artist;

  isReqArtistDone: boolean;

  // La pou plus tard
  /*myFilter = (d: Date): boolean => {
    const day = d.getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  }*/

  constructor(private fb: FormBuilder,
    private eventService: EventService,
    private route: ActivatedRoute,
    private router: Router,
    private artistService: ArtistService) {
    this.dateCtrl = fb.control('');
    this.maxPersonCtrl = fb.control('');

    this.eventForm = fb.group({
      date: this.dateCtrl,
      maxPerson: this.maxPersonCtrl
    });
  }

  ngOnInit() {
    this.artistService.getArtistByName(this.route.snapshot.paramMap.get('artistName')).subscribe(
      (resp: any) => {
        this.artist = resp;
        this.isReqArtistDone = true;
      }
    );
  }

  handleReserve() {
    const newEvent = new Event(this.eventForm.value.date,
      this.eventForm.value.maxPerson,
      this.route.snapshot.paramMap.get('artistName'));
    this.eventService.addNewEvent(newEvent).subscribe((resp) => {
      this.router.navigate([PATH_HOME]);
    });
  }
}
