import { Component, OnInit, Input } from '@angular/core';
import { League } from '../../models/league.model'

@Component({
  selector: 'app-league',
  templateUrl: './league.component.html',
  styleUrls: ['./league.component.scss']
})
export class LeagueComponent {

  @Input() league: League = {
    id: 0,
    logo: '',
    name: '',
    type: '',


  };

  constructor() { }



}
