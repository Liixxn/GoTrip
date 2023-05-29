import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.scss']
})
export class ReservaComponent implements OnInit {
  fotoTarjetaSrc: string = 'assets/mastercard.png'; // Valor predeterminado
  reservaRealizada: boolean = false;

  sub: any = "";
  paisReserva = "";
  ciudadReserva = "";
  imagenReserva = "";
  precioReserva = "";

  constructor(private activatedRoute: ActivatedRoute, private httpClient: HttpClient) {
  }


  ngOnInit() {
    this.sub = this.activatedRoute.params.subscribe(params => {
      this.paisReserva = params['pais'];
      this.ciudadReserva = params['ciudad'];

      switch (this.paisReserva) {
        case 'Japón':

          this.httpClient.get("assets/files/japon.txt").subscribe((data: any) => {

            for (let i = 0; i < data[this.paisReserva].length; i++) {
              if (data[this.paisReserva][i].nombreCiudad == this.ciudadReserva) {
                this.precioReserva = data[this.paisReserva][i].precio;
                this.imagenReserva = data[this.paisReserva][i].imagenPortada;
              }
            }
          });

          break;
        case 'USA':

          this.httpClient.get("assets/files/usa.txt").subscribe((data: any) => {

            for (let i = 0; i < data[this.paisReserva].length; i++) {
              if (data[this.paisReserva][i].nombreCiudad == this.ciudadReserva) {
                this.precioReserva = data[this.paisReserva][i].precio;
                this.imagenReserva = data[this.paisReserva][i].imagenPortada;
              }
            }
          });

          break;
        case 'España':

          this.httpClient.get("assets/files/spain.txt").subscribe((data: any) => {

            for (let i = 0; i < data[this.paisReserva].length; i++) {
              if (data[this.paisReserva][i].nombreCiudad == this.ciudadReserva) {
                this.precioReserva = data[this.paisReserva][i].precio;
                this.imagenReserva = data[this.paisReserva][i].imagenPortada;
              }
            }
          });

          break;
      }

    });

  }

  cambiarImagenTarjeta(imgSrc: string) {
    this.fotoTarjetaSrc = imgSrc;
  }


  mostrarReservaRealizada() {
    this.reservaRealizada = true;
  }
}
