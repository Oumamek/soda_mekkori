import { Component, OnInit } from '@angular/core';
import {Film} from "../../models/film";

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.scss']
})
export class FilmsListComponent implements OnInit {

  film1 : Film = {id: 1 ,title:'The Dark Knight',path:'/assets/dark.jpeg'};
  film2 : Film = {id: 2 ,title:'The Godfather',path: '/assets/father.jpeg'};
  film3 : Film = {id: 3 ,title:'Titanic', path:'/assets/titanic.jpeg'};
  film4 : Film = {id: 4 ,title:'The Green Mile', path:'/assets/La-ligne-verte.jpeg'};
  film5 : Film = {id: 5 ,title:'Back to the Future', path:'/assets/Retour-vers-le-futur.jpeg'};

  films: Film[]  = [this.film1, this.film2, this.film3,this.film4,this.film5];

  choosenFilm: any;

  constructor() { }

  ngOnInit() {
  }

  gotoDetails(filmId: number) {
     this.choosenFilm = this.films.find(x => x.id == filmId);
  }

}
