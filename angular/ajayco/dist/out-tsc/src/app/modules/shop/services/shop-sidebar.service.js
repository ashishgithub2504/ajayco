import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
let ShopSidebarService = class ShopSidebarService {
    constructor() {
        this.isOpenSubject$ = new Subject();
        this.isOpen$ = this.isOpenSubject$.asObservable();
    }
    open() {
        this.isOpenSubject$.next(true);
    }
    close() {
        this.isOpenSubject$.next(false);
    }
};
ShopSidebarService = tslib_1.__decorate([
    Injectable(),
    tslib_1.__metadata("design:paramtypes", [])
], ShopSidebarService);
export { ShopSidebarService };
//# sourceMappingURL=shop-sidebar.service.js.map