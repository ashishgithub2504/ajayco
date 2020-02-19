import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
// modules (angular)
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// modules
import { SharedModule } from '../../shared/shared.module';
// components
import { MobileHeaderComponent } from './components/mobile-header/mobile-header.component';
import { MobileLinksComponent } from './components/mobile-links/mobile-links.component';
import { MobileMenuComponent } from './components/mobile-menu/mobile-menu.component';
let MobileModule = class MobileModule {
};
MobileModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            // components
            MobileHeaderComponent,
            MobileLinksComponent,
            MobileMenuComponent
        ],
        imports: [
            // modules (angular)
            CommonModule,
            RouterModule,
            // modules
            SharedModule
        ],
        exports: [
            // components
            MobileHeaderComponent,
            MobileMenuComponent
        ]
    })
], MobileModule);
export { MobileModule };
//# sourceMappingURL=mobile.module.js.map