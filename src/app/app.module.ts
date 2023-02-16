import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountriesComponent } from './components/countries/countries.component';
import { CountryComponent } from './components/country/country.component';
import { NavbarGrillaComponent } from './components/navbar-grilla/navbar-grilla.component';
import { NavbarMainComponent } from './components/navbar-main/navbar-main.component';
import { PlayersComponent } from './components/players/players.component';

@NgModule({
  declarations: [
    AppComponent,
    CountriesComponent,
    CountryComponent,
    NavbarGrillaComponent,
    NavbarMainComponent,
    PlayersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
