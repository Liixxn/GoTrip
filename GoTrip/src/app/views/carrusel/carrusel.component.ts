import { Component } from '@angular/core';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.scss']
})
export class CarruselComponent {

  images = [
    {path: 'https://jw-webmagazine.com/wp-content/uploads/2018/01/jw-5d156d25e9d9c6.32954435.jpeg'},
    {path: 'https://jw-webmagazine.com/wp-content/uploads/2018/01/Cherry-Blossoms-at-Inokashira-Park.jpeg'},
    {path: 'https://blog.japanwondertravel.com/wp-content/uploads/2016/07/timo-volz-DGsqL2j028E-unsplash-1200x800.jpg'},
    {path: 'https://img.traveltriangle.com/blog/wp-content/uploads/2019/12/Places-To-Visit-In-Tokyo-6_dec.jpg'},
    {path: 'https://www.thetraveler.net/images/incontournables/japon-tokyo-shinjuku.jpg'},
    {path: 'https://www.busytourist.com/wp-content/uploads/2019/06/Senso-ji-Temple.jpg.webp'},
  ]

  constructor() { }

  public cambiarFondo(pathImagen: string) {

    let imagen = <HTMLElement>document.getElementById('background-imagen');
    imagen.style.backgroundImage = `url(${pathImagen})`;
    imagen.style.backgroundSize = 'cover';
    imagen.style.backgroundPosition = 'center';

  }

}
