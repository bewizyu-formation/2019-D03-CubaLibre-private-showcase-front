import { Component, OnInit, Input } from '@angular/core';
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

  @Input('autocompType')
  autocompSelect: string;

  myControl = new FormControl();
  options: string[];

  valueInput: string;

  constructor(private geoService: GeoService) { }

  ngOnInit() {
    const input = document.getElementsByTagName('input')
    fromEvent(input, 'keyup').pipe(
      filter((event: any) => {
        console.log(event.keyCode);
        return event.keyCode != 38 && event.keyCode != 40;
      }),
      throttleTime(300)
    ).subscribe(
      resp => {
        if (this.autocompSelect === 'communes') {
          this.autoCompCommunes();
        } else if (this.autocompSelect === 'departements') {
          this.autoCompDepartement();
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
    let listTemp = [];
    for (let i = 0; i < 20; i++) {
      if (list[i]) {
        listTemp.push(list[i])
      }
    }
    this.options = [...listTemp];
  }
}
