import { Observable } from 'rxjs/internal/Observable';
import { WebserviceService } from 'src/app/services/webservice.service';
import { Component, OnInit } from '@angular/core';
import { EventemitterService } from 'src/app/services/eventemitter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //  template: `<app-login (dataStr)="setDataStr($event)"></app-login>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'hello-angular4';
  isLoading$: Observable<boolean>;
  
  constructor(private WebserviceService : WebserviceService,private _eventEmiter: EventemitterService) {
  }
  ngOnInit() {
    this.isLoading$ = this.WebserviceService.isLoading;
  }
  setDataStr() {
    console.log("called event");
    this._eventEmiter.dataStr.subscribe(data => console.log(data))
  }
  displayCounter(count) {
      alert('test');
      alert(count);
  }
}
