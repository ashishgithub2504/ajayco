import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
let CommentsListComponent = class CommentsListComponent {
    constructor() {
        this.comments = [];
        this.level = 0;
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Array)
], CommentsListComponent.prototype, "comments", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], CommentsListComponent.prototype, "level", void 0);
CommentsListComponent = tslib_1.__decorate([
    Component({
        selector: 'app-comments-list',
        templateUrl: './comments-list.component.html',
        styleUrls: ['./comments-list.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [])
], CommentsListComponent);
export { CommentsListComponent };
//# sourceMappingURL=comments-list.component.js.map