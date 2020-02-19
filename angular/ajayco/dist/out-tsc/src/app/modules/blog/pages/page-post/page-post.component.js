import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
let PagePostComponent = class PagePostComponent {
    constructor(route) {
        this.route = route;
        this.destroy$ = new Subject();
        this.sidebarPosition = 'end'; // For LTR scripts "start" is "left" and "end" is "right"
        this.layout = 'classic';
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
PagePostComponent = tslib_1.__decorate([
    Component({
        selector: 'app-post',
        templateUrl: './page-post.component.html',
        styleUrls: ['./page-post.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [ActivatedRoute])
], PagePostComponent);
export { PagePostComponent };
//# sourceMappingURL=page-post.component.js.map