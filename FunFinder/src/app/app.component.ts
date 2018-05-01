
import { AngularFireDatabase } from 'angularfire2/database';
import { InfoEventoPage } from './../pages/info-evento/info-evento';
import { AngularFireModule } from 'angularfire2';

import { FirebaseAuthProvider } from './../providers/firebase-auth/firebase-auth';
import { RegistroPage } from './../pages/registro/registro';


import { ComprarEventoPage } from '../pages/comprar-evento/comprar-evento';
import { CreateEventPage } from '../pages/create-event/create-event';
import { Component } from '@angular/core';
import { Platform, NavController, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { EventosPage } from '../pages/eventos/eventos';
import { InicioSesionPage } from '../pages/inicio-sesion/inicio-sesion';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = ComprarEventoPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,  public authFirebase:FirebaseAuthProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    authFirebase.afAuth.auth.onAuthStateChanged(user => {
      if (user) {
        this.rootPage = EventosPage;
        
      } else {
        this.rootPage = ComprarEventoPage;
        
      }
    });
    /*this.auth.afAuth.authState.subscribe(
      user => {
        if (user) {
          this.rootPage = HomePage;
        } else {
          this.rootPage = InicioSesionPage;
        }
      },
      () => {
        this.rootPage = InicioSesionPage;
      }
    );*/
  }
}

