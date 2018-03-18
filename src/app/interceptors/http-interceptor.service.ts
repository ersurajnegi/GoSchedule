import { Injectable } from "@angular/core";
import { tap } from "rxjs/operators";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
  constructor() {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const updatedRequest = request.clone({
      headers: request.headers.set("Authorization", "1234-45667-")
    });
    console.log("Before making api call : ", updatedRequest);
    return next.handle(request).pipe(
      tap(
        event => {
          if (event instanceof HttpResponse) {
            console.log("api call success :", event);
          }
        },
        error => {
          if (event instanceof HttpResponse) {
            console.log("api call error :", event);
          }
        }
      )
    );
  }
}
