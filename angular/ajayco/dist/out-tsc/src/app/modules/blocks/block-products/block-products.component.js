import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
let BlockProductsComponent = class BlockProductsComponent {
    constructor() {
        this.layout = 'large-first';
        this.products = [];
    }
    get large() {
        if (this.layout === 'large-first' && this.products.length > 0) {
            return this.products[0];
        }
        else if (this.layout === 'large-last' && this.products.length > 6) {
            return this.products[6];
        }
        return null;
    }
    get smalls() {
        if (this.layout === 'large-first') {
            return this.products.slice(1, 7);
        }
        else {
            return this.products.slice(0, 6);
        }
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], BlockProductsComponent.prototype, "header", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], BlockProductsComponent.prototype, "layout", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Array)
], BlockProductsComponent.prototype, "products", void 0);
BlockProductsComponent = tslib_1.__decorate([
    Component({
        selector: 'app-block-products',
        templateUrl: './block-products.component.html',
        styleUrls: ['./block-products.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [])
], BlockProductsComponent);
export { BlockProductsComponent };
//# sourceMappingURL=block-products.component.js.map