import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
let BlockFeaturesComponent = class BlockFeaturesComponent {
    constructor() {
        this.layout = 'classic';
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], BlockFeaturesComponent.prototype, "layout", void 0);
BlockFeaturesComponent = tslib_1.__decorate([
    Component({
        selector: 'app-block-features',
        templateUrl: './block-features.component.html',
        styleUrls: ['./block-features.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [])
], BlockFeaturesComponent);
export { BlockFeaturesComponent };
//# sourceMappingURL=block-features.component.js.map