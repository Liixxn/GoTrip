import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SplashScreenComponent } from './views/splash-screen/splash-screen.component';
import { HomeComponent } from './views/home/home.component';
import { RegistroComponent } from './views/registro/registro.component';

@NgModule({
  declarations: [
    AppComponent,
    SplashScreenComponent,
    HomeComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
