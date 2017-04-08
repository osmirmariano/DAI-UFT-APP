import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { ProviderLogin } from '../../providers/provider-login';
import { Credencial } from '../../model/credencial';
import { TabsPage } from '../tabs/tabs';
import { LoginPage } from '../login/login';
import firebase from 'firebase';

import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

@Component({
  selector: 'page-registrar',
  templateUrl: 'registrar.html'
})

export class RegistrarPage {
	credencial:Credencial;
	ionViewDidLoad() {
		this.credencial = new Credencial();
	  	this.providerLogin.loginSucessoEventEmitter.subscribe (
	  		user => this.navCtrl.setRoot(TabsPage)
	  	)
	  	this.providerLogin.loginFalhaEventEmitter.subscribe (
	  		erro => console.log(erro)
	  	)
	}
	constructor(
	  	public navCtrl: NavController, 
		public providerLogin: ProviderLogin,
		public loadingCtrl: LoadingController,
		public alertCtrl: AlertController) {
		this.credencial = new Credencial();
	}

	//Registrar Usuário na Base de Dados do Firebase
	doRegister(){
		var user = firebase.auth().currentUser;
		this.providerLogin.registrarUsuario(this.credencial);
		if(this.credencial.email == null || this.credencial.nome == null || this.credencial.senha == null){
			let alert = this.alertCtrl.create({
				title: 'Erro:',
				message: 'Todos os campos são obrigatórios. por favor, preencha',
				buttons: ['OK']
			});
			alert.present();
		}


		if(this.credencial.email == user.email){
			let alert = this.alertCtrl.create({
				title: 'Erro ao cadastrar usuário, endereço de e-mail já existe!',
				buttons: ['OK']
			});
			alert.present();
		}
		else{
			let alert = this.alertCtrl.create({
				subTitle: 'Usuário registrado com sucesso'
			});
			alert.present();
			this.navCtrl.push(LoginPage);
		}
		
	}
}

