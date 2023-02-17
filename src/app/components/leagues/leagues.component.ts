import { Component, OnInit } from '@angular/core';
import { LeaguesService } from '../../services/leagues.service';
import { League } from '../../models/league.model';

@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.component.html',
  styleUrls: ['./leagues.component.scss']
})
export class LeaguesComponent implements OnInit {

  leagues: any;
  league: League [] = []

  constructor(
    private leaguesService: LeaguesService
  ) {

  }

  ngOnInit() {

    this.leaguesService.getAllLeagues()
    .subscribe(data => {
      this.leagues = data.response;
      console.log(data.response)
    });
  }

}
