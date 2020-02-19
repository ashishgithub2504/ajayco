import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShopService } from '../../../../shared/api/shop.service';
let PageProductComponent = class PageProductComponent {
    constructor(shop, route) {
        this.shop = shop;
        this.route = route;
        this.layout = 'standard';
        this.sidebarPosition = 'start'; // For LTR scripts "start" is "left" and "end" is "right"
    }
    ngOnInit() {
        this.route.data.subscribe(data => {
            this.layout = data.layout || this.layout;
            this.sidebarPosition = data.sidebarPosition || this.sidebarPosition;
            this.product = data.product;
            this.relatedProducts$ = this.shop.getRelatedProducts(data.product);
        });
    }
};
PageProductComponent = tslib_1.__decorate([
    Component({
        selector: 'app-page-product',
        templateUrl: './page-product.component.html',
        styleUrls: ['./page-product.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [ShopService,
        ActivatedRoute])
], PageProductComponent);
export { PageProductComponent };
//# sourceMappingURL=page-product.component.js.map