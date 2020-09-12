import { Injectable } from '@angular/core';
import { Countries } from './countries';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private http:HttpClient) { }

  getCountries():Observable<Countries[]>{
    return this.http.get<Countries[]>('https://restcountries.eu/rest/v2/')
  }
}
