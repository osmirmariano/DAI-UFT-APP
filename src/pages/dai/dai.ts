import { Component, NgZone  } from '@angular/core';
import { NavController, NavParams, Nav, ViewController } from 'ionic-angular';
import { NoticiasPage } from '../pages/noticias/noticias';
import { DaiNoticiasPage } from './dai-noticias';
import firebase from 'firebase';
import {AngularFire, FirebaseListObservable} from 'angularfire2';

@Component({
  selector: 'page-dai',
  templateUrl: 'dai.html',
})

export class DaiPage {
  noticias: FirebaseListObservable<any>;
  private emailUser: string;
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public nav: Nav,
    public af: AngularFire) {
      this.noticias = af.database.list('noticias/');

      var user = firebase.auth().currentUser;
      if(user != null){
        this.emailUser = user.displayName;
      }

    }

    ionViewDidLoad() {
        console.log("Acessando a página DAI");
    }

    abrirNoticiasPage(noticia) {
      console.log(noticia.titulo);
        this.nav.push(DaiNoticiasPage, {noticia: noticia});
    }
}

