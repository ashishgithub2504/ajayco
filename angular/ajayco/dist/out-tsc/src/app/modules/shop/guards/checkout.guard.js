import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../../shared/services/cart.service';
import { map } from 'rxjs/operators';
let CheckoutGuard = class CheckoutGuard {
    constructor(cart, router) {
        this.cart = cart;
        this.router = router;
    }
    canActivate(route, state) {
        return this.cart.quantity$.pipe(map(quantity => {
            if (quantity) {
                return true;
            }
            this.router.navigateByUrl('/cart').then();
            return false;
        }));
    }
};
CheckoutGuard = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [CartService,
        Router])
], CheckoutGuard);
export { CheckoutGuard };
//# sourceMappingURL=checkout.guard.js.map