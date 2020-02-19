import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PageAboutUsComponent } from './pages/page-about-us/page-about-us.component';
import { PageContactUsComponent } from './pages/page-contact-us/page-contact-us.component';
import { PageContactUsAltComponent } from './pages/page-contact-us-alt/page-contact-us-alt.component';
import { PageTermsComponent } from './pages/page-terms/page-terms.component';
import { PageFaqComponent } from './pages/page-faq/page-faq.component';
import { PageComponentsComponent } from './pages/page-components/page-components.component';
import { PageTypographyComponent } from './pages/page-typography/page-typography.component';
const routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'about-us'
    },
    {
        path: 'about-us',
        component: PageAboutUsComponent
    },
    {
        path: 'contact-us',
        component: PageContactUsComponent
    },
    {
        path: 'contact-us-alt',
        component: PageContactUsAltComponent
    },
    {
        path: 'terms',
        component: PageTermsComponent
    },
    {
        path: 'faq',
        component: PageFaqComponent
    },
    {
        path: 'components',
        component: PageComponentsComponent
    },
    {
        path: 'typography',
        component: PageTypographyComponent
    }
];
let SiteRoutingModule = class SiteRoutingModule {
};
SiteRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], SiteRoutingModule);
export { SiteRoutingModule };
//# sourceMappingURL=site-routing.module.js.map