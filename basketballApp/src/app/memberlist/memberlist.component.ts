import { Component, OnInit } from '@angular/core';
import { Member } from '../models/member';
import { Games } from '../models/games';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-memberlist',
  templateUrl: './memberlist.component.html',
  styleUrls: ['./memberlist.component.css']
})
export class MemberlistComponent implements OnInit {

  games: Games[];
  gameNumber: number;
  game: Games;
  members: string[];

  testArray: any;


  constructor(private dataService: DataService) {
    this.getMembers();

    dataService.getMembersList().then((res: string[]) => {
      this.members = res;
    })

   }

  ngOnInit(): void {

  }

  getMembers(){
    this.dataService.getPastGames().then((res: Games[]) => {
      this.games = res;
      console.log("Members Retrieved");
    }).catch(() => {
      console.error("Members List Failed");
    }).finally(() => {
      console.log("Members List Finalized");
    });
  }


  // updateGame(){
  //   this.game = this.games.find(g => g.gameNumber);

  //   let updatedGame: any = {
  //     payee: string,
  //     amountPaid: number
  //   }
  //   console.log(updatedGame);
  //   this.dataService.getMembersList().then(() => {
  //     console.log("Game Updated");
  //     alert("Game Updated Successfully");
  //     this.dataService.getPastGames();
  //   }).catch(() => {
  //     console.error("Update Failed");
  //   }).finally(() => {
  //     console.log("Update Finalized");
  //   });
  // }

  

}
