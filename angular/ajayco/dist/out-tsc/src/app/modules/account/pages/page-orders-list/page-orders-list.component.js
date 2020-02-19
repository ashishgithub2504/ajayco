import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { orders } from '../../../../../data/account-orders';
let PageOrdersListComponent = class PageOrdersListComponent {
    constructor() {
        this.orders = orders;
    }
};
PageOrdersListComponent = tslib_1.__decorate([
    Component({
        selector: 'app-page-orders-list',
        templateUrl: './page-orders-list.component.html',
        styleUrls: ['./page-orders-list.component.sass']
    }),
    tslib_1.__metadata("design:paramtypes", [])
], PageOrdersListComponent);
export { PageOrdersListComponent };
//# sourceMappingURL=page-orders-list.component.js.map