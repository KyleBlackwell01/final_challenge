import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './services/data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'basketballApp';

  loggedIn: boolean;
  isAdmin: boolean;

  constructor (private router: Router, private dataService: DataService) {
    this.dataService.loggedIn.subscribe(data => {
      this.loggedIn = data;
    })
    this.dataService.isAdmin.subscribe(data => {
      this.isAdmin = data;
    })
  }

  logout() {
    this.loggedIn = false;
  }





}
