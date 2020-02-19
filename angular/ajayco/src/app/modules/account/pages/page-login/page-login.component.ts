import { Component } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { ShopService } from '../../../../../app/shared/api/shop.service';
@Component({
    selector: 'app-login',
    templateUrl: './page-login.component.html',
    styleUrls: ['./page-login.component.scss']
})
export class PageLoginComponent {
    loginForm = new FormGroup({
        email: new FormControl('',Validators.required),
        password: new FormControl('',Validators.required),
    });
    userinfo: any;
    constructor(public ShopService: ShopService) { }
    onSubmit() {
        this.ShopService.getLogin(this.loginForm.value);
        console.log(this.loginForm.value);
    }
}
