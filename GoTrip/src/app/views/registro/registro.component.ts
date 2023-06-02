import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent {

  mensajeCorreo = "";
  mensajeContrasenia = "";
  mensajeConfirmacion = "";

  mensajeErrorCorreo = false;
  mensajeErrorContrasenia = false;
  mensajeErrorConfirmacion = false;

  constructor(private route: Router) {
  }


  public confirmarRegistro() {

    let correo = (<HTMLInputElement>document.getElementById("correo-registro")).value;
    let contrasenia = (<HTMLInputElement>document.getElementById("password-registro")).value;
    let confirmacion = (<HTMLInputElement>document.getElementById("confirmacion-registro")).value;

    let inputCorreo = (<HTMLInputElement>document.getElementById("correo-registro"));
    let inputContrasenia = (<HTMLInputElement>document.getElementById("password-registro"));
    let inputConfirmacion = (<HTMLInputElement>document.getElementById("confirmacion-registro"));



    if (correo == "" || contrasenia == "" || confirmacion == "") {
      this.mensajeErrorCorreo = true;
      this.mensajeErrorContrasenia = true;
      this.mensajeErrorConfirmacion = true;
      this.mensajeCorreo = "Rellene todos los campos";
      this.mensajeContrasenia = "Rellene todos los campos";
      this.mensajeConfirmacion = "Rellene todos los campos";

      inputCorreo.style.border = "1px solid red";
      inputContrasenia.style.border = "1px solid red";
      inputConfirmacion.style.border = "1px solid red";

    }
    else if (contrasenia != confirmacion) {
      this.mensajeErrorCorreo = false;
      this.mensajeErrorContrasenia = true;
      this.mensajeErrorConfirmacion = true;
      this.mensajeCorreo = "";
      this.mensajeContrasenia = "Las contraseñas no coinciden";
      this.mensajeConfirmacion = "Las contraseñas no coinciden";

      inputContrasenia.style.border = "1px solid red";
      inputConfirmacion.style.border = "1px solid red";
    }
    else {
      this.route.navigate(['/login']);
    }



  }


}
