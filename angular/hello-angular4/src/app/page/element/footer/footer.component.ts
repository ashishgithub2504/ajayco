import { Component, OnInit, Input } from '@angular/core';
import { WebserviceService } from '../../../services/webservice.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  
  constructor(private WebserviceService : WebserviceService) { }
  footer :any;
  ngOnInit() {
    this.WebserviceService.home().subscribe((data) => {
      this.footer = data;
      console.log(this.footer.footer);
    });
  }

}
