import { Injectable, Output, EventEmitter } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class WebserviceService {
  private loggedIn = new BehaviorSubject<boolean>(false); // {1}
  private loading = new BehaviorSubject<boolean>(false); // {1}
  get isLoggedIn() {
    return this.loggedIn.asObservable(); // {2}
  }
  get isLoading() {
    return this.loading.asObservable();
  }
APIURL = 'http://localhost:8765/api/webservice/';
// APIURL = 'http://phpdev.co.in/ajayco/api/webservice/';
  constructor(private http:HttpClient,private router: Router) { }

  home() : Observable<object>{
    return this.http
    .get(this.APIURL+`index`)
    .pipe(map((response: any) => response.data));
  }

  staticPage(name:string) : Observable<object> {    
    return this.http.post(this.APIURL+'staticpage', {
      name: name
    }).pipe(map((response: any) => response.data));
  }

  getCategories() : Observable<object> {
    return this.http.get(this.APIURL+`getcategories`)
    .pipe(map((response:any) => response.data));
  }

  getProducts(path:string) : Observable<object> {
    alert('test');
    return this.http.post(this.APIURL+'getproducts', {
      path: path
    }).pipe(map((response:any) => response));
  }
  
  result: any;
  @Output() dataStr = new EventEmitter();
  showProgress:boolean = false;
  login(detail) {
    this.loading.next(true);
    this.dataStr.emit(true);
    this.showProgress = true;
    this.http.post(this.APIURL+'login',{
      detail:detail
    }).subscribe((data) => {
      this.result = data;
      this.loading.next(false);
      if(this.result.status == true){
        this.loggedIn.next(true);
        localStorage.setItem('USERINFO', JSON.stringify(this.result.data));
        this.router.navigate(['/']);
      } else {
        alert(this.result.message);
      }
      
      return this.result;
    });
    //.pipe(map((response:any) => response));    
  }

  logout() : boolean {
    this.loggedIn.next(false);    
    return true;
  }

  userInfo() : boolean {
    this.loggedIn.next(true);
    return true;
  }

  showLoading() :boolean {
    this.loading.next(true);
    return true;
  }

  hideLoading() : boolean {
    this.loading.next(false);
    return true;
  }

  signup(detail:string) : Observable<object> {    
    return this.http.post(this.APIURL+'signup', {
      detail
    }).pipe(map((response: any) => response));
  }

  productDetails(slug:string) : Observable<object> {
    return this.http.post(this.APIURL+'productdetails', {
      slug
    }).pipe(map((response:any) => response));
  }

  enquiry(detail:string) : Observable<Object> {
    return this.http.post(this.APIURL+'enquiry',{
      detail
    }).pipe(map((response: any) => response));
  }

  getnavigation() : Observable<Object> {
    return this.http.get(this.APIURL+'getnavigation')
    .pipe(map((response:any) => response));
  }

  createOrder(detail,price) : Observable<Object> {
    return this.http.post(this.APIURL+'createorder', {
      detail,price
    }).pipe(map((response:any) => response));
  }

  completeOrder(payment_id,order_id) : Observable<Object> {
    return this.http.post(this.APIURL+'completeorder', {
      payment_id:payment_id, order_id:order_id
    }).pipe(map((response:any) => response));
  }
}
