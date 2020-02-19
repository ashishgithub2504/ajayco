import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { orders } from '../../../../../data/account-orders';
import { addresses } from '../../../../../data/account-addresses';
let PageDashboardComponent = class PageDashboardComponent {
    constructor() {
        this.address = addresses[0];
        this.orders = orders.slice(0, 3);
    }
};
PageDashboardComponent = tslib_1.__decorate([
    Component({
        selector: 'app-page-dashboard',
        templateUrl: './page-dashboard.component.html',
        styleUrls: ['./page-dashboard.component.sass']
    }),
    tslib_1.__metadata("design:paramtypes", [])
], PageDashboardComponent);
export { PageDashboardComponent };
//# sourceMappingURL=page-dashboard.component.js.map