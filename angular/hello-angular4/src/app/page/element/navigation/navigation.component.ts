import { Component, OnInit } from '@angular/core';
import { WebserviceService } from 'src/app/services/webservice.service';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;
  result : any;
  navigation : any;
  step: any;
  constructor(private WebserviceService : WebserviceService) { }
  ngOnInit() {
    this.isLoggedIn$ = this.WebserviceService.isLoggedIn;
    this.navigation = JSON.parse(localStorage.getItem('NAVIGATION')) || '';
    if(this.navigation.length < 1 ) {
      this.WebserviceService.getnavigation().subscribe((data) => {
        this.navigation = data;
        localStorage.setItem('NAVIGATION', JSON.stringify(this.navigation));
        console.log(this.navigation);
      });
    }
  }

}
