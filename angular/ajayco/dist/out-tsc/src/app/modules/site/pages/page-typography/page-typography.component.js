import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ShopService } from '../../../../shared/api/shop.service';
let PageTypographyComponent = class PageTypographyComponent {
    constructor(shop) {
        this.shop = shop;
    }
    ngOnInit() {
        this.page = this.shop.getStatic('about');
    }
};
PageTypographyComponent = tslib_1.__decorate([
    Component({
        selector: 'app-typography',
        templateUrl: './page-typography.component.html',
        styleUrls: ['./page-typography.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [ShopService])
], PageTypographyComponent);
export { PageTypographyComponent };
//# sourceMappingURL=page-typography.component.js.map