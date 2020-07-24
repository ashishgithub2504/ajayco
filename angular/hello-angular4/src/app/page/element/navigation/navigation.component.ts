import { Component, OnInit } from '@angular/core';
import { WebserviceService } from 'src/app/services/webservice.service';
import { Observable } from 'rxjs/internal/Observable';
import { Router , Event, NavigationStart, NavigationEnd, NavigationError} from '@angular/router';
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
  classheader: any;
  constructor(private router: Router,private WebserviceService : WebserviceService) { 
    
    this.router.events.subscribe((event) => {
      if(event['url'] && event['url'] != '') {
        this.classheader = 'show-on-click';  
        if( event['url'] == '/') {
          this.classheader = '';
        }        
      }
      // console.log(this.classheader);
    });
  }
  ngOnInit() {
    this.isLoggedIn$ = this.WebserviceService.isLoggedIn;
    this.navigation = JSON.parse(localStorage.getItem('NAVIGATION')) || '';
    // console.log(this.navigation.data);
    if(this.navigation.length < 1 ) {
      this.WebserviceService.getnavigation().subscribe((data) => {
        this.navigation = data;
        localStorage.setItem('NAVIGATION', JSON.stringify(this.navigation));
        // console.log(this.navigation);
      });
    }
  }

  logout(){
    this.WebserviceService.logout();
    localStorage.removeItem('USERINFO');
    this.isLoggedIn$ = this.WebserviceService.isLoggedIn; // {2}
    this.router.navigate(['/login']);
    //return false;
  }

}
