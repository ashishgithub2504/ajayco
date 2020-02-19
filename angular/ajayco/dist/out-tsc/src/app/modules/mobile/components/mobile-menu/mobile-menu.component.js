import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { MobileMenuService } from '../../../../shared/services/mobile-menu.service';
import { mobileMenu } from '../../../../../data/mobile-menu';
let MobileMenuComponent = class MobileMenuComponent {
    constructor(mobilemenu) {
        this.mobilemenu = mobilemenu;
        this.destroy$ = new Subject();
        this.isOpen = false;
        this.links = mobileMenu;
    }
    ngOnInit() {
        this.mobilemenu.isOpen$.pipe(takeUntil(this.destroy$)).subscribe(isOpen => this.isOpen = isOpen);
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    onItemClick(event) {
        if (event.type === 'link') {
            this.mobilemenu.close();
        }
        // if (event.data && event.data.language) {
        //     console.log(event.data.language); // change language
        // }
    }
};
MobileMenuComponent = tslib_1.__decorate([
    Component({
        selector: 'app-mobile-menu',
        templateUrl: './mobile-menu.component.html',
        styleUrls: ['./mobile-menu.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [MobileMenuService])
], MobileMenuComponent);
export { MobileMenuComponent };
//# sourceMappingURL=mobile-menu.component.js.map