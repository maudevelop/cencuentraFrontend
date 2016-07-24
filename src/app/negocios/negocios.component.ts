import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-negocios',
  directives: [ROUTER_DIRECTIVES],
  templateUrl: 'negocios.component.html',
  styleUrls: ['negocios.component.css']
})
export class NegociosComponent implements OnInit {

  constructor(public router: Router) {}

  ngOnInit() {
  }

  modificarNegocio(negocio){
    this.router.navigate(["/editarnegocio"]).then();
    return false;
  }

}
