import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import {  AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AuthService } from 'src/app/services/auth.service';
import PlayersDataJson from 'src/app/services/playersData.json';
import { Player } from '../tab2/tab2.page';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-chall-own',
  templateUrl: './chall-own.page.html',
  styleUrls: ['./chall-own.page.scss'],
})
export class ChallOwnPage implements OnInit {
  startChall: string= 'none';
  playerName: any;
  playerInitial: any;
  playerslist: Array<any> = [];
  playersteam: Array<any> = [];
  private playersCollection: AngularFirestoreCollection<any>;
  playerst: any;
  datas: any[];
  playerChal: string= '';
  user: any;
  playerChal_img: string= '';
  toastDisplay: string= 'none';
  toastText: string;
  betSize: any;
  allplayers: any;
  opponentPlayer: any;
  yourPlayers: Array<any>;
  oppwin: number =0.01
  chanceArr: Array<number> = [];
  multiplierArr: Array<number> = [];
  yourswin: number =0.01
  constructor(private nav: NavController, private route: ActivatedRoute, private dataService: DataService, private auth: AuthService, private fire: AngularFirestore ) { }

  async ngOnInit() {
    
    this.playerName =this.route.snapshot.params['name']
    this.playerInitial = this.dataService.getData(this.playerName);
    this.betSize = this.playerInitial.betSize
    this.user =  await this.auth.getUser();
    this.playersCollection = await this.fire.collection(`users/${this.user.uid}/players`)
    this.playerst = await this.playersCollection.valueChanges().subscribe(col => {
      this.datas = col;   
      })
      setTimeout(() => {
        for (var i = 0; i < this.datas.length; i++){
          if (this.datas[i].name == this.playerInitial.name){
            this.datas = this.datas.filter(obj => obj !== this.datas[i].name);
          }
          else{
            for(let j in this.allplayers[0].players) {
              if(this.datas[i].role == this.playerInitial.role){
                if (this.allplayers[0].players[j].name == this.datas[i].name){
                  if (this.allplayers[0].players[j].name  != this.playerInitial.name){
                    for(let k in this.allplayers[0].players[j].grades){
                      for(let l in this.opponentPlayer.grades){
                        if(this.opponentPlayer.grades[l] > this.allplayers[0].players[j].grades[k]){
                          this.oppwin +=1
                        }
                        else if (this.opponentPlayer.grades[l] < this.allplayers[0].players[j].grades[k]){
                          this.yourswin +=1
                        }
                    }
                }
              }
                this.chanceArr .push(Math.round(((this.yourswin/(this.yourswin + this.oppwin)) * 100 )) / 100)
                var multiplier = Math.round((10/((Math.round(((this.yourswin/(this.yourswin + this.oppwin)) * 100 )) / 100)*10))*10)/10
                console.log(multiplier)
                this.multiplierArr .push( multiplier )
                this.oppwin =0.01 ,this.yourswin =0.01
              }
            }}
          }
           console.log(this.chanceArr)
           console.log(this.multiplierArr)
          if(this.datas[i].role == this.playerInitial.role){
            if (this.datas[i].name != this.playerInitial.name){
            this.playerslist .push(new Player(this.datas[i].name, this.datas[i].role, this.datas[i].team, this.datas[i].img, this.datas[i].price,this.datas[i].grades, this.datas[i].value))
            }
          }
        }
        this.allplayers = PlayersDataJson.teams
        for(let i in this.allplayers[0].players) {
          if (this.allplayers[0].players[i].name == this.playerInitial.name){
            this.opponentPlayer =  this.allplayers[0].players[i]
          }
        }

        
    }
    , 500);
    this.allplayers = PlayersDataJson.teams
    for(let i in this.allplayers[0].players) {
      if (this.allplayers[0].players[i].name == this.playerInitial.name){
        this.opponentPlayer =  this.allplayers[0].players[i]
      }

    }

    }
  
challenge(player){
  this.playerChal = player.name
  this.playerChal_img = player.img
  this.startChall = 'block'
}
startchallenge(){

  const data = { 
    player_opponents: this.playerInitial.name,
    player_own: this.playerChal,
    opp_img: this.playerInitial.img,
    own_img:  this.playerChal_img,
    betSize: this.playerInitial.betSize,
    possWin: this.playerInitial.betSize*10,
  } 
  var key= data.player_own+data.player_opponents+data.possWin
  this.fire.collection('users').doc(this.user.uid).collection('challenges').doc(key).set(data, { merge: true });
  this.startChall = 'none'
  this.toastDisplay = 'block'
  this.toastText = `La sfida è stata aggiunta alla tua lista`
  setTimeout(() => this.toastDisplay = 'none', 2000)
  setTimeout(() =>this.nav.navigateRoot('/tabs/challenge'), 2100)
}
}