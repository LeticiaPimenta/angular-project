import { HttpInterceptorFn } from '@angular/common/http';
import { HttpRequest, HttpHandlerFn, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req: HttpRequest<any>, next: HttpHandlerFn): Observable<HttpEvent<any>> => {
  // Get the token from localStorage or another storage
  const authToken = localStorage.getItem('authToken');

  // Clone the request and add the Authorization header if the token exists
  if (authToken) {
    const authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${authToken}`
      }
    });

    // Call the next handler with the cloned request
    return next(authReq);
  }

  // If no token, just pass the request as is
  return next(req);
};
