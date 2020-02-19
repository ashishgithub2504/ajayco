import * as tslib_1 from "tslib";
import { Component, Inject, Input, PLATFORM_ID } from '@angular/core';
import { ShopSidebarService } from '../../services/shop-sidebar.service';
import { Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { fromMatchMedia } from '../../../../shared/functions/rxjs/fromMatchMedia';
import { isPlatformBrowser } from '@angular/common';
import { ShopService } from '../../../../shared/api/shop.service';
let ShopSidebarComponent = class ShopSidebarComponent {
    constructor(shop, sidebar, platformId) {
        this.shop = shop;
        this.sidebar = sidebar;
        this.platformId = platformId;
        /**
         * Indicates when filters will be offcanvas.
         * - always: https://stroyka.angular.themeforest.scompiler.ru/themes/default-ltr/classic/shop/category-grid-4-columns-full
         * - mobile: https://stroyka.angular.themeforest.scompiler.ru/themes/default-ltr/classic/shop/category-grid-3-columns-sidebar
         */
        this.offcanvas = 'mobile';
        this.destroy$ = new Subject();
        this.isOpen = false;
    }
    ngOnInit() {
        this.bestsellers$ = this.shop.getBestsellers().pipe(map(x => x.slice(0, 5)));
        this.sidebar.isOpen$.pipe(takeUntil(this.destroy$)).subscribe(isOpen => {
            if (isOpen) {
                this.open();
            }
            else {
                this.close();
            }
        });
        if (isPlatformBrowser(this.platformId)) {
            fromMatchMedia('(max-width: 991px)').pipe(takeUntil(this.destroy$)).subscribe(media => {
                if (this.offcanvas === 'mobile' && this.isOpen && !media.matches) {
                    this.close();
                }
            });
        }
    }
    ngOnDestroy() {
        this.close();
        this.destroy$.next();
        this.destroy$.complete();
    }
    open() {
        if (isPlatformBrowser(this.platformId)) {
            const bodyWidth = document.body.offsetWidth;
            document.body.style.overflow = 'hidden';
            document.body.style.paddingRight = (document.body.offsetWidth - bodyWidth) + 'px';
        }
        this.isOpen = true;
    }
    close() {
        if (isPlatformBrowser(this.platformId)) {
            document.body.style.overflow = '';
            document.body.style.paddingRight = '';
        }
        this.isOpen = false;
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], ShopSidebarComponent.prototype, "offcanvas", void 0);
ShopSidebarComponent = tslib_1.__decorate([
    Component({
        selector: 'app-shop-sidebar',
        templateUrl: './shop-sidebar.component.html',
        styleUrls: ['./shop-sidebar.component.sass']
    }),
    tslib_1.__param(2, Inject(PLATFORM_ID)),
    tslib_1.__metadata("design:paramtypes", [ShopService,
        ShopSidebarService, Object])
], ShopSidebarComponent);
export { ShopSidebarComponent };
//# sourceMappingURL=shop-sidebar.component.js.map