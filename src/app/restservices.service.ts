import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = 'http://www.khonis.co.za/';


@Injectable({
  providedIn: 'root'
})
export class RestservicesService {

  constructor(private http: HttpClient) { }

  login(logins): Observable<any> {
    const url = apiUrl + 'rest-auth/login/';
    return this.http.post(url, logins, httpOptions).pipe(
      tap(_ => console.log(`login success`)),
    );
  }

  register(accountInfo): Observable<any> {
    const url = apiUrl + 'rest-auth/login/';
    return this.http.post(url, accountInfo, httpOptions).pipe(
      tap(_ => console.log(`login success`)),
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  private log(message: string) {
    console.log(message);
  }
}
