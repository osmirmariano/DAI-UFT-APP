import { Component } from '@angular/core';
import { NavController, NavParams, Nav } from 'ionic-angular';
import { DaiPage } from './dai';

@Component({
  selector: 'page-dai-noticias',
  templateUrl: 'dai-noticias.html'
})


export class DaiNoticiasPage {
  noticia;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public nav: Nav) {
      this.noticia = this.navParams.get('noticia');
      console.log('printando');
      console.log(this.noticia);
    }
    
}