import { Component, OnInit } from '@angular/core';
import {ElemMultimedia} from '../models/ElemMultimedia';
import {ApiMoviesService} from '../api-movies.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {
    trendingToday: ElemMultimedia[];
    popularMovies: ElemMultimedia[];
    popularMoviesToday: ElemMultimedia[];
    japMovies: ElemMultimedia[];
    jap: ElemMultimedia[];
    popularSeries: ElemMultimedia[];
    japSeries: ElemMultimedia[];
    constructor(private apiMoviesService: ApiMoviesService) { }

    ngOnInit() {
        this.getMulti();
    }
    getMulti() {
        this.trendingToday =
            this.apiMoviesService.getElemsMult
            ('https://api.themoviedb.org/3/trending/all/day?api_key=8d1ff0fd31d021c4902d57908c87f3fc');
        this.popularMovies =
            this.apiMoviesService.getElemsMult
            ('https://api.themoviedb.org/3/discover/movie?api_key=8d1ff0fd31d021c4902d57908c87f3fc');
        this.popularSeries =
            this.apiMoviesService.getElemsMult
            ('https://api.themoviedb.org/3/discover/tv?api_key=8d1ff0fd31d021c4902d57908c87f3fc');
        this.popularMoviesToday =
            this.apiMoviesService.getElemsMult
            ('https://api.themoviedb.org/3/trending/movie/day?api_key=8d1ff0fd31d021c4902d57908c87f3fc');
        this.japMovies =
            this.apiMoviesService.getElemsMult
            ('https://api.themoviedb.org/3/discover/movie?api_key=8d1ff0fd31d021c4902d57908c87f3fc&with_original_language=ja');
        this.jap =
            this.apiMoviesService.getElemsMult
            ('https://api.themoviedb.org/3/discover?api_key=8d1ff0fd31d021c4902d57908c87f3fc&with_original_language=ja');
        this.japSeries =
            this.apiMoviesService.getElemsMult
            ('https://api.themoviedb.org/3/discover/tv?api_key=8d1ff0fd31d021c4902d57908c87f3fc&with_original_language=ja');
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

