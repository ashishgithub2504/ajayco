import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { specification } from '../../../../../data/shop-product-spec';
import { reviews } from '../../../../../data/shop-product-reviews';
let ProductTabsComponent = class ProductTabsComponent {
    constructor() {
        this.withSidebar = false;
        this.tab = 'description';
        this.specification = specification;
        this.reviews = reviews;
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], ProductTabsComponent.prototype, "withSidebar", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], ProductTabsComponent.prototype, "tab", void 0);
ProductTabsComponent = tslib_1.__decorate([
    Component({
        selector: 'app-product-tabs',
        templateUrl: './product-tabs.component.html',
        styleUrls: ['./product-tabs.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [])
], ProductTabsComponent);
export { ProductTabsComponent };
//# sourceMappingURL=product-tabs.component.js.map