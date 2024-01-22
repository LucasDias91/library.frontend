import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Page } from '../models/page';

@Injectable({
  providedIn: 'root'
})
export class PageService extends BaseService {
  private apiUrl: string = '/api/pages'
  constructor(protected override readonly http: HttpClient) { super(http) }

  public getAll(): Observable<Page[]>{
    return this.GetAll(this.apiUrl)
   }
}
