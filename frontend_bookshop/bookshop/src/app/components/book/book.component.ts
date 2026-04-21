import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-book',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss',
})
export class BookComponent {
  private bookService = inject(BookService);
  private router = inject(Router);

  ngOnInit() {
    this.loadAllBooks();
	}

  errors: any = {};
  submitting = false;
  allBooks: Book[] = [];
  book: Book = {
    id: -1,
    title: '',
    author: '',
    category: '',
    price: 0.0,
  };

  loadAllBooks() {
    this.bookService.getAll().subscribe({
      next: (books) => {
        console.log(books);
        this.allBooks = books;
        this.router.navigate(['/books']);
      },
      error: (err) => {
        this.submitting = false;

        // Marshmallow validation errors
        if (err.error?.errors) {
          this.errors = err.error.errors;
        } else {
          this.errors = { general: ['Failed to create book'] };
        }
      }
      });
  }

  onSubmit(): void {
    this.submitting = true;
    this.errors = {};

    this.bookService.create(this.book).subscribe({
      next: () => {
        this.router.navigate(['/books']);
      },
      error: (err) => {
        this.submitting = false;

        // Marshmallow validation errors
        if (err.error?.errors) {
          this.errors = err.error.errors;
        } else {
          this.errors = { general: ['Failed to create book'] };
        }
      }
    });
  }
}
