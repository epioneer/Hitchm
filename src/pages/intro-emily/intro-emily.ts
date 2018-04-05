import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IntroEmilyPage');
  }
	
  acceptedToast() {
  let toast = this.toastCtrl.create({
    message: "You accepted. We'll notify you when Emily's friend accepts, too.",
    duration: 5000,
    position: 'top',
    cssClass: "toast-congrats"
  });

  toast.onDidDismiss(() => {
    console.log('Dismissed toast');
  });

  toast.present();
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
