import { Component, OnInit } from '@angular/core';

import { Router, ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-signup',
  templateUrl: 'signup.component.html',
  styleUrls: ['signup.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class SignupComponent implements OnInit {


  constructor(public router: Router) {}

  ngOnInit() {
    
  }

  signUp(user: HTMLInputElement, email: HTMLInputElement, password:HTMLInputElement) {

    console.log("Signing up with: \n " + user.value + "\n" + email.value + "\n" + password.value);
    this.router.navigate(['/admin']).then();
  }
}
