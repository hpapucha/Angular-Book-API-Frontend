import { BookService} from '../services/book/book.service';
import { Component, OnInit } from '@angular/core';
declare const M;

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  public books: any [];
  public bookTitle: string;
  public bookDescription: string;

  constructor(private bookService: BookService) { }

  getBooks(): any {
    this.bookService.getBooks().subscribe(response => {
      this.books = response;
    }, err => console.log(err));
  }
  createBook(): any {
    const newBook = {
      title: this.bookTitle,
      description: this.bookDescription
    };
    this.bookService.createBook(newBook).subscribe(response => {
      this.books = [...this.books, response];
    }, err => console.log(err));
    this.getBooks();
  }

  ngOnInit(): void {
    this.getBooks();

    if (!localStorage.getItem('currentUser')) {
      const toastHTML = '<span>You must login to see your books</span>';
      M.toast({html: toastHTML});
    }
  }

}
