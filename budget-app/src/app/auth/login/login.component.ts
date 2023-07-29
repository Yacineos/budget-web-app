import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

 signInWithGoogle() {
    this.authService.signInWithGoogle()
      .then(() => {
        // Optional: Perform actions after successful Google sign-in, such as redirecting.
        console.log('Successfully signed in with Google!');
      })
      .catch((error) => {
        // Handle any errors that occur during Google sign-in.
        console.error('Google sign-in error:', error);
      });
  }
}

