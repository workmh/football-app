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
import { GamesComponent } from './components/games/games.component';
import { TeamsComponent } from './components/teams/teams.component';
import { TeamComponent } from './components/team/team.component';
import { WidgetGameComponent } from './components/widget-game/widget-game.component';
import { WidgetGamesComponent } from './components/widget-games/widget-games.component';
import { HomeComponent } from './components/home/home.component';
import { LeaguesComponent } from './components/leagues/leagues.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { LeagueComponent } from './components/league/league.component';

@NgModule({
  declarations: [
    AppComponent,
    CountriesComponent,
    CountryComponent,
    NavbarGrillaComponent,
    NavbarMainComponent,
    PlayersComponent,
    GamesComponent,
    TeamsComponent,
    TeamComponent,
    WidgetGameComponent,
    WidgetGamesComponent,
    HomeComponent,
    LeaguesComponent,
    PagenotfoundComponent,
    LeagueComponent
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
