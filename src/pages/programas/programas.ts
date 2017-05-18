import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-programas',
  templateUrl: 'programas-detalhes.html'
})
export class NavegacaoPage {
    item;
    constructor(
      public navCtrl: NavController, 
      public navParams: NavParams) {
        this.item = navParams.data.item;
      }

    ionViewDidLoad() {
      console.log('ionViewDidLoad NavegacaoPage');
    }
}

@Component({
  template: `
<ion-header>
  <ion-navbar>
    <button ion-button menuToggle>
	      	<ion-icon name="menu"></ion-icon>
	  </button>
    <ion-title>Programas</ion-title>
  </ion-navbar>
</ion-header>
<ion-content floating>
    <br/>
    <button ion-item *ngFor="let item of items" (click)="openNavDetailsPage(item)">
        <img class="imagemNoticia" [src]="item.imageTitulo"/>
        <h6 class="teste">{{item.title}}</h6>
    </button>

    <ion-fab top right edge>
      <button ion-fab color="amarelo" mini><ion-icon name="add"></ion-icon></button>
        <ion-fab-list>
         <button ion-fab (click)="chamadaHome()">
            <ion-icon color="primary" name="md-home"></ion-icon>
          </button>
        </ion-fab-list>
  	</ion-fab>
</ion-content>
`
})


export class ProgramasPage {
  items = [];

  constructor(
    public nav: NavController,
    public navCtrl: NavController) {

      this.items = [
      {
        'title': 'PEC-G',
        imageTitulo: "assets/img/programa2.png",
        'title2': 'Sobre o programa',
        'description': 'O Programa de Estudantes-Convênio de Graduação (PEC-G) oferece oportunidades de formação superior a cidadãos de países em desenvolvimento com os quais o Brasil mantém acordos educacionais e culturais. Desenvolvido pelos ministérios das Relações Exteriores e da Educação, em parceria com universidades públicas - federais e estaduais - e particulares, o PEC-G seleciona estrangeiros, entre 18 e preferencialmente até 23 anos, com ensino médio completo, para realizar estudos de graduação no país. O aluno estrangeiro selecionado cursa gratuitamente a graduação.',
        'descrition2': 'Em contrapartida, deve atender a alguns critérios; entre eles, provar que é capaz de custear suas despesas no Brasil, ter certificado de conclusão do ensino médio ou curso equivalente e proficiência em língua portuguesa.',
        'color': '#0CA9EA'
      },
      {
        'title': 'Indiomas Sem Fronteiras',
        imageTitulo: "assets/img/programa3.png",
        'title2': 'Sobre o programa',
        'description': 'O Programa Idiomas sem Fronteiras (IsF) foi elaborado com o objetivo de proporcionar oportunidades de acesso ao estudo dos idiomas estrangeiros para a comunidade acadêmica como base estruturante do processo de internacionalização das universidades brasileiras. Para atender tal demanda, suas ações incluem a oferta de cursos a distância e cursos presenciais, além da aplicação de testes de proficiência.',
        'descricao2': 'Sobre o programa',
        'color': '#F46529'
      },
      {
        'title': 'Santander Universidades',
        imageTitulo: "assets/img/programa4.png",
        'title2': 'Sobre o programa',
        'description': 'O Santander Universidades destaca-se por suas iniciativas como programas de bolsas, ciência e inovação, empreendedorismo, transferência tecnológica e apoio a projetos universitários. Dessa forma, contribuíndo com a internacionalização da atividade acadêmica e com a transferência de conhecimento do campus para a sociedade.',
        'descricao2': ' O compromisso com a educação superior começa por dedicar uma atenção especial para o público que contribui com o futuro do País. É por isso que o Santander Universidades oferece benefícios para universitários, alunos, professores e funcionários das instituições de ensino superior.',
        'color': '#FFD439'
      },
      {
        'title': 'EBW++',
        imageTitulo: "assets/img/programa5.png",
        'title2': 'Sobre o programa',
        'description': 'O projeto EBW++ faz parte do Programa Erasmus Mundus. O projeto EBW++ é composto por 20 Instituições de Ensino Superior europeias parceiras e brasileiras e 12 instituições associadas.',
        'descricao2': '',
        'color': '#FFD439'
      },
    ]
  }

  openNavDetailsPage(item) {
    this.nav.push(NavegacaoPage, { item: item });
  }

  chamadaHome() {
   	this.navCtrl.push(TabsPage)
  }
}

