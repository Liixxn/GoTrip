import { Component } from '@angular/core';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.component.html',
  styleUrls: ['./recuperar.component.scss']
})
export class RecuperarComponent {

  correoVacio: boolean = false;
  enviadoCorrecto: boolean = false;
  expresionEmail: RegExp = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;

  public mandarCorreo() {
    let correo = (<HTMLInputElement>document.getElementById("correo-recuperar")).value;

    if (correo == "") {
      this.correoVacio = true;
    }
    else {
      if (this.expresionEmail.test(correo)) {
        this.correoVacio = false;
        this.enviadoCorrecto = true;
      }
      else {
        this.enviadoCorrecto = false;
      }
    }

  }

}
