import { Component } from '@angular/core';
import { DirectionService } from '../../../../shared/services/direction.service';
import { ShopService } from '../../../../shared/api/shop.service';
@Component({
    selector: 'app-about-us',
    templateUrl: './page-about-us.component.html',
    styleUrls: ['./page-about-us.component.scss']
})
export class PageAboutUsComponent {
    carouselOptions = {
        nav: false,
        dots: true,
        responsive: {
            580: {items: 3, margin: 32},
            280: {items: 2, margin: 24},
            0: {items: 1}
        },
        rtl: this.direction.isRTL()
    };
    resp : any;
    constructor(
        private direction: DirectionService,
        private ShopService:ShopService
    ) {}

    ngOnInit(): void {
        this.ShopService.getStatic('about-us').subscribe((data) => {
            this.resp = data;
            console.log(this.resp);
        });
    }
}
