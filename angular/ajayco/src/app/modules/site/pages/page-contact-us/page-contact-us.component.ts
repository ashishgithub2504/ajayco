import { Component } from '@angular/core';
import { ShopService } from '../../../../shared/api/shop.service';
@Component({
    selector: 'app-contact-us',
    templateUrl: './page-contact-us.component.html',
    styleUrls: ['./page-contact-us.component.scss']
})
export class PageContactUsComponent {
    resp: any;
    constructor(private ShopService:ShopService) { }

    ngOnInit(): void {
        this.ShopService.getContact().subscribe((data) => {
            this.resp = data;
        });
    }
}
