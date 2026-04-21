import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { BookCreation, BookList } from '../models/book.model';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private http = inject(HttpClient);
  private baseUrl = `http://localhost:5000/api/books`;

  getAll(): Observable<BookList[]> {
    return this.http.get<BookList[]>(`${this.baseUrl}`);
  }

  getById(id: number): Observable<BookList> {
    return this.http.get<BookList>(`${this.baseUrl}/${id}`);
  }

  create(book: BookCreation): Observable<BookCreation> {
    return this.http.post<BookCreation>(this.baseUrl, book);
  }
}
