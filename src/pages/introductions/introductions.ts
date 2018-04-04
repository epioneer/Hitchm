import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IntroEmilyPage } from '../intro-emily/intro-emily';
import { IntroScottPage } from '../intro-scott/intro-scott';
import { ProfileSamanthaPage } from '../profile-samantha/profile-samantha';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the IntroductionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-introductions',
  templateUrl: 'introductions.html',
})
export class IntroductionsPage {
	
  intros: string = "myhitchm";

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }
	
  pushToIntroEmily() {
	this.navCtrl.push(IntroEmilyPage);
}

  pushToIntroScott() {
	this.navCtrl.push(IntroScottPage);
}

  pushToProfile() {
	this.navCtrl.push(ProfileSamanthaPage);
}

  showConfirm() {
    let confirm = this.alertCtrl.create({
      title: 'Delete this introduction?',
      message: 'Are you sure you want to permanently delete this introduction?',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Agree',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }

}