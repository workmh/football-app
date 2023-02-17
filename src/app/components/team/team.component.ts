import { Component, OnInit, Input } from '@angular/core';
import { Team } from '../../models/team.model';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent {

  @Input() team: Team = {
    id: 0,
    name: '',
    code: '',
    country: '',
    founded: 0,
    national: false,
    logo: ''
  };

  constructor() { }



}
