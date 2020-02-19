import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { ShopSidebarService } from '../../services/shop-sidebar.service';
import { PageCategoryService } from '../../services/page-category.service';
import { FormBuilder } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
let ProductsViewComponent = class ProductsViewComponent {
    constructor(fb, sidebar, pageService) {
        this.fb = fb;
        this.sidebar = sidebar;
        this.pageService = pageService;
        this.layout = 'grid';
        this.grid = 'grid-3-sidebar';
        this.offcanvas = 'mobile';
        this.destroy$ = new Subject();
        this.filtersCount = 0;
    }
    ngOnInit() {
        this.listOptionsForm = this.fb.group({
            page: this.fb.control(this.pageService.page),
            limit: this.fb.control(this.pageService.limit),
            sort: this.fb.control(this.pageService.sort),
        });
        this.listOptionsForm.valueChanges.subscribe(value => {
            value.limit = parseFloat(value.limit);
            this.pageService.updateOptions(value);
        });
        this.pageService.list$.pipe(takeUntil(this.destroy$)).subscribe(({ page, limit, sort, filterValues }) => {
            this.filtersCount = Object.keys(filterValues).length;
            this.listOptionsForm.setValue({ page, limit, sort }, { emitEvent: false });
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    setLayout(value) {
        this.layout = value;
    }
    resetFilters() {
        this.pageService.updateOptions({ filterValues: {} });
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], ProductsViewComponent.prototype, "layout", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], ProductsViewComponent.prototype, "grid", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], ProductsViewComponent.prototype, "offcanvas", void 0);
ProductsViewComponent = tslib_1.__decorate([
    Component({
        selector: 'app-products-view',
        templateUrl: './products-view.component.html',
        styleUrls: ['./products-view.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [FormBuilder,
        ShopSidebarService,
        PageCategoryService])
], ProductsViewComponent);
export { ProductsViewComponent };
//# sourceMappingURL=products-view.component.js.map