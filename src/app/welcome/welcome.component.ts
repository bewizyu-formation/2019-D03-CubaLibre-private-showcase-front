import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  cards = [{
    url_img: "../../assets/img/welcome/circle-image.png",
    title: "Musiciens",
    text: "Proposer des concerts privées"
  },{
    url_img: "../../assets/img/welcome/circle-image.png",
    title: "Spectateurs",
    text: "Vivez une experience unique"
  },{
    url_img: "../../assets/img/welcome/circle-image.png",
    title: "Organisateurs",
    text: "Partagez vos coups de coeurs"
  }]

  constructor() { }

  ngOnInit() {
  }

}
