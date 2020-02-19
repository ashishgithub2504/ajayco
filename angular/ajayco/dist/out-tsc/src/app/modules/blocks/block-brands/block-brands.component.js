import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { DirectionService } from '../../../shared/services/direction.service';
import { RootService } from '../../../shared/services/root.service';
let BlockBrandsComponent = class BlockBrandsComponent {
    constructor(root, direction) {
        this.root = root;
        this.direction = direction;
        this.brands = [];
        this.carouselOptions = {
            items: 6,
            nav: false,
            dots: false,
            loop: true,
            responsive: {
                1100: { items: 6 },
                920: { items: 5 },
                680: { items: 4 },
                500: { items: 3 },
                0: { items: 2 }
            },
            rtl: this.direction.isRTL()
        };
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Array)
], BlockBrandsComponent.prototype, "brands", void 0);
BlockBrandsComponent = tslib_1.__decorate([
    Component({
        selector: 'app-block-brands',
        templateUrl: './block-brands.component.html',
        styleUrls: ['./block-brands.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [RootService,
        DirectionService])
], BlockBrandsComponent);
export { BlockBrandsComponent };
//# sourceMappingURL=block-brands.component.js.map