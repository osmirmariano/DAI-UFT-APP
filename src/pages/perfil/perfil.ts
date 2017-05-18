import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';

@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html'
})
export class PerfilPage {

  private nome: string;
  private email: string;
  private foto: string;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams) {
      var user = firebase.auth().currentUser;
      if(user.photoURL == null){
        console.log(user.photoURL);
        //user.photoURL = "gs://appdai-beta.appspot.com/avatar.png"
      }

      if(user != null){
        console.log(user)
        this.nome = user.displayName;
        this.email = user.email;
        this.foto = user.photoURL;
      }
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilPage');
  }

}
