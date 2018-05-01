import { RegistroPage } from './../registro/registro';
import { EventosPage } from './../eventos/eventos';
import { FirebaseAuthProvider } from './../../providers/firebase-auth/firebase-auth';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FirebaseDbProvider } from '../../providers/firebase-db/firebase-db';

/**
 * Generated class for the InicioSesionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inicio-sesion',
  templateUrl: 'inicio-sesion.html',
})
export class InicioSesionPage {
  loginForm: FormGroup;
  mostrarIniciar:Boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, public dbFirebase:FirebaseDbProvider, public authFirebase:FirebaseAuthProvider, public formBuilder:FormBuilder, public alertCtrl: AlertController) {
    this.loginForm = this.formBuilder.group({
      email: [''],
      contraseña: ['']
    })
  }

  showIniciar(){
    this.mostrarIniciar=!this.mostrarIniciar;
  }

  login(){  
    let data = this.loginForm.value;
    let credentials = {
			email: data.email,
			password: data.contraseña
    };
    alert(credentials.email);
		this.authFirebase.signInWithEmail(credentials)
			.then(
				() => {
          this.navCtrl.setRoot(EventosPage);
          
        }
			);

  }

  Registrarse(){
    this.navCtrl.push(RegistroPage);
  }

  logSinUser(){
    this.navCtrl.setRoot(EventosPage);
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad InicioSesionPage');
  }

}

