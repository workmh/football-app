import { Component, OnInit } from '@angular/core';
import { TeamsService } from 'src/app/services/teams.service';
import { Team } from 'src/app/models/team.model';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {

  teams: Team [] = []
  //team:



  constructor(
    private teamsService: TeamsService
  ) {

  }


  ngOnInit() {

    this.teamsService.getAllTeams()
    .subscribe(data => {
      this.teams = data.response;
      console.log(data.response)
    });
  }
}
