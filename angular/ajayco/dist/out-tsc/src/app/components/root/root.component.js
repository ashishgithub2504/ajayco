import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
let RootComponent = class RootComponent {
    constructor(router, route) {
        this.router = router;
        this.route = route;
        this.route.data.subscribe(data => this.headerLayout = data.headerLayout);
    }
};
RootComponent = tslib_1.__decorate([
    Component({
        selector: 'app-main',
        templateUrl: './root.component.html',
        styleUrls: ['./root.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [Router,
        ActivatedRoute])
], RootComponent);
export { RootComponent };
//# sourceMappingURL=root.component.js.map