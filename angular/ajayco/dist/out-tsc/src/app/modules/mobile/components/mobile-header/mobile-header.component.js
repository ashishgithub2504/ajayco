import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { MobileMenuService } from '../../../../shared/services/mobile-menu.service';
import { WishlistService } from '../../../../shared/services/wishlist.service';
import { CartService } from '../../../../shared/services/cart.service';
let MobileHeaderComponent = class MobileHeaderComponent {
    constructor(menu, wishlist, cart) {
        this.menu = menu;
        this.wishlist = wishlist;
        this.cart = cart;
    }
};
MobileHeaderComponent = tslib_1.__decorate([
    Component({
        selector: 'app-mobile-header',
        templateUrl: './mobile-header.component.html',
        styleUrls: ['./mobile-header.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [MobileMenuService,
        WishlistService,
        CartService])
], MobileHeaderComponent);
export { MobileHeaderComponent };
//# sourceMappingURL=mobile-header.component.js.map