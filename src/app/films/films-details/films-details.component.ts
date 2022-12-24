import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-films-details',
  templateUrl: './films-details.component.html',
  styleUrls: ['./films-details.component.scss']
})
export class FilmsDetailsComponent  {

  @Input() message: any;

  films = [
    {
      id: 1,
      filmName: 'The Dark Knight',
      affiche: '/assets/dark.jpeg'
    },
    {
      id: 2,
      filmName: 'The Godfather',
      affiche: '/assets/father.jpeg'
    },
    {
      id: 3,
      filmName: 'Titanic',
      affiche: '/assets/titanic.jpeg'
    },
    {
      id: 4,
      filmName: 'The Green Mile',
      affiche: '/assets/La-ligne-verte.jpeg'
    },
    {
      id: 5,
      filmName: 'Back to the Future',
      affiche: '/assets/Retour-vers-le-futur.jpeg'
    }
  ];
  
  ngOnInit() {
  }

}
