import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Subject, timer } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
let QuickviewService = class QuickviewService {
    constructor() {
        this.destroy$ = new Subject();
        this.showSubject$ = new Subject();
        this.show$ = this.showSubject$.pipe(takeUntil(this.destroy$));
    }
    show(product) {
        // timer only for demo
        return timer(1000).pipe(map(() => {
            this.showSubject$.next(product);
        }));
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
};
QuickviewService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [])
], QuickviewService);
export { QuickviewService };
//# sourceMappingURL=quickview.service.js.map