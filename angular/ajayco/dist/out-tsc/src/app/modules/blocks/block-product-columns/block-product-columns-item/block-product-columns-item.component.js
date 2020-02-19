import * as tslib_1 from "tslib";
import { Component, HostBinding, Input } from '@angular/core';
let BlockProductColumnsItemComponent = class BlockProductColumnsItemComponent {
    constructor() {
        this.classCol = true;
        this.products = [];
    }
};
tslib_1.__decorate([
    HostBinding('class.col'),
    tslib_1.__metadata("design:type", Object)
], BlockProductColumnsItemComponent.prototype, "classCol", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], BlockProductColumnsItemComponent.prototype, "header", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Array)
], BlockProductColumnsItemComponent.prototype, "products", void 0);
BlockProductColumnsItemComponent = tslib_1.__decorate([
    Component({
        selector: 'app-block-product-columns-item',
        templateUrl: './block-product-columns-item.component.html',
        styleUrls: ['./block-product-columns-item.component.sass']
    }),
    tslib_1.__metadata("design:paramtypes", [])
], BlockProductColumnsItemComponent);
export { BlockProductColumnsItemComponent };
//# sourceMappingURL=block-product-columns-item.component.js.map