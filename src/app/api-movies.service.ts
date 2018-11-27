import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pelicula } from './models/pelicula';
import { Serie } from './models/Serie';

@Injectable({
    providedIn: 'root'
})

export class ApiMoviesService {
    url = 'https://api.themoviedb.org/3/discover';

    url_img_base = 'https://image.tmdb.org/t/p/w300';
    peliculasPopulares: Pelicula[];

    peliculasJaponesas: Pelicula[];
    seriesJaponesas: Serie[];
    peliculasYSeriesJaponesas: object[];
    apikey = '8d1ff0fd31d021c4902d57908c87f3fc';
    constructor(private http: HttpClient ) { }
    getMoviesByPopularity() {
        this.peliculasPopulares = [];
        this.http.get(this.url + '/movie' + '?api_key=' + this.apikey)
            .subscribe(datos => {
                for (let peli of datos['results']) {
                    this.peliculasPopulares.push(new Pelicula(
                        peli.id,
                        peli.title,
                        this.url_img_base + peli.poster_path + '?api_key=' + this.apikey,
                        peli.overview,
                        peli.release_date,
                        peli.vote_average
                    ));
                    if (this.peliculasPopulares.length === 7) {
                        break;
                    }
                }
            });
        return this.peliculasPopulares;
    }
    getPeliculasJaponesas() {
        this.peliculasJaponesas = [];
        this.http.get(this.url + '/movie' + '?api_key=' + this.apikey + '&with_original_language=ja')
            .subscribe(datos => {
                for (let peli of datos['results']) {
                    this.peliculasJaponesas.push(new Pelicula(
                        peli.id,
                        peli.title,
                        this.url_img_base + peli.poster_path + '?api_key=' + this.apikey,
                        peli.overview,
                        peli.release_date,
                        peli.vote_average
                    ));
                    if (this.peliculasJaponesas.length === 7) {
                        break;
                    }
                }
            });
        console.log(this.peliculasJaponesas);
        return this.peliculasJaponesas;
    }
    getSeriesJaponesas() {
        this.seriesJaponesas = [];
        this.http.get(this.url + '/tv' + '?api_key=' + this.apikey + '&with_original_language=ja')
            .subscribe(datos => {
                for (let peli of datos['results']) {
                    this.seriesJaponesas.push(new Serie(
                        peli.id,
                        peli.title,
                        this.url_img_base + peli.poster_path + '?api_key=' + this.apikey,
                        peli.overview,
                        peli.release_date,
                        peli.vote_average
                    ));
                    if (this.seriesJaponesas.length === 7) {
                        break;
                    }
                }
            });
        console.log(this.seriesJaponesas);
        return this.seriesJaponesas;
    }
}
