import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EnvironmentService } from '../environment.service';

@Injectable()
export class CommonHeadersInterceptorService implements HttpInterceptor {

  constructor(private env: EnvironmentService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url !== `${this.env.getPrivateShowcaseApiConfig().uri}/artists/picture`) {
      const clone = req.clone({
        setHeaders: {
          'Content-Type': 'application/json'
        }
      });
      return next.handle(clone);
    }
    return next.handle(req);
  }
}
