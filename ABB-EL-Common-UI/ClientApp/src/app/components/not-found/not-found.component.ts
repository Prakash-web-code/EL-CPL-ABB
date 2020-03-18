import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  noPlantsTextSpace = () => {
    const noSpace = document.getElementById("noSpace");
    const spaceToEmptyreplacement = new RegExp(String.fromCharCode(160), "g");
    noSpace.innerText = noSpace.innerText.replace(spaceToEmptyreplacement, " ");
  };

  ngOnInit() {
    this.noPlantsTextSpace();
  }

}
