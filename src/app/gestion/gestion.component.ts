import { Component} from '@angular/core';
import {GestionService} from "../gestion.service";
@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.scss']
})
export class GestionComponent {

  constructor(private service: GestionService) {
  }
   contactForm =this.service.contact;


}
