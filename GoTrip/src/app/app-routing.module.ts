import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { RegistroComponent } from './views/registro/registro.component';
import { TourListComponent } from './views/tour-list/tour-list.component';
import { GuardadosComponent } from './views/guardados/guardados.component';
import { PerfilComponent } from './views/perfil/perfil.component';
import { CarruselComponent} from "./views/carrusel/carrusel.component";
import { RecuperarComponent } from './views/recuperar/recuperar.component';
import { ConfiguracionComponent } from './views/configuracion/configuracion.component';
import { ConfiguracionAccesibilidadComponent } from './views/configuracion-accesibilidad/configuracion-accesibilidad.component';
import { ConfiguracionCuentaComponent } from './views/configuracion-cuenta/configuracion-cuenta.component';
import { ConfiguracionNotificacionesComponent } from './views/configuracion-notificaciones/configuracion-notificaciones.component';
import { ConfiguracionPrivacidadComponent } from './views/configuracion-privacidad/configuracion-privacidad.component';
import { ConfiguracionAyudaComponent } from './views/configuracion-ayuda/configuracion-ayuda.component';
import { ReservaComponent } from './views/reserva/reserva.component';
import { ReservaRealizadaComponent } from './views/reserva-realizada/reserva-realizada.component';
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
  { path: 'recuperar', component: RecuperarComponent},
  {path: 'configuracion', component: ConfiguracionComponent},
  {path: 'configuracion-accesibilidad', component: ConfiguracionAccesibilidadComponent},
  {path: 'configuracion-cuenta', component: ConfiguracionCuentaComponent},
  {path: 'configuracion-notificaciones', component: ConfiguracionNotificacionesComponent},
  {path: 'configuracion-privacidad', component: ConfiguracionPrivacidadComponent},
  {path: 'configuracion-ayuda', component: ConfiguracionAyudaComponent},
  { path: 'reserva', component: ReservaComponent},
  { path: 'reserva-realizada', component: ReservaRealizadaComponent},
  { path: 'carrusel/:pais/:ciudad', component: CarruselComponent },
  {path: 'descripcion/:pais/:ciudad', component: DescripcionComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
