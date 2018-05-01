import { ComprarEventoPage } from './../pages/comprar-evento/comprar-evento';
import { InfoEventoPage } from './../pages/info-evento/info-evento';
import { InicioSesionPage } from './../pages/inicio-sesion/inicio-sesion';
import { RegistroPage } from './../pages/registro/registro';
import { CreateEventPage } from './../pages/create-event/create-event';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, NavController } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FirebaseDbProvider } from '../providers/firebase-db/firebase-db';
import { EventosPage } from '../pages/eventos/eventos';
import { FirebaseAuthProvider } from '../providers/firebase-auth/firebase-auth';
import { EventosCompradosPage } from '../pages/eventos-comprados/eventos-comprados';
import { EventosCreadosPage } from '../pages/eventos-creados/eventos-creados';
import { AngularFireAuthModule } from 'angularfire2/auth';


export const fireBaseConfig={
    apiKey: "AIzaSyDWSsm2T47c7hpvSuBT93QpzhUJL7hpAUs",
    authDomain: "dsi-funfinder.firebaseapp.com",
    databaseURL: "https://dsi-funfinder.firebaseio.com",
    projectId: "dsi-funfinder",
    storageBucket: "dsi-funfinder.appspot.com",
    messagingSenderId: "141145935893"
  };

@NgModule({
  declarations: [
    MyApp,
    CreateEventPage,
    RegistroPage,
    EventosPage,
    InicioSesionPage,
    InfoEventoPage,
    ComprarEventoPage,
    EventosCompradosPage,
    EventosCreadosPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(fireBaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CreateEventPage,
    RegistroPage,
    EventosPage,
    InicioSesionPage,
    InfoEventoPage,
    ComprarEventoPage,
    EventosCompradosPage,
    EventosCreadosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseDbProvider,
    FirebaseAuthProvider

    
  ]
})
export class AppModule {}
