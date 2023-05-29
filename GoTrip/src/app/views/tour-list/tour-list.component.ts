import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tour-list',
  templateUrl: './tour-list.component.html',
  styleUrls: ['./tour-list.component.scss']
})
export class TourListComponent implements OnInit {

  sub:any = "";
  ciudad: string = "";
  ciudades: any[] = [];
  pais: string | null = "";
  imagenPais: string = "";
  media: number = 0;


  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.pipe(
      switchMap(params => {
        this.pais = params.get('pais');

        switch (this.pais) {
          case 'Japón':
            this.imagenPais = "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/16/a6/88/con-la-primavera-in-giappone.jpg?w=700&h=-1&s=1";
            this.media = 4.54;
            return this.http.get<any>('/assets/files/japon.txt');
          case 'USA':
            this.imagenPais = "https://eldiariony.com/wp-content/uploads/sites/2/2021/04/nueva-york-shutterstock_57571180.jpg?quality=75&strip=all&w=1200";
            this.media = 4.45;
            return this.http.get<any>('/assets/files/usa.txt');
          case 'España':
            this.imagenPais =  "https://images.ecestaticos.com/6lNdBlA5P-RyU-ZAW6a-1rkUeJY=/1x118:2271x1394/1600x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fdca%2Fe5e%2Fc23%2Fdcae5ec23094c61634c4abf5b395b05c.jpg";
            this.media = 4.33;
            return this.http.get<any>('/assets/files/spain.txt');
          default:
            return [];
        }
      })
    ).subscribe(data => {
      this.ciudades = data[this.pais || ''] || [];
    });
  }

  public cargarDescripcion() {
    this.sub = this.activatedRoute.params.subscribe(params => {
      this.pais = params['pais'];
      this.ciudad = params['ciudad'];
    });

  }

  public irCarrusel(pais: string, ciudad: string) {
    this.router.navigate(['/carrusel', pais, ciudad]);
  }

  public irDescripcion(pais: string, ciudad: string){
    this.router.navigate(['/descripcion', pais, ciudad]);
  }
}
