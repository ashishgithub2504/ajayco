import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { RootService } from '../../../shared/services/root.service';
import { ShopService } from '../../../shared/api/shop.service';
let CategoryResolverService = class CategoryResolverService {
    constructor(root, router, shop) {
        this.root = root;
        this.router = router;
        this.shop = shop;
    }
    resolve(route, state) {
        const categorySlug = route.params.categorySlug || route.data.categorySlug || null;
        if (categorySlug === null) {
            return null;
        }
        return this.shop.getCategory(categorySlug).pipe(catchError(error => {
            if (error instanceof HttpErrorResponse && error.status === 404) {
                this.router.navigateByUrl(this.root.notFound()).then();
            }
            return EMPTY;
        }));
    }
};
CategoryResolverService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [RootService,
        Router,
        ShopService])
], CategoryResolverService);
export { CategoryResolverService };
//# sourceMappingURL=category-resolver.service.js.map