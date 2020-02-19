import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
// modules (angular)
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// modules
import { SharedModule } from '../../shared/shared.module';
// components
import { ContactsComponent } from './components/contacts/contacts.component';
import { FooterComponent } from './footer.component';
import { LinksComponent } from './components/links/links.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
let FooterModule = class FooterModule {
};
FooterModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            ContactsComponent,
            FooterComponent,
            LinksComponent,
            NewsletterComponent
        ],
        imports: [
            // modules (angular)
            CommonModule,
            RouterModule,
            // modules
            SharedModule
        ],
        exports: [
            FooterComponent
        ]
    })
], FooterModule);
export { FooterModule };
//# sourceMappingURL=footer.module.js.map