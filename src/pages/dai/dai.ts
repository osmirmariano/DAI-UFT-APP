import { Component, NgZone  } from '@angular/core';
import { NavController, NavParams, Nav, ModalController, ViewController, Alert } from 'ionic-angular';
import { ProviderLogin } from '../../providers/provider-login';
import { LoginPage } from '../login/login';
import { NoticasPage } from '../pages/noticias/noticias';
import firebase from 'firebase';
import {AngularFire, FirebaseListObservable} from 'angularfire2';


@Component({
  selector: 'page-dai',
  templateUrl: 'dai.html'
})

export class DaiPage {
  noticias: FirebaseListObservable<any>;
  private emailUser: string;
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public providerLogin: ProviderLogin,
    public nav: Nav,
    public af: AngularFire,
    public modalCtrl: ModalController) {
      this.noticias = af.database.list('noticias/');

      var user = firebase.auth().currentUser;
      if(user != null){
        this.emailUser = user.displayName;
      }
    }

    openModal() {
      console.log('erro');
      let myModal = this.modalCtrl.create(ModalContentPage);
      myModal.present();
    }

    sair(){
        this.providerLogin.sair();
        this.nav.setRoot(LoginPage)
    }
}

@Component({
  template: `
  <ion-toolbar>
        <ion-title>{{noticias.title}}</ion-title>
        <ion-buttons end>
        <button nav-pop>
            <ion-icon [name]="'close'"></ion-icon>
        </button>
    </ion-buttons>
    </ion-toolbar>
  <ion-content padding>
    
    
  </ion-content>
`
})

export class ModalContentPage {
  constructor(
    private nav:NavController, 
    private viewCtrl:ViewController,
    public alert: Alert) {

    }
    
}