import { Injectable } from '@angular/core';
import { Contact } from './models/contact';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GestionService {

  private contactForm = new BehaviorSubject<any>({});
  contact = this.contactForm.asObservable();

  constructor() { }  

  sendContactForm(contactForm: Contact) {
    if (contactForm != null) {
      this.contactForm.next(contactForm);
    }
  }

}
