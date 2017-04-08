import { Component } from '@angular/core';
import { NavController, NavParams, Nav } from 'ionic-angular';
import { ProviderLogin } from '../../providers/provider-login';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-isf',
  templateUrl: 'isf.html'
})
export class IsfPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public providerLogin: ProviderLogin,
    public nav: Nav) {}

  ionViewDidLoad() {
    console.log('Acesso a página Isf com sucesso');
  }
  
  sair(){
	    this.providerLogin.sair();
      this.nav.setRoot(LoginPage)
  }
}
