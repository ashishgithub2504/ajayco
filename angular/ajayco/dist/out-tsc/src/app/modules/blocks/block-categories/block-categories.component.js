import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { RootService } from '../../../shared/services/root.service';
let BlockCategoriesComponent = class BlockCategoriesComponent {
    constructor(root) {
        this.root = root;
        this.header = '';
        this.layout = 'classic';
        this.categories = [];
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], BlockCategoriesComponent.prototype, "header", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], BlockCategoriesComponent.prototype, "layout", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Array)
], BlockCategoriesComponent.prototype, "categories", void 0);
BlockCategoriesComponent = tslib_1.__decorate([
    Component({
        selector: 'app-block-categories',
        templateUrl: './block-categories.component.html',
        styleUrls: ['./block-categories.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [RootService])
], BlockCategoriesComponent);
export { BlockCategoriesComponent };
//# sourceMappingURL=block-categories.component.js.map