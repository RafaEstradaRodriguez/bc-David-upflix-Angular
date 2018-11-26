import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carrousel-netflix',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css']
})
export class CarrouselComponent implements OnInit {
  @Input() public nombre: string;
  constructor() { }

  ngOnInit() {
  }

}
