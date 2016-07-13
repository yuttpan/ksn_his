import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ContactPage} from '../contact/contact';

/*
  Generated class for the AboutPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/about/about.html',
})
export class AboutPage {

  constructor(private nav: NavController) {
     this.nav = nav;

  }
  goToContact() {
 this.nav.push(ContactPage);
 }

}
