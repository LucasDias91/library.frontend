import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books.component';
import { RouterModule, Routes } from '@angular/router';
import {MatGridListModule} from '@angular/material/grid-list';
import { LayoutModule } from '../../layout/layout.module';
import { BookListComponent } from './book-list/book-list.component';
import { BookSortOptionsComponent } from './book-sort-options/book-sort-options.component';
import { ComponentModule } from '../../component/component.module';
import { BookComponent } from './book-list/book/book.component';
import {MatRadioModule} from '@angular/material/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
const routes: Routes = [
  {
     path: '',
     component: BooksComponent,
  },
]

@NgModule({
  declarations: [
    BooksComponent,
    BookListComponent,
    BookSortOptionsComponent,
    BookComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MatGridListModule,
    LayoutModule,
    ComponentModule,
    MatRadioModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class BooksModule { }
