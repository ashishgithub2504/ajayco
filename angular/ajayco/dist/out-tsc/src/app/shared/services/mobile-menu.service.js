import * as tslib_1 from "tslib";
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
let MobileMenuService = class MobileMenuService {
    constructor(platformId) {
        this.platformId = platformId;
        this.openSubject$ = new BehaviorSubject(false);
        this.isOpen$ = this.openSubject$.asObservable();
    }
    open() {
        if (isPlatformBrowser(this.platformId)) {
            const bodyWidth = document.body.offsetWidth;
            document.body.style.overflow = 'hidden';
            document.body.style.paddingRight = (document.body.offsetWidth - bodyWidth) + 'px';
            this.openSubject$.next(true);
        }
    }
    close() {
        if (isPlatformBrowser(this.platformId)) {
            document.body.style.overflow = 'auto';
            document.body.style.paddingRight = '';
            this.openSubject$.next(false);
        }
    }
    toggle() {
        this.openSubject$.next(!this.openSubject$.value);
    }
};
MobileMenuService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__param(0, Inject(PLATFORM_ID)),
    tslib_1.__metadata("design:paramtypes", [Object])
], MobileMenuService);
export { MobileMenuService };
//# sourceMappingURL=mobile-menu.service.js.map