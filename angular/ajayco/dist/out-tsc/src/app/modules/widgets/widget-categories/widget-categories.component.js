import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { RootService } from '../../../shared/services/root.service';
let WidgetCategoriesComponent = class WidgetCategoriesComponent {
    constructor(root) {
        this.root = root;
        this.location = 'blog';
        this.categories = [];
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], WidgetCategoriesComponent.prototype, "location", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Array)
], WidgetCategoriesComponent.prototype, "categories", void 0);
WidgetCategoriesComponent = tslib_1.__decorate([
    Component({
        selector: 'app-widget-categories',
        templateUrl: './widget-categories.component.html',
        styleUrls: ['./widget-categories.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [RootService])
], WidgetCategoriesComponent);
export { WidgetCategoriesComponent };
//# sourceMappingURL=widget-categories.component.js.map