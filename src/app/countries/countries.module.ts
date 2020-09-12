import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountriesListComponent } from './countries-list/countries-list.component';



@NgModule({
  declarations: [CountriesListComponent],
  imports: [
    CommonModule
  ],
  exports:[CountriesListComponent]
})
export class CountriesModule { }
