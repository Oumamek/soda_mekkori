import { Component, Input } from '@angular/core';
import {Film} from "../../models/film";


@Component({
  selector: 'app-films-details',
  templateUrl: './films-details.component.html',
  styleUrls: ['./films-details.component.scss']
})
export class FilmsDetailsComponent  {

  @Input() film: Film;
  ngOnInit() {
  }

}
