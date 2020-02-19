import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { CompareService } from '../../../../shared/services/compare.service';
import { CartService } from '../../../../shared/services/cart.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { RootService } from '../../../../shared/services/root.service';
let PageCompareComponent = class PageCompareComponent {
    constructor(root, compare, cart) {
        this.root = root;
        this.compare = compare;
        this.cart = cart;
        this.destroy$ = new Subject();
        this.products = [];
        this.features = [];
        this.addedToCartProducts = [];
        this.removedProducts = [];
    }
    ngOnInit() {
        this.compare.items$.pipe(takeUntil(this.destroy$)).subscribe(products => {
            const features = [];
            products.forEach(product => product.attributes.forEach(productAttribute => {
                let feature = features.find(eachFeature => eachFeature.name === productAttribute.name);
                if (!feature) {
                    feature = {
                        name: productAttribute.name,
                        values: {}
                    };
                    features.push(feature);
                }
                feature.values[product.id] = productAttribute.values.map(x => x.name).join(', ');
            }));
            this.products = products;
            this.features = features;
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
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
        this.compare.remove(product).subscribe({
            complete: () => {
                this.removedProducts = this.removedProducts.filter(eachProduct => eachProduct !== product);
            }
        });
    }
};
PageCompareComponent = tslib_1.__decorate([
    Component({
        selector: 'app-compare',
        templateUrl: './page-compare.component.html',
        styleUrls: ['./page-compare.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [RootService,
        CompareService,
        CartService])
], PageCompareComponent);
export { PageCompareComponent };
//# sourceMappingURL=page-compare.component.js.map