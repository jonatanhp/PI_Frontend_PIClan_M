import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from "../../environments/environment";
import {catchError, retry} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  endPoint = 'register';
  
  constructor(private httpClient: HttpClient) {
  }

  httpHeaders = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': 'http://localhost:8000/api/register',
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      //'Access-Control-Allow-Origin': 'http://localhost:8000/'
    })
  };

  public Register(params): Observable<any> {
    return this.httpClient.post<any>(`${environment.url}${this.endPoint}`, params, this.httpHeaders)
      .pipe(retry(1),
        catchError(this.httpError));
  }

  httpError(error) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      msg = error.error.message;
    } else {
      msg = `Error Code: ${error.status}`;
    }
    return throwError(msg);
  }
}
