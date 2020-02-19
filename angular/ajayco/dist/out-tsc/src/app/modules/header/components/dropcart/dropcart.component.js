import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { CartService } from '../../../../shared/services/cart.service';
import { RootService } from '../../../../shared/services/root.service';
let DropcartComponent = class DropcartComponent {
    constructor(cart, root) {
        this.cart = cart;
        this.root = root;
        this.removedItems = [];
    }
    remove(item) {
        if (this.removedItems.includes(item)) {
            return;
        }
        this.removedItems.push(item);
        this.cart.remove(item).subscribe({ complete: () => this.removedItems = this.removedItems.filter(eachItem => eachItem !== item) });
    }
};
DropcartComponent = tslib_1.__decorate([
    Component({
        selector: 'app-header-dropcart',
        templateUrl: './dropcart.component.html',
        styleUrls: ['./dropcart.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [CartService,
        RootService])
], DropcartComponent);
export { DropcartComponent };
//# sourceMappingURL=dropcart.component.js.map