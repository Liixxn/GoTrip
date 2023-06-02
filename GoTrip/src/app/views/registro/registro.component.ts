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


    if (correo == "" || contrasenia == "" || confirmacion == "") {
      this.mensajeErrorCorreo = true;
      this.mensajeErrorContrasenia = true;
      this.mensajeErrorConfirmacion = true;
      this.mensajeCorreo = "Rellene todos los campos";
      this.mensajeContrasenia = "Rellene todos los campos";
      this.mensajeConfirmacion = "Rellene todos los campos";
    }
    else if (contrasenia != confirmacion) {
      this.mensajeErrorCorreo = false;
      this.mensajeErrorContrasenia = true;
      this.mensajeErrorConfirmacion = true;
      this.mensajeCorreo = "";
      this.mensajeContrasenia = "Las contraseñas no coinciden";
      this.mensajeConfirmacion = "Las contraseñas no coinciden";
    }
    else {
      this.route.navigate(['/login']);
    }



  }


}
