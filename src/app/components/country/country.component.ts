import { Component, OnInit, Input } from '@angular/core';

import { CountriesComponent } from '../countries/countries.component';
import { Country } from '../../models/country.model';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent {


  @Input() country: Country = {
    code: '',
    flag: '',
    name: '',

  };
  constructor() { }


}
