import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { CarrouselComponent } from './carrousel/carrousel.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { SeriesComponent } from './series/series.component';
import { DetailComponent } from './detail/detail.component';

import { ApiMoviesService } from './api-movies.service';
import { DispSearchComponent } from './disp-search/disp-search.component';
@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        SearchFormComponent,
        CarrouselComponent,
        PeliculasComponent,
        SeriesComponent,
        DetailComponent,
        DispSearchComponent
    ],
    imports: [
        HttpClientModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule
    ],
    providers: [
        ApiMoviesService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
