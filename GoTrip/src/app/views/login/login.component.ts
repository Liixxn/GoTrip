import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  username: string = '';
  password: string = '';

  constructor() { }


  onLogin() {
    if (this.username === 'correo@uem.es' && this.password === 'password') {

      console.log('Login successful');
    } else {

      console.log('Invalid credentials');
    }
  }
}
