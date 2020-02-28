import { Component } from '@angular/core';
import { ShopService } from '../../../../shared/api/shop.service';
@Component({
    selector: 'app-terms',
    templateUrl: './page-terms.component.html',
    styleUrls: ['./page-terms.component.scss']
})
export class PageTermsComponent {
    resp : any;
    constructor(private ShopService:ShopService) { }
    ngOnInit(): void {
        this.ShopService.getStatic('terms-conditions').subscribe((data) => {
            this.resp = data;
            console.log(this.resp);
        });
    }
}
