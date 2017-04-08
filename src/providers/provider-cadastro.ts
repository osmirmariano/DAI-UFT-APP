import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Credencial } from '../model/credencial';
import firebase from 'firebase';


@Injectable()
export class ProviderCadastro {
  credencial: Credencial;
  public fireAuth: any;
  public perfilUsuario: any;

  constructor(public http: Http) {
    this.fireAuth = firebase.auth();
    this.perfilUsuario = firebase.database().ref('/database')
    console.log('Hello ProviderCadastro Provider');
  }

  registerUser(credencial:Credencial): firebase.Promise<any> {
    return this.fireAuth.createUserWithEmailcreateUserWithEmailAndPassword(credencial.email, credencial.senha)
      .then((newUser) => {
        this.perfilUsuario.child(newUser.uid).set(credencial.email)
    });
  }

  recupearSenha(credencial:Credencial): firebase.Promise<any>{
    return this.fireAuth.sendPasswordResetEmail(credencial.email);
  }

}
