import { Component, OnInit } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import PlayersDataJson from 'src/app/services/playersData.json';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from 'src/app/services/auth.service';
import { UserCache, StorageService } from 'src/app/services/storage.service';


export class Player {
  public name: string;
  public role: string;   
  public team: string;   
  public img: string; 
  public price: number; 
  public grades: any;
  public value: number;
  constructor(name: string, role: string, team: string, img: string,  price: number, grades: any , value: number) {
      this.name = name;
      this.role = role;
      this.img = img;
      this.team = team;
      this.price = price
      this.grades = grades
      this.value = value
  }
}
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  por: boolean = true
  def: boolean = false
  cen: boolean = false
  att: boolean = false
 
  teams: any ;

  GKers: Array<any> = [];
  DFers: Array<any> = [];
  MFers: Array<any> = [];
  FWers: Array<any> = [];
  playersteam: Array<any> = [];
  user = new UserCache (0,'','',0)
  users: any
  newUser: UserCache =<UserCache>{};

  selectedView = 'GK'

  constructor(private storage: StorageService, private plt: Platform, private nav: NavController, private router: Router, private dataService: DataService, private fire: AngularFirestore, private auth: AuthService,) {}

async ngOnInit() {
  this.loadUser()
  this.teams = PlayersDataJson.teams
  /*
  for(let i in this.teams){
    for(let j in this.teams[i].players){
      this.playersteam.push(new Player(this.teams[i].players[j].name, this.teams[i].players[j].role, this.teams[i].team, this.teams[i].players[j].img, this.teams[i].players[j].price, this.teams[i].players[j].grades, this.teams[i].players[j].value))
      const data = { 
        name: this.playersteam[j].name, 
        role: this.playersteam[j].role,
        team: this.playersteam[j].team,
        img: this.playersteam[j].img,
        price: this.playersteam[j].price,
        grades:this.playersteam[j].grades,
        value:this.playersteam[j].value,
    } 
    this.fire.collection('players').add(data);
    console.log(`Aggiunto ${j}`)
    }
      
  }*/
  this.playersteam = []
  for(let i in this.teams){
    for(let j in this.teams[i].players){
    this.playersteam.push(new Player(this.teams[i].players[j].name, this.teams[i].players[j].role, this.teams[i].team, this.teams[i].players[j].img, this.teams[i].players[j].price, this.teams[i].players[j].grades, this.teams[i].players[j].value))
    }
  }
for(let i in this.playersteam){
    if(this.playersteam[i].role == "GK"){
      this.GKers.push(new Player(this.playersteam[i].name, this.playersteam[i].role, this.playersteam[i].team, this.playersteam[i].img, this.playersteam[i].price, this.playersteam[i].grades, this.playersteam[i].value));
    }else{
      if(this.playersteam[i].role == "DF"){
        this.DFers.push(new Player(this.playersteam[i].name, this.playersteam[i].role, this.playersteam[i].team, this.playersteam[i].img, this.playersteam[i].price, this.playersteam[i].grades, this.playersteam[i].value));
      }
      else{
        if(this.playersteam[i].role == "MF"){
          this.MFers.push(new Player(this.playersteam[i].name, this.playersteam[i].role, this.playersteam[i].team, this.playersteam[i].img, this.playersteam[i].price, this.playersteam[i].grades, this.playersteam[i].value));
        }
        else{
            this.FWers.push(new Player(this.playersteam[i].name, this.playersteam[i].role, this.playersteam[i].team, this.playersteam[i].img, this.playersteam[i].price, this.playersteam[i].grades, this.playersteam[i].value));
        }
      }
    }
  }
}
  swipe(){
    this.nav.navigateRoot('/tabs/market/sell')
  }
ddd(){
  console.log(this.users)
}
  loadUser(){
    this.storage.getUserChache().then(users => {
      this.users = users
      this.user = this.users[0][0]
  });
  }
  goSummary(player){
     this.dataService.setData(player.name, player);
     this.nav.navigateForward('/tabs/market/buy/summary/'+ player.name);
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
  notifications(){
    this.nav.navigateForward('/notifications')
    
  }
  
}
