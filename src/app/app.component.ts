import { Component } from '@angular/core';
import { SignupComponent } from './signup/signup.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [SignupComponent]
})
export class AppComponent {
  title = "app works!";
}
