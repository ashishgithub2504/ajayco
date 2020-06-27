(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/root/root.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/root/root.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-loading-bar></app-loading-bar>\r\n\r\n<app-quickview></app-quickview>\r\n\r\n<!-- mobilemenu -->\r\n<app-mobile-menu></app-mobile-menu>\r\n<!-- mobilemenu / end -->\r\n\r\n<!-- site -->\r\n<div class=\"site\">\r\n    <!-- mobile site__header -->\r\n    <header class=\"site__header d-lg-none\">\r\n        <app-mobile-header></app-mobile-header>\r\n    </header>\r\n    <!-- mobile site__header / end -->\r\n\r\n    <!-- desktop site__header -->\r\n    <header *ngIf=\"headerLayout\" class=\"site__header d-lg-block d-none\">\r\n        <app-header [layout]=\"headerLayout\"></app-header>\r\n    </header>\r\n    <!-- desktop site__header / end -->\r\n\r\n    <!-- site__body -->\r\n    <div class=\"site__body\">\r\n        <router-outlet></router-outlet>\r\n    </div>\r\n    <!-- site__body / end -->\r\n\r\n    <!-- site__footer -->\r\n    <footer class=\"site__footer\">\r\n        <app-footer></app-footer>\r\n    </footer>\r\n    <!-- site__footer / end -->\r\n</div>\r\n<!-- site / end -->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/blocks/block-banner/block-banner.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/blocks/block-banner/block-banner.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- .block-banner -->\r\n<div class=\"block block-banner\">\r\n    <div class=\"container\">\r\n        <a href=\"\" class=\"block-banner__body\">\r\n            <div class=\"block-banner__image block-banner__image--desktop\" style=\"background-image: url('assets/images/banners/banner-1.jpg')\"></div>\r\n            <div class=\"block-banner__image block-banner__image--mobile\" style=\"background-image: url('assets/images/banners/banner-1-mobile.jpg')\"></div>\r\n            <div class=\"block-banner__title\">Hundreds <br class=\"block-banner__mobile-br\"> Hand Tools</div>\r\n            <div class=\"block-banner__text\">Hammers, Chisels, Universal Pliers, Nippers, Jigsaws, Saws</div>\r\n            <div class=\"block-banner__button\">\r\n                <span class=\"btn btn-sm btn-primary\">Shop Now</span>\r\n            </div>\r\n        </a>\r\n    </div>\r\n</div>\r\n<!-- .block-banner / end -->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/blocks/block-brands/block-brands.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/blocks/block-brands/block-brands.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- .block-brands -->\r\n<div class=\"block block-brands\" *ngIf=\"brands?.length\">\r\n    <div class=\"container\">\r\n        <div class=\"block-brands__slider\">\r\n            <owl-carousel-o [options]=\"carouselOptions\" appOwlPreventClick>\r\n                <ng-container *ngFor=\"let brand of brands\">\r\n                    <ng-template carouselSlide>\r\n                        <div class=\"block-brands__item\">\r\n                            <a [routerLink]=\"root.brand(brand)\"><img [src]=\"brand.image\" [alt]=\"brand.name\"></a>\r\n                        </div>\r\n                    </ng-template>\r\n                </ng-container>\r\n            </owl-carousel-o>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- .block-brands / end -->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/blocks/block-categories/block-categories.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/blocks/block-categories/block-categories.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- .block-categories -->\r\n<div class=\"block block--highlighted block-categories block-categories--layout--{{ layout }}\">\r\n    <div class=\"container\">\r\n        <app-block-header [header]=\"header\"></app-block-header>\r\n\r\n        <div class=\"block-categories__list\">\r\n            <div *ngFor=\"let category of categories\" class=\"block-categories__item category-card category-card--layout--{{ layout }}\">\r\n                <div class=\"category-card__body\">\r\n                    <div class=\"category-card__image\">\r\n                        <a [routerLink]=\"root.category(category)\"><img [src]=\"category.image\" alt=\"\"></a>\r\n                    </div>\r\n                    <div class=\"category-card__content\">\r\n                        <div class=\"category-card__name\">\r\n                            <a [routerLink]=\"root.category(category)\">{{ category.name }}</a>\r\n                        </div>\r\n                        <ul class=\"category-card__links\">\r\n                            <li *ngFor=\"let category of category.children.slice(0, 5)\">\r\n                                <a [routerLink]=\"root.category(category)\">{{ category.name }}</a>\r\n                            </li>\r\n                        </ul>\r\n                        <div class=\"category-card__all\">\r\n                            <a [routerLink]=\"root.category(category)\">Show All</a>\r\n                        </div>\r\n                        <div class=\"category-card__products\">\r\n                            {{ category.items }} Products\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- .block-categories / end -->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/blocks/block-features/block-features.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/blocks/block-features/block-features.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- .block-features -->\r\n<div class=\"block block-features block-features--layout--{{ layout }}\">\r\n    <div class=\"container\">\r\n        <div class=\"block-features__list\">\r\n            <div class=\"block-features__item\">\r\n                <div class=\"block-features__icon\">\r\n                    <app-icon name=\"fi-free-delivery-48\" size=\"48\"></app-icon>\r\n                </div>\r\n                <div class=\"block-features__content\">\r\n                    <div class=\"block-features__title\">Free Shipping</div>\r\n                    <div class=\"block-features__subtitle\">For orders from $50</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"block-features__divider\"></div>\r\n            <div class=\"block-features__item\">\r\n                <div class=\"block-features__icon\">\r\n                    <app-icon name=\"fi-24-hours-48\" size=\"48\"></app-icon>\r\n                </div>\r\n                <div class=\"block-features__content\">\r\n                    <div class=\"block-features__title\">Support 24/7</div>\r\n                    <div class=\"block-features__subtitle\">Call us anytime</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"block-features__divider\"></div>\r\n            <div class=\"block-features__item\">\r\n                <div class=\"block-features__icon\">\r\n                    <app-icon name=\"fi-payment-security-48\" size=\"48\"></app-icon>\r\n                </div>\r\n                <div class=\"block-features__content\">\r\n                    <div class=\"block-features__title\">100% Safety</div>\r\n                    <div class=\"block-features__subtitle\">Only secure payments</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"block-features__divider\"></div>\r\n            <div class=\"block-features__item\">\r\n                <div class=\"block-features__icon\">\r\n                    <app-icon name=\"fi-tag-48\" size=\"48\"></app-icon>\r\n                </div>\r\n                <div class=\"block-features__content\">\r\n                    <div class=\"block-features__title\">Hot Offers</div>\r\n                    <div class=\"block-features__subtitle\">Discounts up to 90%</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- .block-features / end -->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/blocks/block-map/block-map.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/blocks/block-map/block-map.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"block-map block\">\n    <div class=\"block-map__body\">\n        <iframe src='https://maps.google.com/maps?q=Holbrook-Palmer%20Park&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed'\n                frameborder='0' scrolling='no' marginheight='0' marginwidth='0'></iframe>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/blocks/block-posts/block-posts.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/blocks/block-posts/block-posts.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- .block-posts -->\r\n<div class=\"block block-posts block-posts--layout--{{ layout }}\" [attr.data-layout]=\"layout\">\r\n    <div class=\"container\">\r\n        <app-block-header [header]=\"header\" [arrows]=\"true\" (prev)=\"carousel.prev()\" (next)=\"carousel.next()\"></app-block-header>\r\n\r\n        <div class=\"block-posts__slider\">\r\n            <owl-carousel-o [options]=\"carouselOptions\" appOwlPreventClick #carousel>\r\n                <ng-container *ngFor=\"let post of posts\">\r\n                    <ng-template carouselSlide>\r\n                        <app-post-card [post]=\"post\"></app-post-card>\r\n                    </ng-template>\r\n                </ng-container>\r\n            </owl-carousel-o>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- .block-posts / end -->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/blocks/block-product-columns/block-product-columns-item/block-product-columns-item.component.html":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/blocks/block-product-columns/block-product-columns-item/block-product-columns-item.component.html ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-block-header [header]=\"header\"></app-block-header>\r\n\r\n<div class=\"block-product-columns__column\">\r\n    <div *ngFor=\"let product of products\" class=\"block-product-columns__item\">\r\n        <app-product-card [product]=\"product\" layout=\"horizontal\"></app-product-card>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/blocks/block-product-columns/block-product-columns.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/blocks/block-product-columns/block-product-columns.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- .block-product-columns -->\r\n<div class=\"block block-product-columns d-lg-block d-none\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <ng-content select=\"app-block-product-columns-item\"></ng-content>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- .block-product-columns / end -->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/blocks/block-products-carousel/block-products-carousel.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/blocks/block-products-carousel/block-products-carousel.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- .block-products-carousel -->\r\n<div\r\n    class=\"block block-products-carousel\"\r\n    [ngClass]=\"{\r\n        'block-products-carousel--loading': loading,\r\n        'block-products-carousel--has-items': !!columns?.length\r\n    }\"\r\n    [attr.data-layout]=\"layout\"\r\n>\r\n    <div [ngClass]=\"{'container': !withSidebar}\">\r\n        <app-block-header [header]=\"header\" [groups]=\"groups\" [arrows]=\"true\" (next)=\"carousel.next()\" (prev)=\"carousel.prev()\" (groupChange)=\"groupChange.emit($event)\"></app-block-header>\r\n\r\n        <div class=\"block-products-carousel__slider\">\r\n            <div class=\"block-products-carousel__preloader\"></div>\r\n\r\n            <owl-carousel-o [options]=\"carouselOptions\" appOwlPreventClick #carousel>\r\n                <ng-container *ngFor=\"let column of columns\">\r\n                    <ng-template carouselSlide>\r\n                        <div class=\"block-products-carousel__column\">\r\n                            <div *ngFor=\"let product of column\" class=\"block-products-carousel__cell\">\r\n                                <app-product-card [product]=\"product\"></app-product-card>\r\n                            </div>\r\n                        </div>\r\n                    </ng-template>\r\n                </ng-container>\r\n            </owl-carousel-o>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- .block-products-carousel / end -->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/blocks/block-products/block-products.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/blocks/block-products/block-products.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- .block-products -->\r\n<div class=\"block block-products block-products--layout--{{ layout }}\">\r\n    <div class=\"container\">\r\n        <app-block-header [header]=\"header\"></app-block-header>\r\n\r\n        <div class=\"block-products__body\">\r\n            <ng-template #largeTemplate>\r\n                <ng-container *ngIf=\"large !== null\">\r\n                    <div class=\"block-products__featured\">\r\n                        <div class=\"block-products__featured-item\">\r\n                            <app-product-card [product]=\"large\"></app-product-card>\r\n                        </div>\r\n                    </div>\r\n                </ng-container>\r\n            </ng-template>\r\n            <ng-template #smallsTemplate>\r\n                <div *ngIf=\"smalls\" class=\"block-products__list\">\r\n                    <div *ngFor=\"let product of smalls\" class=\"block-products__list-item\">\r\n                        <app-product-card [product]=\"product\"></app-product-card>\r\n                    </div>\r\n                </div>\r\n            </ng-template>\r\n\r\n            <ng-container *ngIf=\"layout === 'large-last'\" [ngTemplateOutlet]=\"smallsTemplate\"></ng-container>\r\n            <ng-container [ngTemplateOutlet]=\"largeTemplate\"></ng-container>\r\n            <ng-container *ngIf=\"layout === 'large-first'\" [ngTemplateOutlet]=\"smallsTemplate\"></ng-container>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- .block-products / end -->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/blocks/block-slideshow/block-slideshow.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/blocks/block-slideshow/block-slideshow.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- .block-slideshow -->\r\n<div class=\"block-slideshow block\" [ngClass]=\"{'block-slideshow--layout--full': !withDepartments, 'block-slideshow--layout--with-departments': withDepartments}\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div *ngIf=\"withDepartments\" class=\"col-3 d-lg-block d-none\" appDepartmentsArea></div>\r\n            <div class=\"col-12\" [ngClass]=\"{'col-lg-12': !withDepartments, 'col-lg-9': withDepartments}\">\r\n                <div class=\"block-slideshow__body\">\r\n                    <owl-carousel-o [options]=\"options\" appOwlPreventClick>\r\n                        <ng-container *ngFor=\"let slide of slides\">\r\n                            <ng-template carouselSlide>\r\n                                <a class=\"block-slideshow__slide\" href=\"\" appClick>\r\n                                    <div class=\"block-slideshow__slide-image block-slideshow__slide-image--desktop\" [ngStyle]=\"{'background-image': 'url('+(withDepartments ? slide.image_classic : slide.image_full)+')'}\"></div>\r\n                                    <div class=\"block-slideshow__slide-image block-slideshow__slide-image--mobile\" [ngStyle]=\"{'background-image': 'url('+slide.image_mobile+')'}\"></div>\r\n                                    <div class=\"block-slideshow__slide-content\">\r\n                                        <div class=\"block-slideshow__slide-title\" [innerHTML]=\"sanitizer.bypassSecurityTrustHtml(slide.title)\"></div>\r\n                                        <div class=\"block-slideshow__slide-text\" [innerHTML]=\"sanitizer.bypassSecurityTrustHtml(slide.text)\"></div>\r\n                                        <div class=\"block-slideshow__slide-button\">\r\n                                            <span class=\"btn btn-primary btn-lg\">Shop Now</span>\r\n                                        </div>\r\n                                    </div>\r\n                                </a>\r\n                            </ng-template>\r\n                        </ng-container>\r\n                    </owl-carousel-o>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- .block-slideshow / end -->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/blocks/components/block-header/block-header.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/blocks/components/block-header/block-header.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"block-header\">\r\n    <h3 class=\"block-header__title\">{{ header }}</h3>\r\n    <div class=\"block-header__divider\"></div>\r\n\r\n    <ul *ngIf=\"groups?.length\" class=\"block-header__groups-list\">\r\n        <li *ngFor=\"let group of groups\">\r\n            <button type=\"button\" class=\"block-header__group\" [ngClass]=\"{'block-header__group--active': group.current}\" (click)=\"setGroup(group)\">{{ group.name }}</button>\r\n        </li>\r\n    </ul>\r\n\r\n    <div *ngIf=\"arrows\" class=\"block-header__arrows-list\">\r\n        <button class=\"block-header__arrow block-header__arrow--left\" type=\"button\" (click)=\"prev.emit()\">\r\n            <app-icon name=\"arrow-rounded-left-7x11\" size=\"7x11\"></app-icon>\r\n        </button>\r\n        <button class=\"block-header__arrow block-header__arrow--right\" type=\"button\" (click)=\"next.emit()\">\r\n            <app-icon name=\"arrow-rounded-right-7x11\" size=\"7x11\"></app-icon>\r\n        </button>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/footer/components/contacts/contacts.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/footer/components/contacts/contacts.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"site-footer__widget footer-contacts\">\r\n    <h5 class=\"footer-contacts__title\">Contact Us</h5>\r\n\r\n    <div class=\"footer-contacts__text\">\r\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in feugiat lorem. Pellentque ac placerat tellus.\r\n    </div>\r\n\r\n    <ul class=\"footer-contacts__contacts\">\r\n        <li><i class=\"footer-contacts__icon fas fa-globe-americas\"></i> {{ store.address }}</li>\r\n        <li><i class=\"footer-contacts__icon far fa-envelope\"></i> {{ store.email }}</li>\r\n        <li><i class=\"footer-contacts__icon fas fa-mobile-alt\"></i> {{ store.phone.join(', ') }}</li>\r\n        <li><i class=\"footer-contacts__icon far fa-clock\"></i> {{ store.hours }}</li>\r\n    </ul>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/footer/components/links/links.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/footer/components/links/links.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"site-footer__widget footer-links\">\r\n    <h5 class=\"footer-links__title\">{{ header }}</h5>\r\n    <ul class=\"footer-links__list\">\r\n        <li *ngFor=\"let link of links\" class=\"footer-links__item\"><a [routerLink]=\"link.url\" class=\"footer-links__link\">{{ link.label }}</a></li>\r\n    </ul>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/footer/components/newsletter/newsletter.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/footer/components/newsletter/newsletter.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"footer-newsletter\">\r\n    <h5 class=\"footer-newsletter__title\">Newsletter</h5>\r\n    <div class=\"footer-newsletter__text\">\r\n        Praesent pellentesque volutpat ex, vitae auctor lorem pulvinar mollis felis at lacinia.\r\n    </div>\r\n\r\n    <form action=\"\" class=\"footer-newsletter__form\">\r\n        <label class=\"sr-only\" for=\"footer-newsletter-address\">Email Address</label>\r\n        <input type=\"text\" class=\"footer-newsletter__form-input form-control\" id=\"footer-newsletter-address\" placeholder=\"Email Address...\">\r\n\r\n        <button class=\"footer-newsletter__form-button btn btn-primary\">Subscribe</button>\r\n    </form>\r\n\r\n    <div class=\"footer-newsletter__text footer-newsletter__text--social\">\r\n        Follow us on social networks\r\n    </div>\r\n\r\n    <ul class=\"footer-newsletter__social-links\">\r\n        <li class=\"footer-newsletter__social-link footer-newsletter__social-link--facebook\"><a [href]=\"theme.author.profile_url\" target=\"_blank\"><i class=\"fab fa-facebook-f\"></i></a></li>\r\n        <li class=\"footer-newsletter__social-link footer-newsletter__social-link--twitter\"><a [href]=\"theme.author.profile_url\" target=\"_blank\"><i class=\"fab fa-twitter\"></i></a></li>\r\n        <li class=\"footer-newsletter__social-link footer-newsletter__social-link--youtube\"><a [href]=\"theme.author.profile_url\" target=\"_blank\"><i class=\"fab fa-youtube\"></i></a></li>\r\n        <li class=\"footer-newsletter__social-link footer-newsletter__social-link--instagram\"><a [href]=\"theme.author.profile_url\" target=\"_blank\"><i class=\"fab fa-instagram\"></i></a></li>\r\n        <li class=\"footer-newsletter__social-link footer-newsletter__social-link--rss\"><a [href]=\"theme.author.profile_url\" target=\"_blank\"><i class=\"fas fa-rss\"></i></a></li>\r\n    </ul>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/footer/footer.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/footer/footer.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"site-footer\">\r\n    <div class=\"container\">\r\n        <div class=\"site-footer__widgets\">\r\n            <div class=\"row\">\r\n                <div class=\"col-12 col-md-6 col-lg-4\">\r\n                    <app-footer-contacts></app-footer-contacts>\r\n                </div>\r\n                <div class=\"col-6 col-md-3 col-lg-2\">\r\n                    <app-footer-links header=\"Information\" [links]=\"[\r\n                        {label: 'About Us',             url: '/site/about-us'},\r\n                        {label: 'Delivery Information', url: '/site/terms'},\r\n                        {label: 'Privacy Policy',       url: '/site/terms'},\r\n                        {label: 'Brands',               url: ''},\r\n                        {label: 'Contact Us',           url: '/site/contact-us'},\r\n                        {label: 'Returns',              url: ''},\r\n                        {label: 'Site Map',             url: ''}\r\n                    ]\"></app-footer-links>\r\n                </div>\r\n                <div class=\"col-6 col-md-3 col-lg-2\">\r\n                    <app-footer-links header=\"My Account\" [links]=\"[\r\n                        {label: 'Store Location', url: ''},\r\n                        {label: 'Order History',  url: ''},\r\n                        {label: 'Wish List',      url: '/shop/wishlist'},\r\n                        {label: 'Newsletter',     url: ''},\r\n                        {label: 'Specials',       url: ''},\r\n                        {label: 'Gift Cards',     url: ''},\r\n                        {label: 'Affiliate',      url: ''}\r\n                    ]\"></app-footer-links>\r\n                </div>\r\n                <div class=\"col-12 col-md-12 col-lg-4\">\r\n                    <app-footer-newsletter class=\"site-footer__widget\"></app-footer-newsletter>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"site-footer__bottom\">\r\n            <div class=\"site-footer__copyright\">\r\n                Powered by <a href=\"https://angular.io/\" target=\"_blank\">Angular</a> — Design by <a [href]=\"theme.author.profile_url\" target=\"_blank\">{{ theme.author.name }}</a>\r\n            </div>\r\n            <div class=\"site-footer__payments\">\r\n                <img src=\"assets/images/payments.png\" alt=\"\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/header/components/departments/departments.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/header/components/departments/departments.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- .departments -->\r\n<div class=\"departments\">\r\n    <div class=\"departments__body\">\r\n        <div class=\"departments__links-wrapper\">\r\n            <div class=\"departments__padding\"></div>\r\n            <ul class=\"departments__links\">\r\n                <li\r\n                    *ngFor=\"let item of items\"\r\n                    class=\"departments__item\"\r\n                    [ngClass]=\"{\r\n                        'departments__item--menu': item.menu && item.menu.type == 'menu',\r\n                        'departments__item--hover': item === hoveredItem\r\n                    }\"\r\n                    (mouseenter)=\"onItemMouseEnter(item)\"\r\n                    (mouseleave)=\"onItemMouseLeave(item)\"\r\n                >\r\n\r\n                    <ng-template #link>\r\n                        {{ item.label }}\r\n                        <app-icon *ngIf=\"item.menu\" class=\"departments__link-arrow\" name=\"arrow-rounded-right-6x9\" size=\"6x9\"></app-icon>\r\n                    </ng-template>\r\n\r\n                    <a *ngIf=\"!item.external\" [routerLink]=\"item.url\" [target]=\"item.target\" (click)=\"onItemClick()\"><ng-container [ngTemplateOutlet]=\"link\"></ng-container></a>\r\n                    <a *ngIf=\"item.external\" [href]=\"item.url\" [target]=\"item.target\" (click)=\"onItemClick()\"><ng-container [ngTemplateOutlet]=\"link\"></ng-container></a>\r\n\r\n                    <div *ngIf=\"item.menu && item.menu.type == 'megamenu'\" class=\"departments__megamenu departments__megamenu--{{ item.menu.size }}\">\r\n                        <app-header-megamenu [menu]=\"item.menu\" [departments]=\"true\" (itemClick)=\"onSubItemClick()\"></app-header-megamenu>\r\n                    </div>\r\n                    <div *ngIf=\"item.menu && item.menu.type == 'menu'\" class=\"departments__menu\">\r\n                        <app-header-menu [items]=\"item.menu.items\" (itemClick)=\"onSubItemClick()\"></app-header-menu>\r\n                    </div>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n\r\n    <button class=\"departments__button\" (click)=\"toggle()\">\r\n        <app-icon class=\"departments__button-icon\" name=\"menu-18x14\" size=\"18x14\"></app-icon>\r\n        Shop By Category\r\n        <app-icon class=\"departments__button-arrow\" name=\"arrow-rounded-down-9x6\" size=\"9x6\"></app-icon>\r\n    </button>\r\n</div>\r\n<!-- .departments / end -->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/header/components/dropcart/dropcart.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/header/components/dropcart/dropcart.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- .dropcart -->\r\n<div class=\"dropcart\">\r\n    <div class=\"dropcart__empty\" *ngIf=\"!(cart.items$|async).length\">\r\n        Your shopping cart is empty!\r\n    </div>\r\n    <ng-container *ngIf=\"(cart.items$|async).length\">\r\n        <div class=\"dropcart__products-list\">\r\n            <div *ngFor=\"let item of cart.items$|async\" class=\"dropcart__product\">\r\n                <div class=\"dropcart__product-image\">\r\n                    <a [routerLink]=\"root.product(item.product)\" *ngIf=\"item.product.images?.length\"><img [src]=\"item.product.images[0]\" alt=\"\"></a>\r\n                </div>\r\n                <div class=\"dropcart__product-info\">\r\n                    <div class=\"dropcart__product-name\"><a [routerLink]=\"root.product(item.product)\">{{ item.product.name }}</a></div>\r\n\r\n                    <ul *ngIf=\"item.options.length\" class=\"dropcart__product-options\">\r\n                        <li *ngFor=\"let option of item.options\">{{ option.name }}: {{ option.value }}</li>\r\n                    </ul>\r\n                    <div class=\"dropcart__product-meta\">\r\n                        <span class=\"dropcart__product-quantity\">{{ item.quantity }}</span> ×\r\n                        <span class=\"dropcart__product-price\">{{ item.product.price|currencyFormat }}</span>\r\n                    </div>\r\n                </div>\r\n\r\n                <button type=\"button\" class=\"dropcart__product-remove btn btn-light btn-sm btn-svg-icon\" (click)=\"remove(item)\" [ngClass]=\"{'btn-loading': removedItems.includes(item)}\">\r\n                    <app-icon name=\"cross-10\" size=\"10\"></app-icon>\r\n                </button>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"dropcart__totals\">\r\n            <table>\r\n                <tr *ngIf=\"(cart.totals$|async).length\">\r\n                    <th>Subtotal</th>\r\n                    <td>{{ cart.subtotal$|async|currencyFormat }}</td>\r\n                </tr>\r\n                <tr *ngFor=\"let total of cart.totals$|async\">\r\n                    <th>{{ total.title }}</th>\r\n                    <td>{{ total.price|currencyFormat  }}</td>\r\n                </tr>\r\n                <tr>\r\n                    <th>Total</th>\r\n                    <td>{{ cart.total$|async|currencyFormat }}</td>\r\n                </tr>\r\n            </table>\r\n        </div>\r\n\r\n        <div class=\"dropcart__buttons\">\r\n            <a class=\"btn btn-secondary\" [routerLink]=\"root.cart()\">View Cart</a>\r\n            <a class=\"btn btn-primary\" [routerLink]=\"root.checkout()\">Checkout</a>\r\n        </div>\r\n    </ng-container>\r\n</div>\r\n<!-- .dropcart / end -->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/header/components/links/links.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/header/components/links/links.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ul class=\"nav-links__list\" *ngIf=\"loginValue\">\r\n    <li\r\n        *ngFor=\"let item of items\"\r\n        class=\"nav-links__item\"\r\n        [ngClass]=\"{\r\n            'nav-links__item--with-submenu': item.menu,\r\n            'nav-links__item--hover': hoveredItem === item\r\n        }\"\r\n        (mouseenter)=\"onItemMouseEnter(item, $event)\"\r\n        (mouseleave)=\"onItemMouseLeave(item)\"\r\n    >\r\n\r\n        <ng-template #link>\r\n            <span>\r\n                {{ item.label }}\r\n                <app-icon *ngIf=\"item.menu\" class=\"nav-links__arrow\" name=\"arrow-rounded-down-9x6\" size=\"9x6\"></app-icon>\r\n            </span>\r\n        </ng-template>\r\n\r\n        <a *ngIf=\"!item.external\" [routerLink]=\"item.url\" [target]=\"item.target\"><ng-container [ngTemplateOutlet]=\"link\"></ng-container></a>\r\n        <!-- <a *ngIf=\"item.external\" [href]=\"item.url\" [target]=\"item.target\"><ng-container [ngTemplateOutlet]=\"link\"></ng-container></a> -->\r\n\r\n        <div *ngIf=\"item.menu && item.menu.type == 'menu'\" class=\"nav-links__menu\">\r\n            <app-header-menu [items]=\"item.menu.items\" [islogin]=\"loginValue\" (itemClick)=\"onSubItemClick()\"></app-header-menu>\r\n        </div>\r\n        <div *ngIf=\"item.menu && item.menu.type == 'megamenu'\" class=\"nav-links__megamenu nav-links__megamenu--size--{{ item.menu.size }}\">\r\n            <app-header-megamenu [menu]=\"item.menu\" (itemClick)=\"onSubItemClick()\"></app-header-megamenu>\r\n        </div>\r\n    </li>\r\n</ul>\r\n\r\n<ul class=\"nav-links__list\" *ngIf=\"!loginValue\">\r\n        <li\r\n            *ngFor=\"let item of menuitems\"\r\n            class=\"nav-links__item\"\r\n            [ngClass]=\"{\r\n                'nav-links__item--with-submenu': item.menu,\r\n                'nav-links__item--hover': hoveredItem === item\r\n            }\"\r\n            (mouseenter)=\"onItemMouseEnter(item, $event)\"\r\n            (mouseleave)=\"onItemMouseLeave(item)\"\r\n        >\r\n    \r\n            <ng-template #link>\r\n                <span>\r\n                    {{ item.label }}\r\n                    <app-icon *ngIf=\"item.menu\" class=\"nav-links__arrow\" name=\"arrow-rounded-down-9x6\" size=\"9x6\"></app-icon>\r\n                </span>\r\n            </ng-template>\r\n    \r\n            <a *ngIf=\"!item.external\" [routerLink]=\"item.url\" [target]=\"item.target\"><ng-container [ngTemplateOutlet]=\"link\"></ng-container></a>\r\n            <!-- <a *ngIf=\"item.external\" [href]=\"item.url\" [target]=\"item.target\"><ng-container [ngTemplateOutlet]=\"link\"></ng-container></a> -->\r\n    \r\n            <div *ngIf=\"item.menu && item.menu.type == 'menu'\" class=\"nav-links__menu\">\r\n                <app-header-menu [items]=\"item.menu.items\" [islogin]=\"loginValue\" (itemClick)=\"onSubItemClick()\"></app-header-menu>\r\n            </div>\r\n            <div *ngIf=\"item.menu && item.menu.type == 'megamenu'\" class=\"nav-links__megamenu nav-links__megamenu--size--{{ item.menu.size }}\">\r\n                <app-header-megamenu [menu]=\"item.menu\" (itemClick)=\"onSubItemClick()\"></app-header-megamenu>\r\n            </div>\r\n        </li>\r\n    </ul>    ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/header/components/megamenu/megamenu.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/header/components/megamenu/megamenu.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- .megamenu -->\r\n<div class=\"megamenu\" [ngClass]=\"{'megamenu--departments': departments}\" [style.background-image]=\"menu.image ? 'url('+menu.image+')' : ''\">\r\n    <div class=\"row\">\r\n        <div *ngFor=\"let column of menu.columns\" class=\"col-{{ column.size }}\">\r\n            <ul class=\"megamenu__links megamenu__links--level--0\">\r\n                <li *ngFor=\"let item of column.items\" class=\"megamenu__item\" [ngClass]=\"{'megamenu__item--with-submenu': item.items}\">\r\n\r\n                    <a *ngIf=\"!item.external\" [routerLink]=\"item.url\" [target]=\"item.target\" (click)=\"itemClick.emit(item)\">{{ item.label }}</a>\r\n                    <a *ngIf=\"item.external\" [href]=\"item.url\" [target]=\"item.target\" (click)=\"itemClick.emit(item)\">{{ item.label }}</a>\r\n\r\n                    <ul *ngIf=\"item.items\" class=\"megamenu__links megamenu__links--level--1\">\r\n                        <li *ngFor=\"let subItem of item.items\" class=\"megamenu__item\">\r\n\r\n                            <a *ngIf=\"!subItem.external\" [routerLink]=\"subItem.url\" [target]=\"subItem.target\" (click)=\"itemClick.emit(subItem)\">{{ subItem.label }}</a>\r\n                            <a *ngIf=\"subItem.external\" [href]=\"subItem.url\" [target]=\"subItem.target\" (click)=\"itemClick.emit(subItem)\">{{ subItem.label }}</a>\r\n\r\n                        </li>\r\n                    </ul>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- .megamenu / end -->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/header/components/menu/menu.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/header/components/menu/menu.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- .menu -->\n<ul class=\"menu\" [ngClass]=\"{'menu--layout--classic': layout === 'classic', 'menu--layout--topbar': layout === 'topbar'}\">\n    <li\n        *ngFor=\"let item of items\"\n        class=\"menu__item\"\n        [ngClass]=\"{\n            'menu__item--hover': item === hoveredItem\n        }\"\n        (mouseenter)=\"onItemMouseEnter(item)\"\n        (mouseleave)=\"onItemMouseLeave(item)\"\n    >\n\n        <ng-template #link>\n            {{ item.label }}\n            <app-icon *ngIf=\"item.items\" class=\"menu__arrow\" name=\"arrow-rounded-right-6x9\" size=\"6x9\"></app-icon>\n        </ng-template>\n\n        <ng-template #linkauth>\n            {{ item.label }}\n            <app-icon *ngIf=\"item.items\" class=\"menu__arrow\" name=\"arrow-rounded-right-6x9\" size=\"6x9\"></app-icon>\n        </ng-template>\n\n        <!-- <a *ngIf=\"!item.external\" [routerLink]=\"item.url\" [target]=\"item.target\" (click)=\"itemClick.emit(item)\"><ng-container [ngTemplateOutlet]=\"link\"></ng-container></a> -->\n        <a *ngIf=\"item.external\" [routerLink]=\"item.url\" [target]=\"item.target\" (click)=\"itemClick.emit(item)\"><ng-container [ngTemplateOutlet]=\"linkauth\"></ng-container></a>\n        <a *ngIf=\"item.enabled\" [routerLink]=\"item.url\" [target]=\"item.target\" (click)=\"itemClick.emit(item)\"><ng-container [ngTemplateOutlet]=\"link\"></ng-container></a> \n        <div *ngIf=\"item.items\" class=\"menu__submenu\">\n            <app-header-menu [items]=\"item.items\" (itemClick)=\"onSubItemClick($event)\"></app-header-menu>\n        </div>\n    </li>\n</ul>\n<!-- .menu / end -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/header/components/nav/nav.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/header/components/nav/nav.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"nav-panel\">\r\n    <div class=\"nav-panel__container container\">\r\n        <div class=\"nav-panel__row\">\r\n            <div *ngIf=\"logo\" class=\"nav-panel__logo\">\r\n                <a [routerLink]=\"root.home()\">\r\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"120px\" height=\"20px\">\r\n                        <path d=\"M118.5,20h-1.1c-0.6,0-1.2-0.4-1.4-1l-1.5-4h-6.1l-1.5,4c-0.2,0.6-0.8,1-1.4,1h-1.1c-1,0-1.8-1-1.4-2l1.1-3\r\n                                 l1.5-4l3.6-10c0.2-0.6,0.8-1,1.4-1h1.6c0.6,0,1.2,0.4,1.4,1l3.6,10l1.5,4l1.1,3C120.3,19,119.5,20,118.5,20z M111.5,6.6l-1.6,4.4\r\n                                 h3.2L111.5,6.6z M99.5,20h-1.4c-0.4,0-0.7-0.2-0.9-0.5L94,14l-2,3.5v1c0,0.8-0.7,1.5-1.5,1.5h-1c-0.8,0-1.5-0.7-1.5-1.5v-17\r\n                                 C88,0.7,88.7,0,89.5,0h1C91.3,0,92,0.7,92,1.5v8L94,6l3.2-5.5C97.4,0.2,97.7,0,98.1,0h1.4c1.2,0,1.9,1.3,1.3,2.3L96.3,10l4.5,7.8\r\n                                 C101.4,18.8,100.7,20,99.5,20z M80.3,11.8L80,12.3v6.2c0,0.8-0.7,1.5-1.5,1.5h-1c-0.8,0-1.5-0.7-1.5-1.5v-6.2l-0.3-0.5l-5.5-9.5\r\n                                 c-0.6-1,0.2-2.3,1.3-2.3h1.4c0.4,0,0.7,0.2,0.9,0.5L76,4.3l2,3.5l2-3.5l2.2-3.8C82.4,0.2,82.7,0,83.1,0h1.4c1.2,0,1.9,1.3,1.3,2.3\r\n                                 L80.3,11.8z M60,20c-5.5,0-10-4.5-10-10S54.5,0,60,0s10,4.5,10,10S65.5,20,60,20z M60,4c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6-6\r\n                                 S63.3,4,60,4z M47.8,17.8c0.6,1-0.2,2.3-1.3,2.3h-2L41,14h-4v4.5c0,0.8-0.7,1.5-1.5,1.5h-1c-0.8,0-1.5-0.7-1.5-1.5v-17\r\n                                 C33,0.7,33.7,0,34.5,0H41c0.3,0,0.7,0,1,0.1c3.4,0.5,6,3.4,6,6.9c0,2.4-1.2,4.5-3.1,5.8L47.8,17.8z M42,4.2C41.7,4.1,41.3,4,41,4h-3\r\n                                 c-0.6,0-1,0.4-1,1v4c0,0.6,0.4,1,1,1h3c0.3,0,0.7-0.1,1-0.2c0.3-0.1,0.6-0.3,0.9-0.5C43.6,8.8,44,7.9,44,7C44,5.7,43.2,4.6,42,4.2z\r\n                                  M29.5,4H25v14.5c0,0.8-0.7,1.5-1.5,1.5h-1c-0.8,0-1.5-0.7-1.5-1.5V4h-4.5C15.7,4,15,3.3,15,2.5v-1C15,0.7,15.7,0,16.5,0h13\r\n                                 C30.3,0,31,0.7,31,1.5v1C31,3.3,30.3,4,29.5,4z M6.5,20c-2.8,0-5.5-1.7-6.4-4c-0.4-1,0.3-2,1.3-2h1c0.5,0,0.9,0.3,1.2,0.7\r\n                                 c0.2,0.3,0.4,0.6,0.8,0.8C4.9,15.8,5.8,16,6.5,16c1.5,0,2.8-0.9,2.8-2c0-0.7-0.5-1.3-1.2-1.6C7.4,12,7,11,7.4,10.3l0.4-0.9\r\n                                 c0.4-0.7,1.2-1,1.8-0.6c0.6,0.3,1.2,0.7,1.6,1.2c1,1.1,1.7,2.5,1.7,4C13,17.3,10.1,20,6.5,20z M11.6,6h-1c-0.5,0-0.9-0.3-1.2-0.7\r\n                                 C9.2,4.9,8.9,4.7,8.6,4.5C8.1,4.2,7.2,4,6.5,4C5,4,3.7,4.9,3.7,6c0,0.7,0.5,1.3,1.2,1.6C5.6,8,6,9,5.6,9.7l-0.4,0.9\r\n                                 c-0.4,0.7-1.2,1-1.8,0.6c-0.6-0.3-1.2-0.7-1.6-1.2C0.6,8.9,0,7.5,0,6c0-3.3,2.9-6,6.5-6c2.8,0,5.5,1.7,6.4,4C13.3,4.9,12.6,6,11.6,6\r\n                                 z\"></path>\r\n                    </svg>\r\n                </a>\r\n            </div>\r\n\r\n            <div *ngIf=\"departments\" class=\"nav-panel__departments\">\r\n                <app-header-departments></app-header-departments>\r\n            </div>\r\n\r\n            <!-- .nav-links -->\r\n            <app-header-links class=\"nav-panel__nav-links nav-links\"></app-header-links>\r\n            <!-- .nav-links / end -->\r\n            \r\n            <div class=\"nav-panel__indicators\">\r\n                <div *ngIf=\"search\" class=\"indicator indicator--trigger--click\" appDropdown=\"indicator--opened\" #search=\"appDropdown\">\r\n                    <button type=\"button\" class=\"indicator__button\" (click)=\"$event.preventDefault(); search.toggle(); search.isOpen ? searchField.focus() : '';\">\r\n                        <span class=\"indicator__area\">\r\n                            <app-icon class=\"indicator__icon\" name=\"search-20\" size=\"20\"></app-icon>\r\n                            <app-icon class=\"indicator__icon indicator__icon--open\" name=\"cross-20\" size=\"20\"></app-icon>\r\n                        </span>\r\n                    </button>\r\n\r\n                    <div class=\"indicator__dropdown\">\r\n                        <div class=\"drop-search\">\r\n                            <form action=\"\" class=\"drop-search__form\">\r\n                                <input class=\"drop-search__input\" name=\"search\" (keydown.escape)=\"search.close()\" placeholder=\"Search over 10,000 products\" aria-label=\"Site search\" type=\"text\" autocomplete=\"off\" #searchField>\r\n                                <button class=\"drop-search__button drop-search__button--submit\" type=\"submit\">\r\n                                    <app-icon name=\"search-20\" size=\"20\"></app-icon>\r\n                                </button>\r\n                            </form>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"indicator\">\r\n                    <a [routerLink]=\"root.wishlist()\" class=\"indicator__button\">\r\n                        <span class=\"indicator__area\">\r\n                            <app-icon name=\"heart-20\" size=\"20\"></app-icon>\r\n                            <span class=\"indicator__value\">{{ wishlist.count$|async }}</span>\r\n                        </span>\r\n                    </a>\r\n                </div>\r\n\r\n                <div class=\"indicator indicator--trigger--click\" appDropdown=\"indicator--opened\" #cartDropdown=\"appDropdown\">\r\n                    <a [href]=\"'./shop/cart'\" class=\"indicator__button\" (click)=\"$event.preventDefault(); cartDropdown.toggle()\">\r\n                        <span class=\"indicator__area\">\r\n                            <app-icon name=\"cart-20\" size=\"20\"></app-icon>\r\n                            <span class=\"indicator__value\">{{ cart.quantity$|async }}</span>\r\n                        </span>\r\n                    </a>\r\n\r\n                    <div class=\"indicator__dropdown\">\r\n                        <app-header-dropcart></app-header-dropcart>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/header/components/search/search.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/header/components/search/search.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"search\">\r\n    <form class=\"search__form\" action=\"\">\r\n        <input class=\"search__input\" name=\"search\" placeholder=\"Search over 10,000 products\" aria-label=\"Site search\" type=\"text\" autocomplete=\"off\">\r\n        <button class=\"search__button\" type=\"submit\">\r\n            <app-icon name=\"search-20\" size=\"20\"></app-icon>\r\n        </button>\r\n        <div class=\"search__border\"></div>\r\n    </form>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/header/components/topbar/topbar.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/header/components/topbar/topbar.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- .topbar -->\r\n<div class=\"site-header__topbar topbar\">\r\n    <div class=\"topbar__container container\">\r\n        <div class=\"topbar__row\">\r\n            <div class=\"topbar__item topbar__item--link\">\r\n                <a class=\"topbar-link\" routerLink=\"/site/about-us\">About Us</a>\r\n            </div>\r\n            <div class=\"topbar__item topbar__item--link\">\r\n                <a class=\"topbar-link\" routerLink=\"/site/contact-us\">Contacts</a>\r\n            </div>\r\n            <!-- <div class=\"topbar__item topbar__item--link\">\r\n                <a class=\"topbar-link\" routerLink=\"\">Store Location</a>\r\n            </div> -->\r\n            <div class=\"topbar__item topbar__item--link\">\r\n                <a class=\"topbar-link\" routerLink=\"/shop/track-order\">Track Order</a>\r\n            </div>\r\n            <div class=\"topbar__item topbar__item--link\">\r\n                <a class=\"topbar-link\" routerLink=\"/blog\">Blog</a>\r\n            </div>\r\n            <div class=\"topbar__spring\"></div>\r\n            <div class=\"topbar__item\">\r\n                <div class=\"topbar-dropdown\" appDropdown=\"topbar-dropdown--opened\" #accountDropdown=\"appDropdown\">\r\n                    <button class=\"topbar-dropdown__btn\" type=\"button\" (click)=\"accountDropdown.toggle()\">\r\n                        My Account\r\n                        <app-icon name=\"arrow-rounded-down-7x5\" size=\"7x5\"></app-icon>\r\n                    </button>\r\n\r\n                    <!-- <div class=\"topbar-dropdown__body\">\r\n                        <app-header-menu layout=\"topbar\" (itemClick)=\"accountDropdown.close()\" [items]=\"[\r\n                            {label: 'Dashboard',     url: '/account/dashboard', enabled:true},\r\n                            {label: 'Edit Profile',  url: '/account/profile'},\r\n                            {label: 'Order History', url: '/account/orders'},\r\n                            {label: 'Addresses',     url: '/account/addresses'},\r\n                            {label: 'Password',      url: '/account/password'},\r\n                            {label: 'Logout',        url: '/account/login'}\r\n                        ]\"></app-header-menu>\r\n                    </div> -->\r\n                </div>\r\n            </div>\r\n            <div class=\"topbar__item\">\r\n                <div class=\"topbar-dropdown\" appDropdown=\"topbar-dropdown--opened\" #currencyDropdown=\"appDropdown\">\r\n                    <button class=\"topbar-dropdown__btn\" type=\"button\" (click)=\"currencyDropdown.toggle()\">\r\n                        Currency: <span class=\"topbar__item-value\">{{ currencyService.options.code }}</span>\r\n                        <app-icon name=\"arrow-rounded-down-7x5\" size=\"7x5\"></app-icon>\r\n                    </button>\r\n\r\n                    <div class=\"topbar-dropdown__body\">\r\n                        <ul class=\"menu menu--layout--topbar\">\r\n                            <li class=\"menu__item\" *ngFor=\"let currency of currencies\">\r\n                                <button type=\"button\" (click)=\"setCurrency(currency); currencyDropdown.close();\">\r\n                                    {{ currency.name }}\r\n                                </button>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"topbar__item\">\r\n                <div class=\"topbar-dropdown\" appDropdown=\"topbar-dropdown--opened\" #languageDropdown=\"appDropdown\">\r\n                    <button class=\"topbar-dropdown__btn\" type=\"button\" (click)=\"languageDropdown.toggle()\">\r\n                        Language: <span class=\"topbar__item-value\">EN</span>\r\n                        <app-icon name=\"arrow-rounded-down-7x5\" size=\"7x5\"></app-icon>\r\n                    </button>\r\n\r\n                    <div class=\"topbar-dropdown__body\">\r\n                        <ul class=\"menu menu--layout--topbar menu--with-icons\">\r\n                            <li class=\"menu__item\" *ngFor=\"let language of languages\">\r\n                                <button type=\"button\">\r\n                                    <span class=\"menu__icon\">\r\n                                        <img [src]=\"'assets/images/languages/'+language.image+'.png'\"\r\n                                             [srcset]=\"'assets/images/languages/'+language.image+'.png 1x,' +\r\n                                                       'assets/images/languages/'+language.image+'@2x.png 2x'\" alt=\"\">\r\n                                    </span>\r\n                                    {{ language.name }}\r\n                                </button>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- .topbar / end -->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/header/header.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/header/header.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"site-header\">\r\n    <app-header-topbar></app-header-topbar>\r\n\r\n    <div *ngIf=\"layout === 'classic'\" class=\"site-header__middle container\">\r\n        <div class=\"site-header__logo\">\r\n            <a routerLink=\"/\">\r\n                <img src=\"{{ store.logo }}\" width=\"120px\" />\r\n            </a>\r\n        </div>\r\n        <div class=\"site-header__search\">\r\n            <app-header-search></app-header-search>\r\n        </div>\r\n        <div class=\"site-header__phone\">\r\n            <div class=\"site-header__phone-title\">Customer Service</div>\r\n            <div class=\"site-header__phone-number\">{{ store.primaryPhone }}</div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"site-header__nav-panel\">\r\n        <app-header-nav [departments]=\"layout === 'classic'\" [logo]=\"layout === 'compact'\" [search]=\"layout === 'compact'\"></app-header-nav>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/mobile/components/mobile-header/mobile-header.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/mobile/components/mobile-header/mobile-header.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mobile-header\">\r\n    <div class=\"mobile-header__panel\">\r\n        <div class=\"container\">\r\n            <div class=\"mobile-header__body\">\r\n                <button class=\"mobile-header__menu-button\" (click)=\"menu.open()\">\r\n                    <app-icon name=\"menu-18x14\" size=\"18x14\"></app-icon>\r\n                </button>\r\n                <a class=\"mobile-header__logo\" routerLink=\"/home\">\r\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"120px\" height=\"20px\">\r\n                        <path d=\"M118.5,20h-1.1c-0.6,0-1.2-0.4-1.4-1l-1.5-4h-6.1l-1.5,4c-0.2,0.6-0.8,1-1.4,1h-1.1c-1,0-1.8-1-1.4-2l1.1-3\r\n                                 l1.5-4l3.6-10c0.2-0.6,0.8-1,1.4-1h1.6c0.6,0,1.2,0.4,1.4,1l3.6,10l1.5,4l1.1,3C120.3,19,119.5,20,118.5,20z M111.5,6.6l-1.6,4.4\r\n                                 h3.2L111.5,6.6z M99.5,20h-1.4c-0.4,0-0.7-0.2-0.9-0.5L94,14l-2,3.5v1c0,0.8-0.7,1.5-1.5,1.5h-1c-0.8,0-1.5-0.7-1.5-1.5v-17\r\n                                 C88,0.7,88.7,0,89.5,0h1C91.3,0,92,0.7,92,1.5v8L94,6l3.2-5.5C97.4,0.2,97.7,0,98.1,0h1.4c1.2,0,1.9,1.3,1.3,2.3L96.3,10l4.5,7.8\r\n                                 C101.4,18.8,100.7,20,99.5,20z M80.3,11.8L80,12.3v6.2c0,0.8-0.7,1.5-1.5,1.5h-1c-0.8,0-1.5-0.7-1.5-1.5v-6.2l-0.3-0.5l-5.5-9.5\r\n                                 c-0.6-1,0.2-2.3,1.3-2.3h1.4c0.4,0,0.7,0.2,0.9,0.5L76,4.3l2,3.5l2-3.5l2.2-3.8C82.4,0.2,82.7,0,83.1,0h1.4c1.2,0,1.9,1.3,1.3,2.3\r\n                                 L80.3,11.8z M60,20c-5.5,0-10-4.5-10-10S54.5,0,60,0s10,4.5,10,10S65.5,20,60,20z M60,4c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6-6\r\n                                 S63.3,4,60,4z M47.8,17.8c0.6,1-0.2,2.3-1.3,2.3h-2L41,14h-4v4.5c0,0.8-0.7,1.5-1.5,1.5h-1c-0.8,0-1.5-0.7-1.5-1.5v-17\r\n                                 C33,0.7,33.7,0,34.5,0H41c0.3,0,0.7,0,1,0.1c3.4,0.5,6,3.4,6,6.9c0,2.4-1.2,4.5-3.1,5.8L47.8,17.8z M42,4.2C41.7,4.1,41.3,4,41,4h-3\r\n                                 c-0.6,0-1,0.4-1,1v4c0,0.6,0.4,1,1,1h3c0.3,0,0.7-0.1,1-0.2c0.3-0.1,0.6-0.3,0.9-0.5C43.6,8.8,44,7.9,44,7C44,5.7,43.2,4.6,42,4.2z\r\n                                  M29.5,4H25v14.5c0,0.8-0.7,1.5-1.5,1.5h-1c-0.8,0-1.5-0.7-1.5-1.5V4h-4.5C15.7,4,15,3.3,15,2.5v-1C15,0.7,15.7,0,16.5,0h13\r\n                                 C30.3,0,31,0.7,31,1.5v1C31,3.3,30.3,4,29.5,4z M6.5,20c-2.8,0-5.5-1.7-6.4-4c-0.4-1,0.3-2,1.3-2h1c0.5,0,0.9,0.3,1.2,0.7\r\n                                 c0.2,0.3,0.4,0.6,0.8,0.8C4.9,15.8,5.8,16,6.5,16c1.5,0,2.8-0.9,2.8-2c0-0.7-0.5-1.3-1.2-1.6C7.4,12,7,11,7.4,10.3l0.4-0.9\r\n                                 c0.4-0.7,1.2-1,1.8-0.6c0.6,0.3,1.2,0.7,1.6,1.2c1,1.1,1.7,2.5,1.7,4C13,17.3,10.1,20,6.5,20z M11.6,6h-1c-0.5,0-0.9-0.3-1.2-0.7\r\n                                 C9.2,4.9,8.9,4.7,8.6,4.5C8.1,4.2,7.2,4,6.5,4C5,4,3.7,4.9,3.7,6c0,0.7,0.5,1.3,1.2,1.6C5.6,8,6,9,5.6,9.7l-0.4,0.9\r\n                                 c-0.4,0.7-1.2,1-1.8,0.6c-0.6-0.3-1.2-0.7-1.6-1.2C0.6,8.9,0,7.5,0,6c0-3.3,2.9-6,6.5-6c2.8,0,5.5,1.7,6.4,4C13.3,4.9,12.6,6,11.6,6\r\n                                 z\"></path>\r\n                    </svg>\r\n                </a>\r\n                <div class=\"mobile-header__search\" appDropdown=\"mobile-header__search--opened\" #search=\"appDropdown\">\r\n                    <form class=\"mobile-header__search-form\" action=\"\">\r\n                        <input class=\"mobile-header__search-input\" name=\"search\" placeholder=\"Search over 10,000 products\" aria-label=\"Site search\" type=\"text\" autocomplete=\"off\" (keydown.escape)=\"search.close()\" #searchInput>\r\n                        <button class=\"mobile-header__search-button mobile-header__search-button--submit\" type=\"submit\">\r\n                            <app-icon name=\"search-20\" size=\"20\"></app-icon>\r\n                        </button>\r\n                        <button class=\"mobile-header__search-button mobile-header__search-button--close\" type=\"button\" (click)=\"search.close()\">\r\n                            <app-icon name=\"cross-20\" size=\"20\"></app-icon>\r\n                        </button>\r\n                        <div class=\"mobile-header__search-body\"></div>\r\n                    </form>\r\n                </div>\r\n\r\n                <div class=\"mobile-header__indicators\">\r\n                    <div class=\"indicator indicator--mobile-search indicator--mobile d-sm-none\">\r\n                        <button class=\"indicator__button\" (click)=\"search.open(); searchInput.focus()\">\r\n                            <span class=\"indicator__area\">\r\n                                <app-icon name=\"search-20\" size=\"20\"></app-icon>\r\n                            </span>\r\n                        </button>\r\n                    </div>\r\n\r\n                    <div class=\"indicator indicator--mobile d-sm-flex d-none\">\r\n                        <a routerLink=\"/wishlist\" class=\"indicator__button\">\r\n                            <span class=\"indicator__area\">\r\n                                <app-icon name=\"heart-20\" size=\"20\"></app-icon>\r\n                                <span class=\"indicator__value\">{{ wishlist.count$|async }}</span>\r\n                            </span>\r\n                        </a>\r\n                    </div>\r\n\r\n                    <div class=\"indicator indicator--mobile\">\r\n                        <a routerLink=\"/cart\" class=\"indicator__button\">\r\n                            <span class=\"indicator__area\">\r\n                                <app-icon name=\"cart-20\" size=\"20\"></app-icon>\r\n                                <span class=\"indicator__value\">{{ cart.quantity$|async }}</span>\r\n                            </span>\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/mobile/components/mobile-links/mobile-links.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/mobile/components/mobile-links/mobile-links.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ul class=\"mobile-links mobile-links--level--{{ level }}\" appCollapse>\r\n    <li *ngFor=\"let link of links\">\r\n        <div *ngIf=\"['link', 'button'].includes(link.type)\" class=\"mobile-links__item\" appCollapseItem=\"mobile-links__item--open\" #item=\"appCollapseItem\">\r\n            <div class=\"mobile-links__item-title\">\r\n                <a *ngIf=\"link.type === 'link'\" class=\"mobile-links__item-link\" (click)=\"onItemClick(link)\" [routerLink]=\"link.url\">{{ link.label }}</a>\r\n                <a *ngIf=\"link.type !== 'link'\" class=\"mobile-links__item-link\" (click)=\"onItemClick(link)\">{{ link.label }}</a>\r\n                <button *ngIf=\"link.children?.length\" class=\"mobile-links__item-toggle\" type=\"button\" (click)=\"item.toggle()\">\r\n                    <app-icon class=\"mobile-links__item-arrow\" name=\"arrow-rounded-down-12x7\" size=\"12x7\"></app-icon>\r\n                </button>\r\n            </div>\r\n            <div *ngIf=\"link.children?.length\" class=\"mobile-links__item-sub-links\" appCollapseContent>\r\n                <app-mobile-links [links]=\"link.children\" [level]=\"level + 1\" (itemClick)=\"itemClick.emit($event)\"></app-mobile-links>\r\n            </div>\r\n        </div>\r\n        <div *ngIf=\"link.type === 'divider'\" class=\"mobile-links__divider\"></div>\r\n    </li>\r\n</ul>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/mobile/components/mobile-menu/mobile-menu.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/mobile/components/mobile-menu/mobile-menu.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mobilemenu\" [ngClass]=\"{'mobilemenu--open': isOpen}\">\r\n    <div class=\"mobilemenu__backdrop\" (click)=\"mobilemenu.close()\"></div>\r\n    <div class=\"mobilemenu__body\">\r\n        <div class=\"mobilemenu__header\">\r\n            <div class=\"mobilemenu__title\">Menu</div>\r\n            <button type=\"button\" class=\"mobilemenu__close\" (click)=\"mobilemenu.close()\">\r\n                <app-icon name=\"cross-20\" size=\"20\"></app-icon>\r\n            </button>\r\n        </div>\r\n        <div class=\"mobilemenu__content\">\r\n            <app-mobile-links [links]=\"links\" (itemClick)=\"onItemClick($event)\"></app-mobile-links>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/widgets/widget-aboutus/widget-aboutus.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/widgets/widget-aboutus/widget-aboutus.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"widget-aboutus widget\">\r\n    <h4 class=\"widget__title\">About Blog</h4>\r\n    <div class=\"widget-aboutus__text\">\r\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, erat in malesuada aliquam, est erat faucibus purus,\r\n        eget viverra nulla sem vitae neque. Quisque id sodales libero.\r\n    </div>\r\n    <div class=\"widget-aboutus__socials\">\r\n        <ul>\r\n            <li>\r\n                <a class=\"widget-aboutus__link widget-aboutus__link--rss\" [href]=\"theme.author.profile_url\" target=\"_blank\">\r\n                    <i class=\"widget-social__icon fas fa-rss\"></i>\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a class=\"widget-aboutus__link widget-aboutus__link--youtube\" [href]=\"theme.author.profile_url\" target=\"_blank\">\r\n                    <i class=\"widget-aboutus__icon fab fa-youtube\"></i>\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a class=\"widget-aboutus__link widget-aboutus__link--facebook\" [href]=\"theme.author.profile_url\" target=\"_blank\">\r\n                    <i class=\"widget-aboutus__icon fab fa-facebook-f\"></i>\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a class=\"widget-aboutus__link widget-aboutus__link--twitter\" [href]=\"theme.author.profile_url\" target=\"_blank\">\r\n                    <i class=\"widget-aboutus__icon fab fa-twitter\"></i>\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a class=\"widget-aboutus__link widget-aboutus__link--instagram\" [href]=\"theme.author.profile_url\" target=\"_blank\">\r\n                    <i class=\"widget-aboutus__icon fab fa-instagram\"></i>\r\n                </a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/widgets/widget-categories/widget-categories.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/widgets/widget-categories/widget-categories.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"widget-categories widget-categories--location--{{ location }} widget\">\r\n    <h4 class=\"widget__title\">Categories</h4>\r\n    <ul class=\"widget-categories__list\" appCollapse>\r\n        <li *ngFor=\"let category of categories\" class=\"widget-categories__item\" appCollapseItem=\"widget-categories__item--open\" #collapse=\"appCollapseItem\">\r\n            <div class=\"widget-categories__row\">\r\n                <a [routerLink]=\"root.category(category)\">\r\n                    <app-icon class=\"widget-categories__arrow\" name=\"arrow-rounded-right-6x9\" size=\"6x9\"></app-icon>\r\n                    {{ category.name }}\r\n                </a>\r\n                <button *ngIf=\"category.children?.length\" class=\"widget-categories__expander\" type=\"button\" (click)=\"collapse.toggle()\"></button>\r\n            </div>\r\n            <div *ngIf=\"category.children?.length\" class=\"widget-categories__subs\" appCollapseContent>\r\n                <ul>\r\n                    <li *ngFor=\"let sub of category.children\"><a [routerLink]=\"root.category(sub)\">{{ sub.name }}</a></li>\r\n                </ul>\r\n            </div>\r\n        </li>\r\n    </ul>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/widgets/widget-comments/widget-comments.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/widgets/widget-comments/widget-comments.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"widget-comments widget\">\r\n    <h4 class=\"widget__title\">Latest Comments</h4>\r\n    <ul class=\"widget-comments__list\">\r\n        <li *ngFor=\"let comment of comments\" class=\"widget-comments__item\">\r\n            <div class=\"widget-comments__author\"><a routerLink=\"./\">{{ comment.author }}</a></div>\r\n            <div class=\"widget-comments__content\">{{ comment.text }}</div>\r\n            <div class=\"widget-comments__meta\">\r\n                <div class=\"widget-comments__date\">{{ comment.date }}</div>\r\n                <div class=\"widget-comments__name\">On <a routerLink=\"./\" title=\"{{ comment.postTitle }}\">{{ comment.postTitle }}</a></div>\r\n            </div>\r\n        </li>\r\n    </ul>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/widgets/widget-filters/widget-filters.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/widgets/widget-filters/widget-filters.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"widget-filters widget\" [ngClass]=\"{\r\n    'widget-filters--offcanvas--always': offcanvas === 'always',\r\n    'widget-filters--offcanvas--mobile': offcanvas === 'mobile'\r\n}\" appCollapse>\r\n    <h4 class=\"widget-filters__title widget__title\">Filters</h4>\r\n\r\n    <div class=\"widget-filters__list\" [formGroup]=\"filtersForm\" *ngIf=\"filtersForm\">\r\n        <div *ngFor=\"let filter of filters; trackBy: trackBySlug\" class=\"widget-filters__item\">\r\n            <div class=\"filter filter--opened\" appCollapseItem=\"filter--opened\" #collapse=\"appCollapseItem\">\r\n                <button type=\"button\" class=\"filter__title\" (click)=\"collapse.toggle()\">\r\n                    {{ filter.name }}\r\n                    <app-icon class=\"filter__arrow\" name=\"arrow-rounded-down-12x7\" size=\"12x7\"></app-icon>\r\n                </button>\r\n                <div class=\"filter__body\" appCollapseContent>\r\n                    <div class=\"filter__container\">\r\n                        <div *ngIf=\"filter.type === 'categories'\" class=\"filter-categories\" [ngClass]=\"{'filter-categories--root': filter.root}\">\r\n                            <ul class=\"filter-categories__list\">\r\n                                <li *ngIf=\"!filter.root\" class=\"filter-categories__item filter-categories__item--parent\">\r\n                                    <app-icon class=\"filter-categories__arrow\"  name=\"arrow-rounded-left-6x9\" size=\"6x9\"></app-icon>\r\n                                    <a [routerLink]=\"this.root.shop()\">All Products</a>\r\n                                </li>\r\n                                <li *ngFor=\"let item of filter.items; trackBy: trackBySlug\" class=\"filter-categories__item filter-categories__item--{{ item.type }}\">\r\n                                    <app-icon *ngIf=\"item.type == 'parent'\" class=\"filter-categories__arrow\"  name=\"arrow-rounded-left-6x9\" size=\"6x9\"></app-icon>\r\n                                    <a [routerLink]=\"this.root.category(item.category)\">{{ item.name }}</a>\r\n                                    <div class=\"filter-categories__counter\" *ngIf=\"item.type === 'child'\">{{ item.count }}</div>\r\n                                </li>\r\n                            </ul>\r\n                        </div>\r\n\r\n                        <div *ngIf=\"filter.type === 'range' && isPlatformBrowser\" class=\"filter-price\">\r\n                            <div class=\"filter-price__slider\">\r\n                                <div class=\"ng5-slider-custom\">\r\n                                    <ng5-slider\r\n                                        [formControlName]=\"filter.slug\"\r\n                                        [options]=\"{\r\n                                            animate: false,\r\n                                            mouseEventsInterval: 10,\r\n                                            rightToLeft: rightToLeft,\r\n                                            floor: filter.min,\r\n                                            ceil: filter.max,\r\n                                            step: 1\r\n                                        }\"\r\n                                        #slider\r\n                                    ></ng5-slider>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"filter-price__title\">\r\n                                <span class=\"filter-price__min-value\">{{ (rightToLeft ? slider.highValue : slider.value)|currencyFormat }}</span> –\r\n                                <span class=\"filter-price__max-value\">{{ (rightToLeft ? slider.value : slider.highValue)|currencyFormat }}</span>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div *ngIf=\"filter.type === 'check'\" class=\"filter-list\" [formGroupName]=\"filter.slug\">\r\n                            <div class=\"filter-list__list\">\r\n                                <label\r\n                                    *ngFor=\"let item of filter.items; trackBy: trackBySlug\"\r\n                                    class=\"filter-list__item\"\r\n                                    [ngClass]=\"{'filter-list__item--disabled': isItemDisabled(filter, item)}\"\r\n                                >\r\n                                    <span class=\"filter-list__input input-check\">\r\n                                        <span class=\"input-check__body\">\r\n                                            <input\r\n                                                class=\"input-check__input\"\r\n                                                type=\"checkbox\"\r\n                                                [value]=\"item.slug\"\r\n                                                [name]=\"'filter_' + filter.slug\"\r\n                                                [formControlName]=\"item.slug\"\r\n                                            >\r\n                                            <span class=\"input-check__box\"></span>\r\n                                            <app-icon class=\"input-check__icon\" name=\"check-9x7\" size=\"9x7\"></app-icon>\r\n                                        </span>\r\n                                    </span>\r\n\r\n                                    <span class=\"filter-list__title\">{{ item.name }}</span>\r\n                                    <span class=\"filter-list__counter\">{{ item.count }}</span>\r\n                                </label>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div *ngIf=\"filter.type === 'radio'\" class=\"filter-list\">\r\n                            <div class=\"filter-list__list\">\r\n                                <label\r\n                                    *ngFor=\"let item of filter.items; trackBy: trackBySlug\"\r\n                                    class=\"filter-list__item\"\r\n                                    [ngClass]=\"{'filter-list__item--disabled': isItemDisabled(filter, item)}\"\r\n                                >\r\n                                    <span class=\"filter-list__input input-radio\">\r\n                                        <span class=\"input-radio__body\">\r\n                                            <input\r\n                                                class=\"input-radio__input\"\r\n                                                type=\"radio\"\r\n                                                [attr.disabled]=\"isItemDisabled(filter, item) ? true : null\"\r\n                                                [value]=\"item.slug\"\r\n                                                [formControlName]=\"filter.slug\"\r\n                                            >\r\n                                            <span class=\"input-radio__circle\"></span>\r\n                                        </span>\r\n                                    </span>\r\n\r\n                                    <span class=\"filter-list__title\">{{ item.name }}</span>\r\n                                    <span class=\"filter-list__counter\">{{ item.count }}</span>\r\n                                </label>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div *ngIf=\"filter.type === 'color'\" class=\"filter-color\" [formGroupName]=\"filter.slug\">\r\n                            <div class=\"filter-color__list\">\r\n                                <label *ngFor=\"let item of filter.items; trackBy: trackBySlug\" class=\"filter-color__item\">\r\n                                    <span\r\n                                        class=\"filter-color__check input-check-color\"\r\n                                        [ngClass]=\"['input-check-color--' + (item.color|colorType)]\"\r\n                                        [style.color]=\"item.color\"\r\n                                    >\r\n                                        <label class=\"input-check-color__body\">\r\n                                            <input\r\n                                                class=\"input-check-color__input\"\r\n                                                type=\"checkbox\"\r\n                                                [value]=\"item.slug\"\r\n                                                [name]=\"'filter_' + filter.slug\"\r\n                                                [formControlName]=\"item.slug\"\r\n                                            >\r\n                                            <span class=\"input-check-color__box\"></span>\r\n                                            <app-icon class=\"input-check-color__icon\" name=\"check-12x9\" size=\"12x9\"></app-icon>\r\n                                            <span class=\"input-check-color__stick\"></span>\r\n                                        </label>\r\n                                    </span>\r\n                                </label>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"widget-filters__actions d-flex\">\r\n        <button class=\"btn btn-secondary btn-sm\" (click)=\"reset()\">Reset</button>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/widgets/widget-newsletter/widget-newsletter.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/widgets/widget-newsletter/widget-newsletter.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"widget-newsletter widget\">\r\n    <h4 class=\"widget-newsletter__title\">Our Newsletter</h4>\r\n    <div class=\"widget-newsletter__text\">\r\n        Phasellus eleifend sapien felis, at sollicitudin arcu semper mattis. Mauris quis mi quis ipsum tristique lobortis. Nulla vitae est blandit rutrum.\r\n    </div>\r\n    <form class=\"widget-newsletter__form\" action=\"\">\r\n        <label for=\"widget-newsletter-email\" class=\"sr-only\">Email Address</label>\r\n        <input id=\"widget-newsletter-email\" type=\"text\" class=\"form-control\" placeholder=\"Email Address\">\r\n\r\n        <button type=\"submit\" class=\"btn btn-primary mt-3\">Subscribe</button>\r\n    </form>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/widgets/widget-posts/widget-posts.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/widgets/widget-posts/widget-posts.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"widget-posts widget\">\r\n    <h4 class=\"widget__title\">Latest Posts</h4>\r\n    <div class=\"widget-posts__list\">\r\n        <div *ngFor=\"let post of posts\" class=\"widget-posts__item\">\r\n            <div class=\"widget-posts__image\">\r\n                <a [routerLink]=\"root.post()\">\r\n                    <img [src]=\"postImage(post)\" alt=\"\">\r\n                </a>\r\n            </div>\r\n            <div class=\"widget-posts__info\">\r\n                <div class=\"widget-posts__name\">\r\n                    <a [routerLink]=\"root.post()\">{{ post.title }}</a>\r\n                </div>\r\n                <div class=\"widget-posts__date\">{{ post.date }}</div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/widgets/widget-products/widget-products.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/widgets/widget-products/widget-products.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"widget-products widget\">\r\n    <h4 class=\"widget__title\">{{ header }}</h4>\r\n    <div class=\"widget-products__list\">\r\n        <div *ngFor=\"let product of products\" class=\"widget-products__item\">\r\n            <div class=\"widget-products__image\">\r\n                <a [routerLink]=\"root.product(product)\" *ngIf=\"product.images?.length\"><img [src]=\"product.images[0]\" alt=\"\"></a>\r\n            </div>\r\n            <div class=\"widget-products__info\">\r\n                <div class=\"widget-products__name\">\r\n                    <a [routerLink]=\"root.product(product)\">{{ product.name }}</a>\r\n                </div>\r\n                <div class=\"widget-products__prices\">\r\n                    <ng-container *ngIf=\"product.compareAtPrice\">\r\n                        <span class=\"widget-products__new-price\">{{ product.price|currencyFormat }}</span>{{ ' ' }}\r\n                        <span class=\"widget-products__old-price\">{{ product.compareAtPrice|currencyFormat }}</span>\r\n                    </ng-container>\r\n                    <ng-container *ngIf=\"!product.compareAtPrice\">\r\n                        {{ product.price|currencyFormat }}\r\n                    </ng-container>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/widgets/widget-search/widget-search.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/widgets/widget-search/widget-search.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"widget-search\">\r\n    <form class=\"widget-search__body\">\r\n        <input class=\"widget-search__input\" placeholder=\"Blog search...\" type=\"text\" autocomplete=\"off\" spellcheck=\"false\">\r\n        <button class=\"widget-search__button\" type=\"submit\">\r\n            <app-icon name=\"search-20\" size=\"20\"></app-icon>\r\n        </button>\r\n    </form>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/widgets/widget-tags/widget-tags.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/widgets/widget-tags/widget-tags.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"widget-tags widget\">\r\n    <h4 class=\"widget__title\">Tags Cloud</h4>\r\n    <div class=\"tags tags--lg\">\r\n        <div class=\"tags__list\">\r\n            <a routerLink=\"./\">Promotion</a>\r\n            <a routerLink=\"./\">Power Tool</a>\r\n            <a routerLink=\"./\">New Arrivals</a>\r\n            <a routerLink=\"./\">Screwdriver</a>\r\n            <a routerLink=\"./\">Wrench</a>\r\n            <a routerLink=\"./\">Mounts</a>\r\n            <a routerLink=\"./\">Electrodes</a>\r\n            <a routerLink=\"./\">Chainsaws</a>\r\n            <a routerLink=\"./\">Manometers</a>\r\n            <a routerLink=\"./\">Nails</a>\r\n            <a routerLink=\"./\">Air Guns</a>\r\n            <a routerLink=\"./\">Cutting Discs</a>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/page-home-one/page-home-one.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/page-home-one/page-home-one.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-block-slideshow [withDepartments]=\"true\"></app-block-slideshow>\n\n<app-block-features></app-block-features>\n\n<app-block-products-carousel\n    header=\"Featured Products\"\n    layout=\"grid-4\"\n    [loading]=\"featuredProducts.loading\"\n    [products]=\"featuredProducts.products\"\n    [groups]=\"featuredProducts.groups\"\n    (groupChange)=\"groupChange(featuredProducts, $event)\"\n></app-block-products-carousel>\n\n<app-block-banner></app-block-banner>\n\n<app-block-products header=\"Bestsellers\" layout=\"large-first\" [products]=\"bestsellers$|async\"></app-block-products>\n\n<!-- <app-block-categories header=\"Popular Categories\" layout=\"classic\" [categories]=\"popularCategories$|async\"></app-block-categories> -->\n\n<app-block-products-carousel\n    header=\"New Arrivals\"\n    layout=\"grid-4\"\n    [loading]=\"latestProducts.loading\"\n    [products]=\"latestProducts.products\"\n    [groups]=\"latestProducts.groups\"\n    (groupChange)=\"groupChange(latestProducts, $event)\"\n></app-block-products-carousel>\n\n<app-block-posts *ngIf=\"posts\" header=\"Latest News\" layout=\"list-sm\" [posts]=\"posts.news\"></app-block-posts>\n\n<!-- <app-block-brands [brands]=\"brands$|async\"></app-block-brands> -->\n\n<app-block-product-columns>\n    <app-block-product-columns-item header=\"Top Rated Products\" [products]=\"columnTopRated$|async\"></app-block-product-columns-item>\n    <app-block-product-columns-item header=\"Special Offers\" [products]=\"columnSpecialOffers$|async\"></app-block-product-columns-item>\n    <app-block-product-columns-item header=\"Bestsellers\" [products]=\"columnBestsellers$|async\"></app-block-product-columns-item>\n</app-block-product-columns>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/page-home-two/page-home-two.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/page-home-two/page-home-two.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-block-slideshow></app-block-slideshow>\r\n\r\n<app-block-features layout=\"boxed\"></app-block-features>\r\n\r\n<app-block-products-carousel\r\n    header=\"Featured Products\"\r\n    layout=\"grid-5\"\r\n    [rows]=\"2\"\r\n    [loading]=\"featuredProducts.loading\"\r\n    [products]=\"featuredProducts.products\"\r\n    [groups]=\"featuredProducts.groups\"\r\n    (groupChange)=\"groupChange(featuredProducts, $event)\"\r\n></app-block-products-carousel>\r\n\r\n<app-block-banner></app-block-banner>\r\n\r\n<app-block-products header=\"Bestsellers\" layout=\"large-last\" [products]=\"bestsellers$|async\"></app-block-products>\r\n\r\n<app-block-categories header=\"Popular Categories\" layout=\"compact\" [categories]=\"popularCategories$|async\"></app-block-categories>\r\n\r\n<app-block-products-carousel\r\n    header=\"New Arrivals\"\r\n    layout=\"grid-5\"\r\n    [rows]=\"1\"\r\n    [loading]=\"latestProducts.loading\"\r\n    [products]=\"latestProducts.products\"\r\n    [groups]=\"latestProducts.groups\"\r\n    (groupChange)=\"groupChange(latestProducts, $event)\"\r\n></app-block-products-carousel>\r\n\r\n<app-block-posts header=\"Latest News\" layout=\"grid-nl\" [posts]=\"posts\"></app-block-posts>\r\n\r\n<app-block-brands [brands]=\"brands$|async\"></app-block-brands>\r\n\r\n<app-block-product-columns>\r\n    <app-block-product-columns-item header=\"Top Rated Products\" [products]=\"columnTopRated$|async\"></app-block-product-columns-item>\r\n    <app-block-product-columns-item header=\"Special Offers\" [products]=\"columnSpecialOffers$|async\"></app-block-product-columns-item>\r\n    <app-block-product-columns-item header=\"Bestsellers\" [products]=\"columnBestsellers$|async\"></app-block-product-columns-item>\r\n</app-block-product-columns>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/page-not-found/page-not-found.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/page-not-found/page-not-found.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"block\">\r\n    <div class=\"container\">\r\n        <div class=\"not-found\">\r\n            <div class=\"not-found__404\">\r\n                Oops! Error 404\r\n            </div>\r\n\r\n            <div class=\"not-found__content\">\r\n                <h1 class=\"not-found__title\">Page Not Found</h1>\r\n\r\n                <p class=\"not-found__text\">\r\n                    We can't seem to find the page you're looking for.<br>\r\n                    Try to use the search.\r\n                </p>\r\n\r\n                <form class=\"not-found__search\">\r\n                    <input type=\"text\" class=\"not-found__search-input form-control\" placeholder=\"Search Query...\">\r\n                    <button type=\"submit\" class=\"not-found__search-button btn btn-primary\">Search</button>\r\n                </form>\r\n\r\n                <p class=\"not-found__text\">\r\n                    Or go to the home page to start over.\r\n                </p>\r\n\r\n                <a class=\"btn btn-secondary btn-sm\" href=\"index.html\">Go To Home Page</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/alert/alert.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/alert/alert.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-content></ng-content>\r\n<button *ngIf=\"dismissible\" type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\" (click)=\"onClose()\">\r\n    <app-icon name=\"cross-12\" size=\"12\"></app-icon>\r\n</button>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/icon/icon.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/icon/icon.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg [attr.width]=\"width\" [attr.height]=\"height\"><use [attr.xlink:href]=\"'assets/images/sprite.svg#' + id\"></use></svg>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/input-number/input-number.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/input-number/input-number.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<input class=\"form-control input-number__input\" type=\"number\"\r\n       [ngClass]=\"{'form-control-sm': size === 'sm', 'form-control-lg': size === 'lg'}\"\r\n       [min]=\"options.min\"\r\n       [max]=\"options.max\"\r\n       [value]=\"value\"\r\n       [disabled]=\"options.disabled\"\r\n       [readOnly]=\"options.readonly\"\r\n       (input)=\"input()\"\r\n       (blur)=\"onTouched()\" #inputElement>\r\n\r\n<div class=\"input-number__add\" (mousedown)=\"add()\"></div>\r\n<div class=\"input-number__sub\" (mousedown)=\"sub()\"></div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/loading-bar/loading-bar.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/loading-bar/loading-bar.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"loading-bar\" #bar>\r\n    <div class=\"loading-bar__inner\"></div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/page-header/page-header.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/page-header/page-header.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"page-header\">\r\n    <div class=\"page-header__container container\">\r\n        <div class=\"page-header__breadcrumb\">\r\n            <nav aria-label=\"breadcrumb\">\r\n                <ol class=\"breadcrumb\">\r\n                    <ng-container *ngFor=\"let breadcrumb of breadcrumbs; last as last\">\r\n                        <li *ngIf=\"!last\" class=\"breadcrumb-item\">\r\n                            <a [routerLink]=\"breadcrumb.url\">{{ breadcrumb.label }}</a>\r\n                            <app-icon class=\"breadcrumb-arrow\" name=\"arrow-rounded-right-6x9\" size=\"6x9\"></app-icon>\r\n                        </li>\r\n                        <li *ngIf=\"last\" class=\"breadcrumb-item active\" aria-current=\"page\">{{ breadcrumb.label }}</li>\r\n                    </ng-container>\r\n                </ol>\r\n            </nav>\r\n        </div>\r\n        <div *ngIf=\"header\" class=\"page-header__title\">\r\n            <h1>{{ header }}</h1>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/pagination/pagination.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/pagination/pagination.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ul class=\"pagination justify-content-center\">\r\n    <li class=\"page-item\" [class.disabled]=\"current <= 1\">\r\n        <a class=\"page-link page-link--with-arrow\" aria-label=\"Previous\" (click)=\"setPage(current - 1)\">\r\n            <app-icon class=\"page-link__arrow page-link__arrow--left\" aria-hidden=\"true\" name=\"arrow-rounded-left-8x13\" size=\"8x13\"></app-icon>\r\n        </a>\r\n    </li>\r\n    <li *ngFor=\"let page of pages; trackBy: trackByFn\" class=\"page-item\" [class.active]=\"page === current\">\r\n        <a class=\"page-link\" (click)=\"setPage(page)\">\r\n            {{ page }}\r\n            <span *ngIf=\"page === current\" class=\"sr-only\">(current)</span>\r\n        </a>\r\n    </li>\r\n    <li class=\"page-item\" [class.disabled]=\"current >= total\">\r\n        <a class=\"page-link page-link--with-arrow\" aria-label=\"Next\" (click)=\"setPage(current + 1)\">\r\n            <app-icon class=\"page-link__arrow page-link__arrow--right\" aria-hidden=\"true\" name=\"arrow-rounded-right-8x13\" size=\"8x13\"></app-icon>\r\n        </a>\r\n    </li>\r\n</ul>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/post-card/post-card.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/post-card/post-card.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"post-card\" [ngClass]=\"{\r\n    'post-card--layout--grid': ['grid-nl', 'grid-lg'].includes(layout),\r\n    'post-card--layout--list': ['list-nl', 'list-sm'].includes(layout),\r\n\r\n    'post-card--size--nl': ['grid-nl', 'list-nl'].includes(layout),\r\n    'post-card--size--lg': layout === 'grid-lg',\r\n    'post-card--size--sm': layout === 'list-sm'\r\n}\">\r\n    <div class=\"post-card__image\">\r\n        <a appClick [routerLink]=\"root.post()\">\r\n            <img [src]=\"post.image\" alt=\"\">\r\n        </a>\r\n    </div>\r\n    <div class=\"post-card__info\">\r\n        <div class=\"post-card__category\">\r\n            <a appClick [routerLink]=\"root.post()\" *ngFor=\"let category of post.categories\">{{ category }}</a>\r\n        </div>\r\n        <div class=\"post-card__name\">\r\n            <a appClick [routerLink]=\"[root.blog(), post.slug]\">{{ post.title }}</a>\r\n        </div>\r\n        <div class=\"post-card__date\">{{ post.date }}</div>\r\n        <div class=\"post-card__content\">\r\n            {{post.shot_desc}}\r\n        </div>\r\n        <div class=\"post-card__read-more\">\r\n            <a appClick [routerLink]=\"root.post()\" class=\"btn btn-secondary btn-sm\">Read More</a>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/product-card/product-card.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/product-card/product-card.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"product-card\" [ngClass]=\"{\r\n    'product-card--layout--grid product-card--size--sm': layout === 'grid-sm',\r\n    'product-card--layout--grid product-card--size--nl': layout === 'grid-nl',\r\n    'product-card--layout--grid product-card--size--lg': layout === 'grid-lg',\r\n    'product-card--layout--list':                        layout === 'list',\r\n    'product-card--layout--horizontal':                  layout === 'horizontal'\r\n}\">\r\n    <button class=\"product-card__quickview\" type=\"button\" appClick (click)=\"showQuickview()\" [ngClass]=\"{'product-card__quickview--preload': showingQuickview}\">\r\n        <app-icon name=\"quickview-16\" size=\"16\"></app-icon>\r\n        <span class=\"fake-svg-icon\"></span>\r\n    </button>\r\n\r\n    <div *ngIf=\"product.badges.length\" class=\"product-card__badges-list\">\r\n        <div *ngIf=\"product.badges.includes('sale')\" class=\"product-card__badge product-card__badge--sale\">Sale</div>\r\n        <div *ngIf=\"product.badges.includes('hot')\" class=\"product-card__badge product-card__badge--hot\">Hot</div>\r\n        <div *ngIf=\"product.badges.includes('new')\" class=\"product-card__badge product-card__badge--new\">New</div>\r\n    </div>\r\n\r\n    <div class=\"product-card__image\">\r\n        <a appClick [routerLink]=\"root.product(product)\" *ngIf=\"product.images?.length\"><img [src]=\"product.images[0]\" alt=\"\"></a>\r\n    </div>\r\n    <div class=\"product-card__info\">\r\n        <div class=\"product-card__name\">\r\n            <a appClick [routerLink]=\"root.product(product)\">{{ product.name }}</a>\r\n        </div>\r\n        <div class=\"product-card__rating\">\r\n            <app-rating [value]=\"product.rating\"></app-rating>\r\n            <div class=\"product-card__rating-legend\">{{ product.reviews }} Reviews</div>\r\n        </div>\r\n        <ul *ngIf=\"featuredAttributes.length\" class=\"product-card__features-list\">\r\n            <li *ngFor=\"let attribute of featuredAttributes\">\r\n                {{ attribute.name }}:\r\n                <ng-container *ngFor=\"let value of attribute.values; let last = last\">\r\n                    {{ value.name }}<ng-container *ngIf=\"!last\">, </ng-container>\r\n                </ng-container>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n    <div class=\"product-card__actions\">\r\n        <div class=\"product-card__availability\">\r\n            Availability:\r\n            <span *ngIf=\"product.availability === 'in-stock'\" class=\"text-success\">In Stock</span>\r\n        </div>\r\n        <div class=\"product-card__prices\">\r\n            <ng-container *ngIf=\"product.compareAtPrice\">\r\n                <span class=\"product-card__new-price\">{{ product.price|currencyFormat }}</span>{{ ' ' }}\r\n                <span class=\"product-card__old-price\">{{ product.compareAtPrice|currencyFormat }}</span>\r\n            </ng-container>\r\n            <ng-container *ngIf=\"!product.compareAtPrice\">\r\n                {{ product.price|currencyFormat }}\r\n            </ng-container>\r\n        </div>\r\n        <div class=\"product-card__buttons\">\r\n            <button class=\"btn btn-primary product-card__addtocart\" type=\"button\" appClick (click)=\"addToCart()\" [ngClass]=\"{'btn-loading': addingToCart}\">Add To Cart</button>\r\n            <button class=\"btn btn-secondary product-card__addtocart product-card__addtocart--list\" type=\"button\" appClick (click)=\"addToCart()\" [ngClass]=\"{'btn-loading': addingToCart}\">Add To Cart</button>\r\n            <button class=\"btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__wishlist\" type=\"button\" appClick (click)=\"addToWishlist()\" [ngClass]=\"{'btn-loading': addingToWishlist}\">\r\n                <app-icon name=\"wishlist-16\" size=\"16\"></app-icon>\r\n                <span class=\"fake-svg-icon fake-svg-icon--wishlist-16\"></span>\r\n            </button>\r\n            <button class=\"btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__compare\" type=\"button\" appClick (click)=\"addToCompare()\" [ngClass]=\"{'btn-loading': addingToCompare}\">\r\n                <app-icon name=\"compare-16\" size=\"16\"></app-icon>\r\n                <span class=\"fake-svg-icon fake-svg-icon--compare-16\"></span>\r\n            </button>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/product/product.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/product/product.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"product product--layout--{{ layout }}\" *ngIf=\"product\">\n    <div class=\"product__content\">\n        <!-- .product__gallery -->\n        <div class=\"product__gallery\">\n            <div class=\"product-gallery\" *ngIf=\"showGallery\">\n                <div class=\"product-gallery__featured\">\n                    <owl-carousel-o [options]=\"carouselOptions\" (changed)=\"featuredCarouselTranslated($event)\" appOwlPreventClick #featuredCarousel>\n                        <ng-container *ngFor=\"let image of images\">\n                            <ng-template carouselSlide [id]=\"image.id\">\n                                <a appClick (click)=\"openPhotoSwipe($event, image);\" [href]=\"image.url\" target=\"_blank\">\n                                    <img [src]=\"image.url\" alt=\"\" #imageElement>\n                                </a>\n                            </ng-template>\n                        </ng-container>\n                    </owl-carousel-o>\n                </div>\n                <div class=\"product-gallery__carousel\">\n                    <owl-carousel-o [options]=\"thumbnailsCarouselOptions\" [appFakeSlides]=\"images.length\" #fakeSlides=\"appFakeSlides\" appOwlPreventClick #thumbnailsCarousel>\n                        <ng-container *ngFor=\"let image of images\">\n                            <ng-template carouselSlide [id]=\"image.id\">\n                                <span class=\"product-gallery__carousel-item\"\n                                   [ngClass]=\"{'product-gallery__carousel-item--active': image.active}\"\n                                   appClick (click)=\"featuredCarousel.to(image.id); setActiveImage(image)\">\n                                    <img class=\"product-gallery__carousel-image\" [src]=\"image.url\" alt=\"\">\n                                </span>\n                            </ng-template>\n                        </ng-container>\n                        <ng-container *ngFor=\"let i of fakeSlides.slides\">\n                            <ng-template carouselSlide [id]=\"'fake-slide-'+i\"></ng-template>\n                        </ng-container>\n                    </owl-carousel-o>\n                </div>\n            </div>\n        </div>\n        <!-- .product__gallery / end -->\n        <!-- .product__info -->\n        <div class=\"product__info\">\n            <div class=\"product__wishlist-compare\">\n                <button type=\"button\" class=\"btn btn-sm btn-light btn-svg-icon\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Wishlist\"\n                        appClick (click)=\"addToWishlist()\"\n                        [ngClass]=\"{'btn-loading': addingToWishlist}\">\n                    <app-icon name=\"wishlist-16\" size=\"16\"></app-icon>\n                </button>\n                <button type=\"button\" class=\"btn btn-sm btn-light btn-svg-icon\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Compare\"\n                        appClick (click)=\"addToCompare()\"\n                        [ngClass]=\"{'btn-loading': addingToCompare}\">\n                    <app-icon name=\"compare-16\" size=\"16\"></app-icon>\n                </button>\n            </div>\n            <h1 class=\"product__name\">{{ product.name }}</h1>\n            <div class=\"product__rating\">\n                <div class=\"product__rating-stars\">\n                    <app-rating [value]=\"product.rating\"></app-rating>\n                </div>\n                <div class=\"product__rating-legend\">\n                    <a href=\"\" appClick>{{ product.reviews }} Reviews</a><span>/</span><a href=\"\" appClick>Write A Review</a>\n                </div>\n            </div>\n            <div class=\"product__description\">\n                {{ product.short_description }}\n            </div>\n            <ul class=\"product__features\">\n                <li>Speed: 750 RPM</li>\n                <li>Power Source: Cordless-Electric</li>\n                <li>Battery Cell Type: Lithium</li>\n                <li>Voltage: 20 Volts</li>\n                <li>Battery Capacity: 2 Ah</li>\n            </ul>\n            <ul class=\"product__meta\">\n                <li class=\"product__meta-availability\">Availability: <span class=\"text-success\">{{ product.availability }}</span></li>\n                <li>Brand: <a href=\"\" appClick>{{ product.brand }}</a></li>\n                <li>SKU: {{ product.sku }}</li>\n            </ul>\n        </div>\n        <!-- .product__info / end -->\n        <!-- .product__sidebar -->\n        <div class=\"product__sidebar\">\n            <div class=\"product__availability\">\n                Availability: <span class=\"text-success\">{{ product.availability }}</span>\n            </div>\n\n            <div class=\"product__prices\">\n                <ng-container *ngIf=\"product.compareAtPrice\">\n                    <span class=\"product__new-price\">{{ product.price|currencyFormat }}</span>{{ ' ' }}\n                    <span class=\"product__old-price\">{{ product.compareAtPrice|currencyFormat }}</span>\n                </ng-container>\n                <ng-container *ngIf=\"!product.compareAtPrice\">\n                    {{ product.price|currencyFormat }}\n                </ng-container>\n            </div>\n            <!-- .product__options -->\n            <form class=\"product__options\">\n                <!-- <div class=\"form-group product__option\">\n                    <label class=\"product__option-label\">Color</label>\n                    <div class=\"input-radio-color\">\n                        <div class=\"input-radio-color__list\">\n                            <label class=\"input-radio-color__item input-radio-color__item--white\" style=\"color: #fff;\" data-toggle=\"tooltip\" title=\"White\">\n                                <input type=\"radio\" name=\"color\">\n                                <span></span>\n                            </label>\n                            <label class=\"input-radio-color__item\" style=\"color: #ffd333;\" data-toggle=\"tooltip\" title=\"Yellow\">\n                                <input type=\"radio\" name=\"color\">\n                                <span></span>\n                            </label>\n                            <label class=\"input-radio-color__item\" style=\"color: #ff4040;\" data-toggle=\"tooltip\" title=\"Red\">\n                                <input type=\"radio\" name=\"color\">\n                                <span></span>\n                            </label>\n                            <label class=\"input-radio-color__item input-radio-color__item--disabled\" style=\"color: #4080ff;\" data-toggle=\"tooltip\" title=\"Blue\">\n                                <input type=\"radio\" name=\"color\" disabled>\n                                <span></span>\n                            </label>\n                        </div>\n                    </div>\n                </div> -->\n                <!-- <div class=\"form-group product__option\">\n                    <label class=\"product__option-label\">Material</label>\n                    <div class=\"input-radio-label\">\n                        <div class=\"input-radio-label__list\">\n                            <label>\n                                <input type=\"radio\" name=\"material\">\n                                <span>Metal</span>\n                            </label>\n                            <label>\n                                <input type=\"radio\" name=\"material\">\n                                <span>Wood</span>\n                            </label>\n                            <label>\n                                <input type=\"radio\" name=\"material\" disabled>\n                                <span>Plastic</span>\n                            </label>\n                        </div>\n                    </div>\n                </div> -->\n                <div class=\"form-group product__option\">\n                    <label class=\"product__option-label\">Quantity</label>\n                    <div class=\"product__actions\">\n                        <div class=\"product__actions-item\">\n                            <app-input-number aria-label=\"Quantity\" class=\"product__quantity\" size=\"lg\" [min]=\"1\" [formControl]=\"quantity\"></app-input-number>\n                        </div>\n                        <div class=\"product__actions-item product__actions-item--addtocart\">\n                            <button type=\"button\" class=\"btn btn-primary btn-lg\"\n                                    [ngClass]=\"{'btn-loading': addingToCart}\"\n                                    appClick (click)=\"addToCart()\">Add to cart</button>\n                        </div>\n                        <div class=\"product__actions-item product__actions-item--wishlist\">\n                            <button type=\"button\" class=\"btn btn-secondary btn-svg-icon btn-lg\" data-toggle=\"tooltip\" title=\"Wishlist\"\n                                    [ngClass]=\"{'btn-loading': addingToWishlist}\"\n                                    appClick (click)=\"addToWishlist()\">\n                                <app-icon name=\"wishlist-16\" size=\"16\"></app-icon>\n                            </button>\n                        </div>\n                        <div class=\"product__actions-item product__actions-item--compare\">\n                            <button type=\"button\" class=\"btn btn-secondary btn-svg-icon btn-lg\" data-toggle=\"tooltip\" title=\"Compare\"\n                                    [ngClass]=\"{'btn-loading': addingToCompare}\"\n                                    appClick (click)=\"addToCompare()\">\n                                <app-icon name=\"compare-16\" size=\"16\"></app-icon>\n                            </button>\n                        </div>\n                    </div>\n                </div>\n            </form>\n            <!-- .product__options / end -->\n        </div>\n        <!-- .product__end \n        <div class=\"product__footer\">\n            <div class=\"product__tags tags\">\n                <div class=\"tags__list\">\n                    <a href=\"\" appClick>Mounts</a>\n                    <a href=\"\" appClick>Electrodes</a>\n                    <a href=\"\" appClick>Chainsaws</a>\n                </div>\n            </div>\n\n            <div class=\"product__share-links share-links\">\n                <ul class=\"share-links__list\">\n                    <li class=\"share-links__item share-links__item--type--like\"><a href=\"\" appClick>Like</a></li>\n                    <li class=\"share-links__item share-links__item--type--tweet\"><a href=\"\" appClick>Tweet</a></li>\n                    <li class=\"share-links__item share-links__item--type--pin\"><a href=\"\" appClick>Pin It</a></li>\n                    <li class=\"share-links__item share-links__item--type--counter\"><a href=\"\" appClick>4K</a></li>\n                </ul>\n            </div>\n        </div> -->\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/quickview/quickview.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/quickview/quickview.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-template #modal>\r\n    <div class=\"quickview\">\r\n        <button class=\"quickview__close\" type=\"button\" appClick (click)=\"modalRef.hide()\">\r\n            <app-icon name=\"cross-20\" size=\"20\"></app-icon>\r\n        </button>\r\n\r\n        <app-product [product]=\"product\" layout=\"quickview\"></app-product>\r\n    </div>\r\n</ng-template>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/rating/rating.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/rating/rating.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"rating\">\r\n    <div class=\"rating__body\">\r\n        <ng-container *ngFor=\"let i of [1, 2, 3, 4, 5]\">\r\n            <svg class=\"rating__star\" [ngClass]=\"{'rating__star--active': value >= i}\" width=\"13px\" height=\"12px\">\r\n                <g class=\"rating__fill\"><use xlink:href=\"assets/images/sprite.svg#star-normal\"></use></g>\r\n                <g class=\"rating__stroke\"><use xlink:href=\"assets/images/sprite.svg#star-normal-stroke\"></use></g>\r\n            </svg>\r\n\r\n            <div class=\"rating__star rating__star--only-edge\" [ngClass]=\"{'rating__star--active': value >= i}\">\r\n                <div class=\"rating__fill\"><div class=\"fake-svg-icon\"></div></div>\r\n                <div class=\"rating__stroke\"><div class=\"fake-svg-icon\"></div></div>\r\n            </div>\r\n        </ng-container>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/page-not-found/page-not-found.component */ "./src/app/pages/page-not-found/page-not-found.component.ts");
/* harmony import */ var _pages_page_home_one_page_home_one_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/page-home-one/page-home-one.component */ "./src/app/pages/page-home-one/page-home-one.component.ts");
/* harmony import */ var _pages_page_home_two_page_home_two_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/page-home-two/page-home-two.component */ "./src/app/pages/page-home-two/page-home-two.component.ts");
/* harmony import */ var _components_root_root_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/root/root.component */ "./src/app/components/root/root.component.ts");







const routes = [
    // START / ONLY_FOR_DEMO_YOU_CAN_DELETE_IT
    {
        path: 'home-two',
        component: _components_root_root_component__WEBPACK_IMPORTED_MODULE_6__["RootComponent"],
        data: {
            headerLayout: 'compact'
        },
        children: [
            {
                path: '',
                component: _pages_page_home_two_page_home_two_component__WEBPACK_IMPORTED_MODULE_5__["PageHomeTwoComponent"]
            }
        ],
    },
    // END / ONLY_FOR_DEMO_YOU_CAN_DELETE_IT
    {
        path: '',
        component: _components_root_root_component__WEBPACK_IMPORTED_MODULE_6__["RootComponent"],
        data: {
            // Header layout. Choose one of ['classic', 'compact'].
            headerLayout: 'classic'
        },
        children: [
            {
                path: '',
                pathMatch: 'full',
                component: _pages_page_home_one_page_home_one_component__WEBPACK_IMPORTED_MODULE_4__["PageHomeOneComponent"]
            },
            {
                path: 'shop',
                loadChildren: () => __webpack_require__.e(/*! import() | modules-shop-shop-module */ "modules-shop-shop-module").then(__webpack_require__.bind(null, /*! ./modules/shop/shop.module */ "./src/app/modules/shop/shop.module.ts")).then(m => m.ShopModule)
            },
            {
                path: 'blog',
                loadChildren: () => __webpack_require__.e(/*! import() | modules-blog-blog-module */ "modules-blog-blog-module").then(__webpack_require__.bind(null, /*! ./modules/blog/blog.module */ "./src/app/modules/blog/blog.module.ts")).then(m => m.BlogModule)
            },
            {
                path: 'account',
                loadChildren: () => __webpack_require__.e(/*! import() | modules-account-account-module */ "modules-account-account-module").then(__webpack_require__.bind(null, /*! ./modules/account/account.module */ "./src/app/modules/account/account.module.ts")).then(m => m.AccountModule)
            },
            {
                path: 'site',
                loadChildren: () => __webpack_require__.e(/*! import() | modules-site-site-module */ "modules-site-site-module").then(__webpack_require__.bind(null, /*! ./modules/site/site.module */ "./src/app/modules/site/site.module.ts")).then(m => m.SiteModule)
            },
            {
                path: '**',
                component: _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__["PageNotFoundComponent"]
            }
        ],
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
                scrollPositionRestoration: 'enabled',
                anchorScrolling: 'enabled',
            })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/services/cart.service */ "./src/app/shared/services/cart.service.ts");
/* harmony import */ var _shared_services_compare_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/services/compare.service */ "./src/app/shared/services/compare.service.ts");
/* harmony import */ var _shared_services_wishlist_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/services/wishlist.service */ "./src/app/shared/services/wishlist.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _shared_services_currency_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/services/currency.service */ "./src/app/shared/services/currency.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");










let AppComponent = class AppComponent {
    constructor(platformId, router, toastr, cart, compare, wishlist, zone, scroller, currency) {
        this.platformId = platformId;
        this.router = router;
        this.toastr = toastr;
        this.cart = cart;
        this.compare = compare;
        this.wishlist = wishlist;
        this.zone = zone;
        this.scroller = scroller;
        this.currency = currency;
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_7__["isPlatformBrowser"])(this.platformId)) {
            this.zone.runOutsideAngular(() => {
                this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["filter"])(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__["NavigationEnd"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["first"])()).subscribe(() => {
                    const preloader = document.querySelector('.site-preloader');
                    preloader.addEventListener('transitionend', (event) => {
                        if (event.propertyName === 'opacity') {
                            preloader.remove();
                        }
                    });
                    preloader.classList.add('site-preloader__fade');
                });
            });
        }
    }
    ngOnInit() {
        // properties of the CurrencyFormatOptions interface fully complies
        // with the arguments of the built-in pipe "currency"
        // https://angular.io/api/common/CurrencyPipe
        this.currency.options = {
            code: 'INR',
        };
        this.router.events.subscribe((event) => {
            if ((event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__["NavigationEnd"])) {
                this.scroller.scrollToPosition([0, 0]);
            }
        });
        this.cart.onAdding$.subscribe(product => {
            this.toastr.success(`Product "${product.name}" added to cart!`);
        });
        this.compare.onAdding$.subscribe(product => {
            this.toastr.success(`Product "${product.name}" added to compare!`);
        });
        this.wishlist.onAdding$.subscribe(product => {
            this.toastr.success(`Product "${product.name}" added to wish list!`);
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"],] }] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] },
    { type: _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"] },
    { type: _shared_services_compare_service__WEBPACK_IMPORTED_MODULE_4__["CompareService"] },
    { type: _shared_services_wishlist_service__WEBPACK_IMPORTED_MODULE_5__["WishlistService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["ViewportScroller"] },
    { type: _shared_services_currency_service__WEBPACK_IMPORTED_MODULE_8__["CurrencyService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
        ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
        _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"],
        _shared_services_compare_service__WEBPACK_IMPORTED_MODULE_4__["CompareService"],
        _shared_services_wishlist_service__WEBPACK_IMPORTED_MODULE_5__["WishlistService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
        _angular_common__WEBPACK_IMPORTED_MODULE_7__["ViewportScroller"],
        _shared_services_currency_service__WEBPACK_IMPORTED_MODULE_8__["CurrencyService"]])
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-owl-carousel-o */ "./node_modules/ngx-owl-carousel-o/fesm2015/ngx-owl-carousel-o.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _modules_blocks_blocks_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/blocks/blocks.module */ "./src/app/modules/blocks/blocks.module.ts");
/* harmony import */ var _modules_footer_footer_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/footer/footer.module */ "./src/app/modules/footer/footer.module.ts");
/* harmony import */ var _modules_header_header_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/header/header.module */ "./src/app/modules/header/header.module.ts");
/* harmony import */ var _modules_mobile_mobile_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/mobile/mobile.module */ "./src/app/modules/mobile/mobile.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _modules_widgets_widgets_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modules/widgets/widgets.module */ "./src/app/modules/widgets/widgets.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_root_root_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/root/root.component */ "./src/app/components/root/root.component.ts");
/* harmony import */ var _pages_page_home_one_page_home_one_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/page-home-one/page-home-one.component */ "./src/app/pages/page-home-one/page-home-one.component.ts");
/* harmony import */ var _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/page-not-found/page-not-found.component */ "./src/app/pages/page-not-found/page-not-found.component.ts");
/* harmony import */ var _pages_page_home_two_page_home_two_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/page-home-two/page-home-two.component */ "./src/app/pages/page-home-two/page-home-two.component.ts");


// import { registerLocaleData } from '@angular/common';
// import localeIt from '@angular/common/locales/it';
//
// registerLocaleData(localeIt, 'it');
// modules (angular)



// modules (third-party)


// modules







// components


// pages



let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            // components
            _app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"],
            _components_root_root_component__WEBPACK_IMPORTED_MODULE_15__["RootComponent"],
            // pages
            _pages_page_home_one_page_home_one_component__WEBPACK_IMPORTED_MODULE_16__["PageHomeOneComponent"],
            _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_17__["PageNotFoundComponent"],
            _pages_page_home_two_page_home_two_component__WEBPACK_IMPORTED_MODULE_18__["PageHomeTwoComponent"]
        ],
        imports: [
            // modules (angular)
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"].withServerTransition({ appId: 'serverApp' }),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            // modules (third-party)
            ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_5__["CarouselModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrModule"].forRoot(),
            // modules
            _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
            _modules_blocks_blocks_module__WEBPACK_IMPORTED_MODULE_8__["BlocksModule"],
            _modules_footer_footer_module__WEBPACK_IMPORTED_MODULE_9__["FooterModule"],
            _modules_header_header_module__WEBPACK_IMPORTED_MODULE_10__["HeaderModule"],
            _modules_mobile_mobile_module__WEBPACK_IMPORTED_MODULE_11__["MobileModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedModule"],
            _modules_widgets_widgets_module__WEBPACK_IMPORTED_MODULE_13__["WidgetsModule"]
        ],
        providers: [
        // { provide: LOCALE_ID, useValue: 'it' }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/root/root.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/root/root.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcm9vdC9yb290LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/root/root.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/root/root.component.ts ***!
  \***************************************************/
/*! exports provided: RootComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootComponent", function() { return RootComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let RootComponent = class RootComponent {
    constructor(router, route) {
        this.router = router;
        this.route = route;
        this.route.data.subscribe(data => this.headerLayout = data.headerLayout);
    }
};
RootComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
RootComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./root.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/root/root.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./root.component.scss */ "./src/app/components/root/root.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], RootComponent);



/***/ }),

/***/ "./src/app/modules/blocks/block-banner/block-banner.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/modules/blocks/block-banner/block-banner.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYmxvY2tzL2Jsb2NrLWJhbm5lci9ibG9jay1iYW5uZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/blocks/block-banner/block-banner.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/blocks/block-banner/block-banner.component.ts ***!
  \***********************************************************************/
/*! exports provided: BlockBannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockBannerComponent", function() { return BlockBannerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BlockBannerComponent = class BlockBannerComponent {
    constructor() { }
};
BlockBannerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-block-banner',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./block-banner.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/blocks/block-banner/block-banner.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./block-banner.component.scss */ "./src/app/modules/blocks/block-banner/block-banner.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], BlockBannerComponent);



/***/ }),

/***/ "./src/app/modules/blocks/block-brands/block-brands.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/modules/blocks/block-brands/block-brands.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYmxvY2tzL2Jsb2NrLWJyYW5kcy9ibG9jay1icmFuZHMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/blocks/block-brands/block-brands.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/blocks/block-brands/block-brands.component.ts ***!
  \***********************************************************************/
/*! exports provided: BlockBrandsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockBrandsComponent", function() { return BlockBrandsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_services_direction_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/direction.service */ "./src/app/shared/services/direction.service.ts");
/* harmony import */ var _shared_services_root_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/root.service */ "./src/app/shared/services/root.service.ts");




let BlockBrandsComponent = class BlockBrandsComponent {
    constructor(root, direction) {
        this.root = root;
        this.direction = direction;
        this.brands = [];
        this.carouselOptions = {
            items: 6,
            nav: false,
            dots: false,
            loop: true,
            responsive: {
                1100: { items: 6 },
                920: { items: 5 },
                680: { items: 4 },
                500: { items: 3 },
                0: { items: 2 }
            },
            rtl: this.direction.isRTL()
        };
    }
};
BlockBrandsComponent.ctorParameters = () => [
    { type: _shared_services_root_service__WEBPACK_IMPORTED_MODULE_3__["RootService"] },
    { type: _shared_services_direction_service__WEBPACK_IMPORTED_MODULE_2__["DirectionService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], BlockBrandsComponent.prototype, "brands", void 0);
BlockBrandsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-block-brands',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./block-brands.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/blocks/block-brands/block-brands.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./block-brands.component.scss */ "./src/app/modules/blocks/block-brands/block-brands.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_root_service__WEBPACK_IMPORTED_MODULE_3__["RootService"],
        _shared_services_direction_service__WEBPACK_IMPORTED_MODULE_2__["DirectionService"]])
], BlockBrandsComponent);



/***/ }),

/***/ "./src/app/modules/blocks/block-categories/block-categories.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/blocks/block-categories/block-categories.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYmxvY2tzL2Jsb2NrLWNhdGVnb3JpZXMvYmxvY2stY2F0ZWdvcmllcy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/blocks/block-categories/block-categories.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/blocks/block-categories/block-categories.component.ts ***!
  \*******************************************************************************/
/*! exports provided: BlockCategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockCategoriesComponent", function() { return BlockCategoriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_services_root_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/root.service */ "./src/app/shared/services/root.service.ts");



let BlockCategoriesComponent = class BlockCategoriesComponent {
    constructor(root) {
        this.root = root;
        this.header = '';
        this.layout = 'classic';
        this.categories = [];
    }
};
BlockCategoriesComponent.ctorParameters = () => [
    { type: _shared_services_root_service__WEBPACK_IMPORTED_MODULE_2__["RootService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], BlockCategoriesComponent.prototype, "header", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], BlockCategoriesComponent.prototype, "layout", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], BlockCategoriesComponent.prototype, "categories", void 0);
BlockCategoriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-block-categories',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./block-categories.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/blocks/block-categories/block-categories.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./block-categories.component.scss */ "./src/app/modules/blocks/block-categories/block-categories.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_root_service__WEBPACK_IMPORTED_MODULE_2__["RootService"]])
], BlockCategoriesComponent);



/***/ }),

/***/ "./src/app/modules/blocks/block-features/block-features.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/blocks/block-features/block-features.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYmxvY2tzL2Jsb2NrLWZlYXR1cmVzL2Jsb2NrLWZlYXR1cmVzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/blocks/block-features/block-features.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/blocks/block-features/block-features.component.ts ***!
  \***************************************************************************/
/*! exports provided: BlockFeaturesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockFeaturesComponent", function() { return BlockFeaturesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BlockFeaturesComponent = class BlockFeaturesComponent {
    constructor() {
        this.layout = 'classic';
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], BlockFeaturesComponent.prototype, "layout", void 0);
BlockFeaturesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-block-features',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./block-features.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/blocks/block-features/block-features.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./block-features.component.scss */ "./src/app/modules/blocks/block-features/block-features.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], BlockFeaturesComponent);



/***/ }),

/***/ "./src/app/modules/blocks/block-map/block-map.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/modules/blocks/block-map/block-map.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYmxvY2tzL2Jsb2NrLW1hcC9ibG9jay1tYXAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/blocks/block-map/block-map.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/blocks/block-map/block-map.component.ts ***!
  \*****************************************************************/
/*! exports provided: BlockMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockMapComponent", function() { return BlockMapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BlockMapComponent = class BlockMapComponent {
    constructor() { }
};
BlockMapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-block-map',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./block-map.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/blocks/block-map/block-map.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./block-map.component.scss */ "./src/app/modules/blocks/block-map/block-map.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], BlockMapComponent);



/***/ }),

/***/ "./src/app/modules/blocks/block-posts/block-posts.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/modules/blocks/block-posts/block-posts.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYmxvY2tzL2Jsb2NrLXBvc3RzL2Jsb2NrLXBvc3RzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/blocks/block-posts/block-posts.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/blocks/block-posts/block-posts.component.ts ***!
  \*********************************************************************/
/*! exports provided: BlockPostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockPostsComponent", function() { return BlockPostsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_services_direction_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/direction.service */ "./src/app/shared/services/direction.service.ts");



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
BlockPostsComponent.ctorParameters = () => [
    { type: _shared_services_direction_service__WEBPACK_IMPORTED_MODULE_2__["DirectionService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], BlockPostsComponent.prototype, "header", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], BlockPostsComponent.prototype, "layout", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], BlockPostsComponent.prototype, "posts", void 0);
BlockPostsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-block-posts',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./block-posts.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/blocks/block-posts/block-posts.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./block-posts.component.scss */ "./src/app/modules/blocks/block-posts/block-posts.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_direction_service__WEBPACK_IMPORTED_MODULE_2__["DirectionService"]])
], BlockPostsComponent);



/***/ }),

/***/ "./src/app/modules/blocks/block-product-columns/block-product-columns-item/block-product-columns-item.component.sass":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/modules/blocks/block-product-columns/block-product-columns-item/block-product-columns-item.component.sass ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYmxvY2tzL2Jsb2NrLXByb2R1Y3QtY29sdW1ucy9ibG9jay1wcm9kdWN0LWNvbHVtbnMtaXRlbS9ibG9jay1wcm9kdWN0LWNvbHVtbnMtaXRlbS5jb21wb25lbnQuc2FzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/blocks/block-product-columns/block-product-columns-item/block-product-columns-item.component.ts":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/modules/blocks/block-product-columns/block-product-columns-item/block-product-columns-item.component.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: BlockProductColumnsItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockProductColumnsItemComponent", function() { return BlockProductColumnsItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BlockProductColumnsItemComponent = class BlockProductColumnsItemComponent {
    constructor() {
        this.classCol = true;
        this.products = [];
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.col'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], BlockProductColumnsItemComponent.prototype, "classCol", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], BlockProductColumnsItemComponent.prototype, "header", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], BlockProductColumnsItemComponent.prototype, "products", void 0);
BlockProductColumnsItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-block-product-columns-item',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./block-product-columns-item.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/blocks/block-product-columns/block-product-columns-item/block-product-columns-item.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./block-product-columns-item.component.sass */ "./src/app/modules/blocks/block-product-columns/block-product-columns-item/block-product-columns-item.component.sass")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], BlockProductColumnsItemComponent);



/***/ }),

/***/ "./src/app/modules/blocks/block-product-columns/block-product-columns.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/blocks/block-product-columns/block-product-columns.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYmxvY2tzL2Jsb2NrLXByb2R1Y3QtY29sdW1ucy9ibG9jay1wcm9kdWN0LWNvbHVtbnMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/blocks/block-product-columns/block-product-columns.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/blocks/block-product-columns/block-product-columns.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: BlockProductColumnsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockProductColumnsComponent", function() { return BlockProductColumnsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BlockProductColumnsComponent = class BlockProductColumnsComponent {
    constructor() { }
};
BlockProductColumnsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-block-product-columns',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./block-product-columns.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/blocks/block-product-columns/block-product-columns.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./block-product-columns.component.scss */ "./src/app/modules/blocks/block-product-columns/block-product-columns.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], BlockProductColumnsComponent);



/***/ }),

/***/ "./src/app/modules/blocks/block-products-carousel/block-products-carousel.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/blocks/block-products-carousel/block-products-carousel.component.scss ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYmxvY2tzL2Jsb2NrLXByb2R1Y3RzLWNhcm91c2VsL2Jsb2NrLXByb2R1Y3RzLWNhcm91c2VsLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/blocks/block-products-carousel/block-products-carousel.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/blocks/block-products-carousel/block-products-carousel.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: BlockProductsCarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockProductsCarouselComponent", function() { return BlockProductsCarouselComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_services_direction_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/direction.service */ "./src/app/shared/services/direction.service.ts");



let BlockProductsCarouselComponent = class BlockProductsCarouselComponent {
    constructor(direction) {
        this.direction = direction;
        this.layout = 'grid-4';
        this.rows = 1;
        this.products = [];
        this.groups = [];
        this.withSidebar = false;
        this.loading = false;
        this.groupChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.columns = [];
        this.carouselDefaultOptions = {
            items: 4,
            margin: 14,
            nav: false,
            dots: false,
            loop: true,
            stagePadding: 1,
            rtl: this.direction.isRTL()
        };
        this.carouselOptionsByLayout = {
            'grid-4': {
                responsive: {
                    1110: { items: 4, margin: 14 },
                    930: { items: 4, margin: 10 },
                    690: { items: 3, margin: 10 },
                    400: { items: 2, margin: 10 },
                    0: { items: 1 }
                }
            },
            'grid-4-sm': {
                responsive: {
                    820: { items: 4, margin: 14 },
                    640: { items: 3, margin: 10 },
                    400: { items: 2, margin: 10 },
                    0: { items: 1 }
                }
            },
            'grid-5': {
                responsive: {
                    1110: { items: 5, margin: 12 },
                    930: { items: 4, margin: 10 },
                    690: { items: 3, margin: 10 },
                    400: { items: 2, margin: 10 },
                    0: { items: 1 }
                }
            },
            horizontal: {
                items: 3,
                responsive: {
                    1110: { items: 3, margin: 14 },
                    930: { items: 3, margin: 10 },
                    690: { items: 2, margin: 10 },
                    0: { items: 1 }
                }
            }
        };
    }
    get carouselOptions() {
        return Object.assign({}, this.carouselDefaultOptions, this.carouselOptionsByLayout[this.layout]);
    }
    ngOnChanges(changes) {
        const properties = Object.keys(changes);
        if (properties.includes('products') || properties.includes('row')) {
            this.columns = [];
            if (this.products && this.rows > 0) {
                const products = this.products.slice();
                while (products.length > 0) {
                    this.columns.push(products.splice(0, this.rows));
                }
            }
        }
    }
};
BlockProductsCarouselComponent.ctorParameters = () => [
    { type: _shared_services_direction_service__WEBPACK_IMPORTED_MODULE_2__["DirectionService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], BlockProductsCarouselComponent.prototype, "header", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], BlockProductsCarouselComponent.prototype, "layout", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], BlockProductsCarouselComponent.prototype, "rows", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], BlockProductsCarouselComponent.prototype, "products", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], BlockProductsCarouselComponent.prototype, "groups", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], BlockProductsCarouselComponent.prototype, "withSidebar", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], BlockProductsCarouselComponent.prototype, "loading", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], BlockProductsCarouselComponent.prototype, "groupChange", void 0);
BlockProductsCarouselComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-block-products-carousel',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./block-products-carousel.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/blocks/block-products-carousel/block-products-carousel.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./block-products-carousel.component.scss */ "./src/app/modules/blocks/block-products-carousel/block-products-carousel.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_direction_service__WEBPACK_IMPORTED_MODULE_2__["DirectionService"]])
], BlockProductsCarouselComponent);



/***/ }),

/***/ "./src/app/modules/blocks/block-products/block-products.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/blocks/block-products/block-products.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYmxvY2tzL2Jsb2NrLXByb2R1Y3RzL2Jsb2NrLXByb2R1Y3RzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/blocks/block-products/block-products.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/blocks/block-products/block-products.component.ts ***!
  \***************************************************************************/
/*! exports provided: BlockProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockProductsComponent", function() { return BlockProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BlockProductsComponent = class BlockProductsComponent {
    constructor() {
        this.layout = 'large-first';
        this.products = [];
    }
    get large() {
        if (this.layout === 'large-first' && this.products.length > 0) {
            return this.products[0];
        }
        else if (this.layout === 'large-last' && this.products.length > 6) {
            return this.products[6];
        }
        return null;
    }
    get smalls() {
        if (this.layout === 'large-first') {
            return this.products.slice(1, 7);
        }
        else {
            return this.products.slice(0, 6);
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], BlockProductsComponent.prototype, "header", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], BlockProductsComponent.prototype, "layout", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], BlockProductsComponent.prototype, "products", void 0);
BlockProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-block-products',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./block-products.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/blocks/block-products/block-products.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./block-products.component.scss */ "./src/app/modules/blocks/block-products/block-products.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], BlockProductsComponent);



/***/ }),

/***/ "./src/app/modules/blocks/block-slideshow/block-slideshow.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/blocks/block-slideshow/block-slideshow.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYmxvY2tzL2Jsb2NrLXNsaWRlc2hvdy9ibG9jay1zbGlkZXNob3cuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/blocks/block-slideshow/block-slideshow.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/blocks/block-slideshow/block-slideshow.component.ts ***!
  \*****************************************************************************/
/*! exports provided: BlockSlideshowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockSlideshowComponent", function() { return BlockSlideshowComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _shared_services_direction_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/direction.service */ "./src/app/shared/services/direction.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");





let BlockSlideshowComponent = class BlockSlideshowComponent {
    constructor(sanitizer, http, direction) {
        this.sanitizer = sanitizer;
        this.http = http;
        this.direction = direction;
        this.withDepartments = false;
        // APIURL = 'http://localhost:8765/api/webservice/';
        this.APIURL = 'http://jenix.in/api/webservice/';
        this.options = {
            nav: false,
            dots: true,
            loop: true,
            responsive: {
                0: { items: 1 }
            },
            rtl: this.direction.isRTL()
        };
        this.slides = [
        // {
        //     title: 'Big choice of<br>Plumbing products',
        //     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br>Etiam pharetra laoreet dui quis molestie.',
        //     image_classic: 'assets/images/slides/slide-1.jpg',
        //     image_full: 'assets/images/slides/slide-1-full.jpg',
        //     image_mobile: 'assets/images/slides/slide-1-mobile.jpg'
        // },
        // {
        //     title: 'Screwdrivers<br>Professional Tools',
        //     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br>Etiam pharetra laoreet dui quis molestie.',
        //     image_classic: 'assets/images/slides/slide-2.jpg',
        //     image_full: 'assets/images/slides/slide-2-full.jpg',
        //     image_mobile: 'assets/images/slides/slide-2-mobile.jpg'
        // },
        // {
        //     title: 'One more<br>Unique header',
        //     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br>Etiam pharetra laoreet dui quis molestie.',
        //     image_classic: 'assets/images/slides/slide-3.jpg',
        //     image_full: 'assets/images/slides/slide-3-full.jpg',
        //     image_mobile: 'assets/images/slides/slide-3-mobile.jpg'
        // }
        ];
        this.apicall();
    }
    apicall() {
        this.http
            .get(this.APIURL + `index`)
            .subscribe((response) => {
            this.result = response.data;
            this.slides = response.data.banner_images;
        });
    }
};
BlockSlideshowComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _shared_services_direction_service__WEBPACK_IMPORTED_MODULE_3__["DirectionService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], BlockSlideshowComponent.prototype, "withDepartments", void 0);
BlockSlideshowComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-block-slideshow',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./block-slideshow.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/blocks/block-slideshow/block-slideshow.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./block-slideshow.component.scss */ "./src/app/modules/blocks/block-slideshow/block-slideshow.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
        _shared_services_direction_service__WEBPACK_IMPORTED_MODULE_3__["DirectionService"]])
], BlockSlideshowComponent);



/***/ }),

/***/ "./src/app/modules/blocks/blocks.module.ts":
/*!*************************************************!*\
  !*** ./src/app/modules/blocks/blocks.module.ts ***!
  \*************************************************/
/*! exports provided: BlocksModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlocksModule", function() { return BlocksModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-owl-carousel-o */ "./node_modules/ngx-owl-carousel-o/fesm2015/ngx-owl-carousel-o.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _block_banner_block_banner_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./block-banner/block-banner.component */ "./src/app/modules/blocks/block-banner/block-banner.component.ts");
/* harmony import */ var _block_brands_block_brands_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./block-brands/block-brands.component */ "./src/app/modules/blocks/block-brands/block-brands.component.ts");
/* harmony import */ var _block_categories_block_categories_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./block-categories/block-categories.component */ "./src/app/modules/blocks/block-categories/block-categories.component.ts");
/* harmony import */ var _block_features_block_features_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./block-features/block-features.component */ "./src/app/modules/blocks/block-features/block-features.component.ts");
/* harmony import */ var _block_map_block_map_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./block-map/block-map.component */ "./src/app/modules/blocks/block-map/block-map.component.ts");
/* harmony import */ var _block_posts_block_posts_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./block-posts/block-posts.component */ "./src/app/modules/blocks/block-posts/block-posts.component.ts");
/* harmony import */ var _block_product_columns_block_product_columns_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./block-product-columns/block-product-columns.component */ "./src/app/modules/blocks/block-product-columns/block-product-columns.component.ts");
/* harmony import */ var _block_product_columns_block_product_columns_item_block_product_columns_item_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./block-product-columns/block-product-columns-item/block-product-columns-item.component */ "./src/app/modules/blocks/block-product-columns/block-product-columns-item/block-product-columns-item.component.ts");
/* harmony import */ var _block_products_carousel_block_products_carousel_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./block-products-carousel/block-products-carousel.component */ "./src/app/modules/blocks/block-products-carousel/block-products-carousel.component.ts");
/* harmony import */ var _block_products_block_products_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./block-products/block-products.component */ "./src/app/modules/blocks/block-products/block-products.component.ts");
/* harmony import */ var _block_slideshow_block_slideshow_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./block-slideshow/block-slideshow.component */ "./src/app/modules/blocks/block-slideshow/block-slideshow.component.ts");
/* harmony import */ var _components_block_header_block_header_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/block-header/block-header.component */ "./src/app/modules/blocks/components/block-header/block-header.component.ts");


// modules (angular)


// modules (third-party)

// modules

// blocks











// components

let BlocksModule = class BlocksModule {
};
BlocksModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            // blocks
            _block_banner_block_banner_component__WEBPACK_IMPORTED_MODULE_6__["BlockBannerComponent"],
            _block_brands_block_brands_component__WEBPACK_IMPORTED_MODULE_7__["BlockBrandsComponent"],
            _block_categories_block_categories_component__WEBPACK_IMPORTED_MODULE_8__["BlockCategoriesComponent"],
            _block_features_block_features_component__WEBPACK_IMPORTED_MODULE_9__["BlockFeaturesComponent"],
            _block_map_block_map_component__WEBPACK_IMPORTED_MODULE_10__["BlockMapComponent"],
            _block_posts_block_posts_component__WEBPACK_IMPORTED_MODULE_11__["BlockPostsComponent"],
            _block_product_columns_block_product_columns_component__WEBPACK_IMPORTED_MODULE_12__["BlockProductColumnsComponent"],
            _block_product_columns_block_product_columns_item_block_product_columns_item_component__WEBPACK_IMPORTED_MODULE_13__["BlockProductColumnsItemComponent"],
            _block_products_carousel_block_products_carousel_component__WEBPACK_IMPORTED_MODULE_14__["BlockProductsCarouselComponent"],
            _block_products_block_products_component__WEBPACK_IMPORTED_MODULE_15__["BlockProductsComponent"],
            _block_slideshow_block_slideshow_component__WEBPACK_IMPORTED_MODULE_16__["BlockSlideshowComponent"],
            // components
            _components_block_header_block_header_component__WEBPACK_IMPORTED_MODULE_17__["BlockHeaderComponent"]
        ],
        imports: [
            // modules (angular)
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            // modules (third-party)
            ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_4__["CarouselModule"],
            // modules
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
        ],
        exports: [
            // blocks
            _block_banner_block_banner_component__WEBPACK_IMPORTED_MODULE_6__["BlockBannerComponent"],
            _block_brands_block_brands_component__WEBPACK_IMPORTED_MODULE_7__["BlockBrandsComponent"],
            _block_categories_block_categories_component__WEBPACK_IMPORTED_MODULE_8__["BlockCategoriesComponent"],
            _block_features_block_features_component__WEBPACK_IMPORTED_MODULE_9__["BlockFeaturesComponent"],
            _block_map_block_map_component__WEBPACK_IMPORTED_MODULE_10__["BlockMapComponent"],
            _block_posts_block_posts_component__WEBPACK_IMPORTED_MODULE_11__["BlockPostsComponent"],
            _block_product_columns_block_product_columns_component__WEBPACK_IMPORTED_MODULE_12__["BlockProductColumnsComponent"],
            _block_product_columns_block_product_columns_item_block_product_columns_item_component__WEBPACK_IMPORTED_MODULE_13__["BlockProductColumnsItemComponent"],
            _block_products_carousel_block_products_carousel_component__WEBPACK_IMPORTED_MODULE_14__["BlockProductsCarouselComponent"],
            _block_products_block_products_component__WEBPACK_IMPORTED_MODULE_15__["BlockProductsComponent"],
            _block_slideshow_block_slideshow_component__WEBPACK_IMPORTED_MODULE_16__["BlockSlideshowComponent"]
        ]
    })
], BlocksModule);



/***/ }),

/***/ "./src/app/modules/blocks/components/block-header/block-header.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/modules/blocks/components/block-header/block-header.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYmxvY2tzL2NvbXBvbmVudHMvYmxvY2staGVhZGVyL2Jsb2NrLWhlYWRlci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/blocks/components/block-header/block-header.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/blocks/components/block-header/block-header.component.ts ***!
  \**********************************************************************************/
/*! exports provided: BlockHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockHeaderComponent", function() { return BlockHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BlockHeaderComponent = class BlockHeaderComponent {
    constructor() {
        this.arrows = false;
        this.groups = [];
        this.next = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.prev = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.groupChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    setGroup(group) {
        this.groups.forEach(g => g.current = g === group);
        this.groupChange.emit(group);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], BlockHeaderComponent.prototype, "header", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], BlockHeaderComponent.prototype, "arrows", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], BlockHeaderComponent.prototype, "groups", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], BlockHeaderComponent.prototype, "next", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], BlockHeaderComponent.prototype, "prev", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], BlockHeaderComponent.prototype, "groupChange", void 0);
BlockHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-block-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./block-header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/blocks/components/block-header/block-header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./block-header.component.scss */ "./src/app/modules/blocks/components/block-header/block-header.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], BlockHeaderComponent);



/***/ }),

/***/ "./src/app/modules/footer/components/contacts/contacts.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/modules/footer/components/contacts/contacts.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZm9vdGVyL2NvbXBvbmVudHMvY29udGFjdHMvY29udGFjdHMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/footer/components/contacts/contacts.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modules/footer/components/contacts/contacts.component.ts ***!
  \**************************************************************************/
/*! exports provided: ContactsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsComponent", function() { return ContactsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_services_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/services/store.service */ "./src/app/shared/services/store.service.ts");



let ContactsComponent = class ContactsComponent {
    constructor(store) {
        this.store = store;
    }
};
ContactsComponent.ctorParameters = () => [
    { type: _shared_services_store_service__WEBPACK_IMPORTED_MODULE_2__["StoreService"] }
];
ContactsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer-contacts',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contacts.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/footer/components/contacts/contacts.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contacts.component.scss */ "./src/app/modules/footer/components/contacts/contacts.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_store_service__WEBPACK_IMPORTED_MODULE_2__["StoreService"]])
], ContactsComponent);



/***/ }),

/***/ "./src/app/modules/footer/components/links/links.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/modules/footer/components/links/links.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZm9vdGVyL2NvbXBvbmVudHMvbGlua3MvbGlua3MuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/footer/components/links/links.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/footer/components/links/links.component.ts ***!
  \********************************************************************/
/*! exports provided: LinksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinksComponent", function() { return LinksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LinksComponent = class LinksComponent {
    constructor() {
        this.links = [];
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], LinksComponent.prototype, "header", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], LinksComponent.prototype, "links", void 0);
LinksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer-links',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./links.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/footer/components/links/links.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./links.component.scss */ "./src/app/modules/footer/components/links/links.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], LinksComponent);



/***/ }),

/***/ "./src/app/modules/footer/components/newsletter/newsletter.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/modules/footer/components/newsletter/newsletter.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZm9vdGVyL2NvbXBvbmVudHMvbmV3c2xldHRlci9uZXdzbGV0dGVyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/footer/components/newsletter/newsletter.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/footer/components/newsletter/newsletter.component.ts ***!
  \******************************************************************************/
/*! exports provided: NewsletterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsletterComponent", function() { return NewsletterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _data_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../data/theme */ "./src/data/theme.ts");



let NewsletterComponent = class NewsletterComponent {
    constructor() {
        this.theme = _data_theme__WEBPACK_IMPORTED_MODULE_2__["theme"];
    }
};
NewsletterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer-newsletter',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./newsletter.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/footer/components/newsletter/newsletter.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./newsletter.component.scss */ "./src/app/modules/footer/components/newsletter/newsletter.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], NewsletterComponent);



/***/ }),

/***/ "./src/app/modules/footer/footer.component.scss":
/*!******************************************************!*\
  !*** ./src/app/modules/footer/footer.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/footer/footer.component.ts":
/*!****************************************************!*\
  !*** ./src/app/modules/footer/footer.component.ts ***!
  \****************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _data_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../data/theme */ "./src/data/theme.ts");



let FooterComponent = class FooterComponent {
    constructor() {
        this.theme = _data_theme__WEBPACK_IMPORTED_MODULE_2__["theme"];
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.scss */ "./src/app/modules/footer/footer.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FooterComponent);



/***/ }),

/***/ "./src/app/modules/footer/footer.module.ts":
/*!*************************************************!*\
  !*** ./src/app/modules/footer/footer.module.ts ***!
  \*************************************************/
/*! exports provided: FooterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterModule", function() { return FooterModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _components_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/contacts/contacts.component */ "./src/app/modules/footer/components/contacts/contacts.component.ts");
/* harmony import */ var _footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer.component */ "./src/app/modules/footer/footer.component.ts");
/* harmony import */ var _components_links_links_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/links/links.component */ "./src/app/modules/footer/components/links/links.component.ts");
/* harmony import */ var _components_newsletter_newsletter_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/newsletter/newsletter.component */ "./src/app/modules/footer/components/newsletter/newsletter.component.ts");


// modules (angular)


// modules

// components




let FooterModule = class FooterModule {
};
FooterModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _components_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_5__["ContactsComponent"],
            _footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
            _components_links_links_component__WEBPACK_IMPORTED_MODULE_7__["LinksComponent"],
            _components_newsletter_newsletter_component__WEBPACK_IMPORTED_MODULE_8__["NewsletterComponent"]
        ],
        imports: [
            // modules (angular)
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            // modules
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
        ],
        exports: [
            _footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"]
        ]
    })
], FooterModule);



/***/ }),

/***/ "./src/app/modules/header/components/departments/departments.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/header/components/departments/departments.component.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaGVhZGVyL2NvbXBvbmVudHMvZGVwYXJ0bWVudHMvZGVwYXJ0bWVudHMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/header/components/departments/departments.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/modules/header/components/departments/departments.component.ts ***!
  \********************************************************************************/
/*! exports provided: DepartmentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentsComponent", function() { return DepartmentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _shared_services_departments_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/services/departments.service */ "./src/app/shared/services/departments.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");






let DepartmentsComponent = class DepartmentsComponent {
    constructor(platformId, renderer, el, service) {
        this.platformId = platformId;
        this.renderer = renderer;
        this.el = el;
        this.service = service;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.hoveredItem = null;
        this.isOpen = false;
        this.fixed = false;
    }
    get element() {
        return this.el.nativeElement;
    }
    ngOnInit() {
        this.service.getNavigation().subscribe((data) => {
            this.items = data;
        });
        console.log(this.items);
        const root = this.element.querySelector('.departments');
        const content = this.element.querySelector('.departments__links-wrapper');
        this.service.areaElement$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$)).subscribe(areaElement => {
            if (areaElement) {
                this.fixed = true;
                this.isOpen = true;
                if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_5__["isPlatformBrowser"])(this.platformId)) {
                    const areaRect = areaElement.getBoundingClientRect();
                    const areaBottom = areaRect.top + areaRect.height + window.scrollY;
                    root.classList.remove('departments--transition');
                    root.classList.add('departments--fixed', 'departments--opened');
                    const height = areaBottom - (content.getBoundingClientRect().top + window.scrollY);
                    content.style.height = `${height}px`;
                    content.getBoundingClientRect(); // force reflow
                }
                else {
                    this.renderer.addClass(root, 'departments--fixed');
                    this.renderer.addClass(root, 'departments--opened');
                }
            }
            else {
                this.fixed = false;
                this.isOpen = false;
                if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_5__["isPlatformBrowser"])(this.platformId)) {
                    root.classList.remove('departments--opened', 'departments--fixed');
                    content.style.height = '';
                }
                else {
                    this.renderer.removeClass(root, 'departments--fixed');
                    this.renderer.removeClass(root, 'departments--opened');
                }
            }
        });
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_5__["isPlatformBrowser"])(this.platformId)) {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(document, 'mousedown').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$)).subscribe((event) => {
                if (event.target instanceof HTMLElement && !this.element.contains(event.target)) {
                    this.close();
                }
            });
            Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(content, 'transitionend').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$)).subscribe((event) => {
                if (event.propertyName === 'height') {
                    root.classList.remove('departments--transition');
                }
            });
        }
    }
    toggle() {
        if (this.isOpen) {
            this.close();
        }
        else {
            this.open();
        }
    }
    open() {
        this.isOpen = true;
        const root = this.element.querySelector('.departments');
        const content = root.querySelector('.departments__links-wrapper');
        const startHeight = content.getBoundingClientRect().height;
        root.classList.add('departments--transition', 'departments--opened');
        const endHeight = content.getBoundingClientRect().height;
        content.style.height = startHeight + 'px';
        content.getBoundingClientRect(); // force reflow
        content.style.height = endHeight + 'px';
    }
    close() {
        if (this.fixed || !this.isOpen) {
            return;
        }
        this.isOpen = false;
        const root = this.element.querySelector('.departments');
        const content = root.querySelector('.departments__links-wrapper');
        const startHeight = content.getBoundingClientRect().height;
        content.style.height = startHeight + 'px';
        root.classList.add('departments--transition');
        root.classList.remove('departments--opened');
        content.getBoundingClientRect(); // force reflow
        content.style.height = '';
    }
    onItemMouseEnter(item) {
        this.hoveredItem = item;
    }
    onItemMouseLeave(item) {
        if (this.hoveredItem === item) {
            this.hoveredItem = null;
        }
    }
    onItemClick() {
        this.close();
    }
    onSubItemClick() {
        this.close();
        this.hoveredItem = null;
    }
};
DepartmentsComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"],] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _shared_services_departments_service__WEBPACK_IMPORTED_MODULE_4__["DepartmentsService"] }
];
DepartmentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header-departments',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./departments.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/header/components/departments/departments.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./departments.component.scss */ "./src/app/modules/header/components/departments/departments.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
        _shared_services_departments_service__WEBPACK_IMPORTED_MODULE_4__["DepartmentsService"]])
], DepartmentsComponent);



/***/ }),

/***/ "./src/app/modules/header/components/dropcart/dropcart.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/modules/header/components/dropcart/dropcart.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaGVhZGVyL2NvbXBvbmVudHMvZHJvcGNhcnQvZHJvcGNhcnQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/header/components/dropcart/dropcart.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modules/header/components/dropcart/dropcart.component.ts ***!
  \**************************************************************************/
/*! exports provided: DropcartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropcartComponent", function() { return DropcartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/services/cart.service */ "./src/app/shared/services/cart.service.ts");
/* harmony import */ var _shared_services_root_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/services/root.service */ "./src/app/shared/services/root.service.ts");




let DropcartComponent = class DropcartComponent {
    constructor(cart, root) {
        this.cart = cart;
        this.root = root;
        this.removedItems = [];
    }
    remove(item) {
        if (this.removedItems.includes(item)) {
            return;
        }
        this.removedItems.push(item);
        this.cart.remove(item).subscribe({ complete: () => this.removedItems = this.removedItems.filter(eachItem => eachItem !== item) });
    }
};
DropcartComponent.ctorParameters = () => [
    { type: _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"] },
    { type: _shared_services_root_service__WEBPACK_IMPORTED_MODULE_3__["RootService"] }
];
DropcartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header-dropcart',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dropcart.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/header/components/dropcart/dropcart.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dropcart.component.scss */ "./src/app/modules/header/components/dropcart/dropcart.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"],
        _shared_services_root_service__WEBPACK_IMPORTED_MODULE_3__["RootService"]])
], DropcartComponent);



/***/ }),

/***/ "./src/app/modules/header/components/links/links.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/modules/header/components/links/links.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaGVhZGVyL2NvbXBvbmVudHMvbGlua3MvbGlua3MuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/header/components/links/links.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/header/components/links/links.component.ts ***!
  \********************************************************************/
/*! exports provided: LinksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinksComponent", function() { return LinksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _data_header_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../data/header-navigation */ "./src/data/header-navigation.ts");
/* harmony import */ var _data_menu_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../data/menu-navigation */ "./src/data/menu-navigation.ts");
/* harmony import */ var _shared_services_direction_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/services/direction.service */ "./src/app/shared/services/direction.service.ts");
/* harmony import */ var _shared_api_shop_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/api/shop.service */ "./src/app/shared/api/shop.service.ts");






let LinksComponent = class LinksComponent {
    constructor(direction, ShopService) {
        this.direction = direction;
        this.ShopService = ShopService;
        this.hoveredItem = null;
    }
    ngOnInit() {
        this.isLoggedIn$ = this.ShopService.isLoggedIn; // {2}
        this.isLoggedIn$.subscribe(value => this.loginValue = value);
        // console.log(this.latestValue);
        if (localStorage.hasOwnProperty('USERINFO')) {
            this.loginValue = true;
        }
        this.items = _data_header_navigation__WEBPACK_IMPORTED_MODULE_2__["navigation"];
        this.menuitems = _data_menu_navigation__WEBPACK_IMPORTED_MODULE_3__["manunavigation"];
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
LinksComponent.ctorParameters = () => [
    { type: _shared_services_direction_service__WEBPACK_IMPORTED_MODULE_4__["DirectionService"] },
    { type: _shared_api_shop_service__WEBPACK_IMPORTED_MODULE_5__["ShopService"] }
];
LinksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header-links',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./links.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/header/components/links/links.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./links.component.scss */ "./src/app/modules/header/components/links/links.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_direction_service__WEBPACK_IMPORTED_MODULE_4__["DirectionService"],
        _shared_api_shop_service__WEBPACK_IMPORTED_MODULE_5__["ShopService"]])
], LinksComponent);



/***/ }),

/***/ "./src/app/modules/header/components/megamenu/megamenu.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/modules/header/components/megamenu/megamenu.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaGVhZGVyL2NvbXBvbmVudHMvbWVnYW1lbnUvbWVnYW1lbnUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/header/components/megamenu/megamenu.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modules/header/components/megamenu/megamenu.component.ts ***!
  \**************************************************************************/
/*! exports provided: MegamenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MegamenuComponent", function() { return MegamenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MegamenuComponent = class MegamenuComponent {
    constructor() {
        this.departments = false;
        this.itemClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], MegamenuComponent.prototype, "menu", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], MegamenuComponent.prototype, "departments", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], MegamenuComponent.prototype, "itemClick", void 0);
MegamenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header-megamenu',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./megamenu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/header/components/megamenu/megamenu.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./megamenu.component.scss */ "./src/app/modules/header/components/megamenu/megamenu.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], MegamenuComponent);



/***/ }),

/***/ "./src/app/modules/header/components/menu/menu.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/modules/header/components/menu/menu.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaGVhZGVyL2NvbXBvbmVudHMvbWVudS9tZW51LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/header/components/menu/menu.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/header/components/menu/menu.component.ts ***!
  \******************************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MenuComponent = class MenuComponent {
    constructor() {
        this.layout = 'classic';
        this.items = [];
        this.itemClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.hoveredItem = null;
    }
    onItemMouseEnter(item) {
        this.hoveredItem = item;
    }
    onItemMouseLeave(item) {
        if (this.hoveredItem === item) {
            this.hoveredItem = null;
        }
    }
    onSubItemClick(item) {
        this.hoveredItem = null;
        this.itemClick.emit(item);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], MenuComponent.prototype, "layout", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], MenuComponent.prototype, "items", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], MenuComponent.prototype, "islogin", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], MenuComponent.prototype, "itemClick", void 0);
MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header-menu',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/header/components/menu/menu.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./menu.component.scss */ "./src/app/modules/header/components/menu/menu.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], MenuComponent);



/***/ }),

/***/ "./src/app/modules/header/components/nav/nav.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/modules/header/components/nav/nav.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FzaGlzaGphaW4vcHJvamVjdHMvc2V0dXAvYW5ndWxhci9hamF5Y28vc3JjL2FwcC9tb2R1bGVzL2hlYWRlci9jb21wb25lbnRzL25hdi9uYXYuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvaGVhZGVyL2NvbXBvbmVudHMvbmF2L25hdi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaGVhZGVyL2NvbXBvbmVudHMvbmF2L25hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbiIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/header/components/nav/nav.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/modules/header/components/nav/nav.component.ts ***!
  \****************************************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/services/cart.service */ "./src/app/shared/services/cart.service.ts");
/* harmony import */ var _shared_services_wishlist_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/services/wishlist.service */ "./src/app/shared/services/wishlist.service.ts");
/* harmony import */ var _shared_services_root_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/services/root.service */ "./src/app/shared/services/root.service.ts");





let NavComponent = class NavComponent {
    constructor(root, cart, wishlist) {
        this.root = root;
        this.cart = cart;
        this.wishlist = wishlist;
        this.departments = true;
        this.logo = false;
        this.search = false;
    }
};
NavComponent.ctorParameters = () => [
    { type: _shared_services_root_service__WEBPACK_IMPORTED_MODULE_4__["RootService"] },
    { type: _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"] },
    { type: _shared_services_wishlist_service__WEBPACK_IMPORTED_MODULE_3__["WishlistService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], NavComponent.prototype, "departments", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], NavComponent.prototype, "logo", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], NavComponent.prototype, "search", void 0);
NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header-nav',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nav.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/header/components/nav/nav.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nav.component.scss */ "./src/app/modules/header/components/nav/nav.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_root_service__WEBPACK_IMPORTED_MODULE_4__["RootService"],
        _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"],
        _shared_services_wishlist_service__WEBPACK_IMPORTED_MODULE_3__["WishlistService"]])
], NavComponent);



/***/ }),

/***/ "./src/app/modules/header/components/search/search.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/modules/header/components/search/search.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaGVhZGVyL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/header/components/search/search.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/header/components/search/search.component.ts ***!
  \**********************************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SearchComponent = class SearchComponent {
    constructor() { }
};
SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header-search',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./search.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/header/components/search/search.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./search.component.scss */ "./src/app/modules/header/components/search/search.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SearchComponent);



/***/ }),

/***/ "./src/app/modules/header/components/topbar/topbar.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/modules/header/components/topbar/topbar.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaGVhZGVyL2NvbXBvbmVudHMvdG9wYmFyL3RvcGJhci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/header/components/topbar/topbar.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/header/components/topbar/topbar.component.ts ***!
  \**********************************************************************/
/*! exports provided: TopbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopbarComponent", function() { return TopbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_services_currency_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/services/currency.service */ "./src/app/shared/services/currency.service.ts");



let TopbarComponent = class TopbarComponent {
    constructor(currencyService) {
        this.currencyService = currencyService;
        this.languages = [
            { name: 'English', image: 'language-1' },
        ];
        this.currencies = [
            { name: '₹ Rupee', url: '', code: 'INR', symbol: '₹' },
        ];
    }
    setCurrency(currency) {
        this.currencyService.options = {
            code: currency.code,
            display: currency.symbol,
        };
    }
};
TopbarComponent.ctorParameters = () => [
    { type: _shared_services_currency_service__WEBPACK_IMPORTED_MODULE_2__["CurrencyService"] }
];
TopbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header-topbar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./topbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/header/components/topbar/topbar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./topbar.component.scss */ "./src/app/modules/header/components/topbar/topbar.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_currency_service__WEBPACK_IMPORTED_MODULE_2__["CurrencyService"]])
], TopbarComponent);



/***/ }),

/***/ "./src/app/modules/header/header.component.scss":
/*!******************************************************!*\
  !*** ./src/app/modules/header/header.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/header/header.component.ts":
/*!****************************************************!*\
  !*** ./src/app/modules/header/header.component.ts ***!
  \****************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_services_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/store.service */ "./src/app/shared/services/store.service.ts");



let HeaderComponent = class HeaderComponent {
    constructor(store) {
        this.store = store;
        this.layout = 'classic';
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _shared_services_store_service__WEBPACK_IMPORTED_MODULE_2__["StoreService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], HeaderComponent.prototype, "layout", void 0);
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.scss */ "./src/app/modules/header/header.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_store_service__WEBPACK_IMPORTED_MODULE_2__["StoreService"]])
], HeaderComponent);



/***/ }),

/***/ "./src/app/modules/header/header.module.ts":
/*!*************************************************!*\
  !*** ./src/app/modules/header/header.module.ts ***!
  \*************************************************/
/*! exports provided: HeaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderModule", function() { return HeaderModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _components_departments_departments_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/departments/departments.component */ "./src/app/modules/header/components/departments/departments.component.ts");
/* harmony import */ var _components_dropcart_dropcart_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/dropcart/dropcart.component */ "./src/app/modules/header/components/dropcart/dropcart.component.ts");
/* harmony import */ var _header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header.component */ "./src/app/modules/header/header.component.ts");
/* harmony import */ var _components_links_links_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/links/links.component */ "./src/app/modules/header/components/links/links.component.ts");
/* harmony import */ var _components_megamenu_megamenu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/megamenu/megamenu.component */ "./src/app/modules/header/components/megamenu/megamenu.component.ts");
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/menu/menu.component */ "./src/app/modules/header/components/menu/menu.component.ts");
/* harmony import */ var _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/nav/nav.component */ "./src/app/modules/header/components/nav/nav.component.ts");
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/search/search.component */ "./src/app/modules/header/components/search/search.component.ts");
/* harmony import */ var _components_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/topbar/topbar.component */ "./src/app/modules/header/components/topbar/topbar.component.ts");


// modules (angular)


// modules

// components









let HeaderModule = class HeaderModule {
};
HeaderModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            // components
            _components_departments_departments_component__WEBPACK_IMPORTED_MODULE_5__["DepartmentsComponent"],
            _components_dropcart_dropcart_component__WEBPACK_IMPORTED_MODULE_6__["DropcartComponent"],
            _header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
            _components_links_links_component__WEBPACK_IMPORTED_MODULE_8__["LinksComponent"],
            _components_megamenu_megamenu_component__WEBPACK_IMPORTED_MODULE_9__["MegamenuComponent"],
            _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_10__["MenuComponent"],
            _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_11__["NavComponent"],
            _components_search_search_component__WEBPACK_IMPORTED_MODULE_12__["SearchComponent"],
            _components_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_13__["TopbarComponent"],
        ],
        imports: [
            // modules (angular)
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            // modules
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
        ],
        exports: [
            // components
            _header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"]
        ]
    })
], HeaderModule);



/***/ }),

/***/ "./src/app/modules/mobile/components/mobile-header/mobile-header.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/mobile/components/mobile-header/mobile-header.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbW9iaWxlL2NvbXBvbmVudHMvbW9iaWxlLWhlYWRlci9tb2JpbGUtaGVhZGVyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/mobile/components/mobile-header/mobile-header.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/modules/mobile/components/mobile-header/mobile-header.component.ts ***!
  \************************************************************************************/
/*! exports provided: MobileHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileHeaderComponent", function() { return MobileHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_services_mobile_menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/services/mobile-menu.service */ "./src/app/shared/services/mobile-menu.service.ts");
/* harmony import */ var _shared_services_wishlist_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/services/wishlist.service */ "./src/app/shared/services/wishlist.service.ts");
/* harmony import */ var _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/services/cart.service */ "./src/app/shared/services/cart.service.ts");





let MobileHeaderComponent = class MobileHeaderComponent {
    constructor(menu, wishlist, cart) {
        this.menu = menu;
        this.wishlist = wishlist;
        this.cart = cart;
    }
};
MobileHeaderComponent.ctorParameters = () => [
    { type: _shared_services_mobile_menu_service__WEBPACK_IMPORTED_MODULE_2__["MobileMenuService"] },
    { type: _shared_services_wishlist_service__WEBPACK_IMPORTED_MODULE_3__["WishlistService"] },
    { type: _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"] }
];
MobileHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mobile-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./mobile-header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/mobile/components/mobile-header/mobile-header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./mobile-header.component.scss */ "./src/app/modules/mobile/components/mobile-header/mobile-header.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_mobile_menu_service__WEBPACK_IMPORTED_MODULE_2__["MobileMenuService"],
        _shared_services_wishlist_service__WEBPACK_IMPORTED_MODULE_3__["WishlistService"],
        _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"]])
], MobileHeaderComponent);



/***/ }),

/***/ "./src/app/modules/mobile/components/mobile-links/mobile-links.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/modules/mobile/components/mobile-links/mobile-links.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbW9iaWxlL2NvbXBvbmVudHMvbW9iaWxlLWxpbmtzL21vYmlsZS1saW5rcy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/mobile/components/mobile-links/mobile-links.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/mobile/components/mobile-links/mobile-links.component.ts ***!
  \**********************************************************************************/
/*! exports provided: MobileLinksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileLinksComponent", function() { return MobileLinksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MobileLinksComponent = class MobileLinksComponent {
    constructor() {
        this.links = [];
        this.level = 0;
        this.itemClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    onItemClick(item) {
        this.itemClick.emit(item);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], MobileLinksComponent.prototype, "links", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], MobileLinksComponent.prototype, "level", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], MobileLinksComponent.prototype, "itemClick", void 0);
MobileLinksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mobile-links',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./mobile-links.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/mobile/components/mobile-links/mobile-links.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./mobile-links.component.scss */ "./src/app/modules/mobile/components/mobile-links/mobile-links.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], MobileLinksComponent);



/***/ }),

/***/ "./src/app/modules/mobile/components/mobile-menu/mobile-menu.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/mobile/components/mobile-menu/mobile-menu.component.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbW9iaWxlL2NvbXBvbmVudHMvbW9iaWxlLW1lbnUvbW9iaWxlLW1lbnUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/mobile/components/mobile-menu/mobile-menu.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/modules/mobile/components/mobile-menu/mobile-menu.component.ts ***!
  \********************************************************************************/
/*! exports provided: MobileMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileMenuComponent", function() { return MobileMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _shared_services_mobile_menu_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/services/mobile-menu.service */ "./src/app/shared/services/mobile-menu.service.ts");
/* harmony import */ var _data_mobile_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../data/mobile-menu */ "./src/data/mobile-menu.ts");






let MobileMenuComponent = class MobileMenuComponent {
    constructor(mobilemenu) {
        this.mobilemenu = mobilemenu;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.isOpen = false;
        this.links = _data_mobile_menu__WEBPACK_IMPORTED_MODULE_5__["mobileMenu"];
    }
    ngOnInit() {
        this.mobilemenu.isOpen$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$)).subscribe(isOpen => this.isOpen = isOpen);
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    onItemClick(event) {
        if (event.type === 'link') {
            this.mobilemenu.close();
        }
        // if (event.data && event.data.language) {
        //     console.log(event.data.language); // change language
        // }
    }
};
MobileMenuComponent.ctorParameters = () => [
    { type: _shared_services_mobile_menu_service__WEBPACK_IMPORTED_MODULE_4__["MobileMenuService"] }
];
MobileMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mobile-menu',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./mobile-menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/mobile/components/mobile-menu/mobile-menu.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./mobile-menu.component.scss */ "./src/app/modules/mobile/components/mobile-menu/mobile-menu.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_mobile_menu_service__WEBPACK_IMPORTED_MODULE_4__["MobileMenuService"]])
], MobileMenuComponent);



/***/ }),

/***/ "./src/app/modules/mobile/mobile.module.ts":
/*!*************************************************!*\
  !*** ./src/app/modules/mobile/mobile.module.ts ***!
  \*************************************************/
/*! exports provided: MobileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileModule", function() { return MobileModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _components_mobile_header_mobile_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/mobile-header/mobile-header.component */ "./src/app/modules/mobile/components/mobile-header/mobile-header.component.ts");
/* harmony import */ var _components_mobile_links_mobile_links_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/mobile-links/mobile-links.component */ "./src/app/modules/mobile/components/mobile-links/mobile-links.component.ts");
/* harmony import */ var _components_mobile_menu_mobile_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/mobile-menu/mobile-menu.component */ "./src/app/modules/mobile/components/mobile-menu/mobile-menu.component.ts");


// modules (angular)


// modules

// components



let MobileModule = class MobileModule {
};
MobileModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            // components
            _components_mobile_header_mobile_header_component__WEBPACK_IMPORTED_MODULE_5__["MobileHeaderComponent"],
            _components_mobile_links_mobile_links_component__WEBPACK_IMPORTED_MODULE_6__["MobileLinksComponent"],
            _components_mobile_menu_mobile_menu_component__WEBPACK_IMPORTED_MODULE_7__["MobileMenuComponent"]
        ],
        imports: [
            // modules (angular)
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            // modules
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
        ],
        exports: [
            // components
            _components_mobile_header_mobile_header_component__WEBPACK_IMPORTED_MODULE_5__["MobileHeaderComponent"],
            _components_mobile_menu_mobile_menu_component__WEBPACK_IMPORTED_MODULE_7__["MobileMenuComponent"]
        ]
    })
], MobileModule);



/***/ }),

/***/ "./src/app/modules/shop/services/page-category.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/modules/shop/services/page-category.service.ts ***!
  \****************************************************************/
/*! exports provided: PageCategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageCategoryService", function() { return PageCategoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




/**
 * This service serves as a mediator between the PageCategoryComponent, ProductsViewComponent and WidgetFiltersComponent components.
 */
let PageCategoryService = class PageCategoryService {
    /**
     * This service serves as a mediator between the PageCategoryComponent, ProductsViewComponent and WidgetFiltersComponent components.
     */
    constructor() {
        // isLoading
        this.isLoadingState = false;
        this.isLoadingSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.isLoadingState);
        this.isLoading$ = this.isLoadingSource.asObservable();
        this.listSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.listState);
        this.list$ = this.listSource.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(x => x !== null));
        // options
        this.optionsState = {};
        this.optionsChange$ = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    get options() {
        return this.optionsState;
    }
    // getters for list
    get items() { return this.listState.items; }
    get page() { return this.listState.page; }
    get limit() { return this.listState.limit; }
    get sort() { return this.listState.sort; }
    get total() { return this.listState.total; }
    get pages() { return this.listState.pages; }
    get from() { return this.listState.from; }
    get to() { return this.listState.to; }
    get filters() { return this.listState.filters; }
    get filterValues() { return this.listState.filterValues; }
    // set functions
    setIsLoading(value) {
        this.isLoadingState = value;
        this.isLoadingSource.next(value);
    }
    setList(list) {
        this.listState = list;
        this.listSource.next(this.listState);
    }
    setOptions(options, emitEvent = true) {
        const diff = this.optionsDiff(options);
        if ('limit' in diff || 'sort' in diff || 'filterValues' in diff) {
            options.page = 1;
        }
        this.optionsState = options;
        if (emitEvent && Object.keys(diff).length > 0) {
            this.optionsChange$.emit(diff);
        }
    }
    updateOptions(options, emitEvent = true) {
        this.setOptions(Object.assign({}, this.optionsState, options), emitEvent);
    }
    /**
     * Returns only different options.
     */
    optionsDiff(curr) {
        const result = {};
        ['page', 'limit', 'sort'].forEach(key => {
            if (key in curr && this[key] !== curr[key]) {
                result[key] = curr[key];
            }
        });
        if ('filterValues' in curr) {
            const filterValues = curr.filterValues;
            if (Object.keys(filterValues).length !== Object.keys(this.filterValues).length) {
                result.filterValues = {};
            }
            Object.keys(filterValues).forEach(key => {
                if (this.filterValues[key] !== filterValues[key]) {
                    if (!('filterValues' in result)) {
                        result.filterValues = {};
                    }
                    result.filterValues[key] = filterValues[key];
                }
            });
        }
        return result;
    }
};
PageCategoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], PageCategoryService);



/***/ }),

/***/ "./src/app/modules/widgets/widget-aboutus/widget-aboutus.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/modules/widgets/widget-aboutus/widget-aboutus.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvd2lkZ2V0cy93aWRnZXQtYWJvdXR1cy93aWRnZXQtYWJvdXR1cy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/widgets/widget-aboutus/widget-aboutus.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modules/widgets/widget-aboutus/widget-aboutus.component.ts ***!
  \****************************************************************************/
/*! exports provided: WidgetAboutusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetAboutusComponent", function() { return WidgetAboutusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _data_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../data/theme */ "./src/data/theme.ts");



let WidgetAboutusComponent = class WidgetAboutusComponent {
    constructor() {
        this.theme = _data_theme__WEBPACK_IMPORTED_MODULE_2__["theme"];
    }
};
WidgetAboutusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-widget-aboutus',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./widget-aboutus.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/widgets/widget-aboutus/widget-aboutus.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./widget-aboutus.component.scss */ "./src/app/modules/widgets/widget-aboutus/widget-aboutus.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], WidgetAboutusComponent);



/***/ }),

/***/ "./src/app/modules/widgets/widget-categories/widget-categories.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/modules/widgets/widget-categories/widget-categories.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvd2lkZ2V0cy93aWRnZXQtY2F0ZWdvcmllcy93aWRnZXQtY2F0ZWdvcmllcy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/widgets/widget-categories/widget-categories.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/widgets/widget-categories/widget-categories.component.ts ***!
  \**********************************************************************************/
/*! exports provided: WidgetCategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetCategoriesComponent", function() { return WidgetCategoriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_services_root_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/root.service */ "./src/app/shared/services/root.service.ts");



let WidgetCategoriesComponent = class WidgetCategoriesComponent {
    constructor(root) {
        this.root = root;
        this.location = 'blog';
        this.categories = [];
    }
};
WidgetCategoriesComponent.ctorParameters = () => [
    { type: _shared_services_root_service__WEBPACK_IMPORTED_MODULE_2__["RootService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], WidgetCategoriesComponent.prototype, "location", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], WidgetCategoriesComponent.prototype, "categories", void 0);
WidgetCategoriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-widget-categories',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./widget-categories.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/widgets/widget-categories/widget-categories.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./widget-categories.component.scss */ "./src/app/modules/widgets/widget-categories/widget-categories.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_root_service__WEBPACK_IMPORTED_MODULE_2__["RootService"]])
], WidgetCategoriesComponent);



/***/ }),

/***/ "./src/app/modules/widgets/widget-comments/widget-comments.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/modules/widgets/widget-comments/widget-comments.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvd2lkZ2V0cy93aWRnZXQtY29tbWVudHMvd2lkZ2V0LWNvbW1lbnRzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/widgets/widget-comments/widget-comments.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/widgets/widget-comments/widget-comments.component.ts ***!
  \******************************************************************************/
/*! exports provided: WidgetCommentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetCommentsComponent", function() { return WidgetCommentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WidgetCommentsComponent = class WidgetCommentsComponent {
    constructor() {
        this.comments = [];
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], WidgetCommentsComponent.prototype, "comments", void 0);
WidgetCommentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-widget-comments',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./widget-comments.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/widgets/widget-comments/widget-comments.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./widget-comments.component.scss */ "./src/app/modules/widgets/widget-comments/widget-comments.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], WidgetCommentsComponent);



/***/ }),

/***/ "./src/app/modules/widgets/widget-filters/widget-filters.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/modules/widgets/widget-filters/widget-filters.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvd2lkZ2V0cy93aWRnZXQtZmlsdGVycy93aWRnZXQtZmlsdGVycy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/widgets/widget-filters/widget-filters.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modules/widgets/widget-filters/widget-filters.component.ts ***!
  \****************************************************************************/
/*! exports provided: WidgetFiltersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetFiltersComponent", function() { return WidgetFiltersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _shared_services_direction_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/direction.service */ "./src/app/shared/services/direction.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_services_root_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/services/root.service */ "./src/app/shared/services/root.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _shop_services_page_category_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shop/services/page-category.service */ "./src/app/modules/shop/services/page-category.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");









let WidgetFiltersComponent = class WidgetFiltersComponent {
    constructor(platformId, direction, fb, root, pageCategory) {
        this.platformId = platformId;
        this.direction = direction;
        this.fb = fb;
        this.root = root;
        this.pageCategory = pageCategory;
        this.offcanvas = 'mobile';
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.isPlatformBrowser = Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(this.platformId);
        this.rightToLeft = false;
        this.rightToLeft = this.direction.isRTL();
    }
    ngOnInit() {
        this.pageCategory.list$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(x => x.filters), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this.destroy$)).subscribe(filters => {
            this.filters = filters;
            this.filtersForm = this.makeFiltersForm(filters);
            this.filtersForm.valueChanges.subscribe(formValues => {
                this.pageCategory.updateOptions({
                    filterValues: this.convertFormToFilterValues(filters, formValues)
                });
            });
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    trackBySlug(index, item) {
        return item.slug;
    }
    makeFiltersForm(filters) {
        const filtersFromGroup = {};
        filters.forEach(filter => {
            switch (filter.type) {
                case 'range':
                case 'radio':
                    filtersFromGroup[filter.slug] = this.fb.control(filter.value);
                    break;
                case 'check':
                case 'color':
                    filtersFromGroup[filter.slug] = this.makeListFilterForm(filter);
                    break;
            }
        });
        return this.fb.group(filtersFromGroup);
    }
    makeListFilterForm(filter) {
        const group = {};
        filter.items.forEach(item => {
            const control = this.fb.control(filter.value.includes(item.slug));
            // A timeout is needed because sometimes a state change is ignored if performed immediately.
            setTimeout(() => {
                if (this.isItemDisabled(filter, item)) {
                    control.disable({ emitEvent: false });
                }
                else {
                    control.enable({ emitEvent: false });
                }
            }, 0);
            group[item.slug] = control;
        });
        return this.fb.group(group);
    }
    isItemDisabled(filter, item) {
        return item.count === 0 && (filter.type === 'radio' || !filter.value.includes(item.slug));
    }
    convertFormToFilterValues(filters, formValues) {
        const filterValues = {};
        filters.forEach(filter => {
            const formValue = formValues[filter.slug];
            switch (filter.type) {
                case 'range':
                    if (formValue && (formValue[0] !== filter.min || formValue[1] !== filter.max)) {
                        filterValues[filter.slug] = `${formValue[0]}-${formValue[1]}`;
                    }
                    break;
                case 'check':
                case 'color':
                    const filterFormValues = formValue || {};
                    // Reactive forms do not add a values of disabled checkboxes.
                    // This code will add them manually.
                    filter.value.forEach(filterValue => {
                        if (!(filterValue in filterFormValues)) {
                            filterFormValues[filterValue] = true;
                        }
                    });
                    const values = Object.keys(filterFormValues).filter(x => filterFormValues[x]);
                    if (values.length > 0) {
                        filterValues[filter.slug] = values.join(',');
                    }
                    break;
                case 'radio':
                    if (formValue !== filter.items[0].slug) {
                        filterValues[filter.slug] = formValue;
                    }
                    break;
            }
        });
        return filterValues;
    }
    reset() {
        const formValues = {};
        this.filters.forEach(filter => {
            switch (filter.type) {
                case 'range':
                    formValues[filter.slug] = [filter.min, filter.max];
                    break;
                case 'check':
                case 'color':
                    formValues[filter.slug] = {};
                    filter.items.forEach(item => {
                        formValues[filter.slug][item.slug] = false;
                    });
                    break;
                case 'radio':
                    formValues[filter.slug] = filter.items[0].slug;
                    break;
            }
        });
        this.filtersForm.setValue(formValues);
    }
};
WidgetFiltersComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"],] }] },
    { type: _shared_services_direction_service__WEBPACK_IMPORTED_MODULE_3__["DirectionService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _shared_services_root_service__WEBPACK_IMPORTED_MODULE_5__["RootService"] },
    { type: _shop_services_page_category_service__WEBPACK_IMPORTED_MODULE_7__["PageCategoryService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], WidgetFiltersComponent.prototype, "offcanvas", void 0);
WidgetFiltersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-widget-filters',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./widget-filters.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/widgets/widget-filters/widget-filters.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./widget-filters.component.scss */ "./src/app/modules/widgets/widget-filters/widget-filters.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _shared_services_direction_service__WEBPACK_IMPORTED_MODULE_3__["DirectionService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        _shared_services_root_service__WEBPACK_IMPORTED_MODULE_5__["RootService"],
        _shop_services_page_category_service__WEBPACK_IMPORTED_MODULE_7__["PageCategoryService"]])
], WidgetFiltersComponent);



/***/ }),

/***/ "./src/app/modules/widgets/widget-newsletter/widget-newsletter.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/modules/widgets/widget-newsletter/widget-newsletter.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvd2lkZ2V0cy93aWRnZXQtbmV3c2xldHRlci93aWRnZXQtbmV3c2xldHRlci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/widgets/widget-newsletter/widget-newsletter.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/widgets/widget-newsletter/widget-newsletter.component.ts ***!
  \**********************************************************************************/
/*! exports provided: WidgetNewsletterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetNewsletterComponent", function() { return WidgetNewsletterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WidgetNewsletterComponent = class WidgetNewsletterComponent {
    constructor() { }
};
WidgetNewsletterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-widget-newsletter',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./widget-newsletter.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/widgets/widget-newsletter/widget-newsletter.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./widget-newsletter.component.scss */ "./src/app/modules/widgets/widget-newsletter/widget-newsletter.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], WidgetNewsletterComponent);



/***/ }),

/***/ "./src/app/modules/widgets/widget-posts/widget-posts.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/modules/widgets/widget-posts/widget-posts.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvd2lkZ2V0cy93aWRnZXQtcG9zdHMvd2lkZ2V0LXBvc3RzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/widgets/widget-posts/widget-posts.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/widgets/widget-posts/widget-posts.component.ts ***!
  \************************************************************************/
/*! exports provided: WidgetPostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetPostsComponent", function() { return WidgetPostsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_services_root_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/root.service */ "./src/app/shared/services/root.service.ts");



let WidgetPostsComponent = class WidgetPostsComponent {
    constructor(root) {
        this.root = root;
        this.posts = [];
    }
    postImage(post) {
        return post.image.replace(/^\.jpg$/, '-thumbnail.jpg');
    }
};
WidgetPostsComponent.ctorParameters = () => [
    { type: _shared_services_root_service__WEBPACK_IMPORTED_MODULE_2__["RootService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], WidgetPostsComponent.prototype, "posts", void 0);
WidgetPostsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-widget-posts',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./widget-posts.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/widgets/widget-posts/widget-posts.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./widget-posts.component.scss */ "./src/app/modules/widgets/widget-posts/widget-posts.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_root_service__WEBPACK_IMPORTED_MODULE_2__["RootService"]])
], WidgetPostsComponent);



/***/ }),

/***/ "./src/app/modules/widgets/widget-products/widget-products.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/modules/widgets/widget-products/widget-products.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvd2lkZ2V0cy93aWRnZXQtcHJvZHVjdHMvd2lkZ2V0LXByb2R1Y3RzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/widgets/widget-products/widget-products.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/widgets/widget-products/widget-products.component.ts ***!
  \******************************************************************************/
/*! exports provided: WidgetProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetProductsComponent", function() { return WidgetProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_services_root_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/root.service */ "./src/app/shared/services/root.service.ts");



let WidgetProductsComponent = class WidgetProductsComponent {
    constructor(root) {
        this.root = root;
        this.header = '';
        this.products = [];
    }
};
WidgetProductsComponent.ctorParameters = () => [
    { type: _shared_services_root_service__WEBPACK_IMPORTED_MODULE_2__["RootService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], WidgetProductsComponent.prototype, "header", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], WidgetProductsComponent.prototype, "products", void 0);
WidgetProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-widget-products',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./widget-products.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/widgets/widget-products/widget-products.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./widget-products.component.scss */ "./src/app/modules/widgets/widget-products/widget-products.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_root_service__WEBPACK_IMPORTED_MODULE_2__["RootService"]])
], WidgetProductsComponent);



/***/ }),

/***/ "./src/app/modules/widgets/widget-search/widget-search.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/modules/widgets/widget-search/widget-search.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvd2lkZ2V0cy93aWRnZXQtc2VhcmNoL3dpZGdldC1zZWFyY2guY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/widgets/widget-search/widget-search.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modules/widgets/widget-search/widget-search.component.ts ***!
  \**************************************************************************/
/*! exports provided: WidgetSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetSearchComponent", function() { return WidgetSearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WidgetSearchComponent = class WidgetSearchComponent {
    constructor() { }
};
WidgetSearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-widget-search',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./widget-search.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/widgets/widget-search/widget-search.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./widget-search.component.scss */ "./src/app/modules/widgets/widget-search/widget-search.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], WidgetSearchComponent);



/***/ }),

/***/ "./src/app/modules/widgets/widget-tags/widget-tags.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/modules/widgets/widget-tags/widget-tags.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvd2lkZ2V0cy93aWRnZXQtdGFncy93aWRnZXQtdGFncy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/widgets/widget-tags/widget-tags.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/widgets/widget-tags/widget-tags.component.ts ***!
  \**********************************************************************/
/*! exports provided: WidgetTagsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetTagsComponent", function() { return WidgetTagsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WidgetTagsComponent = class WidgetTagsComponent {
    constructor() { }
};
WidgetTagsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-widget-tags',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./widget-tags.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/widgets/widget-tags/widget-tags.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./widget-tags.component.scss */ "./src/app/modules/widgets/widget-tags/widget-tags.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], WidgetTagsComponent);



/***/ }),

/***/ "./src/app/modules/widgets/widgets.module.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/widgets/widgets.module.ts ***!
  \***************************************************/
/*! exports provided: WidgetsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetsModule", function() { return WidgetsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ng5_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng5-slider */ "./node_modules/ng5-slider/esm2015/ng5-slider.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _widget_aboutus_widget_aboutus_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./widget-aboutus/widget-aboutus.component */ "./src/app/modules/widgets/widget-aboutus/widget-aboutus.component.ts");
/* harmony import */ var _widget_categories_widget_categories_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./widget-categories/widget-categories.component */ "./src/app/modules/widgets/widget-categories/widget-categories.component.ts");
/* harmony import */ var _widget_comments_widget_comments_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./widget-comments/widget-comments.component */ "./src/app/modules/widgets/widget-comments/widget-comments.component.ts");
/* harmony import */ var _widget_filters_widget_filters_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./widget-filters/widget-filters.component */ "./src/app/modules/widgets/widget-filters/widget-filters.component.ts");
/* harmony import */ var _widget_newsletter_widget_newsletter_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./widget-newsletter/widget-newsletter.component */ "./src/app/modules/widgets/widget-newsletter/widget-newsletter.component.ts");
/* harmony import */ var _widget_posts_widget_posts_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./widget-posts/widget-posts.component */ "./src/app/modules/widgets/widget-posts/widget-posts.component.ts");
/* harmony import */ var _widget_products_widget_products_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./widget-products/widget-products.component */ "./src/app/modules/widgets/widget-products/widget-products.component.ts");
/* harmony import */ var _widget_search_widget_search_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./widget-search/widget-search.component */ "./src/app/modules/widgets/widget-search/widget-search.component.ts");
/* harmony import */ var _widget_tags_widget_tags_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./widget-tags/widget-tags.component */ "./src/app/modules/widgets/widget-tags/widget-tags.component.ts");


// modules (angular)



// modules (third-party)

// modules

// widgets









let WidgetsModule = class WidgetsModule {
};
WidgetsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            // widgets
            _widget_aboutus_widget_aboutus_component__WEBPACK_IMPORTED_MODULE_7__["WidgetAboutusComponent"],
            _widget_categories_widget_categories_component__WEBPACK_IMPORTED_MODULE_8__["WidgetCategoriesComponent"],
            _widget_comments_widget_comments_component__WEBPACK_IMPORTED_MODULE_9__["WidgetCommentsComponent"],
            _widget_filters_widget_filters_component__WEBPACK_IMPORTED_MODULE_10__["WidgetFiltersComponent"],
            _widget_newsletter_widget_newsletter_component__WEBPACK_IMPORTED_MODULE_11__["WidgetNewsletterComponent"],
            _widget_posts_widget_posts_component__WEBPACK_IMPORTED_MODULE_12__["WidgetPostsComponent"],
            _widget_products_widget_products_component__WEBPACK_IMPORTED_MODULE_13__["WidgetProductsComponent"],
            _widget_search_widget_search_component__WEBPACK_IMPORTED_MODULE_14__["WidgetSearchComponent"],
            _widget_tags_widget_tags_component__WEBPACK_IMPORTED_MODULE_15__["WidgetTagsComponent"]
        ],
        imports: [
            // modules (angular)
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
            // modules (third-party)
            ng5_slider__WEBPACK_IMPORTED_MODULE_5__["Ng5SliderModule"],
            // modules
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]
        ],
        exports: [
            // widgets
            _widget_aboutus_widget_aboutus_component__WEBPACK_IMPORTED_MODULE_7__["WidgetAboutusComponent"],
            _widget_categories_widget_categories_component__WEBPACK_IMPORTED_MODULE_8__["WidgetCategoriesComponent"],
            _widget_comments_widget_comments_component__WEBPACK_IMPORTED_MODULE_9__["WidgetCommentsComponent"],
            _widget_filters_widget_filters_component__WEBPACK_IMPORTED_MODULE_10__["WidgetFiltersComponent"],
            _widget_newsletter_widget_newsletter_component__WEBPACK_IMPORTED_MODULE_11__["WidgetNewsletterComponent"],
            _widget_posts_widget_posts_component__WEBPACK_IMPORTED_MODULE_12__["WidgetPostsComponent"],
            _widget_products_widget_products_component__WEBPACK_IMPORTED_MODULE_13__["WidgetProductsComponent"],
            _widget_search_widget_search_component__WEBPACK_IMPORTED_MODULE_14__["WidgetSearchComponent"],
            _widget_tags_widget_tags_component__WEBPACK_IMPORTED_MODULE_15__["WidgetTagsComponent"]
        ]
    })
], WidgetsModule);



/***/ }),

/***/ "./src/app/pages/page-home-one/page-home-one.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/page-home-one/page-home-one.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BhZ2UtaG9tZS1vbmUvcGFnZS1ob21lLW9uZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/page-home-one/page-home-one.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/page-home-one/page-home-one.component.ts ***!
  \****************************************************************/
/*! exports provided: PageHomeOneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageHomeOneComponent", function() { return PageHomeOneComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _shared_api_shop_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/api/shop.service */ "./src/app/shared/api/shop.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let PageHomeOneComponent = class PageHomeOneComponent {
    constructor(shop) {
        this.shop = shop;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    ngOnInit() {
        // this.categoryList = this.shop.getCategories();
        this.bestsellers$ = this.shop.getBestsellers(7);
        this.brands$ = this.shop.getPopularBrands();
        // this.popularCategories$ = this.shop.getCategoriesBySlug([
        //     'power-tools',
        //     'hand-tools',
        //     'machine-tools',
        //     'power-machinery',
        //     'measurement',
        //     'clothes-and-ppe',
        // ], 2);
        this.columnTopRated$ = this.shop.getTopRated(3);
        this.columnSpecialOffers$ = this.shop.getSpecialOffers(3);
        this.columnBestsellers$ = this.shop.getBestsellers(3);
        this.featuredProducts = {
            abort$: new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"](),
            loading: false,
            products: [],
            groups: [
                {
                    name: 'All',
                    current: true,
                    products$: this.shop.getFeaturedProducts(null, 8),
                },
                {
                    name: 'Fan Blades',
                    current: false,
                    products$: this.shop.getFeaturedProducts('fan-blades', 8),
                },
                {
                    name: 'Farrata Pipe',
                    current: false,
                    products$: this.shop.getFeaturedProducts('farrata-pipe', 8),
                },
            ],
        };
        this.groupChange(this.featuredProducts, this.featuredProducts.groups[0]);
        this.latestProducts = {
            abort$: new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"](),
            loading: false,
            products: [],
            groups: [
                {
                    name: 'All',
                    current: true,
                    products$: this.shop.getLatestProducts(null, 8),
                },
            ],
        };
        this.shop.getIndex().subscribe((data) => {
            this.posts = data;
        });
        this.groupChange(this.latestProducts, this.latestProducts.groups[0]);
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    groupChange(carousel, group) {
        carousel.loading = true;
        carousel.abort$.next();
        group.products$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(() => carousel.loading = false), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(this.destroy$, carousel.abort$))).subscribe(x => carousel.products = x);
    }
};
PageHomeOneComponent.ctorParameters = () => [
    { type: _shared_api_shop_service__WEBPACK_IMPORTED_MODULE_3__["ShopService"] }
];
PageHomeOneComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./page-home-one.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/page-home-one/page-home-one.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./page-home-one.component.scss */ "./src/app/pages/page-home-one/page-home-one.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_api_shop_service__WEBPACK_IMPORTED_MODULE_3__["ShopService"]])
], PageHomeOneComponent);



/***/ }),

/***/ "./src/app/pages/page-home-two/page-home-two.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/page-home-two/page-home-two.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BhZ2UtaG9tZS10d28vcGFnZS1ob21lLXR3by5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/page-home-two/page-home-two.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/page-home-two/page-home-two.component.ts ***!
  \****************************************************************/
/*! exports provided: PageHomeTwoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageHomeTwoComponent", function() { return PageHomeTwoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _data_blog_posts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../data/blog-posts */ "./src/data/blog-posts.ts");
/* harmony import */ var _shared_api_shop_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/api/shop.service */ "./src/app/shared/api/shop.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");






let PageHomeTwoComponent = class PageHomeTwoComponent {
    constructor(shop) {
        this.shop = shop;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.posts = _data_blog_posts__WEBPACK_IMPORTED_MODULE_2__["posts"];
    }
    ngOnInit() {
        this.bestsellers$ = this.shop.getBestsellers(7);
        this.brands$ = this.shop.getPopularBrands();
        this.popularCategories$ = this.shop.getCategoriesBySlug([
            'power-tools',
            'hand-tools',
            'machine-tools',
            'power-machinery',
            'measurement',
            'clothes-and-ppe',
        ], 1);
        this.columnTopRated$ = this.shop.getTopRated(3);
        this.columnSpecialOffers$ = this.shop.getSpecialOffers(3);
        this.columnBestsellers$ = this.shop.getBestsellers(3);
        this.featuredProducts = {
            abort$: new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"](),
            loading: false,
            products: [],
            groups: [
                {
                    name: 'All',
                    current: true,
                    products$: this.shop.getFeaturedProducts(null, 8),
                },
                {
                    name: 'Power Tools',
                    current: false,
                    products$: this.shop.getFeaturedProducts('power-tools', 8),
                },
                {
                    name: 'Hand Tools',
                    current: false,
                    products$: this.shop.getFeaturedProducts('hand-tools', 8),
                },
                {
                    name: 'Plumbing',
                    current: false,
                    products$: this.shop.getFeaturedProducts('plumbing', 8),
                },
            ],
        };
        this.groupChange(this.featuredProducts, this.featuredProducts.groups[0]);
        this.latestProducts = {
            abort$: new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"](),
            loading: false,
            products: [],
            groups: [
                {
                    name: 'All',
                    current: true,
                    products$: this.shop.getLatestProducts(null, 8),
                },
                {
                    name: 'Power Tools',
                    current: false,
                    products$: this.shop.getLatestProducts('power-tools', 8),
                },
                {
                    name: 'Hand Tools',
                    current: false,
                    products$: this.shop.getLatestProducts('hand-tools', 8),
                },
                {
                    name: 'Plumbing',
                    current: false,
                    products$: this.shop.getLatestProducts('plumbing', 8),
                },
            ],
        };
        this.groupChange(this.latestProducts, this.latestProducts.groups[0]);
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    groupChange(carousel, group) {
        carousel.loading = true;
        carousel.abort$.next();
        group.products$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(() => carousel.loading = false), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["merge"])(this.destroy$, carousel.abort$))).subscribe(x => carousel.products = x);
    }
};
PageHomeTwoComponent.ctorParameters = () => [
    { type: _shared_api_shop_service__WEBPACK_IMPORTED_MODULE_3__["ShopService"] }
];
PageHomeTwoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page-home-two',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./page-home-two.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/page-home-two/page-home-two.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./page-home-two.component.scss */ "./src/app/pages/page-home-two/page-home-two.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_api_shop_service__WEBPACK_IMPORTED_MODULE_3__["ShopService"]])
], PageHomeTwoComponent);



/***/ }),

/***/ "./src/app/pages/page-not-found/page-not-found.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/page-not-found/page-not-found.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/page-not-found/page-not-found.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/page-not-found/page-not-found.component.ts ***!
  \******************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PageNotFoundComponent = class PageNotFoundComponent {
    constructor() { }
};
PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-not-found',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./page-not-found.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/page-not-found/page-not-found.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./page-not-found.component.scss */ "./src/app/pages/page-not-found/page-not-found.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PageNotFoundComponent);



/***/ }),

/***/ "./src/app/shared/api/shop.service.ts":
/*!********************************************!*\
  !*** ./src/app/shared/api/shop.service.ts ***!
  \********************************************/
/*! exports provided: ShopService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopService", function() { return ShopService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _fake_server__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../fake-server */ "./src/fake-server/index.ts");







let ShopService = class ShopService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        // APIURL = 'http://localhost:8765/api/webservice/';
        this.APIURL = 'http://jenix.in/api/webservice/';
        this.loggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
    }
    get isLoggedIn() {
        return this.loggedIn.asObservable(); // {2}
    }
    /**
     * Returns category object by slug.
     *
     * @param slug - Unique human-readable category identifier.
     */
    getCategory(slug) {
        /**
         * This is what your API endpoint might look like:
         *
         * https://example.com/api/shop/categories/power-tools.json
         *
         * where:
         * - power-tools = slug
         */
        // return this.http.get<Category>(`https://example.com/api/shop/categories/${slug}.json`);
        // return this.http.post<Product[]>(this.APIURL+'getcategory',{
        //     slug
        // }).pipe(map((response: any) => response.data));
        // This is for demonstration purposes only. Remove it and use the code above.
        return Object(_fake_server__WEBPACK_IMPORTED_MODULE_6__["getShopCategory"])(slug);
    }
    /**
     * Returns a category tree.
     *
     * @param parent - If a parent is specified then its descendants will be returned.
     * @param depth  - Maximum depth of category tree.
     */
    getCategories(parent = null, depth = 0) {
        /**
         * This is what your API endpoint might look like:
         *
         * https://example.com/api/shop/categories.json?parent=latest-news&depth=1
         *
         * where:
         * - parent = parent.slug
         * - depth  = depth
         */
        const params = {
            parent: parent.slug,
            depth: depth.toString(),
        };
        //
        // return this.http.get<Category[]>('https://example.com/api/shop/categories.json', {params});
        // return this.http.get<Category[]>('http://localhost:8765/api/webservice/getcategories')
        // .pipe(map((response: any) => response.data));
        // return this.http.get<Product[]>(this.APIURL+'getcategories', {params})
        // .pipe(map((response: any) => response.data));
        // This is for demonstration purposes only. Remove it and use the code above.
        return Object(_fake_server__WEBPACK_IMPORTED_MODULE_6__["getShopCategoriesTree"])(parent ? parent.slug : null, depth);
    }
    /**
     * Returns an array of the specified categories.
     *
     * @param slugs - Array of slugs.
     * @param depth - Maximum depth of category tree.
     */
    getCategoriesBySlug(slugs, depth = 0) {
        /**
         * This is what your API endpoint might look like:
         *
         * https://example.com/api/shop/categories.json?slugs=power-tools,measurement&depth=1
         *
         * where:
         * - slugs = slugs.join(',')
         * - depth = depth
         */
        // const params: {[param: string]: string} = {
        //     slugs: slugs.join(','),
        //     depth: depth.toString(),
        // };
        //
        // return this.http.get<Category[]>('https://example.com/api/shop/categories.json', {params});
        // return this.http.get<Category[]>('http://localhost:8765/api/webservice/getcategories')
        // .pipe(map((response: any) => response.data));
        // This is for demonstration purposes only. Remove it and use the code above.
        return Object(_fake_server__WEBPACK_IMPORTED_MODULE_6__["getShopCategoriesBySlugs"])(slugs, depth);
    }
    /**
     * Returns paginated products list.
     * If categorySlug is null then a list of all products should be returned.
     *
     * @param categorySlug    - Unique human-readable category identifier.
     * @param options         - Options.
     * @param options.page    - Page number (optional).
     * @param options.limit   - Maximum number of items returned at one time (optional).
     * @param options.sort    - The algorithm by which the list should be sorted (optional).
     * @param options.filters - An object whose keys are filter slugs and values ​​are filter values (optional).
     */
    getProductsList(categorySlug, options) {
        /**
         * This is what your API endpoint might look like:
         *
         * https://example.com/api/products.json?category=screwdriwers&page=2&limit=12&sort=name_desc&filter_price=500-1000
         *
         * where:
         * - category     = categorySlug
         * - page         = options.page
         * - limit        = options.limit
         * - sort         = options.sort
         * - filter_price = options.filters.price
         */
        // const params: {[param: string]: string} = {};
        //
        // if (categorySlug) {
        //     params.category = categorySlug;
        // }
        // if ('page' in options) {
        //     params.page = options.page.toString();
        // }
        // if ('limit' in options) {
        //     params.limit = options.limit.toString();
        // }
        // if ('sort' in options) {
        //     params.sort = options.sort;
        // }
        //
        // Object.keys(options.filters).forEach(slug => params[`filter_${slug}`] = options.filters[slug]);
        //
        // return this.http.get<ProductsList>('https://example.com/api/products.json', {params});
        console.log(options);
        return this.http.post(this.APIURL + 'getproductlist', {
            options
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((response) => response.data));
        // This is for demonstration purposes only. Remove it and use the code above.
        // console.log(options);  
        // return getProductsList(categorySlug, options);
    }
    getProduct(productSlug) {
        /**
         * This is what your API endpoint might look like:
         *
         * https://example.com/api/products/electric-planer-brandix-kl370090g-300-watts.json
         *
         * where:
         * - electric-planer-brandix-kl370090g-300-watts = productSlug
         */
        const params = {};
        //
        if (productSlug) {
            params.slug = productSlug.toString();
        }
        // return this.http.get<Product>(`https://example.com/api/products/${productSlug}.json`);
        return this.http.get(this.APIURL + 'productdetails', { params })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((response) => response.data));
        // This is for demonstration purposes only. Remove it and use the code above.
        // return getProduct(productSlug);
    }
    /**
     * Returns popular brands.
     */
    getPopularBrands() {
        /**
         * This is what your API endpoint might look like:
         *
         * https://example.com/api/shop/brands/popular.json
         */
        // return this.http.get<Brand[]>('https://example.com/api/shop/brands/popular.json');
        // This is for demonstration purposes only. Remove it and use the code above.
        return Object(_fake_server__WEBPACK_IMPORTED_MODULE_6__["getBrands"])();
    }
    getBestsellers(limit = null) {
        /**
         * This is what your API endpoint might look like:
         *
         * https://example.com/api/shop/products/bestsellers.json?limit=3
         *
         * where:
         * - limit = limit
         */
        const params = {};
        //
        if (limit) {
            params.limit = limit.toString();
        }
        params.bestselling = '1';
        // return this.http.get<Product[]>('https://example.com/api/shop/products/bestsellers.json', {params});
        return this.http.get(this.APIURL + 'getproducts', { params })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((response) => response.data));
        // This is for demonstration purposes only. Remove it and use the code above.
        // return getBestsellers(limit);
    }
    getTopRated(limit = null) {
        /**
         * This is what your API endpoint might look like:
         *
         * https://example.com/api/shop/products/top-rated.json?limit=3
         *
         * where:
         * - limit = limit
         */
        const params = {};
        //
        if (limit) {
            params.limit = limit.toString();
        }
        //
        // return this.http.get<Product[]>('https://example.com/api/shop/products/top-rated.json', {params});
        return this.http.get(this.APIURL + 'getproducts', { params })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((response) => response.data));
        // This is for demonstration purposes only. Remove it and use the code above.
        // return getTopRated(limit);
    }
    getSpecialOffers(limit = null) {
        /**
         * This is what your API endpoint might look like:
         *
         * https://example.com/api/shop/products/special-offers.json?limit=3
         *
         * where:
         * - limit = limit
         */
        const params = {};
        //
        if (limit) {
            params.limit = limit.toString();
        }
        //
        // return this.http.get<Product[]>('https://example.com/api/shop/products/special-offers.json', {params});
        return this.http.get(this.APIURL + 'getproducts', { params })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((response) => response.data));
        // This is for demonstration purposes only. Remove it and use the code above.
        // return getSpecialOffers(limit);
    }
    getFeaturedProducts(categorySlug = null, limit = null) {
        /**
         * This is what your API endpoint might look like:
         *
         * https://example.com/api/shop/products/featured.json?category=screwdrivers&limit=3
         *
         * where:
         * - category = categorySlug
         * - limit    = limit
         */
        const params = {};
        //
        if (categorySlug) {
            params.category = categorySlug;
        }
        if (limit) {
            params.limit = limit.toString();
        }
        params.is_featured = '1';
        //
        return this.http.get(this.APIURL + 'getproducts', { params })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((response) => response.data));
        // This is for demonstration purposes only. Remove it and use the code above.
        // return getFeatured(categorySlug, limit);
    }
    getLatestProducts(categorySlug = null, limit = null) {
        /**
         * This is what your API endpoint might look like:
         *
         * https://example.com/api/shop/products/latest.json?category=screwdrivers&limit=3
         *
         * where:
         * - category = categorySlug
         * - limit    = limit
         */
        const params = {};
        //
        // if (category) {
        //     params.category = category;
        // }
        if (limit) {
            params.limit = limit.toString();
        }
        //
        // return this.http.get<Product[]>('https://example.com/api/shop/products/latest.json', {params});
        return this.http.get(this.APIURL + 'getproducts', { params })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((response) => response.data));
        // This is for demonstration purposes only. Remove it and use the code above.
        // return getLatestProducts(categorySlug, limit);
    }
    getRelatedProducts(product) {
        /**
         * This is what your API endpoint might look like:
         *
         * https://example.com/api/shop/products/related.json?for=water-tap
         *
         * where:
         * - for = product.slug
         */
        const params = {
            for: product.slug,
        };
        //
        // return this.http.get<Product[]>('https://example.com/api/shop/products/related.json', {params});
        return this.http.get(this.APIURL + 'getproducts', { params })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((response) => response.data));
        // This is for demonstration purposes only. Remove it and use the code above.
        // return getRelatedProducts(product);
    }
    getStatic(slug) {
        return this.http.get(this.APIURL + 'staticpage?name=' + slug)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((response) => response.data));
    }
    getContact() {
        return this.http.get(this.APIURL + 'getcontact')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((response) => response.data));
    }
    getIndex() {
        return this.http.get(this.APIURL + 'index')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((response) => response.data));
    }
    getLogin(detail) {
        this.http.post(this.APIURL + 'login', {
            detail: detail
        }).subscribe((data) => {
            this.result = data;
            if (this.result.status == true) {
                this.loggedIn.next(true);
                localStorage.setItem('USERINFO', JSON.stringify(this.result.data));
                this.router.navigate(['/']);
            }
            else {
                alert(this.result.message);
            }
            return this.result;
        });
    }
    getLogout() {
        this.loggedIn.next(false);
        localStorage.removeItem("USERINFO");
        this.router.navigate(['/account/login']);
    }
    signup(detail) {
        return this.http.post(this.APIURL + 'signup', {
            detail
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((response) => response.data));
    }
    update(detail) {
        return this.http.post(this.APIURL + 'update', {
            detail
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((response) => response.data));
    }
};
ShopService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
ShopService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
], ShopService);



/***/ }),

/***/ "./src/app/shared/components/alert/alert.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/alert/alert.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FzaGlzaGphaW4vcHJvamVjdHMvc2V0dXAvYW5ndWxhci9hamF5Y28vc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9hbGVydC9hbGVydC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvYWxlcnQvYWxlcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9hbGVydC9hbGVydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbiIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59Il19 */");

/***/ }),

/***/ "./src/app/shared/components/alert/alert.component.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/components/alert/alert.component.ts ***!
  \************************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AlertComponent = class AlertComponent {
    constructor() {
        this.size = null;
        this.dismissible = false;
        this.type = 'info';
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.classAlert = true;
    }
    get classAlertLg() { return this.size === 'lg'; }
    get classAlertDismissible() { return this.dismissible; }
    get classAlertInfo() { return this.type === 'info'; }
    get classAlertPrimary() { return this.type === 'primary'; }
    get classAlertSecondary() { return this.type === 'secondary'; }
    get classAlertSuccess() { return this.type === 'success'; }
    get classAlertDanger() { return this.type === 'danger'; }
    get classAlertWarning() { return this.type === 'warning'; }
    onClose() {
        this.close.emit();
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], AlertComponent.prototype, "size", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], AlertComponent.prototype, "dismissible", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], AlertComponent.prototype, "type", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], AlertComponent.prototype, "close", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.alert'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], AlertComponent.prototype, "classAlert", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.alert-lg'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AlertComponent.prototype, "classAlertLg", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.alert-dismissible'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AlertComponent.prototype, "classAlertDismissible", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.alert-info'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AlertComponent.prototype, "classAlertInfo", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.alert-primary'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AlertComponent.prototype, "classAlertPrimary", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.alert-secondary'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AlertComponent.prototype, "classAlertSecondary", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.alert-success'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AlertComponent.prototype, "classAlertSuccess", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.alert-danger'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AlertComponent.prototype, "classAlertDanger", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.alert-warning'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AlertComponent.prototype, "classAlertWarning", null);
AlertComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-alert',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./alert.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/alert/alert.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./alert.component.scss */ "./src/app/shared/components/alert/alert.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AlertComponent);



/***/ }),

/***/ "./src/app/shared/components/icon/icon.component.scss":
/*!************************************************************!*\
  !*** ./src/app/shared/components/icon/icon.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FzaGlzaGphaW4vcHJvamVjdHMvc2V0dXAvYW5ndWxhci9hamF5Y28vc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9pY29uL2ljb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2ljb24vaWNvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2ljb24vaWNvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbiIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59Il19 */");

/***/ }),

/***/ "./src/app/shared/components/icon/icon.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/components/icon/icon.component.ts ***!
  \**********************************************************/
/*! exports provided: IconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconComponent", function() { return IconComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let IconComponent = class IconComponent {
    constructor() { }
    set name(value) {
        this.id = value;
    }
    set size(value) {
        const result = /^([0-9]+)(?:x([0-9]+))?$/.exec(value);
        if (result) {
            if (result[2]) {
                this.width = result[1] + 'px';
                this.height = result[2] + 'px';
            }
            else {
                this.width = this.height = result[1] + 'px';
            }
        }
        else {
            this.width = this.height = null;
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String])
], IconComponent.prototype, "name", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String])
], IconComponent.prototype, "size", null);
IconComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-icon',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./icon.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/icon/icon.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./icon.component.scss */ "./src/app/shared/components/icon/icon.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], IconComponent);



/***/ }),

/***/ "./src/app/shared/components/input-number/input-number.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/input-number/input-number.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2lucHV0LW51bWJlci9pbnB1dC1udW1iZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/shared/components/input-number/input-number.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/input-number/input-number.component.ts ***!
  \**************************************************************************/
/*! exports provided: InputNumberComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputNumberComponent", function() { return InputNumberComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
var InputNumberComponent_1;



function parseNumber(value, def) {
    if (typeof value === 'string') {
        value = parseFloat(value);
    }
    else if (typeof value !== 'number') {
        value = def;
    }
    return isNaN(value) ? def : value;
}
let InputNumberComponent = InputNumberComponent_1 = class InputNumberComponent {
    constructor() {
        this.options = {
            step: 1,
            min: null,
            max: null,
            disabled: false,
            readonly: false
        };
        this.class = true;
        this.size = null;
        this.onChange = (_) => { };
        this.onTouched = () => { };
    }
    set step(value) {
        this.options.step = parseNumber(value, 1);
    }
    set min(value) {
        this.options.min = parseNumber(value, null);
    }
    set max(value) {
        this.options.max = parseNumber(value, null);
    }
    set disabled(value) {
        this.options.disabled = !!value;
    }
    set readonly(value) {
        this.options.readonly = !!value;
    }
    get inputElement() {
        return this.inputElementRef.nativeElement;
    }
    get value() {
        return this.inputElement.value === '' ? '' : parseFloat(this.inputElement.value);
    }
    set value(value) {
        this.writeValue(value);
    }
    add() {
        this.change(1);
        this.changeByTimer(1);
    }
    sub() {
        this.change(-1);
        this.changeByTimer(-1);
    }
    input() {
        this.onChange(this.value);
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    writeValue(obj) {
        if (typeof obj === 'number') {
            this.inputElement.value = obj.toString();
        }
        else {
            this.inputElement.value = '';
        }
    }
    /**
     * @param direction - one of [-1, 1]
     */
    change(direction) {
        let value = (this.value === '' || isNaN(this.value) ? 0 : this.value) + this.options.step * direction;
        if (this.options.max !== null) {
            value = Math.min(this.options.max, value);
        }
        if (this.options.min !== null) {
            value = Math.max(this.options.min, value);
        }
        if (value !== this.value) {
            this.onChange(value);
            this.value = value;
        }
    }
    /**
     * @param direction - one of [-1, 1]
     */
    changeByTimer(direction) {
        let interval;
        const timer = setTimeout(() => {
            interval = setInterval(() => this.change(direction), 50);
        }, 300);
        const documentMouseUp = () => {
            clearTimeout(timer);
            clearInterval(interval);
            document.removeEventListener('mouseup', documentMouseUp, false);
        };
        document.addEventListener('mouseup', documentMouseUp, false);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.input-number'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], InputNumberComponent.prototype, "class", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], InputNumberComponent.prototype, "size", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Number])
], InputNumberComponent.prototype, "step", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Number])
], InputNumberComponent.prototype, "min", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Number])
], InputNumberComponent.prototype, "max", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])
], InputNumberComponent.prototype, "disabled", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])
], InputNumberComponent.prototype, "readonly", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('inputElement', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], InputNumberComponent.prototype, "inputElementRef", void 0);
InputNumberComponent = InputNumberComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-input-number',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./input-number.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/input-number/input-number.component.html")).default,
        providers: [
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => InputNumberComponent_1),
                multi: true
            }
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./input-number.component.scss */ "./src/app/shared/components/input-number/input-number.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], InputNumberComponent);



/***/ }),

/***/ "./src/app/shared/components/loading-bar/loading-bar.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/loading-bar/loading-bar.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2xvYWRpbmctYmFyL2xvYWRpbmctYmFyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/shared/components/loading-bar/loading-bar.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/loading-bar/loading-bar.component.ts ***!
  \************************************************************************/
/*! exports provided: LoadingBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingBarComponent", function() { return LoadingBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let LoadingBarComponent = class LoadingBarComponent {
    constructor(router, zone) {
        this.router = router;
        this.zone = zone;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    get element() {
        return this.bar.nativeElement;
    }
    ngAfterViewInit() {
        this.zone.runOutsideAngular(() => {
            this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroy$)).subscribe(event => {
                if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                    this.element.classList.remove('loading-bar--start', 'loading-bar--complete', 'loading-bar--reset');
                    this.element.getBoundingClientRect(); // force reflow
                    this.element.classList.add('loading-bar--start');
                }
                if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationError"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationCancel"]) {
                    if (this.element.classList.contains('loading-bar--start')) {
                        this.element.classList.remove('loading-bar--start');
                        this.element.classList.add('loading-bar--complete');
                    }
                }
            });
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
};
LoadingBarComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('bar', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], LoadingBarComponent.prototype, "bar", void 0);
LoadingBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-loading-bar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./loading-bar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/loading-bar/loading-bar.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./loading-bar.component.scss */ "./src/app/shared/components/loading-bar/loading-bar.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
], LoadingBarComponent);



/***/ }),

/***/ "./src/app/shared/components/page-header/page-header.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/page-header/page-header.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3BhZ2UtaGVhZGVyL3BhZ2UtaGVhZGVyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/shared/components/page-header/page-header.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/page-header/page-header.component.ts ***!
  \************************************************************************/
/*! exports provided: PageHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageHeaderComponent", function() { return PageHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PageHeaderComponent = class PageHeaderComponent {
    constructor() {
        this.breadcrumbs = [];
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], PageHeaderComponent.prototype, "header", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], PageHeaderComponent.prototype, "breadcrumbs", void 0);
PageHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./page-header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/page-header/page-header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./page-header.component.scss */ "./src/app/shared/components/page-header/page-header.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PageHeaderComponent);



/***/ }),

/***/ "./src/app/shared/components/pagination/pagination.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/pagination/pagination.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/shared/components/pagination/pagination.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/pagination/pagination.component.ts ***!
  \**********************************************************************/
/*! exports provided: PaginationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationComponent", function() { return PaginationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
var PaginationComponent_1;



let PaginationComponent = PaginationComponent_1 = class PaginationComponent {
    constructor() {
        this.siblings = 1;
        this.current = 1;
        this.total = 1;
        this.pageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.pages = [];
        this.onChange = () => { };
        this.onTouched = () => { };
    }
    ngOnInit() {
        this.calc();
    }
    ngOnChanges(changes) {
        this.calc();
    }
    setPage(value, emitEvent = true) {
        this.onTouched();
        if (value < 1 || value > this.total || value === this.current) {
            return;
        }
        if (this.current !== value) {
            this.onChange(value);
        }
        this.current = value;
        this.calc();
        if (emitEvent) {
            this.pageChange.emit(this.current);
        }
    }
    trackByFn(index) {
        return index;
    }
    calc() {
        const min = Math.max(1, this.current - this.siblings - Math.max(0, this.siblings - this.total + this.current));
        const max = Math.min(this.total, min + this.siblings * 2);
        this.pages = [];
        for (let i = min; i <= max; i++) {
            this.pages.push(i);
        }
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    writeValue(obj) {
        if (typeof obj === 'number') {
            this.setPage(obj, false);
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], PaginationComponent.prototype, "siblings", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], PaginationComponent.prototype, "current", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], PaginationComponent.prototype, "total", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], PaginationComponent.prototype, "pageChange", void 0);
PaginationComponent = PaginationComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pagination',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./pagination.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/pagination/pagination.component.html")).default,
        providers: [
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => PaginationComponent_1),
                multi: true
            }
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./pagination.component.scss */ "./src/app/shared/components/pagination/pagination.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PaginationComponent);



/***/ }),

/***/ "./src/app/shared/components/post-card/post-card.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/post-card/post-card.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3Bvc3QtY2FyZC9wb3N0LWNhcmQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/shared/components/post-card/post-card.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/shared/components/post-card/post-card.component.ts ***!
  \********************************************************************/
/*! exports provided: PostCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostCardComponent", function() { return PostCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_root_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/root.service */ "./src/app/shared/services/root.service.ts");



let PostCardComponent = class PostCardComponent {
    constructor(root) {
        this.root = root;
        this.layout = null;
    }
};
PostCardComponent.ctorParameters = () => [
    { type: _services_root_service__WEBPACK_IMPORTED_MODULE_2__["RootService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], PostCardComponent.prototype, "post", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], PostCardComponent.prototype, "layout", void 0);
PostCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-post-card',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./post-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/post-card/post-card.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./post-card.component.scss */ "./src/app/shared/components/post-card/post-card.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_root_service__WEBPACK_IMPORTED_MODULE_2__["RootService"]])
], PostCardComponent);



/***/ }),

/***/ "./src/app/shared/components/product-card/product-card.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/product-card/product-card.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3Byb2R1Y3QtY2FyZC9wcm9kdWN0LWNhcmQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/shared/components/product-card/product-card.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/product-card/product-card.component.ts ***!
  \**************************************************************************/
/*! exports provided: ProductCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCardComponent", function() { return ProductCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/cart.service */ "./src/app/shared/services/cart.service.ts");
/* harmony import */ var _services_wishlist_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/wishlist.service */ "./src/app/shared/services/wishlist.service.ts");
/* harmony import */ var _services_compare_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/compare.service */ "./src/app/shared/services/compare.service.ts");
/* harmony import */ var _services_quickview_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/quickview.service */ "./src/app/shared/services/quickview.service.ts");
/* harmony import */ var _services_root_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/root.service */ "./src/app/shared/services/root.service.ts");
/* harmony import */ var _services_currency_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/currency.service */ "./src/app/shared/services/currency.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");










let ProductCardComponent = class ProductCardComponent {
    constructor(cd, root, cart, wishlist, compare, quickview, currency) {
        this.cd = cd;
        this.root = root;
        this.cart = cart;
        this.wishlist = wishlist;
        this.compare = compare;
        this.quickview = quickview;
        this.currency = currency;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
        this.layout = null;
        this.addingToCart = false;
        this.addingToWishlist = false;
        this.addingToCompare = false;
        this.showingQuickview = false;
        this.featuredAttributes = [];
    }
    ngOnInit() {
        this.currency.changes$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this.destroy$)).subscribe(() => {
            this.cd.markForCheck();
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    ngOnChanges(changes) {
        if ('product' in changes) {
            this.featuredAttributes = !this.product ? [] : this.product.attributes.filter(x => x.featured);
        }
    }
    addToCart() {
        if (this.addingToCart) {
            return;
        }
        this.addingToCart = true;
        this.cart.add(this.product, 1).subscribe({
            complete: () => {
                this.addingToCart = false;
                this.cd.markForCheck();
            }
        });
    }
    addToWishlist() {
        if (this.addingToWishlist) {
            return;
        }
        this.addingToWishlist = true;
        this.wishlist.add(this.product).subscribe({
            complete: () => {
                this.addingToWishlist = false;
                this.cd.markForCheck();
            }
        });
    }
    addToCompare() {
        if (this.addingToCompare) {
            return;
        }
        this.addingToCompare = true;
        this.compare.add(this.product).subscribe({
            complete: () => {
                this.addingToCompare = false;
                this.cd.markForCheck();
            }
        });
    }
    showQuickview() {
        if (this.showingQuickview) {
            return;
        }
        this.showingQuickview = true;
        this.quickview.show(this.product).subscribe({
            complete: () => {
                this.showingQuickview = false;
                this.cd.markForCheck();
            }
        });
    }
};
ProductCardComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _services_root_service__WEBPACK_IMPORTED_MODULE_6__["RootService"] },
    { type: _services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"] },
    { type: _services_wishlist_service__WEBPACK_IMPORTED_MODULE_3__["WishlistService"] },
    { type: _services_compare_service__WEBPACK_IMPORTED_MODULE_4__["CompareService"] },
    { type: _services_quickview_service__WEBPACK_IMPORTED_MODULE_5__["QuickviewService"] },
    { type: _services_currency_service__WEBPACK_IMPORTED_MODULE_7__["CurrencyService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ProductCardComponent.prototype, "product", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], ProductCardComponent.prototype, "layout", void 0);
ProductCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-card',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./product-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/product-card/product-card.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./product-card.component.scss */ "./src/app/shared/components/product-card/product-card.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
        _services_root_service__WEBPACK_IMPORTED_MODULE_6__["RootService"],
        _services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"],
        _services_wishlist_service__WEBPACK_IMPORTED_MODULE_3__["WishlistService"],
        _services_compare_service__WEBPACK_IMPORTED_MODULE_4__["CompareService"],
        _services_quickview_service__WEBPACK_IMPORTED_MODULE_5__["QuickviewService"],
        _services_currency_service__WEBPACK_IMPORTED_MODULE_7__["CurrencyService"]])
], ProductCardComponent);



/***/ }),

/***/ "./src/app/shared/components/product/product.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/product/product.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3Byb2R1Y3QvcHJvZHVjdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/shared/components/product/product.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/product/product.component.ts ***!
  \****************************************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-owl-carousel-o */ "./node_modules/ngx-owl-carousel-o/fesm2015/ngx-owl-carousel-o.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/cart.service */ "./src/app/shared/services/cart.service.ts");
/* harmony import */ var _services_wishlist_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/wishlist.service */ "./src/app/shared/services/wishlist.service.ts");
/* harmony import */ var _services_compare_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/compare.service */ "./src/app/shared/services/compare.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _services_photo_swipe_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/photo-swipe.service */ "./src/app/shared/services/photo-swipe.service.ts");
/* harmony import */ var _services_direction_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/direction.service */ "./src/app/shared/services/direction.service.ts");










let ProductComponent = class ProductComponent {
    constructor(platformId, cart, wishlist, compare, photoSwipe, direction) {
        this.platformId = platformId;
        this.cart = cart;
        this.wishlist = wishlist;
        this.compare = compare;
        this.photoSwipe = photoSwipe;
        this.direction = direction;
        this.dataLayout = 'standard';
        this.showGallery = true;
        this.images = [];
        this.carouselOptions = {
            dots: false,
            autoplay: false,
            responsive: {
                0: { items: 1 }
            },
            rtl: this.direction.isRTL()
        };
        this.thumbnailsCarouselOptions = {
            dots: false,
            autoplay: false,
            margin: 10,
            items: 5,
            responsive: {
                480: { items: 5 },
                380: { items: 4 },
                0: { items: 3 }
            },
            rtl: this.direction.isRTL()
        };
        this.quantity = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](1);
        this.addingToCart = false;
        this.addingToWishlist = false;
        this.addingToCompare = false;
    }
    set layout(value) {
        this.dataLayout = value;
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_7__["isPlatformBrowser"])(this.platformId)) {
            // this dirty hack is needed to re-initialize the gallery after changing the layout
            clearTimeout(this.showGalleryTimeout);
            this.showGallery = false;
            this.showGalleryTimeout = window.setTimeout(() => {
                this.showGallery = true;
            }, 0);
        }
    }
    get layout() {
        return this.dataLayout;
    }
    set product(value) {
        this.dataProduct = value;
        this.images = value ? this.dataProduct.images.map((url, index) => {
            return {
                id: index.toString(),
                url,
                active: index === 0
            };
        }) : [];
    }
    get product() {
        return this.dataProduct;
    }
    ngOnInit() {
        if (this.layout !== 'quickview' && Object(_angular_common__WEBPACK_IMPORTED_MODULE_7__["isPlatformBrowser"])(this.platformId)) {
            this.photoSwipe.load().subscribe();
        }
    }
    setActiveImage(image) {
        this.images.forEach(eachImage => eachImage.active = eachImage === image);
    }
    featuredCarouselTranslated(event) {
        if (event.slides.length) {
            const activeImageId = event.slides[0].id;
            this.images.forEach(eachImage => eachImage.active = eachImage.id === activeImageId);
            if (!this.thumbnailsCarousel.slidesData.find(slide => slide.id === event.slides[0].id && slide.isActive)) {
                this.thumbnailsCarousel.to(event.slides[0].id);
            }
        }
    }
    addToCart() {
        if (!this.addingToCart && this.product && this.quantity.value > 0) {
            this.addingToCart = true;
            this.cart.add(this.product, this.quantity.value).subscribe({ complete: () => this.addingToCart = false });
        }
    }
    addToWishlist() {
        if (!this.addingToWishlist && this.product) {
            this.addingToWishlist = true;
            this.wishlist.add(this.product).subscribe({ complete: () => this.addingToWishlist = false });
        }
    }
    addToCompare() {
        if (!this.addingToCompare && this.product) {
            this.addingToCompare = true;
            this.compare.add(this.product).subscribe({ complete: () => this.addingToCompare = false });
        }
    }
    getIndexDependOnDir(index) {
        // we need to invert index id direction === 'rtl' because photoswipe do not support rtl
        if (this.direction.isRTL()) {
            return this.images.length - 1 - index;
        }
        return index;
    }
    openPhotoSwipe(event, image) {
        if (this.layout !== 'quickview') {
            event.preventDefault();
            const images = this.images.map(eachImage => {
                return {
                    src: eachImage.url,
                    msrc: eachImage.url,
                    w: 700,
                    h: 700
                };
            });
            if (this.direction.isRTL()) {
                images.reverse();
            }
            const options = {
                getThumbBoundsFn: index => {
                    const imageElements = this.imageElements.toArray();
                    const dirDependentIndex = this.getIndexDependOnDir(index);
                    if (!imageElements[dirDependentIndex]) {
                        return null;
                    }
                    const imageElement = imageElements[dirDependentIndex].nativeElement;
                    const pageYScroll = window.pageYOffset || document.documentElement.scrollTop;
                    const rect = imageElement.getBoundingClientRect();
                    return { x: rect.left, y: rect.top + pageYScroll, w: rect.width };
                },
                index: this.getIndexDependOnDir(this.images.indexOf(image)),
                bgOpacity: .9,
                history: false
            };
            this.photoSwipe.open(images, options).subscribe(galleryRef => {
                galleryRef.listen('beforeChange', () => {
                    this.featuredCarousel.to(this.images[this.getIndexDependOnDir(galleryRef.getCurrentIndex())].id);
                });
            });
        }
    }
};
ProductComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"],] }] },
    { type: _services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"] },
    { type: _services_wishlist_service__WEBPACK_IMPORTED_MODULE_5__["WishlistService"] },
    { type: _services_compare_service__WEBPACK_IMPORTED_MODULE_6__["CompareService"] },
    { type: _services_photo_swipe_service__WEBPACK_IMPORTED_MODULE_8__["PhotoSwipeService"] },
    { type: _services_direction_service__WEBPACK_IMPORTED_MODULE_9__["DirectionService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('featuredCarousel', { read: ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__["CarouselComponent"], static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__["CarouselComponent"])
], ProductComponent.prototype, "featuredCarousel", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thumbnailsCarousel', { read: ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__["CarouselComponent"], static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__["CarouselComponent"])
], ProductComponent.prototype, "thumbnailsCarousel", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])('imageElement', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
], ProductComponent.prototype, "imageElements", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String])
], ProductComponent.prototype, "layout", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
], ProductComponent.prototype, "product", null);
ProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./product.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/product/product.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./product.component.scss */ "./src/app/shared/components/product/product.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"],
        _services_wishlist_service__WEBPACK_IMPORTED_MODULE_5__["WishlistService"],
        _services_compare_service__WEBPACK_IMPORTED_MODULE_6__["CompareService"],
        _services_photo_swipe_service__WEBPACK_IMPORTED_MODULE_8__["PhotoSwipeService"],
        _services_direction_service__WEBPACK_IMPORTED_MODULE_9__["DirectionService"]])
], ProductComponent);



/***/ }),

/***/ "./src/app/shared/components/quickview/quickview.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/quickview/quickview.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3F1aWNrdmlldy9xdWlja3ZpZXcuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/shared/components/quickview/quickview.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/shared/components/quickview/quickview.component.ts ***!
  \********************************************************************/
/*! exports provided: QuickviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuickviewComponent", function() { return QuickviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_quickview_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/quickview.service */ "./src/app/shared/services/quickview.service.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let QuickviewComponent = class QuickviewComponent {
    constructor(quickview, modalService) {
        this.quickview = quickview;
        this.modalService = modalService;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    ngAfterViewInit() {
        this.quickview.show$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$)).subscribe(product => {
            if (this.modalRef) {
                this.modalRef.hide();
            }
            this.product = product;
            this.modalRef = this.modalService.show(this.template, { class: 'modal-dialog-centered modal-xl' });
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
};
QuickviewComponent.ctorParameters = () => [
    { type: _services_quickview_service__WEBPACK_IMPORTED_MODULE_2__["QuickviewService"] },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('modal', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
], QuickviewComponent.prototype, "template", void 0);
QuickviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-quickview',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./quickview.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/quickview/quickview.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./quickview.component.scss */ "./src/app/shared/components/quickview/quickview.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_quickview_service__WEBPACK_IMPORTED_MODULE_2__["QuickviewService"],
        ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"]])
], QuickviewComponent);



/***/ }),

/***/ "./src/app/shared/components/rating/rating.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/rating/rating.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3JhdGluZy9yYXRpbmcuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/shared/components/rating/rating.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/rating/rating.component.ts ***!
  \**************************************************************/
/*! exports provided: RatingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingComponent", function() { return RatingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RatingComponent = class RatingComponent {
    constructor() {
        this.value = 0;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], RatingComponent.prototype, "value", void 0);
RatingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-rating',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./rating.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/rating/rating.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./rating.component.scss */ "./src/app/shared/components/rating/rating.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], RatingComponent);



/***/ }),

/***/ "./src/app/shared/directives/click.directive.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/directives/click.directive.ts ***!
  \******************************************************/
/*! exports provided: ClickDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClickDirective", function() { return ClickDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




/**
 * This directive helps to solve issue related to "iOS hover emulation" when first click
 */
let ClickDirective = class ClickDirective {
    constructor(el, zone) {
        this.el = el;
        this.zone = zone;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    get element() {
        return this.el.nativeElement;
    }
    ngOnInit() {
        let clicked = false;
        let identifier = null;
        let x = null;
        let y = null;
        this.zone.runOutsideAngular(() => {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this.element, 'touchstart').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$)).subscribe(event => {
                if (event.touches.length !== 1) {
                    return;
                }
                const touch = event.changedTouches[0];
                clicked = true;
                identifier = touch.identifier;
                x = touch.clientX;
                y = touch.clientY;
                setTimeout(() => {
                    clicked = false;
                    identifier = x = y = null;
                }, 300);
            });
            Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this.element, 'touchend').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$)).subscribe(event => {
                if (clicked && event.changedTouches.length === 1 && event.changedTouches[0].identifier === identifier) {
                    const touch = event.changedTouches[0];
                    const distance = Math.abs(Math.sqrt(Math.pow(x - touch.clientX, 2) +
                        Math.pow(y - touch.clientY, 2)));
                    if (distance < 15) {
                        event.preventDefault();
                        this.element.click();
                    }
                }
                clicked = false;
                identifier = x = y = null;
            });
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
};
ClickDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
ClickDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appClick]'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
], ClickDirective);



/***/ }),

/***/ "./src/app/shared/directives/collapse.directive.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/directives/collapse.directive.ts ***!
  \*********************************************************/
/*! exports provided: CollapseContentDirective, CollapseItemDirective, CollapseDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollapseContentDirective", function() { return CollapseContentDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollapseItemDirective", function() { return CollapseItemDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollapseDirective", function() { return CollapseDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let CollapseContentDirective = class CollapseContentDirective {
    constructor(el, zone) {
        this.el = el;
        this.zone = zone;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    get element() {
        return this.el.nativeElement;
    }
    ngOnInit() {
        this.zone.runOutsideAngular(() => {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this.element, 'transitionend').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$)).subscribe(event => {
                if (event.propertyName === 'height') {
                    this.element.style.height = '';
                }
            });
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
};
CollapseContentDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
CollapseContentDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appCollapseContent]'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
], CollapseContentDirective);

let CollapseItemDirective = class CollapseItemDirective {
    constructor(el) {
        this.el = el;
    }
    get class() {
        return this.appCollapseItem;
    }
    get isOpen() {
        return this.element.classList.contains(this.class);
    }
    get element() {
        return this.el.nativeElement;
    }
    toggle() {
        if (this.isOpen) {
            this.close();
        }
        else {
            this.open();
        }
    }
    open() {
        if (this.content) {
            const startHeight = this.content.element.getBoundingClientRect().height;
            this.element.classList.add(this.class);
            const endHeight = this.content.element.getBoundingClientRect().height;
            this.content.element.style.height = `${startHeight}px`;
            this.element.getBoundingClientRect(); // force reflow
            this.content.element.style.height = `${endHeight}px`;
        }
        else {
            this.element.classList.add(this.class);
        }
    }
    close() {
        if (this.content) {
            const startHeight = this.content.element.getBoundingClientRect().height;
            this.content.element.style.height = `${startHeight}px`;
            this.element.classList.remove(this.class);
            this.element.getBoundingClientRect(); // force reflow
            this.content.element.style.height = '';
        }
        else {
            this.element.classList.remove(this.class);
        }
    }
};
CollapseItemDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], CollapseItemDirective.prototype, "appCollapseItem", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(CollapseContentDirective, { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", CollapseContentDirective)
], CollapseItemDirective.prototype, "content", void 0);
CollapseItemDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appCollapseItem]',
        exportAs: 'appCollapseItem'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], CollapseItemDirective);

let CollapseDirective = class CollapseDirective {
};
CollapseDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appCollapse]'
    })
], CollapseDirective);



/***/ }),

/***/ "./src/app/shared/directives/departments-area.directive.ts":
/*!*****************************************************************!*\
  !*** ./src/app/shared/directives/departments-area.directive.ts ***!
  \*****************************************************************/
/*! exports provided: DepartmentsAreaDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentsAreaDirective", function() { return DepartmentsAreaDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_departments_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/departments.service */ "./src/app/shared/services/departments.service.ts");



let DepartmentsAreaDirective = class DepartmentsAreaDirective {
    constructor(el, service) {
        this.el = el;
        this.service = service;
    }
    get element() {
        return this.el.nativeElement;
    }
    ngOnInit() {
        this.service.setAreaElement(this.element);
    }
    ngOnDestroy() {
        this.service.setAreaElement(null);
    }
};
DepartmentsAreaDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _services_departments_service__WEBPACK_IMPORTED_MODULE_2__["DepartmentsService"] }
];
DepartmentsAreaDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appDepartmentsArea]'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
        _services_departments_service__WEBPACK_IMPORTED_MODULE_2__["DepartmentsService"]])
], DepartmentsAreaDirective);



/***/ }),

/***/ "./src/app/shared/directives/dropdown.directive.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/directives/dropdown.directive.ts ***!
  \*********************************************************/
/*! exports provided: DropdownDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownDirective", function() { return DropdownDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let DropdownDirective = class DropdownDirective {
    constructor(platformId, el, zone) {
        this.platformId = platformId;
        this.el = el;
        this.zone = zone;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.appDropdown = '';
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["isPlatformBrowser"])(this.platformId)) {
            this.zone.runOutsideAngular(() => {
                Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(document, 'mousedown').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroy$)).subscribe((event) => {
                    if (!el.nativeElement.contains(event.target)) {
                        this.close();
                    }
                });
            });
        }
    }
    get isOpen() {
        return this.element.classList.contains(this.appDropdown);
    }
    get element() {
        return this.el.nativeElement;
    }
    toggle(force) {
        this.element.classList.toggle(this.appDropdown, force);
    }
    close() {
        this.toggle(false);
    }
    open() {
        this.toggle(true);
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
};
DropdownDirective.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"],] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], DropdownDirective.prototype, "appDropdown", void 0);
DropdownDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appDropdown]',
        exportAs: 'appDropdown'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
], DropdownDirective);



/***/ }),

/***/ "./src/app/shared/directives/fake-slides.directive.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/directives/fake-slides.directive.ts ***!
  \************************************************************/
/*! exports provided: FakeSlidesDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FakeSlidesDirective", function() { return FakeSlidesDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");



let FakeSlidesDirective = class FakeSlidesDirective {
    constructor(eventManager, el) {
        this.eventManager = eventManager;
        this.el = el;
        this.appFakeSlides = 0;
        this.slides = [];
        this.slidesCount = 0;
    }
    ngOnInit() {
        this.resizeHandler = this.eventManager.addGlobalEventListener('window', 'resize', () => this.calc());
        this.calc();
    }
    calc() {
        let newFakeSlidesCount = 0;
        if (this.options) {
            let match = -1;
            const viewport = this.el.nativeElement.querySelector('.owl-carousel').clientWidth;
            const overwrites = this.options.responsive;
            if (overwrites) {
                for (const key in overwrites) {
                    if (overwrites.hasOwnProperty(key)) {
                        if (+key <= viewport && +key > match) {
                            match = Number(key);
                        }
                    }
                }
            }
            if (match >= 0) {
                const items = overwrites[match].items;
                newFakeSlidesCount = Math.max(0, items - this.appFakeSlides);
            }
            else if (this.options.items) {
                newFakeSlidesCount = Math.max(0, this.options.items - this.appFakeSlides);
            }
        }
        if (this.slidesCount !== newFakeSlidesCount) {
            this.slides = [];
            this.slidesCount = newFakeSlidesCount;
            for (let i = 0; i < newFakeSlidesCount; i++) {
                this.slides.push(i);
            }
        }
    }
    ngOnChanges(changes) {
        this.calc();
    }
    ngOnDestroy() {
        if (this.resizeHandler) {
            this.resizeHandler();
        }
    }
};
FakeSlidesDirective.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["EventManager"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], FakeSlidesDirective.prototype, "options", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], FakeSlidesDirective.prototype, "appFakeSlides", void 0);
FakeSlidesDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appFakeSlides]',
        exportAs: 'appFakeSlides'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["EventManager"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], FakeSlidesDirective);



/***/ }),

/***/ "./src/app/shared/directives/owl-prevent-click.directive.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/directives/owl-prevent-click.directive.ts ***!
  \******************************************************************/
/*! exports provided: OwlPreventClickDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwlPreventClickDirective", function() { return OwlPreventClickDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





/**
 * This directive adds the "owl-prevent-click" class to the .owl-carousel element when dragging.
 * When the class "owl-prevent-click" is applied to an element, a pseudo-element is created and
 * a mouseup event occurs on it, which prevents clicking.
 */
let OwlPreventClickDirective = class OwlPreventClickDirective {
    constructor(platformId, elementRef, zone) {
        this.platformId = platformId;
        this.elementRef = elementRef;
        this.zone = zone;
    }
    get element() {
        return this.elementRef.nativeElement;
    }
    ngOnInit() {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(this.platformId)) {
            this.zone.runOutsideAngular(() => {
                const children = [].slice.call(this.element.children);
                const owlCarouseElement = children.find(element => element.classList.contains('owl-carousel'));
                Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(owlCarouseElement, 'mousedown').subscribe(mouseDownEvent => {
                    const timeout = setTimeout(() => {
                        owlCarouseElement.classList.add('owl-prevent-click');
                    }, 250);
                    const mouseUpEvent$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(document, 'mouseup').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
                    Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(document, 'mousemove').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(mouseUpEvent$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(mouseMoveEvent => Math.abs(Math.sqrt(Math.pow(mouseDownEvent.clientX - mouseMoveEvent.clientX, 2) +
                        Math.pow(mouseDownEvent.clientY - mouseMoveEvent.clientY, 2)))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(distance => distance > 15), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)).subscribe(() => {
                        owlCarouseElement.classList.add('owl-prevent-click');
                    });
                    mouseUpEvent$.subscribe(() => {
                        owlCarouseElement.classList.remove('owl-prevent-click');
                        clearTimeout(timeout);
                    });
                });
            });
        }
    }
};
OwlPreventClickDirective.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"],] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
OwlPreventClickDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appOwlPreventClick]'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
], OwlPreventClickDirective);



/***/ }),

/***/ "./src/app/shared/helpers/color.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/helpers/color.ts ***!
  \*****************************************/
/*! exports provided: hexToRgb, luminance, contrast, colorType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hexToRgb", function() { return hexToRgb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "luminance", function() { return luminance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contrast", function() { return contrast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorType", function() { return colorType; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/**
 * https://medium.muz.li/the-science-of-color-contrast-an-expert-designers-guide-33e84c41d156
 * https://www.w3.org/TR/WCAG20-TECHS/G17.html
 * https://www.w3.org/TR/WCAG20/#relativeluminancedef
 */

function hexToRgb(hex) {
    if (!/^#(([A-Fa-f0-9]{3}){1,2})$/.test(hex)) {
        return null;
    }
    hex = hex.substr(1);
    let rgb;
    if (hex.length === 3) {
        rgb = hex.match(/./g).map(x => x + x);
    }
    else {
        rgb = hex.match(/.{2}/g);
    }
    return rgb.map(x => parseInt(x, 16));
}
function luminance(color) {
    let rgb = hexToRgb(color);
    if (!rgb) {
        return null;
    }
    rgb = rgb.map(x => x / 255).map(x => {
        if (x <= 0.03928) {
            return x / 12.92;
        }
        else {
            return Math.pow((x + 0.055) / 1.055, 2.4);
        }
    });
    return 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2];
}
function contrast(color1, color2) {
    const l1 = luminance(color1);
    const l2 = luminance(color2);
    if (l1 === null || l2 === null) {
        return null;
    }
    return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
}
const cache = {};
function colorType(color) {
    if (color in cache) {
        return cache[color];
    }
    const whiteContras = contrast(color, '#fff');
    const blackContras = contrast(color, '#000');
    let result;
    if (whiteContras === 1 && blackContras === 21) {
        result = 'white';
    }
    else if (whiteContras === 21 && blackContras === 1) {
        result = 'black';
    }
    else if (whiteContras >= 3 && blackContras < 10) {
        result = 'dark';
    }
    else {
        result = 'light';
    }
    return cache[color] = result;
}


/***/ }),

/***/ "./src/app/shared/pipes/color-type.pipe.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/pipes/color-type.pipe.ts ***!
  \*************************************************/
/*! exports provided: ColorTypePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorTypePipe", function() { return ColorTypePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _helpers_color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/color */ "./src/app/shared/helpers/color.ts");



let ColorTypePipe = class ColorTypePipe {
    transform(value) {
        return Object(_helpers_color__WEBPACK_IMPORTED_MODULE_2__["colorType"])(value);
    }
};
ColorTypePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'colorType'
    })
], ColorTypePipe);



/***/ }),

/***/ "./src/app/shared/pipes/currency-format.pipe.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/pipes/currency-format.pipe.ts ***!
  \******************************************************/
/*! exports provided: CurrencyFormatPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrencyFormatPipe", function() { return CurrencyFormatPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _services_currency_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/currency.service */ "./src/app/shared/services/currency.service.ts");




let CurrencyFormatPipe = class CurrencyFormatPipe {
    constructor(locale, service) {
        this.locale = locale;
        this.service = service;
        this.currencyPipe = new _angular_common__WEBPACK_IMPORTED_MODULE_2__["CurrencyPipe"](this.locale);
    }
    transform(value, currencyCode, display, digitsInfo, locale) {
        currencyCode = currencyCode || this.service.options.code;
        display = display || this.service.options.display;
        digitsInfo = digitsInfo || this.service.options.digitsInfo;
        locale = locale || this.service.options.locale;
        return this.currencyPipe.transform(value, currencyCode, display, digitsInfo, locale);
    }
};
CurrencyFormatPipe.ctorParameters = () => [
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"],] }] },
    { type: _services_currency_service__WEBPACK_IMPORTED_MODULE_3__["CurrencyService"] }
];
CurrencyFormatPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'currencyFormat',
        pure: false
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String, _services_currency_service__WEBPACK_IMPORTED_MODULE_3__["CurrencyService"]])
], CurrencyFormatPipe);



/***/ }),

/***/ "./src/app/shared/services/cart.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/cart.service.ts ***!
  \*************************************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");





let CartService = class CartService {
    constructor(platformId) {
        this.platformId = platformId;
        this.data = {
            items: [],
            quantity: 0,
            subtotal: 0,
            totals: [],
            total: 0
        };
        this.itemsSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.data.items);
        this.quantitySubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.data.quantity);
        this.subtotalSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.data.subtotal);
        this.totalsSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.data.totals);
        this.totalSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.data.total);
        this.onAddingSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.items$ = this.itemsSubject$.asObservable();
        this.quantity$ = this.quantitySubject$.asObservable();
        this.subtotal$ = this.subtotalSubject$.asObservable();
        this.totals$ = this.totalsSubject$.asObservable();
        this.total$ = this.totalSubject$.asObservable();
        this.onAdding$ = this.onAddingSubject$.asObservable();
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["isPlatformBrowser"])(this.platformId)) {
            this.load();
            this.calc();
        }
    }
    get items() {
        return this.data.items;
    }
    get quantity() {
        return this.data.quantity;
    }
    add(product, quantity, options = []) {
        // timer only for demo
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(() => {
            this.onAddingSubject$.next(product);
            let item = this.items.find(eachItem => {
                if (eachItem.product.id !== product.id || eachItem.options.length !== options.length) {
                    return false;
                }
                if (eachItem.options.length) {
                    for (const option of options) {
                        if (!eachItem.options.find(itemOption => itemOption.name === option.name && itemOption.value === option.value)) {
                            return false;
                        }
                    }
                }
                return true;
            });
            if (item) {
                item.quantity += quantity;
            }
            else {
                item = { product, quantity, options };
                this.data.items.push(item);
            }
            this.save();
            this.calc();
            return item;
        }));
    }
    update(updates) {
        // timer only for demo
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(() => {
            updates.forEach(update => {
                const item = this.items.find(eachItem => eachItem === update.item);
                if (item) {
                    item.quantity = update.quantity;
                }
            });
            this.save();
            this.calc();
        }));
    }
    remove(item) {
        // timer only for demo
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(() => {
            this.data.items = this.data.items.filter(eachItem => eachItem !== item);
            this.save();
            this.calc();
        }));
    }
    calc() {
        let quantity = 0;
        let subtotal = 0;
        this.data.items.forEach(item => {
            quantity += item.quantity;
            subtotal += item.product.price * item.quantity;
        });
        const totals = [];
        totals.push({
            title: 'Shipping',
            price: 25,
            type: 'shipping'
        });
        totals.push({
            title: 'Tax',
            price: subtotal * 0.20,
            type: 'tax'
        });
        const total = subtotal + totals.reduce((acc, eachTotal) => acc + eachTotal.price, 0);
        this.data.quantity = quantity;
        this.data.subtotal = subtotal;
        this.data.totals = totals;
        this.data.total = total;
        this.itemsSubject$.next(this.data.items);
        this.quantitySubject$.next(this.data.quantity);
        this.subtotalSubject$.next(this.data.subtotal);
        this.totalsSubject$.next(this.data.totals);
        this.totalSubject$.next(this.data.total);
        localStorage.setItem('cartTotal', JSON.stringify(this.data.total));
    }
    save() {
        localStorage.setItem('cartItems', JSON.stringify(this.data.items));
    }
    load() {
        const items = localStorage.getItem('cartItems');
        if (items) {
            this.data.items = JSON.parse(items);
        }
    }
};
CartService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"],] }] }
];
CartService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
], CartService);



/***/ }),

/***/ "./src/app/shared/services/compare.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/compare.service.ts ***!
  \****************************************************/
/*! exports provided: CompareService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompareService", function() { return CompareService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");





let CompareService = class CompareService {
    constructor(platformId) {
        this.platformId = platformId;
        this.data = {
            items: []
        };
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.itemsSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.onAddingSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.items$ = this.itemsSubject$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$));
        this.onAdding$ = this.onAddingSubject$.asObservable();
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["isPlatformBrowser"])(this.platformId)) {
            this.load();
        }
    }
    add(product) {
        // timer only for demo
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(() => {
            this.onAddingSubject$.next(product);
            const index = this.data.items.findIndex(item => item.id === product.id);
            if (index === -1) {
                this.data.items.push(product);
                this.save();
            }
        }));
    }
    remove(product) {
        // timer only for demo
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(() => {
            const index = this.data.items.findIndex(item => item.id === product.id);
            if (index !== -1) {
                this.data.items.splice(index, 1);
                this.save();
            }
        }));
    }
    save() {
        localStorage.setItem('compareItems', JSON.stringify(this.data.items));
        this.itemsSubject$.next(this.data.items);
    }
    load() {
        const items = localStorage.getItem('compareItems');
        if (items) {
            this.data.items = JSON.parse(items);
            this.itemsSubject$.next(this.data.items);
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
};
CompareService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"],] }] }
];
CompareService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
], CompareService);



/***/ }),

/***/ "./src/app/shared/services/currency.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/currency.service.ts ***!
  \*****************************************************/
/*! exports provided: CurrencyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrencyService", function() { return CurrencyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let CurrencyService = class CurrencyService {
    constructor() {
        this.data = {
            options: {}
        };
        this.changesSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.changes$ = this.changesSubject$.asObservable();
    }
    get options() {
        return this.data.options;
    }
    set options(value) {
        this.data.options = value;
        this.changesSubject$.next(value);
    }
};
CurrencyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CurrencyService);



/***/ }),

/***/ "./src/app/shared/services/departments.service.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/services/departments.service.ts ***!
  \********************************************************/
/*! exports provided: DepartmentsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentsService", function() { return DepartmentsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");





let DepartmentsService = class DepartmentsService {
    constructor(http) {
        this.http = http;
        this.areaElementSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        // APIURL = 'http://localhost:8765/api/webservice/';
        this.APIURL = 'http://jenix.in/api/webservice/';
        this.areaElement$ = this.areaElementSubject$.asObservable();
    }
    setAreaElement(value) {
        this.areaElementSubject$.next(value);
    }
    getNavigation() {
        return this.http.get(this.APIURL + 'getnavigation')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((response) => response.data));
    }
};
DepartmentsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
];
DepartmentsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
], DepartmentsService);



/***/ }),

/***/ "./src/app/shared/services/direction.service.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/services/direction.service.ts ***!
  \******************************************************/
/*! exports provided: DirectionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectionService", function() { return DirectionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");



let DirectionService = class DirectionService {
    constructor(platformId) {
        this.platformId = platformId;
        this.direction = 'ltr';
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(this.platformId)) {
            this.direction = getComputedStyle(document.body).direction;
        }
    }
    get value() {
        return this.direction;
    }
    set value(value) {
        this.direction = value;
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(this.platformId)) {
            document.dir = this.direction;
        }
    }
    isLTR() {
        return this.value === 'ltr';
    }
    isRTL() {
        return this.value === 'rtl';
    }
};
DirectionService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"],] }] }
];
DirectionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
], DirectionService);



/***/ }),

/***/ "./src/app/shared/services/mobile-menu.service.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/services/mobile-menu.service.ts ***!
  \********************************************************/
/*! exports provided: MobileMenuService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileMenuService", function() { return MobileMenuService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");




let MobileMenuService = class MobileMenuService {
    constructor(platformId) {
        this.platformId = platformId;
        this.openSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.isOpen$ = this.openSubject$.asObservable();
    }
    open() {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["isPlatformBrowser"])(this.platformId)) {
            const bodyWidth = document.body.offsetWidth;
            document.body.style.overflow = 'hidden';
            document.body.style.paddingRight = (document.body.offsetWidth - bodyWidth) + 'px';
            this.openSubject$.next(true);
        }
    }
    close() {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["isPlatformBrowser"])(this.platformId)) {
            document.body.style.overflow = 'auto';
            document.body.style.paddingRight = '';
            this.openSubject$.next(false);
        }
    }
    toggle() {
        this.openSubject$.next(!this.openSubject$.value);
    }
};
MobileMenuService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"],] }] }
];
MobileMenuService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
], MobileMenuService);



/***/ }),

/***/ "./src/app/shared/services/photo-swipe.service.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/services/photo-swipe.service.ts ***!
  \********************************************************/
/*! exports provided: PhotoSwipeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoSwipeService", function() { return PhotoSwipeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _resources_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resources.service */ "./src/app/shared/services/resources.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_internal_observable_from__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/internal/observable/from */ "./node_modules/rxjs/internal/observable/from.js");
/* harmony import */ var rxjs_internal_observable_from__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_observable_from__WEBPACK_IMPORTED_MODULE_4__);





const template = `
<div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="pswp__bg"></div>
    <div class="pswp__scroll-wrap">
        <div class="pswp__container">
            <div class="pswp__item"></div>
            <div class="pswp__item"></div>
            <div class="pswp__item"></div>
        </div>
        <div class="pswp__ui pswp__ui--hidden">
            <div class="pswp__top-bar">
                <div class="pswp__counter"></div>
                <button class="pswp__button pswp__button--close" title="Close (Esc)"></button>
                <!--<button class="pswp__button pswp__button&#45;&#45;share" title="Share"></button>-->
                <button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>
                <button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>
                <div class="pswp__preloader">
                    <div class="pswp__preloader__icn">
                      <div class="pswp__preloader__cut">
                        <div class="pswp__preloader__donut"></div>
                      </div>
                    </div>
                </div>
            </div>
            <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                <div class="pswp__share-tooltip"></div>
            </div>
            <button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button>
            <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)"></button>
            <div class="pswp__caption">
                <div class="pswp__caption__center"></div>
            </div>
        </div>
    </div>
</div>
`;
let PhotoSwipeService = class PhotoSwipeService {
    constructor(zone, resources) {
        this.zone = zone;
        this.resources = resources;
        this.initialized = false;
    }
    load() {
        return Object(rxjs_internal_observable_from__WEBPACK_IMPORTED_MODULE_4__["from"])(this.loadLibrary());
    }
    open(items, options) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](observer => {
            this.zone.runOutsideAngular(() => {
                this.loadLibrary().then(() => {
                    if (observer.closed) {
                        return;
                    }
                    if (!this.initialized) {
                        this.init();
                    }
                    this.createGallery(observer, items, options);
                });
            });
        });
    }
    ngOnDestroy() {
        if (this.initialized) {
            this.element.parentElement.removeChild(this.element);
        }
    }
    createGallery(observer, items, options) {
        let gallery = null;
        gallery = new PhotoSwipe(this.element, PhotoSwipeUI_Default, items, options);
        gallery.listen('destroy', () => this.zone.run(() => {
            gallery = null;
            this.zone.run(() => observer.complete());
        }));
        gallery.init();
        const modelRef = {
            close: () => gallery.close(),
            listen: (eventName, callbackFn) => gallery.listen(eventName, (...args) => {
                this.zone.run(() => callbackFn(...args));
            }),
            getCurrentIndex: () => gallery.getCurrentIndex()
        };
        observer.add(() => {
            if (gallery) {
                gallery.destroy();
            }
        });
        this.zone.run(() => observer.next(modelRef));
    }
    loadLibrary() {
        return this.resources.loadLibrary('photoSwipe');
    }
    init() {
        this.initialized = true;
        const div = document.createElement('div');
        div.innerHTML = template;
        this.element = div.firstElementChild;
        document.body.appendChild(this.element);
    }
};
PhotoSwipeService.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _resources_service__WEBPACK_IMPORTED_MODULE_2__["ResourcesService"] }
];
PhotoSwipeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
        _resources_service__WEBPACK_IMPORTED_MODULE_2__["ResourcesService"]])
], PhotoSwipeService);



/***/ }),

/***/ "./src/app/shared/services/quickview.service.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/services/quickview.service.ts ***!
  \******************************************************/
/*! exports provided: QuickviewService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuickviewService", function() { return QuickviewService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let QuickviewService = class QuickviewService {
    constructor() {
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.showSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.show$ = this.showSubject$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$));
    }
    show(product) {
        // timer only for demo
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(() => {
            this.showSubject$.next(product);
        }));
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
};
QuickviewService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], QuickviewService);



/***/ }),

/***/ "./src/app/shared/services/resources.service.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/services/resources.service.ts ***!
  \******************************************************/
/*! exports provided: ResourcesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourcesService", function() { return ResourcesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var ResourcesService_1;


let ResourcesService = ResourcesService_1 = class ResourcesService {
    constructor() {
        this.loaded = {};
        this.libraries = {
            photoSwipe: ResourcesService_1.parallel(this.styleTask('assets/vendor/photoswipe/photoswipe.css'), this.styleTask('assets/vendor/photoswipe/default-skin/default-skin.css'), this.scriptTask('assets/vendor/photoswipe/photoswipe.min.js'), this.scriptTask('assets/vendor/photoswipe/photoswipe-ui-default.min.js'))
        };
    }
    static series(...tasks) {
        if (!tasks.length) {
            return () => Promise.resolve();
        }
        return () => tasks.shift()().then(ResourcesService_1.series(...tasks));
    }
    static parallel(...tasks) {
        if (!tasks.length) {
            return () => Promise.resolve();
        }
        return () => Promise.all(tasks.map(task => task())).then(() => { });
    }
    loadScript(url) {
        return this.scriptTask(url)();
    }
    loadStyle(url) {
        return this.styleTask(url)();
    }
    loadLibrary(library) {
        return this.libraries[library]();
    }
    scriptTask(url) {
        return () => {
            if (!this.loaded.hasOwnProperty(url)) {
                this.loaded[url] = new Promise((resolve, reject) => {
                    const script = document.createElement('script');
                    script.onload = () => resolve();
                    script.onerror = () => reject(new Error('Loading error: ' + url));
                    script.src = url;
                    document.head.appendChild(script);
                });
            }
            return this.loaded[url];
        };
    }
    styleTask(url) {
        return () => {
            if (!this.loaded.hasOwnProperty(url)) {
                this.loaded[url] = new Promise((resolve, reject) => {
                    const link = document.createElement('link');
                    link.onload = () => resolve();
                    link.onerror = () => reject(new Error('Loading error: ' + url));
                    link.type = 'text/css';
                    link.rel = 'stylesheet';
                    link.href = url;
                    document.head.appendChild(link);
                });
            }
            return this.loaded[url];
        };
    }
};
ResourcesService = ResourcesService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ResourcesService);



/***/ }),

/***/ "./src/app/shared/services/root.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/root.service.ts ***!
  \*************************************************/
/*! exports provided: RootService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootService", function() { return RootService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RootService = class RootService {
    constructor() { }
    home() {
        return '/';
    }
    shop() {
        return `/shop/catalog`;
    }
    category(category) {
        if (category.type === 'shop') {
            const basePath = this.shop();
            if ('slug' in category) {
                return `${basePath}/${category.slug}`;
            }
            if ('id' in category) {
                return `${basePath}/${category.id}`;
            }
            throw Error('Provide category with "path", "slug" or "id".');
        }
        if (category.type === 'blog') {
            return this.blog();
        }
        throw Error('Provided category with unknown type.');
    }
    product(product) {
        const basePath = '/shop/products';
        if ('slug' in product) {
            return `${basePath}/${product.slug}`;
        }
        if ('id' in product) {
            return `${basePath}/${product.id}`;
        }
        throw Error('Provide product with "slug" or "id".');
    }
    brand(brand) {
        return '/';
    }
    cart() {
        return '/shop/cart';
    }
    checkout() {
        return '/shop/cart/checkout';
    }
    wishlist() {
        return '/shop/wishlist';
    }
    blog() {
        return '/blog';
    }
    post() {
        return `/blog/post-classic`;
    }
    login() {
        return '/account/login';
    }
    terms() {
        return '/site/terms';
    }
    notFound() {
        return `/site/not-found`;
    }
};
RootService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], RootService);



/***/ }),

/***/ "./src/app/shared/services/store.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/services/store.service.ts ***!
  \**************************************************/
/*! exports provided: StoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreService", function() { return StoreService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let StoreService = class StoreService {
    constructor() {
        this.address = '715 Fake Street, New York 10021 USA';
        this.email = 'stroyka@example.com';
        this.phone = ['(800) 060-0730', '(800) 060-0730'];
        this.hours = 'Mon-Sat 10:00pm - 7:00pm';
    }
    get primaryPhone() {
        return this.phone.length > 0 ? this.phone[0] : null;
    }
    get logo() {
        return 'http://phpdev.co.in/ajayco/img/uploads/logo.png';
    }
};
StoreService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], StoreService);



/***/ }),

/***/ "./src/app/shared/services/wishlist.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/wishlist.service.ts ***!
  \*****************************************************/
/*! exports provided: WishlistService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistService", function() { return WishlistService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");





let WishlistService = class WishlistService {
    constructor(platformId) {
        this.platformId = platformId;
        this.data = {
            items: []
        };
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.itemsSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.onAddingSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.items$ = this.itemsSubject$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$));
        this.count$ = this.itemsSubject$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(items => items.length));
        this.onAdding$ = this.onAddingSubject$.asObservable();
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["isPlatformBrowser"])(this.platformId)) {
            this.load();
        }
    }
    add(product) {
        // timer only for demo
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(() => {
            this.onAddingSubject$.next(product);
            const index = this.data.items.findIndex(item => item.id === product.id);
            if (index === -1) {
                this.data.items.push(product);
                this.save();
            }
        }));
    }
    remove(product) {
        // timer only for demo
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(() => {
            const index = this.data.items.findIndex(item => item.id === product.id);
            if (index !== -1) {
                this.data.items.splice(index, 1);
                this.save();
            }
        }));
    }
    save() {
        localStorage.setItem('wishlistItems', JSON.stringify(this.data.items));
        this.itemsSubject$.next(this.data.items);
    }
    load() {
        const items = localStorage.getItem('wishlistItems');
        if (items) {
            this.data.items = JSON.parse(items);
            this.itemsSubject$.next(this.data.items);
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
};
WishlistService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"],] }] }
];
WishlistService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
], WishlistService);



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-owl-carousel-o */ "./node_modules/ngx-owl-carousel-o/fesm2015/ngx-owl-carousel-o.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var _directives_click_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./directives/click.directive */ "./src/app/shared/directives/click.directive.ts");
/* harmony import */ var _directives_collapse_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./directives/collapse.directive */ "./src/app/shared/directives/collapse.directive.ts");
/* harmony import */ var _directives_departments_area_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./directives/departments-area.directive */ "./src/app/shared/directives/departments-area.directive.ts");
/* harmony import */ var _directives_dropdown_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./directives/dropdown.directive */ "./src/app/shared/directives/dropdown.directive.ts");
/* harmony import */ var _directives_fake_slides_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./directives/fake-slides.directive */ "./src/app/shared/directives/fake-slides.directive.ts");
/* harmony import */ var _directives_owl_prevent_click_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./directives/owl-prevent-click.directive */ "./src/app/shared/directives/owl-prevent-click.directive.ts");
/* harmony import */ var _components_alert_alert_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/alert/alert.component */ "./src/app/shared/components/alert/alert.component.ts");
/* harmony import */ var _components_icon_icon_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/icon/icon.component */ "./src/app/shared/components/icon/icon.component.ts");
/* harmony import */ var _components_input_number_input_number_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/input-number/input-number.component */ "./src/app/shared/components/input-number/input-number.component.ts");
/* harmony import */ var _components_loading_bar_loading_bar_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/loading-bar/loading-bar.component */ "./src/app/shared/components/loading-bar/loading-bar.component.ts");
/* harmony import */ var _components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/page-header/page-header.component */ "./src/app/shared/components/page-header/page-header.component.ts");
/* harmony import */ var _components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/pagination/pagination.component */ "./src/app/shared/components/pagination/pagination.component.ts");
/* harmony import */ var _components_post_card_post_card_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/post-card/post-card.component */ "./src/app/shared/components/post-card/post-card.component.ts");
/* harmony import */ var _components_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/product-card/product-card.component */ "./src/app/shared/components/product-card/product-card.component.ts");
/* harmony import */ var _components_product_product_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/product/product.component */ "./src/app/shared/components/product/product.component.ts");
/* harmony import */ var _components_quickview_quickview_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/quickview/quickview.component */ "./src/app/shared/components/quickview/quickview.component.ts");
/* harmony import */ var _components_rating_rating_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/rating/rating.component */ "./src/app/shared/components/rating/rating.component.ts");
/* harmony import */ var _pipes_color_type_pipe__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pipes/color-type.pipe */ "./src/app/shared/pipes/color-type.pipe.ts");
/* harmony import */ var _pipes_currency_format_pipe__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pipes/currency-format.pipe */ "./src/app/shared/pipes/currency-format.pipe.ts");


// modules (angular)




// modules (third-party)


// directives






// components











// pipes


let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            // directives
            _directives_click_directive__WEBPACK_IMPORTED_MODULE_8__["ClickDirective"],
            _directives_collapse_directive__WEBPACK_IMPORTED_MODULE_9__["CollapseContentDirective"],
            _directives_collapse_directive__WEBPACK_IMPORTED_MODULE_9__["CollapseDirective"],
            _directives_collapse_directive__WEBPACK_IMPORTED_MODULE_9__["CollapseItemDirective"],
            _directives_departments_area_directive__WEBPACK_IMPORTED_MODULE_10__["DepartmentsAreaDirective"],
            _directives_dropdown_directive__WEBPACK_IMPORTED_MODULE_11__["DropdownDirective"],
            _directives_fake_slides_directive__WEBPACK_IMPORTED_MODULE_12__["FakeSlidesDirective"],
            _directives_owl_prevent_click_directive__WEBPACK_IMPORTED_MODULE_13__["OwlPreventClickDirective"],
            // components
            _components_alert_alert_component__WEBPACK_IMPORTED_MODULE_14__["AlertComponent"],
            _components_icon_icon_component__WEBPACK_IMPORTED_MODULE_15__["IconComponent"],
            _components_input_number_input_number_component__WEBPACK_IMPORTED_MODULE_16__["InputNumberComponent"],
            _components_loading_bar_loading_bar_component__WEBPACK_IMPORTED_MODULE_17__["LoadingBarComponent"],
            _components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_18__["PageHeaderComponent"],
            _components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_19__["PaginationComponent"],
            _components_post_card_post_card_component__WEBPACK_IMPORTED_MODULE_20__["PostCardComponent"],
            _components_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_21__["ProductCardComponent"],
            _components_product_product_component__WEBPACK_IMPORTED_MODULE_22__["ProductComponent"],
            _components_quickview_quickview_component__WEBPACK_IMPORTED_MODULE_23__["QuickviewComponent"],
            _components_rating_rating_component__WEBPACK_IMPORTED_MODULE_24__["RatingComponent"],
            // pipes
            _pipes_currency_format_pipe__WEBPACK_IMPORTED_MODULE_26__["CurrencyFormatPipe"],
            _pipes_color_type_pipe__WEBPACK_IMPORTED_MODULE_25__["ColorTypePipe"]
        ],
        imports: [
            // modules (angular)
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
            // modules (third-party)
            ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_6__["CarouselModule"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["ModalModule"].forRoot()
        ],
        exports: [
            // directives
            _directives_click_directive__WEBPACK_IMPORTED_MODULE_8__["ClickDirective"],
            _directives_collapse_directive__WEBPACK_IMPORTED_MODULE_9__["CollapseContentDirective"],
            _directives_collapse_directive__WEBPACK_IMPORTED_MODULE_9__["CollapseDirective"],
            _directives_collapse_directive__WEBPACK_IMPORTED_MODULE_9__["CollapseItemDirective"],
            _directives_departments_area_directive__WEBPACK_IMPORTED_MODULE_10__["DepartmentsAreaDirective"],
            _directives_dropdown_directive__WEBPACK_IMPORTED_MODULE_11__["DropdownDirective"],
            _directives_fake_slides_directive__WEBPACK_IMPORTED_MODULE_12__["FakeSlidesDirective"],
            _directives_owl_prevent_click_directive__WEBPACK_IMPORTED_MODULE_13__["OwlPreventClickDirective"],
            // components
            _components_alert_alert_component__WEBPACK_IMPORTED_MODULE_14__["AlertComponent"],
            _components_icon_icon_component__WEBPACK_IMPORTED_MODULE_15__["IconComponent"],
            _components_input_number_input_number_component__WEBPACK_IMPORTED_MODULE_16__["InputNumberComponent"],
            _components_loading_bar_loading_bar_component__WEBPACK_IMPORTED_MODULE_17__["LoadingBarComponent"],
            _components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_18__["PageHeaderComponent"],
            _components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_19__["PaginationComponent"],
            _components_post_card_post_card_component__WEBPACK_IMPORTED_MODULE_20__["PostCardComponent"],
            _components_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_21__["ProductCardComponent"],
            _components_product_product_component__WEBPACK_IMPORTED_MODULE_22__["ProductComponent"],
            _components_quickview_quickview_component__WEBPACK_IMPORTED_MODULE_23__["QuickviewComponent"],
            _components_rating_rating_component__WEBPACK_IMPORTED_MODULE_24__["RatingComponent"],
            // pipes
            _pipes_color_type_pipe__WEBPACK_IMPORTED_MODULE_25__["ColorTypePipe"],
            _pipes_currency_format_pipe__WEBPACK_IMPORTED_MODULE_26__["CurrencyFormatPipe"]
        ]
    })
], SharedModule);



/***/ }),

/***/ "./src/data/blog-posts.ts":
/*!********************************!*\
  !*** ./src/data/blog-posts.ts ***!
  \********************************/
/*! exports provided: posts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "posts", function() { return posts; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const posts = [
    {
        title: 'Philosophy That Addresses Topics Such As Goodness',
        image: 'assets/images/posts/post-1.jpg',
        categories: ['Special Offers'],
        date: 'October 19, 2019'
    },
    {
        title: 'Logic Is The Study Of Reasoning And Argument Part 2',
        image: 'assets/images/posts/post-2.jpg',
        categories: ['Latest News'],
        date: 'September 5, 2019'
    },
    {
        title: 'Some Philosophers Specialize In One Or More Historical Periods',
        image: 'assets/images/posts/post-3.jpg',
        categories: ['New Arrivals'],
        date: 'August 12, 2019'
    },
    {
        title: 'A Variety Of Other Academic And Non-Academic Approaches Have Been Explored',
        image: 'assets/images/posts/post-4.jpg',
        categories: ['Special Offers'],
        date: 'Jule 30, 2019'
    },
    {
        title: 'Germany Was The First Country To Professionalize Philosophy',
        image: 'assets/images/posts/post-5.jpg',
        categories: ['New Arrivals'],
        date: 'June 12, 2019'
    },
    {
        title: 'Logic Is The Study Of Reasoning And Argument Part 1',
        image: 'assets/images/posts/post-6.jpg',
        categories: ['Special Offers'],
        date: 'May 21, 2019'
    },
    {
        title: 'Many Inquiries Outside Of Academia Are Philosophical In The Broad Sense',
        image: 'assets/images/posts/post-7.jpg',
        categories: ['Special Offers'],
        date: 'April 3, 2019'
    },
    {
        title: 'An Advantage Of Digital Circuits When Compared To Analog Circuits',
        image: 'assets/images/posts/post-8.jpg',
        categories: ['Latest News'],
        date: 'Mart 29, 2019'
    },
    {
        title: 'A Digital Circuit Is Typically Constructed From Small Electronic Circuits',
        image: 'assets/images/posts/post-9.jpg',
        categories: ['New Arrivals'],
        date: 'February 10, 2019'
    },
    {
        title: 'Engineers Use Many Methods To Minimize Logic Functions',
        image: 'assets/images/posts/post-10.jpg',
        categories: ['Special Offers'],
        date: 'January 1, 2019'
    }
];


/***/ }),

/***/ "./src/data/header-navigation.ts":
/*!***************************************!*\
  !*** ./src/data/header-navigation.ts ***!
  \***************************************/
/*! exports provided: navigation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navigation", function() { return navigation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

let flag = false;
let enabled = true;
if (localStorage.hasOwnProperty('USERINFO')) {
    flag = true;
}
const navigation = [
    { label: 'Home', url: '/', menu: {
            type: 'menu',
            items: [
                { label: 'Home', url: '/', enabled: enabled },
            ]
        } },
    // {label: 'Megamenu', url: '/shop/catalog', menu: {
    //     type: 'megamenu',
    //     size: 'nl',
    //     columns: [
    //         {size: 6, items: [
    //             {label: 'Power Tools', url: '/shop/catalog', items: [
    //                 {label: 'Engravers', url: '/shop/catalog'},
    //                 {label: 'Wrenches', url: '/shop/catalog'},
    //                 {label: 'Wall Chaser', url: '/shop/catalog'},
    //                 {label: 'Pneumatic Tools', url: '/shop/catalog'}
    //             ]},
    //             {label: 'Machine Tools', url: '/shop/catalog', items: [
    //                 {label: 'Thread Cutting', url: '/shop/catalog'},
    //                 {label: 'Chip Blowers', url: '/shop/catalog'},
    //                 {label: 'Sharpening Machines', url: '/shop/catalog'},
    //                 {label: 'Pipe Cutters', url: '/shop/catalog'},
    //                 {label: 'Slotting machines', url: '/shop/catalog'},
    //                 {label: 'Lathes', url: '/shop/catalog'}
    //             ]}
    //         ]},
    //         {size: 6, items: [
    //             {label: 'Hand Tools', url: '/shop/catalog', items: [
    //                 {label: 'Screwdrivers', url: '/shop/catalog'},
    //                 {label: 'Handsaws', url: '/shop/catalog'},
    //                 {label: 'Knives', url: '/shop/catalog'},
    //                 {label: 'Axes', url: '/shop/catalog'},
    //                 {label: 'Multitools', url: '/shop/catalog'},
    //                 {label: 'Paint Tools', url: '/shop/catalog'}
    //             ]},
    //             {label: 'Garden Equipment', url: '/shop/catalog', items: [
    //                 {label: 'Motor Pumps', url: '/shop/catalog'},
    //                 {label: 'Chainsaws', url: '/shop/catalog'},
    //                 {label: 'Electric Saws', url: '/shop/catalog'},
    //                 {label: 'Brush Cutters', url: '/shop/catalog'}
    //             ]}
    //         ]}
    //     ]
    // }},
    // {label: 'Megamenu', url: '/shop/catalog', menu: {
    //     type: 'megamenu',
    //     size: 'nl',
    //     columns: [
    //         {size: 6, items: [
    //             {label: 'Power Tools', url: '/shop/catalog', items: [
    //                 {label: 'Engravers', url: '/shop/catalog'},
    //                 {label: 'Wrenches', url: '/shop/catalog'},
    //                 {label: 'Wall Chaser', url: '/shop/catalog'},
    //                 {label: 'Pneumatic Tools', url: '/shop/catalog'}
    //             ]},
    //             {label: 'Machine Tools', url: '/shop/catalog', items: [
    //                 {label: 'Thread Cutting', url: '/shop/catalog'},
    //                 {label: 'Chip Blowers', url: '/shop/catalog'},
    //                 {label: 'Sharpening Machines', url: '/shop/catalog'},
    //                 {label: 'Pipe Cutters', url: '/shop/catalog'},
    //                 {label: 'Slotting machines', url: '/shop/catalog'},
    //                 {label: 'Lathes', url: '/shop/catalog'}
    //             ]}
    //         ]},
    //         {size: 6, items: [
    //             {label: 'Hand Tools', url: '/shop/catalog', items: [
    //                 {label: 'Screwdrivers', url: '/shop/catalog'},
    //                 {label: 'Handsaws', url: '/shop/catalog'},
    //                 {label: 'Knives', url: '/shop/catalog'},
    //                 {label: 'Axes', url: '/shop/catalog'},
    //                 {label: 'Multitools', url: '/shop/catalog'},
    //                 {label: 'Paint Tools', url: '/shop/catalog'}
    //             ]},
    //             {label: 'Garden Equipment', url: '/shop/catalog', items: [
    //                 {label: 'Motor Pumps', url: '/shop/catalog'},
    //                 {label: 'Chainsaws', url: '/shop/catalog'},
    //                 {label: 'Electric Saws', url: '/shop/catalog'},
    //                 {label: 'Brush Cutters', url: '/shop/catalog'}
    //             ]}
    //         ]}
    //     ]
    // }},
    { label: 'Shop', url: '/shop/catalog/power-tools', menu: {
            type: 'menu',
            items: [
                // {label: 'Shop Grid', url: '/shop/catalog/power-tools', items: [
                //     {label: '3 Columns Sidebar', url: '/shop/catalog/power-tools'},
                //     {label: '4 Columns Full',    url: '/shop/category-grid-4-columns-full'},
                //     {label: '5 Columns Full',    url: '/shop/category-grid-5-columns-full'}
                // ]},
                // {label: 'Shop List', url: '/shop/category-list'},
                // {label: 'Shop Right Sidebar', url: '/shop/category-right-sidebar'},
                // {label: 'Product', url: '/shop/product-standard', items: [
                //     {label: 'Product', url: '/shop/product-standard'},
                //     {label: 'Product Alt', url: '/shop/product-columnar'},
                //     {label: 'Product Sidebar', url: '/shop/product-sidebar'}
                // ]},
                { label: 'Cart', url: '/shop/cart', enabled: enabled },
                { label: 'Checkout', url: '/shop/cart/checkout', enabled: enabled },
                { label: 'Wishlist', url: '/shop/wishlist', enabled: enabled },
                // {label: 'Compare', url: '/shop/compare'},
                { label: 'Track Order', url: '/shop/track-order', enabled: enabled },
            ]
        } },
    { label: 'Account', url: '/account', menu: {
            type: 'menu',
            items: [
                { label: 'Dashboard', url: '/account/dashboard', enabled: enabled },
                { label: 'Edit Profile', url: '/account/profile', enabled: enabled },
                { label: 'Order History', url: '/account/orders', enabled: enabled },
                { label: 'Address Book', url: '/account/addresses', enabled: enabled },
                { label: 'Change Password', url: '/account/password', enabled: enabled },
                { label: 'Logout', url: '/account/logout', enabled: enabled }
            ]
        } },
    // {label: 'Blog', url: '/blog', menu: {
    //     type: 'menu',
    //     items: [
    //         {label: 'Blog Classic',         url: '/blog/category-classic'},
    //         {label: 'Blog Grid',            url: '/blog/category-grid'},
    //         {label: 'Blog List',            url: '/blog/category-list'},
    //         {label: 'Blog Left Sidebar',    url: '/blog/category-left-sidebar'},
    //         {label: 'Post Page',            url: '/blog/post-classic'},
    //         {label: 'Post Without Sidebar', url: '/blog/post-full'}
    //     ]
    // }},
    { label: 'Pages', url: '/site', menu: {
            type: 'menu',
            items: [
                { label: 'About Us', url: '/site/about-us', enabled: enabled },
                { label: 'Contact Us', url: '/site/contact-us', enabled: enabled },
                // {label: 'Contact Us Alt',       url: '/site/contact-us-alt'},
                // {label: '404',                  url: '/site/not-found'},
                { label: 'Terms And Conditions', url: '/site/terms', enabled: enabled },
            ]
        } },
];


/***/ }),

/***/ "./src/data/menu-navigation.ts":
/*!*************************************!*\
  !*** ./src/data/menu-navigation.ts ***!
  \*************************************/
/*! exports provided: manunavigation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "manunavigation", function() { return manunavigation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

let flag = false;
let enabled = true;
if (localStorage.hasOwnProperty('USERINFO')) {
    flag = true;
}
const manunavigation = [
    { label: 'Home', url: '/', menu: {
            type: 'menu',
            items: [
                { label: 'Home', url: '/', enabled: enabled },
            ]
        } },
    // {label: 'Megamenu', url: '/shop/catalog', menu: {
    //     type: 'megamenu',
    //     size: 'nl',
    //     columns: [
    //         {size: 6, items: [
    //             {label: 'Power Tools', url: '/shop/catalog', items: [
    //                 {label: 'Engravers', url: '/shop/catalog'},
    //                 {label: 'Wrenches', url: '/shop/catalog'},
    //                 {label: 'Wall Chaser', url: '/shop/catalog'},
    //                 {label: 'Pneumatic Tools', url: '/shop/catalog'}
    //             ]},
    //             {label: 'Machine Tools', url: '/shop/catalog', items: [
    //                 {label: 'Thread Cutting', url: '/shop/catalog'},
    //                 {label: 'Chip Blowers', url: '/shop/catalog'},
    //                 {label: 'Sharpening Machines', url: '/shop/catalog'},
    //                 {label: 'Pipe Cutters', url: '/shop/catalog'},
    //                 {label: 'Slotting machines', url: '/shop/catalog'},
    //                 {label: 'Lathes', url: '/shop/catalog'}
    //             ]}
    //         ]},
    //         {size: 6, items: [
    //             {label: 'Hand Tools', url: '/shop/catalog', items: [
    //                 {label: 'Screwdrivers', url: '/shop/catalog'},
    //                 {label: 'Handsaws', url: '/shop/catalog'},
    //                 {label: 'Knives', url: '/shop/catalog'},
    //                 {label: 'Axes', url: '/shop/catalog'},
    //                 {label: 'Multitools', url: '/shop/catalog'},
    //                 {label: 'Paint Tools', url: '/shop/catalog'}
    //             ]},
    //             {label: 'Garden Equipment', url: '/shop/catalog', items: [
    //                 {label: 'Motor Pumps', url: '/shop/catalog'},
    //                 {label: 'Chainsaws', url: '/shop/catalog'},
    //                 {label: 'Electric Saws', url: '/shop/catalog'},
    //                 {label: 'Brush Cutters', url: '/shop/catalog'}
    //             ]}
    //         ]}
    //     ]
    // }},
    // {label: 'Megamenu', url: '/shop/catalog', menu: {
    //     type: 'megamenu',
    //     size: 'nl',
    //     columns: [
    //         {size: 6, items: [
    //             {label: 'Power Tools', url: '/shop/catalog', items: [
    //                 {label: 'Engravers', url: '/shop/catalog'},
    //                 {label: 'Wrenches', url: '/shop/catalog'},
    //                 {label: 'Wall Chaser', url: '/shop/catalog'},
    //                 {label: 'Pneumatic Tools', url: '/shop/catalog'}
    //             ]},
    //             {label: 'Machine Tools', url: '/shop/catalog', items: [
    //                 {label: 'Thread Cutting', url: '/shop/catalog'},
    //                 {label: 'Chip Blowers', url: '/shop/catalog'},
    //                 {label: 'Sharpening Machines', url: '/shop/catalog'},
    //                 {label: 'Pipe Cutters', url: '/shop/catalog'},
    //                 {label: 'Slotting machines', url: '/shop/catalog'},
    //                 {label: 'Lathes', url: '/shop/catalog'}
    //             ]}
    //         ]},
    //         {size: 6, items: [
    //             {label: 'Hand Tools', url: '/shop/catalog', items: [
    //                 {label: 'Screwdrivers', url: '/shop/catalog'},
    //                 {label: 'Handsaws', url: '/shop/catalog'},
    //                 {label: 'Knives', url: '/shop/catalog'},
    //                 {label: 'Axes', url: '/shop/catalog'},
    //                 {label: 'Multitools', url: '/shop/catalog'},
    //                 {label: 'Paint Tools', url: '/shop/catalog'}
    //             ]},
    //             {label: 'Garden Equipment', url: '/shop/catalog', items: [
    //                 {label: 'Motor Pumps', url: '/shop/catalog'},
    //                 {label: 'Chainsaws', url: '/shop/catalog'},
    //                 {label: 'Electric Saws', url: '/shop/catalog'},
    //                 {label: 'Brush Cutters', url: '/shop/catalog'}
    //             ]}
    //         ]}
    //     ]
    // }},
    { label: 'Shop', url: '/shop/catalog/power-tools', menu: {
            type: 'menu',
            items: [
                // {label: 'Shop Grid', url: '/shop/catalog/power-tools', items: [
                //     {label: '3 Columns Sidebar', url: '/shop/catalog/power-tools'},
                //     {label: '4 Columns Full',    url: '/shop/category-grid-4-columns-full'},
                //     {label: '5 Columns Full',    url: '/shop/category-grid-5-columns-full'}
                // ]},
                // {label: 'Shop List', url: '/shop/category-list'},
                // {label: 'Shop Right Sidebar', url: '/shop/category-right-sidebar'},
                // {label: 'Product', url: '/shop/product-standard', items: [
                //     {label: 'Product', url: '/shop/product-standard'},
                //     {label: 'Product Alt', url: '/shop/product-columnar'},
                //     {label: 'Product Sidebar', url: '/shop/product-sidebar'}
                // ]},
                { label: 'Cart', url: '/shop/cart', enabled: enabled },
                { label: 'Checkout', url: '/shop/cart/checkout', enabled: enabled },
                { label: 'Wishlist', url: '/shop/wishlist', enabled: enabled },
                // {label: 'Compare', url: '/shop/compare'},
                { label: 'Track Order', url: '/shop/track-order', enabled: enabled },
            ]
        } },
    { label: 'Login', url: '/account/login' },
    // {label: 'Blog', url: '/blog', menu: {
    //     type: 'menu',
    //     items: [
    //         {label: 'Blog Classic',         url: '/blog/category-classic'},
    //         {label: 'Blog Grid',            url: '/blog/category-grid'},
    //         {label: 'Blog List',            url: '/blog/category-list'},
    //         {label: 'Blog Left Sidebar',    url: '/blog/category-left-sidebar'},
    //         {label: 'Post Page',            url: '/blog/post-classic'},
    //         {label: 'Post Without Sidebar', url: '/blog/post-full'}
    //     ]
    // }},
    { label: 'Pages', url: '/site', menu: {
            type: 'menu',
            items: [
                { label: 'About Us', url: '/site/about-us', enabled: enabled },
                { label: 'Contact Us', url: '/site/contact-us', enabled: enabled },
                // {label: 'Contact Us Alt',       url: '/site/contact-us-alt'},
                // {label: '404',                  url: '/site/not-found'},
                { label: 'Terms And Conditions', url: '/site/terms', enabled: enabled },
            ]
        } },
];


/***/ }),

/***/ "./src/data/mobile-menu.ts":
/*!*********************************!*\
  !*** ./src/data/mobile-menu.ts ***!
  \*********************************/
/*! exports provided: mobileMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mobileMenu", function() { return mobileMenu; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const mobileMenu = [
    { type: 'link', label: 'Home', url: '/', children: [
            { type: 'link', label: 'Home 1', url: '/' },
            { type: 'link', label: 'Home 2', url: '/home-two' }
        ] },
    { type: 'link', label: 'Categories', url: '/shop/catalog', children: [
            { type: 'link', label: 'Power Tools', url: '/shop/catalog', children: [
                    { type: 'link', label: 'Engravers', url: '/shop/catalog' },
                    { type: 'link', label: 'Wrenches', url: '/shop/catalog' },
                    { type: 'link', label: 'Wall Chaser', url: '/shop/catalog' },
                    { type: 'link', label: 'Pneumatic Tools', url: '/shop/catalog' }
                ] },
            { type: 'link', label: 'Machine Tools', url: '/shop/catalog', children: [
                    { type: 'link', label: 'Thread Cutting', url: '/shop/catalog' },
                    { type: 'link', label: 'Chip Blowers', url: '/shop/catalog' },
                    { type: 'link', label: 'Sharpening Machines', url: '/shop/catalog' },
                    { type: 'link', label: 'Pipe Cutters', url: '/shop/catalog' },
                    { type: 'link', label: 'Slotting machines', url: '/shop/catalog' },
                    { type: 'link', label: 'Lathes', url: '/shop/catalog' }
                ] }
        ] },
    { type: 'link', label: 'Shop', url: '/shop/catalog/power-tools', children: [
            { type: 'link', label: 'Shop Grid', url: '/shop/catalog/power-tools', children: [
                    { type: 'link', label: '3 Columns Sidebar', url: '/shop/catalog/power-tools' },
                    { type: 'link', label: '4 Columns Full', url: '/shop/category-grid-4-columns-full' },
                    { type: 'link', label: '5 Columns Full', url: '/shop/category-grid-5-columns-full' }
                ] },
            { type: 'link', label: 'Shop List', url: '/shop/category-list' },
            { type: 'link', label: 'Shop Right Sidebar', url: '/shop/category-right-sidebar' },
            { type: 'link', label: 'Product', url: '/shop/product-standard', children: [
                    { type: 'link', label: 'Product', url: '/shop/product-standard' },
                    { type: 'link', label: 'Product Alt', url: '/shop/product-columnar' },
                    { type: 'link', label: 'Product Sidebar', url: '/shop/product-sidebar' }
                ] },
            { type: 'link', label: 'Cart', url: '/shop/cart' },
            { type: 'link', label: 'Checkout', url: '/shop/cart/checkout' },
            { type: 'link', label: 'Wishlist', url: '/shop/wishlist' },
            { type: 'link', label: 'Compare', url: '/shop/compare' },
            { type: 'link', label: 'Track Order', url: '/shop/track-order' }
        ] },
    { type: 'link', label: 'Account', url: '/account', children: [
            { type: 'link', label: 'Login', url: '/account/login' },
            { type: 'link', label: 'Dashboard', url: '/account/dashboard' },
            { type: 'link', label: 'Edit Profile', url: '/account/profile' },
            { type: 'link', label: 'Order History', url: '/account/orders' },
            { type: 'link', label: 'Address Book', url: '/account/addresses' },
            { type: 'link', label: 'Change Password', url: '/account/password' }
        ] },
    { type: 'link', label: 'Blog', url: '/blog', children: [
            { type: 'link', label: 'Blog Classic', url: '/blog/category-classic' },
            { type: 'link', label: 'Blog Grid', url: '/blog/category-grid' },
            { type: 'link', label: 'Blog List', url: '/blog/category-list' },
            { type: 'link', label: 'Blog Left Sidebar', url: '/blog/category-left-sidebar' },
            { type: 'link', label: 'Post Page', url: '/blog/post-classic' },
            { type: 'link', label: 'Post Without Sidebar', url: '/blog/post-full' }
        ] },
    { type: 'link', label: 'Pages', url: '/site', children: [
            { type: 'link', label: 'About Us', url: '/site/about-us' },
            { type: 'link', label: 'Contact Us', url: '/site/contact-us' },
            { type: 'link', label: 'Contact Us Alt', url: '/site/contact-us-alt' },
            { type: 'link', label: '404', url: '/site/not-found' },
            { type: 'link', label: 'Terms And Conditions', url: '/site/terms' },
            { type: 'link', label: 'FAQ', url: '/site/faq' },
            { type: 'link', label: 'Components', url: '/site/components' },
            { type: 'link', label: 'Typography', url: '/site/typography' }
        ] },
    { type: 'button', label: 'Currency', children: [
            { type: 'button', label: '€ Euro', data: { currency: 'EUR' } },
            { type: 'button', label: '£ Pound Sterling', data: { currency: 'GBP' } },
            { type: 'button', label: '$ US Dollar', data: { currency: 'USD' } },
            { type: 'button', label: '₽ Russian Ruble', data: { currency: 'RUB' } }
        ] },
    { type: 'button', label: 'Language', children: [
            { type: 'button', label: 'English', data: { language: 'EN' } },
            { type: 'button', label: 'French', data: { language: 'FR' } },
            { type: 'button', label: 'German', data: { language: 'DE' } },
            { type: 'button', label: 'Russian', data: { language: 'RU' } },
            { type: 'button', label: 'Italian', data: { language: 'IT' } }
        ] }
];


/***/ }),

/***/ "./src/data/theme.ts":
/*!***************************!*\
  !*** ./src/data/theme.ts ***!
  \***************************/
/*! exports provided: theme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "theme", function() { return theme; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const theme = {
    name: 'Stroyka',
    author: {
        name: 'Kos',
        profile_url: 'https://themeforest.net/user/kos9'
    }
};


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/fake-server/database/brands.ts":
/*!********************************************!*\
  !*** ./src/fake-server/database/brands.ts ***!
  \********************************************/
/*! exports provided: brands, getBrands */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "brands", function() { return brands; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBrands", function() { return getBrands; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");


let lastBrandId = 0;
const brandsDef = [
    { name: 'Brandix', slug: 'brandix', image: 'assets/images/logos/logo-1.png' },
    { name: 'Wakita', slug: 'wakita', image: 'assets/images/logos/logo-2.png' },
    { name: 'Zosch', slug: 'zosch', image: 'assets/images/logos/logo-3.png' },
    { name: 'WeVALT', slug: 'wevalt', image: 'assets/images/logos/logo-4.png' },
    { name: 'Hammer', slug: 'hammer', image: 'assets/images/logos/logo-5.png' },
    { name: 'Mitasia', slug: 'mitasia', image: 'assets/images/logos/logo-6.png' },
    { name: 'Metaggo', slug: 'metaggo', image: 'assets/images/logos/logo-7.png' },
];
const brands = brandsDef.map(brandDef => {
    return Object.assign({}, brandDef, { id: ++lastBrandId });
});
function getBrands() {
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(brands);
}


/***/ }),

/***/ "./src/fake-server/database/categories.ts":
/*!************************************************!*\
  !*** ./src/fake-server/database/categories.ts ***!
  \************************************************/
/*! exports provided: shopCategoriesTree, shopCategoriesList, blogCategoriesTree, blogCategoriesList, getShopCategoriesTree, getBlogCategoriesTree, getShopCategoriesBySlugs, getShopCategory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shopCategoriesTree", function() { return shopCategoriesTree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shopCategoriesList", function() { return shopCategoriesList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blogCategoriesTree", function() { return blogCategoriesTree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blogCategoriesList", function() { return blogCategoriesList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getShopCategoriesTree", function() { return getShopCategoriesTree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBlogCategoriesTree", function() { return getBlogCategoriesTree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getShopCategoriesBySlugs", function() { return getShopCategoriesBySlugs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getShopCategory", function() { return getShopCategory; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let lastCategoryId = 0;
const shopCategoriesDef = [
    {
        name: 'Instruments',
        slug: 'instruments',
        items: 272,
        children: [
            {
                name: 'Power Tools',
                slug: 'power-tools',
                image: 'assets/images/categories/category-1.jpg',
                items: 370,
                children: [
                    {
                        name: 'Drills & Mixers',
                        slug: 'drills-mixers',
                        items: 57,
                    },
                    {
                        name: 'Cordless Screwdrivers',
                        slug: 'cordless-screwdrivers',
                        items: 15,
                    },
                    {
                        name: 'Screwdrivers',
                        slug: 'screwdrivers',
                        items: 126,
                    },
                    {
                        name: 'Wrenches',
                        slug: 'wrenches',
                        items: 12,
                    },
                    {
                        name: 'Grinding Machines',
                        slug: 'grinding-machines',
                        items: 25,
                    },
                    {
                        name: 'Milling Cutters',
                        slug: 'milling-cutters',
                        items: 78,
                    },
                    {
                        name: 'Electric Spray Guns',
                        slug: 'electric-spray-guns',
                        items: 3,
                    },
                ],
            },
            {
                name: 'Hand Tools',
                slug: 'hand-tools',
                image: 'assets/images/categories/category-2.jpg',
                items: 134,
                children: [
                    {
                        name: 'Tool Kits',
                        slug: 'tool-kits',
                        items: 57,
                    },
                    {
                        name: 'Hammers',
                        slug: 'hammers',
                        items: 15,
                    },
                    {
                        name: 'Spanners',
                        slug: 'spanners',
                        items: 5,
                    },
                    {
                        name: 'Handsaws',
                        slug: 'handsaws',
                        items: 54,
                    },
                    {
                        name: 'Paint Tools',
                        slug: 'paint-tools',
                        items: 13,
                    },
                ],
            },
            {
                name: 'Machine Tools',
                slug: 'machine-tools',
                image: 'assets/images/categories/category-3.jpg',
                items: 302,
                children: [
                    {
                        name: 'Lathes',
                        slug: 'lathes',
                        items: 104,
                    },
                    {
                        name: 'Milling Machines',
                        slug: 'milling-machines',
                        items: 12,
                    },
                    {
                        name: 'Grinding Machines',
                        slug: 'grinding-machines',
                        items: 67,
                    },
                    {
                        name: 'CNC Machines',
                        slug: 'cnc-machines',
                        items: 5,
                    },
                    {
                        name: 'Sharpening Machines',
                        slug: 'sharpening-machines',
                        items: 88,
                    },
                ],
            },
            {
                name: 'Power Machinery',
                slug: 'power-machinery',
                image: 'assets/images/categories/category-4.jpg',
                items: 79,
                children: [
                    {
                        name: 'Generators',
                        slug: 'generators',
                        items: 23,
                    },
                    {
                        name: 'Compressors',
                        slug: 'compressors',
                        items: 76,
                    },
                    {
                        name: 'Winches',
                        slug: 'winches',
                        items: 43,
                    },
                    {
                        name: 'Plasma Cutting',
                        slug: 'plasma-cutting',
                        items: 128,
                    },
                    {
                        name: 'Electric Motors',
                        slug: 'electric-motors',
                        items: 76,
                    },
                ],
            },
            {
                name: 'Measurement',
                slug: 'measurement',
                image: 'assets/images/categories/category-5.jpg',
                items: 366,
                children: [
                    {
                        name: 'Tape Measure',
                        slug: 'tape-measure',
                        items: 57,
                    },
                    {
                        name: 'Theodolites',
                        slug: 'theodolites',
                        items: 5,
                    },
                    {
                        name: 'Thermal Imagers',
                        slug: 'thermal-imagers',
                        items: 3,
                    },
                    {
                        name: 'Calipers',
                        slug: 'calipers',
                        items: 37,
                    },
                    {
                        name: 'Levels',
                        slug: 'levels',
                        items: 14,
                    },
                ],
            },
            {
                name: 'Clothes and PPE',
                slug: 'clothes-and-ppe',
                image: 'assets/images/categories/category-6.jpg',
                items: 82,
                children: [
                    {
                        name: 'Winter Workwear',
                        slug: 'winter-workwear',
                        items: 24,
                    },
                    {
                        name: 'Summer Workwear',
                        slug: 'summer-workwear',
                        items: 87,
                    },
                    {
                        name: 'Helmets',
                        slug: 'helmets',
                        items: 9,
                    },
                    {
                        name: 'Belts and Bags',
                        slug: 'belts-and-bags',
                        items: 1,
                    },
                    {
                        name: 'Work Shoes',
                        slug: 'work-shoes',
                        items: 0,
                    },
                ],
            },
        ],
    },
    {
        name: 'Electronics',
        slug: 'electronics',
        items: 54,
    },
    {
        name: 'Computers',
        slug: 'computers',
        items: 421,
    },
    {
        name: 'Automotive',
        slug: 'automotive',
        items: 182,
    },
    {
        name: 'Furniture & Appliances',
        slug: 'furniture-appliances',
        items: 15,
    },
    {
        name: 'Music & Books',
        slug: 'music-books',
        items: 89,
    },
    {
        name: 'Health & Beauty',
        slug: 'health-beauty',
        items: 201,
    },
];
const blogCategoriesDef = [
    {
        name: 'Latest News',
        slug: 'latest-news',
    },
    {
        name: 'Special Offers',
        slug: 'special-offers',
        children: [
            {
                name: 'Spring Sales',
                slug: 'spring-sales',
            },
            {
                name: 'Summer Sales',
                slug: 'summer-sales',
            },
            {
                name: 'Autumn Sales',
                slug: 'autumn-sales',
            },
            {
                name: 'Christmas Sales',
                slug: 'christmas-sales',
            },
            {
                name: 'Other Sales',
                slug: 'other-sales',
            }
        ],
    },
    {
        name: 'New Arrivals',
        slug: 'new-arrivals',
    },
    {
        name: 'Reviews',
        slug: 'reviews',
    },
    {
        name: 'Drills and Mixers',
        slug: 'drills-and-mixers',
    },
    {
        name: 'Cordless Screwdrivers',
        slug: 'cordless-screwdrivers',
    },
    {
        name: 'Screwdrivers',
        slug: 'screwdrivers',
    },
    {
        name: 'Wrenches',
        slug: 'wrenches',
    },
];
function walkTree(categoriesType, categoriesDef, parents = []) {
    let list = [];
    const tree = categoriesDef.map(categoryDef => {
        const category = {
            id: ++lastCategoryId,
            type: categoriesType,
            name: categoryDef.name,
            slug: categoryDef.slug,
            path: [...parents.map(x => x.slug), categoryDef.slug].join('/'),
            image: categoryDef.image || null,
            items: categoryDef.items || 0,
            customFields: {},
            parents: parents.slice(),
            children: [],
        };
        const [childrenTree, childrenList] = walkTree(categoriesType, categoryDef.children || [], [...parents, category]);
        category.children = childrenTree;
        list = [...list, category, ...childrenList];
        return category;
    });
    return [tree, list];
}
const [shopCategoriesTree, shopCategoriesList] = walkTree('shop', shopCategoriesDef);
const [blogCategoriesTree, blogCategoriesList] = walkTree('blog', blogCategoriesDef);
function limitDepth(categories, depth) {
    return categories.map(category => {
        return Object.assign({}, category, { parents: null, children: depth !== 0 ? limitDepth(category.children, depth - 1) : null });
    });
}
function getCategoriesTree(categoriesType, parentSlug = null, depth = 0) {
    let categories = [];
    const list = categoriesType === 'shop' ? shopCategoriesList : blogCategoriesList;
    const tree = categoriesType === 'shop' ? shopCategoriesTree : blogCategoriesTree;
    if (parentSlug === null) {
        categories = tree.slice();
    }
    else {
        const parent = list.find(x => x.slug === parentSlug);
        if (!parent) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"]({ status: 404, statusText: 'Page Not Found' }));
        }
        categories = parent.children.slice();
    }
    console.log('list of category');
    console.log(categories);
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(limitDepth(categories, depth));
}
function getShopCategoriesTree(parentSlug = null, depth = 0) {
    return getCategoriesTree('shop', parentSlug, depth);
}
function getBlogCategoriesTree(parentSlug = null, depth = 0) {
    return getCategoriesTree('blog', parentSlug, depth);
}
function getShopCategoriesBySlugs(slugs, depth = 0) {
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(limitDepth(shopCategoriesList.filter(x => slugs.includes(x.slug)), depth));
}
function getShopCategory(slug) {
    const category = shopCategoriesList.find(x => x.slug === slug);
    if (!category) {
        console.log(new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"]({ status: 404, statusText: 'Page Not Found' }));
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"]({ status: 404, statusText: 'Page Not Found' }));
    }
    console.log(JSON.parse(JSON.stringify(Object.assign({}, category, { parents: limitDepth(category.parents, 0), children: limitDepth(category.children, 0) }))));
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(JSON.parse(JSON.stringify(Object.assign({}, category, { parents: limitDepth(category.parents, 0), children: limitDepth(category.children, 0) }))));
}


/***/ }),

/***/ "./src/fake-server/database/products.ts":
/*!**********************************************!*\
  !*** ./src/fake-server/database/products.ts ***!
  \**********************************************/
/*! exports provided: attributesDef, products, getBestsellers, getTopRated, getSpecialOffers, getFeatured, getLatestProducts, getRelatedProducts, getProduct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attributesDef", function() { return attributesDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "products", function() { return products; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBestsellers", function() { return getBestsellers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTopRated", function() { return getTopRated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSpecialOffers", function() { return getSpecialOffers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFeatured", function() { return getFeatured; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLatestProducts", function() { return getLatestProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRelatedProducts", function() { return getRelatedProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProduct", function() { return getProduct; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _brands__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./brands */ "./src/fake-server/database/brands.ts");
/* harmony import */ var _categories__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./categories */ "./src/fake-server/database/categories.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let lastProductId = 0;
const attributesDef = [
    {
        name: 'Color',
        slug: 'color',
        values: [
            { name: 'White', slug: 'white' },
            { name: 'Silver', slug: 'silver' },
            { name: 'Light Gray', slug: 'light-gray' },
            { name: 'Gray', slug: 'gray' },
            { name: 'Dark Gray', slug: 'dark-gray' },
            { name: 'Coal', slug: 'coal' },
            { name: 'Black', slug: 'black' },
            { name: 'Red', slug: 'red' },
            { name: 'Orange', slug: 'orange' },
            { name: 'Yellow', slug: 'yellow' },
            { name: 'Pear Green', slug: 'pear-green' },
            { name: 'Green', slug: 'green' },
            { name: 'Emerald', slug: 'emerald' },
            { name: 'Shamrock', slug: 'shamrock' },
            { name: 'Shakespeare', slug: 'shakespeare' },
            { name: 'Blue', slug: 'blue' },
            { name: 'Dark Blue', slug: 'dark-blue' },
            { name: 'Violet', slug: 'violet' },
            { name: 'Purple', slug: 'purple' },
            { name: 'Cerise', slug: 'cerise' },
        ],
    },
    {
        name: 'Speed',
        slug: 'speed',
        values: [
            { name: '750 RPM', slug: '750-rpm' },
        ],
    },
    {
        name: 'Power Source',
        slug: 'power-source',
        values: [
            { name: 'Cordless-Electric', slug: 'cordless-electric' },
        ],
    },
    {
        name: 'Battery Cell Type',
        slug: 'battery-cell-type',
        values: [
            { name: 'Lithium', slug: 'lithium' },
        ],
    },
    {
        name: 'Voltage',
        slug: 'voltage',
        values: [
            { name: '20 Volts', slug: '20-volts' },
        ],
    },
    {
        name: 'Battery Capacity',
        slug: 'battery-capacity',
        values: [
            { name: '2 Ah', slug: '2-Ah' },
        ],
    },
];
const productsDef = [
    {
        slug: 'electric-planer-brandix-kl370090g-300-watts',
        name: 'Electric Planer Brandix KL370090G 300 Watts',
        price: 749,
        images: [
            'assets/images/products/product-1.jpg',
            'assets/images/products/product-1-1.jpg',
        ],
        badges: 'new',
        rating: 4,
        reviews: 12,
        availability: 'in-stock',
        brand: 'brandix',
        categories: ['screwdrivers'],
        attributes: [
            { slug: 'color', values: 'yellow' },
            { slug: 'speed', values: '750-rpm', featured: true },
            { slug: 'power-source', values: 'cordless-electric', featured: true },
            { slug: 'battery-cell-type', values: 'lithium', featured: true },
            { slug: 'voltage', values: '20-volts', featured: true },
            { slug: 'battery-capacity', values: '2-Ah', featured: true },
        ],
    },
    {
        slug: 'undefined-tool-iradix-dps3000sy-2700-watts',
        name: 'Undefined Tool IRadix DPS3000SY 2700 Watts',
        price: 1019,
        images: [
            'assets/images/products/product-2.jpg',
            'assets/images/products/product-2-1.jpg',
        ],
        badges: 'hot',
        rating: 5,
        reviews: 3,
        availability: 'in-stock',
        brand: 'zosch',
        categories: [],
        attributes: [
            { slug: 'color', values: ['silver', 'cerise'] },
            { slug: 'speed', values: '750-rpm', featured: true },
            { slug: 'power-source', values: 'cordless-electric', featured: true },
            { slug: 'battery-cell-type', values: 'lithium', featured: true },
            { slug: 'voltage', values: '20-volts', featured: true },
            { slug: 'battery-capacity', values: '2-Ah', featured: true },
        ],
    },
    {
        slug: 'drill-screwdriver-brandix-alx7054-200-watts',
        name: 'Drill Screwdriver Brandix ALX7054 200 Watts',
        price: 850,
        images: [
            'assets/images/products/product-3.jpg',
            'assets/images/products/product-3-1.jpg',
        ],
        rating: 4,
        reviews: 8,
        availability: 'in-stock',
        brand: 'brandix',
        categories: [],
        attributes: [
            { slug: 'color', values: 'yellow' },
            { slug: 'speed', values: '750-rpm', featured: true },
            { slug: 'power-source', values: 'cordless-electric', featured: true },
            { slug: 'battery-cell-type', values: 'lithium', featured: true },
            { slug: 'voltage', values: '20-volts', featured: true },
            { slug: 'battery-capacity', values: '2-Ah', featured: true },
        ],
    },
    {
        slug: 'drill-series-3-brandix-ksr4590pqs-1500-watts',
        name: 'Drill Series 3 Brandix KSR4590PQS 1500 Watts',
        price: 949,
        compareAtPrice: 1189,
        images: [
            'assets/images/products/product-4.jpg',
            'assets/images/products/product-4-1.jpg',
        ],
        badges: 'sale',
        rating: 3,
        reviews: 15,
        availability: 'in-stock',
        brand: 'brandix',
        categories: [],
        attributes: [
            { slug: 'color', values: 'white' },
            { slug: 'speed', values: '750-rpm', featured: true },
            { slug: 'power-source', values: 'cordless-electric', featured: true },
            { slug: 'battery-cell-type', values: 'lithium', featured: true },
            { slug: 'voltage', values: '20-volts', featured: true },
            { slug: 'battery-capacity', values: '2-Ah', featured: true },
        ],
    },
    {
        slug: 'brandix-router-power-tool-2017erxpk',
        name: 'Brandix Router Power Tool 2017ERXPK',
        price: 1700,
        images: [
            'assets/images/products/product-5.jpg',
            'assets/images/products/product-5-1.jpg',
        ],
        rating: 4,
        reviews: 2,
        availability: 'in-stock',
        brand: 'wakita',
        categories: [],
        attributes: [
            { slug: 'color', values: 'dark-blue' },
            { slug: 'speed', values: '750-rpm', featured: true },
            { slug: 'power-source', values: 'cordless-electric', featured: true },
            { slug: 'battery-cell-type', values: 'lithium', featured: true },
            { slug: 'voltage', values: '20-volts', featured: true },
            { slug: 'battery-capacity', values: '2-Ah', featured: true },
        ],
    },
    {
        slug: 'brandix-drilling-machine-dm2019kw4-4kw',
        name: 'Brandix Drilling Machine DM2019KW4 4kW',
        price: 3199,
        images: [
            'assets/images/products/product-6.jpg',
            'assets/images/products/product-6-1.jpg',
        ],
        rating: 3,
        reviews: 21,
        availability: 'in-stock',
        brand: 'wakita',
        categories: [],
        attributes: [
            { slug: 'color', values: 'orange' },
            { slug: 'speed', values: '750-rpm', featured: true },
            { slug: 'power-source', values: 'cordless-electric', featured: true },
            { slug: 'battery-cell-type', values: 'lithium', featured: true },
            { slug: 'voltage', values: '20-volts', featured: true },
            { slug: 'battery-capacity', values: '2-Ah', featured: true },
        ],
    },
    {
        slug: 'brandix-pliers',
        name: 'Brandix Pliers',
        price: 24,
        images: [
            'assets/images/products/product-7.jpg',
            'assets/images/products/product-7-1.jpg',
        ],
        rating: 2,
        reviews: 1,
        availability: 'in-stock',
        brand: 'wevalt',
        categories: [],
        attributes: [
            { slug: 'color', values: 'red' },
            { slug: 'speed', values: '750-rpm', featured: true },
            { slug: 'power-source', values: 'cordless-electric', featured: true },
            { slug: 'battery-cell-type', values: 'lithium', featured: true },
            { slug: 'voltage', values: '20-volts', featured: true },
            { slug: 'battery-capacity', values: '2-Ah', featured: true },
        ],
    },
    {
        slug: 'water-hose-40cm',
        name: 'Water Hose 40cm',
        price: 15,
        images: [
            'assets/images/products/product-8.jpg',
            'assets/images/products/product-8-1.jpg',
        ],
        rating: 2,
        reviews: 5,
        availability: 'in-stock',
        brand: 'hammer',
        categories: [],
        attributes: [
            { slug: 'color', values: ['pear-green', 'blue'] },
            { slug: 'speed', values: '750-rpm', featured: true },
            { slug: 'power-source', values: 'cordless-electric', featured: true },
            { slug: 'battery-cell-type', values: 'lithium', featured: true },
            { slug: 'voltage', values: '20-volts', featured: true },
            { slug: 'battery-capacity', values: '2-Ah', featured: true },
        ],
    },
    {
        slug: 'spanner-wrench',
        name: 'Spanner Wrench',
        price: 19,
        images: [
            'assets/images/products/product-9.jpg',
            'assets/images/products/product-9-1.jpg',
        ],
        rating: 4,
        reviews: 34,
        availability: 'in-stock',
        brand: 'hammer',
        categories: [],
        attributes: [
            { slug: 'color', values: 'green' },
            { slug: 'speed', values: '750-rpm', featured: true },
            { slug: 'power-source', values: 'cordless-electric', featured: true },
            { slug: 'battery-cell-type', values: 'lithium', featured: true },
            { slug: 'voltage', values: '20-volts', featured: true },
            { slug: 'battery-capacity', values: '2-Ah', featured: true },
        ],
    },
    {
        slug: 'water-tap',
        name: 'Water Tap',
        price: 15,
        images: [
            'assets/images/products/product-10.jpg',
            'assets/images/products/product-10-1.jpg',
        ],
        rating: 5,
        reviews: 3,
        availability: 'in-stock',
        brand: 'hammer',
        categories: [],
        attributes: [
            { slug: 'color', values: 'gray' },
            { slug: 'speed', values: '750-rpm', featured: true },
            { slug: 'power-source', values: 'cordless-electric', featured: true },
            { slug: 'battery-cell-type', values: 'lithium', featured: true },
            { slug: 'voltage', values: '20-volts', featured: true },
            { slug: 'battery-capacity', values: '2-Ah', featured: true },
        ],
    },
    {
        slug: 'hand-tool-kit',
        name: 'Hand Tool Kit',
        price: 149,
        images: [
            'assets/images/products/product-11.jpg',
            'assets/images/products/product-11-1.jpg',
        ],
        rating: 4,
        reviews: 7,
        availability: 'in-stock',
        brand: 'hammer',
        categories: [],
        attributes: [
            { slug: 'color', values: 'black' },
            { slug: 'speed', values: '750-rpm', featured: true },
            { slug: 'power-source', values: 'cordless-electric', featured: true },
            { slug: 'battery-cell-type', values: 'lithium', featured: true },
            { slug: 'voltage', values: '20-volts', featured: true },
            { slug: 'battery-capacity', values: '2-Ah', featured: true },
        ],
    },
    {
        slug: 'ash-s-chainsaw-3.5kw',
        name: 'Ash\'s Chainsaw 3.5kW',
        price: 666.99,
        images: [
            'assets/images/products/product-12.jpg',
            'assets/images/products/product-12-1.jpg',
        ],
        rating: 5,
        reviews: 17,
        availability: 'in-stock',
        brand: 'mitasia',
        categories: [],
        attributes: [
            { slug: 'color', values: 'violet' },
            { slug: 'speed', values: '750-rpm', featured: true },
            { slug: 'power-source', values: 'cordless-electric', featured: true },
            { slug: 'battery-cell-type', values: 'lithium', featured: true },
            { slug: 'voltage', values: '20-volts', featured: true },
            { slug: 'battery-capacity', values: '2-Ah', featured: true },
        ],
    },
    {
        slug: 'brandix-angle-grinder-kzx3890pqw',
        name: 'Brandix Angle Grinder KZX3890PQW',
        price: 649,
        images: [
            'assets/images/products/product-13.jpg',
            'assets/images/products/product-13-1.jpg',
        ],
        rating: 2,
        reviews: 8,
        availability: 'in-stock',
        brand: 'mitasia',
        categories: [],
        attributes: [
            { slug: 'color', values: 'purple' },
            { slug: 'speed', values: '750-rpm', featured: true },
            { slug: 'power-source', values: 'cordless-electric', featured: true },
            { slug: 'battery-cell-type', values: 'lithium', featured: true },
            { slug: 'voltage', values: '20-volts', featured: true },
            { slug: 'battery-capacity', values: '2-Ah', featured: true },
        ],
    },
    {
        slug: 'brandix-air-compressor-deltakx500',
        name: 'Brandix Air Compressor DELTAKX500',
        price: 1800,
        images: [
            'assets/images/products/product-14.jpg',
            'assets/images/products/product-14-1.jpg',
        ],
        rating: 3,
        reviews: 14,
        availability: 'in-stock',
        brand: 'brandix',
        categories: [],
        attributes: [
            { slug: 'color', values: ['light-gray', 'emerald'] },
            { slug: 'speed', values: '750-rpm', featured: true },
            { slug: 'power-source', values: 'cordless-electric', featured: true },
            { slug: 'battery-cell-type', values: 'lithium', featured: true },
            { slug: 'voltage', values: '20-volts', featured: true },
            { slug: 'battery-capacity', values: '2-Ah', featured: true },
        ],
    },
    {
        slug: 'brandix-electric-jigsaw-jig7000bq',
        name: 'Brandix Electric Jigsaw JIG7000BQ',
        price: 290,
        images: [
            'assets/images/products/product-15.jpg',
            'assets/images/products/product-15-1.jpg',
        ],
        rating: 2,
        reviews: 1,
        availability: 'in-stock',
        brand: 'brandix',
        categories: [],
        attributes: [
            { slug: 'color', values: ['coal', 'shamrock'] },
            { slug: 'speed', values: '750-rpm', featured: true },
            { slug: 'power-source', values: 'cordless-electric', featured: true },
            { slug: 'battery-cell-type', values: 'lithium', featured: true },
            { slug: 'voltage', values: '20-volts', featured: true },
            { slug: 'battery-capacity', values: '2-Ah', featured: true },
        ],
    },
    {
        slug: 'brandix-screwdriver-screw1500acc',
        name: 'Brandix Screwdriver SCREW1500ACC',
        price: 1499,
        images: [
            'assets/images/products/product-16.jpg',
            'assets/images/products/product-16-1.jpg',
            'assets/images/products/product-16-2.jpg',
            'assets/images/products/product-16-3.jpg',
            'assets/images/products/product-16-4.jpg',
        ],
        rating: 5,
        reviews: 3,
        availability: 'in-stock',
        brand: 'metaggo',
        categories: [],
        attributes: [
            { slug: 'color', values: ['dark-gray', 'shakespeare'] },
            { slug: 'speed', values: '750-rpm', featured: true },
            { slug: 'power-source', values: 'cordless-electric', featured: true },
            { slug: 'battery-cell-type', values: 'lithium', featured: true },
            { slug: 'voltage', values: '20-volts', featured: true },
            { slug: 'battery-capacity', values: '2-Ah', featured: true },
        ],
    }
];
const products = productsDef.map(productDef => {
    let badges = [];
    if (productDef.badges) {
        badges = typeof productDef.badges === 'string' ? [productDef.badges] : productDef.badges;
    }
    const categories = _categories__WEBPACK_IMPORTED_MODULE_2__["shopCategoriesList"].filter(x => productDef.categories.includes(x.slug)).map(x => (Object.assign({}, x, { parents: null, children: null })));
    const attributes = (productDef.attributes || []).map(productAttributeDef => {
        const attributeDef = attributesDef.find(x => x.slug === productAttributeDef.slug);
        if (!attributeDef) {
            return null;
        }
        let valuesDef = [];
        if (typeof productAttributeDef.values === 'string') {
            valuesDef = [productAttributeDef.values];
        }
        else if (productAttributeDef.values) {
            valuesDef = productAttributeDef.values;
        }
        const values = valuesDef.map(valueSlug => {
            const valueDef = attributeDef.values.find(x => x.slug === valueSlug);
            if (!valueDef) {
                return null;
            }
            return Object.assign({}, valueDef, { customFields: {} });
        }).filter(x => x !== null);
        if (!values.length) {
            return null;
        }
        return {
            name: attributeDef.name,
            slug: attributeDef.slug,
            featured: !!productAttributeDef.featured,
            values,
            customFields: {},
        };
    }).filter(x => x !== null);
    return {
        id: ++lastProductId,
        name: productDef.name,
        slug: productDef.slug,
        price: productDef.price,
        compareAtPrice: productDef.compareAtPrice || null,
        images: productDef.images.slice(),
        badges: badges.slice(),
        rating: productDef.rating,
        reviews: productDef.reviews,
        availability: productDef.availability,
        brand: _brands__WEBPACK_IMPORTED_MODULE_1__["brands"].find(x => x.slug === productDef.brand) || null,
        categories,
        attributes,
        customFields: {},
    };
});
function getBestsellers(limit = null) {
    const start = 0;
    const end = limit ? start + limit : undefined;
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(products.slice(start, end));
}
function getTopRated(limit = null) {
    const start = 3;
    const end = limit ? start + limit : undefined;
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(products.slice(start, end));
}
function getSpecialOffers(limit = null) {
    const start = 6;
    const end = limit ? start + limit : undefined;
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(products.slice(start, end));
}
function getFeatured(categorySlug = null, limit = null) {
    let fakeProducts = products.slice();
    if (categorySlug === 'power-tools') {
        fakeProducts = fakeProducts.reverse();
    }
    else if (categorySlug === 'hand-tools') {
        fakeProducts = [...fakeProducts.slice(8), ...fakeProducts.slice(0, 8)];
    }
    else if (categorySlug === 'plumbing') {
        fakeProducts = [...fakeProducts.slice(8), ...fakeProducts.slice(0, 8)].reverse();
    }
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["timer"])(1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(() => fakeProducts.slice(0, limit || undefined)));
}
function getLatestProducts(categorySlug = null, limit = null) {
    return getFeatured(categorySlug, limit);
}
// noinspection JSUnusedLocalSymbols
function getRelatedProducts(product) {
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(products.slice(0, 7));
}
function getProduct(productSlug) {
    const product = products.find(x => x.slug === productSlug);
    if (!product) {
        // return throwError(new HttpErrorResponse({status: 404, statusText: 'Page Not Found'}));
    }
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(JSON.parse(JSON.stringify(product)));
}


/***/ }),

/***/ "./src/fake-server/index.ts":
/*!**********************************!*\
  !*** ./src/fake-server/index.ts ***!
  \**********************************/
/*! exports provided: getBestsellers, getFeatured, getLatestProducts, getProduct, getRelatedProducts, getSpecialOffers, getTopRated, getShopCategoriesBySlugs, getShopCategoriesTree, getShopCategory, getBlogCategoriesTree, getBrands, getProductsList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _database_products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./database/products */ "./src/fake-server/database/products.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBestsellers", function() { return _database_products__WEBPACK_IMPORTED_MODULE_1__["getBestsellers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFeatured", function() { return _database_products__WEBPACK_IMPORTED_MODULE_1__["getFeatured"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLatestProducts", function() { return _database_products__WEBPACK_IMPORTED_MODULE_1__["getLatestProducts"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getProduct", function() { return _database_products__WEBPACK_IMPORTED_MODULE_1__["getProduct"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRelatedProducts", function() { return _database_products__WEBPACK_IMPORTED_MODULE_1__["getRelatedProducts"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSpecialOffers", function() { return _database_products__WEBPACK_IMPORTED_MODULE_1__["getSpecialOffers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTopRated", function() { return _database_products__WEBPACK_IMPORTED_MODULE_1__["getTopRated"]; });

/* harmony import */ var _database_categories__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./database/categories */ "./src/fake-server/database/categories.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getShopCategoriesBySlugs", function() { return _database_categories__WEBPACK_IMPORTED_MODULE_2__["getShopCategoriesBySlugs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getShopCategoriesTree", function() { return _database_categories__WEBPACK_IMPORTED_MODULE_2__["getShopCategoriesTree"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getShopCategory", function() { return _database_categories__WEBPACK_IMPORTED_MODULE_2__["getShopCategory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBlogCategoriesTree", function() { return _database_categories__WEBPACK_IMPORTED_MODULE_2__["getBlogCategoriesTree"]; });

/* harmony import */ var _database_brands__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./database/brands */ "./src/fake-server/database/brands.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBrands", function() { return _database_brands__WEBPACK_IMPORTED_MODULE_3__["getBrands"]; });

/* harmony import */ var _products_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./products-list */ "./src/fake-server/products-list.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getProductsList", function() { return _products_list__WEBPACK_IMPORTED_MODULE_4__["getProductsList"]; });








/***/ }),

/***/ "./src/fake-server/products-list.ts":
/*!******************************************!*\
  !*** ./src/fake-server/products-list.ts ***!
  \******************************************/
/*! exports provided: getProductsList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductsList", function() { return getProductsList; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _database_products__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./database/products */ "./src/fake-server/database/products.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _database_categories__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./database/categories */ "./src/fake-server/database/categories.ts");







/**
 * Returns products list.
 *
 * @param categorySlug Unique human-readable category identifier.
 * @param options Options list.
 */
function getProductsList(categorySlug, options) {
    const page = options.page || 1;
    const limit = options.limit || 12;
    const sort = options.sort || 'default';
    const filterValues = options.filterValues || {};
    const filters = [];
    const filtersDef = [
        { type: 'range', slug: 'price', name: 'Price' },
        { type: 'check', slug: 'brand', name: 'Brand' },
        { type: 'radio', slug: 'discount', name: 'With Discount' },
        { type: 'color', slug: 'color', name: 'Color' },
    ];
    let items = _database_products__WEBPACK_IMPORTED_MODULE_4__["products"].slice();
    // Make filters.
    if (categorySlug === null) {
        filters.push({
            type: 'categories',
            slug: 'categories',
            name: 'Categories',
            root: true,
            items: [
                ..._database_categories__WEBPACK_IMPORTED_MODULE_6__["shopCategoriesTree"].map(x => makeCategoryFilterItem('child', x)),
            ],
        });
    }
    else {
        const category = _database_categories__WEBPACK_IMPORTED_MODULE_6__["shopCategoriesList"].find(x => x.slug === categorySlug);
        if (!category) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"]({ status: 404, statusText: 'Page Not Found' }));
        }
        filters.push({
            type: 'categories',
            slug: 'categories',
            name: 'Categories',
            root: false,
            items: [
                ...category.parents.map(x => makeCategoryFilterItem('parent', x)),
                makeCategoryFilterItem('current', category),
                ...category.children.map(x => makeCategoryFilterItem('child', x)),
            ],
        });
    }
    makeFilters(filtersDef, items).forEach(x => filters.push(x));
    // Apply values to filters.
    filters.forEach(filter => {
        if (filter.slug in filterValues && 'value' in filter) {
            filter.value = parseFilterValue(filter, filterValues[filter.slug]);
        }
    });
    // Calculate items count for filter values.
    filters.forEach(filter => {
        if (filter.type !== 'check' && filter.type !== 'color' && filter.type !== 'radio') {
            return;
        }
        const counts = calcProductsForFilterValues(filter, filters, items);
        filter.items.forEach(item => {
            if (item.slug in counts) {
                item.count = counts[item.slug];
            }
        });
    });
    // Apply filters to items list.
    items = items.filter(product => {
        return filters.reduce((result, filter) => result && testProduct(filter, product), true);
    });
    // Sort items array.
    items = items.sort((a, b) => {
        if (['name_asc', 'name_desc'].includes(sort)) {
            if (a.name === b.name) {
                return 0;
            }
            return (a.name > b.name ? 1 : -1) * (sort === 'name_asc' ? 1 : -1);
        }
        return 0;
    });
    // Preparing data for a response.
    const start = (page - 1) * limit;
    const end = start + limit;
    const total = items.length;
    const pages = Math.ceil(total / limit);
    const from = (page - 1) * limit + 1;
    const to = Math.max(Math.min(page * limit, total), from);
    items = items.slice(start, end);
    const response = {
        items,
        page,
        limit,
        total,
        pages,
        from,
        to,
        sort,
        filters,
        filterValues,
    };
    console.log(response);
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(350).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(() => JSON.parse(JSON.stringify(response))));
}
function getFilterValue(type, slug, product, defaultValue = null) {
    if (type === 'range' && slug === 'price') {
        return product.price;
    }
    else if (type === 'check' && slug === 'brand') {
        if (product.brand && typeof product.brand === 'object') {
            return [{ slug: product.brand.slug, name: product.brand.name }];
        }
    }
    else if (type === 'check' && slug === 'discount') {
        const items = [
            { slug: 'any', name: 'Any' },
        ];
        if (product.compareAtPrice) {
            items.push({ slug: 'yes', name: 'Yes' });
        }
        else {
            items.push({ slug: 'no', name: 'No' });
        }
        return items;
    }
    else if (type === 'check' || type === 'radio') {
        if (!('attributes' in product) || !Object(util__WEBPACK_IMPORTED_MODULE_3__["isArray"])(product.attributes)) {
            return defaultValue;
        }
        const attribute = product.attributes.find(x => x.slug === slug);
        if (!attribute) {
            return defaultValue;
        }
        return attribute.values.map(x => ({ slug: x.slug, name: x.name }));
    }
    return defaultValue;
}
function getRangeValue(slug, product, defaultValue = null) {
    return getFilterValue('range', slug, product, defaultValue);
}
function getListValues(slug, product, defaultValue = []) {
    return getFilterValue('check', slug, product, defaultValue);
}
function getColorCode(slug) {
    switch (slug) {
        case 'white': return '#fff';
        case 'silver': return '#d9d9d9';
        case 'light-gray': return '#b3b3b3';
        case 'gray': return '#808080';
        case 'dark-gray': return '#666';
        case 'coal': return '#4d4d4d';
        case 'black': return '#262626';
        case 'red': return '#ff4040';
        case 'orange': return '#ff8126';
        case 'yellow': return '#ffd333';
        case 'pear-green': return '#becc1f';
        case 'green': return '#8fcc14';
        case 'emerald': return '#47cc5e';
        case 'shamrock': return '#47cca0';
        case 'shakespeare': return '#47cccc';
        case 'blue': return '#40bfff';
        case 'dark-blue': return '#3d6dcc';
        case 'violet': return '#7766cc';
        case 'purple': return '#b852cc';
        case 'cerise': return '#e53981';
    }
    return '#000';
}
function parseFilterValue(filter, value) {
    switch (filter.type) {
        case 'range':
            return value.split('-').map(x => parseFloat(x));
        case 'check':
        case 'color':
            return value.trim() === '' ? [] : value.split(',').map(x => x.trim());
    }
    return value;
}
function testProduct(filter, product) {
    if (filter.type === 'range') {
        const value = getRangeValue(filter.slug, product);
        if (value === null || value < filter.value[0] || value > filter.value[1]) {
            return false;
        }
    }
    else if (filter.type === 'check' || filter.type === 'color') {
        const values = getListValues(filter.slug, product);
        return filter.value.length < 1 || filter.value.reduce((isMatched, value) => {
            return isMatched || !!values.find(x => x.slug === value);
        }, false);
    }
    else if (filter.type === 'radio') {
        const values = getListValues(filter.slug, product);
        return !!values.find(x => x.slug === filter.value);
    }
    return true;
}
function calcProductsForFilterValues(filter, allFilters, products) {
    const result = {};
    products = products.filter(product => allFilters.reduce((isMatched, eachFilter) => {
        return isMatched && (filter.slug === eachFilter.slug || testProduct(eachFilter, product));
    }, true));
    products.forEach(product => {
        switch (filter.type) {
            case 'check':
            case 'color':
            case 'radio':
                getListValues(filter.slug, product).forEach(value => {
                    if (!(value.slug in result)) {
                        result[value.slug] = 0;
                    }
                    result[value.slug] += 1;
                });
                break;
        }
    });
    return result;
}
function makeFilters(filtersDef, products) {
    const result = [];
    filtersDef.forEach(filterDef => {
        if (filterDef.type === 'range') {
            let max = products.reduce((value, product) => Math.max(value, getRangeValue(filterDef.slug, product, value)), 0);
            let min = products.reduce((value, product) => Math.min(value, getRangeValue(filterDef.slug, product, value)), max);
            /** Calculates the number of digits for rounding. */
            let digit = Math.max(Math.ceil(max).toString().length - 2, 1);
            digit = Math.pow(10, digit);
            max = Math.ceil(max / digit) * digit;
            min = Math.floor(min / digit) * digit;
            result.push({
                type: filterDef.type,
                slug: filterDef.slug,
                name: filterDef.name,
                value: [min, max],
                // options
                min,
                max,
            });
        }
        else if (filterDef.type === 'check' || filterDef.type === 'radio' || filterDef.type === 'color') {
            const itemsBySlug = {};
            let items = [];
            products.forEach(product => {
                getListValues(filterDef.slug, product).forEach(value => {
                    if (value.slug in itemsBySlug) {
                        return;
                    }
                    const item = makeFilterItem(filterDef.type, value);
                    itemsBySlug[value.slug] = item;
                    items.push(item);
                });
            });
            if (items.length < 1 || (filterDef.type === 'radio' && items.length < 2)) {
                return;
            }
            items = sortFilterItems(filterDef.type, filterDef.slug, items);
            result.push({
                type: filterDef.type,
                slug: filterDef.slug,
                name: filterDef.name,
                value: filterDef.type === 'radio' ? items[0].slug : [],
                items,
            });
        }
    });
    return result;
}
function makeFilterItem(filterType, value) {
    switch (filterType) {
        case 'check':
        case 'radio':
            return {
                slug: value.slug,
                name: value.name,
                count: 0,
            };
        case 'color':
            return {
                slug: value.slug,
                name: value.name,
                count: 0,
                color: getColorCode(value.slug),
            };
    }
}
function makeCategoryFilterItem(type, category) {
    return {
        slug: category.slug,
        name: category.name,
        type,
        category: Object.assign({}, category, { children: null, parents: null }),
        count: category.items,
    };
}
function sortFilterItems(filterType, filterSlug, items) {
    if (filterType === 'color' && filterSlug === 'color') {
        const attributeDef = _database_products__WEBPACK_IMPORTED_MODULE_4__["attributesDef"].find(x => x.slug === filterSlug);
        if (attributeDef) {
            const values = attributeDef.values.map(x => x.slug);
            return items.sort((a, b) => {
                return values.indexOf(a.slug) - values.indexOf(b.slug);
            });
        }
    }
    return items;
}


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
document.addEventListener('DOMContentLoaded', () => {
    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
        .catch(err => console.error(err));
});


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/ashishjain/projects/setup/angular/ajayco/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map