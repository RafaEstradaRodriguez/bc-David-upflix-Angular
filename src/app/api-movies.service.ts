import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ElemMultimedia } from './models/ElemMultimedia';
import {arrayify} from 'tslint/lib/utils';

@Injectable({
    providedIn: 'root'
})

/* Este servicio de momento tiene una unica funcion que hace
* peticiones a la api de omdb.*/

export class ApiMoviesService {
    /*https://api.themoviedb.org/3/discover/tv?api_key=8d1ff0fd31d021c4902d57908c87f3fc*/
    url_img_base = 'https://image.tmdb.org/t/p/w300';
    apikey = '8d1ff0fd31d021c4902d57908c87f3fc';
    constructor(private http: HttpClient ) {}
    getElemsMult(url) {
        const elemsMult = [];
        this.http.get(url)
            .subscribe(datos => {
                for (const elem of datos['results']) {
                    if (elem.name !== undefined) {
                        elemsMult.push(new ElemMultimedia(
                            elem.id,
                            elem.name,
                            this.url_img_base + elem.backdrop_path + '?api_key=' + this.apikey,
                            elem.overview,
                            elem.first_air_date,
                            elem.vote_average
                        ));
                    } else {
                        elemsMult.push(new ElemMultimedia(
                            elem.id,
                            elem.title,
                            this.url_img_base + elem.backdrop_path + '?api_key=' + this.apikey,
                            elem.overview,
                            elem.release_date,
                            elem.vote_average
                        ));
                    }
                }
            });
        return elemsMult;
    }
}
