(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-site-site-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/site/pages/page-about-us/page-about-us.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/site/pages/page-about-us/page-about-us.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"block about-us\">\r\n    <div class=\"about-us__image\"></div>\r\n    <div class=\"container\">\r\n        <div class=\"row justify-content-center\">\r\n            <div class=\"col-12 col-xl-10\">\r\n                <div class=\"about-us__body\" *ngIf=\"resp\">\r\n                    <h1 class=\"about-us__title\">{{resp.title}}</h1>\r\n                    <div class=\"about-us__text typography\" [innerHTML]=\"resp.description\">\r\n                    </div>\r\n                    <div class=\"about-us__team\">\r\n                        <h2 class=\"about-us__team-title\">Meat Our Team</h2>\r\n                        <div class=\"about-us__team-subtitle text-muted\">Want to work in our friendly team?<br><a routerLink=\"../contact-us\">Contact us</a> and we will consider your candidacy.</div>\r\n                        <div class=\"about-us__teammates teammates\">\r\n                            <owl-carousel-o [options]=\"carouselOptions\" appOwlPreventClick>\r\n                                <ng-template carouselSlide>\r\n                                    <div class=\"teammates__item teammate\">\r\n                                        <div class=\"teammate__avatar\">\r\n                                            <img src=\"assets/images/teammates/teammate-1.jpg\" alt=\"\">\r\n                                        </div>\r\n                                        <div class=\"teammate__name\">Michael Russo</div>\r\n                                        <div class=\"teammate__position text-muted\">Chief Executive Officer</div>\r\n                                    </div>\r\n                                </ng-template>\r\n                                <ng-template carouselSlide>\r\n                                    <div class=\"teammates__item teammate\">\r\n                                        <div class=\"teammate__avatar\">\r\n                                            <img src=\"assets/images/teammates/teammate-2.jpg\" alt=\"\">\r\n                                        </div>\r\n                                        <div class=\"teammate__name\">Katherine Miller</div>\r\n                                        <div class=\"teammate__position text-muted\">Marketing Officer</div>\r\n                                    </div>\r\n                                </ng-template>\r\n                                <ng-template carouselSlide>\r\n                                    <div class=\"teammates__item teammate\">\r\n                                        <div class=\"teammate__avatar\">\r\n                                            <img src=\"assets/images/teammates/teammate-3.jpg\" alt=\"\">\r\n                                        </div>\r\n                                        <div class=\"teammate__name\">Anthony Harris</div>\r\n                                        <div class=\"teammate__position text-muted\">Finance Director</div>\r\n                                    </div>\r\n                                </ng-template>\r\n                            </owl-carousel-o>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/site/pages/page-components/page-components.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/site/pages/page-components/page-components.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-page-header [header]=\"'Components'\" [breadcrumbs]=\"[\r\n    {label: 'Home',       url: '../../'},\r\n    {label: 'Components', url: ''}\r\n]\"></app-page-header>\r\n\r\n<div class=\"block\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-12\">\r\n                <app-alert *ngIf=\"showAlert\" class=\"mb-3\" type=\"primary\" size=\"lg\" [dismissible]=\"true\" (close)=\"showAlert = false\">\r\n                    A simple large alert with <a href=\"\">an example link</a>. Give it a click if you like.\r\n                </app-alert>\r\n            </div>\r\n            <div class=\"col-12 col-md-6\">\r\n                <app-alert class=\"mb-3\" type=\"info\">A simple alert with <a href=\"\">an example link</a>. Give it a click if you like.</app-alert>\r\n                <app-alert class=\"mb-3\" type=\"primary\">A simple alert with <a href=\"\">an example link</a>. Give it a click if you like.</app-alert>\r\n                <app-alert class=\"mb-3 mb-md-5\" type=\"secondary\">A simple alert with <a href=\"\">an example link</a>. Give it a click if you like.</app-alert>\r\n            </div>\r\n            <div class=\"col-12 col-md-6\">\r\n                <app-alert class=\"mb-3\" type=\"success\">A simple alert with <a href=\"\">an example link</a>. Give it a click if you like.</app-alert>\r\n                <app-alert class=\"mb-3\" type=\"danger\">A simple alert with <a href=\"\">an example link</a>. Give it a click if you like.</app-alert>\r\n                <app-alert class=\"mb-3 mb-md-5\" type=\"warning\">A simple alert with <a href=\"\">an example link</a>. Give it a click if you like.</app-alert>\r\n            </div>\r\n        </div>\r\n\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-4\">\r\n                <p><strong>Text Field</strong></p>\r\n\r\n                <div class=\"form-group\">\r\n                    <label>Default</label>\r\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Placeholder\">\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label>Readonly</label>\r\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Placeholder\" readonly>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label>Disabled</label>\r\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Placeholder\" disabled>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label>Success</label>\r\n                    <input type=\"text\" class=\"form-control is-valid\" placeholder=\"Placeholder\">\r\n                    <div class=\"valid-feedback\">Example invalid feedback text</div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label>Error</label>\r\n                    <input type=\"text\" class=\"form-control is-invalid\" placeholder=\"Placeholder\">\r\n                    <div class=\"invalid-feedback\">Example invalid feedback text</div>\r\n                </div>\r\n\r\n                <p class=\"mt-5\"><strong>Text Field Sizes</strong></p>\r\n\r\n                <div class=\"form-group\">\r\n                    <input type=\"text\" class=\"form-control form-control-lg\" placeholder=\"Large\">\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Normal\">\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <input type=\"text\" class=\"form-control form-control-sm\" placeholder=\"Small\">\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-lg-4\">\r\n                <p><strong>Select</strong></p>\r\n\r\n                <div class=\"form-group\">\r\n                    <label>Default</label>\r\n                    <select class=\"form-control\">\r\n                        <option>Select value...</option>\r\n                    </select>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label>Disabled</label>\r\n                    <select class=\"form-control\" disabled>\r\n                        <option>Select value...</option>\r\n                    </select>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label>Success</label>\r\n                    <select class=\"form-control is-valid\">\r\n                        <option>Select value...</option>\r\n                    </select>\r\n                    <div class=\"valid-feedback\">Example invalid feedback text</div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label>Error</label>\r\n                    <select class=\"form-control is-invalid\">\r\n                        <option>Select value...</option>\r\n                    </select>\r\n                    <div class=\"invalid-feedback\">Example invalid feedback text</div>\r\n                </div>\r\n\r\n                <p class=\"mt-5\"><strong>Text Field Sizes</strong></p>\r\n\r\n                <div class=\"form-group\">\r\n                    <select class=\"form-control form-control-lg\">\r\n                        <option>Large...</option>\r\n                    </select>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <select class=\"form-control\">\r\n                        <option>Large...</option>\r\n                    </select>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <select class=\"form-control form-control-sm\">\r\n                        <option>Large...</option>\r\n                    </select>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-lg-4\">\r\n                <p><strong>Textarea</strong></p>\r\n\r\n                <div class=\"form-group\">\r\n                    <label>Default</label>\r\n                    <textarea rows=\"3\" class=\"form-control\" placeholder=\"Placeholder\"></textarea>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label>Readonly</label>\r\n                    <textarea rows=\"3\" class=\"form-control\" placeholder=\"Placeholder\" readonly></textarea>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label>Disabled</label>\r\n                    <textarea rows=\"3\" class=\"form-control\" placeholder=\"Placeholder\" disabled></textarea>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label>Success</label>\r\n                    <textarea rows=\"3\" class=\"form-control is-valid\" placeholder=\"Placeholder\"></textarea>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label>Error</label>\r\n                    <textarea rows=\"3\" class=\"form-control is-invalid\" placeholder=\"Placeholder\"></textarea>\r\n                </div>\r\n\r\n                <p class=\"mt-5\"><strong>Textarea Sizes</strong></p>\r\n                <div class=\"form-group\">\r\n                    <textarea rows=\"3\" class=\"form-control form-control-lg\" placeholder=\"Large\"></textarea>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <textarea rows=\"3\" class=\"form-control\" placeholder=\"Normal\"></textarea>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <textarea rows=\"3\" class=\"form-control form-control-sm\" placeholder=\"Small\"></textarea>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div *ngFor=\"let style of ['primary', 'secondary', 'light']\" class=\"col-lg-4\">\r\n                <p><strong>{{ style|titlecase }} Buttons</strong></p>\r\n\r\n                <div class=\"form-group\">\r\n                    <button class=\"btn btn-{{ style }} btn-xl\">Extra Large</button>{{ ' ' }}\r\n                    <button class=\"btn btn-{{ style }} btn-xl btn-svg-icon\">\r\n                        <app-icon name=\"quickview-16\" size=\"16\"></app-icon>\r\n                    </button>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <button class=\"btn btn-{{ style }} btn-lg\">Button Large</button>{{ ' ' }}\r\n                    <button class=\"btn btn-{{ style }} btn-lg btn-svg-icon\">\r\n                        <app-icon name=\"quickview-16\" size=\"16\"></app-icon>\r\n                    </button>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <button class=\"btn btn-{{ style }}\">Button Normal</button>{{ ' ' }}\r\n                    <button class=\"btn btn-{{ style }} btn-svg-icon\">\r\n                        <app-icon name=\"quickview-16\" size=\"16\"></app-icon>\r\n                    </button>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <button class=\"btn btn-{{ style }} btn-sm\">Button Small</button>{{ ' ' }}\r\n                    <button class=\"btn btn-{{ style }} btn-sm btn-svg-icon\">\r\n                        <app-icon name=\"quickview-16\" size=\"16\"></app-icon>\r\n                    </button>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <button class=\"btn btn-{{ style }} btn-xs\">Extra Small</button>{{ ' ' }}\r\n                    <button class=\"btn btn-{{ style }} btn-xs btn-svg-icon\">\r\n                        <app-icon name=\"quickview-16\" size=\"16\"></app-icon>\r\n                    </button>\r\n                </div>\r\n\r\n                <p><strong>Loading State</strong></p>\r\n\r\n                <div class=\"form-group\">\r\n                    <button class=\"btn btn-{{ style }} btn-loading btn-xl\">Extra Large</button>{{ ' ' }}\r\n                    <button class=\"btn btn-{{ style }} btn-loading btn-xl btn-svg-icon\">\r\n                        <app-icon name=\"quickview-16\" size=\"16\"></app-icon>\r\n                    </button>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <button class=\"btn btn-{{ style }} btn-loading btn-lg\">Button Large</button>{{ ' ' }}\r\n                    <button class=\"btn btn-{{ style }} btn-loading btn-lg btn-svg-icon\">\r\n                        <app-icon name=\"quickview-16\" size=\"16\"></app-icon>\r\n                    </button>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <button class=\"btn btn-{{ style }} btn-loading\">Button Normal</button>{{ ' ' }}\r\n                    <button class=\"btn btn-{{ style }} btn-loading btn-svg-icon\">\r\n                        <app-icon name=\"quickview-16\" size=\"16\"></app-icon>\r\n                    </button>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <button class=\"btn btn-{{ style }} btn-loading btn-sm\">Button Small</button>{{ ' ' }}\r\n                    <button class=\"btn btn-{{ style }} btn-loading btn-sm btn-svg-icon\">\r\n                        <app-icon name=\"quickview-16\" size=\"16\"></app-icon>\r\n                    </button>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <button class=\"btn btn-{{ style }} btn-loading btn-xs\">Extra Small</button>{{ ' ' }}\r\n                    <button class=\"btn btn-{{ style }} btn-loading btn-xs btn-svg-icon\">\r\n                        <app-icon name=\"quickview-16\" size=\"16\"></app-icon>\r\n                    </button>\r\n                </div>\r\n\r\n                <p><strong>Disabled State</strong></p>\r\n\r\n                <div class=\"form-group\">\r\n                    <button class=\"btn btn-{{ style }} btn-lg\" disabled>Button Large</button>{{ ' ' }}\r\n                    <button class=\"btn btn-{{ style }} btn-lg btn-svg-icon\" disabled>\r\n                        <app-icon name=\"quickview-16\" size=\"16\"></app-icon>\r\n                    </button>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <button class=\"btn btn-{{ style }}\" disabled>Button Normal</button>{{ ' ' }}\r\n                    <button class=\"btn btn-{{ style }} btn-svg-icon\" disabled>\r\n                        <app-icon name=\"quickview-16\" size=\"16\"></app-icon>\r\n                    </button>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <button class=\"btn btn-{{ style }} btn-sm\" disabled>Button Small</button>{{ ' ' }}\r\n                    <button class=\"btn btn-{{ style }} btn-sm btn-svg-icon\" disabled>\r\n                        <app-icon name=\"quickview-16\" size=\"16\"></app-icon>\r\n                    </button>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <button class=\"btn btn-{{ style }} btn-xs\" disabled>Extra Small</button>{{ ' ' }}\r\n                    <button class=\"btn btn-{{ style }} btn-xs btn-svg-icon\" disabled>\r\n                        <app-icon name=\"quickview-16\" size=\"16\"></app-icon>\r\n                    </button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/site/pages/page-contact-us-alt/page-contact-us-alt.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/site/pages/page-contact-us-alt/page-contact-us-alt.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-page-header [header]=\"'Contact Us'\" [breadcrumbs]=\"[\r\n    {label: 'Home',       url: '../../'},\r\n    {label: 'Contact Us', url: ''}\r\n]\"></app-page-header>\r\n\r\n<div class=\"block\">\r\n    <div class=\"container\">\r\n        <div class=\"card mb-0 contact-us\">\r\n            <div class=\"contact-us__map\">\r\n                <iframe src='https://maps.google.com/maps?q=Holbrook-Palmer%20Park&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed'\r\n                        frameborder='0' scrolling='no' marginheight='0' marginwidth='0'></iframe>\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <div class=\"contact-us__container\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-12 col-lg-6 pb-4 pb-lg-0\">\r\n                            <h4 class=\"contact-us__header card-title\">Our Address</h4>\r\n\r\n                            <div class=\"contact-us__address\">\r\n                                <p>\r\n                                    715 Fake Ave, Apt. 34, New York, NY 10021 USA<br>\r\n                                    Email: stroyka@example.com<br>\r\n                                    Phone Number: +1 754 000-00-00\r\n                                </p>\r\n\r\n                                <p>\r\n                                    <strong>Opening Hours</strong><br>\r\n                                    Monday to Friday: 8am-8pm<br>\r\n                                    Saturday: 8am-6pm<br>\r\n                                    Sunday: 10am-4pm\r\n                                </p>\r\n\r\n                                <p>\r\n\r\n                                    <strong>Comment</strong><br>\r\n                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur suscipit suscipit mi, non\r\n                                    tempor nulla finibus eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.\r\n                                </p>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"col-12 col-lg-6\">\r\n                            <h4 class=\"contact-us__header card-title\">Leave us a Message</h4>\r\n\r\n                            <form>\r\n                                <div class=\"form-row\">\r\n                                    <div class=\"form-group col-md-6\">\r\n                                        <label for=\"form-name\">Your Name</label>\r\n                                        <input type=\"text\" id=\"form-name\" class=\"form-control\" placeholder=\"Your Name\">\r\n                                    </div>\r\n                                    <div class=\"form-group col-md-6\">\r\n                                        <label for=\"form-email\">Email</label>\r\n                                        <input type=\"email\" id=\"form-email\" class=\"form-control\" placeholder=\"Email Address\">\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <label for=\"form-subject\">Subject</label>\r\n                                    <input type=\"text\" id=\"form-subject\" class=\"form-control\" placeholder=\"Subject\">\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <label for=\"form-message\">Message</label>\r\n                                    <textarea id=\"form-message\" class=\"form-control\" rows=\"4\"></textarea>\r\n                                </div>\r\n                                <button type=\"submit\" class=\"btn btn-primary\">Send Message</button>\r\n                            </form>\r\n\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/site/pages/page-contact-us/page-contact-us.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/site/pages/page-contact-us/page-contact-us.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-block-map></app-block-map>\n\n<app-page-header [header]=\"'Contact Us'\" [breadcrumbs]=\"[\n    {label: 'Home',       url: '../../'},\n    {label: 'Contact Us', url: ''}\n]\"></app-page-header>\n\n<div class=\"block\">\n    <div class=\"container\">\n        <div class=\"card mb-0\">\n            <div class=\"card-body contact-us\">\n                <div class=\"contact-us__container\">\n                    <div class=\"row\">\n                        <div class=\"col-12 col-lg-6 pb-4 pb-lg-0\">\n                            <h4 class=\"contact-us__header card-title\">Our Address</h4>\n\n                            <div *ngIf=\"resp\" class=\"contact-us__address\">\n                                <p>\n                                    {{resp.address}}<br>\n                                    Email: {{resp.email}}<br>\n                                    Phone Number: {{resp.mobile}}\n                                </p>\n\n                                <p>\n                                    <strong>Opening Hours</strong><br>\n                                    {{resp.openinghours}}\n                                </p>\n\n                                <p>\n\n                                    <strong>Comment</strong><br>\n                                    {{resp.comment}}\n                                </p>\n                            </div>\n                        </div>\n\n                        <div class=\"col-12 col-lg-6\">\n                            <h4 class=\"contact-us__header card-title\">Leave us a Message</h4>\n\n                            <form>\n                                <div class=\"form-row\">\n                                    <div class=\"form-group col-md-6\">\n                                        <label for=\"form-name\">Your Name</label>\n                                        <input type=\"text\" id=\"form-name\" class=\"form-control\" placeholder=\"Your Name\">\n                                    </div>\n                                    <div class=\"form-group col-md-6\">\n                                        <label for=\"form-email\">Email</label>\n                                        <input type=\"email\" id=\"form-email\" class=\"form-control\" placeholder=\"Email Address\">\n                                    </div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <label for=\"form-subject\">Subject</label>\n                                    <input type=\"text\" id=\"form-subject\" class=\"form-control\" placeholder=\"Subject\">\n                                </div>\n                                <div class=\"form-group\">\n                                    <label for=\"form-message\">Message</label>\n                                    <textarea id=\"form-message\" class=\"form-control\" rows=\"4\"></textarea>\n                                </div>\n                                <button type=\"submit\" class=\"btn btn-primary\">Send Message</button>\n                            </form>\n\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/site/pages/page-faq/page-faq.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/site/pages/page-faq/page-faq.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-page-header [header]=\"'Frequently Asked Questions'\" [breadcrumbs]=\"[\r\n    {label: 'Home',                        url: '../../'},\r\n    {label: 'Frequently Asked Questions',  url: ''}\r\n]\"></app-page-header>\r\n\r\n<div class=\"block faq\">\r\n    <div class=\"container\">\r\n        <div class=\"faq__section\">\r\n            <div class=\"faq__section-title\">\r\n                <h3>Shipping Information</h3>\r\n            </div>\r\n            <div class=\"faq__section-body\">\r\n                <div class=\"row\">\r\n                    <div class=\"faq__section-column col-12 col-lg-6\">\r\n                        <div class=\"typography\">\r\n                            <h6>What shipping methods are available?</h6>\r\n\r\n                            <p>\r\n                                Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna\r\n                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis\r\n                                aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.\r\n                            </p>\r\n\r\n                            <h6>Do you ship internationally?</h6>\r\n\r\n                            <p>\r\n                                Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna\r\n                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis\r\n                                aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.\r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"faq__section-column col-12 col-lg-6\">\r\n                        <div class=\"typography\">\r\n                            <h6>What shipping methods are available?</h6>\r\n\r\n                            <p>\r\n                                Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna\r\n                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis\r\n                                aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.\r\n                            </p>\r\n\r\n                            <h6>Do you ship internationally?</h6>\r\n\r\n                            <p>\r\n                                Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna\r\n                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis\r\n                                aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.\r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"faq__section\">\r\n            <div class=\"faq__section-title\">\r\n                <h3>Payment Information</h3>\r\n            </div>\r\n            <div class=\"faq__section-body\">\r\n                <div class=\"row\">\r\n                    <div class=\"faq__section-column col-12 col-lg-6\">\r\n                        <div class=\"typography\">\r\n                            <h6>What shipping methods are available?</h6>\r\n\r\n                            <p>\r\n                                Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna\r\n                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis\r\n                                aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.\r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"faq__section-column col-12 col-lg-6\">\r\n                        <div class=\"typography\">\r\n                            <h6>What shipping methods are available?</h6>\r\n\r\n                            <p>\r\n                                Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna\r\n                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis\r\n                                aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.\r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"faq__section\">\r\n            <div class=\"faq__section-title\">\r\n                <h3>Orders and Returns</h3>\r\n            </div>\r\n            <div class=\"faq__section-body\">\r\n                <div class=\"row\">\r\n                    <div class=\"faq__section-column col-12 col-lg-6\">\r\n                        <div class=\"typography\">\r\n                            <h6>What shipping methods are available?</h6>\r\n\r\n                            <p>\r\n                                Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna\r\n                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis\r\n                                aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.\r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"faq__section-column col-12 col-lg-6\">\r\n                        <div class=\"typography\">\r\n                            <h6>What shipping methods are available?</h6>\r\n\r\n                            <p>\r\n                                Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna\r\n                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis\r\n                                aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.\r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/site/pages/page-terms/page-terms.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/site/pages/page-terms/page-terms.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-page-header [breadcrumbs]=\"[\r\n    {label: 'Home',                 url: '../../'},\r\n    {label: 'Terms And Conditions', url: ''}\r\n]\"></app-page-header>\r\n\r\n<div class=\"block\">\r\n    <div class=\"container\">\r\n        <div class=\"document\">\r\n            <div class=\"document__header\">\r\n                <h1 class=\"document__title\">{{resp.title}}</h1>\r\n                <div class=\"document__subtitle\">This Agreement was last modified on 27 May 2018.</div>\r\n            </div>\r\n            <div class=\"document__content typography\" [innerHTML]=\"resp.description\">\r\n            \r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/site/pages/page-typography/page-typography.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/site/pages/page-typography/page-typography.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-page-header [breadcrumbs]=\"[\r\n    {label: 'Home',       url: '../../'},\r\n    {label: 'Typography', url: ''}\r\n]\"></app-page-header>\r\n\r\n<div class=\"block\">\r\n    <div class=\"container\">\r\n        <div class=\"document\">\r\n            <div class=\"document__header\">\r\n                <h1 class=\"document__title\">Typography</h1>\r\n            </div>\r\n            <div class=\"document__content typography\">\r\n                <p>\r\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis neque ut purus fermentum, ac pretium\r\n                    nibh facilisis. Vivamus venenatis viverra iaculis. Suspendisse tempor orci non sapien ullamcorper dapibus.\r\n                    Suspendisse at velit diam. Donec pharetra nec enim blandit vulputate.\r\n                </p>\r\n\r\n                <h2>H2 Header Example</h2>\r\n\r\n                <p>\r\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis neque ut purus fermentum, ac pretium\r\n                    nibh facilisis. Vivamus venenatis viverra iaculis. Suspendisse tempor orci non sapien ullamcorper dapibus.\r\n                    Suspendisse at velit diam. Donec pharetra nec enim blandit vulputate.\r\n                </p>\r\n\r\n                <h3>H3 Header Example</h3>\r\n\r\n                <p>\r\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis neque ut purus fermentum, ac pretium\r\n                    nibh facilisis. Vivamus venenatis viverra iaculis. Suspendisse tempor orci non sapien ullamcorper dapibus.\r\n                    Suspendisse at velit diam. Donec pharetra nec enim blandit vulputate.\r\n                </p>\r\n\r\n                <h4>H4 Header Example</h4>\r\n\r\n                <p>\r\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis neque ut purus fermentum, ac pretium\r\n                    nibh facilisis. Vivamus venenatis viverra iaculis. Suspendisse tempor orci non sapien ullamcorper dapibus.\r\n                    Suspendisse at velit diam. Donec pharetra nec enim blandit vulputate.\r\n                </p>\r\n\r\n                <h5>H5 Header Example</h5>\r\n\r\n                <p>\r\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis neque ut purus fermentum, ac pretium\r\n                    nibh facilisis. Vivamus venenatis viverra iaculis. Suspendisse tempor orci non sapien ullamcorper dapibus.\r\n                    Suspendisse at velit diam. Donec pharetra nec enim blandit vulputate.\r\n                </p>\r\n\r\n                <h6>H6 Header Example</h6>\r\n\r\n                <p>\r\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis neque ut purus fermentum, ac pretium\r\n                    nibh facilisis. Vivamus venenatis viverra iaculis. Suspendisse tempor orci non sapien ullamcorper dapibus.\r\n                    Suspendisse at velit diam. Donec pharetra nec enim blandit vulputate.\r\n                </p>\r\n\r\n                <hr>\r\n\r\n                <h3>Blockquote</h3>\r\n                <p>\r\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis neque ut purus fermentum, ac pretium\r\n                    nibh facilisis. Vivamus venenatis viverra iaculis.\r\n                </p>\r\n                <blockquote>\r\n                    <p>\r\n                        Suspendisse tempor orci non sapien ullamcorper dapibus. At velit diam. Donec pharetra nec enim blandit vulputate.\r\n                    </p>\r\n                    <p><cite>Adam Taylor</cite></p>\r\n                </blockquote>\r\n                <p>\r\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis neque ut purus fermentum, ac pretium\r\n                    nibh facilisis. Vivamus venenatis viverra iaculis.\r\n                </p>\r\n\r\n                <hr>\r\n\r\n                <h3>Standard List</h3>\r\n                <p>\r\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis neque ut purus fermentum, ac pretium\r\n                    nibh facilisis. Vivamus venenatis viverra iaculis.\r\n                </p>\r\n                <ul>\r\n                    <li>Morbi dignissim hendrerit ligula, quis rutrum risus ultrices eu</li>\r\n                    <li>Nullam dapibus id mauris dignissim dignissim. Sed ut metus mauris.</li>\r\n                    <li>Nulla mollis justo faucibus, laoreet tortor ac, ornare arcu.</li>\r\n                    <li>Libero quis mattis sollicitudin, ipsum sem mattis ligula, pharetra consectetur nisl mi sit amet turpis.</li>\r\n                    <li>Vivamus malesuada, mauris in pulvinar ultricies, eros ligula scelerisque mi, a porttitor nulla ligula sed erat.</li>\r\n                </ul>\r\n\r\n                <h3>Numbered List</h3>\r\n                <p>\r\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis neque ut purus fermentum, ac pretium\r\n                    nibh facilisis. Vivamus venenatis viverra iaculis.\r\n                </p>\r\n                <ol>\r\n                    <li>Morbi dignissim hendrerit ligula, quis rutrum risus ultrices eu</li>\r\n                    <li>Nullam dapibus id mauris dignissim dignissim. Sed ut metus mauris.</li>\r\n                    <li>Nulla mollis justo faucibus, laoreet tortor ac, ornare arcu.</li>\r\n                    <li>Libero quis mattis sollicitudin, ipsum sem mattis ligula, pharetra consectetur nisl mi sit amet turpis.</li>\r\n                    <li>Vivamus malesuada, mauris in pulvinar ultricies, eros ligula scelerisque mi, a porttitor nulla ligula sed erat.</li>\r\n                </ol>\r\n\r\n                <h3>Text Styles</h3>\r\n                <p>\r\n                    Lorem ipsum <strong>bold text</strong>, consectetur <em>italic text</em>. Donec facilisis <del>line through</del>\r\n                    neque ut purus fermentum, ac <a href=\"\">link</a>. Vivamus venenatis viverra iaculis.\r\n                </p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./src/app/modules/site/pages/page-about-us/page-about-us.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/site/pages/page-about-us/page-about-us.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2l0ZS9wYWdlcy9wYWdlLWFib3V0LXVzL3BhZ2UtYWJvdXQtdXMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/site/pages/page-about-us/page-about-us.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/site/pages/page-about-us/page-about-us.component.ts ***!
  \*****************************************************************************/
/*! exports provided: PageAboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageAboutUsComponent", function() { return PageAboutUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_services_direction_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/services/direction.service */ "./src/app/shared/services/direction.service.ts");
/* harmony import */ var _shared_api_shop_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/api/shop.service */ "./src/app/shared/api/shop.service.ts");




let PageAboutUsComponent = class PageAboutUsComponent {
    constructor(direction, ShopService) {
        this.direction = direction;
        this.ShopService = ShopService;
        this.carouselOptions = {
            nav: false,
            dots: true,
            responsive: {
                580: { items: 3, margin: 32 },
                280: { items: 2, margin: 24 },
                0: { items: 1 }
            },
            rtl: this.direction.isRTL()
        };
    }
    ngOnInit() {
        this.ShopService.getStatic('about-us').subscribe((data) => {
            this.resp = data;
            console.log(this.resp);
        });
    }
};
PageAboutUsComponent.ctorParameters = () => [
    { type: _shared_services_direction_service__WEBPACK_IMPORTED_MODULE_2__["DirectionService"] },
    { type: _shared_api_shop_service__WEBPACK_IMPORTED_MODULE_3__["ShopService"] }
];
PageAboutUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about-us',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./page-about-us.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/site/pages/page-about-us/page-about-us.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./page-about-us.component.scss */ "./src/app/modules/site/pages/page-about-us/page-about-us.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_direction_service__WEBPACK_IMPORTED_MODULE_2__["DirectionService"],
        _shared_api_shop_service__WEBPACK_IMPORTED_MODULE_3__["ShopService"]])
], PageAboutUsComponent);



/***/ }),

/***/ "./src/app/modules/site/pages/page-components/page-components.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/site/pages/page-components/page-components.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2l0ZS9wYWdlcy9wYWdlLWNvbXBvbmVudHMvcGFnZS1jb21wb25lbnRzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/site/pages/page-components/page-components.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/site/pages/page-components/page-components.component.ts ***!
  \*********************************************************************************/
/*! exports provided: PageComponentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageComponentsComponent", function() { return PageComponentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PageComponentsComponent = class PageComponentsComponent {
    constructor() {
        this.showAlert = true;
    }
};
PageComponentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-components',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./page-components.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/site/pages/page-components/page-components.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./page-components.component.scss */ "./src/app/modules/site/pages/page-components/page-components.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PageComponentsComponent);



/***/ }),

/***/ "./src/app/modules/site/pages/page-contact-us-alt/page-contact-us-alt.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/site/pages/page-contact-us-alt/page-contact-us-alt.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2l0ZS9wYWdlcy9wYWdlLWNvbnRhY3QtdXMtYWx0L3BhZ2UtY29udGFjdC11cy1hbHQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/site/pages/page-contact-us-alt/page-contact-us-alt.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/site/pages/page-contact-us-alt/page-contact-us-alt.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: PageContactUsAltComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageContactUsAltComponent", function() { return PageContactUsAltComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PageContactUsAltComponent = class PageContactUsAltComponent {
    constructor() { }
};
PageContactUsAltComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page-contact-us-alt',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./page-contact-us-alt.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/site/pages/page-contact-us-alt/page-contact-us-alt.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./page-contact-us-alt.component.scss */ "./src/app/modules/site/pages/page-contact-us-alt/page-contact-us-alt.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PageContactUsAltComponent);



/***/ }),

/***/ "./src/app/modules/site/pages/page-contact-us/page-contact-us.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/site/pages/page-contact-us/page-contact-us.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2l0ZS9wYWdlcy9wYWdlLWNvbnRhY3QtdXMvcGFnZS1jb250YWN0LXVzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/site/pages/page-contact-us/page-contact-us.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/site/pages/page-contact-us/page-contact-us.component.ts ***!
  \*********************************************************************************/
/*! exports provided: PageContactUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageContactUsComponent", function() { return PageContactUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_api_shop_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/api/shop.service */ "./src/app/shared/api/shop.service.ts");



let PageContactUsComponent = class PageContactUsComponent {
    constructor(ShopService) {
        this.ShopService = ShopService;
    }
    ngOnInit() {
        this.ShopService.getContact().subscribe((data) => {
            this.resp = data;
        });
    }
};
PageContactUsComponent.ctorParameters = () => [
    { type: _shared_api_shop_service__WEBPACK_IMPORTED_MODULE_2__["ShopService"] }
];
PageContactUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact-us',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./page-contact-us.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/site/pages/page-contact-us/page-contact-us.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./page-contact-us.component.scss */ "./src/app/modules/site/pages/page-contact-us/page-contact-us.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_api_shop_service__WEBPACK_IMPORTED_MODULE_2__["ShopService"]])
], PageContactUsComponent);



/***/ }),

/***/ "./src/app/modules/site/pages/page-faq/page-faq.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/modules/site/pages/page-faq/page-faq.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2l0ZS9wYWdlcy9wYWdlLWZhcS9wYWdlLWZhcS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/site/pages/page-faq/page-faq.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modules/site/pages/page-faq/page-faq.component.ts ***!
  \*******************************************************************/
/*! exports provided: PageFaqComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageFaqComponent", function() { return PageFaqComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PageFaqComponent = class PageFaqComponent {
    constructor() { }
};
PageFaqComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-faq',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./page-faq.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/site/pages/page-faq/page-faq.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./page-faq.component.scss */ "./src/app/modules/site/pages/page-faq/page-faq.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PageFaqComponent);



/***/ }),

/***/ "./src/app/modules/site/pages/page-terms/page-terms.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/modules/site/pages/page-terms/page-terms.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2l0ZS9wYWdlcy9wYWdlLXRlcm1zL3BhZ2UtdGVybXMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/site/pages/page-terms/page-terms.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/site/pages/page-terms/page-terms.component.ts ***!
  \***********************************************************************/
/*! exports provided: PageTermsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageTermsComponent", function() { return PageTermsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_api_shop_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/api/shop.service */ "./src/app/shared/api/shop.service.ts");



let PageTermsComponent = class PageTermsComponent {
    constructor(ShopService) {
        this.ShopService = ShopService;
    }
    ngOnInit() {
        this.ShopService.getStatic('terms-conditions').subscribe((data) => {
            this.resp = data;
            console.log(this.resp);
        });
    }
};
PageTermsComponent.ctorParameters = () => [
    { type: _shared_api_shop_service__WEBPACK_IMPORTED_MODULE_2__["ShopService"] }
];
PageTermsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-terms',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./page-terms.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/site/pages/page-terms/page-terms.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./page-terms.component.scss */ "./src/app/modules/site/pages/page-terms/page-terms.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_api_shop_service__WEBPACK_IMPORTED_MODULE_2__["ShopService"]])
], PageTermsComponent);



/***/ }),

/***/ "./src/app/modules/site/pages/page-typography/page-typography.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/site/pages/page-typography/page-typography.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2l0ZS9wYWdlcy9wYWdlLXR5cG9ncmFwaHkvcGFnZS10eXBvZ3JhcGh5LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/site/pages/page-typography/page-typography.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/site/pages/page-typography/page-typography.component.ts ***!
  \*********************************************************************************/
/*! exports provided: PageTypographyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageTypographyComponent", function() { return PageTypographyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_api_shop_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/api/shop.service */ "./src/app/shared/api/shop.service.ts");



let PageTypographyComponent = class PageTypographyComponent {
    constructor(shop) {
        this.shop = shop;
    }
    ngOnInit() {
        this.page = this.shop.getStatic('about_us');
    }
};
PageTypographyComponent.ctorParameters = () => [
    { type: _shared_api_shop_service__WEBPACK_IMPORTED_MODULE_2__["ShopService"] }
];
PageTypographyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-typography',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./page-typography.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/site/pages/page-typography/page-typography.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./page-typography.component.scss */ "./src/app/modules/site/pages/page-typography/page-typography.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_api_shop_service__WEBPACK_IMPORTED_MODULE_2__["ShopService"]])
], PageTypographyComponent);



/***/ }),

/***/ "./src/app/modules/site/site-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/site/site-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: SiteRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteRoutingModule", function() { return SiteRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pages_page_about_us_page_about_us_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/page-about-us/page-about-us.component */ "./src/app/modules/site/pages/page-about-us/page-about-us.component.ts");
/* harmony import */ var _pages_page_contact_us_page_contact_us_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/page-contact-us/page-contact-us.component */ "./src/app/modules/site/pages/page-contact-us/page-contact-us.component.ts");
/* harmony import */ var _pages_page_contact_us_alt_page_contact_us_alt_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/page-contact-us-alt/page-contact-us-alt.component */ "./src/app/modules/site/pages/page-contact-us-alt/page-contact-us-alt.component.ts");
/* harmony import */ var _pages_page_terms_page_terms_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/page-terms/page-terms.component */ "./src/app/modules/site/pages/page-terms/page-terms.component.ts");
/* harmony import */ var _pages_page_faq_page_faq_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/page-faq/page-faq.component */ "./src/app/modules/site/pages/page-faq/page-faq.component.ts");
/* harmony import */ var _pages_page_components_page_components_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/page-components/page-components.component */ "./src/app/modules/site/pages/page-components/page-components.component.ts");
/* harmony import */ var _pages_page_typography_page_typography_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/page-typography/page-typography.component */ "./src/app/modules/site/pages/page-typography/page-typography.component.ts");










const routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'about-us'
    },
    {
        path: 'about-us',
        component: _pages_page_about_us_page_about_us_component__WEBPACK_IMPORTED_MODULE_3__["PageAboutUsComponent"]
    },
    {
        path: 'contact-us',
        component: _pages_page_contact_us_page_contact_us_component__WEBPACK_IMPORTED_MODULE_4__["PageContactUsComponent"]
    },
    {
        path: 'contact-us-alt',
        component: _pages_page_contact_us_alt_page_contact_us_alt_component__WEBPACK_IMPORTED_MODULE_5__["PageContactUsAltComponent"]
    },
    {
        path: 'terms',
        component: _pages_page_terms_page_terms_component__WEBPACK_IMPORTED_MODULE_6__["PageTermsComponent"]
    },
    {
        path: 'faq',
        component: _pages_page_faq_page_faq_component__WEBPACK_IMPORTED_MODULE_7__["PageFaqComponent"]
    },
    {
        path: 'components',
        component: _pages_page_components_page_components_component__WEBPACK_IMPORTED_MODULE_8__["PageComponentsComponent"]
    },
    {
        path: 'typography',
        component: _pages_page_typography_page_typography_component__WEBPACK_IMPORTED_MODULE_9__["PageTypographyComponent"]
    }
];
let SiteRoutingModule = class SiteRoutingModule {
};
SiteRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], SiteRoutingModule);



/***/ }),

/***/ "./src/app/modules/site/site.module.ts":
/*!*********************************************!*\
  !*** ./src/app/modules/site/site.module.ts ***!
  \*********************************************/
/*! exports provided: SiteModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteModule", function() { return SiteModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-owl-carousel-o */ "./node_modules/ngx-owl-carousel-o/fesm2015/ngx-owl-carousel-o.js");
/* harmony import */ var _blocks_blocks_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../blocks/blocks.module */ "./src/app/modules/blocks/blocks.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _site_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./site-routing.module */ "./src/app/modules/site/site-routing.module.ts");
/* harmony import */ var _pages_page_about_us_page_about_us_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/page-about-us/page-about-us.component */ "./src/app/modules/site/pages/page-about-us/page-about-us.component.ts");
/* harmony import */ var _pages_page_components_page_components_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/page-components/page-components.component */ "./src/app/modules/site/pages/page-components/page-components.component.ts");
/* harmony import */ var _pages_page_contact_us_alt_page_contact_us_alt_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/page-contact-us-alt/page-contact-us-alt.component */ "./src/app/modules/site/pages/page-contact-us-alt/page-contact-us-alt.component.ts");
/* harmony import */ var _pages_page_contact_us_page_contact_us_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/page-contact-us/page-contact-us.component */ "./src/app/modules/site/pages/page-contact-us/page-contact-us.component.ts");
/* harmony import */ var _pages_page_faq_page_faq_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/page-faq/page-faq.component */ "./src/app/modules/site/pages/page-faq/page-faq.component.ts");
/* harmony import */ var _pages_page_terms_page_terms_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/page-terms/page-terms.component */ "./src/app/modules/site/pages/page-terms/page-terms.component.ts");
/* harmony import */ var _pages_page_typography_page_typography_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/page-typography/page-typography.component */ "./src/app/modules/site/pages/page-typography/page-typography.component.ts");


// modules (angular)

// modules (third-party)

// modules



// pages







let SiteModule = class SiteModule {
};
SiteModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            // pages
            _pages_page_about_us_page_about_us_component__WEBPACK_IMPORTED_MODULE_7__["PageAboutUsComponent"],
            _pages_page_components_page_components_component__WEBPACK_IMPORTED_MODULE_8__["PageComponentsComponent"],
            _pages_page_contact_us_alt_page_contact_us_alt_component__WEBPACK_IMPORTED_MODULE_9__["PageContactUsAltComponent"],
            _pages_page_contact_us_page_contact_us_component__WEBPACK_IMPORTED_MODULE_10__["PageContactUsComponent"],
            _pages_page_faq_page_faq_component__WEBPACK_IMPORTED_MODULE_11__["PageFaqComponent"],
            _pages_page_terms_page_terms_component__WEBPACK_IMPORTED_MODULE_12__["PageTermsComponent"],
            _pages_page_typography_page_typography_component__WEBPACK_IMPORTED_MODULE_13__["PageTypographyComponent"]
        ],
        imports: [
            // modules (angular)
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            // modules (third-party)
            ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_3__["CarouselModule"],
            // modules
            _blocks_blocks_module__WEBPACK_IMPORTED_MODULE_4__["BlocksModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _site_routing_module__WEBPACK_IMPORTED_MODULE_6__["SiteRoutingModule"]
        ]
    })
], SiteModule);



/***/ })

}]);
//# sourceMappingURL=modules-site-site-module-es2015.js.map