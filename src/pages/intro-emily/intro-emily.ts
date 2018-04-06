import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the IntroEmilyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-intro-emily',
  templateUrl: 'intro-emily.html',
})
export class IntroEmilyPage {
	
	public myMessage: string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IntroEmilyPage');
  }	
	
  acceptedMessage() {
		this.myMessage = "accepted";
	}

  declineMessage() {
		this.myMessage = "declined";
	}

  changeMessage() {
		this.myMessage = "";
	}

}
