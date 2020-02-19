import * as tslib_1 from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
let MenuComponent = class MenuComponent {
    constructor() {
        this.layout = 'classic';
        this.items = [];
        this.itemClick = new EventEmitter();
        this.hoveredItem = null;
    }
    onItemMouseEnter(item) {
        this.hoveredItem = item;
    }
    onItemMouseLeave(item) {
        if (this.hoveredItem === item) {
            this.hoveredItem = null;
        }
    }
    onSubItemClick(item) {
        this.hoveredItem = null;
        this.itemClick.emit(item);
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], MenuComponent.prototype, "layout", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Array)
], MenuComponent.prototype, "items", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], MenuComponent.prototype, "itemClick", void 0);
MenuComponent = tslib_1.__decorate([
    Component({
        selector: 'app-header-menu',
        templateUrl: './menu.component.html',
        styleUrls: ['./menu.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [])
], MenuComponent);
export { MenuComponent };
//# sourceMappingURL=menu.component.js.map