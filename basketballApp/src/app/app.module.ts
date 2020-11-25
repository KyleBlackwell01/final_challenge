import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GamesComponent } from './games/games.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PastgamesComponent } from './pastgames/pastgames.component';
import { CreategameComponent } from './creategame/creategame.component';

@NgModule({
  declarations: [
    AppComponent,
    GamesComponent,
    LoginComponent,
    RegisterComponent,
    PastgamesComponent,
    CreategameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
