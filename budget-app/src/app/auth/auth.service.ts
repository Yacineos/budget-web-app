import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { GoogleAuthProvider } from "firebase/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth , private router:Router) { }
  
   signInWithGoogle() {
    return this.afAuth.signInWithPopup(new GoogleAuthProvider()).then((result) => {
      this.router.navigate(['/add']);
      localStorage.setItem('user',JSON.stringify(result.user?.uid));
      console.log(result);
    }
    ).catch((error) => {
      alert(error.message);
    } 
    );
  }


}
