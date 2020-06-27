(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-shop-shop-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shop/components/product-sidebar/product-sidebar.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shop/components/product-sidebar/product-sidebar.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"block block-sidebar\">\r\n    <div class=\"block-sidebar__item\">\r\n        <app-widget-categories [categories]=\"categories$|async\" location=\"shop\"></app-widget-categories>\r\n    </div>\r\n    <div class=\"block-sidebar__item\">\r\n        <app-widget-products header=\"Latest Products\" [products]=\"bestsellers$|async\"></app-widget-products>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shop/components/product-tabs/product-tabs.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shop/components/product-tabs/product-tabs.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"product-tabs\" [ngClass]=\"{'product-tabs--layout--sidebar': withSidebar}\">\n    <div class=\"product-tabs__list\">\n        <a href=\"#tab-description\" class=\"product-tabs__item\"\n           [ngClass]=\"{'product-tabs__item--active': tab === 'description'}\"\n           (click)=\"$event.preventDefault(); tab = 'description'\">Description</a>\n\n        <a href=\"#tab-specification\" class=\"product-tabs__item\"\n           [ngClass]=\"{'product-tabs__item--active': tab === 'specification'}\"\n           (click)=\"$event.preventDefault(); tab = 'specification'\">Specification</a>\n\n        <a href=\"#tab-reviews\" class=\"product-tabs__item\"\n           [ngClass]=\"{'product-tabs__item--active': tab === 'reviews'}\"\n           (click)=\"$event.preventDefault(); tab = 'reviews'\">Reviews</a>\n    </div>\n    <div class=\"product-tabs__content\">\n\n        <div class=\"product-tabs__pane\" id=\"tab-description\" [ngClass]=\"{'product-tabs__pane--active': tab === 'description'}\">\n            <div class=\"typography\">\n                <h3>Product Full Description</h3>\n                <p [innerHTML]=\"product.description\"></p>       \n            </div>\n        </div>\n\n        <div class=\"product-tabs__pane\" id=\"tab-specification\" [ngClass]=\"{'product-tabs__pane--active': tab === 'specification'}\">\n            <div class=\"spec\">\n                <h3 class=\"spec__header\">Specification</h3>\n                <div *ngFor=\"let section of specification\" class=\"spec__section\">\n                    <h4 class=\"spec__section-title\">{{ section.name }}</h4>\n                    <div *ngFor=\"let feature of section.features\" class=\"spec__row\">\n                        <div class=\"spec__name\">{{ feature.name }}</div><div class=\"spec__value\">{{ feature.value }}</div>\n                    </div>\n                </div>\n                <div class=\"spec__disclaimer\">\n                    Information on technical characteristics, the delivery set, the country of manufacture and the appearance\n                    of the goods is for reference only and is based on the latest information available at the time of publication.\n                </div>\n            </div>\n        </div>\n\n        <div class=\"product-tabs__pane\" id=\"tab-reviews\" [ngClass]=\"{'product-tabs__pane--active': tab === 'reviews'}\">\n            <div class=\"reviews-view\">\n                <div class=\"reviews-view__list\">\n                    <h3 class=\"reviews-view__header\">Customer Reviews</h3>\n\n                    <div class=\"reviews-list\">\n                        <ol class=\"reviews-list__content\">\n                            <li *ngFor=\"let review of reviews\" class=\"reviews-list__item\">\n                                <div class=\"review\">\n                                    <div class=\"review__avatar\"><img [src]=\"review.avatar\" alt=\"\"></div>\n                                    <div class=\"review__content\">\n                                        <div class=\"review__author\">{{ review.author }}</div>\n                                        <div class=\"review__rating\">\n                                            <app-rating [value]=\"review.rating\"></app-rating>\n                                        </div>\n                                        <div class=\"review__text\">{{ review.text }}</div>\n                                        <div class=\"review__date\">{{ review.date }}</div>\n                                    </div>\n                                </div>\n                            </li>\n                        </ol>\n                        <div class=\"reviews-list__pagination\">\n                            <app-pagination [current]=\"1\" [siblings]=\"2\" [total]=\"10\"></app-pagination>\n                        </div>\n                    </div>\n                </div>\n\n                <form class=\"reviews-view__form\">\n                    <h3 class=\"reviews-view__header\">Write A Review</h3>\n                    <div class=\"row\">\n                        <div class=\"col-12 col-lg-9 col-xl-8\">\n                            <div class=\"form-row\">\n                                <div class=\"form-group col-md-4\">\n                                    <label for=\"review-stars\">Review Stars</label>\n                                    <select id=\"review-stars\" class=\"form-control\">\n                                        <option>5 Stars Rating</option>\n                                        <option>4 Stars Rating</option>\n                                        <option>3 Stars Rating</option>\n                                        <option>2 Stars Rating</option>\n                                        <option>1 Stars Rating</option>\n                                    </select>\n                                </div>\n                                <div class=\"form-group col-md-4\">\n                                    <label for=\"review-author\">Your Name</label>\n                                    <input type=\"text\" class=\"form-control\" id=\"review-author\" placeholder=\"Your Name\">\n                                </div>\n                                <div class=\"form-group col-md-4\">\n                                    <label for=\"review-email\">Email Address</label>\n                                    <input type=\"text\" class=\"form-control\" id=\"review-email\" placeholder=\"Email Address\">\n                                </div>\n                            </div>\n                            <div class=\"form-group\">\n                                <label for=\"review-text\">Your Review</label>\n                                <textarea class=\"form-control\" id=\"review-text\" rows=\"6\"></textarea>\n                            </div>\n                            <div class=\"form-group mb-0\">\n                                <button type=\"submit\" class=\"btn btn-primary btn-lg\">Post Your Review</button>\n                            </div>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shop/components/products-view/products-view.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shop/components/products-view/products-view.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"products-view\" [ngClass]=\"{'products-view--loading': this.pageService.isLoading$|async}\" [formGroup]=\"listOptionsForm\">\r\n    <div class=\"products-view__loader\"></div>\r\n\r\n    <div *ngIf=\"pageService.items?.length\" class=\"products-view__content\">\r\n        <div class=\"products-view__options\">\r\n            <div class=\"view-options\" [ngClass]=\"{\r\n                'view-options--offcanvas--always': offcanvas === 'always',\r\n                'view-options--offcanvas--mobile': offcanvas === 'mobile'\r\n            }\">\r\n                <div class=\"view-options__filters-button\">\r\n                    <button type=\"button\" class=\"filters-button\" (click)=\"sidebar.open()\">\r\n                        <app-icon class=\"filters-button__icon\" name=\"filters-16\" size=\"16\"></app-icon>\r\n                        <span class=\"filters-button__title\">Filters</span>\r\n                        <span class=\"filters-button__counter\" *ngIf=\"filtersCount > 0\">{{ filtersCount }}</span>\r\n                    </button>\r\n                </div>\r\n                <div class=\"view-options__layout\">\r\n                    <div class=\"layout-switcher\">\r\n                        <div class=\"layout-switcher__list\">\r\n                            <button title=\"Grid\" type=\"button\" class=\"layout-switcher__button\"\r\n                                    [ngClass]=\"{'layout-switcher__button--active': layout === 'grid'}\" (click)=\"setLayout('grid')\">\r\n\r\n                                <app-icon name=\"layout-grid-16x16\" size=\"16\"></app-icon>\r\n                            </button>\r\n                            <button title=\"Grid With Features\" type=\"button\" class=\"layout-switcher__button\"\r\n                                    [ngClass]=\"{'layout-switcher__button--active': layout === 'grid-with-features'}\" (click)=\"setLayout('grid-with-features')\">\r\n\r\n                                <app-icon name=\"layout-grid-with-details-16x16\" size=\"16\"></app-icon>\r\n                            </button>\r\n                            <button title=\"List\" type=\"button\" class=\"layout-switcher__button\"\r\n                                    [ngClass]=\"{'layout-switcher__button--active': layout === 'list'}\" (click)=\"setLayout('list')\">\r\n\r\n                                <app-icon name=\"layout-list-16x16\" size=\"16\"></app-icon>\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"view-options__legend\">\r\n                    Showing {{ this.pageService.from }}–{{ this.pageService.to }}\r\n                    of {{ this.pageService.total }}\r\n                    results\r\n                </div>\r\n                <div class=\"view-options__divider\"></div>\r\n                <div class=\"view-options__control\">\r\n                    <label for=\"view-options-sort\">Sort By</label>\r\n                    <div>\r\n                        <select class=\"form-control form-control-sm\" id=\"view-options-sort\" formControlName=\"sort\">\r\n                            <option value=\"default\">Default</option>\r\n                            <option value=\"name_asc\">Name (A-Z)</option>\r\n                            <option value=\"name_desc\">Name (Z-A)</option>\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n                <div class=\"view-options__control\">\r\n                    <label for=\"view-options-limit\">Show</label>\r\n                    <div>\r\n                        <select class=\"form-control form-control-sm\" id=\"view-options-limit\" formControlName=\"limit\">\r\n                            <option value=\"12\">12</option>\r\n                            <option value=\"24\">24</option>\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"products-view__list products-list\" [attr.data-layout]=\"layout != 'list' ? grid : layout\" [attr.data-with-features]=\"layout == 'grid-with-features' ? 'true' : 'false'\">\r\n            <div class=\"products-list__body\">\r\n                <div *ngFor=\"let product of pageService.items\" class=\"products-list__item\">\r\n                    <app-product-card [product]=\"product\"></app-product-card>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"products-view__pagination\">\r\n            <app-pagination formControlName=\"page\" [siblings]=\"2\" [total]=\"pageService.pages\"></app-pagination>\r\n        </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"!pageService.items?.length\" class=\"products-view__empty\">\r\n        <div class=\"products-view__empty-title\">No matching items</div>\r\n        <div class=\"products-view__empty-subtitle\">Try resetting the filters</div>\r\n        <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"resetFilters()\">Reset filters</button>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shop/components/shop-sidebar/shop-sidebar.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shop/components/shop-sidebar/shop-sidebar.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"block block-sidebar\" [ngClass]=\"{\r\n    'block-sidebar--offcanvas--always': offcanvas === 'always',\r\n    'block-sidebar--offcanvas--mobile': offcanvas === 'mobile',\r\n    'block-sidebar--open': isOpen\r\n}\">\r\n    <div class=\"block-sidebar__backdrop\" (click)=\"sidebar.close()\"></div>\r\n    <div class=\"block-sidebar__body\">\r\n        <div class=\"block-sidebar__header\">\r\n            <div class=\"block-sidebar__title\">Filters</div>\r\n            <button class=\"block-sidebar__close\" type=\"button\" (click)=\"sidebar.close()\">\r\n                <app-icon name=\"cross-20\" size=\"20\"></app-icon>\r\n            </button>\r\n        </div>\r\n        <div class=\"block-sidebar__item\">\r\n            <app-widget-filters [offcanvas]=\"offcanvas\"></app-widget-filters>\r\n        </div>\r\n        <div class=\"block-sidebar__item d-none d-lg-block\" *ngIf=\"offcanvas === 'mobile'\">\r\n            <app-widget-products header=\"Latest Products\" [products]=\"bestsellers$|async\"></app-widget-products>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shop/pages/page-cart/page-cart.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shop/pages/page-cart/page-cart.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-page-header [header]=\"'Shopping Cart'\" [breadcrumbs]=\"[\r\n    {label: 'Home',          url: root.home()},\r\n    {label: 'Shopping Cart', url: ''}\r\n]\"></app-page-header>\r\n\r\n<div class=\"block block-empty\" *ngIf=\"!items.length\">\r\n    <div class=\"container\">\r\n        <div class=\"block-empty__body\">\r\n            <div class=\"block-empty__message\">Your shopping cart is empty!</div>\r\n            <div class=\"block-empty__actions\">\r\n                <a [routerLink]=\"root.shop()\" class=\"btn btn-primary btn-sm\">Continue</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"cart block\" *ngIf=\"items.length\">\r\n    <div class=\"container\">\r\n        <table class=\"cart__table cart-table\">\r\n            <thead class=\"cart-table__head\">\r\n            <tr class=\"cart-table__row\">\r\n                <th class=\"cart-table__column cart-table__column--image\">Image</th>\r\n                <th class=\"cart-table__column cart-table__column--product\">Product</th>\r\n                <th class=\"cart-table__column cart-table__column--price\">Price</th>\r\n                <th class=\"cart-table__column cart-table__column--quantity\">Quantity</th>\r\n                <th class=\"cart-table__column cart-table__column--total\">Total</th>\r\n                <th class=\"cart-table__column cart-table__column--remove\"></th>\r\n            </tr>\r\n            </thead>\r\n            <tbody class=\"cart-table__body\">\r\n            <tr *ngFor=\"let item of items\" class=\"cart-table__row\">\r\n                <td class=\"cart-table__column cart-table__column--image\">\r\n                    <a [routerLink]=\"root.product(item.cartItem.product)\" *ngIf=\"item.cartItem.product.images?.length\"><img [src]=\"item.cartItem.product.images[0]\" alt=\"\"></a>\r\n                </td>\r\n                <td class=\"cart-table__column cart-table__column--product\">\r\n                    <a [routerLink]=\"root.product(item.cartItem.product)\" class=\"cart-table__product-name\">{{ item.cartItem.product.name }}</a>\r\n                    <ul *ngIf=\"item.cartItem.options.length\" class=\"cart-table__options\">\r\n                        <li *ngFor=\"let option of item.cartItem.options\">{{ option.name }}: {{ option.value }}</li>\r\n                    </ul>\r\n                </td>\r\n                <td class=\"cart-table__column cart-table__column--price\" data-title=\"Price\">{{ item.cartItem.product.price|currencyFormat }}</td>\r\n                <td class=\"cart-table__column cart-table__column--quantity\" data-title=\"Quantity\">\r\n                    <app-input-number [formControl]=\"item.quantityControl\" [min]=\"1\"></app-input-number>\r\n                </td>\r\n                <td class=\"cart-table__column cart-table__column--total\" data-title=\"Total\">{{ item.cartItem.product.price * item.quantity|currencyFormat }}</td>\r\n                <td class=\"cart-table__column cart-table__column--remove\">\r\n                    <button type=\"button\" class=\"btn btn-light btn-sm btn-svg-icon\" (click)=\"remove(item.cartItem)\" [ngClass]=\"{'btn-loading': removedItems.includes(item.cartItem)}\">\r\n                        <app-icon name=\"cross-12\" size=\"12\"></app-icon>\r\n                    </button>\r\n                </td>\r\n            </tr>\r\n            </tbody>\r\n        </table>\r\n\r\n        <div class=\"cart__actions\">\r\n            <form class=\"cart__coupon-form\">\r\n                <label for=\"input-coupon-code\" class=\"sr-only\">Password</label>\r\n                <input type=\"text\" class=\"form-control\" id=\"input-coupon-code\" placeholder=\"Coupon Code\">\r\n                <button type=\"submit\" class=\"btn btn-primary\">Apply Coupon</button>\r\n            </form>\r\n            <div class=\"cart__buttons\">\r\n                <a routerLink=\"/\" class=\"btn btn-light\">Continue Shopping</a>\r\n                <button type=\"button\" class=\"btn btn-primary cart__update-button\" (click)=\"update()\" [ngClass]=\"{'btn-loading': updating}\" [disabled]=\"!needUpdate()\">Update Cart</button>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row justify-content-end pt-5\">\r\n            <div class=\"col-12 col-md-7 col-lg-6 col-xl-5\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-body\">\r\n                        <h3 class=\"card-title\">Cart Totals</h3>\r\n\r\n                        <table class=\"cart__totals\">\r\n                            <thead *ngIf=\"(cart.totals$|async).length\" class=\"cart__totals-header\">\r\n                            <tr>\r\n                                <th>Subtotal</th>\r\n                                <td>{{ cart.subtotal$|async|currencyFormat }}</td>\r\n                            </tr>\r\n                            </thead>\r\n                            <tbody *ngIf=\"(cart.totals$|async).length\" class=\"cart__totals-body\">\r\n                            <tr *ngFor=\"let total of cart.totals$|async\">\r\n                                <th>{{ total.title }}</th>\r\n                                <td>\r\n                                    {{ total.price|currencyFormat }}\r\n                                    <div *ngIf=\"total.type === 'shipping'\" class=\"cart__calc-shipping\"><a href=\"\" (click)=\"$event.preventDefault()\">Calculate Shipping</a></div>\r\n                                </td>\r\n                            </tr>\r\n                            </tbody>\r\n                            <tfoot class=\"cart__totals-footer\">\r\n                            <tr>\r\n                                <th>Total</th>\r\n                                <td>{{ cart.total$|async|currencyFormat }}</td>\r\n                            </tr>\r\n                            </tfoot>\r\n                        </table>\r\n                        <a class=\"btn btn-primary btn-xl btn-block cart__checkout-button\" routerLink=\"./checkout\">Proceed to checkout</a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shop/pages/page-category/page-category.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shop/pages/page-category/page-category.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-page-header [header]=\"pageHeader\" [breadcrumbs]=\"breadcrumbs\"></app-page-header>\r\n\r\n<ng-container *ngIf=\"columns === 3\">\r\n    <div class=\"container\">\r\n        <div class=\"shop-layout shop-layout--sidebar--{{ sidebarPosition }}\">\r\n            <div class=\"shop-layout__sidebar\" *ngIf=\"sidebarPosition === 'start'\">\r\n                <app-shop-sidebar offcanvas=\"mobile\"></app-shop-sidebar>\r\n            </div>\r\n            <div class=\"shop-layout__content\">\r\n                <div class=\"block\">\r\n                    <app-products-view [layout]=\"viewMode\" grid=\"grid-3-sidebar\" offcanvas=\"mobile\"></app-products-view>\r\n                </div>\r\n            </div>\r\n            <div class=\"shop-layout__sidebar\" *ngIf=\"sidebarPosition === 'end'\">\r\n                <app-shop-sidebar offcanvas=\"mobile\"></app-shop-sidebar>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</ng-container>\r\n\r\n<ng-container *ngIf=\"columns > 3\">\r\n    <div class=\"container\">\r\n        <div class=\"block\">\r\n            <app-products-view [layout]=\"viewMode\" [grid]=\"'grid-'+columns+'-full'\" offcanvas=\"always\"></app-products-view>\r\n        </div>\r\n        <app-shop-sidebar offcanvas=\"always\"></app-shop-sidebar>\r\n    </div>\r\n</ng-container>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shop/pages/page-checkout/page-checkout.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shop/pages/page-checkout/page-checkout.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-page-header [header]=\"'Checkout'\" [breadcrumbs]=\"[\n    {label: 'Home',          url: root.home()},\n    {label: 'Shopping Cart', url: root.cart()},\n    {label: 'Checkout',      url: ''}\n]\"></app-page-header>\n\n<div class=\"checkout block\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-12 mb-3\">\n                <app-alert type=\"primary\" size=\"lg\">Returning customer? <a [routerLink]=\"root.login()\">Click here to login</a></app-alert>\n            </div>\n\n            <div class=\"col-12 col-lg-6 col-xl-7\">\n                <div class=\"card mb-lg-0\">\n                    <div class=\"card-body\">\n                        <h3 class=\"card-title\">Billing details</h3>\n                        <div class=\"form-row\">\n                            <div class=\"form-group col-md-6\">\n                                <label for=\"checkout-first-name\">First Name</label>\n                                <input type=\"text\" class=\"form-control\" id=\"checkout-first-name\" placeholder=\"First Name\">\n                            </div>\n                            <div class=\"form-group col-md-6\">\n                                <label for=\"checkout-last-name\">Last Name</label>\n                                <input type=\"text\" class=\"form-control\" id=\"checkout-last-name\" placeholder=\"Last Name\">\n                            </div>\n                        </div>\n\n                        <div class=\"form-group\">\n                            <label for=\"checkout-company-name\">Company Name <span class=\"text-muted\">(Optional)</span></label>\n                            <input type=\"text\" class=\"form-control\" id=\"checkout-company-name\" placeholder=\"Company Name\">\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"checkout-country\">Country</label>\n                            <select id=\"checkout-country\" class=\"form-control\">\n                                <option>Select a country...</option>\n                                <option>United States</option>\n                                <option>Russia</option>\n                                <option>Italy</option>\n                                <option>France</option>\n                                <option>Ukraine</option>\n                                <option>Germany</option>\n                                <option>Australia</option>\n                            </select>\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"checkout-street-address\">Street Address</label>\n                            <input type=\"text\" class=\"form-control\" id=\"checkout-street-address\" placeholder=\"Street Address\">\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"checkout-address\">Apartment, suite, unit etc. <span class=\"text-muted\">(Optional)</span></label>\n                            <input type=\"text\" class=\"form-control\" id=\"checkout-address\">\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"checkout-city\">Town / City</label>\n                            <input type=\"text\" class=\"form-control\" id=\"checkout-city\">\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"checkout-state\">State / County</label>\n                            <input type=\"text\" class=\"form-control\" id=\"checkout-state\">\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"checkout-postcode\">Postcode / ZIP</label>\n                            <input type=\"text\" class=\"form-control\" id=\"checkout-postcode\">\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"form-group col-md-6\">\n                                <label for=\"checkout-email\">Email address</label>\n                                <input type=\"email\" class=\"form-control\" id=\"checkout-email\" placeholder=\"Email address\">\n                            </div>\n                            <div class=\"form-group col-md-6\">\n                                <label for=\"checkout-phone\">Phone</label>\n                                <input type=\"text\" class=\"form-control\" id=\"checkout-phone\" placeholder=\"Phone\">\n                            </div>\n                        </div>\n\n                        <div class=\"form-group\">\n                            <div class=\"form-check\">\n                                    <span class=\"form-check-input input-check\">\n                                        <span class=\"input-check__body\">\n                                            <input class=\"input-check__input\" type=\"checkbox\" id=\"checkout-create-account\">\n                                            <span class=\"input-check__box\"></span>\n                                            <svg class=\"input-check__icon\" width=\"9px\" height=\"7px\"><use xlink:href=\"assets/images/sprite.svg#check-9x7\"></use></svg>\n                                        </span>\n                                    </span>\n                                <label class=\"form-check-label\" for=\"checkout-create-account\">Create an account?</label>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"card-divider\"></div>\n                    <div class=\"card-body\">\n                        <h3 class=\"card-title\">Shipping Details</h3>\n\n                        <div class=\"form-group\">\n                            <div class=\"form-check\">\n                                    <span class=\"form-check-input input-check\">\n                                        <span class=\"input-check__body\">\n                                            <input class=\"input-check__input\" type=\"checkbox\" id=\"checkout-different-address\">\n                                            <span class=\"input-check__box\"></span>\n                                            <svg class=\"input-check__icon\" width=\"9px\" height=\"7px\"><use xlink:href=\"assets/images/sprite.svg#check-9x7\"></use></svg>\n                                        </span>\n                                    </span>\n                                <label class=\"form-check-label\" for=\"checkout-different-address\">Ship to a different address?</label>\n                            </div>\n                        </div>\n\n                        <div class=\"form-group\">\n                            <label for=\"checkout-comment\">Order notes <span class=\"text-muted\">(Optional)</span></label>\n                            <textarea id=\"checkout-comment\" class=\"form-control\" rows=\"4\"></textarea>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-12 col-lg-6 col-xl-5 mt-4 mt-lg-0\">\n                <div class=\"card mb-0\">\n                    <div class=\"card-body\">\n                        <h3 class=\"card-title\">Your Order</h3>\n\n                        <table class=\"checkout__totals\">\n                            <thead class=\"checkout__totals-header\">\n                            <tr>\n                                <th>Product</th>\n                                <th>Total</th>\n                            </tr>\n                            </thead>\n                            <tbody class=\"checkout__totals-products\">\n                            <tr *ngFor=\"let item of cart.items$|async\">\n                                <td>{{ item.product.name }} × {{ item.quantity }}</td>\n                                <td>{{ item.product.price * item.quantity|currencyFormat }}</td>\n                            </tr>\n                            </tbody>\n                            <tbody *ngIf=\"(cart.totals$|async).length\" class=\"checkout__totals-subtotals\">\n                            <tr>\n                                <th>Subtotal</th>\n                                <td>{{ cart.subtotal$|async|currencyFormat }}</td>\n                            </tr>\n                            <tr *ngFor=\"let total of cart.totals$|async\">\n                                <th>{{ total.title }}</th>\n                                <td>{{ total.price|currencyFormat }}</td>\n                            </tr>\n                            </tbody>\n                            <tfoot class=\"checkout__totals-footer\">\n                            <tr>\n                                <th>Total</th>\n                                <td>{{ cart.total$|async|currencyFormat }}</td>\n                            </tr>\n                            </tfoot>\n                        </table>\n\n                        <div class=\"payment-methods\">\n                            <ul class=\"payment-methods__list\">\n                                <li class=\"payment-methods__item payment-methods__item--active\">\n                                    <label class=\"payment-methods__item-header\">\n                                            <span class=\"payment-methods__item-radio input-radio\">\n                                                <span class=\"input-radio__body\">\n                                                    <input class=\"input-radio__input\" name=\"checkout_payment_method\" type=\"radio\" checked>\n                                                    <span class=\"input-radio__circle\"></span>\n                                                </span>\n                                            </span>\n                                        <span class=\"payment-methods__item-title\">Direct bank transfer</span>\n                                    </label>\n                                    <div class=\"payment-methods__item-container\">\n                                        <div class=\"payment-methods__item-description text-muted\">\n                                            Make your payment directly into our bank account. Please use your Order ID as the payment\n                                            reference. Your order will not be shipped until the funds have cleared in our account.\n                                        </div>\n                                    </div>\n                                </li>\n                                <li class=\"payment-methods__item\">\n                                    <label class=\"payment-methods__item-header\">\n                                            <span class=\"payment-methods__item-radio input-radio\">\n                                                <span class=\"input-radio__body\">\n                                                    <input class=\"input-radio__input\" name=\"checkout_payment_method\" type=\"radio\">\n                                                    <span class=\"input-radio__circle\"></span>\n                                                </span>\n                                            </span>\n                                        <span class=\"payment-methods__item-title\">Check payments</span>\n                                    </label>\n                                    <div class=\"payment-methods__item-container\">\n                                        <div class=\"payment-methods__item-description text-muted\">\n                                            Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.\n                                        </div>\n                                    </div>\n                                </li>\n                                <li class=\"payment-methods__item\">\n                                    <label class=\"payment-methods__item-header\">\n                                            <span class=\"payment-methods__item-radio input-radio\">\n                                                <span class=\"input-radio__body\">\n                                                    <input class=\"input-radio__input\" name=\"checkout_payment_method\" type=\"radio\">\n                                                    <span class=\"input-radio__circle\"></span>\n                                                </span>\n                                            </span>\n                                        <span class=\"payment-methods__item-title\">Cash on delivery</span>\n                                    </label>\n                                    <div class=\"payment-methods__item-container\">\n                                        <div class=\"payment-methods__item-description text-muted\">\n                                            Pay with cash upon delivery.\n                                        </div>\n                                    </div>\n                                </li>\n                                <li class=\"payment-methods__item\">\n                                    <label class=\"payment-methods__item-header\">\n                                            <span class=\"payment-methods__item-radio input-radio\">\n                                                <span class=\"input-radio__body\">\n                                                    <input class=\"input-radio__input\" name=\"checkout_payment_method\" type=\"radio\">\n                                                    <span class=\"input-radio__circle\"></span>\n                                                </span>\n                                            </span>\n                                        <span class=\"payment-methods__item-title\">PayPal</span>\n                                    </label>\n                                    <div class=\"payment-methods__item-container\">\n                                        <div class=\"payment-methods__item-description text-muted\">\n                                            Pay via PayPal; you can pay with your credit card if you don’t have a PayPal account.\n                                        </div>\n                                    </div>\n                                </li>\n                            </ul>\n                        </div>\n\n                        <div class=\"checkout__agree form-group\">\n                            <div class=\"form-check\">\n                                    <span class=\"form-check-input input-check\">\n                                        <span class=\"input-check__body\">\n                                            <input class=\"input-check__input\" type=\"checkbox\" id=\"checkout-terms\">\n                                            <span class=\"input-check__box\"></span>\n                                            <svg class=\"input-check__icon\" width=\"9px\" height=\"7px\"><use xlink:href=\"assets/images/sprite.svg#check-9x7\"></use></svg>\n                                        </span>\n                                    </span>\n                                <label class=\"form-check-label\" for=\"checkout-terms\">\n                                    I have read and agree to the website <a target=\"_blank\" [routerLink]=\"root.terms()\">terms and conditions</a>*\n                                </label>\n                            </div>\n                        </div>\n\n                        <button type=\"submit\" class=\"btn btn-primary btn-xl btn-block\" (click)=\"pay(amountpay);\">Place Order</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div id=\"paymentrazor\">\n\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shop/pages/page-compare/page-compare.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shop/pages/page-compare/page-compare.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-page-header [header]=\"'Comparison'\" [breadcrumbs]=\"[\r\n    {label: 'Home',       url: '/'},\r\n    {label: 'Comparison', url: ''}\r\n]\"></app-page-header>\r\n\r\n<div class=\"block block-empty\" *ngIf=\"!products.length\">\r\n    <div class=\"container\">\r\n        <div class=\"block-empty__body\">\r\n            <div class=\"block-empty__message\">You have not chosen any products to compare!</div>\r\n            <div class=\"block-empty__actions\">\r\n                <a routerLink=\"/\" class=\"btn btn-primary btn-sm\">Continue</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"block\" *ngIf=\"products.length\">\r\n    <div class=\"container\">\r\n        <div class=\"table-responsive\">\r\n            <table class=\"compare-table\">\r\n                <tbody>\r\n                <tr>\r\n                    <th>Product</th>\r\n                    <td *ngFor=\"let product of products\">\r\n                        <a [routerLink]=\"root.product(product)\" class=\"compare-table__product-link\">\r\n                            <div class=\"compare-table__product-image\">\r\n                                <img *ngIf=\"product.images?.length\" [src]=\"product.images[0]\" alt=\"\">\r\n                            </div>\r\n                            <div class=\"compare-table__product-name\">{{ product.name }}</div>\r\n                        </a>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <th>Rating</th>\r\n                    <td *ngFor=\"let product of products\">\r\n                        <div class=\"compare-table__product-rating\">\r\n                            <app-rating [value]=\"product.rating\"></app-rating>\r\n                        </div>\r\n                        <div class=\"compare-table__product-rating-legend\">\r\n                            {{ product.reviews }} Reviews\r\n                        </div>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <th>Availability</th>\r\n                    <td *ngFor=\"let product of products\">\r\n                        <span *ngIf=\"product.availability === 'in-stock'\" class=\"compare-table__product-badge badge badge-success\">In Stock</span>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <th>Price</th>\r\n                    <td *ngFor=\"let product of products\">{{ product.price|currencyFormat }}</td>\r\n                </tr>\r\n                <tr>\r\n                    <th>Add To Cart</th>\r\n                    <td *ngFor=\"let product of products\">\r\n                        <button class=\"btn btn-primary\" (click)=\"addToCart(product)\" [ngClass]=\"{'btn-loading': addedToCartProducts.includes(product)}\">Add To Cart</button>\r\n                    </td>\r\n                </tr>\r\n                <tr *ngFor=\"let feature of features\">\r\n                    <th>{{ feature.name }}</th>\r\n                    <td *ngFor=\"let product of products\">{{ feature.values[product.id] || '—' }}</td>\r\n                </tr>\r\n                <tr>\r\n                    <th></th>\r\n                    <td *ngFor=\"let product of products\">\r\n                        <button class=\"btn btn-secondary btn-sm\" (click)=\"remove(product)\" [ngClass]=\"{'btn-loading': removedProducts.includes(product)}\">Remove</button>\r\n                    </td>\r\n                </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shop/pages/page-product/page-product.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shop/pages/page-product/page-product.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-page-header [breadcrumbs]=\"[\n    {label: 'Home',         url: '/'},\n    {label: 'Products', url: '/catalog'},\n    {label: product?.name,  url: ''}\n]\"></app-page-header>\n\n<ng-container *ngIf=\"layout !== 'sidebar'\">\n    <div class=\"block\">\n        <div class=\"container\">\n            <app-product [product]=\"product\" [layout]=\"layout\"></app-product>\n\n            <app-product-tabs [product]=\"product\"></app-product-tabs>\n        </div>\n    </div>\n\n    <app-block-products-carousel header=\"Related Products\" [products]=\"relatedProducts$|async\" [rows]=\"1\" layout=\"grid-5\"></app-block-products-carousel>\n</ng-container>\n\n<ng-container *ngIf=\"layout === 'sidebar'\">\n    <div class=\"container\">\n        <div class=\"shop-layout shop-layout--sidebar--{{ sidebarPosition }}\">\n            <div *ngIf=\"sidebarPosition === 'start'\" class=\"shop-layout__sidebar\">\n                <app-product-sidebar></app-product-sidebar>\n            </div>\n\n            <div class=\"shop-layout__content\">\n                <div class=\"block\">\n                    <app-product [product]=\"product\" [layout]=\"layout\"></app-product>\n\n                    <app-product-tabs [product]=\"product\" [withSidebar]=\"true\"></app-product-tabs>\n                </div>\n\n                <app-block-products-carousel header=\"Related Products\" [products]=\"relatedProducts$|async\" [rows]=\"1\" [withSidebar]=\"true\" layout=\"grid-4-sm\"></app-block-products-carousel>\n            </div>\n\n            <div *ngIf=\"sidebarPosition === 'end'\" class=\"shop-layout__sidebar\">\n                <app-product-sidebar></app-product-sidebar>\n            </div>\n        </div>\n    </div>\n</ng-container>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shop/pages/page-track-order/page-track-order.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shop/pages/page-track-order/page-track-order.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-page-header [breadcrumbs]=\"[\r\n    {label: 'Home',        url: '/'},\r\n    {label: 'Track Order', url: ''}\r\n]\"></app-page-header>\r\n\r\n<div class=\"block\">\r\n    <div class=\"container\">\r\n        <div class=\"row justify-content-center\">\r\n            <div class=\"col-xl-5 col-lg-6 col-md-8\">\r\n                <div class=\"card flex-grow-1 mb-0 mt-5\">\r\n                    <div class=\"card-body\">\r\n                        <div class=\"card-title text-center\"><h1>Track Order</h1></div>\r\n                        <p class=\"mb-4 pt-2\">\r\n                            Vestibulum sem odio, ullamcorper a imperdiet tincidunt sed magna felis, consequat a erat ut,\r\n                            rutrum finibus odio.\r\n                        </p>\r\n                        <form>\r\n                            <div class=\"form-group\">\r\n                                <label for=\"track-order-id\">Order ID</label>\r\n                                <input id=\"track-order-id\" type=\"text\" class=\"form-control\" placeholder=\"Order ID\">\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label for=\"track-email\">Email address</label>\r\n                                <input id=\"track-email\" type=\"email\" class=\"form-control\" placeholder=\"Email address\">\r\n                            </div>\r\n                            <div class=\"pt-3\">\r\n                                <button type=\"submit\" class=\"btn btn-primary btn-lg btn-block\">Track</button>\r\n                            </div>\r\n                        </form>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shop/pages/page-wishlist/page-wishlist.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shop/pages/page-wishlist/page-wishlist.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-page-header [header]=\"'Wish List'\" [breadcrumbs]=\"[\r\n    {label: 'Home',      url: '/'},\r\n    {label: 'Wish List', url: ''}\r\n]\"></app-page-header>\r\n\r\n<div class=\"block block-empty\" *ngIf=\"!(wishlist.items$|async).length\">\r\n    <div class=\"container\">\r\n        <div class=\"block-empty__body\">\r\n            <div class=\"block-empty__message\">Your wish list is empty!</div>\r\n            <div class=\"block-empty__actions\">\r\n                <a routerLink=\"/\" class=\"btn btn-primary btn-sm\">Continue</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"block\" *ngIf=\"(wishlist.items$|async).length\">\r\n    <div class=\"container\">\r\n        <table class=\"wishlist\">\r\n            <thead class=\"wishlist__head\">\r\n            <tr class=\"wishlist__row\">\r\n                <th class=\"wishlist__column wishlist__column--image\">Image</th>\r\n                <th class=\"wishlist__column wishlist__column--product\">Product</th>\r\n                <th class=\"wishlist__column wishlist__column--stock\">Stock Status</th>\r\n                <th class=\"wishlist__column wishlist__column--price\">Price</th>\r\n                <th class=\"wishlist__column wishlist__column--tocart\"></th>\r\n                <th class=\"wishlist__column wishlist__column--remove\"></th>\r\n            </tr>\r\n            </thead>\r\n            <tbody class=\"wishlist__body\">\r\n            <tr *ngFor=\"let product of wishlist.items$|async\" class=\"wishlist__row\">\r\n                <td class=\"wishlist__column wishlist__column--image\">\r\n                    <a [routerLink]=\"root.product(product)\" *ngIf=\"product.images?.length\"><img [src]=\"product.images[0]\" alt=\"\"></a>\r\n                </td>\r\n                <td class=\"wishlist__column wishlist__column--product\">\r\n                    <a [routerLink]=\"root.product(product)\" class=\"wishlist__product-name\">{{ product.name }}</a>\r\n                    <div class=\"wishlist__product-rating\">\r\n                        <app-rating [value]=\"product.rating\"></app-rating>\r\n                        <div class=\"wishlist__product-rating-legend\">{{ product.reviews }} Reviews</div>\r\n                    </div>\r\n                </td>\r\n                <td class=\"wishlist__column wishlist__column--stock\">\r\n                    <div class=\"badge badge-success\">In Stock</div>\r\n                </td>\r\n                <td class=\"wishlist__column wishlist__column--price\">{{ product.price|currencyFormat }}</td>\r\n                <td class=\"wishlist__column wishlist__column--tocart\">\r\n                    <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"addToCart(product)\" [ngClass]=\"{'btn-loading': addedToCartProducts.includes(product)}\">Add To Cart</button>\r\n                </td>\r\n                <td class=\"wishlist__column wishlist__column--remove\">\r\n                    <button type=\"button\" class=\"btn btn-light btn-sm btn-svg-icon\" (click)=\"remove(product)\" [ngClass]=\"{'btn-loading': removedProducts.includes(product)}\">\r\n                        <app-icon name=\"cross-12\" size=\"12\"></app-icon>\r\n                    </button>\r\n                </td>\r\n            </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./src/app/modules/shop/components/product-sidebar/product-sidebar.component.sass":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/shop/components/product-sidebar/product-sidebar.component.sass ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2hvcC9jb21wb25lbnRzL3Byb2R1Y3Qtc2lkZWJhci9wcm9kdWN0LXNpZGViYXIuY29tcG9uZW50LnNhc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/shop/components/product-sidebar/product-sidebar.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/shop/components/product-sidebar/product-sidebar.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ProductSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductSidebarComponent", function() { return ProductSidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_api_shop_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/api/shop.service */ "./src/app/shared/api/shop.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let ProductSidebarComponent = class ProductSidebarComponent {
    constructor(shop) {
        this.shop = shop;
    }
    ngOnInit() {
        this.categories$ = this.shop.getCategories(null, 1);
        this.bestsellers$ = this.shop.getBestsellers().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(x => x.slice(0, 5)));
    }
};
ProductSidebarComponent.ctorParameters = () => [
    { type: _shared_api_shop_service__WEBPACK_IMPORTED_MODULE_2__["ShopService"] }
];
ProductSidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-sidebar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./product-sidebar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shop/components/product-sidebar/product-sidebar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./product-sidebar.component.sass */ "./src/app/modules/shop/components/product-sidebar/product-sidebar.component.sass")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_api_shop_service__WEBPACK_IMPORTED_MODULE_2__["ShopService"]])
], ProductSidebarComponent);



/***/ }),

/***/ "./src/app/modules/shop/components/product-tabs/product-tabs.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/shop/components/product-tabs/product-tabs.component.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2hvcC9jb21wb25lbnRzL3Byb2R1Y3QtdGFicy9wcm9kdWN0LXRhYnMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/shop/components/product-tabs/product-tabs.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/modules/shop/components/product-tabs/product-tabs.component.ts ***!
  \********************************************************************************/
/*! exports provided: ProductTabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductTabsComponent", function() { return ProductTabsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _data_shop_product_spec__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../data/shop-product-spec */ "./src/data/shop-product-spec.ts");
/* harmony import */ var _data_shop_product_reviews__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../data/shop-product-reviews */ "./src/data/shop-product-reviews.ts");

//import { Component, Input } from '@angular/core';



let ProductTabsComponent = class ProductTabsComponent {
    constructor() {
        this.withSidebar = false;
        this.tab = 'description';
        this.specification = _data_shop_product_spec__WEBPACK_IMPORTED_MODULE_2__["specification"];
        this.reviews = _data_shop_product_reviews__WEBPACK_IMPORTED_MODULE_3__["reviews"];
    }
    set product(value) {
        this.dataProduct = value;
    }
    get product() {
        return this.dataProduct;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ProductTabsComponent.prototype, "withSidebar", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], ProductTabsComponent.prototype, "tab", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
], ProductTabsComponent.prototype, "product", null);
ProductTabsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-tabs',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./product-tabs.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shop/components/product-tabs/product-tabs.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./product-tabs.component.scss */ "./src/app/modules/shop/components/product-tabs/product-tabs.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ProductTabsComponent);



/***/ }),

/***/ "./src/app/modules/shop/components/products-view/products-view.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/modules/shop/components/products-view/products-view.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2hvcC9jb21wb25lbnRzL3Byb2R1Y3RzLXZpZXcvcHJvZHVjdHMtdmlldy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/shop/components/products-view/products-view.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/shop/components/products-view/products-view.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ProductsViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsViewComponent", function() { return ProductsViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_shop_sidebar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/shop-sidebar.service */ "./src/app/modules/shop/services/shop-sidebar.service.ts");
/* harmony import */ var _services_page_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/page-category.service */ "./src/app/modules/shop/services/page-category.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");







let ProductsViewComponent = class ProductsViewComponent {
    constructor(fb, sidebar, pageService) {
        this.fb = fb;
        this.sidebar = sidebar;
        this.pageService = pageService;
        this.layout = 'grid';
        this.grid = 'grid-3-sidebar';
        this.offcanvas = 'mobile';
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.filtersCount = 0;
    }
    ngOnInit() {
        this.listOptionsForm = this.fb.group({
            page: this.fb.control(this.pageService.page),
            limit: this.fb.control(this.pageService.limit),
            sort: this.fb.control(this.pageService.sort),
        });
        this.listOptionsForm.valueChanges.subscribe(value => {
            value.limit = parseFloat(value.limit);
            this.pageService.updateOptions(value);
        });
        this.pageService.list$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$)).subscribe(({ page, limit, sort, filterValues }) => {
            this.filtersCount = Object.keys(filterValues).length;
            this.listOptionsForm.setValue({ page, limit, sort }, { emitEvent: false });
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    setLayout(value) {
        this.layout = value;
    }
    resetFilters() {
        this.pageService.updateOptions({ filterValues: {} });
    }
};
ProductsViewComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _services_shop_sidebar_service__WEBPACK_IMPORTED_MODULE_2__["ShopSidebarService"] },
    { type: _services_page_category_service__WEBPACK_IMPORTED_MODULE_3__["PageCategoryService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], ProductsViewComponent.prototype, "layout", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], ProductsViewComponent.prototype, "grid", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], ProductsViewComponent.prototype, "offcanvas", void 0);
ProductsViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-products-view',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./products-view.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shop/components/products-view/products-view.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./products-view.component.scss */ "./src/app/modules/shop/components/products-view/products-view.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        _services_shop_sidebar_service__WEBPACK_IMPORTED_MODULE_2__["ShopSidebarService"],
        _services_page_category_service__WEBPACK_IMPORTED_MODULE_3__["PageCategoryService"]])
], ProductsViewComponent);



/***/ }),

/***/ "./src/app/modules/shop/components/shop-sidebar/shop-sidebar.component.sass":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/shop/components/shop-sidebar/shop-sidebar.component.sass ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2hvcC9jb21wb25lbnRzL3Nob3Atc2lkZWJhci9zaG9wLXNpZGViYXIuY29tcG9uZW50LnNhc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/shop/components/shop-sidebar/shop-sidebar.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/modules/shop/components/shop-sidebar/shop-sidebar.component.ts ***!
  \********************************************************************************/
/*! exports provided: ShopSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopSidebarComponent", function() { return ShopSidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_shop_sidebar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/shop-sidebar.service */ "./src/app/modules/shop/services/shop-sidebar.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _shared_functions_rxjs_fromMatchMedia__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/functions/rxjs/fromMatchMedia */ "./src/app/shared/functions/rxjs/fromMatchMedia.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _shared_api_shop_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/api/shop.service */ "./src/app/shared/api/shop.service.ts");








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
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.isOpen = false;
    }
    ngOnInit() {
        this.bestsellers$ = this.shop.getBestsellers().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(x => x.slice(0, 5)));
        this.sidebar.isOpen$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroy$)).subscribe(isOpen => {
            if (isOpen) {
                this.open();
            }
            else {
                this.close();
            }
        });
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["isPlatformBrowser"])(this.platformId)) {
            Object(_shared_functions_rxjs_fromMatchMedia__WEBPACK_IMPORTED_MODULE_5__["fromMatchMedia"])('(max-width: 991px)').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroy$)).subscribe(media => {
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
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["isPlatformBrowser"])(this.platformId)) {
            const bodyWidth = document.body.offsetWidth;
            document.body.style.overflow = 'hidden';
            document.body.style.paddingRight = (document.body.offsetWidth - bodyWidth) + 'px';
        }
        this.isOpen = true;
    }
    close() {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["isPlatformBrowser"])(this.platformId)) {
            document.body.style.overflow = '';
            document.body.style.paddingRight = '';
        }
        this.isOpen = false;
    }
};
ShopSidebarComponent.ctorParameters = () => [
    { type: _shared_api_shop_service__WEBPACK_IMPORTED_MODULE_7__["ShopService"] },
    { type: _services_shop_sidebar_service__WEBPACK_IMPORTED_MODULE_2__["ShopSidebarService"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"],] }] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], ShopSidebarComponent.prototype, "offcanvas", void 0);
ShopSidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-shop-sidebar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./shop-sidebar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shop/components/shop-sidebar/shop-sidebar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./shop-sidebar.component.sass */ "./src/app/modules/shop/components/shop-sidebar/shop-sidebar.component.sass")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_api_shop_service__WEBPACK_IMPORTED_MODULE_7__["ShopService"],
        _services_shop_sidebar_service__WEBPACK_IMPORTED_MODULE_2__["ShopSidebarService"], Object])
], ShopSidebarComponent);



/***/ }),

/***/ "./src/app/modules/shop/guards/checkout.guard.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/shop/guards/checkout.guard.ts ***!
  \*******************************************************/
/*! exports provided: CheckoutGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutGuard", function() { return CheckoutGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/cart.service */ "./src/app/shared/services/cart.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let CheckoutGuard = class CheckoutGuard {
    constructor(cart, router) {
        this.cart = cart;
        this.router = router;
    }
    canActivate(route, state) {
        return this.cart.quantity$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(quantity => {
            if (quantity) {
                return true;
            }
            this.router.navigateByUrl('/cart').then();
            return false;
        }));
    }
};
CheckoutGuard.ctorParameters = () => [
    { type: _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
CheckoutGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], CheckoutGuard);



/***/ }),

/***/ "./src/app/modules/shop/pages/page-cart/page-cart.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/modules/shop/pages/page-cart/page-cart.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2hvcC9wYWdlcy9wYWdlLWNhcnQvcGFnZS1jYXJ0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/shop/pages/page-cart/page-cart.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/shop/pages/page-cart/page-cart.component.ts ***!
  \*********************************************************************/
/*! exports provided: PageCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageCartComponent", function() { return PageCartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/services/cart.service */ "./src/app/shared/services/cart.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _shared_services_root_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/services/root.service */ "./src/app/shared/services/root.service.ts");







let PageCartComponent = class PageCartComponent {
    constructor(root, cart) {
        this.root = root;
        this.cart = cart;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.removedItems = [];
        this.items = [];
        this.updating = false;
    }
    ngOnInit() {
        this.cart.items$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(cartItems => cartItems.map(cartItem => {
            return {
                cartItem,
                quantity: cartItem.quantity,
                quantityControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](cartItem.quantity, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required)
            };
        }))).subscribe(items => this.items = items);
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    remove(item) {
        if (this.removedItems.includes(item)) {
            return;
        }
        this.removedItems.push(item);
        this.cart.remove(item).subscribe({ complete: () => this.removedItems = this.removedItems.filter(eachItem => eachItem !== item) });
    }
    update() {
        this.updating = true;
        this.cart.update(this.items
            .filter(item => item.quantityControl.value !== item.quantity)
            .map(item => ({
            item: item.cartItem,
            quantity: item.quantityControl.value
        }))).subscribe({ complete: () => this.updating = false });
    }
    needUpdate() {
        let needUpdate = false;
        for (const item of this.items) {
            if (!item.quantityControl.valid) {
                return false;
            }
            if (item.quantityControl.value !== item.quantity) {
                needUpdate = true;
            }
        }
        return needUpdate;
    }
};
PageCartComponent.ctorParameters = () => [
    { type: _shared_services_root_service__WEBPACK_IMPORTED_MODULE_6__["RootService"] },
    { type: _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"] }
];
PageCartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cart',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./page-cart.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shop/pages/page-cart/page-cart.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./page-cart.component.scss */ "./src/app/modules/shop/pages/page-cart/page-cart.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_root_service__WEBPACK_IMPORTED_MODULE_6__["RootService"],
        _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]])
], PageCartComponent);



/***/ }),

/***/ "./src/app/modules/shop/pages/page-category/page-category.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/shop/pages/page-category/page-category.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2hvcC9wYWdlcy9wYWdlLWNhdGVnb3J5L3BhZ2UtY2F0ZWdvcnkuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/shop/pages/page-category/page-category.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/shop/pages/page-category/page-category.component.ts ***!
  \*****************************************************************************/
/*! exports provided: PageCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageCategoryComponent", function() { return PageCategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_shop_sidebar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/shop-sidebar.service */ "./src/app/modules/shop/services/shop-sidebar.service.ts");
/* harmony import */ var _services_page_category_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/page-category.service */ "./src/app/modules/shop/services/page-category.service.ts");
/* harmony import */ var _shared_services_root_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/services/root.service */ "./src/app/shared/services/root.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _resolvers_products_list_resolver_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../resolvers/products-list-resolver.service */ "./src/app/modules/shop/resolvers/products-list-resolver.service.ts");
/* harmony import */ var _shared_api_shop_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/api/shop.service */ "./src/app/shared/api/shop.service.ts");
/* harmony import */ var _shared_helpers_filter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/helpers/filter */ "./src/app/shared/helpers/filter.ts");












let PageCategoryComponent = class PageCategoryComponent {
    constructor(root, router, route, pageService, shop, location) {
        this.root = root;
        this.router = router;
        this.route = route;
        this.pageService = pageService;
        this.shop = shop;
        this.location = location;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.columns = 3;
        this.viewMode = 'grid';
        this.sidebarPosition = 'start'; // For LTR scripts "start" is "left" and "end" is "right"
        this.breadcrumbs = [];
        this.route.data.subscribe(data => {
            this.breadcrumbs = [
                { label: 'Home', url: this.root.home() },
                { label: 'Shop', url: this.root.shop() },
            ];
            // If categorySlug is undefined then this is a root catalog page.
            if (!this.getCategorySlug()) {
                this.pageHeader = 'Shop';
            }
            else {
                this.pageHeader = data.category.name;
                this.breadcrumbs = this.breadcrumbs.concat([
                    ...data.category.parents.map(parent => ({ label: parent.name, url: this.root.category(parent) })),
                    { label: data.category.name, url: this.root.category(data.category) },
                ]);
            }
            this.pageService.setList(data.products);
            this.columns = 'columns' in data ? data.columns : this.columns;
            this.viewMode = 'viewMode' in data ? data.viewMode : this.viewMode;
            this.sidebarPosition = 'sidebarPosition' in data ? data.sidebarPosition : this.sidebarPosition;
        });
        this.route.queryParams.subscribe(queryParams => {
            this.pageService.setOptions(Object(_resolvers_products_list_resolver_service__WEBPACK_IMPORTED_MODULE_9__["parseProductsListParams"])(queryParams), false);
        });
        this.pageService.optionsChange$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["debounce"])(changedOptions => {
            return changedOptions.filterValues ? Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["timer"])(250) : Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(changedOptions);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["mergeMap"])(() => {
            this.updateUrl();
            this.pageService.setIsLoading(true);
            return this.shop.getProductsList(this.getCategorySlug(), this.pageService.options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.pageService.optionsChange$));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.destroy$)).subscribe(list => {
            this.pageService.setList(list);
            this.pageService.setIsLoading(false);
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    updateUrl() {
        const tree = this.router.parseUrl(this.router.url);
        tree.queryParams = this.getQueryParams();
        this.location.replaceState(tree.toString());
    }
    getQueryParams() {
        const params = {};
        const options = this.pageService.options;
        const filterValues = options.filterValues;
        if ('page' in options && options.page !== 1) {
            params.page = options.page;
        }
        if ('limit' in options && options.limit !== 12) {
            params.limit = options.limit;
        }
        if ('sort' in options && options.sort !== 'default') {
            params.sort = options.sort;
        }
        if ('filterValues' in options) {
            this.pageService.filters.forEach(filter => {
                if (!(filter.slug in filterValues)) {
                    return;
                }
                const filterValue = Object(_shared_helpers_filter__WEBPACK_IMPORTED_MODULE_11__["parseFilterValue"])(filter.type, filterValues[filter.slug]);
                switch (filter.type) {
                    case 'range':
                        if (filter.min !== filterValue[0] || filter.max !== filterValue[1]) {
                            params[`filter_${filter.slug}`] = `${filterValue[0]}-${filterValue[1]}`;
                        }
                        break;
                    case 'check':
                    case 'color':
                        if (filterValue.length > 0) {
                            params[`filter_${filter.slug}`] = filterValues[filter.slug];
                        }
                        break;
                    case 'radio':
                        if (filterValue !== filter.items[0].slug) {
                            params[`filter_${filter.slug}`] = filterValue;
                        }
                        break;
                }
            });
        }
        return params;
    }
    getCategorySlug() {
        return this.route.snapshot.params.categorySlug || this.route.snapshot.data.categorySlug || null;
    }
};
PageCategoryComponent.ctorParameters = () => [
    { type: _shared_services_root_service__WEBPACK_IMPORTED_MODULE_5__["RootService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_page_category_service__WEBPACK_IMPORTED_MODULE_4__["PageCategoryService"] },
    { type: _shared_api_shop_service__WEBPACK_IMPORTED_MODULE_10__["ShopService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"] }
];
PageCategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-grid',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./page-category.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shop/pages/page-category/page-category.component.html")).default,
        providers: [
            { provide: _services_page_category_service__WEBPACK_IMPORTED_MODULE_4__["PageCategoryService"], useClass: _services_page_category_service__WEBPACK_IMPORTED_MODULE_4__["PageCategoryService"] },
            { provide: _services_shop_sidebar_service__WEBPACK_IMPORTED_MODULE_3__["ShopSidebarService"], useClass: _services_shop_sidebar_service__WEBPACK_IMPORTED_MODULE_3__["ShopSidebarService"] },
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./page-category.component.scss */ "./src/app/modules/shop/pages/page-category/page-category.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_root_service__WEBPACK_IMPORTED_MODULE_5__["RootService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _services_page_category_service__WEBPACK_IMPORTED_MODULE_4__["PageCategoryService"],
        _shared_api_shop_service__WEBPACK_IMPORTED_MODULE_10__["ShopService"],
        _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"]])
], PageCategoryComponent);



/***/ }),

/***/ "./src/app/modules/shop/pages/page-checkout/page-checkout.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/shop/pages/page-checkout/page-checkout.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2hvcC9wYWdlcy9wYWdlLWNoZWNrb3V0L3BhZ2UtY2hlY2tvdXQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/shop/pages/page-checkout/page-checkout.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/shop/pages/page-checkout/page-checkout.component.ts ***!
  \*****************************************************************************/
/*! exports provided: PageCheckoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageCheckoutComponent", function() { return PageCheckoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/services/cart.service */ "./src/app/shared/services/cart.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_services_root_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/services/root.service */ "./src/app/shared/services/root.service.ts");







let PageCheckoutComponent = class PageCheckoutComponent {
    constructor(root, cart, route, router) {
        this.root = root;
        this.cart = cart;
        this.route = route;
        this.router = router;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    ngOnInit() {
        this.cart.quantity$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroy$)).subscribe(quantity => {
            if (!quantity) {
                this.router.navigate(['../cart'], { relativeTo: this.route }).then();
            }
        });
        this.amountpay = localStorage.getItem('cartTotal');
    }
    pay(price) {
        let options = {
        // your options
        };
        options = {
            "key": "rzp_test_YdtB3w9X200lvb",
            "amount": parseInt(price) * 100,
            "name": " Ajay & Company",
            "description": "Order #2443",
            "image": "http://phpdev.co.in/assets/img/logo.png",
            "handler": this.paymentCapture.bind(this),
            // "handler": function (response){
            //     console.log(response);
            //   
            // },
            // "prefill": {
            //     "name":  "anshu",
            //     "email": "ashsih@gmail.com",
            //     "contact": "8619089370",
            //   },
            "notes": {},
            "theme": {
                "color": "#F37254"
            }
        };
        var rzp1 = new Razorpay(options);
        rzp1.open();
    }
    paymentCapture(response) {
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
};
PageCheckoutComponent.ctorParameters = () => [
    { type: _shared_services_root_service__WEBPACK_IMPORTED_MODULE_6__["RootService"] },
    { type: _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
PageCheckoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-checkout',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./page-checkout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shop/pages/page-checkout/page-checkout.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./page-checkout.component.scss */ "./src/app/modules/shop/pages/page-checkout/page-checkout.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_root_service__WEBPACK_IMPORTED_MODULE_6__["RootService"],
        _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
], PageCheckoutComponent);



/***/ }),

/***/ "./src/app/modules/shop/pages/page-compare/page-compare.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/shop/pages/page-compare/page-compare.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2hvcC9wYWdlcy9wYWdlLWNvbXBhcmUvcGFnZS1jb21wYXJlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/shop/pages/page-compare/page-compare.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/shop/pages/page-compare/page-compare.component.ts ***!
  \***************************************************************************/
/*! exports provided: PageCompareComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageCompareComponent", function() { return PageCompareComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_services_compare_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/services/compare.service */ "./src/app/shared/services/compare.service.ts");
/* harmony import */ var _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/services/cart.service */ "./src/app/shared/services/cart.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _shared_services_root_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/services/root.service */ "./src/app/shared/services/root.service.ts");







let PageCompareComponent = class PageCompareComponent {
    constructor(root, compare, cart) {
        this.root = root;
        this.compare = compare;
        this.cart = cart;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.products = [];
        this.features = [];
        this.addedToCartProducts = [];
        this.removedProducts = [];
    }
    ngOnInit() {
        this.compare.items$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$)).subscribe(products => {
            const features = [];
            products.forEach(product => product.attributes.forEach(productAttribute => {
                let feature = features.find(eachFeature => eachFeature.name === productAttribute.name);
                if (!feature) {
                    feature = {
                        name: productAttribute.name,
                        values: {}
                    };
                    features.push(feature);
                }
                feature.values[product.id] = productAttribute.values.map(x => x.name).join(', ');
            }));
            this.products = products;
            this.features = features;
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    addToCart(product) {
        if (this.addedToCartProducts.includes(product)) {
            return;
        }
        this.addedToCartProducts.push(product);
        this.cart.add(product, 1).subscribe({
            complete: () => {
                this.addedToCartProducts = this.addedToCartProducts.filter(eachProduct => eachProduct !== product);
            }
        });
    }
    remove(product) {
        if (this.removedProducts.includes(product)) {
            return;
        }
        this.removedProducts.push(product);
        this.compare.remove(product).subscribe({
            complete: () => {
                this.removedProducts = this.removedProducts.filter(eachProduct => eachProduct !== product);
            }
        });
    }
};
PageCompareComponent.ctorParameters = () => [
    { type: _shared_services_root_service__WEBPACK_IMPORTED_MODULE_6__["RootService"] },
    { type: _shared_services_compare_service__WEBPACK_IMPORTED_MODULE_2__["CompareService"] },
    { type: _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"] }
];
PageCompareComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-compare',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./page-compare.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shop/pages/page-compare/page-compare.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./page-compare.component.scss */ "./src/app/modules/shop/pages/page-compare/page-compare.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_root_service__WEBPACK_IMPORTED_MODULE_6__["RootService"],
        _shared_services_compare_service__WEBPACK_IMPORTED_MODULE_2__["CompareService"],
        _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"]])
], PageCompareComponent);



/***/ }),

/***/ "./src/app/modules/shop/pages/page-product/page-product.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/shop/pages/page-product/page-product.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2hvcC9wYWdlcy9wYWdlLXByb2R1Y3QvcGFnZS1wcm9kdWN0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/shop/pages/page-product/page-product.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/shop/pages/page-product/page-product.component.ts ***!
  \***************************************************************************/
/*! exports provided: PageProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageProductComponent", function() { return PageProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_api_shop_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/api/shop.service */ "./src/app/shared/api/shop.service.ts");




let PageProductComponent = class PageProductComponent {
    constructor(shop, route) {
        this.shop = shop;
        this.route = route;
        this.layout = 'standard';
        this.sidebarPosition = 'start'; // For LTR scripts "start" is "left" and "end" is "right"
    }
    ngOnInit() {
        this.route.data.subscribe(data => {
            this.layout = data.layout || this.layout;
            this.sidebarPosition = data.sidebarPosition || this.sidebarPosition;
            this.product = data.product;
            this.relatedProducts$ = this.shop.getRelatedProducts(data.product);
        });
    }
};
PageProductComponent.ctorParameters = () => [
    { type: _shared_api_shop_service__WEBPACK_IMPORTED_MODULE_3__["ShopService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
PageProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page-product',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./page-product.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shop/pages/page-product/page-product.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./page-product.component.scss */ "./src/app/modules/shop/pages/page-product/page-product.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_api_shop_service__WEBPACK_IMPORTED_MODULE_3__["ShopService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], PageProductComponent);



/***/ }),

/***/ "./src/app/modules/shop/pages/page-track-order/page-track-order.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/shop/pages/page-track-order/page-track-order.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2hvcC9wYWdlcy9wYWdlLXRyYWNrLW9yZGVyL3BhZ2UtdHJhY2stb3JkZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/shop/pages/page-track-order/page-track-order.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/shop/pages/page-track-order/page-track-order.component.ts ***!
  \***********************************************************************************/
/*! exports provided: PageTrackOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageTrackOrderComponent", function() { return PageTrackOrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PageTrackOrderComponent = class PageTrackOrderComponent {
    constructor() { }
};
PageTrackOrderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-track-order',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./page-track-order.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shop/pages/page-track-order/page-track-order.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./page-track-order.component.scss */ "./src/app/modules/shop/pages/page-track-order/page-track-order.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PageTrackOrderComponent);



/***/ }),

/***/ "./src/app/modules/shop/pages/page-wishlist/page-wishlist.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/shop/pages/page-wishlist/page-wishlist.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2hvcC9wYWdlcy9wYWdlLXdpc2hsaXN0L3BhZ2Utd2lzaGxpc3QuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/shop/pages/page-wishlist/page-wishlist.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/shop/pages/page-wishlist/page-wishlist.component.ts ***!
  \*****************************************************************************/
/*! exports provided: PageWishlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageWishlistComponent", function() { return PageWishlistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_services_wishlist_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/services/wishlist.service */ "./src/app/shared/services/wishlist.service.ts");
/* harmony import */ var _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/services/cart.service */ "./src/app/shared/services/cart.service.ts");
/* harmony import */ var _shared_services_root_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/services/root.service */ "./src/app/shared/services/root.service.ts");





let PageWishlistComponent = class PageWishlistComponent {
    constructor(root, wishlist, cart) {
        this.root = root;
        this.wishlist = wishlist;
        this.cart = cart;
        this.addedToCartProducts = [];
        this.removedProducts = [];
    }
    addToCart(product) {
        if (this.addedToCartProducts.includes(product)) {
            return;
        }
        this.addedToCartProducts.push(product);
        this.cart.add(product, 1).subscribe({
            complete: () => {
                this.addedToCartProducts = this.addedToCartProducts.filter(eachProduct => eachProduct !== product);
            }
        });
    }
    remove(product) {
        if (this.removedProducts.includes(product)) {
            return;
        }
        this.removedProducts.push(product);
        this.wishlist.remove(product).subscribe({
            complete: () => {
                this.removedProducts = this.removedProducts.filter(eachProduct => eachProduct !== product);
            }
        });
    }
};
PageWishlistComponent.ctorParameters = () => [
    { type: _shared_services_root_service__WEBPACK_IMPORTED_MODULE_4__["RootService"] },
    { type: _shared_services_wishlist_service__WEBPACK_IMPORTED_MODULE_2__["WishlistService"] },
    { type: _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"] }
];
PageWishlistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-wishlist',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./page-wishlist.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shop/pages/page-wishlist/page-wishlist.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./page-wishlist.component.scss */ "./src/app/modules/shop/pages/page-wishlist/page-wishlist.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_root_service__WEBPACK_IMPORTED_MODULE_4__["RootService"],
        _shared_services_wishlist_service__WEBPACK_IMPORTED_MODULE_2__["WishlistService"],
        _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"]])
], PageWishlistComponent);



/***/ }),

/***/ "./src/app/modules/shop/resolvers/category-resolver.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/shop/resolvers/category-resolver.service.ts ***!
  \*********************************************************************/
/*! exports provided: CategoryResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryResolverService", function() { return CategoryResolverService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _shared_services_root_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/services/root.service */ "./src/app/shared/services/root.service.ts");
/* harmony import */ var _shared_api_shop_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/api/shop.service */ "./src/app/shared/api/shop.service.ts");








let CategoryResolverService = class CategoryResolverService {
    constructor(root, router, shop) {
        this.root = root;
        this.router = router;
        this.shop = shop;
    }
    resolve(route, state) {
        const categorySlug = route.params.categorySlug || route.data.categorySlug || null;
        if (categorySlug === null) {
            return null;
        }
        return this.shop.getCategory(categorySlug).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(error => {
            if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpErrorResponse"] && error.status === 404) {
                this.router.navigateByUrl(this.root.notFound()).then();
            }
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["EMPTY"];
        }));
    }
};
CategoryResolverService.ctorParameters = () => [
    { type: _shared_services_root_service__WEBPACK_IMPORTED_MODULE_6__["RootService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _shared_api_shop_service__WEBPACK_IMPORTED_MODULE_7__["ShopService"] }
];
CategoryResolverService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_root_service__WEBPACK_IMPORTED_MODULE_6__["RootService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _shared_api_shop_service__WEBPACK_IMPORTED_MODULE_7__["ShopService"]])
], CategoryResolverService);



/***/ }),

/***/ "./src/app/modules/shop/resolvers/product-resolver.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/shop/resolvers/product-resolver.service.ts ***!
  \********************************************************************/
/*! exports provided: ProductResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductResolverService", function() { return ProductResolverService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _shared_services_root_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/services/root.service */ "./src/app/shared/services/root.service.ts");
/* harmony import */ var _shared_api_shop_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/api/shop.service */ "./src/app/shared/api/shop.service.ts");








let ProductResolverService = class ProductResolverService {
    constructor(root, router, shop) {
        this.root = root;
        this.router = router;
        this.shop = shop;
    }
    resolve(route, state) {
        const productSlug = route.params.productSlug || route.data.productSlug;
        return this.shop.getProduct(productSlug).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(error => {
            if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpErrorResponse"] && error.status === 404) {
                this.router.navigate([this.root.notFound()]).then();
            }
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["EMPTY"];
        }));
    }
};
ProductResolverService.ctorParameters = () => [
    { type: _shared_services_root_service__WEBPACK_IMPORTED_MODULE_6__["RootService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _shared_api_shop_service__WEBPACK_IMPORTED_MODULE_7__["ShopService"] }
];
ProductResolverService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_root_service__WEBPACK_IMPORTED_MODULE_6__["RootService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _shared_api_shop_service__WEBPACK_IMPORTED_MODULE_7__["ShopService"]])
], ProductResolverService);



/***/ }),

/***/ "./src/app/modules/shop/resolvers/products-list-resolver.service.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modules/shop/resolvers/products-list-resolver.service.ts ***!
  \**************************************************************************/
/*! exports provided: parseProductsListParams, ProductsListResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseProductsListParams", function() { return parseProductsListParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsListResolverService", function() { return ProductsListResolverService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _shared_services_root_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/services/root.service */ "./src/app/shared/services/root.service.ts");
/* harmony import */ var _shared_api_shop_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/api/shop.service */ "./src/app/shared/api/shop.service.ts");








function parseProductsListParams(params) {
    const options = {};
    if (params.page) {
        options.page = parseFloat(params.page);
    }
    if (params.limit) {
        options.limit = parseFloat(params.limit);
    }
    if (params.sort) {
        options.sort = params.sort;
    }
    for (const param of Object.keys(params)) {
        const mr = param.match(/^filter_([-_A-Za-z0-9]+)$/);
        if (!mr) {
            continue;
        }
        const filterSlug = mr[1];
        if (!('filterValues' in options)) {
            options.filterValues = {};
        }
        options.filterValues[filterSlug] = params[param];
    }
    return options;
}
let ProductsListResolverService = class ProductsListResolverService {
    constructor(root, router, shop) {
        this.root = root;
        this.router = router;
        this.shop = shop;
    }
    resolve(route, state) {
        const categorySlug = route.params.categorySlug || route.data.categorySlug || null;
        return this.shop.getProductsList(categorySlug, parseProductsListParams(route.queryParams)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(error => {
            if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpErrorResponse"] && error.status === 404) {
                this.router.navigate([this.root.notFound()]).then();
            }
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["EMPTY"];
        }));
    }
};
ProductsListResolverService.ctorParameters = () => [
    { type: _shared_services_root_service__WEBPACK_IMPORTED_MODULE_6__["RootService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _shared_api_shop_service__WEBPACK_IMPORTED_MODULE_7__["ShopService"] }
];
ProductsListResolverService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_root_service__WEBPACK_IMPORTED_MODULE_6__["RootService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _shared_api_shop_service__WEBPACK_IMPORTED_MODULE_7__["ShopService"]])
], ProductsListResolverService);



/***/ }),

/***/ "./src/app/modules/shop/services/shop-sidebar.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/shop/services/shop-sidebar.service.ts ***!
  \***************************************************************/
/*! exports provided: ShopSidebarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopSidebarService", function() { return ShopSidebarService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let ShopSidebarService = class ShopSidebarService {
    constructor() {
        this.isOpenSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.isOpen$ = this.isOpenSubject$.asObservable();
    }
    open() {
        this.isOpenSubject$.next(true);
    }
    close() {
        this.isOpenSubject$.next(false);
    }
};
ShopSidebarService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ShopSidebarService);



/***/ }),

/***/ "./src/app/modules/shop/shop-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/shop/shop-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ShopRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopRoutingModule", function() { return ShopRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pages_page_category_page_category_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/page-category/page-category.component */ "./src/app/modules/shop/pages/page-category/page-category.component.ts");
/* harmony import */ var _pages_page_cart_page_cart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/page-cart/page-cart.component */ "./src/app/modules/shop/pages/page-cart/page-cart.component.ts");
/* harmony import */ var _pages_page_wishlist_page_wishlist_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/page-wishlist/page-wishlist.component */ "./src/app/modules/shop/pages/page-wishlist/page-wishlist.component.ts");
/* harmony import */ var _pages_page_checkout_page_checkout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/page-checkout/page-checkout.component */ "./src/app/modules/shop/pages/page-checkout/page-checkout.component.ts");
/* harmony import */ var _pages_page_compare_page_compare_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/page-compare/page-compare.component */ "./src/app/modules/shop/pages/page-compare/page-compare.component.ts");
/* harmony import */ var _pages_page_track_order_page_track_order_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/page-track-order/page-track-order.component */ "./src/app/modules/shop/pages/page-track-order/page-track-order.component.ts");
/* harmony import */ var _guards_checkout_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./guards/checkout.guard */ "./src/app/modules/shop/guards/checkout.guard.ts");
/* harmony import */ var _pages_page_product_page_product_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/page-product/page-product.component */ "./src/app/modules/shop/pages/page-product/page-product.component.ts");
/* harmony import */ var _resolvers_products_list_resolver_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./resolvers/products-list-resolver.service */ "./src/app/modules/shop/resolvers/products-list-resolver.service.ts");
/* harmony import */ var _resolvers_category_resolver_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./resolvers/category-resolver.service */ "./src/app/modules/shop/resolvers/category-resolver.service.ts");
/* harmony import */ var _resolvers_product_resolver_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./resolvers/product-resolver.service */ "./src/app/modules/shop/resolvers/product-resolver.service.ts");














const categoryPageData = {
    // Number of products per row. Possible values: 3, 4, 5.
    columns: 3,
    // Shop view mode by default. Possible values: 'grid', 'grid-with-features', 'list'.
    viewMode: 'grid',
    // Sidebar position. Possible values: 'start', 'end'.
    // It does not matter if the value of the 'columns' parameter is not 3.
    // For LTR scripts "start" is "left" and "end" is "right".
    sidebarPosition: 'start'
};
const categoryPageResolvers = {
    category: _resolvers_category_resolver_service__WEBPACK_IMPORTED_MODULE_12__["CategoryResolverService"],
    products: _resolvers_products_list_resolver_service__WEBPACK_IMPORTED_MODULE_11__["ProductsListResolverService"]
};
const routes = [
    {
        path: 'catalog',
        component: _pages_page_category_page_category_component__WEBPACK_IMPORTED_MODULE_3__["PageCategoryComponent"],
        data: categoryPageData,
        resolve: categoryPageResolvers,
    },
    {
        path: 'catalog/:categorySlug',
        component: _pages_page_category_page_category_component__WEBPACK_IMPORTED_MODULE_3__["PageCategoryComponent"],
        data: categoryPageData,
        resolve: categoryPageResolvers,
    },
    {
        path: 'products/:productSlug',
        component: _pages_page_product_page_product_component__WEBPACK_IMPORTED_MODULE_10__["PageProductComponent"],
        data: {
            // Product page layout. Possible values: 'standard', 'columnar', 'sidebar'.
            layout: 'standard',
            // Sidebar position. Possible values: 'start', 'end'.
            // It does not matter if the value of the 'layout' parameter is not 'sidebar'.
            // For LTR scripts "start" is "left" and "end" is "right".
            sidebarPosition: 'start'
        },
        resolve: {
            product: _resolvers_product_resolver_service__WEBPACK_IMPORTED_MODULE_13__["ProductResolverService"]
        },
    },
    {
        path: 'cart',
        pathMatch: 'full',
        component: _pages_page_cart_page_cart_component__WEBPACK_IMPORTED_MODULE_4__["PageCartComponent"]
    },
    {
        path: 'cart/checkout',
        component: _pages_page_checkout_page_checkout_component__WEBPACK_IMPORTED_MODULE_6__["PageCheckoutComponent"],
        canActivate: [_guards_checkout_guard__WEBPACK_IMPORTED_MODULE_9__["CheckoutGuard"]],
    },
    {
        path: 'wishlist',
        component: _pages_page_wishlist_page_wishlist_component__WEBPACK_IMPORTED_MODULE_5__["PageWishlistComponent"]
    },
    {
        path: 'compare',
        component: _pages_page_compare_page_compare_component__WEBPACK_IMPORTED_MODULE_7__["PageCompareComponent"]
    },
    {
        path: 'track-order',
        component: _pages_page_track_order_page_track_order_component__WEBPACK_IMPORTED_MODULE_8__["PageTrackOrderComponent"]
    },
    // --- START ---
    // The following routes are only needed to demonstrate possible layouts of some pages. You can delete them.
    {
        path: 'category-grid-4-columns-full',
        component: _pages_page_category_page_category_component__WEBPACK_IMPORTED_MODULE_3__["PageCategoryComponent"],
        data: {
            columns: 4,
            viewMode: 'grid',
            categorySlug: 'power-tools',
        },
        resolve: {
            category: _resolvers_category_resolver_service__WEBPACK_IMPORTED_MODULE_12__["CategoryResolverService"],
            products: _resolvers_products_list_resolver_service__WEBPACK_IMPORTED_MODULE_11__["ProductsListResolverService"]
        },
    },
    {
        path: 'category-grid-5-columns-full',
        component: _pages_page_category_page_category_component__WEBPACK_IMPORTED_MODULE_3__["PageCategoryComponent"],
        data: {
            columns: 5,
            viewMode: 'grid',
            categorySlug: 'power-tools',
        },
        resolve: {
            category: _resolvers_category_resolver_service__WEBPACK_IMPORTED_MODULE_12__["CategoryResolverService"],
            products: _resolvers_products_list_resolver_service__WEBPACK_IMPORTED_MODULE_11__["ProductsListResolverService"]
        },
    },
    {
        path: 'category-list',
        component: _pages_page_category_page_category_component__WEBPACK_IMPORTED_MODULE_3__["PageCategoryComponent"],
        data: {
            columns: 3,
            viewMode: 'list',
            sidebarPosition: 'start',
            categorySlug: 'power-tools',
        },
        resolve: {
            category: _resolvers_category_resolver_service__WEBPACK_IMPORTED_MODULE_12__["CategoryResolverService"],
            products: _resolvers_products_list_resolver_service__WEBPACK_IMPORTED_MODULE_11__["ProductsListResolverService"]
        },
    },
    {
        path: 'category-right-sidebar',
        component: _pages_page_category_page_category_component__WEBPACK_IMPORTED_MODULE_3__["PageCategoryComponent"],
        data: {
            columns: 3,
            viewMode: 'grid',
            sidebarPosition: 'end',
            categorySlug: 'power-tools',
        },
        resolve: {
            category: _resolvers_category_resolver_service__WEBPACK_IMPORTED_MODULE_12__["CategoryResolverService"],
            products: _resolvers_products_list_resolver_service__WEBPACK_IMPORTED_MODULE_11__["ProductsListResolverService"]
        },
    },
    {
        path: 'product-standard',
        component: _pages_page_product_page_product_component__WEBPACK_IMPORTED_MODULE_10__["PageProductComponent"],
        data: {
            layout: 'standard',
            sidebarPosition: 'start',
            productSlug: 'brandix-screwdriver-screw1500acc',
        },
        resolve: {
            product: _resolvers_product_resolver_service__WEBPACK_IMPORTED_MODULE_13__["ProductResolverService"]
        },
    },
    {
        path: 'product-columnar',
        component: _pages_page_product_page_product_component__WEBPACK_IMPORTED_MODULE_10__["PageProductComponent"],
        data: {
            layout: 'columnar',
            productSlug: 'brandix-screwdriver-screw1500acc',
        },
        resolve: {
            product: _resolvers_product_resolver_service__WEBPACK_IMPORTED_MODULE_13__["ProductResolverService"]
        },
    },
    {
        path: 'product-sidebar',
        component: _pages_page_product_page_product_component__WEBPACK_IMPORTED_MODULE_10__["PageProductComponent"],
        data: {
            layout: 'sidebar',
            sidebarPosition: 'start',
            productSlug: 'brandix-screwdriver-screw1500acc',
        },
        resolve: {
            product: _resolvers_product_resolver_service__WEBPACK_IMPORTED_MODULE_13__["ProductResolverService"]
        },
    },
];
let ShopRoutingModule = class ShopRoutingModule {
};
ShopRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ShopRoutingModule);



/***/ }),

/***/ "./src/app/modules/shop/shop.module.ts":
/*!*********************************************!*\
  !*** ./src/app/modules/shop/shop.module.ts ***!
  \*********************************************/
/*! exports provided: ShopModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopModule", function() { return ShopModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-owl-carousel-o */ "./node_modules/ngx-owl-carousel-o/fesm2015/ngx-owl-carousel-o.js");
/* harmony import */ var _blocks_blocks_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../blocks/blocks.module */ "./src/app/modules/blocks/blocks.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _shop_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shop-routing.module */ "./src/app/modules/shop/shop-routing.module.ts");
/* harmony import */ var _widgets_widgets_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../widgets/widgets.module */ "./src/app/modules/widgets/widgets.module.ts");
/* harmony import */ var _components_products_view_products_view_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/products-view/products-view.component */ "./src/app/modules/shop/components/products-view/products-view.component.ts");
/* harmony import */ var _components_product_tabs_product_tabs_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/product-tabs/product-tabs.component */ "./src/app/modules/shop/components/product-tabs/product-tabs.component.ts");
/* harmony import */ var _components_shop_sidebar_shop_sidebar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/shop-sidebar/shop-sidebar.component */ "./src/app/modules/shop/components/shop-sidebar/shop-sidebar.component.ts");
/* harmony import */ var _pages_page_cart_page_cart_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/page-cart/page-cart.component */ "./src/app/modules/shop/pages/page-cart/page-cart.component.ts");
/* harmony import */ var _pages_page_category_page_category_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/page-category/page-category.component */ "./src/app/modules/shop/pages/page-category/page-category.component.ts");
/* harmony import */ var _pages_page_checkout_page_checkout_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/page-checkout/page-checkout.component */ "./src/app/modules/shop/pages/page-checkout/page-checkout.component.ts");
/* harmony import */ var _pages_page_compare_page_compare_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/page-compare/page-compare.component */ "./src/app/modules/shop/pages/page-compare/page-compare.component.ts");
/* harmony import */ var _pages_page_product_page_product_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/page-product/page-product.component */ "./src/app/modules/shop/pages/page-product/page-product.component.ts");
/* harmony import */ var _pages_page_track_order_page_track_order_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/page-track-order/page-track-order.component */ "./src/app/modules/shop/pages/page-track-order/page-track-order.component.ts");
/* harmony import */ var _pages_page_wishlist_page_wishlist_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/page-wishlist/page-wishlist.component */ "./src/app/modules/shop/pages/page-wishlist/page-wishlist.component.ts");
/* harmony import */ var _components_product_sidebar_product_sidebar_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/product-sidebar/product-sidebar.component */ "./src/app/modules/shop/components/product-sidebar/product-sidebar.component.ts");


// modules (angular)


// modules (third-party)

// modules




// components



// pages








let ShopModule = class ShopModule {
};
ShopModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            // components
            _components_products_view_products_view_component__WEBPACK_IMPORTED_MODULE_9__["ProductsViewComponent"],
            _components_product_tabs_product_tabs_component__WEBPACK_IMPORTED_MODULE_10__["ProductTabsComponent"],
            _components_shop_sidebar_shop_sidebar_component__WEBPACK_IMPORTED_MODULE_11__["ShopSidebarComponent"],
            // pages
            _pages_page_cart_page_cart_component__WEBPACK_IMPORTED_MODULE_12__["PageCartComponent"],
            _pages_page_category_page_category_component__WEBPACK_IMPORTED_MODULE_13__["PageCategoryComponent"],
            _pages_page_checkout_page_checkout_component__WEBPACK_IMPORTED_MODULE_14__["PageCheckoutComponent"],
            _pages_page_compare_page_compare_component__WEBPACK_IMPORTED_MODULE_15__["PageCompareComponent"],
            _pages_page_product_page_product_component__WEBPACK_IMPORTED_MODULE_16__["PageProductComponent"],
            _pages_page_track_order_page_track_order_component__WEBPACK_IMPORTED_MODULE_17__["PageTrackOrderComponent"],
            _pages_page_wishlist_page_wishlist_component__WEBPACK_IMPORTED_MODULE_18__["PageWishlistComponent"],
            _components_product_sidebar_product_sidebar_component__WEBPACK_IMPORTED_MODULE_19__["ProductSidebarComponent"]
        ],
        imports: [
            // modules (angular)
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            // modules (third-party)
            ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_4__["CarouselModule"],
            // modules
            _blocks_blocks_module__WEBPACK_IMPORTED_MODULE_5__["BlocksModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _shop_routing_module__WEBPACK_IMPORTED_MODULE_7__["ShopRoutingModule"],
            _widgets_widgets_module__WEBPACK_IMPORTED_MODULE_8__["WidgetsModule"]
        ]
    })
], ShopModule);



/***/ }),

/***/ "./src/app/shared/functions/rxjs/fromMatchMedia.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/functions/rxjs/fromMatchMedia.ts ***!
  \*********************************************************/
/*! exports provided: fromMatchMedia */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromMatchMedia", function() { return fromMatchMedia; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");


function fromMatchMedia(query) {
    return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](observer => {
        const mediaQueryList = matchMedia(query);
        const onChange = () => observer.next(mediaQueryList);
        if (mediaQueryList.addEventListener) {
            mediaQueryList.addEventListener('change', onChange);
            return () => mediaQueryList.removeEventListener('change', onChange);
        }
        else {
            // noinspection JSDeprecatedSymbols
            mediaQueryList.addListener(onChange);
            // noinspection JSDeprecatedSymbols
            return () => mediaQueryList.removeListener(onChange);
        }
    });
}


/***/ }),

/***/ "./src/app/shared/helpers/filter.ts":
/*!******************************************!*\
  !*** ./src/app/shared/helpers/filter.ts ***!
  \******************************************/
/*! exports provided: parseFilterValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseFilterValue", function() { return parseFilterValue; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

function parseFilterValue(filterType, value) {
    switch (filterType) {
        case 'range':
            return value.split('-').map(x => parseFloat(x));
        case 'check':
        case 'color':
            return value.trim() === '' ? [] : value.split(',');
    }
    return value;
}


/***/ }),

/***/ "./src/data/shop-product-reviews.ts":
/*!******************************************!*\
  !*** ./src/data/shop-product-reviews.ts ***!
  \******************************************/
/*! exports provided: reviews */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reviews", function() { return reviews; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const reviews = [
    {
        avatar: 'assets/images/avatars/avatar-1.jpg',
        author: 'Samantha Smith',
        rating: 4,
        date: '27 May, 2018',
        text: 'Phasellus id mattis nulla. Mauris velit nisi, imperdiet vitae sodales in, maximus ut lectus. Vivamus commodo ' +
            'scelerisque lacus, at porttitor dui iaculis id. Curabitur imperdiet ultrices fermentum.'
    },
    {
        avatar: 'assets/images/avatars/avatar-2.jpg',
        author: 'Adam Taylor',
        rating: 3,
        date: '12 April, 2018',
        text: 'Aenean non lorem nisl. Duis tempor sollicitudin orci, eget tincidunt ex semper sit amet. Nullam neque justo, ' +
            'sodales congue feugiat ac, facilisis a augue. Donec tempor sapien et fringilla facilisis. Nam maximus consectetur ' +
            'diam. Nulla ut ex mollis, volutpat tellus vitae, accumsan ligula.'
    },
    {
        avatar: 'assets/images/avatars/avatar-3.jpg',
        author: 'Helena Garcia',
        rating: 5,
        date: '2 January, 2018',
        text: 'Duis ac lectus scelerisque quam blandit egestas. Pellentesque hendrerit eros laoreet suscipit ultrices.'
    }
];


/***/ }),

/***/ "./src/data/shop-product-spec.ts":
/*!***************************************!*\
  !*** ./src/data/shop-product-spec.ts ***!
  \***************************************/
/*! exports provided: specification */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "specification", function() { return specification; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const specification = [
    { name: 'General', features: [
            { name: 'Material', value: 'Aluminium, Plastic' },
            { name: 'Engine Type', value: 'Brushless' },
            { name: 'Battery Voltage', value: '18 V' },
            { name: 'Battery Type', value: 'Li-lon' },
            { name: 'Number of Speeds', value: '2' },
            { name: 'Charge Time', value: '1.08 h' },
            { name: 'Weight', value: '1.5 kg' }
        ] },
    { name: 'Dimensions', features: [
            { name: 'Length', value: '99 mm' },
            { name: 'Width', value: '207 mm' },
            { name: 'Height', value: '208 mm' }
        ] }
];


/***/ })

}]);
//# sourceMappingURL=modules-shop-shop-module-es2015.js.map