import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  moduleId: module.id,
  selector: 'app-editarnegocio',
  templateUrl: 'editarnegocio.component.html',
  styleUrls: ['editarnegocio.component.css']
})
export class EditarnegocioComponent implements OnInit {

  constructor(public router: Router) {}

  ngOnInit() {
  }

  cancelarCambios(){
    this.router.navigate(['/negocios']).then();
  }

}
