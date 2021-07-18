import { Injectable } from "@angular/core";
import { Router, CanActivate, ActivatedRouteSnapshot } from "@angular/router";
import { AuthService } from './auth.service';
import firebase from 'firebase/app';

@Injectable({
  providedIn: "root"
})
export class AuthGuardService implements CanActivate {
  constructor(private router: Router, private auth: AuthService) {}


  
  canActivate(route: ActivatedRouteSnapshot): boolean {
   var user = firebase.auth().currentUser;
  if (user) {
    return true;
      
  }
  this.router.navigate(["loginnative"]);
  return false;

  }
}