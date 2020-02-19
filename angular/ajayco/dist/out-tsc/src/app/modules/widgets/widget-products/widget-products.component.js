import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { RootService } from '../../../shared/services/root.service';
let WidgetProductsComponent = class WidgetProductsComponent {
    constructor(root) {
        this.root = root;
        this.header = '';
        this.products = [];
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], WidgetProductsComponent.prototype, "header", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Array)
], WidgetProductsComponent.prototype, "products", void 0);
WidgetProductsComponent = tslib_1.__decorate([
    Component({
        selector: 'app-widget-products',
        templateUrl: './widget-products.component.html',
        styleUrls: ['./widget-products.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [RootService])
], WidgetProductsComponent);
export { WidgetProductsComponent };
//# sourceMappingURL=widget-products.component.js.map