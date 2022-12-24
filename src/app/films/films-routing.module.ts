import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmsComponent } from './films/films.component';
import { FilmsDetailsComponent } from './films-details/films-details.component';
import { FilmsListComponent } from './films-list/films-list.component';

const routes: Routes = [
  
  {
    path: 'films',
    component: FilmsComponent,
    children: [
      {
        path: '',
        component: FilmsListComponent,
        children: [
          {
            path: 'film/:id',
            component: FilmsDetailsComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class FilmsRoutingModule { }
