import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Sort } from '../models/sort';
import { GetBooks, GetOptions, GetPages } from './mock/data';

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const { url, method, body } = request;
        return handleRoute();
        function handleRoute() {
            switch (true) {
                case url.endsWith('/books') && method === 'GET':
                    return ok(GetBooks());
                case url.endsWith('/pages') && method === 'GET':
                    return ok(GetPages());
                case url.endsWith('/options') && method === 'GET':
                    return ok(GetOptions());
                 case url.endsWith('/sort') && method === 'POST':
                     return sortBooks(body);
                default:
                    return next.handle(request);
            }    
        }

        function ok(body?: any) {
            return of(new HttpResponse({ status: 200, body }))
                .pipe(delay(500)); 
        }

        function sortBooks(sort: Sort){
            return ok(sort.books(GetBooks()));
        }
    }
}

export const fakeBackendProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: FakeBackendInterceptor,
    multi: true
};

