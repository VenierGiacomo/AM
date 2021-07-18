import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { DataService } from 'src/app/services/data.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-chall-summ',
  templateUrl: './chall-summ.page.html',
  styleUrls: ['./chall-summ.page.scss'],
})
export class ChallSummPage implements OnInit {
  user: any;
  ChallCollection: AngularFirestoreCollection<any>;
  challenges: any;
  challelements: Array<any>;
  datas: string= 'challegeSummary';
  constructor(private nav: NavController,private auth: AuthService, private fire: AngularFirestore) { }

  async ngOnInit() {
    this.user =  await this.auth.getUser();

    this.ChallCollection = await this.fire.collection(`users/${this.user.uid}/challenges`)
    this.challenges = await this.ChallCollection.valueChanges().subscribe(col => {
      this.challelements = col
  })
  for (let i in this.challelements){
    let firstDate = new Date((this.challelements[i].date.seconds)*1000 + (this.challelements[i].date.nanoseconds)/1000),
      secondDate = new Date(),
      timeDifference = Math.abs(secondDate.getTime() - firstDate.getTime());
  console.log(firstDate);
  console.log(timeDifference);
  let differentDays = Math.ceil(timeDifference / (1000 * 3600 * 24))
  console.log(differentDays);
  } 
}
nagivateChall(){

  this.nav.navigateForward('/tabs/challenge')

}
}
