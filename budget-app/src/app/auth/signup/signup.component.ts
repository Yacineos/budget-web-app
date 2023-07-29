import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  email: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}
/*
  signUp() {
    this.authService.signUp(this.email, this.password)
      .then((userCredential) => {
        // Signup successful
        console.log('Signed up user:', userCredential.user);
      })
      .catch((error) => {
        // Handle signup error
        console.error('Signup Error:', error);
      });
  }
*/
}
