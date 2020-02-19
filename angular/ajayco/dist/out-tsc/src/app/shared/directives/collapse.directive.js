import * as tslib_1 from "tslib";
import { ContentChild, Directive, ElementRef, Input, NgZone } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
let CollapseContentDirective = class CollapseContentDirective {
    constructor(el, zone) {
        this.el = el;
        this.zone = zone;
        this.destroy$ = new Subject();
    }
    get element() {
        return this.el.nativeElement;
    }
    ngOnInit() {
        this.zone.runOutsideAngular(() => {
            fromEvent(this.element, 'transitionend').pipe(takeUntil(this.destroy$)).subscribe(event => {
                if (event.propertyName === 'height') {
                    this.element.style.height = '';
                }
            });
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
};
CollapseContentDirective = tslib_1.__decorate([
    Directive({
        selector: '[appCollapseContent]'
    }),
    tslib_1.__metadata("design:paramtypes", [ElementRef,
        NgZone])
], CollapseContentDirective);
export { CollapseContentDirective };
let CollapseItemDirective = class CollapseItemDirective {
    constructor(el) {
        this.el = el;
    }
    get class() {
        return this.appCollapseItem;
    }
    get isOpen() {
        return this.element.classList.contains(this.class);
    }
    get element() {
        return this.el.nativeElement;
    }
    toggle() {
        if (this.isOpen) {
            this.close();
        }
        else {
            this.open();
        }
    }
    open() {
        if (this.content) {
            const startHeight = this.content.element.getBoundingClientRect().height;
            this.element.classList.add(this.class);
            const endHeight = this.content.element.getBoundingClientRect().height;
            this.content.element.style.height = `${startHeight}px`;
            this.element.getBoundingClientRect(); // force reflow
            this.content.element.style.height = `${endHeight}px`;
        }
        else {
            this.element.classList.add(this.class);
        }
    }
    close() {
        if (this.content) {
            const startHeight = this.content.element.getBoundingClientRect().height;
            this.content.element.style.height = `${startHeight}px`;
            this.element.classList.remove(this.class);
            this.element.getBoundingClientRect(); // force reflow
            this.content.element.style.height = '';
        }
        else {
            this.element.classList.remove(this.class);
        }
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], CollapseItemDirective.prototype, "appCollapseItem", void 0);
tslib_1.__decorate([
    ContentChild(CollapseContentDirective, { static: false }),
    tslib_1.__metadata("design:type", CollapseContentDirective)
], CollapseItemDirective.prototype, "content", void 0);
CollapseItemDirective = tslib_1.__decorate([
    Directive({
        selector: '[appCollapseItem]',
        exportAs: 'appCollapseItem'
    }),
    tslib_1.__metadata("design:paramtypes", [ElementRef])
], CollapseItemDirective);
export { CollapseItemDirective };
let CollapseDirective = class CollapseDirective {
};
CollapseDirective = tslib_1.__decorate([
    Directive({
        selector: '[appCollapse]'
    })
], CollapseDirective);
export { CollapseDirective };
//# sourceMappingURL=collapse.directive.js.map