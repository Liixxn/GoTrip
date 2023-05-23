import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.scss']
})
export class ReservaComponent implements OnInit {
  fotoTarjetaSrc: string = 'assets/Mastercard.png'; // Valor predeterminado

  ngOnInit() {
    // ...
  }

  cambiarImagenTarjeta(imgSrc: string) {
    this.fotoTarjetaSrc = imgSrc;
  }
}
