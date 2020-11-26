import { Component, OnInit } from '@angular/core';
import { Games } from '../models/games';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  games: Games;
  gameNumber: number;

  constructor(private dataService: DataService) {
    this.getGames();
   }

  ngOnInit(): void {
  }

  getGames(){
    this.dataService.getGames().then((res: Games) => {
      this.games = res;
      console.log("Games Retrieved");
    }).catch(() => {
      console.error("Games List Failed");
    }).finally(() => {
      console.log("Games List Finalized");
    })
  }

  deleteGame() {
    console.log(this.gameNumber);
    this.dataService.deleteGame(this.gameNumber).then(() => {
      console.log("Game Deleted");
      alert("Game Deleted Successfully")
      this.getGames();
    }).catch(() => {
      console.error("Delete Failed");
    }).finally(() => {
      console.log("Delete Finalized");
    });

  }

}
