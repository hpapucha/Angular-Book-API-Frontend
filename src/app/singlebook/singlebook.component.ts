import { Component, OnInit } from '@angular/core';
import {BookService} from '../services/book/book.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-singlebook',
  templateUrl: './singlebook.component.html',
  styleUrls: ['./singlebook.component.css']
})
export class SinglebookComponent implements OnInit {
  bookId: any;
  singleBook: any;
  authorName: '';

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
    const newAuthor = {name: this.authorName};
    this.bookService.createAuthor(author, newAuthor).subscribe(response => {
      console.log(response);
    });
  }

}
