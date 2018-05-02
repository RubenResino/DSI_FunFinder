import { EventosCreadosPage } from './../eventos-creados/eventos-creados';
import { FirebaseAuthProvider } from './../../providers/firebase-auth/firebase-auth';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Evento } from '../../models/evento.model';
import { FirebaseDbProvider } from '../../providers/firebase-db/firebase-db';

/**
 * Generated class for the CreateEventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-event',
  templateUrl: 'create-event.html',
})
export class CreateEventPage {
  eventForm: FormGroup;
  vprecio=[];
  vplazas=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,public dbFirebase:FirebaseDbProvider, public formBuilder:FormBuilder, public authFirebase:FirebaseAuthProvider) {
    this.vprecio.push(Validators.required);
    this.vprecio.push(Validators.min(0.01));
    this.vprecio.push(Validators.pattern("(^[0-9]*[.,]{1}[0-9]{1,2}$)|(^[0-9]+[.,]{1}[0-9]{0,2}$)|(^[0-9]+$)"));
    this.vplazas.push(Validators.required);
    this.vplazas.push(Validators.min(1));
    this.vplazas.push(Validators.pattern("^[0-9]+$"));
    this.eventForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      descripcion: [''],
      plazas: ['',Validators.compose(this.vplazas)],
      precio: ['',Validators.compose(this.vprecio)],
      fecha: ['',Validators.required],
      imagen: ['']
    })
  }

  createEvent(){
    let datosevento:Evento=new Evento();
    datosevento.nombre=this.eventForm.controls['nombre'].value;
    datosevento.descripcion=this.eventForm.controls['descripcion'].value;
    datosevento.plazas=this.eventForm.controls['plazas'].value;
    datosevento.plazasRestantes=this.eventForm.controls['plazas'].value;
    datosevento.precio=this.eventForm.controls['precio'].value;
    datosevento.fecha=this.eventForm.controls['fecha'].value;
    datosevento.imagen=this.eventForm.controls['imagen'].value;
    datosevento.usuario=this.authFirebase.getUser().uid;

    this.dbFirebase.guardaEvento(datosevento).then(res=>{
			
    }, error =>{});
    
    this.navCtrl.pop();
    this.navCtrl.push(EventosCreadosPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateEventPage');
  }

}
