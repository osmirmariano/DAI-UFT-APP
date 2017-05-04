import { Component, ViewChild, NgZone } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { TabsPage } from '../pages/tabs/tabs';
import { HomeSlidePage } from '../pages/home-slide/home-slide';
import { ProgramasPage } from '../pages/programas/programas';
import { ConveniosPage } from '../pages/convenios/convenios';
import { SobreDaiPage } from '../pages/sobre-dai/sobre-dai';
import { PerfilPage } from '../pages/perfil/perfil';
import { SairPage } from '../pages/sair/sair';
// import { SocketService } from '../providers/socket-service';
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
    platform: Platform, 
    private statusBar: StatusBar, 
    private splashScreen: SplashScreen) {
    
    this.zone = new NgZone({});
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });

    //window["plugins"].OneSignal.startInit("2e83a1c1-1c42-4026-b6c0-5fdc070e706d",
      //    "562100545330")
       //   .handleNotificationOpened(funcaoRetorno)
        //  .endInit();
    //});

    //para o socket
    // this.socket.initialize();
    //  this.socket.socketService.subscribe(event => {
    //      console.log('Mensagem enviada para o servidor... ', event);
    //  });

    this.zone = new NgZone({});
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      this.zone.run(() => {
        if (user == null) {
          this.rootPage = HomeSlidePage;
          unsubscribe();
        } else { 
          this.rootPage = TabsPage; 
          unsubscribe();
        }
      });     
    });

    this.pages = [
     { title: 'Programas', component: ProgramasPage },
     { title: 'Convênios', component: ConveniosPage},
     { title: 'Como funciona', component: TutorialPage},
     { title: 'Perfil', component: PerfilPage},
     { title: 'Sobre', component: SobreDaiPage},
     { title: 'Sair', component: SairPage}
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
