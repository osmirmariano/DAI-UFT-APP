import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, MenuController } from 'ionic-angular';
import { Credencial } from '../../model/credencial';
import { ProviderLogin } from '../../providers/provider-login';
import { TabsPage } from '../tabs/tabs';
import { EsqueciSenhaPage } from '../esqueci-senha/esqueci-senha';

@Component({
  selector: 'page-login-email',
  templateUrl: 'login-email.html'
})
export class LoginEmailPage {
  credencial:Credencial;

  constructor(public navCtrl: NavController, 
      public navParams: NavParams,
      public providerLogin: ProviderLogin,
      public loadingCtrl: LoadingController,
      public menuCtrl: MenuController) {
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

    recuperarSenha(){
      this.navCtrl.push(EsqueciSenhaPage)
    }
}
