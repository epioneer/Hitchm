import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
})
export class AddPage {
	
  items;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
	  
  this.initializeItems();
  }

	
  initializeItems() {
    this.items = [
    {fullName: 'Frank Allens', fbAvatar: '../assets/imgs/buzz.jpg'},
    {fullName: 'Beth Hart', fbAvatar: '../assets/imgs/frozen.jpg'},
    {fullName: 'Jessica Jones', fbAvatar: '../assets/imgs/jessie.png'},
    {fullName: 'Tom Martin', fbAvatar: '../assets/imgs/potato.png'},
    {fullName: 'Emily Nash', fbAvatar: '../assets/imgs/barbie.png'},
    {fullName: 'Scott Smith', fbAvatar: '../assets/imgs/stich.jpg'},
    {fullName: 'Bill Stein', fbAvatar: '../assets/imgs/woody.jpg'},
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPage');
  }
	
getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.fullName.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}
