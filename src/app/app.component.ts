import { Component } from '@angular/core';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { LogsignComponent } from './logsign/logsign.component';
import { AdminComponent } from './admin/admin.component';
import { NegociosComponent } from './negocios/negocios.component';
import { ROUTER_DIRECTIVES } from '@angular/router';


@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: 
    [
    SignupComponent, LoginComponent, LogsignComponent, AdminComponent, NegociosComponent, ROUTER_DIRECTIVES
    ]
})

export class AppComponent {
  
}
