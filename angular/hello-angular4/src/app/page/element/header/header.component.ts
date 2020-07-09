import { Observable } from 'rxjs/internal/Observable';
import { Component, OnInit } from '@angular/core';
import { WebserviceService } from 'src/app/services/webservice.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;
  constructor(private router: Router,private WebserviceService : WebserviceService,
     public config: NgbModalConfig, public modalService: NgbModal) { 
      // config.backdrop = 'static';
      // config.keyboard = false;
  }
  categories:any;
  cartItem : [];
  userinfo : any;
  searchResult : any;
  status: boolean = false;
  ngOnInit() {
    this.isLoggedIn$ = this.WebserviceService.isLoggedIn; // {2}
    console.log(this.isLoggedIn$);
    this.userinfo = JSON.parse(localStorage.getItem('USERINFO'));
    this.categories = JSON.parse(localStorage.getItem('CATEGORIES')) || [];
    
    this.cartItem = JSON.parse(localStorage.getItem('CART')) || [];
    if(this.categories.length < 1 ) {
      // this.WebserviceService.getCategories().subscribe((data) => {
      //   this.categories = data;
      //   localStorage.setItem('CATEGORIES', JSON.stringify(this.categories));      
      // });
    }
    
  }
  open() {
    this.modalService.open('<div class="modal-header"><h4 class="modal-title" id="modal-basic-title">Profile update</h4><button type="button" class="close" aria-label="Close" (click)="modal.dismiss()"><span aria-hidden="true">&times;</span></button></div>');
  }

  logout(){
    this.WebserviceService.logout();
    localStorage.removeItem('USERINFO');
    this.isLoggedIn$ = this.WebserviceService.isLoggedIn; // {2}
    this.router.navigate(['/login']);
    //return false;
  }

  displayCounter(count) {
      alert(count);
  }

  getSum(index: string) : number {
    let sum = 0;
    for(let i = 0; i < this.cartItem.length; i++) {
      sum += this.cartItem[i][index];
    }
    return sum;
  }

  searchproduct(keyword){
    this.WebserviceService.searchproduct(keyword)
    .subscribe((data) => {
      this.searchResult = data;
      console.log(this.searchResult.status);
    });
    // this.WebserviceService.searchproduct(keyword);
  }
}
