import { Component, OnInit } from '@angular/core';
import { WebserviceService } from 'src/app/services/webservice.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  result : any;
  navigation : any;
  constructor(private WebserviceService : WebserviceService) { }
  ngOnInit() {
    //this.result.title = 'Login';
    this.WebserviceService.getnavigation().subscribe((data) => {
      this.navigation = data;
      console.log(this.navigation);
    });
  }

}
