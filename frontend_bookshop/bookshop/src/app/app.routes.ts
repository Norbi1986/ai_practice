import { Routes } from '@angular/router';
import { BookCreationComponent } from './features/books/components/book-creation/book-creation';
import { BookListComponent } from './features/books/components/book-list/book-list';

export const routes: Routes = [
  { path: '',           redirectTo: '/books', pathMatch: 'full' },
  { path: 'books',       component: BookListComponent },
  { path: 'books/new',   component: BookCreationComponent },
  { path: 'books/:id',   component: BookCreationComponent }];
