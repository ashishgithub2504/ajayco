import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
let WidgetCommentsComponent = class WidgetCommentsComponent {
    constructor() {
        this.comments = [];
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Array)
], WidgetCommentsComponent.prototype, "comments", void 0);
WidgetCommentsComponent = tslib_1.__decorate([
    Component({
        selector: 'app-widget-comments',
        templateUrl: './widget-comments.component.html',
        styleUrls: ['./widget-comments.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [])
], WidgetCommentsComponent);
export { WidgetCommentsComponent };
//# sourceMappingURL=widget-comments.component.js.map