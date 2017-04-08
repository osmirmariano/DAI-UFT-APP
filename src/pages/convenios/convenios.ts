import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, Platform, ModalController, ViewController  } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { InAppBrowser } from 'ionic-native';

@Component({
  selector: 'page-convenios',
  templateUrl: 'convenios.html'
})

export class ConveniosPage {
    character;
    items;
         
    constructor(public navCtrl: NavController, 
        public navParams: NavParams,
        public alerCtrl: AlertController,
        public platform: Platform, 
        public viewCtrl: ViewController,
        public modalCtrl: ModalController) {}


    openModal(characterNum) {
        let modal = this.modalCtrl.create(ConveniosContentPage, characterNum);
        modal.present();
    }

    chamadaHome() {
    	this.navCtrl.push(TabsPage)
  	} 
}

@Component({
  template: `
<ion-header>
  <ion-toolbar>
    <ion-title>
      {{character.name}}
    </ion-title>
    <ion-buttons start>
      <button ion-button (click)="dismiss()">
        <span ion-text color="primary" showWhen="ios">Cancel</span>
        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>
      </button>
    </ion-buttons>
  </ion-toolbar>
</ion-header>
<ion-content style="width: 100%;">
  <ion-list>
      <ion-item>
          <h3 style="width: 100%; margin: 2% 0 2% 2%; font-size: 1.1em; color: blue; font-weight: bolder">{{character.universid}}</h3>
          <img src="{{character.image}}">
          <ion-item style="width: 100%; margin: 0;">
            <h6 style="font-size: 1.2em; font-weight: bolder; white-space: normal; margin-bottom: 2%;">{{character.valid}}</h6>  
            <h5 style="font-size: 0.9em; text-align: justify; white-space: normal;">{{character.message}}</h5>     
          </ion-item>

          <br/>

          <h3 style="width: 100%; margin: 2% 0 2% 2%; font-size: 1.1em; color: blue; font-weight: bolder">{{character.universidPais}}</h3>
          <img src="{{character.imagePais}}">
          <ion-item style="width: 100%; margin: 0;">
            <h6 style="font-size: 1.2em; font-weight: bolder; white-space: normal; margin-bottom: 2%;">{{character.validPais}}</h6>  
            <h5 style="font-size: 0.9em; text-align: justify; white-space: normal;">{{character.messagePais}}</h5>     
          </ion-item>

          <br/>
         
          <h3 style="width: 100%; margin: 2% 0 2% 2%; font-size: 1.1em; color: blue; font-weight: bolder">{{character.universidPais2}}</h3>
          <img src="{{character.imagePais2}}">
          <ion-item style="width: 100%; margin: 0;">
            <h6 style="font-size: 1.2em; font-weight: bolder; white-space: normal; margin-bottom: 2%;">{{character.validPais2}}</h6>  
            <h5 style="font-size: 0.9em; text-align: justify; white-space: normal;">{{character.messagePais2}}</h5>     
          </ion-item>
            
          <br/>
         
          <h3 style="width: 100%; margin: 2% 0 2% 2%; font-size: 1.1em; color: blue; font-weight: bolder">{{character.universidPais3}}</h3>
          <img src="{{character.imagePais3}}">
          <ion-item style="width: 100%; margin: 0;">
            <h6 style="font-size: 1.2em; font-weight: bolder; white-space: normal; margin-bottom: 2%;">{{character.validPais3}}</h6>  
            <h5 style="font-size: 0.9em; text-align: justify; white-space: normal;">{{character.messagePais3}}</h5>     
          </ion-item>

          <br/>
          <h3 style="width: 100%; margin: 2% 0 2% 2%; font-size: 1.1em; color: blue; font-weight: bolder">{{character.universidPais4}}</h3>
          <img src="{{character.imagePais4}}">
          <ion-item style="width: 100%; margin: 0;">
            <h6 style="font-size: 1.2em; font-weight: bolder; white-space: normal; margin-bottom: 2%;">{{character.validPais4}}</h6>  
            <h5 style="font-size: 0.9em; text-align: justify; white-space: normal;">{{character.messagePais4}}</h5>     
          </ion-item>

          <br/>

          <h3 style="width: 100%; margin: 2% 0 2% 2%; font-size: 1.1em; color: blue; font-weight: bolder">{{character.universidPais5}}</h3>
          <img src="{{character.imagePais5}}">
          <ion-item style="width: 100%; margin: 0;">
            <h6 style="font-size: 1.2em; font-weight: bolder; white-space: normal; margin-bottom: 2%;">{{character.validPais5}}</h6>  
            <h5 style="font-size: 0.9em; text-align: justify; white-space: normal;">{{character.messagePais5}}</h5>     
          </ion-item>

         <br/>
          <h3 style="width: 100%; margin: 2% 0 2% 2%; font-size: 1.1em; color: blue; font-weight: bolder">{{character.universidPais6}}</h3>
          <img src="{{character.imagePais6}}">
          
          <ion-item style="width: 100%; margin: 0;">
            <h6 style="font-size: 1.2em; font-weight: bolder; white-space: normal; margin-bottom: 2%;">{{character.validPais6}}</h6>  
            <h5 style="font-size: 0.9em; text-align: justify; white-space: normal;">{{character.messagePais6}}</h5>     
          </ion-item>
      </ion-item>
  </ion-list>
</ion-content>
`
})
export class ConveniosContentPage {
  character;

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController,
    public alerCtrl: AlertController) {
    var characters = [
      {
        name: 'Bolívia',
        universid: 'Universidad San Francisco Xavier - USFX',
        image: 'assets/img/universidadeUsfx.jpg',
        valid: 'Convênio válido até março de 2019',
        message: 'Fundada em 27 de Março de 1624, seu primeiro reitor foi o Padre Luis de Santillán localizada na cidade de Sucre, a capital constitucional da Bolívia, é a universidade mais antiga do país e uma das mais antigas da América.'
        
      },
      {
        name: 'Chile',
        universid: 'Universidad Mayor',
        image: 'assets/img/universidadeMayor.jpg',
        valid: 'Convênio válido até março de 2019',
        message: 'É uma instituição de ensino superior privada chilena. Fundada em maio de 1988, está sediada em Santiago e possui cerca de 15 mil estudantes'
      },
      {
        name: 'Espanha',
        universid: 'Universidad Pablo Olavide',
        image: 'assets/img/universidadePabloOlavide.jpg',
        valid: 'Convênio válido até outubro de 2019',
        message: 'É uma universidade pública localizada em Sevilla, Espanha. Fundada em 1997, é um dos mais recentes universidades públicas, e tem cerca de mais de 11 000 alunos. Reforça a sua oferta graduação e pós-graduação em áreas como Ciências Jurídicas, Ciências Sociais, Humanas, Biotecnologia, Ciências Ambientais, Ciências do Desporto e Informática.'
      },
      {
        name: 'Estados Unidos',
        universid: 'Universidade Dakota do Norte ',
        image: 'assets/img/universidadeDakotaNorte.jpg',
        valid: 'Convênio válido até abril de 2017',
        message: 'É uma universidade pública localizada em Grand Forks, no estado de Dakota do Norte nos Estados Unidos da América. Ela foi criada em 1883 e é a mais antiga universidade do estado'
      },
      {
        name: 'Itália',
        universid: 'Universidade de Cagliari',
        image: 'assets/img/universidadeCagliari.jpg',
        valid: 'Convênio válido até agosto de 2016',
        message: 'É uma instituição de ensino superior localizada na cidade de Cagliari, na Itália. Foi fundada em 1620 e é organizada em onze Faculdades.',

        namePais: 'Itália',
        universidPais: 'Universidade Degli Studi Del Molise',
        imagePais: 'assets/img/universidadeTeste.jpg',
        validPais: 'Convênio válido até fevereiro de 2019',
        messagePais: 'É uma universidade estadual italiana com sede em Campobasso. Foi fundada com a lei n. 590 de 14 de agosto de 1982 era parte de um plano de quatro anos para o desenvolvimento e criação de novas universidades.'
      },
      {
        name: 'Japão',
        universid: 'Universidade de Toyama',
        image: 'assets/img/universidadeTeste.jpg',
        valid: 'Convênio válido até maio de 2017',
        message: 'A Universidade de Toyama é uma universidade composta por 3 ex-universidades nacionais; A Universidade de Toyama (fundada em 1949), a Universidade Médica e Farmacêutica de Toyama (fundada em 1975) eo Colégio Nacional Takaoka (fundado em 1983) foram integrados em outubro de 2005.'
      },
      {
        name: 'Portugal',
        universid: 'Universidade de Lisboa',
        image: 'assets/img/universidadeTeste.jpg',
        valid: 'Convênio válido até fevereiro de 2019',
        message: 'A Universidade de Lisboa é uma universidade pública portuguesa, com sede na Alameda da Universidade, em Alvalade, Lisboa, detendo vários polos espalhados pela cidade e concelhos limítrofes.',

        namePais: 'Portugal',
        universidPais: 'Universidade do Porto',
        imagePais: 'assets/img/universidadeTeste.jpg',
        validPais: 'Convênio válido até fevereiro de 2021',
        messagePais: 'A Universidade do Porto é uma universidade pública portuguesa.',

        universidPais2: 'Universidade do Algarve',
        imagePais2: 'assets/img/universidadeTeste.jpg',
        validPais2: 'Convênio válido até julho de 2020',
        messagePais2: 'A Universidade do Algarve é uma universidade do estado portuguesa com sede em Faro. É a mais prestigiada instituição de ensino superior do Sul de Portugal.',

        universidPais3: 'Universidade de Trás-os-Montes e Alto Douro',
        imagePais3: 'assets/img/universidadeTeste.jpg',
        validPais3: 'Convênio válido até março de 2021',
        messagePais3: 'A Universidade de Trás-os-Montes e Alto Douro é uma instituição de ensino superior pública, fundada em 1973 como Instituto Politécnico de Vila Real, e que adquiriu em 1986 reconhecimento como Universidade.',

        universidPais4: 'Universidade ITTEC (Errado Nome)',
        imagePais4: 'assets/img/universidadeTeste.jpg',
        validPais4: 'Convênio válido até março de 2019',
        messagePais4: 'É uma instituição de ensino superior privada chilena. ',

        universidPais5: 'Universidade Coimbra',
        imagePais5: 'assets/img/universidadeTeste.jpg',
        validPais5: 'Convênio válido até novembro de 2019',
        messagePais5: 'A Universidade de Coimbra é uma universidade pública localizada na cidade de Coimbra, em Portugal. É uma das universidades ainda em operação mais antigas do mundo, a mais antiga e uma das maiores universidades do país.',

        universidPais6: 'Universidade da Beira Interior',
        imagePais6: 'assets/img/universidadeTeste.jpg',
        validPais6: 'Convênio válido até novembro de 2021',
        messagePais6: 'A Universidade da Beira Interior é uma universidade pública localizada na cidade da Covilhã, em Portugal.'
      }
    ];
    this.character = characters[this.params.get('charNum')];
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }


  convChile() {
    let confirm = this.alerCtrl.create({
        title: 'Universidad Mayor',
        message: 'É uma instituição de ensino superior privada chilena. Fundada em maio de 1988, está sediada em Santiago e possui cerca de 15 mil estudantes',
        subTitle: 'Convênio válido até março de 2019',
        
        buttons: [
        {
            text: 'Ok',
            handler: () => {
                console.log('Fechado com sucesso!');
            }
        }
        ]
    });
    confirm.present()
    }

    convColombia() {
        let confirm = this.alerCtrl.create({
            title: 'Universidade USFX',
            message: 'A Universidade Nacional de Quilmes é uma universidade pública argentina com sede na localidade de Bernal, província de Buenos Aires, partido de Quilmes.',
            subTitle: 'Convênio válido até 2018',
          
            buttons: [
            {
                text: 'Ok',
                handler: () => {
                    console.log('Fechado com sucesso!');
                }
            }
            ]
        });
        confirm.present()
    }

    convEstadosUnidos() {
        let confirm = this.alerCtrl.create({
            title: 'Universidade Dakota do Norte',
            message: 'A Universidade Nacional de Quilmes é uma universidade pública argentina com sede na localidade de Bernal, província de Buenos Aires, partido de Quilmes.',
            subTitle: 'Convênio válido até 2018',
          
            buttons: [
            {
                text: 'Ok',
                handler: () => {
                    console.log('Fechado com sucesso!');
                }
            }
            ]
        });
        confirm.present()
    }

    convEspanha() {
        let confirm = this.alerCtrl.create({
            title: 'Universidade Zaragoza',
            message: 'A Universidade Nacional de Quilmes é uma universidade pública argentina com sede na localidade de Bernal, província de Buenos Aires, partido de Quilmes.',
            subTitle: 'Convênio válido até 2018',
          
            buttons: [
            {
                text: 'Ok',
                handler: () => {
                    console.log('Fechado com sucesso!');
                }
            }
            ]
        });
        confirm.present()
    }

    convItalia() {
        let confirm = this.alerCtrl.create({
            title: 'Universidade UNIMOL',
            message: 'A Universidade Nacional de Quilmes é uma universidade pública argentina com sede na localidade de Bernal, província de Buenos Aires, partido de Quilmes.',
            subTitle: 'Convênio válido até 2018',
          
            buttons: [
            {
                text: 'Ok',
                handler: () => {
                    console.log('Fechado com sucesso!');
                }
            }
            ]
        });
        confirm.present()
    }

    launch(url) {
        this.platform.ready().then(() => {
            open(url, "_blank", "location=no");
        });
    }
}