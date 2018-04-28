//import { HttpClient } from '@angular/common/http';
import { AngularFireDatabase} from 'angularfire2/database';
import { Cliente } from '../../models/cliente.model';

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

}

guardaCliente(cliente:Cliente) {
	if (cliente.id=='') {cliente.id=""+Date.now();}
	return this.afDB.database.ref('clientes/'+cliente.id).set(cliente);
}

delCliente(id) {
	this.afDB.database.ref('clientes/'+id).remove();
}

private clientesRef=this.afDB.list<Cliente>('clientes');

getClientes() {
	return this.clientesRef.valueChanges();
}