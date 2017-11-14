import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';


import { MyApp } from './app.component';
import {LoginPage } from '../pages/login/login';
import {RegisterPage } from '../pages/register/register';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {SidemenuPage} from '../pages/sidemenu/sidemenu';
import {InvitePage} from '../pages/invite/invite';
import {SettingsPage} from '../pages/settings/settings';
import {MessagesPage} from '../pages/messages/messages';
import {ProfilePage} from '../pages/profile/profile';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { Facebook } from '@ionic-native/facebook';
import { AuthProvider } from '../providers/auth/auth';


const firebaseAuth = {
  
 
  }


@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    RegisterPage,
    SidemenuPage,
    InvitePage,
    SettingsPage,
    MessagesPage,
    ProfilePage,
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireAuthModule,

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    RegisterPage,
    SidemenuPage,
    InvitePage,
    SettingsPage,
    MessagesPage,
    ProfilePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Facebook,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider
  ]
})
export class AppModule {}
