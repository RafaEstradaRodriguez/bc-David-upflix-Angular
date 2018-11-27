import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ElemMultimedia} from './models/ElemMultimedia';

@Injectable({
    providedIn: 'root'
})

export class ApiMoviesService {
    /*https://api.themoviedb.org/3/discover/tv?api_key=8d1ff0fd31d021c4902d57908c87f3fc*/
    url_img_base = 'https://image.tmdb.org/t/p/w300';
    apikey = '8d1ff0fd31d021c4902d57908c87f3fc';
    elemsMult: ElemMultimedia[];
    constructor(private http: HttpClient ) { }
    getElemsMult(url) {
        this.elemsMult = [];
        const array = [];
        console.log(url);
        this.http.get(url)
            .subscribe(datos => {
                for (const elem of datos['results']) {
                    if (elem.name !== undefined) {
                        console.log(elem.name);
                        this.elemsMult.push(new ElemMultimedia(
                            elem.id,
                            elem.name,
                            this.url_img_base + elem.backdrop_path + '?api_key=' + this.apikey,
                            elem.overview,
                            elem.first_air_date,
                            elem.vote_average
                        ));
                        /*console.log(elem.id,
                            elem.name,
                            this.url_img_base + elem.backdrop_path + '?api_key=' + this.apikey,
                            elem.overview,
                            elem.first_air_date,
                            elem.vote_average);
                        array.push(elem.id);*/
                    } else {
                        console.log(elem.title);
                        this.elemsMult.push(new ElemMultimedia(
                            elem.id,
                            elem.title,
                            this.url_img_base + elem.backdrop_path + '?api_key=' + this.apikey,
                            elem.overview,
                            elem.release_date,
                            elem.vote_average
                        ));
                        array.push(elem.id);
                    }
                }
            });
        console.log(array);
        console.log(this.elemsMult);
        return this.elemsMult;
    }
}
