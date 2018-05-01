import { EventosPage } from './../../../../FunFinder_Alpha/src/pages/eventos/eventos';
import { FirebaseAuthProvider } from './../../providers/firebase-auth/firebase-auth';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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
  constructor(public navCtrl: NavController, public navParams: NavParams, public dbFirebase:FirebaseDbProvider, public authFirebase:FirebaseAuthProvider, public formBuilder:FormBuilder) {
    this.loginForm = this.formBuilder.group({
      email: [''],
      contraseña: ['']
    })
  }

  login(){
    let data = this.loginForm.value;

		if (!data.email) {
			return;
    }
    
    let credentials = {
			email: data.email,
			password: data.password
		};
		this.authFirebase.signInWithEmail(credentials)
			.then(
				() => {
          this.navCtrl.setRoot(EventosPage);
          
        }
			);

  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad InicioSesionPage');
  }

}

