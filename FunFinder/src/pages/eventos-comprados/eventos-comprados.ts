import { FirebaseAuthProvider } from './../../providers/firebase-auth/firebase-auth';
import { FirebaseDbProvider } from './../../providers/firebase-db/firebase-db';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EventosCompradosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-eventos-comprados',
  templateUrl: 'eventos-comprados.html',
})
export class EventosCompradosPage {
	listaEntradas:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public dbFirebase:FirebaseDbProvider, public authFirebase:FirebaseAuthProvider) {
  }

  /*goEvent(Id){
    this.navCtrl.push(InfoEventoPage, {id: Id});
  }*/

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventosCreadosPage');
    let uid=this.authFirebase.getUser().uid;
    this.dbFirebase.getEntradasByUid(uid).subscribe(listaEntradas=>{this.listaEntradas=listaEntradas;});
  }

}
