import { EventosCreadosPage } from './../pages/eventos-creados/eventos-creados';

import { AngularFireDatabase } from 'angularfire2/database';
import { InfoEventoPage } from './../pages/info-evento/info-evento';
import { AngularFireModule } from 'angularfire2';

import { FirebaseAuthProvider } from './../providers/firebase-auth/firebase-auth';
import { RegistroPage } from './../pages/registro/registro';


import { ComprarEventoPage } from '../pages/comprar-evento/comprar-evento';
import { CreateEventPage } from '../pages/create-event/create-event';
import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, Nav, MenuController, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { EventosPage } from '../pages/eventos/eventos';
import { InicioSesionPage } from '../pages/inicio-sesion/inicio-sesion';
import { AngularFireAuth } from 'angularfire2/auth';
import { EventosCompradosPage } from '../pages/eventos-comprados/eventos-comprados';
//import { OneSignal } from '@ionic-native/onesignal';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav;
  rootPage:any = InicioSesionPage;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    public authFirebase:FirebaseAuthProvider,
    //private oneSignal: OneSignal,
    public menuCtrl: MenuController,
    private alertCtrl: AlertController
    ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.menuCtrl.enable(false, 'authenticated');
      this.menuCtrl.enable(true, 'unauthenticated');
      statusBar.styleDefault();
      splashScreen.hide();
      //this.handlerNotifications();
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

  misEntradas(){
    this.nav.push(EventosCompradosPage);
  }

  misEventos(){
    this.nav.push(EventosCreadosPage);
  }

  crearEvento(){
    this.nav.push(CreateEventPage);
  }

  iniciarSesion(){
    alert(this.rootPage);
    this.nav.setRoot(InicioSesionPage);
  }

  registrarse(){
    this.nav.setRoot(InicioSesionPage);
    this.nav.push(RegistroPage);
  }

  /*private handlerNotifications(){
    this.oneSignal.startInit('d1e4804b-15b5-4974-b6a2-07f2de8a53a9', '141145935893'); //Estos numeros son el App Id de OneSignal y el Sender ID de Firebase.
    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);
    this.oneSignal.handleNotificationOpened()
    .subscribe(jsonData => {
      let alert = this.alertCtrl.create({
       title: jsonData.notification.payload.title,
       subTitle: jsonData.notification.payload.body,
       buttons: ['OK']
     });
      alert.present();
      console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
    });
    this.oneSignal.endInit();
  }*/

}

