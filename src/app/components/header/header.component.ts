import { Component, OnInit, Input } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';
import { UserCache, StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  userDoc: AngularFirestoreDocument<any>;
  userDocObs: any;
  userData: any;
  photo: any;
  wallet: any;
  newUser: UserCache =<UserCache>{};
  user = new UserCache (0,'','',0)
  users: any

  constructor (private storage: StorageService, private nav: NavController, private auth: AuthService, private fire: AngularFirestore) {}

  @Input() title; 

  notifications(){
    this.nav.navigateForward('/notifications')
  }

  async ngOnInit() {
    this.loadUser()
    setTimeout(() => {this.loadUser()}, 1000);
  }
  loadUser(){
    this.storage.getUserChache().then(users => {
      this.users = users
      this.user = this.users[0]
  });
  }

  goHome(){
    this.nav.back()

  }
  

}





