import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let StoreService = class StoreService {
    constructor() {
        this.address = '715 Fake Street, New York 10021 USA';
        this.email = 'stroyka@example.com';
        this.phone = ['(800) 060-0730', '(800) 060-0730'];
        this.hours = 'Mon-Sat 10:00pm - 7:00pm';
    }
    get primaryPhone() {
        return this.phone.length > 0 ? this.phone[0] : null;
    }
    get logo() {
        return 'http://phpdev.co.in/ajayco/img/uploads/logo.png';
    }
};
StoreService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [])
], StoreService);
export { StoreService };
//# sourceMappingURL=store.service.js.map