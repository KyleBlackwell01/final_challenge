import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from '../services/data.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(public data: DataService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      const loggedIn = route.data.loggedIn;
      const isLoggedIn = this.data.loggedIn.value;
      console.log(isLoggedIn);
      console.log(loggedIn);
  
      if (isLoggedIn !== loggedIn) {
        console.log(false);
  
        return false
      }
      else{
        console.log(true);
  
        return true;
      }
  
  }

}
