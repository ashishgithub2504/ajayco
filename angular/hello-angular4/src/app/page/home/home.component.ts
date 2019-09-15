import { Component, OnInit,Renderer } from '@angular/core';
import { DynamicScriptLoaderService } from 'src/app/dynamic-script-loader.service';
import { WebserviceService } from '../../services/webservice.service';
//import { $ } from 'protractor';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private renderer:Renderer, private dynamicScriptLoader: DynamicScriptLoaderService,
              private WebserviceService : WebserviceService) { }
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
    var oldItems = JSON.parse(localStorage.getItem('CART')) || [];
    oldItems.push(pid);
    localStorage.setItem('CART', JSON.stringify(oldItems));
    this.renderer.setElementClass(event.target,"opened",true);
    //$('.header-cart').addClass('open');
  }
}
