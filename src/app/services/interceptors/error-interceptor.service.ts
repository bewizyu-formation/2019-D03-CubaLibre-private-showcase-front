import { Injectable } from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((errorResponse: HttpErrorResponse) => {
        if (errorResponse.status === 404) {
          console.log(errorResponse.message);
        } else if (errorResponse.status === 403) {
          console.log(errorResponse.message);
        } else if (errorResponse.status === 400) {
          console.log(errorResponse.error.message)
        }

        return throwError(errorResponse);
      }));
  }
}

