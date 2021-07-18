import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { AuthService } from 'src/app/services/auth.service';
import PlayersDataJson from 'src/app/services/playersData.json';
import { Player } from '../tab2/tab2.page';
import { range } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-opponents',
  templateUrl: './opponents.page.html',
  styleUrls: ['./opponents.page.scss'],
})
export class OpponentsPage implements OnInit {
  user: any;
  teams: any ;
  GKers: Array<any> = [];
  DFers: Array<any> = [];
  MFers: Array<any> = [];
  FWers: Array<any> = [];
  playersteam: Array<any> = [];
  min: number;
  max: number;
  bets: Array<number> = [];
  nowq: Date;
  now: Date;
  constructor(private nav: NavController, private dataService: DataService, private auth: AuthService, private fire: AngularFirestore ) {}
  por: boolean = false
  def: boolean = false
  cen: boolean = false
  att: boolean = true
  selectedView = 'FW'

  async ngOnInit() {

    let firstDate = new Date("7/10/2017"),
        secondDate = new Date("7/15/2017"),
        timeDifference = Math.abs(secondDate.getTime() - firstDate.getTime());

    let differentDays = Math.ceil(timeDifference / (1000 * 3600 * 24));

    this.teams = PlayersDataJson.teams
    this.user =  await this.auth.getUser();
    const data = this.dataService.getData(this.user);
    const min: number= +data.min
    const max: number = + data.max
    const dif: number =  + max-min
    for(let i in this.teams[0].players) {
      let rand: number = + Math.round((Math.random()*dif)/1000)*1000 ;
      this.bets[i] = Math.floor(min + rand)

    } 


    for(let i in this.teams){
      for(let j in this.teams[i].players){
      this.playersteam.push(new Player(this.teams[i].players[j].name, this.teams[i].players[j].role, this.teams[i].team, this.teams[i].players[j].img,this.teams[i].players[j].price,this.teams[i].players[j].grades, this.teams[i].players[j].value))
      }
    }
  for(let i in this.playersteam){
      if(this.playersteam[i].role == "GK"){
        this.GKers.push(new Player(this.playersteam[i].name, this.playersteam[i].role, this.playersteam[i].team, this.playersteam[i].img,this.playersteam[i].price,this.playersteam[i].grades, this.playersteam[i].value));
      }else{
        if(this.playersteam[i].role == "DF"){
          this.DFers.push(new Player(this.playersteam[i].name, this.playersteam[i].role, this.playersteam[i].team, this.playersteam[i].img,this.playersteam[i].price,this.playersteam[i].grades,this.playersteam[i].value));
        }
        else{
          if(this.playersteam[i].role == "MF"){
            this.MFers.push(new Player(this.playersteam[i].name, this.playersteam[i].role, this.playersteam[i].team, this.playersteam[i].img,this.playersteam[i].price,this.playersteam[i].grades,this.playersteam[i].value));
          }
          else{
              this.FWers.push(new Player(this.playersteam[i].name, this.playersteam[i].role, this.playersteam[i].team, this.playersteam[i].img,this.playersteam[i].price,this.playersteam[i].grades,this.playersteam[i].value));
            }
          }
        }
      }
  }

  doRefreshFW(event) {
    for(var _i = 0; _i < 10; _i++){
      var rand = Math.floor(Math.random()*this.playersteam.length)

      this.FWers[_i]= this.playersteam[rand]
    }
    

    setTimeout(() => {
      event.target.complete();
    }, 1000);
  }
  doRefreshMF(event) {
    for(var _i = 0; _i < 10; _i++){
      var rand = Math.floor(Math.random()*this.playersteam.length)
      this.MFers[_i]= this.playersteam[rand]
    }
    

    setTimeout(() => {
      event.target.complete();
    }, 1000);
  }
  doRefreshDF(event) {
    for(var _i = 0; _i < 10; _i++){
      var rand = Math.floor(Math.random()*this.playersteam.length)
      this.DFers[_i]= this.playersteam[rand]
    }
    

    setTimeout(() => {
      event.target.complete();
    }, 1000);
  }
  doRefreshGK(event) {
    for(var _i = 0; _i < 10; _i++){
      var rand = Math.floor(Math.random()*this.playersteam.length)
      this.GKers[_i]= this.playersteam[rand]
    }
    

    setTimeout(() => {
      event.target.complete();
    }, 1000);
  }
  goChall(player, i){
    const data = { 
      name: player.name, 
      role: player.role,
      team: player.team,
      img: player.img,
      betSize: this.bets[i],
    } 
    var key=player.name+player.role
    this.dataService.setData(key, data);
    this.nav.navigateForward('/tabs/challenge/opponents/select/'+ key);
  }
  port(){
    this.por=true
    this.def=false
    this.cen=false
    this.att=false
    this.selectedView = 'GK'
  }
  deff(){
    this.por=false
    this.def=true
    this.cen=false
    this.att=false
    this.selectedView = 'DF'
    
  }
  cent(){
    this.por=false
    this.def=false
    this.cen=true
    this.att=false
    this.selectedView = 'MF'
  }
  atta(){
    this.por=false
    this.def=false
    this.cen=false
    this.att=true
    this.selectedView = 'FW'
  }
}
