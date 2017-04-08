import { Component } from '@angular/core';
import { NavController, NavParams, Nav } from 'ionic-angular';
import { ProviderLogin } from '../../providers/provider-login';
import { LoginPage } from '../login/login';
import firebase from 'firebase';

@Component({
  selector: 'page-dai',
  templateUrl: 'dai.html'
})

export class DaiPage {

  private emailUser: string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public providerLogin: ProviderLogin,
    public nav: Nav) {
      var user = firebase.auth().currentUser;
      if(user != null){
        console.log(user)
        this.emailUser = user.displayName;
      }
    }

    
    ionViewDidLoad() {
      console.log('Acesso a página Dai com sucesso');
    }


    sair(){
        this.providerLogin.sair();
        this.nav.setRoot(LoginPage)
    }
}
