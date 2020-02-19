import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { CartService } from '../../../../shared/services/cart.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { RootService } from '../../../../shared/services/root.service';
let PageCheckoutComponent = class PageCheckoutComponent {
    constructor(root, cart, route, router) {
        this.root = root;
        this.cart = cart;
        this.route = route;
        this.router = router;
        this.destroy$ = new Subject();
    }
    ngOnInit() {
        this.cart.quantity$.pipe(takeUntil(this.destroy$)).subscribe(quantity => {
            if (!quantity) {
                this.router.navigate(['../cart'], { relativeTo: this.route }).then();
            }
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
};
PageCheckoutComponent = tslib_1.__decorate([
    Component({
        selector: 'app-checkout',
        templateUrl: './page-checkout.component.html',
        styleUrls: ['./page-checkout.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [RootService,
        CartService,
        ActivatedRoute,
        Router])
], PageCheckoutComponent);
export { PageCheckoutComponent };
//# sourceMappingURL=page-checkout.component.js.map