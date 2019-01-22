import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PicturesComponent } from './Components/pictures/pictures.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { VerifiyEmailComponent } from './Components/verifiy-email/verifiy-email.component';
import { UserInfoHubComponent } from './Components/user-info-hub/user-info-hub.component';
import { AuthGuard } from './Guards/auth.guard';

const routes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: PicturesComponent },
  { path: 'verify/:id', component: VerifiyEmailComponent },
  { path: 'user', component: UserInfoHubComponent, canActivate: [AuthGuard] },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
