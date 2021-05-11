import { Component, OnInit } from '@angular/core';
import {BookService} from '../services/book/book.service';
import {ActivatedRoute} from '@angular/router';
import {HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-singlebook',
  templateUrl: './singlebook.component.html',
  styleUrls: ['./singlebook.component.css']
})
export class SinglebookComponent implements OnInit {
  bookId: any;
  singleBook: any;
  authorName: '';
  authorAge: any;
  authorNationality: any;

  constructor(private route: ActivatedRoute, private bookService: BookService) { }

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
  deleteAuthor(authorId): any {
    this.bookService.deleteAuthor(this.singleBook, authorId).subscribe(response =>{
      console.log(response);
    });
  }
}
