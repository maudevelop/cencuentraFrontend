import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router'; 

@Component({
  moduleId: module.id,
  selector: 'app-logsign',
  templateUrl: 'logsign.component.html',
  styleUrls: ['logsign.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class LogsignComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
