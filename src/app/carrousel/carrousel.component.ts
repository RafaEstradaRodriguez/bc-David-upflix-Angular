import { Component, OnInit, Input } from '@angular/core';
import { ElemMultimedia } from '../models/ElemMultimedia';
// Esto es para las animaciones
// import { state, style, animate, trigger, transition} from '@angular/animations';

@Component({
    selector: 'app-carrousel-netflix',
    templateUrl: './carrousel.component.html',
    styleUrls: ['./carrousel.component.css'],
    /*animations : [
        trigger('customHover', [
            state('inactive', style({
                transform: 'scale(1)',
            })),
            state('active', style({
                transform: 'scale(1.3)',
            })),
            transition('inactive => active', animate('400ms')),
            transition('active => inactive', animate('400ms'))
        ]),
    ]*/
})
export class CarrouselComponent implements OnInit {
    @Input() public elementosAMostrar: ElemMultimedia[];
    constructor() { }
    ngOnInit() {
        /*console.log(this.elementosAMostrar);*/
    }
    // Esto eran pruebas para animaciones
    /*hover(event) {
        /!*event.target.parentNode.childNodes.className('unhovered');
        event.target.className('hovered');*!/
        event.target.parentNode.addClass('unhovered');
    }
    unhover(event) {
        event.target.parentNode.childNodes.classList = '';
    }*/
}
