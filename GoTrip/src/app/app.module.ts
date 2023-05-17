import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SplashScreenComponent } from './views/splash-screen/splash-screen.component';
import { HomeComponent } from './views/home/home.component';
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import { GuardadosComponent } from './views/guardados/guardados.component';
import { BarraNavegacionComponent } from './views/barra-navegacion/barra-navegacion.component';
import { CarruselComponent } from './views/carrusel/carrusel.component';



@NgModule({
  declarations: [
    AppComponent,
    SplashScreenComponent,
    HomeComponent,
    GuardadosComponent,
    BarraNavegacionComponent,
    CarruselComponent
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
