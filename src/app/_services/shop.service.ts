import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = 'http://localhost:8000/apis';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(
    private http: HttpClient,
  ) { }

  // Remember the trailing slash, API doesnt resolve
  products(): Observable<any> {
    return this.http.get(apiUrl + '/open-products/?app_name=fence', httpOptions).pipe(
      tap(_ => console.log('fetch products'))
    );
  }

  productDetails(productID): Observable<any> {
    return this.http.get(apiUrl + '/open-products/' + productID + '/', httpOptions).pipe(
      tap(_ => console.log('detailed'))
    );
  }

  getCart(){
    return new Promise( resolve => {
      this.http.get(apiUrl + '/cart/?format=json').subscribe(data =>{
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  addToCart(patchData: any, cartId: any){
    return new Promise(resolve => {
      this.http.patch(apiUrl + '/safe-ucart/' + cartId + '/?format=json', patchData, httpOptions).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
}
