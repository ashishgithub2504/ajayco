(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-account-account-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/account/components/layout/layout.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/account/components/layout/layout.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-page-header [header]=\"'My Account'\" [breadcrumbs]=\"[\r\n    {label: 'Home',       url: '/'},\r\n    {label: 'My Account', url: ''}\r\n]\"></app-page-header>\r\n\r\n<div class=\"block\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-12 col-lg-3 d-flex\">\r\n                <div class=\"account-nav flex-grow-1\">\r\n                    <h4 class=\"account-nav__title\">Navigation</h4>\r\n                    <ul>\r\n                        <li *ngFor=\"let link of links\" class=\"account-nav__item\" routerLinkActive=\"account-nav__item--active\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n                            <a [routerLink]=\"link.url\">{{ link.label }}</a>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-12 col-lg-9 mt-4 mt-lg-0\">\r\n                <router-outlet></router-outlet>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/account/pages/page-addresses-list/page-addresses-list.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/account/pages/page-addresses-list/page-addresses-list.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"addresses-list\">\r\n    <a routerLink=\"./\" class=\"addresses-list__item addresses-list__item--new\">\r\n        <div class=\"addresses-list__plus\"></div>\r\n        <div class=\"btn btn-secondary btn-sm\">Add New</div>\r\n    </a>\r\n    <div class=\"addresses-list__divider\"></div>\r\n\r\n    <ng-container *ngFor=\"let address of addresses\">\r\n        <div class=\"addresses-list__item card address-card\">\r\n            <div class=\"address-card__badge\" *ngIf=\"address.default\">Default</div>\r\n            <div class=\"address-card__body\">\r\n                <div class=\"address-card__name\">{{ address.firstName + ' ' + address.lastName}}</div>\r\n                <div class=\"address-card__row\">\r\n                    {{ address.country }}<br>\r\n                    {{ address.postcode }}, {{ address.city }}<br>\r\n                    {{ address.address }}\r\n                </div>\r\n                <div class=\"address-card__row\">\r\n                    <div class=\"address-card__row-title\">Phone Number</div>\r\n                    <div class=\"address-card__row-content\">{{ address.phone }}</div>\r\n                </div>\r\n                <div class=\"address-card__row\">\r\n                    <div class=\"address-card__row-title\">Email Address</div>\r\n                    <div class=\"address-card__row-content\">{{ address.email }}</div>\r\n                </div>\r\n                <div class=\"address-card__footer\">\r\n                    <a routerLink=\"./\">Edit</a>&nbsp;&nbsp;\r\n                    <a routerLink=\"./\">Remove</a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"addresses-list__divider\"></div>\r\n    </ng-container>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/account/pages/page-dashboard/page-dashboard.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/account/pages/page-dashboard/page-dashboard.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"dashboard\">\r\n    <div class=\"dashboard__profile card profile-card\">\r\n        <div class=\"card-body profile-card__body\">\r\n            <div class=\"profile-card__avatar\">\r\n                <img src=\"./assets/images/avatars/avatar-3.jpg\" alt=\"\">\r\n            </div>\r\n            <div class=\"profile-card__name\">Helena Garcia</div>\r\n            <div class=\"profile-card__email\">stroyka@example.com</div>\r\n            <div class=\"profile-card__edit\">\r\n                <a routerLink=\"../profile\" class=\"btn btn-secondary btn-sm\">Edit Profile</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"dashboard__address card address-card address-card--featured\">\r\n        <div class=\"address-card__badge\" *ngIf=\"address.default\">Default Address</div>\r\n        <div class=\"address-card__body\">\r\n            <div class=\"address-card__name\">{{ address.firstName + ' ' + address.lastName}}</div>\r\n            <div class=\"address-card__row\">\r\n                {{ address.country }}<br>\r\n                {{ address.postcode }}, {{ address.city }}<br>\r\n                {{ address.address }}\r\n            </div>\r\n            <div class=\"address-card__row\">\r\n                <div class=\"address-card__row-title\">Phone Number</div>\r\n                <div class=\"address-card__row-content\">{{ address.phone }}</div>\r\n            </div>\r\n            <div class=\"address-card__row\">\r\n                <div class=\"address-card__row-title\">Email Address</div>\r\n                <div class=\"address-card__row-content\">{{ address.email }}</div>\r\n            </div>\r\n            <div class=\"address-card__footer\">\r\n                <a routerLink=\"./\">Edit Address</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"dashboard__orders card\">\r\n        <div class=\"card-header\">\r\n            <h5>Recent Orders</h5>\r\n        </div>\r\n        <div class=\"card-divider\"></div>\r\n        <div class=\"card-table\">\r\n            <div class=\"table-responsive-sm\">\r\n                <table>\r\n                    <thead>\r\n                    <tr>\r\n                        <th>Order</th>\r\n                        <th>Date</th>\r\n                        <th>Status</th>\r\n                        <th>Total</th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                    <tr *ngFor=\"let order of orders\">\r\n                        <td><a href=\"\">#{{ order.id }}</a></td>\r\n                        <td>{{ order.date }}</td>\r\n                        <td>{{ order.status }}</td>\r\n                        <td>{{ order.total }}</td>\r\n                    </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/account/pages/page-login/page-login.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/account/pages/page-login/page-login.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-page-header [header]=\"'My Account'\" [breadcrumbs]=\"[\r\n    {label: 'Home',       url: '/'},\r\n    {label: 'My Account', url: ''}\r\n]\"></app-page-header>\r\n\r\n<div class=\"block\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-6 d-flex\">\r\n                <div class=\"card flex-grow-1 mb-md-0\">\r\n                    <div class=\"card-body\">\r\n                        <h3 class=\"card-title\">Login</h3>\r\n                        <form>\r\n                            <div class=\"form-group\">\r\n                                <label>Email address</label>\r\n                                <input type=\"email\" class=\"form-control\" placeholder=\"Enter email\">\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label>Password</label>\r\n                                <input type=\"password\" class=\"form-control\" placeholder=\"Password\">\r\n                                <small class=\"form-text text-muted\">\r\n                                    <a href=\"\">Forgotten Password</a>\r\n                                </small>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <div class=\"form-check\">\r\n                                    <span class=\"form-check-input input-check\">\r\n                                        <span class=\"input-check__body\">\r\n                                            <input class=\"input-check__input\" type=\"checkbox\" id=\"login-remember\">\r\n                                            <span class=\"input-check__box\"></span>\r\n                                            <app-icon class=\"input-check__icon\" name=\"check-9x7\" size=\"9x7\"></app-icon>\r\n                                        </span>\r\n                                    </span>\r\n                                    <label class=\"form-check-label\" for=\"login-remember\">Remember Me</label>\r\n                                </div>\r\n                            </div>\r\n                            <button type=\"submit\" class=\"btn btn-primary mt-2 mt-md-3 mt-lg-4\">Login</button>\r\n                        </form>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-6 d-flex mt-4 mt-md-0\">\r\n                <div class=\"card flex-grow-1 mb-0\">\r\n                    <div class=\"card-body\">\r\n                        <h3 class=\"card-title\">Register</h3>\r\n                        <form>\r\n                            <div class=\"form-group\">\r\n                                <label>Email address</label>\r\n                                <input type=\"email\" class=\"form-control\" placeholder=\"Enter email\">\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label>Password</label>\r\n                                <input type=\"password\" class=\"form-control\" placeholder=\"Password\">\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label>Repeat Password</label>\r\n                                <input type=\"password\" class=\"form-control\" placeholder=\"Password\">\r\n                            </div>\r\n                            <button type=\"submit\" class=\"btn btn-primary mt-2 mt-md-3 mt-lg-4\">Register</button>\r\n                        </form>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/account/pages/page-orders-list/page-orders-list.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/account/pages/page-orders-list/page-orders-list.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\r\n    <div class=\"card-header\">\r\n        <h5>Order History</h5>\r\n    </div>\r\n    <div class=\"card-divider\"></div>\r\n    <div class=\"card-table\">\r\n        <div class=\"table-responsive-sm\">\r\n            <table>\r\n                <thead>\r\n                <tr>\r\n                    <th>Order</th>\r\n                    <th>Date</th>\r\n                    <th>Status</th>\r\n                    <th>Total</th>\r\n                </tr>\r\n                </thead>\r\n                <tbody>\r\n                <tr *ngFor=\"let order of orders\">\r\n                    <td><a href=\"\">#{{ order.id }}</a></td>\r\n                    <td>{{ order.date }}</td>\r\n                    <td>{{ order.status }}</td>\r\n                    <td>{{ order.total }}</td>\r\n                </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n    <div class=\"card-divider\"></div>\r\n    <div class=\"card-footer\">\r\n        <app-pagination [total]=\"3\"></app-pagination>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/account/pages/page-password/page-password.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/account/pages/page-password/page-password.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\r\n    <div class=\"card-header\">\r\n        <h5>Change Password</h5>\r\n    </div>\r\n    <div class=\"card-divider\"></div>\r\n    <div class=\"card-body\">\r\n        <div class=\"row no-gutters\">\r\n            <div class=\"col-12 col-lg-7 col-xl-6\">\r\n                <div class=\"form-group\">\r\n                    <label for=\"password-current\">Current Password</label>\r\n                    <input type=\"password\" class=\"form-control\" id=\"password-current\" placeholder=\"Current Password\">\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"password-new\">New Password</label>\r\n                    <input type=\"password\" class=\"form-control\" id=\"password-new\" placeholder=\"New Password\">\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"password-confirm\">Reenter New Password</label>\r\n                    <input type=\"password\" class=\"form-control\" id=\"password-confirm\" placeholder=\"Reenter New Password\">\r\n                </div>\r\n\r\n                <div class=\"form-group mt-5 mb-0\">\r\n                    <button class=\"btn btn-primary\">Change</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/account/pages/page-profile/page-profile.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/account/pages/page-profile/page-profile.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\r\n    <div class=\"card-header\">\r\n        <h5>Edit Profile</h5>\r\n    </div>\r\n    <div class=\"card-divider\"></div>\r\n    <div class=\"card-body\">\r\n        <div class=\"row no-gutters\">\r\n            <div class=\"col-12 col-lg-7 col-xl-6\">\r\n                <div class=\"form-group\">\r\n                    <label for=\"profile-first-name\">First Name</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"profile-first-name\" placeholder=\"First Name\">\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"profile-last-name\">Last Name</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"profile-last-name\" placeholder=\"Last Name\">\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"profile-email\">Email Address</label>\r\n                    <input type=\"email\" class=\"form-control\" id=\"profile-email\" placeholder=\"Email Address\">\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"profile-phone\">Phone Number</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"profile-phone\" placeholder=\"Phone Number\">\r\n                </div>\r\n\r\n                <div class=\"form-group mt-5 mb-0\">\r\n                    <button class=\"btn btn-primary\">Save</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./src/app/modules/account/account-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/account/account-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: AccountRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountRoutingModule", function() { return AccountRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pages_page_login_page_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/page-login/page-login.component */ "./src/app/modules/account/pages/page-login/page-login.component.ts");
/* harmony import */ var _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/layout/layout.component */ "./src/app/modules/account/components/layout/layout.component.ts");
/* harmony import */ var _pages_page_dashboard_page_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/page-dashboard/page-dashboard.component */ "./src/app/modules/account/pages/page-dashboard/page-dashboard.component.ts");
/* harmony import */ var _pages_page_orders_list_page_orders_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/page-orders-list/page-orders-list.component */ "./src/app/modules/account/pages/page-orders-list/page-orders-list.component.ts");
/* harmony import */ var _pages_page_addresses_list_page_addresses_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/page-addresses-list/page-addresses-list.component */ "./src/app/modules/account/pages/page-addresses-list/page-addresses-list.component.ts");
/* harmony import */ var _pages_page_profile_page_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/page-profile/page-profile.component */ "./src/app/modules/account/pages/page-profile/page-profile.component.ts");
/* harmony import */ var _pages_page_password_page_password_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/page-password/page-password.component */ "./src/app/modules/account/pages/page-password/page-password.component.ts");










const routes = [
    {
        path: '',
        component: _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_4__["LayoutComponent"],
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'dashboard'
            },
            {
                path: 'dashboard',
                component: _pages_page_dashboard_page_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["PageDashboardComponent"]
            },
            {
                path: 'profile',
                component: _pages_page_profile_page_profile_component__WEBPACK_IMPORTED_MODULE_8__["PageProfileComponent"]
            },
            {
                path: 'addresses',
                component: _pages_page_addresses_list_page_addresses_list_component__WEBPACK_IMPORTED_MODULE_7__["PageAddressesListComponent"]
            },
            {
                path: 'orders',
                component: _pages_page_orders_list_page_orders_list_component__WEBPACK_IMPORTED_MODULE_6__["PageOrdersListComponent"]
            },
            {
                path: 'password',
                component: _pages_page_password_page_password_component__WEBPACK_IMPORTED_MODULE_9__["PagePasswordComponent"]
            }
        ]
    },
    {
        path: 'login',
        component: _pages_page_login_page_login_component__WEBPACK_IMPORTED_MODULE_3__["PageLoginComponent"]
    }
];
let AccountRoutingModule = class AccountRoutingModule {
};
AccountRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AccountRoutingModule);



/***/ }),

/***/ "./src/app/modules/account/account.module.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/account/account.module.ts ***!
  \***************************************************/
/*! exports provided: AccountModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountModule", function() { return AccountModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _account_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./account-routing.module */ "./src/app/modules/account/account-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/layout/layout.component */ "./src/app/modules/account/components/layout/layout.component.ts");
/* harmony import */ var _pages_page_addresses_list_page_addresses_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/page-addresses-list/page-addresses-list.component */ "./src/app/modules/account/pages/page-addresses-list/page-addresses-list.component.ts");
/* harmony import */ var _pages_page_dashboard_page_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/page-dashboard/page-dashboard.component */ "./src/app/modules/account/pages/page-dashboard/page-dashboard.component.ts");
/* harmony import */ var _pages_page_login_page_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/page-login/page-login.component */ "./src/app/modules/account/pages/page-login/page-login.component.ts");
/* harmony import */ var _pages_page_orders_list_page_orders_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/page-orders-list/page-orders-list.component */ "./src/app/modules/account/pages/page-orders-list/page-orders-list.component.ts");
/* harmony import */ var _pages_page_password_page_password_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/page-password/page-password.component */ "./src/app/modules/account/pages/page-password/page-password.component.ts");
/* harmony import */ var _pages_page_profile_page_profile_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/page-profile/page-profile.component */ "./src/app/modules/account/pages/page-profile/page-profile.component.ts");


// modules (angular)

// modules


// components

// pages






let AccountModule = class AccountModule {
};
AccountModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            // components
            _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_5__["LayoutComponent"],
            // pages
            _pages_page_addresses_list_page_addresses_list_component__WEBPACK_IMPORTED_MODULE_6__["PageAddressesListComponent"],
            _pages_page_dashboard_page_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["PageDashboardComponent"],
            _pages_page_login_page_login_component__WEBPACK_IMPORTED_MODULE_8__["PageLoginComponent"],
            _pages_page_orders_list_page_orders_list_component__WEBPACK_IMPORTED_MODULE_9__["PageOrdersListComponent"],
            _pages_page_password_page_password_component__WEBPACK_IMPORTED_MODULE_10__["PagePasswordComponent"],
            _pages_page_profile_page_profile_component__WEBPACK_IMPORTED_MODULE_11__["PageProfileComponent"]
        ],
        imports: [
            // modules (angular)
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            // modules
            _account_routing_module__WEBPACK_IMPORTED_MODULE_3__["AccountRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
        ]
    })
], AccountModule);



/***/ }),

/***/ "./src/app/modules/account/components/layout/layout.component.sass":
/*!*************************************************************************!*\
  !*** ./src/app/modules/account/components/layout/layout.component.sass ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWNjb3VudC9jb21wb25lbnRzL2xheW91dC9sYXlvdXQuY29tcG9uZW50LnNhc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/account/components/layout/layout.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/account/components/layout/layout.component.ts ***!
  \***********************************************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LayoutComponent = class LayoutComponent {
    constructor() {
        this.links = [
            { label: 'Dashboard', url: './dashboard' },
            { label: 'Edit Profile', url: './profile' },
            { label: 'Order History', url: './orders' },
            { label: 'Addresses', url: './addresses' },
            { label: 'Password', url: './password' },
            { label: 'Logout', url: './login' }
        ];
    }
};
LayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-layout',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./layout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/account/components/layout/layout.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./layout.component.sass */ "./src/app/modules/account/components/layout/layout.component.sass")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], LayoutComponent);



/***/ }),

/***/ "./src/app/modules/account/pages/page-addresses-list/page-addresses-list.component.sass":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/account/pages/page-addresses-list/page-addresses-list.component.sass ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWNjb3VudC9wYWdlcy9wYWdlLWFkZHJlc3Nlcy1saXN0L3BhZ2UtYWRkcmVzc2VzLWxpc3QuY29tcG9uZW50LnNhc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/account/pages/page-addresses-list/page-addresses-list.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/account/pages/page-addresses-list/page-addresses-list.component.ts ***!
  \********************************************************************************************/
/*! exports provided: PageAddressesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageAddressesListComponent", function() { return PageAddressesListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _data_account_addresses__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../data/account-addresses */ "./src/data/account-addresses.ts");



let PageAddressesListComponent = class PageAddressesListComponent {
    constructor() {
        this.addresses = _data_account_addresses__WEBPACK_IMPORTED_MODULE_2__["addresses"];
    }
};
PageAddressesListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page-addresses-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./page-addresses-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/account/pages/page-addresses-list/page-addresses-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./page-addresses-list.component.sass */ "./src/app/modules/account/pages/page-addresses-list/page-addresses-list.component.sass")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PageAddressesListComponent);



/***/ }),

/***/ "./src/app/modules/account/pages/page-dashboard/page-dashboard.component.sass":
/*!************************************************************************************!*\
  !*** ./src/app/modules/account/pages/page-dashboard/page-dashboard.component.sass ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWNjb3VudC9wYWdlcy9wYWdlLWRhc2hib2FyZC9wYWdlLWRhc2hib2FyZC5jb21wb25lbnQuc2FzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/account/pages/page-dashboard/page-dashboard.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/account/pages/page-dashboard/page-dashboard.component.ts ***!
  \**********************************************************************************/
/*! exports provided: PageDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageDashboardComponent", function() { return PageDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _data_account_orders__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../data/account-orders */ "./src/data/account-orders.ts");
/* harmony import */ var _data_account_addresses__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../data/account-addresses */ "./src/data/account-addresses.ts");




let PageDashboardComponent = class PageDashboardComponent {
    constructor() {
        this.address = _data_account_addresses__WEBPACK_IMPORTED_MODULE_3__["addresses"][0];
        this.orders = _data_account_orders__WEBPACK_IMPORTED_MODULE_2__["orders"].slice(0, 3);
    }
};
PageDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page-dashboard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./page-dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/account/pages/page-dashboard/page-dashboard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./page-dashboard.component.sass */ "./src/app/modules/account/pages/page-dashboard/page-dashboard.component.sass")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PageDashboardComponent);



/***/ }),

/***/ "./src/app/modules/account/pages/page-login/page-login.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/modules/account/pages/page-login/page-login.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWNjb3VudC9wYWdlcy9wYWdlLWxvZ2luL3BhZ2UtbG9naW4uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/account/pages/page-login/page-login.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modules/account/pages/page-login/page-login.component.ts ***!
  \**************************************************************************/
/*! exports provided: PageLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageLoginComponent", function() { return PageLoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PageLoginComponent = class PageLoginComponent {
    constructor() { }
};
PageLoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./page-login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/account/pages/page-login/page-login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./page-login.component.scss */ "./src/app/modules/account/pages/page-login/page-login.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PageLoginComponent);



/***/ }),

/***/ "./src/app/modules/account/pages/page-orders-list/page-orders-list.component.sass":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/account/pages/page-orders-list/page-orders-list.component.sass ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWNjb3VudC9wYWdlcy9wYWdlLW9yZGVycy1saXN0L3BhZ2Utb3JkZXJzLWxpc3QuY29tcG9uZW50LnNhc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/account/pages/page-orders-list/page-orders-list.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/account/pages/page-orders-list/page-orders-list.component.ts ***!
  \**************************************************************************************/
/*! exports provided: PageOrdersListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageOrdersListComponent", function() { return PageOrdersListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _data_account_orders__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../data/account-orders */ "./src/data/account-orders.ts");



let PageOrdersListComponent = class PageOrdersListComponent {
    constructor() {
        this.orders = _data_account_orders__WEBPACK_IMPORTED_MODULE_2__["orders"];
    }
};
PageOrdersListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page-orders-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./page-orders-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/account/pages/page-orders-list/page-orders-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./page-orders-list.component.sass */ "./src/app/modules/account/pages/page-orders-list/page-orders-list.component.sass")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PageOrdersListComponent);



/***/ }),

/***/ "./src/app/modules/account/pages/page-password/page-password.component.sass":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/account/pages/page-password/page-password.component.sass ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWNjb3VudC9wYWdlcy9wYWdlLXBhc3N3b3JkL3BhZ2UtcGFzc3dvcmQuY29tcG9uZW50LnNhc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/account/pages/page-password/page-password.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/modules/account/pages/page-password/page-password.component.ts ***!
  \********************************************************************************/
/*! exports provided: PagePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagePasswordComponent", function() { return PagePasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PagePasswordComponent = class PagePasswordComponent {
    constructor() { }
};
PagePasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page-password',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./page-password.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/account/pages/page-password/page-password.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./page-password.component.sass */ "./src/app/modules/account/pages/page-password/page-password.component.sass")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PagePasswordComponent);



/***/ }),

/***/ "./src/app/modules/account/pages/page-profile/page-profile.component.sass":
/*!********************************************************************************!*\
  !*** ./src/app/modules/account/pages/page-profile/page-profile.component.sass ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWNjb3VudC9wYWdlcy9wYWdlLXByb2ZpbGUvcGFnZS1wcm9maWxlLmNvbXBvbmVudC5zYXNzIn0= */");

/***/ }),

/***/ "./src/app/modules/account/pages/page-profile/page-profile.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/account/pages/page-profile/page-profile.component.ts ***!
  \******************************************************************************/
/*! exports provided: PageProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageProfileComponent", function() { return PageProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PageProfileComponent = class PageProfileComponent {
    constructor() { }
};
PageProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./page-profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/account/pages/page-profile/page-profile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./page-profile.component.sass */ "./src/app/modules/account/pages/page-profile/page-profile.component.sass")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PageProfileComponent);



/***/ }),

/***/ "./src/data/account-addresses.ts":
/*!***************************************!*\
  !*** ./src/data/account-addresses.ts ***!
  \***************************************/
/*! exports provided: addresses */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addresses", function() { return addresses; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const addresses = [
    {
        default: true,
        firstName: 'Helena',
        lastName: 'Garcia',
        email: 'stroyka@example.com',
        phone: '38 972 588-42-36',
        country: 'Random Federation',
        city: 'Moscow',
        postcode: '115302',
        address: 'ul. Varshavskaya, 15-2-178'
    },
    {
        default: false,
        firstName: 'Jupiter',
        lastName: 'Saturnov',
        email: 'stroyka@example.com',
        phone: 'ZX 971 972-57-26',
        country: 'RandomLand',
        city: 'MarsGrad',
        postcode: '4b4f53',
        address: 'Sun Orbit, 43.3241-85.239'
    }
];


/***/ }),

/***/ "./src/data/account-orders.ts":
/*!************************************!*\
  !*** ./src/data/account-orders.ts ***!
  \************************************/
/*! exports provided: orders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "orders", function() { return orders; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const orders = [
    {
        id: 8132,
        date: '02 April, 2019',
        status: 'Pending',
        total: '$2,719.00 for 5 item(s)'
    },
    {
        id: 7592,
        date: '28 March, 2019',
        status: 'Pending',
        total: '$374.00 for 3 item(s)'
    },
    {
        id: 7192,
        date: '15 March, 2019',
        status: 'Shipped',
        total: '$791.00 for 4 item(s)'
    },
    {
        id: 6321,
        date: '28 February, 2019',
        status: 'Completed',
        total: '$57.00 for 1 item(s)'
    },
    {
        id: 6001,
        date: '21 February, 2019',
        status: 'Completed',
        total: '$252.00 for 2 item(s)'
    },
    {
        id: 4120,
        date: '11 December, 2018',
        status: 'Completed',
        total: '$3,978.00 for 7 item(s)'
    }
];


/***/ })

}]);
//# sourceMappingURL=modules-account-account-module-es2015.js.map