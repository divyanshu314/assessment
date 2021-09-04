import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  emailId: string;
  firstName: string;
  error: string;
  constructor(
    private getUsers: LoginService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  //Authenticate user
  verifyUser() {
    this.error = "";
    this.getUsers.getUserDetails(this.emailId).subscribe(res => {
      console.log(res);
      if (res.length > 0) {
        this.router.navigate(["home"]);
      } else {
        this.error = "You are not authenticated to login, Please try again";
        return false;
      }
    });
  }

}
