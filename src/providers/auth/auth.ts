import { Facebook } from '@ionic-native/facebook';
import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import firebase from 'firebase/app';

@Injectable()
export class AuthProvider {
  constructor(
    public afAuth: AngularFireAuth,
    public facebook: Facebook
  ) {}

  getUser(): firebase.User {
    return this.afAuth.auth.currentUser;
  }

  facebookLogin(): Promise<any> {
    return this.facebook
      .login(['email'])
      .then(response => {
        const facebookCredential = firebase.auth.FacebookAuthProvider.credential(
          response.authResponse.accessToken
        );

        this.afAuth.auth
          .signInWithCredential(facebookCredential)
          .then(success => {
            alert('Firebase success: ' + JSON.stringify(success));
          })
          .catch(error => {
            alert('Firebase failure: ' + JSON.stringify(error));
          });
      })
      .catch(error => {
        console.log(error);
      });
  }
}
