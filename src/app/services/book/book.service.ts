import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

const appUrl = 'http://localhost:9090';


@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) {
  }

  getBooks(): any {
    const token = localStorage.getItem('token');
    const requestOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      }),
    };
    return this.http
      .get(`${appUrl}/api/books`, requestOptions);
  }

  createBook(newBook): any {
    console.log(newBook);
    const token = localStorage.getItem('token');
    const requestOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      }),
    };
    return this.http
      .post(`${appUrl}/api/books/`, newBook, requestOptions);
  }

  createAuthor(book, newAuthor): any {
    console.log('service: ', book, newAuthor);
    const token = localStorage.getItem('token');
    const requestOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      }),
    };
    return this.http.post(`${appUrl}/api/books/${book.id}/authors`, newAuthor, requestOptions);
  }

  getSingleBook(bookId): any {
    const token = localStorage.getItem('token');
    const requestOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      }),
    };
    return this.http.get(`${appUrl}/api/books/${bookId}`, requestOptions);
  }

  deleteBook(bookId): any {
    const token = localStorage.getItem('token');
    const requestOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      }),
    };
    return this.http.delete(`${appUrl}/api/books/${bookId}`, requestOptions);
  }

  deleteAuthor(book, authorId): any {
    const token = localStorage.getItem('token');
    const requestOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      }),
    };
    return this.http.delete(`${appUrl}/api/books/${book.id}/authors/${authorId}`, requestOptions);
  }

  updateSingleBook(bookId, updatedBook): any {
    const token = localStorage.getItem('token');
    const requestOptions = {
      headers: new HttpHeaders({Authorization: `Bearer ${token}`}),
    };
    return this.http.put(`${appUrl}/api/books/${bookId}`, updatedBook, requestOptions);
  }
  updateAuthor(bookId, authorId, updatedAuthor): any {
    const token = localStorage.getItem('token');
    const requestOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      }),
    };
    return this.http.put(`${appUrl}/api/books/${bookId}/authors/${authorId}`, updatedAuthor, requestOptions);
  }
}
