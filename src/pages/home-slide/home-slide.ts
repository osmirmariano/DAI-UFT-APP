import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Nav, Slides } from 'ionic-angular';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-slide-home',
  templateUrl: 'home-slide.html'
})
export class HomeSlidePage {
	@ViewChild(Nav) nav: Nav;
	@ViewChild('mySlides') slides: Slides;

	constructor(
      public navCtrl: NavController, 
      public navParams: NavParams
    ) {}

	/*MÉTODOS PARA IR A PÁGINA LOGIN*/
	iniciarPagina() {
		this.navCtrl.setRoot(LoginPage)
  	}

	/*MÉTODOS PARA PASSAR PARA OS PRÓXIMOS SLIDES*/
	proxSlide1(){
		this.slides.slideTo(1, 500);
	}
	
	proxSlide2(){
		this.slides.slideTo(2, 500);
	}

	proxSlide3(){
		this.slides.slideTo(3, 500);
	}

	proxSlide4(){
		this.slides.slideTo(4, 500);
	}
}
