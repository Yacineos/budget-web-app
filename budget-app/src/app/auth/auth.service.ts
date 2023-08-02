import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { GoogleAuthProvider , getAuth, onAuthStateChanged} from "firebase/auth";

@Injectable({
  providedIn: 'root'
})


export class AuthService {

   

  constructor(private afAuth: AngularFireAuth , private router:Router) { 
    
  }
  
   signInWithGoogle() {
    return this.afAuth.signInWithPopup(new GoogleAuthProvider()).then((result) => {
      this.router.navigate(['/add']);
      localStorage.setItem('user',JSON.stringify(result.user));
      console.log(result);
      console.log(this.getCurrentUser());
    }
    ).catch((error) => {
      alert(error.message);
    } 
    );
  }

  logout(){
    this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['/login']);
  });
  }

  async getCurrentUser(): Promise<string | null> {
    return new Promise((resolve, reject) => {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          console.log('User is signed in, UID:', user.uid);
          resolve(user.uid);
        } else {
          console.log("user is signed out");
          resolve(null);
        }
      });
    });
  }
  
}
