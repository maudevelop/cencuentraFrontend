import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-signup',
  templateUrl: 'signup.component.html',
  styleUrls: ['signup.component.css']
})
export class SignupComponent implements OnInit {

 
  constructor() {}

  ngOnInit() {
    
  }

  signUp(user: HTMLInputElement, email: HTMLInputElement, password:HTMLInputElement) {

    console.log("Signing up with: \n " + user.value + "\n" + email.value + "\n" + password.value);
    
  }
}
