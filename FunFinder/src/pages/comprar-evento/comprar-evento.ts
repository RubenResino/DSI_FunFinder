import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseDbProvider } from './../../providers/firebase-db/firebase-db';
import { Evento } from './../../models/evento.model';
import { FormGroup, FormBuilder } from '@angular/forms';


/**
 * Generated class for the ComprarEventoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-comprar-evento',
  templateUrl: 'comprar-evento.html',
})
export class ComprarEventoPage {
  datosEvento:Evento;
  buyForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams,public dbFirebase:FirebaseDbProvider,public formBuilder:FormBuilder) 
  {
  	this.datosEvento=this.dbFirebase.getEventoById(navParams.get('id'));
  	this.buyForm = this.formBuilder.group
  	({
      Entradas: [''],
      Total: ['']
    })
  
  }

buyEvent()
{
	this.buyForm.controls['Total']=this.buyForm.controls['Entradas'].value;
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComprarEventoPage');
  }

}
