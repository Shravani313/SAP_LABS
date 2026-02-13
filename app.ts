import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  // Page control
  currentPage: string = 'register';

  // Registration data
  name = '';
  email = '';
  password = '';

  // Login data
  loginEmail = '';
  loginPassword = '';

  register() {
    localStorage.setItem('email', this.email);
    localStorage.setItem('password', this.password);
    alert("Registration Successful ✅");
    this.currentPage = 'login';
  }

  login() {
    const savedEmail = localStorage.getItem('email');
    const savedPassword = localStorage.getItem('password');

    if (this.loginEmail === savedEmail && this.loginPassword === savedPassword) {
      alert("Login Successful ✅");
      this.currentPage = 'dashboard';
    } else {
      alert("Invalid Credentials ❌");
    }
  }

  logout() {
    this.currentPage = 'login';
  }
}
