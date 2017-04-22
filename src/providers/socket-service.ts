import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import * as io from 'socket.io-client';
import { ChatMensagem } from "../model/chat-mensagem";


@Injectable()
export class SocketService {
  socketObserver: any; 
  socketService: any;
  socket: any;
  user: any;
  data: any = null;
  socketHost: string = 'gs://appdai-beta.appspot.com/';
  
  
  constructor() {
    this.socketService = Observable.create(observer => {
        this.socketObserver = observer;
      });
  }


  initialize(){
    this.socket = io.connect(this.socketHost);
    
    this.socket.on("connect", (msg) => {
      console.log('Conectado');
      this.socketObserver.next({ category: 'connect', message: 'Usuário conectado'});
    });

    this.socket.on("reconnecting", (msg) => {
      console.log('Reconectando');
    });

    this.socket.on("reconnect_error", (msg) => {
      console.log('Erro ao conectar');
    });
    
    this.socket.on("reconnect_failed", (msg) => {
      console.log('Conexão falhou');
    });

     this.socket.on('disconnect', function () {
      console.log('Usuário desconectado');
      // io.emit('user disconnected');
    });

    this.socket.on("message", (msg) => {
      this.socketObserver.next({ category: 'message', message: msg });
    }); //end of socket.on('message')


  }

  sendMessage(message: ChatMensagem) {
    // console.log('in sendMessage and socket is: ', this.socket);
    this.socket.emit('message', message);
    this.socketObserver.next({ category: 'sendMessage', message: message });

  }

}
