import { Component, OnInit } from '@angular/core';
import {BookService} from '../services/book/book.service';
import {ActivatedRoute} from '@angular/router';
import {HttpHeaders} from '@angular/common/http';
import {BookComponent} from '../book/book.component';
import { Router} from '@angular/router';

@Component({
  selector: 'app-singlebook',
  templateUrl: './singlebook.component.html',
  styleUrls: ['./singlebook.component.css']
})
export class SinglebookComponent implements OnInit {
  bookId: any;
  title: any;
  description: any;
  singleBook: any;
  authorName: '';
  authorAge: any;
  authorNationality: any;

  constructor(private route: ActivatedRoute, private bookService: BookService, private router: Router ) { }
  refreshPage(): void {
    this.router.navigate(['/book']);
  }
  ngOnInit(): void {
    this.route.paramMap
      .subscribe( params => {
        this.bookId = params.get('id');
        this.bookService.getSingleBook(this.bookId).subscribe(response => {
          this.singleBook = response;
          console.log(this.singleBook);
        });
      });
  }
  createAuthor(author): any {
    console.log('component: ', author, this.authorName);
    const newAuthor = {name: this.authorName, age: this.authorAge, nationality: this.authorNationality};
    this.bookService.createAuthor(author, newAuthor).subscribe(response => {
      console.log(response);
    });
    this.ngOnInit();
  }
  deleteBook(): any {
    this.bookService.deleteBook(this.bookId).subscribe(response => {
      console.log(response);
    });
    this.refreshPage();
  }
  deleteAuthor(authorId): any {
    this.bookService.deleteAuthor(this.singleBook, authorId).subscribe(response =>{
      console.log(response);
    });
    this.ngOnInit();
  }
  updateSingleBook(bookId): any {
    const updatedBook = {title: this.title, description: this.description};
    this.bookService.updateSingleBook(bookId, updatedBook).subscribe(response =>{
      console.log(response);
    });
    this.ngOnInit();
  }
  updateAuthor(bookId, authorId): any {
    const updatedAuthor = {name: this.authorName, age: this.authorAge, nationality: this.authorNationality};
    this.bookService.updateAuthor(this.bookId, authorId, updatedAuthor ).subscribe(response =>{
      console.log(response);
    });
    this.ngOnInit();
  }
  // This is if we want to have a button to go to "Add author in a child page"
  //
  // createAuthor(): any {
  //   const newAuthor = {name: this.authorName,
  //     age: this.authorAge,
  //     nationality: this.authorNationality
  //   };
  //   this.bookService.createAuthor(this.singlebook, newAuthor).subscribe(response => {
  //     console.log(response);
  //   });
  // }
  // ngOnInit(): void {
  //   this.route.parent.paramMap
  //     .subscribe( params => {
  //       this.bookId = params.get('id');
  //       this.bookService.getBook(this.bookId).subscribe(response => {
  //         this.singlebook = response;
  //       });
  //     });
  // }
}
