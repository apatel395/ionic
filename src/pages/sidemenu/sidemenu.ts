import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { MessagesPage } from '../messages/messages';
import { SettingsPage } from '../settings/settings';
import { InvitePage } from '../invite/invite';

import { Nav } from 'ionic-angular';


@Component({
  
  templateUrl: 'sidemenu.html'
})
export class SidemenuPage {
@ViewChild(Nav) nav: Nav;

  private rootPage;
  activePage: any;

  pages: Array<{title: string, component: any}>;
 

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.rootPage = InvitePage;
    this.pages = [
      { title: 'Invite Page', component: InvitePage },
      { title: 'Profile Page', component: ProfilePage },
      { title: 'Settings Page', component: SettingsPage },
      { title: 'Messages Page', component: MessagesPage }
    ];

    this.activePage = this.pages[0];
   

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SidemenuPage');
  }

  openPage(p) {
  this.nav.setRoot(p.component);
  this.activePage = p;
    
  }
  checkActive(page){
    return page == this.activePage;
  }

}
