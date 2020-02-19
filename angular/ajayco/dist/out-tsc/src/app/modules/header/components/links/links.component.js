import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { navigation } from '../../../../../data/header-navigation';
import { DirectionService } from '../../../../shared/services/direction.service';
let LinksComponent = class LinksComponent {
    constructor(direction) {
        this.direction = direction;
        this.items = navigation;
        this.hoveredItem = null;
    }
    onItemMouseEnter(item, event) {
        this.hoveredItem = item;
        if (!(event.target instanceof HTMLElement)) {
            return;
        }
        const element = event.target;
        const megamenu = element.querySelector('.nav-links__megamenu');
        if (!megamenu) {
            return;
        }
        const container = megamenu.offsetParent;
        const containerWidth = container.getBoundingClientRect().width;
        const megamenuWidth = megamenu.getBoundingClientRect().width;
        if (this.direction.isRTL()) {
            const itemPosition = containerWidth - (element.offsetLeft + element.offsetWidth);
            const megamenuPosition = Math.round(Math.min(itemPosition, containerWidth - megamenuWidth));
            megamenu.style.right = megamenuPosition + 'px';
        }
        else {
            const itemPosition = element.offsetLeft;
            const megamenuPosition = Math.round(Math.min(itemPosition, containerWidth - megamenuWidth));
            megamenu.style.left = megamenuPosition + 'px';
        }
    }
    onItemMouseLeave(item) {
        if (this.hoveredItem === item) {
            this.hoveredItem = null;
        }
    }
    onSubItemClick() {
        this.hoveredItem = null;
    }
};
LinksComponent = tslib_1.__decorate([
    Component({
        selector: 'app-header-links',
        templateUrl: './links.component.html',
        styleUrls: ['./links.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [DirectionService])
], LinksComponent);
export { LinksComponent };
//# sourceMappingURL=links.component.js.map