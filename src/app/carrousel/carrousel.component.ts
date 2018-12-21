import { Component, OnInit, Input } from '@angular/core';
import { ElemMultimedia } from '../models/ElemMultimedia';
import {state, style, animate, trigger, transition} from '@angular/animations';
// Esto es para las animaciones
// import { state, style, animate, trigger, transition} from '@angular/animations';

@Component({
    selector: 'app-carrousel-netflix',
    templateUrl: './carrousel.component.html',
    styleUrls: ['./carrousel.component.css'],
    animations: [
        trigger('slideNext', [
            state(
                'destino',
                style({transform: 'translateX({{tras}}rem)'}),
                {params: {tras: '20rem'}}
            ),
            transition('* => *', animate('400ms')),
        ]),
    ]
})


export class CarrouselComponent implements OnInit {
    @Input() public elementosAMostrar: ElemMultimedia[];
    hovered = [false, false, false, false, false, false, false, false];
    state = 'origen';
    isAnimating = false;
    firstItem = 0;
    tras = -16.25;
    timeOut: any;
    sliderHover = false;
    constructor() { }
    ngOnInit() {}

    slideToNextItem(e) {
        if (!this.isAnimating) {
            this.isAnimating = true;
            this.state = 'destino';
            let actioner = e.target;
            if (this.firstItem !== 15) {
                if (e.target.id === 'slider-right') {
                    actioner = actioner.parentNode;
                }
                actioner.parentNode.firstChild.childNodes[( this.firstItem / 5)].classList.remove('shine');
                this.firstItem += 5;
                actioner.parentNode.firstChild.childNodes[( this.firstItem / 5)].classList.add('shine');
            }
        }
    }

    slideToPreviousItem(e) {
        if (!this.isAnimating) {
            this.isAnimating = true;
            this.state = 'destino';
            let actioner = e.target;
            if (this.firstItem !== 0) {
                if (e.target.id === 'slider-left') {
                    actioner = actioner.parentNode;
                }
                actioner.parentNode.firstChild.childNodes[(this.firstItem / 5)].classList.remove('shine');
                this.firstItem -= 5;
                actioner.parentNode.firstChild.childNodes[(this.firstItem / 5)].classList.add('shine');
            }
        }
    }

    cambiaEstado() {
        this.state = 'origen';
        this.isAnimating = false;
    }

    mouseEnter(i) {
        this.timeOut = setTimeout(() => this.hovered[i] = true, 1000);
    }
    mouseLeave(i) {
        clearTimeout(this.timeOut);
        this.hovered[i] = false;
    }
}
