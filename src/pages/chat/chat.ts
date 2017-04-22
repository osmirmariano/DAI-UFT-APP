import { Component } from '@angular/core';
import { NavController, NavParams, Nav } from 'ionic-angular';
import { ProviderLogin } from '../../providers/provider-login';
import { LoginPage } from '../login/login';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import firebase from 'firebase';

@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html'
})
export class ChatPage {
  firelist: FirebaseListObservable<any>;
  chat: any;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public providerLogin: ProviderLogin,
    public nav: Nav,
    public af: AngularFire) {
      this.firelist = this.af.database.list('/chat', { //mengambil data
        query: {
          orderByChild: 'negativtimestamp', //order dari data yang terbaru
        }
      });
    }

  ionViewDidLoad() {
    console.log('Acesso a página Chat com sucesso');
  }
  
  chatSend(va, vi) { //mengirim pesan chat
    var user = firebase.auth().currentUser;
    this.af.database.list('/chat').push({ // menambahkan data chat ke firebase
      uid: user.uid,
      img: user.photoURL,
      username: user.displayName,
      chat_text: va.chatText,
      timestamp: Date.now(),
      negativtimestamp: -Date.now() //buat nanti ambil data yang terbaru
    })
    this.chat = '';
  }


  sair(){
	    this.providerLogin.sair();
      this.nav.setRoot(LoginPage)
  }
}
