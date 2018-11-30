import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ElemMultimedia } from './models/ElemMultimedia';

@Injectable({
    providedIn: 'root'
})

/* Este servicio de momento tiene una unica funcion que hace
* peticiones a la api de omdb.*/

export class ApiMoviesService {
    /*https://api.themoviedb.org/3/discover/tv?api_key=8d1ff0fd31d021c4902d57908c87f3fc*/
    url_img_base = 'https://image.tmdb.org/t/p/w300';
    apikey = '8d1ff0fd31d021c4902d57908c87f3fc';
    elemsMult: ElemMultimedia[];
    constructor(private http: HttpClient ) {
        /*Tengo dudas acerca de donde vaciar el array de peliculas
        Si lo hago asi, se llena cada carrousel de peliculas*/
        this.elemsMult = [];
    }
    getElemsMult(url) {
        /* Y si vacio el array aqui, entonces salen todos los carrouseles
        vacios menos el ultimo, que sale con todas las peliculas del
        resto de carrouseles */
        // this.elemsMult = [];
        /* Y si no lo vacio nunca, peta todo sin ningun sentido*/
        /*console.log(0);
        console.log(this.elemsMult);
        console.log(url);*/
        this.http.get(url)
            .subscribe(datos => {
                for (const elem of datos['results']) {
                    if (elem.name !== undefined) {
                        this.elemsMult.push(new ElemMultimedia(
                            elem.id,
                            elem.name,
                            this.url_img_base + elem.backdrop_path + '?api_key=' + this.apikey,
                            elem.overview,
                            elem.first_air_date,
                            elem.vote_average
                        ));
                    } else {
                        this.elemsMult.push(new ElemMultimedia(
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
       /* console.log(2);
        console.log(this.elemsMult);*/
        return this.elemsMult;
    }
}
