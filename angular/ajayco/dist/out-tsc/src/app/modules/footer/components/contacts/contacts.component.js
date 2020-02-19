import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { StoreService } from '../../../../shared/services/store.service';
let ContactsComponent = class ContactsComponent {
    constructor(store) {
        this.store = store;
    }
};
ContactsComponent = tslib_1.__decorate([
    Component({
        selector: 'app-footer-contacts',
        templateUrl: './contacts.component.html',
        styleUrls: ['./contacts.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [StoreService])
], ContactsComponent);
export { ContactsComponent };
//# sourceMappingURL=contacts.component.js.map