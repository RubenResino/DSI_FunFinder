import { InicioSesionPage } from './../pages/inicio-sesion/inicio-sesion';
import { RegistroPage } from './../pages/registro/registro';
import { CreateEventPage } from './../pages/create-event/create-event';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { EventHistoryPage } from '../pages/event-history/event-history';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FirebaseDbProvider } from '../providers/firebase-db/firebase-db';
import { EventosPage } from '../pages/eventos/eventos';
import { FirebaseAuthProvider } from '../providers/firebase-auth/firebase-auth';

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
    HomePage,
    CreateEventPage,
    RegistroPage,
    EventosPage,
    InicioSesionPage,
    EventHistoryPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(fireBaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage, 
    CreateEventPage,
    RegistroPage,
    EventosPage,
    InicioSesionPage,
    EventHistoryPage
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
