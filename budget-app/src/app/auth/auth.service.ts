import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider } from "firebase/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) { }
  
  async signInWithGoogle() {
    try {
      const provider = new GoogleAuthProvider();
      await this.afAuth.signInWithPopup(provider);
      // Successful login, you can redirect or perform other actions here.
    } catch (error) {
      // Handle errors here.
    }
  }

  async signOut() {
    try {
      await this.afAuth.signOut();
      // Successful sign-out, you can redirect or perform other actions here.
    } catch (error) {
      // Handle errors here.
    }
  }


}
