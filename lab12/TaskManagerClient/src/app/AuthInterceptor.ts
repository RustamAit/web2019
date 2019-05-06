import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const reqWithHeaders = req.clone({headers: req.headers.set('Content-Type', 'application/json')});
    const token = localStorage.getItem('token');
    if (token) {
      const authReq = reqWithHeaders.clone({headers: req.headers.set('Authorization', ` Token ${token}`)});
      return next.handle(authReq);
    }
    return next.handle(reqWithHeaders);
  }

}
