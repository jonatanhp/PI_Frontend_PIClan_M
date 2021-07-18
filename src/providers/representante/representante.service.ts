import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {environment} from '../../environments/environment';
import {catchError, retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RepresentanteService {
  httpHeaders = {
    headers: new HttpHeaders({
      //'Access-Control-Allow-Origin': 'http://localhost:8000/niveles',
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
    })
  };
  endPoint = 'representantes/';

  constructor(private httpClient: HttpClient) {

    
  }

  public getRepresentante(): Observable<any> {
    return this.httpClient.get<any>(`${environment.url}${this.endPoint}`, this.httpHeaders)
      .pipe(retry(1),
        catchError(this.httpError));
  }

  public getRepresentanteById(id: number): Observable<any> {
    return this.httpClient.get<any>(`${environment.url}${this.endPoint}${id}`, this.httpHeaders)
      .pipe(retry(1),
        catchError(this.httpError));
  }

  public postRepresentante(params): Observable<any> {

    return this.httpClient.post(`${environment.url}${this.endPoint}`, params, this.httpHeaders)
      .pipe(retry(1),
        catchError(this.httpError));
  }

  public updateRepresentante(id: number, params): Observable<any> {
    return this.httpClient.put(`${environment.url}${this.endPoint}${id}`, params, this.httpHeaders)
      .pipe(retry(1),
        catchError(this.httpError));
  }

  public deleteRepresentante(id: number): Observable<any> {

    return this.httpClient.delete(`${environment.url}${this.endPoint}${id}`, this.httpHeaders)
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
