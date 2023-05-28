import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  username: string = '';
  password: string = '';
  isInvalidUsername: boolean = false;
  isInvalidPassword: boolean = false;

  constructor(private router: Router) { }

  
  onLogin(event: Event) {
    event.preventDefault(); // Prevent the default form submission behavior
    if (this.username === 'correo@uem.es' && this.password === 'password') {
      console.log('Login successful');
      this.isInvalidUsername = false;
      this.isInvalidPassword = false;
      this.router.navigate(['/perfil']); 
    } else {

      console.log('Invalid credentials');
      this.isInvalidUsername = true;
      this.isInvalidPassword = true;
    }
  }

  onUsernameChange() {
    this.isInvalidUsername = false; // Reset the validation status when the username changes
  }

  onPasswordChange() {
    this.isInvalidPassword = false; // Reset the validation status when the password changes
  }
}
