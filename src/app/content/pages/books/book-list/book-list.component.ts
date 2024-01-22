import { Component, OnDestroy, OnInit } from '@angular/core';
import { Book } from 'src/app/core/models/book';
import { BookService } from 'src/app/core/services/book.service';
import { PageBase } from '../../page.base';
import { Sort } from 'src/app/core/models/sort';
import { SortService } from 'src/app/core/services/sort.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent extends PageBase implements OnInit, OnDestroy{
  books: Book[] = [];

  constructor(private bookService: BookService,
              private sortService: SortService){
    super()
  }

  ngOnInit(): void {
    this.getBooks();
  }

  ngOnDestroy(): void {
    this.unSubscribe();
  }

  getBooks(){
    this.subscribe(
      this.bookService.getAll()
      .subscribe({  
        next: books => this.books = books
      })
    )
  }
  
  sortBooks(sort: Sort){
    this.subscribe(
      this.sortService.sort(sort)
                      .subscribe({
                       next:(books)=> this.books = books
                     })
    )
  }
}
