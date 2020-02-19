import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { CurrencyService } from '../../../../shared/services/currency.service';
let TopbarComponent = class TopbarComponent {
    constructor(currencyService) {
        this.currencyService = currencyService;
        this.languages = [
            { name: 'English', image: 'language-1' },
            { name: 'French', image: 'language-2' },
            { name: 'German', image: 'language-3' },
            { name: 'Russian', image: 'language-4' },
            { name: 'Italian', image: 'language-5' }
        ];
        this.currencies = [
            { name: '€ Euro', url: '', code: 'EUR', symbol: '€' },
            { name: '£ Pound Sterling', url: '', code: 'GBP', symbol: '£' },
            { name: '$ US Dollar', url: '', code: 'USD', symbol: '$' },
            { name: '₽ Russian Ruble', url: '', code: 'RUB', symbol: '₽' }
        ];
    }
    setCurrency(currency) {
        this.currencyService.options = {
            code: currency.code,
            display: currency.symbol,
        };
    }
};
TopbarComponent = tslib_1.__decorate([
    Component({
        selector: 'app-header-topbar',
        templateUrl: './topbar.component.html',
        styleUrls: ['./topbar.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [CurrencyService])
], TopbarComponent);
export { TopbarComponent };
//# sourceMappingURL=topbar.component.js.map