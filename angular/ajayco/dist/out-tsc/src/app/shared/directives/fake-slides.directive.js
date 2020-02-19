import * as tslib_1 from "tslib";
import { Directive, ElementRef, Input } from '@angular/core';
import { EventManager } from '@angular/platform-browser';
let FakeSlidesDirective = class FakeSlidesDirective {
    constructor(eventManager, el) {
        this.eventManager = eventManager;
        this.el = el;
        this.appFakeSlides = 0;
        this.slides = [];
        this.slidesCount = 0;
    }
    ngOnInit() {
        this.resizeHandler = this.eventManager.addGlobalEventListener('window', 'resize', () => this.calc());
        this.calc();
    }
    calc() {
        let newFakeSlidesCount = 0;
        if (this.options) {
            let match = -1;
            const viewport = this.el.nativeElement.querySelector('.owl-carousel').clientWidth;
            const overwrites = this.options.responsive;
            if (overwrites) {
                for (const key in overwrites) {
                    if (overwrites.hasOwnProperty(key)) {
                        if (+key <= viewport && +key > match) {
                            match = Number(key);
                        }
                    }
                }
            }
            if (match >= 0) {
                const items = overwrites[match].items;
                newFakeSlidesCount = Math.max(0, items - this.appFakeSlides);
            }
            else if (this.options.items) {
                newFakeSlidesCount = Math.max(0, this.options.items - this.appFakeSlides);
            }
        }
        if (this.slidesCount !== newFakeSlidesCount) {
            this.slides = [];
            this.slidesCount = newFakeSlidesCount;
            for (let i = 0; i < newFakeSlidesCount; i++) {
                this.slides.push(i);
            }
        }
    }
    ngOnChanges(changes) {
        this.calc();
    }
    ngOnDestroy() {
        if (this.resizeHandler) {
            this.resizeHandler();
        }
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], FakeSlidesDirective.prototype, "options", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], FakeSlidesDirective.prototype, "appFakeSlides", void 0);
FakeSlidesDirective = tslib_1.__decorate([
    Directive({
        selector: '[appFakeSlides]',
        exportAs: 'appFakeSlides'
    }),
    tslib_1.__metadata("design:paramtypes", [EventManager,
        ElementRef])
], FakeSlidesDirective);
export { FakeSlidesDirective };
//# sourceMappingURL=fake-slides.directive.js.map