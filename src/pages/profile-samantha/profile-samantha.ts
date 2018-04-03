import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ChatSamanthaPage } from '../chat-samantha/chat-samantha';

/**
 * Generated class for the ProfileSamanthaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile-samantha',
  templateUrl: 'profile-samantha.html',
})
export class ProfileSamanthaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfileSamanthaPage');
  }
	
  pushToChat() {
	this.navCtrl.push(ChatSamanthaPage);
}

}
