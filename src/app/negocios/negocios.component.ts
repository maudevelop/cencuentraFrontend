import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-negocios',
  directives: [ROUTER_DIRECTIVES],
  templateUrl: 'negocios.component.html',
  styleUrls: ['negocios.component.css']
})
export class NegociosComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
