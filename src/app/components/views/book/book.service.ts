import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Book } from './book.model';

@Injectable({
  providedIn: 'root'
})

export class BookService {
  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient, private _snack: MatSnackBar) { }

  //All books, not used yed
  findAll(): Observable<Book[]> {
    const url = `${this.baseUrl}/books`
    return this.http.get<Book[]>(url)
  }

  findAllByCategory(id_cat: String): Observable<Book[]> {
    const url = `${this.baseUrl}books/category/${id_cat}`
    return this.http.get<Book[]>(url)
  }

  findById(id: String): Observable<Book> {
    const url = `${this.baseUrl}/books/${id}`
    return this.http.get<Book>(url)
  }

  create(book: Book, id_cat: String): Observable<Book> {
    const url = `${this.baseUrl}books?category=${id_cat}`
    return this.http.post<Book>(url, book);
  }

  update(book: Book): Observable<Book> {
    const url = `${this.baseUrl}/books/${book.id}`
    return this.http.put<Book>(url, book)
  }

  delete(id: String): Observable<void> {
    const url = `${this.baseUrl}/books/${id}`;
    return this.http.delete<void>(url)
  }

  message(str: String): void {
    this._snack.open(`${str}`, `Ok`, {
      horizontalPosition: `end`,
      verticalPosition: `top`,
      duration: 3000
    })
  }

}
