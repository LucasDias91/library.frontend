import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(protected readonly http: HttpClient) { }

  protected  GetAll<T>(url: string){
    return this.http.get<T[]>(url)
    .pipe(map((data: T[])=> data))     
  }

  protected  Get<T>(url: string){
    return this.http.get<T>(url)
    .pipe(map((data: T)=> data))     
  }

  protected Post<T>(url: string, data: object){
    return this.http.post<T>(url, data)
    .pipe(map((data: T)=> data))     
  }
}
