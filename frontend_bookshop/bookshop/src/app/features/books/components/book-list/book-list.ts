import { Component, inject, OnInit, signal, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { BookService } from '../../services/book.service';
import { BookList } from '../../models/book.model';

@Component({
  selector: 'app-book',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './book-list.html',
  styleUrl: './book-list.scss',
})
export class BookListComponent implements OnInit {
  private readonly bookService = inject(BookService);
  private readonly router = inject(Router);
  private readonly cdr = inject(ChangeDetectorRef);

  errors: any = {};
  submitting = false;
  allBooks: BookList[] = [];

  ngOnInit(): void {
    this.loadAllBooks();
  }

  loadAllBooks(): void {
    this.bookService.getAll().subscribe({
      next: (books) => {
        console.log('Books received:', books);
        this.allBooks = [...books]; // Create new array reference
        this.cdr.detectChanges(); // Manually trigger change detection
      },
      error: (err) => {
        this.submitting = false;

        // Marshmallow validation errors
        if (err.error?.errors) {
          this.errors = err.error.errors;
        } else {
          this.errors = { general: ['Failed to load books'] };
        }
      }
    });
  }
}
