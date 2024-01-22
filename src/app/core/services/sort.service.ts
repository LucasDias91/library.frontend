import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../models/book';
import { Sort } from '../models/sort';
@Injectable({
  providedIn: 'root'
})
export class SortService extends BaseService {
  private apiUrl: string = '/api/sort'
  constructor(protected override readonly http: HttpClient) { super(http) }

  public sort(sort: Sort): Observable<Book[]>{
    return this.Post<Book[]>(this.apiUrl, sort)
   }
}
