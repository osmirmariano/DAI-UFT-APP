import { Component } from '@angular/core';
import { NavController, NavParams, MenuController, LoadingController, AlertController  } from 'ionic-angular';
import { RegistrarPage } from '../registrar/registrar';
import { Credencial } from '../../model/credencial';
import { ProviderLogin } from '../../providers/provider-login';
import { TabsPage } from '../tabs/tabs';
import { LoginEmailPage } from '../login-email/login-email';

import { Facebook } from 'ionic-native';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
	credencial:Credencial;

  	constructor(
  		public navCtrl: NavController,
     	public providerLogin: ProviderLogin,
      	public menuCtrl: MenuController,
		public loadingCtrl: LoadingController,
		public alertCtrl: AlertController
      ) {
    	  this.initialize();
  	  }

  	private initialize(){
    	this.credencial = new Credencial();
  	}

  	ionViewDidEnter(){
    	this.menuCtrl.enable(false);
    	this.menuCtrl.swipeEnable(false);
  	}

	ionViewDidLoad() {
	    this.providerLogin.loginSucessoEventEmitter.subscribe(
	      	user => {
	        	this.menuCtrl.enable(true);
	        	this.menuCtrl.swipeEnable(true);
	        	this.navCtrl.setRoot(TabsPage)
	      	}
	    );
	    this.providerLogin.loginFalhaEventEmitter.subscribe(
	      error => console.log(error)
	    )
	}

  	loginComCredencial(){
		this.providerLogin.loginComCredencial(this.credencial);
    	this.loadingCtrl.create({
        	content: 'Por favor, aguarde...',
        	duration: 3000,
        	dismissOnPageChange: true
    	}).present();
  	}

	loginComFacebook(){
		this.providerLogin.loginComFacebook();
	}

	loginComGoogle(){
	    this.providerLogin.loginComGoogle();
	}
	
	

	doRegister(){
	    this.navCtrl.push(RegistrarPage);
	}

	loginComEmail(){
		this.navCtrl.push(LoginEmailPage);
	}
}
