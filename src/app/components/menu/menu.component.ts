import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  constructor(private nav: NavController,private auth: AuthService, private router: Router, ) { }

  ngOnInit() {}
ci(){
 this.auth.signOut();
 setTimeout(() => {this.nav.navigateBack('/login')  }
 , 500);
  }
}