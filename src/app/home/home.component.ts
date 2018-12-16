import { Component, OnInit } from '@angular/core';
import {ElemMultimedia} from '../models/ElemMultimedia';
import {ApiMoviesService} from '../api-movies.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

 /* Es este componente el que ahora esta haciendo las peticiones
al servicio y le pasa al carrousel el array de peliculas
 que corresponda */

export class HomeComponent implements OnInit {
    trendingToday: ElemMultimedia[];
    popularMovies: ElemMultimedia[];
    popularMoviesToday: ElemMultimedia[];
    japMovies: ElemMultimedia[];
    popularSeries: ElemMultimedia[];
    japSeries: ElemMultimedia[];
    constructor(private apiMoviesService: ApiMoviesService) { }

    ngOnInit() {
        this.getMultimedia();
    }
    /* Hace todas las peticiones que despues va a pasar al carrousel
     pasandole al servicio directamente la url. Es un poco sucio
     pero el plan es cambiar t odo el funcionamiento cuando implemente
     mi propia api para hacere peticiones a la base de datos*/
    getMultimedia() {
        this.trendingToday = this.apiMoviesService.getElemsMult('/api/discover/series');
        this.popularMovies = this.apiMoviesService.getElemsMult('/api/discover/movies/popularity');
        this.popularSeries = this.apiMoviesService.getElemsMult('/api/discover/series/popularity');
        this.popularMoviesToday = this.apiMoviesService.getElemsMult('/api/discover/movies');
        this.japMovies = this.apiMoviesService.getElemsMult('/api/discover/movies?original_language=ja');
        this.japSeries = this.apiMoviesService.getElemsMult('/api/discover/series?original_language=ja');
    }
}

