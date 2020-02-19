import * as tslib_1 from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
let MobileLinksComponent = class MobileLinksComponent {
    constructor() {
        this.links = [];
        this.level = 0;
        this.itemClick = new EventEmitter();
    }
    onItemClick(item) {
        this.itemClick.emit(item);
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Array)
], MobileLinksComponent.prototype, "links", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], MobileLinksComponent.prototype, "level", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], MobileLinksComponent.prototype, "itemClick", void 0);
MobileLinksComponent = tslib_1.__decorate([
    Component({
        selector: 'app-mobile-links',
        templateUrl: './mobile-links.component.html',
        styleUrls: ['./mobile-links.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [])
], MobileLinksComponent);
export { MobileLinksComponent };
//# sourceMappingURL=mobile-links.component.js.map