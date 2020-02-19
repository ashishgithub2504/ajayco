import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DirectionService } from '../../../../shared/services/direction.service';
let PageAboutUsComponent = class PageAboutUsComponent {
    constructor(direction) {
        this.direction = direction;
        this.carouselOptions = {
            nav: false,
            dots: true,
            responsive: {
                580: { items: 3, margin: 32 },
                280: { items: 2, margin: 24 },
                0: { items: 1 }
            },
            rtl: this.direction.isRTL()
        };
    }
};
PageAboutUsComponent = tslib_1.__decorate([
    Component({
        selector: 'app-about-us',
        templateUrl: './page-about-us.component.html',
        styleUrls: ['./page-about-us.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [DirectionService])
], PageAboutUsComponent);
export { PageAboutUsComponent };
//# sourceMappingURL=page-about-us.component.js.map