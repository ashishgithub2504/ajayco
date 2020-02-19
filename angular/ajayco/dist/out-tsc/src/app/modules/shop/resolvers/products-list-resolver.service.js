import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { RootService } from '../../../shared/services/root.service';
import { ShopService } from '../../../shared/api/shop.service';
export function parseProductsListParams(params) {
    const options = {};
    if (params.page) {
        options.page = parseFloat(params.page);
    }
    if (params.limit) {
        options.limit = parseFloat(params.limit);
    }
    if (params.sort) {
        options.sort = params.sort;
    }
    for (const param of Object.keys(params)) {
        const mr = param.match(/^filter_([-_A-Za-z0-9]+)$/);
        if (!mr) {
            continue;
        }
        const filterSlug = mr[1];
        if (!('filterValues' in options)) {
            options.filterValues = {};
        }
        options.filterValues[filterSlug] = params[param];
    }
    return options;
}
let ProductsListResolverService = class ProductsListResolverService {
    constructor(root, router, shop) {
        this.root = root;
        this.router = router;
        this.shop = shop;
    }
    resolve(route, state) {
        const categorySlug = route.params.categorySlug || route.data.categorySlug || null;
        return this.shop.getProductsList(categorySlug, parseProductsListParams(route.queryParams)).pipe(catchError(error => {
            if (error instanceof HttpErrorResponse && error.status === 404) {
                this.router.navigate([this.root.notFound()]).then();
            }
            return EMPTY;
        }));
    }
};
ProductsListResolverService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [RootService,
        Router,
        ShopService])
], ProductsListResolverService);
export { ProductsListResolverService };
//# sourceMappingURL=products-list-resolver.service.js.map