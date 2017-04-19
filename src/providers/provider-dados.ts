import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { ProviderLogin } from '../providers/provider-login';

@Injectable()
export class ProviderDados {

  reference;

 
  constructor(public http: Http,
    public providerLogin: ProviderLogin) {
    this.initialize();
    
  }
   private initialize(){
    this.reference = firebase.database().ref(this.providerLogin.currentUser.uid+'/noticias/');
  }
}
