import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

import { IntroAcceptedPage } from '../intro-accepted/intro-accepted';

/**
 * Generated class for the IntroScottPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-intro-scott',
  templateUrl: 'intro-scott.html',
})
export class IntroScottPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IntroScottPage');
  }
	
  pushToIntroAccepted() {
	this.navCtrl.push(IntroAcceptedPage);
}
	
  declineToast() {
  let toast = this.toastCtrl.create({
    message: 'You declined this introduction.',
    duration: 3000,
    position: 'top'
  });

  toast.onDidDismiss(() => {
    console.log('Dismissed toast');
  });

  toast.present();
}

}
