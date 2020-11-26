import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';
import { CreategameComponent } from './creategame/creategame.component';
import { GamesComponent } from './games/games.component';
import { LoginComponent } from './login/login.component';
import { PastgamesComponent } from './pastgames/pastgames.component';
import { RegisterComponent } from './register/register.component';
import { DataService } from './services/data.service';
import { MemberlistComponent } from './memberlist/memberlist.component';
import { PendingListComponent } from './pending-list/pending-list.component';

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
    canActivate: [AuthGuard],
      data: {
        expectedRole: true
      }
  },
  {
    path: 'future-games',
    component: GamesComponent,
    canActivate: [LoginGuard],
      data: {
        loggedIn: true
      }
  },
  {
    path: 'past-games',
    component: PastgamesComponent,
    canActivate: [LoginGuard],
      data: {
        loggedIn: true
      }

  },
  {
    path: 'memberlist',
    component: MemberlistComponent,
    canActivate: [LoginGuard],
      data: {
        loggedIn: true
      }
  },
  {
    path: 'pendingList',
    component: PendingListComponent,
    canActivate: [LoginGuard],
      data: {
        loggedIn: true
      }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
