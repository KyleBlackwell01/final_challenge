import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Games } from '../models/games';
import { Login } from '../models/login';
import { Member } from '../models/member';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiURL = "http://localhost:5000/api"
  member: BehaviorSubject<Member>;
  isAdmin: BehaviorSubject<boolean>;
  loggedIn: BehaviorSubject<boolean>;

  constructor(private http: HttpClient) {
    this.member = new BehaviorSubject(null);

    this.isAdmin = new BehaviorSubject(null);
    this.loggedIn = new BehaviorSubject(null);

    // this.loggedIn.next(false);
    // if(this.isloggedIn()) {
    //   this.loggedIn.next(true);
    //   if(localStorage.getItem('Auth') == "1"){
    //     this.isAdmin.next(true);
    //   }
    //   else{
    //     this.isAdmin.next(false);
    //   }
    // }
    // else{
    //   this.loggedIn.next(false);
    // }

   }

   login(login: Login) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiURL + "/members/memberlogin", login).subscribe(
        res => {
          console.log(res);
          resolve(res);
          if(localStorage.getItem('Auth') == "1"){
            this.isAdmin.next(true);
          }
          else{
            this.isAdmin.next(false);
          }
          this.loggedIn.next(true);
        },
        err => {
          console.log(err);
          this.loggedIn.next(false);
          reject(err);
        });
    });
  }


  register(member: Member) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiURL + "/members/registermember", member).subscribe(
        res => {
          console.log(res);
          resolve(res);
        },
        err => {
          console.log(err);
          reject(err);
        });
    });
  }

  createGame(game) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiURL + "/members/creategame", game).subscribe(
        res => {
          console.log(res);
          resolve(res);
        },
        err => {
          console.log(err);
          reject(err);
        });
    });
  }

  getGames() {
    return new Promise((resolve, reject) => {
      this.http.get<Games>(this.apiURL + "/members/getgames").subscribe(
        res => {
          console.log(res);
          resolve(res);
        },
        err => {
          console.log(err);
          reject(err);
        });
    });
  }

  getMembersList() {
    return new Promise((resolve, reject) => {
      this.http.get<string[]>(this.apiURL + "/members/getallmembers").subscribe(
        res => {
          console.log(res);
          resolve(res);
        },
        err => {
          console.log(err);
          reject(err);
        });
    });
  }

  getPastGames() {
    return new Promise((resolve, reject) => {
      this.http.get<Games>(this.apiURL + "/members/getpastgames").subscribe(
        res => {
          console.log(res);
          resolve(res);
        },
        err => {
          console.log(err);
          reject(err);
        });
    });
  }

  deleteGame(gameNumber) {
    return new Promise((resolve, reject) => {
      this.http.delete(this.apiURL + "/members/deletegame?gameNumber=" + gameNumber).subscribe(
        res => {
          console.log(res);
          resolve(res);
        },
        err => {
          console.log(err);
          reject(err);
        });
    });
  }

  updateGame(game) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiURL + "/members/updategame", game).subscribe(
        res => {
          console.log(res);
          resolve(res);
        },
        err => {
          console.log(err);
          reject(err);
        });
    });
  }

  isloggedIn(){
    return !this.member.value.memberId;
  }


}
