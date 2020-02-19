import * as tslib_1 from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
let MegamenuComponent = class MegamenuComponent {
    constructor() {
        this.departments = false;
        this.itemClick = new EventEmitter();
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], MegamenuComponent.prototype, "menu", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], MegamenuComponent.prototype, "departments", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], MegamenuComponent.prototype, "itemClick", void 0);
MegamenuComponent = tslib_1.__decorate([
    Component({
        selector: 'app-header-megamenu',
        templateUrl: './megamenu.component.html',
        styleUrls: ['./megamenu.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [])
], MegamenuComponent);
export { MegamenuComponent };
//# sourceMappingURL=megamenu.component.js.map