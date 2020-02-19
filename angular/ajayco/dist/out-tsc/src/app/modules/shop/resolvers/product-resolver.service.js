import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { RootService } from '../../../shared/services/root.service';
import { ShopService } from '../../../shared/api/shop.service';
let ProductResolverService = class ProductResolverService {
    constructor(root, router, shop) {
        this.root = root;
        this.router = router;
        this.shop = shop;
    }
    resolve(route, state) {
        const productSlug = route.params.productSlug || route.data.productSlug;
        return this.shop.getProduct(productSlug).pipe(catchError(error => {
            if (error instanceof HttpErrorResponse && error.status === 404) {
                this.router.navigate([this.root.notFound()]).then();
            }
            return EMPTY;
        }));
    }
};
ProductResolverService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [RootService,
        Router,
        ShopService])
], ProductResolverService);
export { ProductResolverService };
//# sourceMappingURL=product-resolver.service.js.map