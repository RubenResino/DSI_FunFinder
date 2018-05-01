
import { AngularFireDatabase } from 'angularfire2/database';
import { InfoEventoPage } from './../pages/info-evento/info-evento';
import { AngularFireModule } from 'angularfire2';

import { FirebaseAuthProvider } from './../providers/firebase-auth/firebase-auth';
import { RegistroPage } from './../pages/registro/registro';



import { CreateEventPage } from '../pages/create-event/create-event';
import { Component } from '@angular/core';
import { Platform, NavController, Nav, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { EventosPage } from '../pages/eventos/eventos';
import { InicioSesionPage } from '../pages/inicio-sesion/inicio-sesion';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = RegistroPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,  public authFirebase:FirebaseAuthProvider, public menuCtrl: MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.menuCtrl.enable(false, 'authenticated');
      this.menuCtrl.enable(true, 'unauthenticated');
      statusBar.styleDefault();
      splashScreen.hide();
    });
    authFirebase.afAuth.auth.onAuthStateChanged(user => {
      if (user) {
        this.menuCtrl.enable(true, 'authenticated');
        this.menuCtrl.enable(false, 'unauthenticated');
        this.rootPage = EventosPage;
      } else {
        this.menuCtrl.enable(false, 'authenticated');
        this.menuCtrl.enable(true, 'unauthenticated');
        this.rootPage = InicioSesionPage;  
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

  logout(){
    this.authFirebase.afAuth.auth.signOut();
  }
}

