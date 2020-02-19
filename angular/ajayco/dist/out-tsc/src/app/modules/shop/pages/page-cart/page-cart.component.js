import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { CartService } from '../../../../shared/services/cart.service';
import { FormControl, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { RootService } from '../../../../shared/services/root.service';
let PageCartComponent = class PageCartComponent {
    constructor(root, cart) {
        this.root = root;
        this.cart = cart;
        this.destroy$ = new Subject();
        this.removedItems = [];
        this.items = [];
        this.updating = false;
    }
    ngOnInit() {
        this.cart.items$.pipe(takeUntil(this.destroy$), map(cartItems => cartItems.map(cartItem => {
            return {
                cartItem,
                quantity: cartItem.quantity,
                quantityControl: new FormControl(cartItem.quantity, Validators.required)
            };
        }))).subscribe(items => this.items = items);
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    remove(item) {
        if (this.removedItems.includes(item)) {
            return;
        }
        this.removedItems.push(item);
        this.cart.remove(item).subscribe({ complete: () => this.removedItems = this.removedItems.filter(eachItem => eachItem !== item) });
    }
    update() {
        this.updating = true;
        this.cart.update(this.items
            .filter(item => item.quantityControl.value !== item.quantity)
            .map(item => ({
            item: item.cartItem,
            quantity: item.quantityControl.value
        }))).subscribe({ complete: () => this.updating = false });
    }
    needUpdate() {
        let needUpdate = false;
        for (const item of this.items) {
            if (!item.quantityControl.valid) {
                return false;
            }
            if (item.quantityControl.value !== item.quantity) {
                needUpdate = true;
            }
        }
        return needUpdate;
    }
};
PageCartComponent = tslib_1.__decorate([
    Component({
        selector: 'app-cart',
        templateUrl: './page-cart.component.html',
        styleUrls: ['./page-cart.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [RootService,
        CartService])
], PageCartComponent);
export { PageCartComponent };
//# sourceMappingURL=page-cart.component.js.map