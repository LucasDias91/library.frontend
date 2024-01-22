import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Sort } from 'src/app/core/models/sort';
import { BookListComponent } from './book-list/book-list.component';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit, OnDestroy {
  @ViewChild('books') bookListComponent!: BookListComponent;
  constructor(){
  }

  ngOnInit(){

  }

  ngOnDestroy(){
    
  }

  sort(sorts: Sort){
    console.log(sorts)
   this.bookListComponent.sortBooks(sorts);
  }


}
