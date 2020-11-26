import { Component, OnInit } from '@angular/core';
import { Member } from '../models/member';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-pending-list',
  templateUrl: './pending-list.component.html',
  styleUrls: ['./pending-list.component.css']
})
export class PendingListComponent implements OnInit {

  member: Member;
  members: Member[];

  constructor(private dataService: DataService) {
    this.getPendingList();
   }

  ngOnInit(): void {
  }

  getPendingList(){
    this.dataService.getPending().then((res: Member[]) => {
      this.members = res;
    })

  }

  approveMember(form){
    this.member = this.members.find(m => m.name == form.value['name']);

    this.dataService.approveMember(this.member).then(() => {
      console.log("Member Approved");
      alert("Member Approved Successfully");
      this.getPendingList();
    }).catch(() => {
      console.error("Approval Failed");
    }).finally(() => {
      console.log("Approval Finalized");
    });


  }









}
