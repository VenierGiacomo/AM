import {Component, NgZone, OnDestroy, OnInit} from '@angular/core';
import * as firebaseui from 'firebaseui';
import * as firebase from 'firebase/app';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
import { NavController} from '@ionic/angular';
import { AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';
import { User } from 'src/app/services/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    ui: firebaseui.auth.AuthUI;
  

    constructor(private afAuth: AngularFireAuth,
                private router:Router,
                private afs: AngularFirestore,
                private nav: NavController,
                private ngZone: NgZone) {

    }

    ngOnInit() {

        const uiConfig = {
            signInOptions: [
                firebase.auth.EmailAuthProvider.PROVIDER_ID,
                firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            ],
            callbacks: {

                signInSuccessWithAuthResult: this
                    .onLoginSuccessful
                    .bind(this)
            }

        };

        this.ui = new firebaseui.auth.AuthUI(this.afAuth.auth);

        this.ui.start('#firebaseui-auth-container', uiConfig);


    }

    ngOnDestroy() {
        this.ui.delete();
    }

    onLoginSuccessful(result) {
        
        this.updateUserData(result.user);
        this.ngZone.run(() => this.router.navigateByUrl('/'));

    }
    private updateUserData(user) {
        // Sets user data to firestore on login
        const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);
    
        const data = { 
          uid: user.uid, 
          email: user.email, 
          displayName: user.displayName, 
          photoURL: user.photoURL
        } 
    
        return userRef.set(data, { merge: true })
    
}
go(){
    console.log('ciao')
    this.nav.navigateForward('/tabs/market/buy')
}
}