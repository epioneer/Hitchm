import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IntroEmilyPage }from '../intro-emily/intro-emily';
import { SettingsPage }from '../settings/settings';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
	
  pushToIntroEmily() {
	this.navCtrl.push(IntroEmilyPage);
}
	
  pushToSettings() {
	this.navCtrl.push(SettingsPage);
}

}

