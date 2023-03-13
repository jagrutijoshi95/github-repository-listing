import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from "rxjs/operators";
import { MessageService } from 'primeng/api';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor(private messageService: MessageService) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
     return next.handle(request)
           .pipe(
                 catchError((error: HttpErrorResponse) => {
                    let errorMsg = '';
                    if (error.error instanceof ErrorEvent) {
                       console.log('This is client side error');
                       errorMsg = `Error: ${error.error.message}`;
                    } else {
                       console.log('This is server side error');
                       errorMsg = `${error.status} - ${error.error.message}`;
                       this.messageService.add({severity:'error', summary:errorMsg});
                    }
                    console.log(error);
                    return throwError(errorMsg);
                 })
           )
  }
}
