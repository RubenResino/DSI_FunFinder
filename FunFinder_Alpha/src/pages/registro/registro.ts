import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Usuario } from '../../models/usuario.model';
import { FirebaseDbProvider } from '../../providers/firebase-db/firebase-db';

/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {
  registerForm: FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams, public dbFirebase:FirebaseDbProvider, public formBuilder:FormBuilder) {
    this.registerForm = this.formBuilder.group({
      nombre: [''],
      email: [''],
      contraseña: [''],
      telefono: [''],
    })
  }

  register(){
    let datosusuario:Usuario=new Usuario();
    datosusuario.nombre=this.registerForm.controls['nombre'].value;
    datosusuario.email=this.registerForm.controls['email'].value;
    datosusuario.contraseña=this.registerForm.controls['contraseña'].value;
    datosusuario.telefono=this.registerForm.controls['telefono'].value;

    this.dbFirebase.guardaUsuario(datosusuario).then(res=>{
			alert(datosusuario.id+ " guardado en FB");
		});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
  }

}
