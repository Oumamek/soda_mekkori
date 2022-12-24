import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.scss']
})
export class FilmsListComponent implements OnInit {

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
  message: any;

  constructor() { }

  ngOnInit() {
  }

  gotoDetails(filmId: any) {
    this.message = this.films.find(x => x.id == filmId);
  }

}