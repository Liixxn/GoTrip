import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SplashScreenComponent } from './views/splash-screen/splash-screen.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { RegistroComponent } from './views/registro/registro.component';

const routes: Routes = [
  { path: 'splash-screen', component: SplashScreenComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
