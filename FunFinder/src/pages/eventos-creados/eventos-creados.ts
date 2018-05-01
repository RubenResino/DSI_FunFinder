import { InfoEventoPage } from './../info-evento/info-evento';
import { FirebaseAuthProvider } from './../../providers/firebase-auth/firebase-auth';
import { FirebaseDbProvider } from './../../providers/firebase-db/firebase-db';

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EventosCreadosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-eventos-creados',
  templateUrl: 'eventos-creados.html',
})
export class EventosCreadosPage {
	listaEventos:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public dbFirebase:FirebaseDbProvider, public authFirebase:FirebaseAuthProvider) {
  }

  goEvent(Id){
    this.navCtrl.push(InfoEventoPage, {id: Id});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventosCreadosPage');
    let id=this.authFirebase.getUser();
    this.listaEventos=this.dbFirebase.getEventosByUid(id.uid);
  }

}
