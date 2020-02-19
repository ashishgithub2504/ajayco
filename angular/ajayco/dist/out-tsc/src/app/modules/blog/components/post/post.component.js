import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { posts } from '../../../../../data/blog-posts';
import { postComments } from '../../../../../data/blog-post-comments';
let PostComponent = class PostComponent {
    constructor() {
        this.layout = 'classic';
        this.posts = posts;
        this.comments = postComments;
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], PostComponent.prototype, "layout", void 0);
PostComponent = tslib_1.__decorate([
    Component({
        selector: 'app-post-details',
        templateUrl: './post.component.html',
        styleUrls: ['./post.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [])
], PostComponent);
export { PostComponent };
//# sourceMappingURL=post.component.js.map