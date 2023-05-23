import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { RegistroComponent } from './views/registro/registro.component';
import { TourListComponent } from './views/tour-list/tour-list.component';
import { GuardadosComponent } from './views/guardados/guardados.component';
import { PerfilComponent } from './views/perfil/perfil.component';
import { CarruselComponent } from "./views/carrusel/carrusel.component";
import { ConfiguracionComponent } from './views/configuracion/configuracion.component';
import { DescripcionComponent} from "./views/descripcion/descripcion.component";

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'guardados', component: GuardadosComponent},
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent},
  { path: 'tour-list/:pais', component: TourListComponent },
  { path: 'perfil', component: PerfilComponent},
  { path: 'carrusel', component: CarruselComponent},
  { path: 'carrusel/:pais/:ciudad', component: CarruselComponent },
  {path: 'configuracion', component: ConfiguracionComponent},
  {path: 'descripcion/:pais/:ciudad', component: DescripcionComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
