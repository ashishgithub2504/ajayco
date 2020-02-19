import * as tslib_1 from "tslib";
import { Directive, ElementRef, Inject, NgZone, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { fromEvent } from 'rxjs';
import { filter, map, take, takeUntil } from 'rxjs/operators';
/**
 * This directive adds the "owl-prevent-click" class to the .owl-carousel element when dragging.
 * When the class "owl-prevent-click" is applied to an element, a pseudo-element is created and
 * a mouseup event occurs on it, which prevents clicking.
 */
let OwlPreventClickDirective = class OwlPreventClickDirective {
    constructor(platformId, elementRef, zone) {
        this.platformId = platformId;
        this.elementRef = elementRef;
        this.zone = zone;
    }
    get element() {
        return this.elementRef.nativeElement;
    }
    ngOnInit() {
        if (isPlatformBrowser(this.platformId)) {
            this.zone.runOutsideAngular(() => {
                const children = [].slice.call(this.element.children);
                const owlCarouseElement = children.find(element => element.classList.contains('owl-carousel'));
                fromEvent(owlCarouseElement, 'mousedown').subscribe(mouseDownEvent => {
                    const timeout = setTimeout(() => {
                        owlCarouseElement.classList.add('owl-prevent-click');
                    }, 250);
                    const mouseUpEvent$ = fromEvent(document, 'mouseup').pipe(take(1));
                    fromEvent(document, 'mousemove').pipe(takeUntil(mouseUpEvent$), map(mouseMoveEvent => Math.abs(Math.sqrt(Math.pow(mouseDownEvent.clientX - mouseMoveEvent.clientX, 2) +
                        Math.pow(mouseDownEvent.clientY - mouseMoveEvent.clientY, 2)))), filter(distance => distance > 15), take(1)).subscribe(() => {
                        owlCarouseElement.classList.add('owl-prevent-click');
                    });
                    mouseUpEvent$.subscribe(() => {
                        owlCarouseElement.classList.remove('owl-prevent-click');
                        clearTimeout(timeout);
                    });
                });
            });
        }
    }
};
OwlPreventClickDirective = tslib_1.__decorate([
    Directive({
        selector: '[appOwlPreventClick]'
    }),
    tslib_1.__param(0, Inject(PLATFORM_ID)),
    tslib_1.__metadata("design:paramtypes", [Object, ElementRef,
        NgZone])
], OwlPreventClickDirective);
export { OwlPreventClickDirective };
//# sourceMappingURL=owl-prevent-click.directive.js.map