import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProfileSamanthaPage } from '../profile-samantha/profile-samantha';

/**
 * Generated class for the ChatSamanthaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat-samantha',
  templateUrl: 'chat-samantha.html',
})
export class ChatSamanthaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
	
  pushToProfile() {
	this.navCtrl.push(ProfileSamanthaPage);
}

}