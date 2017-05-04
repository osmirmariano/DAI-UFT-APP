/*Declarações Nativas Ionic 2*/
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
/*Declarações firebase*/
import { AngularFireModule } from 'angularfire2';
import firebase from 'firebase';
/*Declarações de imports de paginas*/
import { DaiPage } from '../pages/dai/dai';
import { VisualizaPage } from '../pages/dai/dai';
import { ChatPage } from '../pages/chat/chat';
import { IsfPage } from '../pages/isf/isf';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { HomeSlidePage } from '../pages/home-slide/home-slide';
import { RegistrarPage } from '../pages/registrar/registrar';
import { LoginEmailPage } from '../pages/login-email/login-email';
import { EsqueciSenhaPage } from '../pages/esqueci-senha/esqueci-senha';
import { ProgramasPage } from '../pages/programas/programas';
import { NavegacaoPage } from '../pages/programas/programas';
import { ConveniosPage } from '../pages/convenios/convenios';
import { ConveniosContentPage } from '../pages/convenios/convenios';
import { SobreDaiPage } from '../pages/sobre-dai/sobre-dai';
import { SobrePage } from '../pages/sobre/sobre';
import { PerfilPage } from '../pages/perfil/perfil';
import { NoticiasPage } from '../pages/noticias/noticias';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { SairPage } from '../pages/sair/sair';
/*Declarações de imports de providers*/
import { ProviderLogin } from '../providers/provider-login';
import { ProviderDados } from '../providers/provider-dados';
// import { SocketService } from '../providers/socket-service';

export const firebaseConfig = {
  apiKey: "AIzaSyCT5QhqGe8tXBhcCwXE27VUoWyngERdJYM",
  authDomain: "appdai-beta.firebaseapp.com",
  databaseURL: "https://appdai-beta.firebaseio.com",
  storageBucket: "appdai-beta.appspot.com",
  messagingSenderId: "562100545330"
};

@NgModule({
  declarations: [
    MyApp,
    DaiPage,
    ChatPage,
    IsfPage,
    LoginPage,
    TabsPage,
    HomeSlidePage,
    RegistrarPage,
    LoginEmailPage,
    EsqueciSenhaPage,
    ProgramasPage,
    NavegacaoPage,
    ConveniosPage,
    ConveniosContentPage,
    SobreDaiPage,
    SobrePage,
    PerfilPage,
    NoticiasPage,
    VisualizaPage,
    TutorialPage,
    SairPage
  ],
  imports: [
    IonicModule.forRoot(MyApp, {tabsPlacement: 'top'}),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DaiPage,
    ChatPage,
    IsfPage,
    LoginPage,
    TabsPage,
    HomeSlidePage,
    RegistrarPage,
    LoginEmailPage,
    EsqueciSenhaPage,
    ProgramasPage,
    NavegacaoPage,
    ConveniosPage,
    ConveniosContentPage,
    SobreDaiPage,
    SobrePage,
    PerfilPage,
    NoticiasPage,
    VisualizaPage,
    TutorialPage,
    SairPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ProviderLogin,
    ProviderDados,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})

export class AppModule {
  constructor(){
    firebase.initializeApp(firebaseConfig);
  }
}