import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-admin',
  templateUrl: 'admin.component.html',
  directives: [ROUTER_DIRECTIVES],
  styleUrls: []
})
export class AdminComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }


}
