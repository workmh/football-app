import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CountryService } from 'src/app/services/country.service';
import { Country } from '../../models/country.model';


@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {

  countries: any;



  constructor(
    private countryService: CountryService
  ) {

  }

  ngOnInit() {

    this.countryService.getAllCountries()
    .subscribe(data => {
      this.countries = data.response;
      console.log(data.response)
    });
  }




}
