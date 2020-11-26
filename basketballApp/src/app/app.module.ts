import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GamesComponent } from './games/games.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PastgamesComponent } from './pastgames/pastgames.component';
import { CreategameComponent } from './creategame/creategame.component';
import { MemberlistComponent } from './memberlist/memberlist.component';
import { PendingListComponent } from './pending-list/pending-list.component';

@NgModule({
  declarations: [
    AppComponent,
    GamesComponent,
    LoginComponent,
    RegisterComponent,
    PastgamesComponent,
    CreategameComponent,
    MemberlistComponent,
    PendingListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
