import { Component } from '@angular/core';
import { NavController, NavParams, Nav } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { ProviderLogin } from '../../providers/provider-login';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-sair',
  templateUrl: 'sair.html'
})
export class SairPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public nav: Nav,
    public providerLogin: ProviderLogin) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SairPage');
  }

  sair(){
      this.providerLogin.sair();
      this.nav.setRoot(LoginPage);
  }

  naoSair(){
      this.navCtrl.setRoot(TabsPage)
  }
}
