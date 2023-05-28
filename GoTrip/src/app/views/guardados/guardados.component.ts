import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-guardados',
  templateUrl: './guardados.component.html',
  styleUrls: ['./guardados.component.scss']
})
export class GuardadosComponent {


  rutasArchivos = ['assets/files/japon.txt', 'assets/files/usa.txt', 'assets/files/spain.txt'];
  arrayPaises = ['Japón', 'USA', 'España'];
  paisGuardado:string[] = [];

  lugaresVisitar: any = [];
  imagenesLugares: any = [];
  valoracionesGuardados: number[] = [];
  numLugaresGuardados: number[] = [];

  constructor(private router: Router, private route: ActivatedRoute, private httpClient: HttpClient) { }

  ngOnInit() {
    this.cargarSitiosGuardados();
  }


  public cargarSitiosGuardados() {

    for (let i = 0; i < this.rutasArchivos.length; i++) {
      this.httpClient.get(this.rutasArchivos[i]).subscribe((data: any) => {

        if (this.arrayPaises[i] == "Japón") {

          for (let j=0; j < data[this.arrayPaises[i]].length; j++) {
            if (data[this.arrayPaises[i]][j].guardado == "true") {

              this.lugaresVisitar.push({"lugar": data[this.arrayPaises[i]][j], "pais": this.arrayPaises[i]});
              this.paisGuardado.push(this.arrayPaises[i]);

            }
          }

        }
        else if (this.arrayPaises[i] == "USA") {

          for (let j = 0; j < data[this.arrayPaises[i]].length; j++) {
            if (data[this.arrayPaises[i]][j].guardado == "true") {

              this.lugaresVisitar.push({"lugar": data[this.arrayPaises[i]][j], "pais": this.arrayPaises[i]});
              this.paisGuardado.push(this.arrayPaises[i]);
            }
          }
        }
        else if (this.arrayPaises[i] == "España") {

          for (let j = 0; j < data[this.arrayPaises[i]].length; j++) {
            if (data[this.arrayPaises[i]][j].guardado == "true") {

              this.lugaresVisitar.push({"lugar": data[this.arrayPaises[i]][j], "pais": this.arrayPaises[i]});
              this.paisGuardado.push(this.arrayPaises[i]);
            }
          }
        }

      });

    }

  }


  public irDescripcion(pais: string, ciudad: string) {
    this.router.navigate(['/descripcion', pais, ciudad]);
  }


}
