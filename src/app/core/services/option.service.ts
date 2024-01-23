import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Option } from '../models/option';

@Injectable({
  providedIn: 'root'
})
export class OptionService extends BaseService {
  private apiUrl: string = '/api/options'
  isOpen = new Subject<boolean>();
  constructor(protected override readonly http: HttpClient) { super(http) }

  getAll(): Observable<Option[]> {
    return this.Get<Option[]>(this.apiUrl)
  }

  open() {
    this.isOpen.next(true);
  }

  close() {
    this.isOpen.next(false);
  }
}
