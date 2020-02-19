import * as tslib_1 from "tslib";
import { Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';
let AlertComponent = class AlertComponent {
    constructor() {
        this.size = null;
        this.dismissible = false;
        this.type = 'info';
        this.close = new EventEmitter();
        this.classAlert = true;
    }
    get classAlertLg() { return this.size === 'lg'; }
    get classAlertDismissible() { return this.dismissible; }
    get classAlertInfo() { return this.type === 'info'; }
    get classAlertPrimary() { return this.type === 'primary'; }
    get classAlertSecondary() { return this.type === 'secondary'; }
    get classAlertSuccess() { return this.type === 'success'; }
    get classAlertDanger() { return this.type === 'danger'; }
    get classAlertWarning() { return this.type === 'warning'; }
    onClose() {
        this.close.emit();
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], AlertComponent.prototype, "size", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], AlertComponent.prototype, "dismissible", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], AlertComponent.prototype, "type", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], AlertComponent.prototype, "close", void 0);
tslib_1.__decorate([
    HostBinding('class.alert'),
    tslib_1.__metadata("design:type", Object)
], AlertComponent.prototype, "classAlert", void 0);
tslib_1.__decorate([
    HostBinding('class.alert-lg'),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [])
], AlertComponent.prototype, "classAlertLg", null);
tslib_1.__decorate([
    HostBinding('class.alert-dismissible'),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [])
], AlertComponent.prototype, "classAlertDismissible", null);
tslib_1.__decorate([
    HostBinding('class.alert-info'),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [])
], AlertComponent.prototype, "classAlertInfo", null);
tslib_1.__decorate([
    HostBinding('class.alert-primary'),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [])
], AlertComponent.prototype, "classAlertPrimary", null);
tslib_1.__decorate([
    HostBinding('class.alert-secondary'),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [])
], AlertComponent.prototype, "classAlertSecondary", null);
tslib_1.__decorate([
    HostBinding('class.alert-success'),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [])
], AlertComponent.prototype, "classAlertSuccess", null);
tslib_1.__decorate([
    HostBinding('class.alert-danger'),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [])
], AlertComponent.prototype, "classAlertDanger", null);
tslib_1.__decorate([
    HostBinding('class.alert-warning'),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [])
], AlertComponent.prototype, "classAlertWarning", null);
AlertComponent = tslib_1.__decorate([
    Component({
        selector: 'app-alert',
        templateUrl: './alert.component.html',
        styleUrls: ['./alert.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [])
], AlertComponent);
export { AlertComponent };
//# sourceMappingURL=alert.component.js.map