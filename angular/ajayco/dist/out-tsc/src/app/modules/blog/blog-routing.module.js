import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PageCategoryComponent } from './pages/page-category/page-category.component';
import { PagePostComponent } from './pages/page-post/page-post.component';
const routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'category-classic'
    },
    {
        path: 'category-classic',
        component: PageCategoryComponent,
        data: {
            sidebarPosition: 'end',
            layout: 'classic' // one of [classic, grid, list]
        }
    },
    {
        path: 'category-grid',
        component: PageCategoryComponent,
        data: {
            sidebarPosition: 'end',
            layout: 'grid' // one of [classic, grid, list]
        }
    },
    {
        path: 'category-list',
        component: PageCategoryComponent,
        data: {
            sidebarPosition: 'end',
            layout: 'list' // one of [classic, grid, list]
        }
    },
    {
        path: 'category-left-sidebar',
        component: PageCategoryComponent,
        data: {
            sidebarPosition: 'start',
            layout: 'classic' // one of [classic, grid, list]
        }
    },
    {
        path: 'post-classic',
        component: PagePostComponent,
        data: {
            sidebarPosition: 'end',
            layout: 'classic'
        }
    },
    {
        path: 'post-full',
        component: PagePostComponent,
        data: {
            layout: 'full'
        }
    }
];
let BlogRoutingModule = class BlogRoutingModule {
};
BlogRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], BlogRoutingModule);
export { BlogRoutingModule };
//# sourceMappingURL=blog-routing.module.js.map