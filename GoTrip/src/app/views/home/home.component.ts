import { Component } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  sub:any = "";
  ciudades = ["Kioto", "Madrid", "Orlando"];
  paisesCiudadesEjemplos = ["Japón", "España", "USA"];
  ciudadesJapon = ["Tokyo", "Kioto", "Nagoya", "Osaka", "Kobe"];
  countries = ["USA", "JAPÓN", "ESPAÑA"];
  pais = "";
  ciudad = "";

  constructor(private httpClient: HttpClient, private activatedRoute: ActivatedRoute, private router: Router) { }

  public buscarLugar() {
    let lugarBuscar = ((<HTMLInputElement>document.getElementById("lugarInput")).value).trim();
    lugarBuscar = lugarBuscar.charAt(0).toUpperCase() + lugarBuscar.slice(1).toLowerCase();

    if (this.ciudadesJapon.includes(lugarBuscar)) {
      console.log("Ciudad encontrada");
      this.pais = "Japón";
      this.ciudad = lugarBuscar;

      this.router.navigate(['/descripcion', this.pais, this.ciudad]);

    }

  }

  public irBusquedaRapida(ciudad: string) {
    this.pais = this.paisesCiudadesEjemplos[this.ciudades.indexOf(ciudad)];
    this.ciudad = ciudad;
    this.router.navigate(['/descripcion', this.pais, this.ciudad]);
  }


  public eliminarBusqueda() {
    let busqueda = document.getElementById("lugarInput") as HTMLInputElement;
    busqueda.value = "";

  }
}
