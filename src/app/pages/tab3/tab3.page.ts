import { Component } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService, UserCache } from 'src/app/services/storage.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  

  price$: Object;
  slidet: number= 30000;
  slideb: number= 70000;
  slideb1: number= 100000 - 70000;
  user = new UserCache (0,'','',0)
  users: any;
  newUser: UserCache =<UserCache>{};
  
  changeslidet(ev){
    this.slidet= ev.target.value
  }
  
  changeslideb(ev){
    this.slideb1= 100000 - (ev.target.value) +1
    this.slideb= ev.target.value
  }
  constructor(private storage: StorageService, private plt: Platform, private nav: NavController, private dataService: DataService, private auth: AuthService) {}

  async ngOnInit() {
    this.loadUser();
    if (this.slidet > this.slideb) {
      this.slidet = this.slideb-1
    }
    this.price$= [
      { "id": 1, "height": "6",},
      { "id": 2, "height": "4",},
      { "id": 3, "height": "8",},
      { "id": 4, "height": "8",},
      { "id": 5, "height": "12",},
      { "id": 6, "height": "10",},
      { "id": 7, "height": "16",},
      { "id": 8, "height": "18",},
      { "id": 9, "height": "22",},
      { "id": 10, "height": "20",},
      { "id": 11, "height": "22",},
      { "id": 12, "height": "28",},
      { "id": 13, "height": "26",},
      { "id": 14, "height": "34",},
      { "id": 15, "height": "40",},
      { "id": 16, "height": "36",},
      { "id": 17, "height": "32",},
      { "id": 18, "height": "30",},
      { "id": 19, "height": "20",},
      { "id": 20, "height": "24",},
      { "id": 21, "height": "20",},
      { "id": 22, "height": "20",},
      { "id": 23, "height": "22",},
      { "id": 24, "height": "16",},
      { "id": 25, "height": "14",},
      { "id": 26, "height": "18",},
      { "id": 27, "height": "10",},
      { "id": 28, "height": "10",},
      { "id": 29, "height": "12",},
      { "id": 30, "height": "8",},
    ];
  
  }
  goTo(){
  const data ={ 
    min: Math.floor(this.slidet/1000)*1000, 
    max: Math.floor(this.slideb/1000)*1000,
    
  } 
  this.dataService.setData(this.user, data);
  this.nav.navigateForward('/loginnative');
}

  swipe(){
  this.nav.navigateForward('/tabs/market/notification')
}
loadUser(){
  this.storage.getUserChache().then(users => {
    this.users = users
    this.user = this.users[0][0]
});
}
notifications(){
  this.nav.navigateForward('/notifications')
  
}
}