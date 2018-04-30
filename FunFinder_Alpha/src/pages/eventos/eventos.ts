import { FirebaseDbProvider } from './../../providers/firebase-db/firebase-db';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EventosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-eventos',
  templateUrl: 'eventos.html',
})
export class EventosPage {
	listaEventos:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public dbFirebase:FirebaseDbProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventosPage');
    this.dbFirebase.getEventos().subscribe(listaEventos=>{this.listaEventos=listaEventos;});
  }

}
