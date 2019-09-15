import { Directive } from '@angular/core';
import * as $ from 'jquery';
@Directive({
  selector: '[appLoadjs]'
})
export class LoadjsDirective {

  constructor() { }
  ngOnInit() {
    $(document).ready(function(){
      
      // HOME SLICK
      $('#home-slick').slick({
        autoplay: true,
        infinite: true,
        speed: 300,
        arrows: true,
      });
    });
  }
}
