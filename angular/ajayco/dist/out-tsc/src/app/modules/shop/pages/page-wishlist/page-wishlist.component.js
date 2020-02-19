import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { WishlistService } from '../../../../shared/services/wishlist.service';
import { CartService } from '../../../../shared/services/cart.service';
import { RootService } from '../../../../shared/services/root.service';
let PageWishlistComponent = class PageWishlistComponent {
    constructor(root, wishlist, cart) {
        this.root = root;
        this.wishlist = wishlist;
        this.cart = cart;
        this.addedToCartProducts = [];
        this.removedProducts = [];
    }
    addToCart(product) {
        if (this.addedToCartProducts.includes(product)) {
            return;
        }
        this.addedToCartProducts.push(product);
        this.cart.add(product, 1).subscribe({
            complete: () => {
                this.addedToCartProducts = this.addedToCartProducts.filter(eachProduct => eachProduct !== product);
            }
        });
    }
    remove(product) {
        if (this.removedProducts.includes(product)) {
            return;
        }
        this.removedProducts.push(product);
        this.wishlist.remove(product).subscribe({
            complete: () => {
                this.removedProducts = this.removedProducts.filter(eachProduct => eachProduct !== product);
            }
        });
    }
};
PageWishlistComponent = tslib_1.__decorate([
    Component({
        selector: 'app-wishlist',
        templateUrl: './page-wishlist.component.html',
        styleUrls: ['./page-wishlist.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [RootService,
        WishlistService,
        CartService])
], PageWishlistComponent);
export { PageWishlistComponent };
//# sourceMappingURL=page-wishlist.component.js.map