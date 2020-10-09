import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpResponse
} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {SpinnerService} from "../services/spinner.service";
import {catchError, map} from "rxjs/operators";

@Injectable()
export class SpinnerInterceptor implements HttpInterceptor {

  private handleError(error: Response | any){
    this.spinnerService.hideSpinner();
    return throwError(error);
  }

  constructor(private spinnerService: SpinnerService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.spinnerService.displaySpinner();

    return next.handle(request).pipe(catchError(this.handleError.bind(this))).pipe(
      map((event:HttpEvent<any>)=>{
        if(event instanceof HttpResponse){
          this.spinnerService.hideSpinner();
        }
        return event;
      })
    );
  }
}
