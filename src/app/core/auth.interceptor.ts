import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Exclude the login request from adding the token
    if (req.url.includes('/api/login')) {
      return next.handle(req);
    }

    // Get the token from localStorage or a service
    const authToken = localStorage.getItem('authToken');

    // Clone the request and add the Authorization header if the token exists
    let authReq = req;
    if (authToken) {
      authReq = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${authToken}`)
      });
    }

    // Pass the cloned request to the next handler
    return next.handle(authReq);
  }
}
