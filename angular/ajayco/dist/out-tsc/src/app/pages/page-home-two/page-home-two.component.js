import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { posts } from '../../../data/blog-posts';
import { ShopService } from '../../shared/api/shop.service';
import { takeUntil, tap } from 'rxjs/operators';
import { merge, Subject } from 'rxjs';
let PageHomeTwoComponent = class PageHomeTwoComponent {
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
                {
                    name: 'Power Tools',
                    current: false,
                    products$: this.shop.getFeaturedProducts('power-tools', 8),
                },
                {
                    name: 'Hand Tools',
                    current: false,
                    products$: this.shop.getFeaturedProducts('hand-tools', 8),
                },
                {
                    name: 'Plumbing',
                    current: false,
                    products$: this.shop.getFeaturedProducts('plumbing', 8),
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
                {
                    name: 'Power Tools',
                    current: false,
                    products$: this.shop.getLatestProducts('power-tools', 8),
                },
                {
                    name: 'Hand Tools',
                    current: false,
                    products$: this.shop.getLatestProducts('hand-tools', 8),
                },
                {
                    name: 'Plumbing',
                    current: false,
                    products$: this.shop.getLatestProducts('plumbing', 8),
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
PageHomeTwoComponent = tslib_1.__decorate([
    Component({
        selector: 'app-page-home-two',
        templateUrl: './page-home-two.component.html',
        styleUrls: ['./page-home-two.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [ShopService])
], PageHomeTwoComponent);
export { PageHomeTwoComponent };
//# sourceMappingURL=page-home-two.component.js.map