import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PicturesComponent } from './Components/pictures/pictures.component';

const routes: Routes = [
  { path: '**',
  redirectTo: '/home',
  pathMatch: 'full'
  },
  { path: 'home', component: PicturesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
