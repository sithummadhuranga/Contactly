import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { Contact } from './models/contact.model';
import { AsyncPipe, CommonModule } from '@angular/common';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HttpClientModule, AsyncPipe, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  http = inject(HttpClient);
  
  contactsForm = new FormGroup({
    name: new FormControl<string>('', [Validators.required, Validators.minLength(2)]),
    email: new FormControl<string | null>(null, [Validators.email]),
    phone: new FormControl<string>('', [Validators.required, Validators.pattern(/^\+?[\d\s\-\(\)]+$/)]),
    favorite: new FormControl<boolean>(false)
  });

  contacts$ = this.getContacts();
  isSubmitting = false;

  get isFormValid() {
    return this.contactsForm.valid;
  }

  onFormSubmit() {
    if (!this.isFormValid || this.isSubmitting) return;
    
    this.isSubmitting = true;
    const addContactRequest = {
      name: this.contactsForm.value.name,
      email: this.contactsForm.value.email,
      phone: this.contactsForm.value.phone,
      favourite: this.contactsForm.value.favorite
    };

    this.http.post('https://localhost:7267/api/Contacts', addContactRequest)
      .subscribe({
        next: (value) => {
          console.log(value);
          this.contacts$ = this.getContacts();
          this.contactsForm.reset();
          this.isSubmitting = false;
        },
        error: (error) => {
          console.error('Error adding contact:', error);
          this.isSubmitting = false;
        }
      });
  }

  onDelete(id: string) {
    if (confirm('Are you sure you want to delete this contact?')) {
      this.http.delete(`https://localhost:7267/api/Contacts/${id}`)
        .subscribe({
          next: (value) => {
            this.contacts$ = this.getContacts();
          },
          error: (error) => {
            console.error('Error deleting contact:', error);
          }
        });
    }
  }

  private getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>('https://localhost:7267/api/Contacts');
  }
}