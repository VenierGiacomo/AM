import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {

  notifications: Object;
  constructor(private nav: NavController) {}

  swipe(){
    this.nav.back()
  }

  ngOnInit() {
    this.notifications= [
      { "id": 1, "name": "Paul", "active": false, "img": "https://pbs.twimg.com/profile_images/1824002576/pg-railsconf_200x200.jpg"},
      { "id": 2, "name": "Elon", "active": false, "img": "https://pbs.twimg.com/profile_images/1170974240796889089/aLuyoQiu_200x200.jpg"},
      { "id": 3, "name": "Biz", "active": false, "img": "https://pbs.twimg.com/profile_images/1103174023175786496/WQ2ZH7hK_200x200.jpg"},
      { "id": 4, "name": "Biz", "active": false, "img": "https://pbs.twimg.com/profile_images/1103174023175786496/WQ2ZH7hK_200x200.jpg"},
      { "id": 5, "name": "John", "active": false, "img": "https://pbs.twimg.com/profile_images/1116791165339045888/3seae-xm_200x200.jpg"},
      { "id": 6, "name": "Elon", "active": false, "img": "https://pbs.twimg.com/profile_images/1170974240796889089/aLuyoQiu_200x200.jpg"},
      { "id": 7, "name": "Keith", "active": false, "img": "https://pbs.twimg.com/profile_images/96463735/PR_black___White_200x200.jpg"},
      { "id": 8, "name": "Elon", "active": false, "img": "https://pbs.twimg.com/profile_images/1170974240796889089/aLuyoQiu_200x200.jpg"},
      { "id": 9, "name": "Elon", "active": false, "img": "https://pbs.twimg.com/profile_images/1170974240796889089/aLuyoQiu_200x200.jpg"},
      { "id": 10, "name": "Elon", "active": false, "img": "https://pbs.twimg.com/profile_images/1170974240796889089/aLuyoQiu_200x200.jpg"},

    ];
  }

}
