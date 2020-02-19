import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
let CurrencyService = class CurrencyService {
    constructor() {
        this.data = {
            options: {}
        };
        this.changesSubject$ = new Subject();
        this.changes$ = this.changesSubject$.asObservable();
    }
    get options() {
        return this.data.options;
    }
    set options(value) {
        this.data.options = value;
        this.changesSubject$.next(value);
    }
};
CurrencyService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [])
], CurrencyService);
export { CurrencyService };
//# sourceMappingURL=currency.service.js.map