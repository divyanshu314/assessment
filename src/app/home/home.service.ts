import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from '../interfaces/company.interface';
import { Contact } from '../interfaces/contact.interface';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  //Get All Companies
  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>('https://my-json-server.typicode.com/bokadedarvin/AngularDeveloperSample/companies');
  }

  //Get Selected Companies Details
  getSelectedCompany(id: string): Observable<Company[]> {
    return this.http.get<Company[]>('https://my-json-server.typicode.com/bokadedarvin/AngularDeveloperSample/companies?id='+ id);
  }

  //Get All Contacts
  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>('https://my-json-server.typicode.com/bokadedarvin/AngularDeveloperSample/contacts');
  }

  //Add Contact
  addContact(contact : Contact): Observable<Contact> {
    return this.http.post<Contact>('https://my-json-server.typicode.com/bokadedarvin/AngularDeveloperSample/contacts', contact);
  }

  //Update Contact
  updateContact(contact : Contact): Observable<Contact> {
    return this.http.put<Contact>('https://my-json-server.typicode.com/bokadedarvin/AngularDeveloperSample/contacts', contact);
  }

  //Delete Contact
  deleteContact(id: number) {
    return this.http.delete<any>('https://my-json-server.typicode.com/bokadedarvin/AngularDeveloperSample/contacts?id='+ id);
  }

}
