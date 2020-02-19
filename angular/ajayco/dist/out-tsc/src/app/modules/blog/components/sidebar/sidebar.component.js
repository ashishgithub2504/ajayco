import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { posts } from '../../../../../data/blog-posts';
import { latestComments } from '../../../../../data/blog-widget-latest-comments';
import { BlogService } from '../../../../shared/api/blog.service';
let SidebarComponent = class SidebarComponent {
    constructor(blog) {
        this.blog = blog;
        this.position = 'start';
        this.posts = posts;
        this.categories = [];
        this.latestComments = latestComments;
    }
    ngOnInit() {
        this.blog.getCategories(null, 1).subscribe(x => this.categories = x);
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], SidebarComponent.prototype, "position", void 0);
SidebarComponent = tslib_1.__decorate([
    Component({
        selector: 'app-sidebar',
        templateUrl: './sidebar.component.html',
        styleUrls: ['./sidebar.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [BlogService])
], SidebarComponent);
export { SidebarComponent };
//# sourceMappingURL=sidebar.component.js.map