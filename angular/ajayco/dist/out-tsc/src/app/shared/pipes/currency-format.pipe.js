import * as tslib_1 from "tslib";
import { Inject, LOCALE_ID, Pipe } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { CurrencyService } from '../services/currency.service';
let CurrencyFormatPipe = class CurrencyFormatPipe {
    constructor(locale, service) {
        this.locale = locale;
        this.service = service;
        this.currencyPipe = new CurrencyPipe(this.locale);
    }
    transform(value, currencyCode, display, digitsInfo, locale) {
        currencyCode = currencyCode || this.service.options.code;
        display = display || this.service.options.display;
        digitsInfo = digitsInfo || this.service.options.digitsInfo;
        locale = locale || this.service.options.locale;
        return this.currencyPipe.transform(value, currencyCode, display, digitsInfo, locale);
    }
};
CurrencyFormatPipe = tslib_1.__decorate([
    Pipe({
        name: 'currencyFormat',
        pure: false
    }),
    tslib_1.__param(0, Inject(LOCALE_ID)),
    tslib_1.__metadata("design:paramtypes", [String, CurrencyService])
], CurrencyFormatPipe);
export { CurrencyFormatPipe };
//# sourceMappingURL=currency-format.pipe.js.map