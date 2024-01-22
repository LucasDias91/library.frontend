import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../models/book';
import { HttpClient } from '@angular/common/http';
import { SortService } from './sort.service';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class BookService extends BaseService {
  private apiUrl: string = '/api/books'
  constructor(protected override readonly http: HttpClient) { super(http) }

  public getAll(): Observable<Book[]>{
   return this.GetAll(this.apiUrl)
  }
}
