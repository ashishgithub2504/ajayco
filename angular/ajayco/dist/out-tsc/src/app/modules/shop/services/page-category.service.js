import * as tslib_1 from "tslib";
import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';
/**
 * This service serves as a mediator between the PageCategoryComponent, ProductsViewComponent and WidgetFiltersComponent components.
 */
let PageCategoryService = class PageCategoryService {
    /**
     * This service serves as a mediator between the PageCategoryComponent, ProductsViewComponent and WidgetFiltersComponent components.
     */
    constructor() {
        // isLoading
        this.isLoadingState = false;
        this.isLoadingSource = new BehaviorSubject(this.isLoadingState);
        this.isLoading$ = this.isLoadingSource.asObservable();
        this.listSource = new BehaviorSubject(this.listState);
        this.list$ = this.listSource.pipe(filter(x => x !== null));
        // options
        this.optionsState = {};
        this.optionsChange$ = new EventEmitter();
    }
    get options() {
        return this.optionsState;
    }
    // getters for list
    get items() { return this.listState.items; }
    get page() { return this.listState.page; }
    get limit() { return this.listState.limit; }
    get sort() { return this.listState.sort; }
    get total() { return this.listState.total; }
    get pages() { return this.listState.pages; }
    get from() { return this.listState.from; }
    get to() { return this.listState.to; }
    get filters() { return this.listState.filters; }
    get filterValues() { return this.listState.filterValues; }
    // set functions
    setIsLoading(value) {
        this.isLoadingState = value;
        this.isLoadingSource.next(value);
    }
    setList(list) {
        this.listState = list;
        this.listSource.next(this.listState);
    }
    setOptions(options, emitEvent = true) {
        const diff = this.optionsDiff(options);
        if ('limit' in diff || 'sort' in diff || 'filterValues' in diff) {
            options.page = 1;
        }
        this.optionsState = options;
        if (emitEvent && Object.keys(diff).length > 0) {
            this.optionsChange$.emit(diff);
        }
    }
    updateOptions(options, emitEvent = true) {
        this.setOptions(Object.assign({}, this.optionsState, options), emitEvent);
    }
    /**
     * Returns only different options.
     */
    optionsDiff(curr) {
        const result = {};
        ['page', 'limit', 'sort'].forEach(key => {
            if (key in curr && this[key] !== curr[key]) {
                result[key] = curr[key];
            }
        });
        if ('filterValues' in curr) {
            const filterValues = curr.filterValues;
            if (Object.keys(filterValues).length !== Object.keys(this.filterValues).length) {
                result.filterValues = {};
            }
            Object.keys(filterValues).forEach(key => {
                if (this.filterValues[key] !== filterValues[key]) {
                    if (!('filterValues' in result)) {
                        result.filterValues = {};
                    }
                    result.filterValues[key] = filterValues[key];
                }
            });
        }
        return result;
    }
};
PageCategoryService = tslib_1.__decorate([
    Injectable()
], PageCategoryService);
export { PageCategoryService };
//# sourceMappingURL=page-category.service.js.map