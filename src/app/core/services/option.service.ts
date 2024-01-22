import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Option } from '../models/option';

@Injectable({
  providedIn: 'root'
})
export class OptionService  extends BaseService {
  private apiUrl: string = '/api/options'
  constructor(protected override readonly http: HttpClient) { super(http) }

  public getAll(): Observable<Option[]>{
    return this.Get<Option[]>(this.apiUrl)
   }
}
