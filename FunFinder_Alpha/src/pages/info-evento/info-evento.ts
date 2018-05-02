import { ComprarEventoPage } from './../comprar-evento/comprar-evento';
import { FirebaseDbProvider } from './../../providers/firebase-db/firebase-db';
import { Evento } from './../../models/evento.model';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the InfoEventoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-info-evento',
  templateUrl: 'info-evento.html',
})
export class InfoEventoPage {
  datosEvento:Evento;
  constructor(public navCtrl: NavController, public navParams: NavParams, public dbFirebase:FirebaseDbProvider ) {
    this.datosEvento=this.dbFirebase.getEventoById(navParams.get('id'));
  }

  comprar(Id){
    this.navCtrl.push(ComprarEventoPage, {id:Id});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoEventoPage');
  }

}
