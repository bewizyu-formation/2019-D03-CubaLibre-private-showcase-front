import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GeoService } from '../geo/geo.service';
import { FormControl, FormGroup } from '@angular/forms';
import { throttleTime, filter, auditTime } from 'rxjs/operators';
import { fromEvent } from 'rxjs';
import { MyErrorStateMatcher } from '../validators/validators';


@Component({
  selector: 'app-autocomp-input',
  templateUrl: './autocomp-input.component.html',
  styleUrls: ['./autocomp-input.component.css']
})
export class AutocompInputComponent implements OnInit {

  @Input()
  autocompType: string;

  @Input()
  placeHolder: string;

  @Input()
  cityCtrl: FormControl;

  myControl = new FormControl();
  options: string[];

  valueInput: string;

  @Output()
  nameSelect: EventEmitter<string> = new EventEmitter<string>();

  handleOutCityCtrl(event) {
    this.cityCtrl = event;
  }

  constructor(private geoService: GeoService) { }

  ngOnInit() {
    const input = document.getElementsByTagName('input');
    fromEvent(input, 'input').pipe(
      //filter((event: any) => event.keyCode !== 38 && event.keyCode !== 40),
      //auditTime(300)
    ).subscribe(
      resp => {
        if (this.autocompType === 'communes') {
          console.log("res", resp);
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
    this.options = listTemp;
  }
}
