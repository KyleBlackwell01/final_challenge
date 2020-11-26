import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from '../services/data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(public data: DataService, public router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      const expectedRole = route.data.expectedRole;
      const testRole = this.data.isAdmin.value;
      // const test = this.data.loggedIn.value;
      // const test3 = route.data.test3;
      // console.log(testRole);
      // console.log(test3);

      if (testRole !== expectedRole) {
        console.log(false);
  
        return false
      }
      else{
        console.log(true);

      }


      return true;

  }

  
}
