import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {
  activeWrapperIndex = 1;
  rutasArchivos = ['assets/files/japon.txt', 'assets/files/usa.txt', 'assets/files/spain.txt'];
  arrayPaises = ['Japón', 'USA', 'España'];
  paisGuardado:string[] = [];

  lugaresAVisitar: any = [];
  imagenesLugares: any = [];
  valoracionesGuardados: number[] = [];
  numLugaresGuardados: number[] = [];


  constructor(private router: Router, private route: ActivatedRoute, private httpClient: HttpClient) { }

  ngOnInit() {
    this.cargarSitiosGuardados();
  }

  scrollToWrapper(index: number) {
    const targetWrapper = document.querySelector(`#scrollWrapper${index}`);
    if (targetWrapper) {
      targetWrapper.scrollIntoView({behavior: 'smooth'});

      const scrollWrappers = document.querySelectorAll('.scrolling-wrapper');
      scrollWrappers.forEach((wrapper, wrapperIndex) => {
        if (wrapperIndex + 1 !== index) {
          wrapper.classList.add('hidden');
        } else {
          wrapper.classList.remove('hidden');
        }
      });

      this.activeWrapperIndex = index; // Update the active wrapper index
    }
    return false; // Prevent the default behavior of the tab link
  }

  onStarClick(event: MouseEvent, cardId: number): void {
    const starClicked = event.target as HTMLElement;
    if (starClicked.classList.contains('star')) {
      const card = document.getElementById(`card${cardId}`); // Find the card element using its ID
      if (card) {
        const stars = card.getElementsByClassName('star');
        const starIndex = Array.from(stars).indexOf(starClicked);
  
        // Clear all stars within the card
        for (let i = 0; i < stars.length; i++) {
          stars[i].classList.remove('filled');
        }
  
        // Fill stars up to the clicked index within the card
        for (let i = 0; i <= starIndex; i++) {
          stars[i].classList.add('filled');
        }
      }
    }
  }

  public cargarSitiosGuardados() {

    for (let i = 0; i < this.rutasArchivos.length; i++) {
      this.httpClient.get(this.rutasArchivos[i]).subscribe((data: any) => {

        if (this.arrayPaises[i] == "Japón") {

          for (let j=0; j < data[this.arrayPaises[i]].length; j++) {
            if (data[this.arrayPaises[i]][j].guardado == "true") {

              this.lugaresAVisitar.push({"lugar": data[this.arrayPaises[i]][j], "pais": this.arrayPaises[i]});
              this.paisGuardado.push(this.arrayPaises[i]);

            }
          }

        }
        else if (this.arrayPaises[i] == "USA") {

          for (let j = 0; j < data[this.arrayPaises[i]].length; j++) {
            if (data[this.arrayPaises[i]][j].guardado == "true") {

              this.lugaresAVisitar.push({"lugar": data[this.arrayPaises[i]][j], "pais": this.arrayPaises[i]});
              this.paisGuardado.push(this.arrayPaises[i]);
            }
          }
        }
        else if (this.arrayPaises[i] == "España") {

          for (let j = 0; j < data[this.arrayPaises[i]].length; j++) {
            if (data[this.arrayPaises[i]][j].guardado == "true") {

              this.lugaresAVisitar.push({"lugar": data[this.arrayPaises[i]][j], "pais": this.arrayPaises[i]});
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
