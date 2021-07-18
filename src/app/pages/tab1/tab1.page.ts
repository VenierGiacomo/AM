import { Component, OnInit } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService, UserCache } from 'src/app/services/storage.service';
import { AuthNativeService } from 'src/app/services/auth.native.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  user: any
  userDoc: AngularFirestoreDocument<any>;
  userDocObs: any;
  userData: any;
  photo: any;
  wallet: any;
  users: any;
  newUser: UserCache =<UserCache>{};
  constructor (private nav: NavController,private plt: Platform, private storage: StorageService, private auth: AuthService, private fire: AngularFirestore,  private authService: AuthNativeService,) {this.plt.ready().then(()=>{
    this.loadUser();
  });}



  async ngOnInit() {
    this.user =  await this.auth.getUser();
    this.userDoc = await this.fire.doc(`users/${this.user.uid}`)
    this.userDocObs = await this.userDoc.valueChanges().subscribe(col => {
      this.userData = col
      this.newUser ={  
        id: this.userData.uid,
        name: this.userData.name,
        img: this.userData.photoURL,
        wallet: this.userData.wallet
      }
    })
    setTimeout(() => {this.photo = this.userData.photoURL}, 700);
    setTimeout(() => {this.wallet = this.userData.wallet}, 700);
    setTimeout(() => {if(this.users.length === 0 ) {
      this.storage.addUserChache(this.newUser).then(user => {
        this.newUser = <UserCache>{};
        this.loadUser();
      })  }}, 700);
    }
loadUser(){
  this.storage.getUserChache().then(users => {
    this.users = users
    console.log(this.users)
});
}

 notifications(){
  this.nav.navigateForward('/notifications')
  
}
goChallSumm(){
  this.nav.navigateForward('/tabs/home/challenge/history')
}
goLogin(){
  this.nav.navigateBack(["/loginnative"])
}
logout(){
  this.authService.doLogout()
  .then(res => {
    this.nav.navigateBack(["/loginnative"]);
  }, err => {
    console.log(err);
  })
}
}






