import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-promociones',
  directives: [ROUTER_DIRECTIVES],
  templateUrl: 'promociones.component.html',
  styleUrls: ['promociones.component.css']
})
export class PromocionesComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
