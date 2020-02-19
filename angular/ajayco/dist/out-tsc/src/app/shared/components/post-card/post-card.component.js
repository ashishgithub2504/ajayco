import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { RootService } from '../../services/root.service';
let PostCardComponent = class PostCardComponent {
    constructor(root) {
        this.root = root;
        this.layout = null;
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], PostCardComponent.prototype, "post", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], PostCardComponent.prototype, "layout", void 0);
PostCardComponent = tslib_1.__decorate([
    Component({
        selector: 'app-post-card',
        templateUrl: './post-card.component.html',
        styleUrls: ['./post-card.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [RootService])
], PostCardComponent);
export { PostCardComponent };
//# sourceMappingURL=post-card.component.js.map