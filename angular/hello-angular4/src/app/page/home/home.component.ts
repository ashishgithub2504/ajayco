import { Component, OnInit,Renderer,ElementRef } from '@angular/core';
import { DynamicScriptLoaderService } from 'src/app/dynamic-script-loader.service';
import { WebserviceService } from '../../services/webservice.service';
//import { $ } from 'protractor';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private element: any;
  constructor(private renderer:Renderer,private el: ElementRef, private dynamicScriptLoader: DynamicScriptLoaderService,
              private WebserviceService : WebserviceService) { 
     this.element = el.nativeElement;
  }
  profile : any;
  ngOnInit() {
    this.WebserviceService.home().subscribe((data) => {
      this.profile = data;
      console.log(this.profile);
      this.loadScript();
    });
    
  }
	public loadScript() {
		    this.dynamicScriptLoader.load('main').then(data => {
		      // Script Loaded Successfully
		    }).catch(error => console.log(error));   
  }
  
  addtocart(pid) { 
    console.log('add to cart here');
    var oldItems = JSON.parse(localStorage.getItem('CART')) || [];
    oldItems.push(pid);
    localStorage.setItem('CART', JSON.stringify(oldItems));
    
  }
}
