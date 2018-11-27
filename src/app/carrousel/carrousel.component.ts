import { Component, OnInit, Input } from '@angular/core';
import { ApiMoviesService } from '../api-movies.service';

@Component({
    selector: 'app-carrousel-netflix',
    templateUrl: './carrousel.component.html',
    styleUrls: ['./carrousel.component.css']
})
export class CarrouselComponent implements OnInit {
    @Input() public carrouselType: string;
    elementosAMostrar: object[];
    constructor(private apiMoviesService: ApiMoviesService) { }
    ngOnInit() {
        this.getMulti();
    }
    getMulti() {
        switch (this.carrouselType) {
            case 'popular' :
                this.elementosAMostrar = this.apiMoviesService.getMoviesByPopularity();
                break;
            case 'pelisJaponesas':
                this.elementosAMostrar = this.apiMoviesService.getPeliculasJaponesas();
                break;
            case 'seriesJaponesas':
                this.elementosAMostrar = this.apiMoviesService.getSeriesJaponesas();
                break;
        }
    }
}
