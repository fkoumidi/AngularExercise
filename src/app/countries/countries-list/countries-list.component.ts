import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../countries.service';
import { Countries } from '../countries';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.scss']
})
export class CountriesListComponent implements OnInit {

  title ='Countries';
  countries:Countries[];
  arrCountries=[];
  inside=[];
  size=[1,2,3,4,5];


  constructor(private countriesSertvice:CountriesService) { }

  ngOnInit(): void {
   this.countriesSertvice.getCountries().subscribe(countries =>{
     this.countries=countries

    for(let i=0;i<countries.length;i++ ){
      for(let j=0; j<5;j++){
        this.inside.push(countries[i+j])
      }
      i+=4;
      this.arrCountries.push(this.inside)
      this.inside=[];
    }
    console.log(this.arrCountries.length)
   });
  }

}

// .filter(country => country.region=='Asia');
//.filter(country => country.population>4000000)
