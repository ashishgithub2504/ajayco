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

    registerForm = new FormGroup({
        first_name: new FormControl('',Validators.required),
        email: new FormControl('',Validators.required),
        password: new FormControl('',Validators.required),
        cpassword: new FormControl('',Validators.required),
    });
    userinfo: any;
    constructor(public ShopService: ShopService) { }
    onSubmit() {
        this.ShopService.getLogin(this.loginForm.value);
    }

    info : any;
    onRegister() {
        this.ShopService.signup(this.registerForm.value)
        .subscribe((data) => {
            this.info = data;
            if(this.info.status == true) {
                alert(this.info.message);
            } else {
                alert(this.info.message);
            }
        });
    }
}
