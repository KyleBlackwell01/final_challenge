import { Component, OnInit } from '@angular/core';
import { Member } from '../models/member';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  success: boolean;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }


  register(form) {
    console.log(this.dataService.apiURL);

    let newMember: Member = {
      name: form.value['name'],
      email: form.value['email'],
      password: form.value['password'],
      pending: true
    }
    console.log(newMember);

    this.dataService.register(newMember).then(() => {
      console.log("Member Registered");
    }).catch(() => {
      console.error("Registration Failed");
    }).finally(() => {
      console.log("Registration Finalized");
      this.success = true;
    });
  }


  

}
