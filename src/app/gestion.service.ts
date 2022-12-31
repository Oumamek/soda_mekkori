import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GestionService {

  constructor() { }

  get contact():any {
    if(sessionStorage['contactData'] == null)
      return null;
    var data = JSON.parse(sessionStorage['contactData']);
    return data;
  }
}
