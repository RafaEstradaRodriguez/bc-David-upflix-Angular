import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './home/home.component';
import {PeliculasComponent} from './peliculas/peliculas.component';
import {SeriesComponent} from './series/series.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'peliculas', component: PeliculasComponent},
    { path: 'series', component: SeriesComponent},
    { path: '**', redirectTo: 'home', pathMatch: 'full' },
    { path: 'detail/:id', component: DetailComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
