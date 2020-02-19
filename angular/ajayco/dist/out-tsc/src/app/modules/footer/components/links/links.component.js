import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
let LinksComponent = class LinksComponent {
    constructor() {
        this.links = [];
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], LinksComponent.prototype, "header", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Array)
], LinksComponent.prototype, "links", void 0);
LinksComponent = tslib_1.__decorate([
    Component({
        selector: 'app-footer-links',
        templateUrl: './links.component.html',
        styleUrls: ['./links.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [])
], LinksComponent);
export { LinksComponent };
//# sourceMappingURL=links.component.js.map