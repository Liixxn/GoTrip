import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SplashScreenComponent } from './views/splash-screen/splash-screen.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { RegistroComponent } from './views/registro/registro.component';
import { TourListComponent } from './views/tour-list/tour-list.component';
import { GuardadosComponent } from './views/guardados/guardados.component';
import { BarraNavegacionComponent } from './views/barra-navegacion/barra-navegacion.component';
import { PerfilComponent } from './views/perfil/perfil.component';
import { CarruselComponent } from './views/carrusel/carrusel.component';
import { RecuperarComponent } from './views/recuperar/recuperar.component';
import { ConfiguracionComponent } from './views/configuracion/configuracion.component';
import { ConfiguracionAccesibilidadComponent } from './views/configuracion-accesibilidad/configuracion-accesibilidad.component';
import { ConfiguracionCuentaComponent } from './views/configuracion-cuenta/configuracion-cuenta.component';
import { ConfiguracionPrivacidadComponent } from './views/configuracion-privacidad/configuracion-privacidad.component';
import { ConfiguracionNotificacionesComponent } from './views/configuracion-notificaciones/configuracion-notificaciones.component';
import { ConfiguracionAyudaComponent } from './views/configuracion-ayuda/configuracion-ayuda.component';
import { ReservaComponent } from './views/reserva/reserva.component';
import { ReservaRealizadaComponent } from './views/reserva-realizada/reserva-realizada.component';

@NgModule({
  declarations: [
    AppComponent,
    SplashScreenComponent,
    HomeComponent,
    LoginComponent,
    RegistroComponent,
    TourListComponent,
    GuardadosComponent,
    BarraNavegacionComponent,
    RegistroComponent,
    PerfilComponent,
    CarruselComponent,
    ConfiguracionComponent,
    RecuperarComponent,
    ConfiguracionAccesibilidadComponent,
    ConfiguracionCuentaComponent,
    ConfiguracionPrivacidadComponent,
    ConfiguracionNotificacionesComponent,
    ConfiguracionAyudaComponent,
    ReservaComponent,
    ReservaRealizadaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
