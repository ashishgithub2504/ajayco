import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { RootService } from '../../../shared/services/root.service';
let WidgetPostsComponent = class WidgetPostsComponent {
    constructor(root) {
        this.root = root;
        this.posts = [];
    }
    postImage(post) {
        return post.image.replace(/^\.jpg$/, '-thumbnail.jpg');
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Array)
], WidgetPostsComponent.prototype, "posts", void 0);
WidgetPostsComponent = tslib_1.__decorate([
    Component({
        selector: 'app-widget-posts',
        templateUrl: './widget-posts.component.html',
        styleUrls: ['./widget-posts.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [RootService])
], WidgetPostsComponent);
export { WidgetPostsComponent };
//# sourceMappingURL=widget-posts.component.js.map