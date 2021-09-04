import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor( private http : HttpClient ) {  }

  getUserDetails(emailId: string){
    return this.http.get<any>('https://my-json-server.typicode.com/bokadedarvin/AngularDeveloperSample/users?email=' + emailId);
  }
}
