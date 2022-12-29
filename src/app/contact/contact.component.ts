import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Contact } from '../models/contact';
import Validation from './validation';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent {
  form: FormGroup = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    age: new FormControl(''),
    email: new FormControl(''),
    commentaire: new FormControl(''),
    hideEmail: new FormControl(false),
  });
  submitted = false;
  private newContact: Contact;
  constructor(public router: Router,private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        firstname: ['', Validators.required],
        lastname: ['', Validators.required],
        age: ['',Validators.pattern("^\\d+$")],
        email: ['', [Validators.required, Validators.email]],
        commentaire: ['', Validators.required],
        hideEmail: [false]
      },
      {
        validators: [Validation.emailCheck('email', 'hideEmail')]
      }
    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    this.newContact = new Contact(this.form.value.firstname,this.form.value.lastname,
      this.form.value.age,this.form.value.email,this.form.value.commentaire);

    sessionStorage.setItem('contactData', JSON.stringify(this.newContact));
    alert('Le formulaire est valide');
    this.router.navigate(['accueil']);
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }
}
