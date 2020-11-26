import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Member } from '../models/member';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  err: string;

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
  }

  login(form) {
    console.log(form.value);
    this.dataService.login(form.value).then((data: Member) => {
      console.log("Logged In");
      this.dataService.member.next(data);
      this.router.navigate(['']);
    }).catch((err) => {
      console.error(err['error']);
      if(err['error'] == "Account Pending"){
        this.err = "Account Pending";
      }else{
        this.err = "Login Failed, check Email and/or password!"
      }
    }).finally(() => {
      console.log("Login Finalized");

      if(this.dataService.member.value.memberId == 1){
        this.dataService.isAdmin.next(true);
      }
      else{
        this.dataService.isAdmin.next(false);
      }
    });
  }


}
