import { FirebaseAuthProvider } from './../../providers/firebase-auth/firebase-auth';


import { Entrada } from './../../models/entrada.model';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseDbProvider } from './../../providers/firebase-db/firebase-db';
import { Evento } from './../../models/evento.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


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
  precioFinal: number = 0;
  entrada:Entrada;
  cantidad:number=0;
  vplazas=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,public dbFirebase:FirebaseDbProvider, public authFirebase:FirebaseAuthProvider,public formBuilder:FormBuilder) 
  {
    this.vplazas.push(Validators.required);
    this.vplazas.push(Validators.min(1));
    this.vplazas.push(Validators.pattern("^[0-9]+$"));
    this.datosEvento=this.dbFirebase.getEventoById(navParams.get('id'));
    //this.entrada=this.dbFirebase.getEntradaById("1525217407469rdTPDmcruSbdQFRBqjKXeayu4q53");
  	this.buyForm = this.formBuilder.group
  	({
      Entradas: [0,Validators.compose(this.vplazas)],
    })
  
  }

buyEvent()
{
  let uid=this.authFirebase.getUser().uid;
  let datosentrada:Entrada=new Entrada();
  datosentrada.nombre=this.datosEvento.nombre;
  datosentrada.uid=uid;
  datosentrada.eid=this.datosEvento.id;
  datosentrada.fecha=this.datosEvento.fecha;
  datosentrada.cantidad=0;
  datosentrada.cantidad=datosentrada.cantidad*1+this.buyForm.controls['Entradas'].value*1;
  if(this.entrada!=null){
    datosentrada.cantidad=datosentrada.cantidad*1+this.entrada.cantidad*1;
  }
  
  this.dbFirebase.guardaEntrada(datosentrada).then(res=>{
    
  });
  
  this.navCtrl.pop();
  this.navCtrl.pop();
}

changeEntradas(){
  this.precioFinal=this.buyForm.controls['Entradas'].value*this.datosEvento.precio;
}

  ionViewDidLoad() {
    let uid=this.authFirebase.getUser().uid;
    let eid=this.datosEvento.id;
    this.dbFirebase.getEntradaById(eid+uid).subscribe(entrada=>{this.entrada=entrada;});

    console.log('ionViewDidLoad ComprarEventoPage');
  }

}
