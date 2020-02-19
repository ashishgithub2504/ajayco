import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
let PageHeaderComponent = class PageHeaderComponent {
    constructor() {
        this.breadcrumbs = [];
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], PageHeaderComponent.prototype, "header", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Array)
], PageHeaderComponent.prototype, "breadcrumbs", void 0);
PageHeaderComponent = tslib_1.__decorate([
    Component({
        selector: 'app-page-header',
        templateUrl: './page-header.component.html',
        styleUrls: ['./page-header.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [])
], PageHeaderComponent);
export { PageHeaderComponent };
//# sourceMappingURL=page-header.component.js.map