import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController,LoadingController} from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { SidemenuPage} from '../sidemenu/sidemenu';
import { AuthProvider } from './../../providers/auth/auth';
import {RegisterPage} from "../register/register";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
username: string;
password: string;
jwt_seq: number;

  constructor(private readonly navCtrl: NavController,
              private readonly loadingCtrl: LoadingController,
              public authProvider: AuthProvider
              ) {

  }

  signup() {
    this.navCtrl.push(RegisterPage);
  }


  login(value:any) {
    this.username = value.username.trim();
    this.password = value.password;


    let loading = this.loadingCtrl.create({
      spinner: 'bubbles',
      content: 'Logging in ...'
    });

    loading.present();
    setTimeout(() => {
    loading.dismiss();
  }, 2000);

    this.navCtrl.setRoot(SidemenuPage)
  }
  facebookLogin(): void {
    this.authProvider.facebookLogin();
  }

}



// @IonicPage()
// @Component({
//   selector: 'page-login',
//   templateUrl: 'login.html',
// })
// export class LoginPage {
	
//   @ViewChild('username') user;
//   @ViewChild('password') password;

//   constructor(private alertCtrl: AlertController, private fire:AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
//   }

//   ionViewDidLoad() {
//     console.log('ionViewDidLoad LoginPage');
//   }

//   alert(message: string) {
//   	this.alertCtrl.create({
//   		title: 'Info',
//   		subTitle: message,
//   		buttons: ['OK']
//   	}).present();
//   }
//   signInUser() {
//   	//this.fire.auth.sendPasswordResetEmail()
//   	this.fire.auth.signInWithEmailAndPassword(this.user.value,this.password.value).then( data => {
//   		console.log('got some data',this.fire.auth.currentUser);
//   		this.alert('Success! Youre logged in');
//   		this.navCtrl.setRoot(SidemenuPage);
//   		// user is logged in
//   	})
//   	.catch( error => {
//   		console.log('got an error',error);
//   		this.alert(error.message
//   		);

//   	})
//   	console.log('Would sign in with', this.user.value,this.password.value);
//   }

// }
