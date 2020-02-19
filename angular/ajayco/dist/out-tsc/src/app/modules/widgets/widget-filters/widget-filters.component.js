import * as tslib_1 from "tslib";
import { Component, Inject, Input, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { DirectionService } from '../../../shared/services/direction.service';
import { FormBuilder } from '@angular/forms';
import { RootService } from '../../../shared/services/root.service';
import { Subject } from 'rxjs';
import { PageCategoryService } from '../../shop/services/page-category.service';
import { map, takeUntil } from 'rxjs/operators';
let WidgetFiltersComponent = class WidgetFiltersComponent {
    constructor(platformId, direction, fb, root, pageCategory) {
        this.platformId = platformId;
        this.direction = direction;
        this.fb = fb;
        this.root = root;
        this.pageCategory = pageCategory;
        this.offcanvas = 'mobile';
        this.destroy$ = new Subject();
        this.isPlatformBrowser = isPlatformBrowser(this.platformId);
        this.rightToLeft = false;
        this.rightToLeft = this.direction.isRTL();
    }
    ngOnInit() {
        this.pageCategory.list$.pipe(map(x => x.filters), takeUntil(this.destroy$)).subscribe(filters => {
            this.filters = filters;
            this.filtersForm = this.makeFiltersForm(filters);
            this.filtersForm.valueChanges.subscribe(formValues => {
                this.pageCategory.updateOptions({
                    filterValues: this.convertFormToFilterValues(filters, formValues)
                });
            });
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    trackBySlug(index, item) {
        return item.slug;
    }
    makeFiltersForm(filters) {
        const filtersFromGroup = {};
        filters.forEach(filter => {
            switch (filter.type) {
                case 'range':
                case 'radio':
                    filtersFromGroup[filter.slug] = this.fb.control(filter.value);
                    break;
                case 'check':
                case 'color':
                    filtersFromGroup[filter.slug] = this.makeListFilterForm(filter);
                    break;
            }
        });
        return this.fb.group(filtersFromGroup);
    }
    makeListFilterForm(filter) {
        const group = {};
        filter.items.forEach(item => {
            const control = this.fb.control(filter.value.includes(item.slug));
            // A timeout is needed because sometimes a state change is ignored if performed immediately.
            setTimeout(() => {
                if (this.isItemDisabled(filter, item)) {
                    control.disable({ emitEvent: false });
                }
                else {
                    control.enable({ emitEvent: false });
                }
            }, 0);
            group[item.slug] = control;
        });
        return this.fb.group(group);
    }
    isItemDisabled(filter, item) {
        return item.count === 0 && (filter.type === 'radio' || !filter.value.includes(item.slug));
    }
    convertFormToFilterValues(filters, formValues) {
        const filterValues = {};
        filters.forEach(filter => {
            const formValue = formValues[filter.slug];
            switch (filter.type) {
                case 'range':
                    if (formValue && (formValue[0] !== filter.min || formValue[1] !== filter.max)) {
                        filterValues[filter.slug] = `${formValue[0]}-${formValue[1]}`;
                    }
                    break;
                case 'check':
                case 'color':
                    const filterFormValues = formValue || {};
                    // Reactive forms do not add a values of disabled checkboxes.
                    // This code will add them manually.
                    filter.value.forEach(filterValue => {
                        if (!(filterValue in filterFormValues)) {
                            filterFormValues[filterValue] = true;
                        }
                    });
                    const values = Object.keys(filterFormValues).filter(x => filterFormValues[x]);
                    if (values.length > 0) {
                        filterValues[filter.slug] = values.join(',');
                    }
                    break;
                case 'radio':
                    if (formValue !== filter.items[0].slug) {
                        filterValues[filter.slug] = formValue;
                    }
                    break;
            }
        });
        return filterValues;
    }
    reset() {
        const formValues = {};
        this.filters.forEach(filter => {
            switch (filter.type) {
                case 'range':
                    formValues[filter.slug] = [filter.min, filter.max];
                    break;
                case 'check':
                case 'color':
                    formValues[filter.slug] = {};
                    filter.items.forEach(item => {
                        formValues[filter.slug][item.slug] = false;
                    });
                    break;
                case 'radio':
                    formValues[filter.slug] = filter.items[0].slug;
                    break;
            }
        });
        this.filtersForm.setValue(formValues);
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], WidgetFiltersComponent.prototype, "offcanvas", void 0);
WidgetFiltersComponent = tslib_1.__decorate([
    Component({
        selector: 'app-widget-filters',
        templateUrl: './widget-filters.component.html',
        styleUrls: ['./widget-filters.component.scss']
    }),
    tslib_1.__param(0, Inject(PLATFORM_ID)),
    tslib_1.__metadata("design:paramtypes", [Object, DirectionService,
        FormBuilder,
        RootService,
        PageCategoryService])
], WidgetFiltersComponent);
export { WidgetFiltersComponent };
//# sourceMappingURL=widget-filters.component.js.map