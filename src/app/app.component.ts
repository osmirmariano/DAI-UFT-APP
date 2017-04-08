import { Component, ViewChild, NgZone } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { HomeSlidePage } from '../pages/home-slide/home-slide';
import { ProgramasPage } from '../pages/programas/programas';
import { ConveniosPage } from '../pages/convenios/convenios';
import { SobreDaiPage } from '../pages/sobre-dai/sobre-dai';
import { PerfilPage } from '../pages/perfil/perfil';

import firebase from 'firebase';

@Component({
  templateUrl: 'app.html'
  //template: `<ion-nav [root]="rootPage"></ion-nav>`
})


export class MyApp {
  rootPage: any;
  zone: NgZone;
  @ViewChild(Nav) nav: Nav;
  pages: Array<{title: string, component: any}>;

  constructor(
    platform: Platform, private statusBar: StatusBar, 
    private splashScreen: SplashScreen) {
    
    this.zone = new NgZone({});
    
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.zone = new NgZone({});
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      this.zone.run(() => {
        if (user == null) {
          this.rootPage = HomeSlidePage;
          console.log(user);
          unsubscribe();
        } else { 
          this.rootPage = TabsPage; 
          console.log(user);
          unsubscribe();
        }
      });     
    });

    this.pages = [
     { title: 'Programas', component: ProgramasPage },
     { title: 'Convênios', component: ConveniosPage},
     { title: 'Perfil', component: PerfilPage},
     { title: 'Sobre', component: SobreDaiPage}
    ];
  }  

  openPage(page) {
    this.nav.setRoot(page.component);
  }
}


// export class MyApp {

//   @ViewChild(Nav) nav: Nav;
  

//   //rootPage: any = HomeSlidePage;
//   //rootPage: any = TabsPage;

//   pages: Array<{title: string, component: any}>;


//   constructor(
//     public platform: Platform, 
//     public statusBar: StatusBar, 
//     public splashScreen: SplashScreen) {
//     this.initializeApp();

//     // used for an example of ngFor and navigation
//     this.pages = [
//       { title: 'Programas', component: ProgramasPage }
//     ];

//   }
//   rootPage: any = HomeSlidePage;
//   initializeApp() {
//     this.platform.ready().then(() => {
//       this.statusBar.styleDefault();
//       this.splashScreen.hide();
//     });
//   }

//   openPage(page) {
//     this.nav.setRoot(page.component);
//   }
// }
