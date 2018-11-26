import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class ApiMoviesService {
    url = 'https://api.themoviedb.org/3/movie/550';
    elemsmult = [];
    apikey = '8d1ff0fd31d021c4902d57908c87f3fc';
    constructor(private http: HttpClient ) { }
    /*getMoviesByPopularity() {
        this.http.get<any[]>(this.url + '?' + 'apikey=' + this.apikey).subscribe(datos => this.elemsmult = datos.results);
        return this.http.get<any[]>(this.url);
    }*/
}

