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
    this.authService.signInWithGoogle();
  }
  logout(){
    this.authService.logout();
  }
  currentUser(){
    this.authService.getCurrentUser();
  }
}

