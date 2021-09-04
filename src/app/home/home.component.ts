import { Component, OnInit } from '@angular/core';
import { Company } from '../interfaces/company.interface';
import { HomeService } from './home.service';
import { Contact } from '../interfaces/contact.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  companies: Company[];
  name: string;
  country: string;
  phone: string;
  updateName: string;
  updateCountry: string;
  updatePhone: string;
  contacts: Contact[] = [];
  displayedColumns: string[] = ['id', 'name', 'country', 'phone', 'action'];
  actionForm: string = "";
  id: number;
  logo: string;
  companyName: string;
  companyDesc: string;
  constructor(
    private homeService: HomeService,
    private router: Router
  ) { }

  ngOnInit() {
    this.homeService.getCompanies().subscribe(res => {
      this.companies = res;
    })
    this.homeService.getContacts().subscribe(res => {
      this.contacts = res;
    })
  }

  //Method to get company details selected
  onCompanySelect(obj: any) {
    this.homeService.getSelectedCompany(obj.value.id).subscribe((res) => {
      this.companyName = res[0].name;
      this.companyDesc = res[0].description;
      this.logo = res[0].logo;
    })
  }

  //Method to pass value to ngIf to update contact and passing data from table to form
  edit(rowData: Contact) {
    this.actionForm = "update";
    this.updatePhone = rowData.phone;
    this.updateCountry = rowData.country;
    this.updateName = rowData.name;
    this.id = rowData.id;
  }

  //Method to pass value to ngIf to add contact
  addContactBtn() {
    this.actionForm = "add";
  }

  //Method to clear ngIf for add and update forms
  cancel() {
    this.actionForm = "";
  }

  //Method to delete contact
  delete(id: number) {
    this.homeService.deleteContact(id).subscribe(res => {
      alert("Contact deleted successfully");
    }, err=>{
      alert("Couldn't delete contact at the moment");
    })
  }

  //Method to add contact
  addContact() {
    let contact: Contact = { name: this.name, country: this.country, phone: this.phone }
    this.homeService.addContact(contact).subscribe(res => {
      alert("Contact added successfully");
      this.actionForm = "";
    }, err=>{
      alert("Couldn't add contact at the moment");
    })
  }

  //Method to update contact
  updateContact() {
    let contact: Contact = { name: this.updateName, country: this.updateCountry, phone: this.updatePhone, id: 1 }
    this.homeService.updateContact(contact).subscribe(res => {
      alert("Contact updated successfully");
      this.actionForm = "";
    }, err=>{
      alert("Couldn't update contact at the moment");
    })
  }

  //Back to login
  exit(){
    this.router.navigate([""]);
  }

}
