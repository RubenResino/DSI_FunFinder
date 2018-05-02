import { Entrada } from './../../models/entrada.model';
import { Usuario } from './../../models/usuario.model';
//import { HttpClient } from '@angular/common/http';
import { AngularFireDatabase} from 'angularfire2/database';

import { Evento } from '../../models/evento.model';
import { Injectable } from '@angular/core';

/*
  Generated class for the FirebaseDbProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseDbProvider {

  //constructor(public http: HttpClient) 
  	constructor(public afDB:AngularFireDatabase) {
    console.log('Hello FirebaseDbProvider Provider');
	}
	
guardaEvento(evento:Evento){
	if (evento.id=='') {
		evento.id = ""+Date.now();
		}
	return this.afDB.database.ref('eventos/'+evento.id).set(evento);
}

guardaUsuario(usuario:Usuario) {

	if (usuario.id=='') {
		usuario.id = ""+Date.now();
		}
	return this.afDB.database.ref('usuarios/'+usuario.id).set(usuario);
}

guardaEntrada(entrada:Entrada) {

	if (entrada.id=='') {
		entrada.id = entrada.eid+entrada.uid;
	}

	return this.afDB.database.ref('entradas/'+entrada.id).set(entrada);;
}


delCliente(id) {
	this.afDB.database.ref('clientes/'+id).remove();
}

private eventosRef=this.afDB.list<Evento>('eventos');

private usuariosRef=this.afDB.list<Usuario>('usuarios');

getUsuarios() {
	return this.usuariosRef.valueChanges();
}

getEventos() {
	return this.eventosRef.valueChanges();
}

getEventoById(id) {
	let evento:Evento;
	this.afDB.database.ref('eventos/'+id).once('value', function(snapshot){
		evento=snapshot.val();
	}, error =>{});

	return evento;
}

getEventosByUid(uid) {
	/*let eventos:any;
	this.afDB.database.ref('eventos').orderByChild('usuario').equalTo(uid).once('value', function(snapshot){
		eventos=snapshot.val();
	});
*/
	let eventos=this.afDB.list<Evento>('eventos', ref=> ref.orderByChild('usuario').equalTo(uid));

	return eventos.valueChanges();
	
}

getEntradasByUid(uid){
	let entradas=this.afDB.list<Entrada>('entradas', ref=> ref.orderByChild('uid').equalTo(uid));

	return entradas.valueChanges();
}

getEntradaById(id){
	let entrada=this.afDB.object<Entrada>('entradas/'+id);

	return entrada.valueChanges();
	/*let entrada:Entrada;
	this.afDB.database.ref('entradas/'+id).once('value', function(snapshot){
		entrada=snapshot.val();
		alert(entrada.cantidad);
	});*/
	
	
	//return entrada;
}

}

