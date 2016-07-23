import { Component } from '@angular/core';
import { LogsignComponent } from './logsign/logsign.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [LogsignComponent]
})
export class AppComponent {
  
}
