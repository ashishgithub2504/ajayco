import { Component } from '@angular/core';
import { ShopService } from '../../../../shared/api/shop.service';

@Component({
    selector: 'app-typography',
    templateUrl: './page-typography.component.html',
    styleUrls: ['./page-typography.component.scss']
})
export class PageTypographyComponent {
    page : any;
    constructor(
        private shop: ShopService,
    ) { }

    ngOnInit(): void {
        this.page = this.shop.getStatic('about_us');
    }
}
