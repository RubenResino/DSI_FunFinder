import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import AuthProvider = firebase.auth.AuthProvider;

/*
  Generated class for the FirebaseAuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseAuthProvider {
  
  constructor(public afAuth: AngularFireAuth) {

  }

  signInWithEmail(credentials) {
		return this.afAuth.auth.signInWithEmailAndPassword(credentials.email, credentials.password);
  }
  
  
  signUp(credentials) {
    return this.afAuth.auth.createUserWithEmailAndPassword(credentials.email, "Asdf1234");
  }


  getUser(){

    return firebase.auth().currentUser;
    /*
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        alert(user.uid);
        return user;
      } else {
        alert(2);
        return null;
      }
    });*/
  }

}
