import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-descripcion',
  templateUrl: './descripcion.component.html',
  styleUrls: ['./descripcion.component.scss']
})
export class DescripcionComponent {

  lugaresVisitar: any = [];
  images: any = [];

  sub: any = "";
  imagenPortadaSitio = "";
  pais = "";
  ciudad = "";
  visitadoSitio = false;
  guardadoSitio = false;
  rating = 0;
  descripcionSitio = "";
  planificacionDias: any = [];
  planificacionNombres:any = [];
  numeroSitios:any = [];
  precioSitio = 0;


  constructor(private httpClient: HttpClient, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.cargarDescripcion();

    switch (this.pais) {

      case 'Japón':
        this.httpClient.get("assets/files/japon.txt").subscribe((data: any) => {

          for (let i = 0; i < data[this.pais].length; i++) {
            if (data[this.pais][i].nombreCiudad == this.ciudad) {
              this.lugaresVisitar.push(data[this.pais][i].lugaresAVisitar);
              this.descripcionSitio = data[this.pais][i].descripcion;
              this.precioSitio = data[this.pais][i].precio;
              this.rating = data[this.pais][i].valoracion;
              this.guardadoSitio = data[this.pais][i].guardado;
              this.visitadoSitio = data[this.pais][i].visitado;
              this.imagenPortadaSitio = data[this.pais][i].imagenPortada;
            }
          }

          for (let i = 0; i < this.lugaresVisitar.length; i++) {
            for (let j = 0; j < this.lugaresVisitar[i].length; j++) {
              if (this.lugaresVisitar[i][j].imagenUrl != undefined) {
                this.images.push(this.lugaresVisitar[i][j].imagenUrl);
                this.planificacionDias.push(this.lugaresVisitar[i][j].dia);
                this.planificacionNombres.push(this.lugaresVisitar[i][j].nombreLugar);
                this.numeroSitios.push(j);
              }
            }
          }

        });
        break;
      case 'USA':
        console.log("EEUU");
        break;
      case 'España':
        console.log("España");
        break;

    }




  }


  public cargarDescripcion() {
    this.sub = this.activatedRoute.params.subscribe(params => {
      this.pais = params['pais'];
      this.ciudad = params['ciudad'];
    });

  }



  public irCarrusel(pais: string, ciudad: string) {
    this.router.navigate(['/carrusel', pais, ciudad]);

  }

  public volverTourList(pais: string) {
    this.router.navigate(['/tour-list', pais]);
  }


}
