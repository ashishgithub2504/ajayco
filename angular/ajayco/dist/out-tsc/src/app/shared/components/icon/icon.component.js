import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
let IconComponent = class IconComponent {
    constructor() { }
    set name(value) {
        this.id = value;
    }
    set size(value) {
        const result = /^([0-9]+)(?:x([0-9]+))?$/.exec(value);
        if (result) {
            if (result[2]) {
                this.width = result[1] + 'px';
                this.height = result[2] + 'px';
            }
            else {
                this.width = this.height = result[1] + 'px';
            }
        }
        else {
            this.width = this.height = null;
        }
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String),
    tslib_1.__metadata("design:paramtypes", [String])
], IconComponent.prototype, "name", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String),
    tslib_1.__metadata("design:paramtypes", [String])
], IconComponent.prototype, "size", null);
IconComponent = tslib_1.__decorate([
    Component({
        selector: 'app-icon',
        templateUrl: './icon.component.html',
        styleUrls: ['./icon.component.scss'],
        changeDetection: ChangeDetectionStrategy.OnPush
    }),
    tslib_1.__metadata("design:paramtypes", [])
], IconComponent);
export { IconComponent };
//# sourceMappingURL=icon.component.js.map