import * as tslib_1 from "tslib";
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
let DirectionService = class DirectionService {
    constructor(platformId) {
        this.platformId = platformId;
        this.direction = 'ltr';
        if (isPlatformBrowser(this.platformId)) {
            this.direction = getComputedStyle(document.body).direction;
        }
    }
    get value() {
        return this.direction;
    }
    set value(value) {
        this.direction = value;
        if (isPlatformBrowser(this.platformId)) {
            document.dir = this.direction;
        }
    }
    isLTR() {
        return this.value === 'ltr';
    }
    isRTL() {
        return this.value === 'rtl';
    }
};
DirectionService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__param(0, Inject(PLATFORM_ID)),
    tslib_1.__metadata("design:paramtypes", [Object])
], DirectionService);
export { DirectionService };
//# sourceMappingURL=direction.service.js.map