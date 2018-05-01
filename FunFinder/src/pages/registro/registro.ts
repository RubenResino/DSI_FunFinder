import { EventosPage } from './../eventos/eventos';
import { AngularFireAuth } from 'angularfire2/auth';
import { FirebaseAuthProvider } from './../../providers/firebase-auth/firebase-auth';
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
  constructor(public navCtrl: NavController, public navParams: NavParams, public dbFirebase:FirebaseDbProvider, public authFirebase:FirebaseAuthProvider, public formBuilder:FormBuilder) {
    this.registerForm = this.formBuilder.group({
      nombre: [''],
      email: [''],
      contraseña: [''],
      telefono: [''],
    })
  }

  register() {
    let data = this.registerForm.value;
    let credentials = {
      nombre: data.nombre,
      email: data.email,
      password: data.password,
      telefono: data.telefono,
    };
    //alert(this.authFirebase.getUserEmail());
    this.authFirebase.signUp(credentials).then(
      () => this.navCtrl.setRoot(EventosPage),
    );
    alert(this.authFirebase.getUserEmail());
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
  }

}
