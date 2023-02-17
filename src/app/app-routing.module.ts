import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CountriesComponent } from './components/countries/countries.component';
import { LeaguesComponent } from './components/leagues/leagues.component';
import { PlayersComponent } from './components/players/players.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { WidgetGameComponent } from './components/widget-game/widget-game.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'countries',
    component: CountriesComponent
  },
  {
    path:'players',
    component: PlayersComponent
  },
  {
    path:'leagues',
    component: LeaguesComponent
  },
  {
    path: 'widgets',
    component: WidgetGameComponent
  },
  {
    path: '**',
    component: PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
