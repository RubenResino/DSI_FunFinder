import { AngularFireModule } from 'angularfire2';

import { HomePage } from './../pages/home/home';
import { FirebaseAuthProvider } from './../providers/firebase-auth/firebase-auth';
import { RegistroPage } from './../pages/registro/registro';
import { InicioSesionPage } from './../pages/inicio-sesion/inicio-sesion';
import { CreateEventPage } from './../pages/create-event/create-event';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
<<<<<<< HEAD

import { EventosPage } from '../pages/eventos/eventos';
import { InicioSesionPage } from '../pages/inicio-sesion/inicio-sesion';
import { AngularFireAuth } from 'angularfire2/auth';
=======
import { HomePage } from '../pages/home/home';

>>>>>>> b82b821e68a93b01a2b54d499a9cf0efc6f4d3b6
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
<<<<<<< HEAD
  rootPage:any = EventosPage;
=======
  rootPage:any = InicioSesionPage;
>>>>>>> b82b821e68a93b01a2b54d499a9cf0efc6f4d3b6

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public afAuth: AngularFireAuth) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    this.afAuth.afAuth.authState.subscribe(
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
    );
  }
}

