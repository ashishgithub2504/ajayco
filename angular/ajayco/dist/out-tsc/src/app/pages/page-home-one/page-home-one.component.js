import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { posts } from '../../../data/blog-posts';
import { Subject, merge } from 'rxjs';
import { ShopService } from '../../shared/api/shop.service';
import { takeUntil, tap } from 'rxjs/operators';
let PageHomeOneComponent = class PageHomeOneComponent {
    constructor(shop) {
        this.shop = shop;
        this.destroy$ = new Subject();
        this.posts = posts;
    }
    ngOnInit() {
        this.bestsellers$ = this.shop.getBestsellers(7);
        this.brands$ = this.shop.getPopularBrands();
        this.popularCategories$ = this.shop.getCategoriesBySlug([
            'power-tools',
            'hand-tools',
            'machine-tools',
            'power-machinery',
            'measurement',
            'clothes-and-ppe',
        ], 1);
        this.columnTopRated$ = this.shop.getTopRated(3);
        this.columnSpecialOffers$ = this.shop.getSpecialOffers(3);
        this.columnBestsellers$ = this.shop.getBestsellers(3);
        this.featuredProducts = {
            abort$: new Subject(),
            loading: false,
            products: [],
            groups: [
                {
                    name: 'All',
                    current: true,
                    products$: this.shop.getFeaturedProducts(null, 8),
                },
            ],
        };
        this.groupChange(this.featuredProducts, this.featuredProducts.groups[0]);
        this.latestProducts = {
            abort$: new Subject(),
            loading: false,
            products: [],
            groups: [
                {
                    name: 'All',
                    current: true,
                    products$: this.shop.getLatestProducts(null, 8),
                },
            ],
        };
        this.groupChange(this.latestProducts, this.latestProducts.groups[0]);
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    groupChange(carousel, group) {
        carousel.loading = true;
        carousel.abort$.next();
        group.products$.pipe(tap(() => carousel.loading = false), takeUntil(merge(this.destroy$, carousel.abort$))).subscribe(x => carousel.products = x);
    }
};
PageHomeOneComponent = tslib_1.__decorate([
    Component({
        selector: 'app-home',
        templateUrl: './page-home-one.component.html',
        styleUrls: ['./page-home-one.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [ShopService])
], PageHomeOneComponent);
export { PageHomeOneComponent };
//# sourceMappingURL=page-home-one.component.js.map