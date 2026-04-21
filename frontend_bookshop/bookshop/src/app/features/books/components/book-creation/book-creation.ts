import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { BookService } from '../../services/book.service';
import { BookCreation } from '../../models/book.model';

@Component({
  selector: 'app-book',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './book-creation.html',
  styleUrl: './book-creation.scss',
})
export class BookCreationComponent {
  private bookService = inject(BookService);
  private router = inject(Router);

  ngOnInit() {
	}

  errors: any = {};
  submitting = false;
  book: BookCreation = {
    id: -1,
    title: '',
    author: '',
    category: '',
    price: 0.0,
  };

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
