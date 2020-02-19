import * as tslib_1 from "tslib";
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject, Subject, timer } from 'rxjs';
import { map } from 'rxjs/operators';
import { isPlatformBrowser } from '@angular/common';
let CartService = class CartService {
    constructor(platformId) {
        this.platformId = platformId;
        this.data = {
            items: [],
            quantity: 0,
            subtotal: 0,
            totals: [],
            total: 0
        };
        this.itemsSubject$ = new BehaviorSubject(this.data.items);
        this.quantitySubject$ = new BehaviorSubject(this.data.quantity);
        this.subtotalSubject$ = new BehaviorSubject(this.data.subtotal);
        this.totalsSubject$ = new BehaviorSubject(this.data.totals);
        this.totalSubject$ = new BehaviorSubject(this.data.total);
        this.onAddingSubject$ = new Subject();
        this.items$ = this.itemsSubject$.asObservable();
        this.quantity$ = this.quantitySubject$.asObservable();
        this.subtotal$ = this.subtotalSubject$.asObservable();
        this.totals$ = this.totalsSubject$.asObservable();
        this.total$ = this.totalSubject$.asObservable();
        this.onAdding$ = this.onAddingSubject$.asObservable();
        if (isPlatformBrowser(this.platformId)) {
            this.load();
            this.calc();
        }
    }
    get items() {
        return this.data.items;
    }
    get quantity() {
        return this.data.quantity;
    }
    add(product, quantity, options = []) {
        // timer only for demo
        return timer(1000).pipe(map(() => {
            this.onAddingSubject$.next(product);
            let item = this.items.find(eachItem => {
                if (eachItem.product.id !== product.id || eachItem.options.length !== options.length) {
                    return false;
                }
                if (eachItem.options.length) {
                    for (const option of options) {
                        if (!eachItem.options.find(itemOption => itemOption.name === option.name && itemOption.value === option.value)) {
                            return false;
                        }
                    }
                }
                return true;
            });
            if (item) {
                item.quantity += quantity;
            }
            else {
                item = { product, quantity, options };
                this.data.items.push(item);
            }
            this.save();
            this.calc();
            return item;
        }));
    }
    update(updates) {
        // timer only for demo
        return timer(1000).pipe(map(() => {
            updates.forEach(update => {
                const item = this.items.find(eachItem => eachItem === update.item);
                if (item) {
                    item.quantity = update.quantity;
                }
            });
            this.save();
            this.calc();
        }));
    }
    remove(item) {
        // timer only for demo
        return timer(1000).pipe(map(() => {
            this.data.items = this.data.items.filter(eachItem => eachItem !== item);
            this.save();
            this.calc();
        }));
    }
    calc() {
        let quantity = 0;
        let subtotal = 0;
        this.data.items.forEach(item => {
            quantity += item.quantity;
            subtotal += item.product.price * item.quantity;
        });
        const totals = [];
        totals.push({
            title: 'Shipping',
            price: 25,
            type: 'shipping'
        });
        totals.push({
            title: 'Tax',
            price: subtotal * 0.20,
            type: 'tax'
        });
        const total = subtotal + totals.reduce((acc, eachTotal) => acc + eachTotal.price, 0);
        this.data.quantity = quantity;
        this.data.subtotal = subtotal;
        this.data.totals = totals;
        this.data.total = total;
        this.itemsSubject$.next(this.data.items);
        this.quantitySubject$.next(this.data.quantity);
        this.subtotalSubject$.next(this.data.subtotal);
        this.totalsSubject$.next(this.data.totals);
        this.totalSubject$.next(this.data.total);
    }
    save() {
        localStorage.setItem('cartItems', JSON.stringify(this.data.items));
    }
    load() {
        const items = localStorage.getItem('cartItems');
        if (items) {
            this.data.items = JSON.parse(items);
        }
    }
};
CartService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__param(0, Inject(PLATFORM_ID)),
    tslib_1.__metadata("design:paramtypes", [Object])
], CartService);
export { CartService };
//# sourceMappingURL=cart.service.js.map