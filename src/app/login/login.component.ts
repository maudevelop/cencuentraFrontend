import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class LoginComponent implements OnInit {
  logsign = true;
  constructor() {}

  ngOnInit() {
  }

  logIn (email: HTMLInputElement, password: HTMLInputElement) {
    console.log("Logging in: " + email.value + " and password " + password.value);
  }

}
