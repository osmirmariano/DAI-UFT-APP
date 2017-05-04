import { Component, NgZone  } from '@angular/core';
import { NavController, NavParams, Nav, ViewController } from 'ionic-angular';
import { NoticiasPage } from '../pages/noticias/noticias';
import firebase from 'firebase';
import {AngularFire, FirebaseListObservable} from 'angularfire2';

@Component({
   templateUrl: 'dai-noticias.html',
})

export class VisualizaPage {
  noticias;
  
  constructor(
    public params: NavParams) {
      this.noticias = params.data.noticia;     
      console.log('Entrou aqui2 ');
    }
    
}

@Component({
  template: `
    <ion-header>
        <ion-navbar>
          <button ion-button menuToggle>
              <ion-icon name="menu"></ion-icon>
          </button>
        <ion-buttons start style="margin-right: 4%;">
          <button ion-button clear block (click)="sair()">
            <ion-icon ios="ios-power" md="md-power"></ion-icon>
          </button>
        </ion-buttons>
          <ion-title>DAI</ion-title>
        </ion-navbar>
    </ion-header>

    <ion-content>
      <hr/>
      <ion-card  class="text" *ngFor="let noticia of noticias | async" (click)="VisualizaPage(noticia)">
        <ion-card-content>
          <ion-card-title class="tituloFormato">
            {{noticia.titulo}}
          </ion-card-title>
          <p class="resumoFormato">
            {{noticia.resumo}}
          </p>
        </ion-card-content>
      </ion-card>
    </ion-content>
  `
})


//@Component({
  //selector: 'page-dai',
  //templateUrl: 'dai.html'
//})

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

    abrirNoticiasPage(noticia) {
      console.log('Entrou aqui');
      this.nav.push(VisualizaPage, {noticia});
    }
}

