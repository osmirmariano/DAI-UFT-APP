import { Component } from '@angular/core';
import { LoadingController, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { EmailValidator } from '../../validators/email';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { LoginPage } from '../login/login';
import { ProviderCadastro } from '../../providers/provider-cadastro';

@Component({
  selector: 'page-cadastrar',
  templateUrl: 'cadastrar.html'
})
export class CadastrarPage {
  public formulario;
  loading: any;
  perfis: FirebaseListObservable<any>;

  constructor(
    public nav: NavController, 
    public providerCadastro: ProviderCadastro,
    public formBuilder: FormBuilder, 
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController, 
    fire: AngularFire) {
      this.formulario = formBuilder.group({
        nome: ['', Validators.compose([Validators.maxLength(30), Validators.required])],
	      email: ['', Validators.compose([Validators.required, EmailValidator.isValid])],
	      password: ['', Validators.compose([Validators.minLength(6), Validators.required])]
	    })

      this.perfis = fire.database.list('/perfil');
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastrarPage');
  }

}
