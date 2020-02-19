import * as tslib_1 from "tslib";
import { Directive, ElementRef, Inject, Input, NgZone, PLATFORM_ID } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { takeUntil } from 'rxjs/operators';
let DropdownDirective = class DropdownDirective {
    constructor(platformId, el, zone) {
        this.platformId = platformId;
        this.el = el;
        this.zone = zone;
        this.destroy$ = new Subject();
        this.appDropdown = '';
        if (isPlatformBrowser(this.platformId)) {
            this.zone.runOutsideAngular(() => {
                fromEvent(document, 'mousedown').pipe(takeUntil(this.destroy$)).subscribe((event) => {
                    if (!el.nativeElement.contains(event.target)) {
                        this.close();
                    }
                });
            });
        }
    }
    get isOpen() {
        return this.element.classList.contains(this.appDropdown);
    }
    get element() {
        return this.el.nativeElement;
    }
    toggle(force) {
        this.element.classList.toggle(this.appDropdown, force);
    }
    close() {
        this.toggle(false);
    }
    open() {
        this.toggle(true);
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], DropdownDirective.prototype, "appDropdown", void 0);
DropdownDirective = tslib_1.__decorate([
    Directive({
        selector: '[appDropdown]',
        exportAs: 'appDropdown'
    }),
    tslib_1.__param(0, Inject(PLATFORM_ID)),
    tslib_1.__metadata("design:paramtypes", [Object, ElementRef,
        NgZone])
], DropdownDirective);
export { DropdownDirective };
//# sourceMappingURL=dropdown.directive.js.map