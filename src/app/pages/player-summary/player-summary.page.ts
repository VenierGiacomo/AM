import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-player-summary',
  templateUrl: './player-summary.page.html',
  styleUrls: ['./player-summary.page.scss'],
})
export class PlayerSummaryPage implements OnInit {
  startChall: string= 'none';
  playerName: any;
  player: any;
  user: any;
  toastDisplay: string= 'none';
  toastText: string;
 private playersCollection: AngularFirestoreDocument<any>;
 playerst: any;
  datas: any[];

  constructor(private nav: NavController, private route: ActivatedRoute, private dataService: DataService,private auth: AuthService, private fire: AngularFirestore ) { }

  async ngOnInit() {
    this.playerName =this.route.snapshot.params['name']
    this.player = this.dataService.getData(this.playerName);
    const user =  await this.auth.getUser();
    const data = { 
      name: this.player.name, 
      role: this.player.role,
      team: this.player.team,
      img: this.player.img,
    } 
    this.playersCollection = await this.fire.doc(`users/${user.uid}/players/${data.name}`)
    this.playerst = await this.playersCollection.valueChanges().subscribe(doc => {
      this.datas = doc;      
    })
    
  }
  back(){
    this.nav.navigateBack('/tabs/market/buy')
  }
  async buy(){
    const user =  await this.auth.getUser();
    console.log(user)
    const data = { 
      name: this.player.name, 
      role: this.player.role,
      team: this.player.team,
      img: this.player.img,
    } 
    
    if(this.datas != undefined){
      this.toastDisplay = 'block'
      this.startChall = "none"
      this.toastText = `Possiedi già ${data.name}`
      setTimeout(() => this.toastDisplay = 'none', 3000)
      
    }
    else{
      this.fire.collection('users').doc(user.uid).collection('players').doc(this.player.name).set(data, { merge: true });
      this.startChall = "none"
      this.toastDisplay = 'block'
      this.toastText = `${data.name} è stato aggiunto alla tua rosa` 
      setTimeout(() => this.toastDisplay = 'none', 3000)
      setTimeout(() =>this.nav.navigateRoot('/tabs/market/buy'), 3500)

    }

    }
   

  swipe(){
    this.nav.navigateRoot('/tabs/market/buy/history/'+ this.player.name);
  }

}
