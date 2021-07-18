import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';


@Component({
  selector: 'app-sell',
  templateUrl: './sell.page.html',
  styleUrls: ['./sell.page.scss'],
})
export class SellPage implements OnInit {
  
  private playersCollection: AngularFirestoreCollection<any>;
  playerst: any;
  playersell: any;
  datas: any[];
  startChall: string = 'none';
  name: string;
  toastDisplay: string ='none'
  toastText: string = ''

  constructor(private nav: NavController, private auth: AuthService, private fire: AngularFirestore ) { }

  swipe(){
   this.nav.navigateRoot('/tabs/market/buy')

  }

  async ngOnInit() {
    const user =  await this.auth.getUser();

    this.playersCollection = await this.fire.collection(`users/${user.uid}/players`)
    this.playerst = await this.playersCollection.valueChanges().subscribe(col => {
      this.datas = col; 
  })
  }
  sellprompt(player){
    this.playersell = player
    this.startChall = "block"
    this.name= this.playersell.name
  }


  async sell(){
    const user =  await this.auth.getUser();
    this.fire.collection('users').doc(user.uid).collection('players').doc(this.playersell.name).delete();
    this.toastDisplay = 'block'
      this.startChall = "none"
      this.toastText = `${this.name} è stato venduto per 257K dollari`
      setTimeout(() => this.toastDisplay = 'none', 3000)
  }
}