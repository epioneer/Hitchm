import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import { ChatSamanthaPage } from '../chat-samantha/chat-samantha';

/**
 * Generated class for the IntroAcceptedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-intro-accepted',
  templateUrl: 'intro-accepted.html',
})
export class IntroAcceptedPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController) {
  }


  ionViewDidLoad() {
	  
    console.log('ionViewDidLoad IntroAcceptedPage');
    let toast = this.toastCtrl.create({
    message: 'John, meet Samantha.',
    position: 'top',
    showCloseButton: true,
    closeButtonText: 'close',
    cssClass: "toast-congrats",
    duration: 5000
  });

  toast.onDidDismiss(() => {
    console.log('Dismissed toast');
  });

  toast.present();
  }
	
  pushToChat() {
	this.navCtrl.push(ChatSamanthaPage);
}

}
