import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = 'http://localhost:8000/';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(
    private http: HttpClient,
  ) { }

  products(): Observable<any> {
    const url = apiUrl + 'apis';
    return this.http.get(url + '/open-products/', httpOptions).pipe(
      tap(_ => console.log('fetch products'))
    );
  }

}
