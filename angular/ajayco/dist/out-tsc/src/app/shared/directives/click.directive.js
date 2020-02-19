import * as tslib_1 from "tslib";
import { Directive, ElementRef, NgZone } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
/**
 * This directive helps to solve issue related to "iOS hover emulation" when first click
 */
let ClickDirective = class ClickDirective {
    constructor(el, zone) {
        this.el = el;
        this.zone = zone;
        this.destroy$ = new Subject();
    }
    get element() {
        return this.el.nativeElement;
    }
    ngOnInit() {
        let clicked = false;
        let identifier = null;
        let x = null;
        let y = null;
        this.zone.runOutsideAngular(() => {
            fromEvent(this.element, 'touchstart').pipe(takeUntil(this.destroy$)).subscribe(event => {
                if (event.touches.length !== 1) {
                    return;
                }
                const touch = event.changedTouches[0];
                clicked = true;
                identifier = touch.identifier;
                x = touch.clientX;
                y = touch.clientY;
                setTimeout(() => {
                    clicked = false;
                    identifier = x = y = null;
                }, 300);
            });
            fromEvent(this.element, 'touchend').pipe(takeUntil(this.destroy$)).subscribe(event => {
                if (clicked && event.changedTouches.length === 1 && event.changedTouches[0].identifier === identifier) {
                    const touch = event.changedTouches[0];
                    const distance = Math.abs(Math.sqrt(Math.pow(x - touch.clientX, 2) +
                        Math.pow(y - touch.clientY, 2)));
                    if (distance < 15) {
                        event.preventDefault();
                        this.element.click();
                    }
                }
                clicked = false;
                identifier = x = y = null;
            });
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
};
ClickDirective = tslib_1.__decorate([
    Directive({
        selector: '[appClick]'
    }),
    tslib_1.__metadata("design:paramtypes", [ElementRef,
        NgZone])
], ClickDirective);
export { ClickDirective };
//# sourceMappingURL=click.directive.js.map