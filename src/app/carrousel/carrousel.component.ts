import { Component, OnInit, Input } from '@angular/core';
import { ApiMoviesService } from '../api-movies.service';
import { ElemMultimedia } from '../models/ElemMultimedia';

@Component({
    selector: 'app-carrousel-netflix',
    templateUrl: './carrousel.component.html',
    styleUrls: ['./carrousel.component.css']
})
export class CarrouselComponent implements OnInit {
    @Input() public carrouselType: string;
    elementosAMostrar: object[];
    arrayElemMultimedia: ElemMultimedia[];
    constructor(private apiMoviesService: ApiMoviesService) { }
    ngOnInit() {
        this.getMulti();
        this.setElemMultimedia();
    }
    getMulti() {
        switch (this.carrouselType) {
            case 'trendingToday':
                this.arrayElemMultimedia =
                    this.apiMoviesService.getElemsMult
                    ('https://api.themoviedb.org/3/trending/all/day?api_key=8d1ff0fd31d021c4902d57908c87f3fc');
                break;
            case 'popularMovies' :
                this.arrayElemMultimedia =
                    this.apiMoviesService.getElemsMult
                    ('https://api.themoviedb.org/3/discover/movie?api_key=8d1ff0fd31d021c4902d57908c87f3fc');
                break;
            case 'popularSeries':
                this.arrayElemMultimedia =
                    this.apiMoviesService.getElemsMult
                    ('https://api.themoviedb.org/3/discover/tv?api_key=8d1ff0fd31d021c4902d57908c87f3fc');
                break;
            case 'trendingMoviesToday':
                this.arrayElemMultimedia =
                    this.apiMoviesService.getElemsMult
                    ('https://api.themoviedb.org/3/trending/movie/day?api_key=8d1ff0fd31d021c4902d57908c87f3fc');
                break;
            case 'japMovies':
                this.arrayElemMultimedia =
                    this.apiMoviesService.getElemsMult
                    ('https://api.themoviedb.org/3/discover/movie?api_key=8d1ff0fd31d021c4902d57908c87f3fc&with_original_language=ja');
                break;
            case 'jap':
                this.arrayElemMultimedia =
                    this.apiMoviesService.getElemsMult
                    ('https://api.themoviedb.org/3/discover?api_key=8d1ff0fd31d021c4902d57908c87f3fc&with_original_language=ja');
                break;
            case 'japSeries':
                this.arrayElemMultimedia =
                    this.apiMoviesService.getElemsMult
                    ('https://api.themoviedb.org/3/discover/tv?api_key=8d1ff0fd31d021c4902d57908c87f3fc&with_original_language=ja');
                break;
            case 'trendingSeriesToday':

                break;
            case 'eeuuSfSeries':

                break;
        }
    }
    setElemMultimedia(posicion = 0) {
        /*console.log('2');
        console.log(this.arrayElemMultimedia);
        console.log(posicion);
        console.log(this.arrayElemMultimedia.slice(0, 7));
        this.elementosAMostrar = this.arrayElemMultimedia.slice(posicion, posicion + 7);
        console.log('3');
        console.log(this.arrayElemMultimedia.slice(0, 7));*/
        this.elementosAMostrar = this.arrayElemMultimedia;
    }
    /*hover(event) {
        /!*event.target.parentNode.childNodes.className('unhovered');
        event.target.className('hovered');*!/
        event.target.parentNode.addClass('unhovered');
    }
    unhover(event) {
        event.target.parentNode.childNodes.classList = '';
    }*/
}
