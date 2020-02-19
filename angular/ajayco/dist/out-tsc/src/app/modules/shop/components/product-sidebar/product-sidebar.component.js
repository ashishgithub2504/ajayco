import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ShopService } from '../../../../shared/api/shop.service';
import { map } from 'rxjs/operators';
let ProductSidebarComponent = class ProductSidebarComponent {
    constructor(shop) {
        this.shop = shop;
    }
    ngOnInit() {
        this.categories$ = this.shop.getCategories(null, 1);
        this.bestsellers$ = this.shop.getBestsellers().pipe(map(x => x.slice(0, 5)));
    }
};
ProductSidebarComponent = tslib_1.__decorate([
    Component({
        selector: 'app-product-sidebar',
        templateUrl: './product-sidebar.component.html',
        styleUrls: ['./product-sidebar.component.sass']
    }),
    tslib_1.__metadata("design:paramtypes", [ShopService])
], ProductSidebarComponent);
export { ProductSidebarComponent };
//# sourceMappingURL=product-sidebar.component.js.map