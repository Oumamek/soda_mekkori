import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmsListComponent } from './films-list/films-list.component';
import {FilmsDetailsComponent} from "./films-details/films-details.component";

const routes: Routes = [

  {
    path: 'films',
    component: FilmsListComponent,
      children: [
        { path: 'The Dark Knight', component: FilmsDetailsComponent },
        { path: 'The Godfather', component: FilmsDetailsComponent },
        { path: 'Titanic', component: FilmsDetailsComponent },
        { path: 'The Green Mile', component: FilmsDetailsComponent },
        { path: 'Back to the Future', component: FilmsDetailsComponent }
        ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class FilmsRoutingModule { }
