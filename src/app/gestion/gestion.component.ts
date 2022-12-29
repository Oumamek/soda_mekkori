import { Component} from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.scss']
})
export class GestionComponent {

  constructor(public router: Router) {
  }

  get contact():any {
    if(sessionStorage['contactData'] == null)
      return null;
    var data = JSON.parse(sessionStorage['contactData']);
    return data;
  }
}
