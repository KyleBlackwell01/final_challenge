import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { CreategameComponent } from './creategame/creategame.component';
import { GamesComponent } from './games/games.component';
import { LoginComponent } from './login/login.component';
import { PastgamesComponent } from './pastgames/pastgames.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'create-game',
    component: CreategameComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'future-games',
    component: GamesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'past-games',
    component: PastgamesComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
