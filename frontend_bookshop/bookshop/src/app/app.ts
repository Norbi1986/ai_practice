import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <nav>
      <a routerLink="/books">📚 Book Shop</a>
      <a routerLink="/books/new">➕ Add Book</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styles: [`
    nav {
      background: #2c3e50;
      padding: 1rem 2rem;
    }
    nav a {
      color: white;
      text-decoration: none;
      margin-right: 1.5rem;
      font-weight: bold;
    }
    nav a:hover { color: #1abc9c; }
  `]
})
export class AppComponent {}
