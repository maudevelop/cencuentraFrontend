import { Component, OnInit } from '@angular/core';
import { Router,  ROUTER_DIRECTIVES } from '@angular/router';


@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class LoginComponent implements OnInit {
  logsign = true;
  constructor(public router: Router) {
    
  }

  ngOnInit() {
  }

  logIn (email: HTMLInputElement, password: HTMLInputElement) {
    console.log("Logging in: " + email.value + " and password " + password.value);
    this.router.navigate(['/admin']).then();
  }

}
