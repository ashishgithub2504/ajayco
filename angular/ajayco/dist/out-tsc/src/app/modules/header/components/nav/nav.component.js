import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { CartService } from '../../../../shared/services/cart.service';
import { WishlistService } from '../../../../shared/services/wishlist.service';
import { RootService } from '../../../../shared/services/root.service';
let NavComponent = class NavComponent {
    constructor(root, cart, wishlist) {
        this.root = root;
        this.cart = cart;
        this.wishlist = wishlist;
        this.departments = true;
        this.logo = false;
        this.search = false;
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], NavComponent.prototype, "departments", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], NavComponent.prototype, "logo", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], NavComponent.prototype, "search", void 0);
NavComponent = tslib_1.__decorate([
    Component({
        selector: 'app-header-nav',
        templateUrl: './nav.component.html',
        styleUrls: ['./nav.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [RootService,
        CartService,
        WishlistService])
], NavComponent);
export { NavComponent };
//# sourceMappingURL=nav.component.js.map