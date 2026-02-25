import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <nav class="navbar">
      <a routerLink="" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}">Home</a>
      <a routerLink="about" routerLinkActive="active">About</a>
      <a routerLink="contact" routerLinkActive="active">Contact</a>
    </nav>

    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`
    .navbar {
      background: #111;
      padding: 15px;
      display: flex;
      gap: 20px;
    }

    .navbar a {
      color: white;
      text-decoration: none;
      font-weight: bold;
      cursor: pointer;
    }

    .navbar a:hover {
      color: #00bcd4;
    }

    .active {
      border-bottom: 2px solid #00bcd4;
    }

    .container {
      padding: 30px;
      font-family: Arial, sans-serif;
    }
  `]
})
export class AppComponent {}