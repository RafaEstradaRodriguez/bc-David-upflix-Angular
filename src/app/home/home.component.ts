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
    jap: ElemMultimedia[];
    popularSeries: ElemMultimedia[];
    japSeries: ElemMultimedia[];
    constructor(private apiMoviesService: ApiMoviesService) { }

    ngOnInit() {
        this.getMultimedia();
    }
    /* Hace todas las peticiones que despues va a pasar al carrousel
     pasandole al servicio directamente la url. Es un poco sucio
     pero el plan es cambiar todo el funcionamiento cuando implemente
     mi propia api para hacere peticiones a la base de datos*/
    getMultimedia() {
        this.trendingToday =
            this.apiMoviesService.getElemsMult
            ('https://api.themoviedb.org/3/trending/all/day?api_key=8d1ff0fd31d021c4902d57908c87f3fc');
        console.log('trendingToday');
        console.log(this.trendingToday);
        this.popularMovies =
            this.apiMoviesService.getElemsMult
            ('https://api.themoviedb.org/3/discover/movie?api_key=8d1ff0fd31d021c4902d57908c87f3fc');
        console.log('popularMovies');
        console.log(this.popularMovies);
        this.popularSeries =
            this.apiMoviesService.getElemsMult
            ('https://api.themoviedb.org/3/discover/tv?api_key=8d1ff0fd31d021c4902d57908c87f3fc');
        console.log('popularSeries');
        console.log(this.popularSeries);
        this.popularMoviesToday =
            this.apiMoviesService.getElemsMult
            ('https://api.themoviedb.org/3/trending/movie/day?api_key=8d1ff0fd31d021c4902d57908c87f3fc');
        console.log('popularMoviesToday');
        console.log(this.popularMoviesToday);
        this.japMovies =
            this.apiMoviesService.getElemsMult
            ('https://api.themoviedb.org/3/discover/movie?api_key=8d1ff0fd31d021c4902d57908c87f3fc&with_original_language=ja');
        console.log('japMovies');
        console.log(this.japMovies);
        this.jap =
            this.apiMoviesService.getElemsMult
            ('https://api.themoviedb.org/3/discover?api_key=8d1ff0fd31d021c4902d57908c87f3fc&with_original_language=ja');
        console.log('jap');
        console.log(this.jap);
        this.japSeries =
            this.apiMoviesService.getElemsMult
            ('https://api.themoviedb.org/3/discover/tv?api_key=8d1ff0fd31d021c4902d57908c87f3fc&with_original_language=ja');
        console.log('japSeries');
        console.log(this.japSeries);
    }
}
    /*setElemMultimedia(posicion = 0) {
        /!*console.log('2');
        console.log(this.arrayElemMultimedia);
        console.log(posicion);
        console.log(this.arrayElemMultimedia.slice(0, 7));
        this.elementosAMostrar = this.arrayElemMultimedia.slice(posicion, posicion + 7);
        console.log('3');
        console.log(this.arrayElemMultimedia.slice(0, 7));*!/
        this.elementosAMostrar = this.arrayElemMultimedia;
    }*/

