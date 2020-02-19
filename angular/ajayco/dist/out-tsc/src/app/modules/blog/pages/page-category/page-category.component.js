import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { posts } from '../../../../../data/blog-posts';
let PageCategoryComponent = class PageCategoryComponent {
    constructor(route) {
        this.route = route;
        this.destroy$ = new Subject();
        this.sidebarPosition = 'end'; // For LTR scripts "start" is "left" and "end" is "right"
        this.layout = 'classic';
        this.posts = posts;
        this.route.data.pipe(takeUntil(this.destroy$)).subscribe(data => {
            this.sidebarPosition = data.sidebarPosition;
            this.layout = data.layout;
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
};
PageCategoryComponent = tslib_1.__decorate([
    Component({
        selector: 'app-category',
        templateUrl: './page-category.component.html',
        styleUrls: ['./page-category.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [ActivatedRoute])
], PageCategoryComponent);
export { PageCategoryComponent };
//# sourceMappingURL=page-category.component.js.map