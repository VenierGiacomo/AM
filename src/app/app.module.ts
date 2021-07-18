import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';




import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { SQLite } from '@ionic-native/sqlite/ngx';
import { IonicStorageModule } from '@ionic/storage';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Firebase 
import { FirebaseX } from "@ionic-native/firebase-x/ngx";
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
//import { FirebaseAuthentication } from '@ionic-native/firebase-authentication';

var firebaseConfig = {
  apiKey: "AIzaSyBiRC3GbJL-m6GgaqnVXc2n1RczMIwwtnI",
  authDomain: "athletemanagerfire.firebaseapp.com",
  databaseURL: "https://athletemanagerfire.firebaseio.com",
  projectId: "athletemanagerfire",
  storageBucket: "athletemanagerfire.appspot.com",
  messagingSenderId: "857962501096",
  appId: "1:857962501096:web:4d6c16d2e3d57ad7"
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    HttpClientModule, 
    NgxChartsModule, 
    BrowserAnimationsModule ,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    IonicStorageModule.forRoot() ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    FirebaseX,
    //FirebaseAuthentication,
    SQLite,
    SQLitePorter
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
