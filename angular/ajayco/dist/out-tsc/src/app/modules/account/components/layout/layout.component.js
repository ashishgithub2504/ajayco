import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let LayoutComponent = class LayoutComponent {
    constructor() {
        this.links = [
            { label: 'Dashboard', url: './dashboard' },
            { label: 'Edit Profile', url: './profile' },
            { label: 'Order History', url: './orders' },
            { label: 'Addresses', url: './addresses' },
            { label: 'Password', url: './password' },
            { label: 'Logout', url: './login' }
        ];
    }
};
LayoutComponent = tslib_1.__decorate([
    Component({
        selector: 'app-layout',
        templateUrl: './layout.component.html',
        styleUrls: ['./layout.component.sass']
    }),
    tslib_1.__metadata("design:paramtypes", [])
], LayoutComponent);
export { LayoutComponent };
//# sourceMappingURL=layout.component.js.map