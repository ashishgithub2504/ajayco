import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { DirectionService } from '../../../shared/services/direction.service';
let BlockPostsComponent = class BlockPostsComponent {
    constructor(direction) {
        this.direction = direction;
        this.header = '';
        this.layout = 'list-sm';
        this.posts = [];
        this.carouselDefaultOptions = {
            margin: 30,
            nav: false,
            dots: false,
            loop: true,
            rtl: this.direction.isRTL()
        };
        this.carouselOptionsByLayout = {
            'grid-nl': {
                responsive: {
                    930: { items: 3 },
                    690: { items: 2 },
                    0: { items: 1 }
                }
            },
            'list-sm': {
                responsive: {
                    930: { items: 2 },
                    0: { items: 1 }
                }
            }
        };
    }
    get carouselOptions() {
        return Object.assign({}, this.carouselDefaultOptions, this.carouselOptionsByLayout[this.layout]);
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], BlockPostsComponent.prototype, "header", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], BlockPostsComponent.prototype, "layout", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Array)
], BlockPostsComponent.prototype, "posts", void 0);
BlockPostsComponent = tslib_1.__decorate([
    Component({
        selector: 'app-block-posts',
        templateUrl: './block-posts.component.html',
        styleUrls: ['./block-posts.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [DirectionService])
], BlockPostsComponent);
export { BlockPostsComponent };
//# sourceMappingURL=block-posts.component.js.map