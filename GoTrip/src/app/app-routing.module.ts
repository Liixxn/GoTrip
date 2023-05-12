import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SplashScreenComponent } from './views/splash-screen/splash-screen.component';
import { HomeComponent } from './views/home/home.component';
import { TourListComponent } from './views/tour-list/tour-list.component';

const routes: Routes = [
  { path: 'splash-screen', component: SplashScreenComponent },
  { path: 'home', component: HomeComponent },
  { path: 'tour-list', component: TourListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
