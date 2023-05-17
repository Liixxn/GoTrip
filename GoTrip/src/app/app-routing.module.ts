import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { GuardadosComponent} from "./views/guardados/guardados.component";
import { CarruselComponent} from "./views/carrusel/carrusel.component";

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'guardados', component: GuardadosComponent},
  { path: 'carrusel', component: CarruselComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
