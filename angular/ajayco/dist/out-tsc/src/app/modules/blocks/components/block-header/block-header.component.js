import * as tslib_1 from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
let BlockHeaderComponent = class BlockHeaderComponent {
    constructor() {
        this.arrows = false;
        this.groups = [];
        this.next = new EventEmitter();
        this.prev = new EventEmitter();
        this.groupChange = new EventEmitter();
    }
    setGroup(group) {
        this.groups.forEach(g => g.current = g === group);
        this.groupChange.emit(group);
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], BlockHeaderComponent.prototype, "header", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], BlockHeaderComponent.prototype, "arrows", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Array)
], BlockHeaderComponent.prototype, "groups", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], BlockHeaderComponent.prototype, "next", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], BlockHeaderComponent.prototype, "prev", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], BlockHeaderComponent.prototype, "groupChange", void 0);
BlockHeaderComponent = tslib_1.__decorate([
    Component({
        selector: 'app-block-header',
        templateUrl: './block-header.component.html',
        styleUrls: ['./block-header.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [])
], BlockHeaderComponent);
export { BlockHeaderComponent };
//# sourceMappingURL=block-header.component.js.map