import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-tour-list',
  templateUrl: './tour-list.component.html',
  styleUrls: ['./tour-list.component.scss']
})
export class TourListComponent {

  sub: any = "";
  paisElegido = "";

  constructor(private httpClient: HttpClient, private router: Router, private activatedRoute: ActivatedRoute) {
  }




  public cargarPais() {
    this.sub = this.activatedRoute.params.subscribe(params => {
      this.paisElegido = params['pais'];
    });
  }



  public irADescripcion(pais: string, ciudad: string) {
    this.router.navigate(['/descripcion', pais, ciudad]);
  }

}
