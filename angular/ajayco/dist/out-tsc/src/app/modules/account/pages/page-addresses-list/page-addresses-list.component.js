import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { addresses } from '../../../../../data/account-addresses';
let PageAddressesListComponent = class PageAddressesListComponent {
    constructor() {
        this.addresses = addresses;
    }
};
PageAddressesListComponent = tslib_1.__decorate([
    Component({
        selector: 'app-page-addresses-list',
        templateUrl: './page-addresses-list.component.html',
        styleUrls: ['./page-addresses-list.component.sass']
    }),
    tslib_1.__metadata("design:paramtypes", [])
], PageAddressesListComponent);
export { PageAddressesListComponent };
//# sourceMappingURL=page-addresses-list.component.js.map