import { Routes } from '@angular/router';
import { BookComponent } from './components/book/book.component';

export const routes: Routes = [
  { path: 'books',       component: BookComponent },
  { path: 'books/new',   component: BookComponent },
  { path: 'books/:id',   component: BookComponent }];
