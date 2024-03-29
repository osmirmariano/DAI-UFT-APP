
import { Injectable, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
import { NgZone } from '@angular/core';
import 'rxjs/add/operator/map';
import { Credencial } from '../model/credencial';
import { AlertController } from 'ionic-angular';

import firebase from 'firebase';

@Injectable()
export class ProviderLogin {
	currentUser:any;
	autenticado:boolean;
	credencial:Credencial;
	loginSucessoEventEmitter:EventEmitter<any>;
	loginFalhaEventEmitter:EventEmitter<any>;
	logoutEventEmitter:EventEmitter<any>;

	constructor(
		public http: Http, 
		public ngZone: NgZone,
		public alertCtrl: AlertController) {

	    this.loginSucessoEventEmitter = new EventEmitter();
	    this.loginFalhaEventEmitter = new EventEmitter();
	    this.logoutEventEmitter = new EventEmitter();
	    firebase.auth().onAuthStateChanged(usuario => {
	    	this.callbackStateChange(usuario);
	    })
		this.credencial = new Credencial();
	}

	private callbackStateChange(usuario){
		this.ngZone.run( () => {
			if(usuario == null){
				this.currentUser = null;
				this.autenticado = false;
			}
			else{
				this.currentUser = usuario;
				this.autenticado = true;
			}
		})
	}

	loginComCredencial(credencial:Credencial){
		firebase.auth().signInWithEmailAndPassword(credencial.email, credencial.senha)
			.then(resultado => this.callbackSucessoLogin(resultado))
			.catch(erro => this.callbackFalhaLogin(erro))
	}

	loginComGoogle(){
		let provider = new firebase.auth.GoogleAuthProvider();
		firebase.auth().signInWithRedirect(provider)
			.then(resultado => this.callbackSucessoLogin(resultado))
			.catch(erro => this.callbackFalhaLogin(erro))
	}

	loginComFacebook(){
		var provider = new firebase.auth.FacebookAuthProvider();

		//return firebase.auth().signInWithPopup(provider)
		return firebase.auth().signInWithRedirect(provider)
			.then(resultado => this.callbackSucessoLogin(resultado))
			.catch(erro => this.callbackFalhaLogin(erro))
	}


	registrarUsuario(credencial:Credencial){
	  	firebase.auth().createUserWithEmailAndPassword(credencial.email, credencial.senha)
	  		.then(result => console.log(result))
	  		.catch(error => console.log(error))
	}

	recuperarSenha(credencial: Credencial){
		firebase.auth().sendPasswordResetEmail(credencial.email)
			.then(result => console.log(result))
			.catch(error => console.log(error))

	}

	sair(){
		firebase.auth().signOut()
			.then(() => this.logoutEventEmitter.emit(true))
			.catch(erro => this.callbackFalhaLogin(erro))
	}

	private callbackSucessoLogin(response){
		this.loginSucessoEventEmitter.emit(response.user);
	}
	
	private callbackFalhaLogin(erro){
		let alert = this.alertCtrl.create({
			title: 'Por favor, verifice se seu endereço de e-mail é válido!',
			buttons: ['OK']
		});
		alert.present();
	}
}