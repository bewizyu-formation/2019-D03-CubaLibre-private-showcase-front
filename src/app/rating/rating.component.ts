import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  @Input()
  rating: number;

  @Input()
  voteNumber: number;

  starsList: number[] = [];

  constructor() {
  }

  ngOnInit() {
    this.setStarsList();
  }

  setStarsList() {
    for (let i = 0; i < 5; i++) {
      if (this.rating >= 2) {
        this.starsList = [... this.starsList, 1];
        this.rating -= 2;
      } else if (this.rating >= 1) {
        this.starsList = [... this.starsList, 0.5];
        this.rating--;
      } else {
        this.starsList = [... this.starsList, 0];
      }
    }
  }

}
