import { Component } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { ShopService } from '../../../../../app/shared/api/shop.service';
@Component({
    selector: 'app-page-profile',
    templateUrl: './page-profile.component.html',
    styleUrls: ['./page-profile.component.sass']
})
export class PageProfileComponent {
    item = JSON.parse(localStorage.getItem('USERINFO'));
        
    profileForm = new FormGroup({
        first_name: new FormControl(this.item.first_name,Validators.required),
        email: new FormControl(this.item.email,Validators.required),
        last_name: new FormControl(this.item.last_name,Validators.required),
        phone: new FormControl(this.item.mobile,Validators.required),
    });
    constructor(public ShopService: ShopService) {
     }

     update() {
        this.ShopService.update(this.profileForm.value);
     }    
}
