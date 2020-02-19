import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
let RatingComponent = class RatingComponent {
    constructor() {
        this.value = 0;
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], RatingComponent.prototype, "value", void 0);
RatingComponent = tslib_1.__decorate([
    Component({
        selector: 'app-rating',
        templateUrl: './rating.component.html',
        styleUrls: ['./rating.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [])
], RatingComponent);
export { RatingComponent };
//# sourceMappingURL=rating.component.js.map