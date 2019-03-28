//Generic Interceptor to pass content type and API Key in headers

import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class fwcAPIInterceptor implements HttpInterceptor {
    intercept (req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const authReq = req.clone({
            headers: new HttpHeaders({
                'Content-Type' : 'application/json',
                'x-api-key' : 'E550E995-1D34-4E65-9INT-FA4C15712ADA'
            })
        });
        return next.handle(authReq);
    }
}