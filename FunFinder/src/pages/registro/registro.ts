//import { InicioSesionPage } from './../inicio-sesion/inicio-sesion';

import { EventosPage } from './../eventos/eventos';
//import { AngularFireAuth } from 'angularfire2/auth';
import { FirebaseAuthProvider } from './../../providers/firebase-auth/firebase-auth';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
//import { Usuario } from '../../models/usuario.model';
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
  vNombre = [];
  constructor(public app: App, public navCtrl: NavController, public navParams: NavParams, public dbFirebase:FirebaseDbProvider, public authFirebase:FirebaseAuthProvider, public formBuilder:FormBuilder) {                    
      this.vNombre.push(Validators.required);
      this.vNombre.push(Validators.minLength(2));
    this.registerForm = this.formBuilder.group({
      nombre: ['', Validators.compose(this.vNombre)],
      email: ['', Validators.required],
      contraseña: ['', Validators.required],
      telefono: ['', Validators.required]
    })
  }

  register() {
    let data = this.registerForm.value;
    let credentials = {
      nombre: data.nombre,
      email: data.email,
      password: data.contraseña,
      telefono: data.telefono,
    };
    //alert(this.authFirebase.getUserEmail());
    this.authFirebase.signUp(credentials).then(
      () => this.navCtrl.setRoot(EventosPage),
      error => {alert(error.message);}
    );
  }




  ionViewDidLoad() {
    
    
    console.log('ionViewDidLoad RegistroPage');
  }

}
