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
    let inputCorreo = (<HTMLInputElement>document.getElementById("correo-recuperar"));

    if (correo == "") {
      this.correoVacio = true;
      inputCorreo.style.border = "1px solid red";

    }
    else {
      if (this.expresionEmail.test(correo)) {
        this.correoVacio = false;
        this.enviadoCorrecto = true;
        inputCorreo.style.border = "1px solid green";
      }
      else {
        this.enviadoCorrecto = false;
        inputCorreo.style.border = "1px solid red";
      }
    }

  }

}
