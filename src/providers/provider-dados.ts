import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { ProviderLogin } from '../providers/provider-login';
import firebase from 'firebase'

@Injectable()
export class ProviderDados {

  constructor(public http: Http,
    public loginProvider: ProviderLogin) {
    this.initialize();
  }

  private initialize(){
    // this.reference = firebase.database().ref(this.loginProvider.currentUser.uid+'/noticias/');
  }
}
