import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ElemMultimedia } from './models/ElemMultimedia';

@Injectable({
    providedIn: 'root'
})

/* Este servicio de momento tiene una unica funcion que hace
* peticiones a mi API.*/

export class ApiMoviesService {
    url_img_base = 'https://image.tmdb.org/t/p/w300';
    url_video_base = 'https://api.themoviedb.org/3/movie/';
    apikey = '8d1ff0fd31d021c4902d57908c87f3fc';
    constructor(private http: HttpClient ) {}
    getElemsMult(url) {
        const elemsMult = [];
        this.http.get(url)
            .subscribe(data => {
                for (const elem of data['results']) {
                    if (elem.name !== undefined) {
                        elemsMult.push(new ElemMultimedia(
                            elem.id,
                            elem.name,
                            `${this.url_img_base}${elem.backdrop_path}?api_key=${this.apikey}`,
                            elem.overview,
                            elem.first_air_date,
                            elem.vote_average,
                            `https://www.youtube.com/embed/${elem.trailerKey}?autoplay=1&controls=0&fs=0&disablekb=1&mute=1&loop=1`
                        ));
                    } else {
                        elemsMult.push(new ElemMultimedia(
                            elem.id,
                            elem.title,
                            this.url_img_base + elem.backdrop_path + '?api_key=' + this.apikey,
                            elem.overview,
                            elem.release_date,
                            elem.vote_average,
                            `https://www.youtube.com/embed/${elem.trailerKey}?autoplay=1&controls=0&fs=0&disablekb=1&mute=1&loop=1`
                        ));
                    }
                }
            });
        return elemsMult;
    }
}
