import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DaiPage } from '../dai/dai';
import { IsfPage } from '../isf/isf';
import { ChatPage } from '../chat/chat';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

	daiRoot: any = DaiPage;
	isfRoot: any = IsfPage;
	chatRoot: any = ChatPage;
	
	constructor(public navCtrl: NavController) { }
}