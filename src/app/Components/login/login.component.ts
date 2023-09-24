import { Component } from '@angular/core';
import { AuthenticationServiceService } from 'src/app/Services/authentication-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent {
  constructor(private authService: AuthenticationServiceService) {}

  authenticationRequest: { email: string, password: string } = { email: '', password: '' };


  login() {
    const { email, password } = this.authenticationRequest;
  
    if (!email || !password) {
      console.error('Please enter both email and password');
      return;
    }
  
    this.authService.login(email, password).subscribe(
      (response) => {
        if (response && response.access_token) {
          // Assuming your API returns a JWT token on successful login.
          const token = response.access_token;
          // Store the token in local storage or a secure storage method.
          localStorage.setItem('jwtToken', token);
          // Redirect to another page (e.g., petlist) using Angular Router.
          window.location.href='/petlist'
        } else {
          console.error('Invalid API response:', response);
        }
      },
      (error) => {
        console.error('Login failed:', error);
      }
    );
  }
}
