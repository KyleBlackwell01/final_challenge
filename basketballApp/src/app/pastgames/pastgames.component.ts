import { Component, OnInit } from '@angular/core';
import { Games } from '../models/games';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-pastgames',
  templateUrl: './pastgames.component.html',
  styleUrls: ['./pastgames.component.css']
})
export class PastgamesComponent implements OnInit {

  games: Games[];
  gameNumber: number;
  game: Games;
  members: string[];

  constructor(private dataService: DataService) {
    this.getPastGames();
    dataService.getMembersList().then((res: string[]) => {
      this.members = res;
    })
   }

  ngOnInit(): void {
  }

  getPastGames(){
    this.dataService.getPastGames().then((res: Games[]) => {
      this.games = res;
      console.log("Games Retrieved");
    }).catch(() => {
      console.error("Games List Failed");
    }).finally(() => {
      console.log("Games List Finalized");
    });
  }

  updateGame(form){
    this.game = this.games.find(g => g.gameNumber == form.value['gameNumber']);

    let updatedGame: Games = {
      gameNumber: form.value['gameNumber'],
      gameDate: this.game.gameDate,
      name: this.game.name,
      payee: form.value['payee'],
      amountPaid: form.value['amountPaid'],
      venue: this.game.venue,
      memberId: this.dataService.member.value.memberId
    }
    console.log(updatedGame);
    this.dataService.updateGame(updatedGame).then(() => {
      console.log("Game Updated");
      alert("Game Updated Successfully");
      this.getPastGames();
    }).catch(() => {
      console.error("Update Failed");
    }).finally(() => {
      console.log("Update Finalized");
    });
  }

}
