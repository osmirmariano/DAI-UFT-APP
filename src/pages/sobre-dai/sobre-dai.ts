import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, Platform } from 'ionic-angular';
import { SobrePage } from '../sobre/sobre';
import { InAppBrowser } from 'ionic-native';

@Component({
  selector: 'page-sobre-dai',
  templateUrl: 'sobre-dai.html'
})
export class SobreDaiPage {

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public plt: Platform) {}

    ionViewDidLoad() {
      console.log('ionViewDidLoad SobreDaiPage');
    }

    chamadaVersao() {
      this.navCtrl.push(SobrePage)
    }

    endereco(){
      let alert = this.alertCtrl.create({
        title: 'Endereço',
        subTitle: 'Quadra 109 Norte Av. NS 15 ALCNO 14 - 77.001-090, Palmas-TO. Bloco DTE, Salas 02 e 03',
        buttons: ['OK']
      });
      alert.present();
    }

    telefone(){
      let alert = this.alertCtrl.create({
        title: 'Telefone',
        subTitle: '+55 (63)3232-8103 | +55 (63)3232-8078',
        buttons: ['OK']
      });
      alert.present();
    }

    launch(url) {
        this.plt.ready().then(() => {
            open(url, "_blank", "location=no");
        });
    }
}
