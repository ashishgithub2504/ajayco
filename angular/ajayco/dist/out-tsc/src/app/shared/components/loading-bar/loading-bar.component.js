import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, NgZone, ViewChild } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
let LoadingBarComponent = class LoadingBarComponent {
    constructor(router, zone) {
        this.router = router;
        this.zone = zone;
        this.destroy$ = new Subject();
    }
    get element() {
        return this.bar.nativeElement;
    }
    ngAfterViewInit() {
        this.zone.runOutsideAngular(() => {
            this.router.events.pipe(takeUntil(this.destroy$)).subscribe(event => {
                if (event instanceof NavigationStart) {
                    this.element.classList.remove('loading-bar--start', 'loading-bar--complete', 'loading-bar--reset');
                    this.element.getBoundingClientRect(); // force reflow
                    this.element.classList.add('loading-bar--start');
                }
                if (event instanceof NavigationEnd || event instanceof NavigationError || event instanceof NavigationCancel) {
                    if (this.element.classList.contains('loading-bar--start')) {
                        this.element.classList.remove('loading-bar--start');
                        this.element.classList.add('loading-bar--complete');
                    }
                }
            });
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
};
tslib_1.__decorate([
    ViewChild('bar', { static: false }),
    tslib_1.__metadata("design:type", ElementRef)
], LoadingBarComponent.prototype, "bar", void 0);
LoadingBarComponent = tslib_1.__decorate([
    Component({
        selector: 'app-loading-bar',
        templateUrl: './loading-bar.component.html',
        styleUrls: ['./loading-bar.component.scss'],
        changeDetection: ChangeDetectionStrategy.OnPush
    }),
    tslib_1.__metadata("design:paramtypes", [Router, NgZone])
], LoadingBarComponent);
export { LoadingBarComponent };
//# sourceMappingURL=loading-bar.component.js.map