import { Component } from '@angular/core';
import { HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.scss']
})
export class CarruselComponent {

  listaCiudades:any = [];
  images:any = [];
  pais = "Japón";
  tituloSitio:any = [];
  descripcionSitio:any = [];




  constructor(private httpClient: HttpClient) { }


  ngOnInit(): void {

    this.httpClient.get("assets/files/japon.txt").subscribe((data: any) => {

      for (let i = 0; i < data[this.pais].length; i++) {
        this.listaCiudades.push(data[this.pais][i].lugaresAVisitar);
      }

      for (let i = 0; i < this.listaCiudades.length; i++) {
        for (let j = 0; j < this.listaCiudades[i].length; j++) {
          if (this.listaCiudades[i][j].imagenUrl != undefined) {
            this.tituloSitio.push(this.listaCiudades[i][j].nombreLugar);
            this.images.push(this.listaCiudades[i][j].imagenUrl);
            this.descripcionSitio.push(this.listaCiudades[i][j].descripcion);
          }

        }
      }
      this.cambiarFondo(this.images[0]);
    });

  }


  public cambiarFondo(pathImagen: string) {

    let imagen = <HTMLElement>document.getElementById('background-imagen');
    let titulo = <HTMLElement>document.getElementById('titulo');
    let descripcion = <HTMLElement>document.getElementById('descripcion');
    titulo.innerText = this.tituloSitio[this.images.indexOf(pathImagen)];
    descripcion.innerText = this.descripcionSitio[this.images.indexOf(pathImagen)];

    imagen.style.backgroundImage = `url(${pathImagen})`;
    imagen.style.backgroundSize = 'cover';
    imagen.style.backgroundPosition = 'center';
    imagen.style.backgroundRepeat = 'no-repeat';

  }

}
