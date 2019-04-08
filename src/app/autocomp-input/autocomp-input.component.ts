import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GeoService } from '../geo/geo.service';
import { FormControl } from '@angular/forms';
import { throttleTime, filter } from 'rxjs/operators';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-autocomp-input',
  templateUrl: './autocomp-input.component.html',
  styleUrls: ['./autocomp-input.component.css']
})
export class AutocompInputComponent implements OnInit {

  @Input()
  autocompType: string;

  myControl = new FormControl();
  options: string[];

  valueInput: string;

  @Output()
  nameSelect: EventEmitter<string> = new EventEmitter<string>();

  constructor(private geoService: GeoService) { }

  ngOnInit() {
    const input = document.getElementsByTagName('input');
    fromEvent(input, 'keyup').pipe(
      filter((event: any) => event.keyCode !== 38 && event.keyCode !== 40),
      throttleTime(300)
    ).subscribe(
      resp => {
        if (this.autocompType === 'communes') {
          this.autoCompCommunes();
          this.nameSelect.emit(this.valueInput);
        } else if (this.autocompType === 'departements') {
          this.autoCompDepartement();
          this.nameSelect.emit(this.valueInput);
        }
      }
    );
  }

  autoCompCommunes() {
    this.geoService.getCommunes(this.valueInput).subscribe(
      resp => {
        this.fillList(resp);
      }
    );
  }

  autoCompDepartement() {
    this.geoService.getDepartements(this.valueInput).subscribe(
      resp => {
        this.fillList(resp);
      }
    );
  }

  fillList(list: any) {
    const listTemp = [];
    for (let i = 0; i < 20; i++) {
      if (list[i]) {
        listTemp.push(list[i]);
      }
    }
    this.options = [...listTemp];
  }
}
