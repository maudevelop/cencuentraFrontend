import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

  logIn (email: HTMLInputElement, password: HTMLInputElement) {
    console.log("Logging in: " + email.value + " and password " + password.value);
  }

}
