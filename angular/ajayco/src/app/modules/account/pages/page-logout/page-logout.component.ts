import { Component } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { ShopService } from '../../../../../app/shared/api/shop.service';
import { Router } from '@angular/router';
@Component({
    selector: 'app-logout',
    templateUrl: './page-logout.component.html',
    styleUrls: ['./page-logout.component.scss']
})
export class PageLogoutComponent {
    constructor(
        public ShopService: ShopService, 
        private router: Router
    ) {}
    
    ngOnInit() {
        this.ShopService.getLogout();
    }
}
