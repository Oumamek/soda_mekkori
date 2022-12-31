import { Component} from '@angular/core';
import {GestionService} from "../gestion.service";
import { Contact } from '../models/contact';
@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.scss']
})
export class GestionComponent {

  contactForm: Contact;
  constructor(private service: GestionService) {
  }
   
  ngOnInit(): void {
    this.service.contact.subscribe(cont => this.contactForm = cont)
  }

}
