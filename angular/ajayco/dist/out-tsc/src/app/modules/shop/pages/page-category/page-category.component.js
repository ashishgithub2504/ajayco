import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShopSidebarService } from '../../services/shop-sidebar.service';
import { PageCategoryService } from '../../services/page-category.service';
import { RootService } from '../../../../shared/services/root.service';
import { of, Subject, timer } from 'rxjs';
import { debounce, mergeMap, takeUntil } from 'rxjs/operators';
import { Location } from '@angular/common';
import { parseProductsListParams } from '../../resolvers/products-list-resolver.service';
import { ShopService } from '../../../../shared/api/shop.service';
import { parseFilterValue } from '../../../../shared/helpers/filter';
let PageCategoryComponent = class PageCategoryComponent {
    constructor(root, router, route, pageService, shop, location) {
        this.root = root;
        this.router = router;
        this.route = route;
        this.pageService = pageService;
        this.shop = shop;
        this.location = location;
        this.destroy$ = new Subject();
        this.columns = 3;
        this.viewMode = 'grid';
        this.sidebarPosition = 'start'; // For LTR scripts "start" is "left" and "end" is "right"
        this.breadcrumbs = [];
        this.route.data.subscribe(data => {
            this.breadcrumbs = [
                { label: 'Home', url: this.root.home() },
                { label: 'Shop', url: this.root.shop() },
            ];
            // If categorySlug is undefined then this is a root catalog page.
            if (!this.getCategorySlug()) {
                this.pageHeader = 'Shop';
            }
            else {
                this.pageHeader = data.category.name;
                this.breadcrumbs = this.breadcrumbs.concat([
                    ...data.category.parents.map(parent => ({ label: parent.name, url: this.root.category(parent) })),
                    { label: data.category.name, url: this.root.category(data.category) },
                ]);
            }
            this.pageService.setList(data.products);
            this.columns = 'columns' in data ? data.columns : this.columns;
            this.viewMode = 'viewMode' in data ? data.viewMode : this.viewMode;
            this.sidebarPosition = 'sidebarPosition' in data ? data.sidebarPosition : this.sidebarPosition;
        });
        this.route.queryParams.subscribe(queryParams => {
            this.pageService.setOptions(parseProductsListParams(queryParams), false);
        });
        this.pageService.optionsChange$.pipe(debounce(changedOptions => {
            return changedOptions.filterValues ? timer(250) : of(changedOptions);
        }), mergeMap(() => {
            this.updateUrl();
            this.pageService.setIsLoading(true);
            return this.shop.getProductsList(this.getCategorySlug(), this.pageService.options).pipe(takeUntil(this.pageService.optionsChange$));
        }), takeUntil(this.destroy$)).subscribe(list => {
            this.pageService.setList(list);
            this.pageService.setIsLoading(false);
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    updateUrl() {
        const tree = this.router.parseUrl(this.router.url);
        tree.queryParams = this.getQueryParams();
        this.location.replaceState(tree.toString());
    }
    getQueryParams() {
        const params = {};
        const options = this.pageService.options;
        const filterValues = options.filterValues;
        if ('page' in options && options.page !== 1) {
            params.page = options.page;
        }
        if ('limit' in options && options.limit !== 12) {
            params.limit = options.limit;
        }
        if ('sort' in options && options.sort !== 'default') {
            params.sort = options.sort;
        }
        if ('filterValues' in options) {
            this.pageService.filters.forEach(filter => {
                if (!(filter.slug in filterValues)) {
                    return;
                }
                const filterValue = parseFilterValue(filter.type, filterValues[filter.slug]);
                switch (filter.type) {
                    case 'range':
                        if (filter.min !== filterValue[0] || filter.max !== filterValue[1]) {
                            params[`filter_${filter.slug}`] = `${filterValue[0]}-${filterValue[1]}`;
                        }
                        break;
                    case 'check':
                    case 'color':
                        if (filterValue.length > 0) {
                            params[`filter_${filter.slug}`] = filterValues[filter.slug];
                        }
                        break;
                    case 'radio':
                        if (filterValue !== filter.items[0].slug) {
                            params[`filter_${filter.slug}`] = filterValue;
                        }
                        break;
                }
            });
        }
        return params;
    }
    getCategorySlug() {
        return this.route.snapshot.params.categorySlug || this.route.snapshot.data.categorySlug || null;
    }
};
PageCategoryComponent = tslib_1.__decorate([
    Component({
        selector: 'app-grid',
        templateUrl: './page-category.component.html',
        styleUrls: ['./page-category.component.scss'],
        providers: [
            { provide: PageCategoryService, useClass: PageCategoryService },
            { provide: ShopSidebarService, useClass: ShopSidebarService },
        ]
    }),
    tslib_1.__metadata("design:paramtypes", [RootService,
        Router,
        ActivatedRoute,
        PageCategoryService,
        ShopService,
        Location])
], PageCategoryComponent);
export { PageCategoryComponent };
//# sourceMappingURL=page-category.component.js.map