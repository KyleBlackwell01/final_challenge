import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Games } from '../models/games';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-creategame',
  templateUrl: './creategame.component.html',
  styleUrls: ['./creategame.component.css']
})
export class CreategameComponent implements OnInit {

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
  }

  createGame(form){
    let newGame = {
      gameDate: form.value['gamedate'],
      name: this.dataService.member.value.name,
      venue: form.value['venue'],
      memberId: this.dataService.member.value.memberId
    }

    console.log(newGame);

    this.dataService.createGame(newGame).then(() => {
      console.log("Game created");
      alert("Game Created");
      this.router.navigate(['']);
    }).catch(() => {
      console.error("Game Creation Failed");
    }).finally(() => {
      console.log("Game Finalized");
    });
  }


}
