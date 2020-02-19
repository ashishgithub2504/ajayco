import * as tslib_1 from "tslib";
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject, Subject, timer } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { isPlatformBrowser } from '@angular/common';
let CompareService = class CompareService {
    constructor(platformId) {
        this.platformId = platformId;
        this.data = {
            items: []
        };
        this.destroy$ = new Subject();
        this.itemsSubject$ = new BehaviorSubject([]);
        this.onAddingSubject$ = new Subject();
        this.items$ = this.itemsSubject$.pipe(takeUntil(this.destroy$));
        this.onAdding$ = this.onAddingSubject$.asObservable();
        if (isPlatformBrowser(this.platformId)) {
            this.load();
        }
    }
    add(product) {
        // timer only for demo
        return timer(1000).pipe(map(() => {
            this.onAddingSubject$.next(product);
            const index = this.data.items.findIndex(item => item.id === product.id);
            if (index === -1) {
                this.data.items.push(product);
                this.save();
            }
        }));
    }
    remove(product) {
        // timer only for demo
        return timer(1000).pipe(map(() => {
            const index = this.data.items.findIndex(item => item.id === product.id);
            if (index !== -1) {
                this.data.items.splice(index, 1);
                this.save();
            }
        }));
    }
    save() {
        localStorage.setItem('compareItems', JSON.stringify(this.data.items));
        this.itemsSubject$.next(this.data.items);
    }
    load() {
        const items = localStorage.getItem('compareItems');
        if (items) {
            this.data.items = JSON.parse(items);
            this.itemsSubject$.next(this.data.items);
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
};
CompareService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__param(0, Inject(PLATFORM_ID)),
    tslib_1.__metadata("design:paramtypes", [Object])
], CompareService);
export { CompareService };
//# sourceMappingURL=compare.service.js.map