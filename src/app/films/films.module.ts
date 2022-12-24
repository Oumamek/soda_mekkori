import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilmsRoutingModule } from './films-routing.module';
import { FilmsComponent } from './films/films.component';
import { FilmsListComponent } from './films-list/films-list.component';
import { FilmsDetailsComponent } from './films-details/films-details.component';


@NgModule({
  declarations: [
    FilmsComponent,
    FilmsListComponent,
    FilmsDetailsComponent
  ],
  imports: [
    CommonModule,
    FilmsRoutingModule
  ]
})
export class FilmsModule { }
