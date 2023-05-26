import { Component } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.scss']
})
export class CarruselComponent {

  sub: any = "";
  listaCiudades:any = [];
  images:any = [];
  pais = "";
  ciudad = "";
  tituloSitio:any = [];
  descripcionSitio:any = [];




  constructor(private httpClient: HttpClient, private activatedRoute: ActivatedRoute, private router: Router) { }


  ngOnInit(): void {

    this.cargarSitiosCiudad();


    switch (this.pais) {

      case 'Japón':
        this.httpClient.get("assets/files/japon.txt").subscribe((data: any) => {

          for (let i = 0; i < data[this.pais].length; i++) {
            if (data[this.pais][i].nombreCiudad == this.ciudad) {
              this.listaCiudades.push(data[this.pais][i].lugaresAVisitar);
            }
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
        break;
      case 'USA':
        console.log("EEUU");
        break;
      case 'España':
        this.httpClient.get("assets/files/spain.txt").subscribe((data: any) => {

          for (let i = 0; i < data[this.pais].length; i++) {
            if (data[this.pais][i].nombreCiudad == this.ciudad) {
              this.listaCiudades.push(data[this.pais][i].lugaresAVisitar);
            }
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
        break;

    }



  }


  public cargarSitiosCiudad() {
    this.sub = this.activatedRoute.params.subscribe(params => {
      this.pais = params['pais'];
      this.ciudad = params['ciudad'];
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

  public volverDescripcion(pais: string, ciudad: string) {
    this.router.navigate(['/descripcion', pais, ciudad]);
  }


}
