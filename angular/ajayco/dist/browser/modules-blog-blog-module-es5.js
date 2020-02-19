(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-blog-blog-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/blog/components/comments-list/comments-list.component.html": 
        /*!**************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/blog/components/comments-list/comments-list.component.html ***!
          \**************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<ol class=\"comments-list comments-list--level--{{ level }}\">\r\n    <li *ngFor=\"let comment of comments\" class=\"comments-list__item\">\r\n        <div class=\"comment\">\r\n            <div class=\"comment__avatar\">\r\n                <a href=\"\"><img [src]=\"comment.avatar+'.jpg'\" alt=\"\"></a>\r\n            </div>\r\n            <div class=\"comment__content\">\r\n                <div class=\"comment__header\">\r\n                    <div class=\"comment__author\">\r\n                        <a href=\"\">{{ comment.author }}</a>\r\n                    </div>\r\n                    <div class=\"comment__reply\">\r\n                        <button type=\"button\" class=\"btn btn-xs btn-light\">Reply</button>\r\n                    </div>\r\n                </div>\r\n                <div class=\"comment__text\">{{ comment.text }}</div>\r\n                <div class=\"comment__date\">{{ comment.date }}</div>\r\n            </div>\r\n        </div>\r\n\r\n        <div *ngIf=\"comment.children?.length\" class=\"comment-list__children\">\r\n            <app-comments-list [comments]=\"comment.children\" [level]=\"level + 1\"></app-comments-list>\r\n        </div>\r\n    </li>\r\n</ol>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/blog/components/post/post.component.html": 
        /*!********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/blog/components/post/post.component.html ***!
          \********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"block post post--layout--{{ layout }}\">\r\n    <div class=\"post__header post-header post-header--layout--{{ layout }}\">\r\n        <div class=\"post-header__categories\">\r\n            <a routerLink=\"../\">Latest news</a>\r\n        </div>\r\n        <h1 class=\"post-header__title\">Morbi Interdum Velit Quis Magna Placerat Lobortis Eget</h1>\r\n        <div class=\"post-header__meta\">\r\n            <div class=\"post-header__meta-item\">By <a href=\"\">Jessica Moore</a></div>\r\n            <div class=\"post-header__meta-item\"><a href=\"\">November 30, 2018</a></div>\r\n            <div class=\"post-header__meta-item\"><a href=\"\">4 Comments</a></div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"post__featured\">\r\n        <a href=\"\">\r\n            <img src=\"assets/images/posts/post-featured.jpg\" alt=\"\">\r\n        </a>\r\n    </div>\r\n\r\n    <div class=\"post__content typography\" [ngClass]=\"{'typography--expanded': layout === 'full'}\">\r\n        <p>\r\n            Vestibulum sagittis justo sit amet nisl semper, et pulvinar elit maximus. Morbi interdum velit quis magna placerat lobortis\r\n            eget pharetra magna. Nulla tristique sollicitudin turpis, eget maximus risus faucibus non. Nulla vestibulum ipsum risus,\r\n            vitae maximus nunc bibendum quis.\r\n        </p>\r\n        <p>\r\n            raesent eu consequat nibh. Quisque <i>ullamcorper</i>, augue eu fringilla sodales, leo metus volutpat risus, at suscipit ipsum\r\n            diam eget sem. Maecenas dictum elit in enim molestie, <a href=\"\">vel sollicitudin erat ultricies</a>. Sed risus tellus, molestie finibus\r\n            dui quis, suscipit consequat ex.\r\n        </p>\r\n        <blockquote>\r\n            <p>\r\n                Sed a dictum elit. In iaculis porttitor luctus. Maecenas ultricies dolor et semper placerat.\r\n                Proin at lectus felis.\r\n            </p>\r\n            <p><cite>John Mcarthy</cite></p>\r\n        </blockquote>\r\n        <p>\r\n            Vivamus in nisi at turpis rhoncus feugiat. Mauris scelerisque non ante et ultrices. Donec sit amet sem lobortis,\r\n            ullamcorper felis at, finibus sem. Curabitur tincidunt neque nunc.\r\n        </p>\r\n        <h3>Nam Eget Blandit Diam</h3>\r\n        <p>\r\n            Quisque semper magna eget libero maximus, a sollicitudin nunc hendrerit. Cras efficitur, ante vitae fringilla rutrum,\r\n            mi tortor dapibus metus, in egestas metus erat sit amet orci. Ut faucibus non ante dapibus efficitur. Nam eget blandit\r\n            diam, imperdiet condimentum neque. Donec risus nisi, aliquet a commodo ac, elementum vitae leo.\r\n        </p>\r\n        <p>\r\n            Vestibulum sagittis justo sit amet nisl semper, et pulvinar elit maximus. Morbi interdum velit quis magna placerat\r\n            lobortis eget pharetra magna.\r\n        </p>\r\n        <p>\r\n            <strong>Nulla fringilla:</strong> <a href=\"#\">Donec aliquet at felis et dignissim</a>\r\n        </p>\r\n        <figure>\r\n            <a href=\"\">\r\n                <img src=\"assets/images/posts/post-featured.jpg\" alt=\"\">\r\n            </a>\r\n            <figcaption>Nunc viverra, dui nec commodo dignissim, libero arcu.</figcaption>\r\n        </figure>\r\n        <p>\r\n            Vestibulum non varius lectus. Cras vel elit id ligula laoreet imperdiet. Mauris quis laoreet velit.\r\n            Suspendisse sed velit nec ante facilisis pharetra.\r\n        </p>\r\n        <p>\r\n            Phasellus ut elit vestibulum, dignissim mi non, suscipit ex. Praesent eu consequat nibh. Quisque ullamcorper, augue\r\n            eu fringilla sodales, leo metus volutpat risus, <a href=\"#\">at suscipit ipsum diam eget sem</a>. Maecenas dictum elit in enim molestie,\r\n            vel sollicitudin erat ultricies. Sed risus tellus, molestie finibus dui quis, suscipit consequat ex.\r\n        </p>\r\n        <hr>\r\n        <h2>Nunc Dapibus Varius Ligula</h2>\r\n        <p>\r\n            Maecenas ultrices arcu ut feugiat semper. Praesent dictum tincidunt justo, ac tincidunt ante fermentum at. Vestibulum non\r\n            varius lectus. Cras vel elit id ligula laoreet imperdiet. Mauris quis laoreet velit. Suspendisse sed velit nec ante\r\n            facilisis pharetra. Duis vitae fermentum elit. Integer ac mattis elit.\r\n        </p>\r\n        <p>\r\n            Mauris scelerisque non ante et ultrices. Donec sit amet sem lobortis:\r\n        </p>\r\n        <ol>\r\n            <li>Duis <strong>finibus imperdiet ultricies</strong>. Donec vel pretium turpis. In auctor euismod posuere.</li>\r\n            <li>Praesent dictum tincidunt justo, ac tincidunt ante fermentum at. Vestibulum non varius lectus. Cras vel elit id ligula laoreet imperdiet.</li>\r\n            <li><strong>In iaculis porttitor luctus</strong>. Maecenas ultricies dolor et semper placerat. Proin at lectus felis. Quisque dapibus auctor justo id dictum.</li>\r\n        </ol>\r\n        <p>\r\n            Ut faucibus non ante dapibus efficitur. Nam eget blandit diam, imperdiet condimentum neque. Donec risus nisi, aliquet a\r\n            commodo ac, elementum vitae leo.\r\n        </p>\r\n    </div>\r\n\r\n    <div class=\"post__footer\">\r\n        <div class=\"post__tags-share-links\">\r\n            <div class=\"post__tags tags\">\r\n                <div class=\"tags__list\">\r\n                    <a href=\"\">Promotion</a>\r\n                    <a href=\"\">Power Tool</a>\r\n                    <a href=\"\">Wrench</a>\r\n                    <a href=\"\">Electrodes</a>\r\n                </div>\r\n            </div>\r\n            <div class=\"post__share-links share-links\">\r\n                <ul class=\"share-links__list\">\r\n                    <li class=\"share-links__item share-links__item--type--like\"><a href=\"\">Like</a></li>\r\n                    <li class=\"share-links__item share-links__item--type--tweet\"><a href=\"\">Tweet</a></li>\r\n                    <li class=\"share-links__item share-links__item--type--pin\"><a href=\"\">Pin It</a></li>\r\n                    <li class=\"share-links__item share-links__item--type--counter\"><a href=\"\">4K</a></li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n        <div class=\"post-author\">\r\n            <div class=\"post-author__avatar\">\r\n                <a href=\"\"><img src=\"assets/images/avatars/avatar-1.jpg\" alt=\"\"></a>\r\n            </div>\r\n            <div class=\"post-author__info\">\r\n                <div class=\"post-author__name\">\r\n                    <a href=\"\">Jessica Moore</a>\r\n                </div>\r\n                <div class=\"post-author__about\">\r\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur suscipit suscipit mi, non\r\n                    tempor nulla finibus eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n    <section class=\"post__section\">\r\n        <h4 class=\"post__section-title\">Related Posts</h4>\r\n\r\n        <div class=\"related-posts\">\r\n            <div class=\"related-posts__list\">\r\n                <div *ngFor=\"let post of posts|slice:0:2\" class=\"related-posts__item post-card post-card--layout--related\">\r\n                    <div class=\"post-card__image\">\r\n                        <a routerLink=\"./\">\r\n                            <img [src]=\"post.image\" alt=\"\">\r\n                        </a>\r\n                    </div>\r\n                    <div class=\"post-card__info\">\r\n                        <div class=\"post-card__name\">\r\n                            <a routerLink=\"./\">{{ post.title }}</a>\r\n                        </div>\r\n                        <div class=\"post-card__date\">{{ post.date }}</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n\r\n\r\n    <section class=\"post__section\">\r\n        <h4 class=\"post__section-title\">Comments ({{ comments.count }})</h4>\r\n\r\n        <app-comments-list [comments]=\"comments.items\"></app-comments-list>\r\n    </section>\r\n\r\n\r\n    <section class=\"post__section\">\r\n        <h4 class=\"post__section-title\">Write A Comment</h4>\r\n\r\n        <form>\r\n            <div class=\"form-row\">\r\n                <div class=\"form-group col-md-4\">\r\n                    <label for=\"comment-first-name\">First Name</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"comment-first-name\" placeholder=\"First Name\">\r\n                </div>\r\n                <div class=\"form-group col-md-4\">\r\n                    <label for=\"comment-last-name\">Last Name</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"comment-last-name\" placeholder=\"Last Name\">\r\n                </div>\r\n                <div class=\"form-group col-md-4\">\r\n                    <label for=\"comment-email\">Email Address</label>\r\n                    <input type=\"email\" class=\"form-control\" id=\"comment-email\" placeholder=\"Email Address\">\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label for=\"comment-content\">Comment</label>\r\n                <textarea class=\"form-control\" id=\"comment-content\" rows=\"6\"></textarea>\r\n            </div>\r\n            <div class=\"form-group mt-4\">\r\n                <button type=\"submit\" class=\"btn btn-primary btn-lg\">Post Comment</button>\r\n            </div>\r\n        </form>\r\n    </section>\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/blog/components/sidebar/sidebar.component.html": 
        /*!**************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/blog/components/sidebar/sidebar.component.html ***!
          \**************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"block block-sidebar block-sidebar--position--{{ position }}\">\r\n    <div class=\"block-sidebar__item\">\r\n        <app-widget-search></app-widget-search>\r\n    </div>\r\n    <div class=\"block-sidebar__item\">\r\n        <app-widget-aboutus></app-widget-aboutus>\r\n    </div>\r\n    <div class=\"block-sidebar__item\">\r\n        <app-widget-categories [categories]=\"categories\"></app-widget-categories>\r\n    </div>\r\n    <div class=\"block-sidebar__item\">\r\n        <app-widget-posts [posts]=\"posts|slice:0:3\"></app-widget-posts>\r\n    </div>\r\n    <div class=\"block-sidebar__item\">\r\n        <app-widget-newsletter></app-widget-newsletter>\r\n    </div>\r\n    <div class=\"block-sidebar__item\">\r\n        <app-widget-comments [comments]=\"latestComments|slice:0:3\"></app-widget-comments>\r\n    </div>\r\n    <div class=\"block-sidebar__item\">\r\n        <app-widget-tags></app-widget-tags>\r\n    </div>\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/blog/pages/page-category/page-category.component.html": 
        /*!*********************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/blog/pages/page-category/page-category.component.html ***!
          \*********************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-page-header [header]=\"'Latest News'\" [breadcrumbs]=\"[\r\n    {label: 'Home',        url: '../../'},\r\n    {label: 'Blog',        url: '../'},\r\n    {label: 'Latest News', url: ''}\r\n]\"></app-page-header>\r\n\r\n<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div *ngIf=\"sidebarPosition === 'start'\" class=\"col-12 col-lg-4 order-1 order-lg-0\">\r\n            <app-sidebar position=\"start\"></app-sidebar>\r\n        </div>\r\n        <div class=\"col-12 col-lg-8\">\r\n            <div class=\"block\">\r\n                <div class=\"posts-view\">\r\n                    <div class=\"posts-view__list posts-list posts-list--layout--{{ layout }}\">\r\n                        <div class=\"posts-list__body\">\r\n                            <div *ngFor=\"let post of posts\" class=\"posts-list__item\">\r\n                                <app-post-card [post]=\"post\" [layout]=\"{\r\n                                    classic: 'grid-lg',\r\n                                    grid: 'grid-nl',\r\n                                    list: 'list-nl'\r\n                                }[layout]\"></app-post-card>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"posts-view__pagination\">\r\n                        <app-pagination [current]=\"1\" [siblings]=\"2\" [total]=\"10\"></app-pagination>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div *ngIf=\"sidebarPosition === 'end'\" class=\"col-12 col-lg-4\">\r\n            <app-sidebar position=\"end\"></app-sidebar>\r\n        </div>\r\n    </div>\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/blog/pages/page-post/page-post.component.html": 
        /*!*************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/blog/pages/page-post/page-post.component.html ***!
          \*************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-page-header [breadcrumbs]=\"[\r\n    {label: 'Home',        url: '../../'},\r\n    {label: 'Blog',        url: '../'},\r\n    {label: 'Latest News', url: ''}\r\n]\"></app-page-header>\r\n\r\n<div class=\"container\">\r\n    <ng-container *ngIf=\"layout === 'classic'\">\r\n        <div class=\"row\">\r\n            <div *ngIf=\"sidebarPosition === 'start'\" class=\"col-12 col-lg-4 order-1 order-lg-0\">\r\n                <app-sidebar position=\"start\"></app-sidebar>\r\n            </div>\r\n            <div class=\"col-12 col-lg-8\">\r\n                <app-post-details layout=\"classic\"></app-post-details>\r\n            </div>\r\n            <div *ngIf=\"sidebarPosition === 'end'\" class=\"col-12 col-lg-4\">\r\n                <app-sidebar position=\"end\"></app-sidebar>\r\n            </div>\r\n        </div>\r\n    </ng-container>\r\n    <ng-container *ngIf=\"layout === 'full'\">\r\n        <div class=\"row justify-content-center\">\r\n            <div class=\"col-md-12 col-lg-9 col-xl-8\">\r\n                <app-post-details layout=\"full\"></app-post-details>\r\n            </div>\r\n        </div>\r\n    </ng-container>\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./src/app/modules/blog/blog-routing.module.ts": 
        /*!*****************************************************!*\
          !*** ./src/app/modules/blog/blog-routing.module.ts ***!
          \*****************************************************/
        /*! exports provided: BlogRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogRoutingModule", function () { return BlogRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _pages_page_category_page_category_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/page-category/page-category.component */ "./src/app/modules/blog/pages/page-category/page-category.component.ts");
            /* harmony import */ var _pages_page_post_page_post_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/page-post/page-post.component */ "./src/app/modules/blog/pages/page-post/page-post.component.ts");
            var routes = [
                {
                    path: '',
                    pathMatch: 'full',
                    redirectTo: 'category-classic'
                },
                {
                    path: 'category-classic',
                    component: _pages_page_category_page_category_component__WEBPACK_IMPORTED_MODULE_3__["PageCategoryComponent"],
                    data: {
                        sidebarPosition: 'end',
                        layout: 'classic' // one of [classic, grid, list]
                    }
                },
                {
                    path: 'category-grid',
                    component: _pages_page_category_page_category_component__WEBPACK_IMPORTED_MODULE_3__["PageCategoryComponent"],
                    data: {
                        sidebarPosition: 'end',
                        layout: 'grid' // one of [classic, grid, list]
                    }
                },
                {
                    path: 'category-list',
                    component: _pages_page_category_page_category_component__WEBPACK_IMPORTED_MODULE_3__["PageCategoryComponent"],
                    data: {
                        sidebarPosition: 'end',
                        layout: 'list' // one of [classic, grid, list]
                    }
                },
                {
                    path: 'category-left-sidebar',
                    component: _pages_page_category_page_category_component__WEBPACK_IMPORTED_MODULE_3__["PageCategoryComponent"],
                    data: {
                        sidebarPosition: 'start',
                        layout: 'classic' // one of [classic, grid, list]
                    }
                },
                {
                    path: 'post-classic',
                    component: _pages_page_post_page_post_component__WEBPACK_IMPORTED_MODULE_4__["PagePostComponent"],
                    data: {
                        sidebarPosition: 'end',
                        layout: 'classic'
                    }
                },
                {
                    path: 'post-full',
                    component: _pages_page_post_page_post_component__WEBPACK_IMPORTED_MODULE_4__["PagePostComponent"],
                    data: {
                        layout: 'full'
                    }
                }
            ];
            var BlogRoutingModule = /** @class */ (function () {
                function BlogRoutingModule() {
                }
                return BlogRoutingModule;
            }());
            BlogRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], BlogRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/modules/blog/blog.module.ts": 
        /*!*********************************************!*\
          !*** ./src/app/modules/blog/blog.module.ts ***!
          \*********************************************/
        /*! exports provided: BlogModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogModule", function () { return BlogModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _blog_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blog-routing.module */ "./src/app/modules/blog/blog-routing.module.ts");
            /* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
            /* harmony import */ var _widgets_widgets_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../widgets/widgets.module */ "./src/app/modules/widgets/widgets.module.ts");
            /* harmony import */ var _components_comments_list_comments_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/comments-list/comments-list.component */ "./src/app/modules/blog/components/comments-list/comments-list.component.ts");
            /* harmony import */ var _components_post_post_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/post/post.component */ "./src/app/modules/blog/components/post/post.component.ts");
            /* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ "./src/app/modules/blog/components/sidebar/sidebar.component.ts");
            /* harmony import */ var _pages_page_category_page_category_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/page-category/page-category.component */ "./src/app/modules/blog/pages/page-category/page-category.component.ts");
            /* harmony import */ var _pages_page_post_page_post_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/page-post/page-post.component */ "./src/app/modules/blog/pages/page-post/page-post.component.ts");
            // modules (angular)
            // modules
            // components
            // pages
            var BlogModule = /** @class */ (function () {
                function BlogModule() {
                }
                return BlogModule;
            }());
            BlogModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [
                        // components
                        _components_comments_list_comments_list_component__WEBPACK_IMPORTED_MODULE_6__["CommentsListComponent"],
                        _components_post_post_component__WEBPACK_IMPORTED_MODULE_7__["PostComponent"],
                        _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__["SidebarComponent"],
                        // pages
                        _pages_page_category_page_category_component__WEBPACK_IMPORTED_MODULE_9__["PageCategoryComponent"],
                        _pages_page_post_page_post_component__WEBPACK_IMPORTED_MODULE_10__["PagePostComponent"]
                    ],
                    imports: [
                        // modules (angular)
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        // modules
                        _blog_routing_module__WEBPACK_IMPORTED_MODULE_3__["BlogRoutingModule"],
                        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                        _widgets_widgets_module__WEBPACK_IMPORTED_MODULE_5__["WidgetsModule"]
                    ]
                })
            ], BlogModule);
            /***/ 
        }),
        /***/ "./src/app/modules/blog/components/comments-list/comments-list.component.scss": 
        /*!************************************************************************************!*\
          !*** ./src/app/modules/blog/components/comments-list/comments-list.component.scss ***!
          \************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYmxvZy9jb21wb25lbnRzL2NvbW1lbnRzLWxpc3QvY29tbWVudHMtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/modules/blog/components/comments-list/comments-list.component.ts": 
        /*!**********************************************************************************!*\
          !*** ./src/app/modules/blog/components/comments-list/comments-list.component.ts ***!
          \**********************************************************************************/
        /*! exports provided: CommentsListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsListComponent", function () { return CommentsListComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var CommentsListComponent = /** @class */ (function () {
                function CommentsListComponent() {
                    this.comments = [];
                    this.level = 0;
                }
                return CommentsListComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
            ], CommentsListComponent.prototype, "comments", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
            ], CommentsListComponent.prototype, "level", void 0);
            CommentsListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-comments-list',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./comments-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/blog/components/comments-list/comments-list.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./comments-list.component.scss */ "./src/app/modules/blog/components/comments-list/comments-list.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
            ], CommentsListComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/blog/components/post/post.component.scss": 
        /*!******************************************************************!*\
          !*** ./src/app/modules/blog/components/post/post.component.scss ***!
          \******************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYmxvZy9jb21wb25lbnRzL3Bvc3QvcG9zdC5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/modules/blog/components/post/post.component.ts": 
        /*!****************************************************************!*\
          !*** ./src/app/modules/blog/components/post/post.component.ts ***!
          \****************************************************************/
        /*! exports provided: PostComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostComponent", function () { return PostComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _data_blog_posts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../data/blog-posts */ "./src/data/blog-posts.ts");
            /* harmony import */ var _data_blog_post_comments__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../data/blog-post-comments */ "./src/data/blog-post-comments.ts");
            var PostComponent = /** @class */ (function () {
                function PostComponent() {
                    this.layout = 'classic';
                    this.posts = _data_blog_posts__WEBPACK_IMPORTED_MODULE_2__["posts"];
                    this.comments = _data_blog_post_comments__WEBPACK_IMPORTED_MODULE_3__["postComments"];
                }
                return PostComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
            ], PostComponent.prototype, "layout", void 0);
            PostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-post-details',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./post.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/blog/components/post/post.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./post.component.scss */ "./src/app/modules/blog/components/post/post.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
            ], PostComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/blog/components/sidebar/sidebar.component.scss": 
        /*!************************************************************************!*\
          !*** ./src/app/modules/blog/components/sidebar/sidebar.component.scss ***!
          \************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYmxvZy9jb21wb25lbnRzL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/modules/blog/components/sidebar/sidebar.component.ts": 
        /*!**********************************************************************!*\
          !*** ./src/app/modules/blog/components/sidebar/sidebar.component.ts ***!
          \**********************************************************************/
        /*! exports provided: SidebarComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function () { return SidebarComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _data_blog_posts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../data/blog-posts */ "./src/data/blog-posts.ts");
            /* harmony import */ var _data_blog_widget_latest_comments__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../data/blog-widget-latest-comments */ "./src/data/blog-widget-latest-comments.ts");
            /* harmony import */ var _shared_api_blog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/api/blog.service */ "./src/app/shared/api/blog.service.ts");
            var SidebarComponent = /** @class */ (function () {
                function SidebarComponent(blog) {
                    this.blog = blog;
                    this.position = 'start';
                    this.posts = _data_blog_posts__WEBPACK_IMPORTED_MODULE_2__["posts"];
                    this.categories = [];
                    this.latestComments = _data_blog_widget_latest_comments__WEBPACK_IMPORTED_MODULE_3__["latestComments"];
                }
                SidebarComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.blog.getCategories(null, 1).subscribe(function (x) { return _this.categories = x; });
                };
                return SidebarComponent;
            }());
            SidebarComponent.ctorParameters = function () { return [
                { type: _shared_api_blog_service__WEBPACK_IMPORTED_MODULE_4__["BlogService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
            ], SidebarComponent.prototype, "position", void 0);
            SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-sidebar',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/blog/components/sidebar/sidebar.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/modules/blog/components/sidebar/sidebar.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_api_blog_service__WEBPACK_IMPORTED_MODULE_4__["BlogService"]])
            ], SidebarComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/blog/pages/page-category/page-category.component.scss": 
        /*!*******************************************************************************!*\
          !*** ./src/app/modules/blog/pages/page-category/page-category.component.scss ***!
          \*******************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYmxvZy9wYWdlcy9wYWdlLWNhdGVnb3J5L3BhZ2UtY2F0ZWdvcnkuY29tcG9uZW50LnNjc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/modules/blog/pages/page-category/page-category.component.ts": 
        /*!*****************************************************************************!*\
          !*** ./src/app/modules/blog/pages/page-category/page-category.component.ts ***!
          \*****************************************************************************/
        /*! exports provided: PageCategoryComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageCategoryComponent", function () { return PageCategoryComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _data_blog_posts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../data/blog-posts */ "./src/data/blog-posts.ts");
            var PageCategoryComponent = /** @class */ (function () {
                function PageCategoryComponent(route) {
                    var _this = this;
                    this.route = route;
                    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
                    this.sidebarPosition = 'end'; // For LTR scripts "start" is "left" and "end" is "right"
                    this.layout = 'classic';
                    this.posts = _data_blog_posts__WEBPACK_IMPORTED_MODULE_5__["posts"];
                    this.route.data.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroy$)).subscribe(function (data) {
                        _this.sidebarPosition = data.sidebarPosition;
                        _this.layout = data.layout;
                    });
                }
                PageCategoryComponent.prototype.ngOnDestroy = function () {
                    this.destroy$.next();
                    this.destroy$.complete();
                };
                return PageCategoryComponent;
            }());
            PageCategoryComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
            ]; };
            PageCategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-category',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./page-category.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/blog/pages/page-category/page-category.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./page-category.component.scss */ "./src/app/modules/blog/pages/page-category/page-category.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
            ], PageCategoryComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/blog/pages/page-post/page-post.component.scss": 
        /*!***********************************************************************!*\
          !*** ./src/app/modules/blog/pages/page-post/page-post.component.scss ***!
          \***********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYmxvZy9wYWdlcy9wYWdlLXBvc3QvcGFnZS1wb3N0LmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/modules/blog/pages/page-post/page-post.component.ts": 
        /*!*********************************************************************!*\
          !*** ./src/app/modules/blog/pages/page-post/page-post.component.ts ***!
          \*********************************************************************/
        /*! exports provided: PagePostComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagePostComponent", function () { return PagePostComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            var PagePostComponent = /** @class */ (function () {
                function PagePostComponent(route) {
                    var _this = this;
                    this.route = route;
                    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
                    this.sidebarPosition = 'end'; // For LTR scripts "start" is "left" and "end" is "right"
                    this.layout = 'classic';
                    this.route.data.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$)).subscribe(function (data) {
                        _this.sidebarPosition = data.sidebarPosition;
                        _this.layout = data.layout;
                    });
                }
                PagePostComponent.prototype.ngOnDestroy = function () {
                    this.destroy$.next();
                    this.destroy$.complete();
                };
                return PagePostComponent;
            }());
            PagePostComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
            ]; };
            PagePostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-post',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./page-post.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/blog/pages/page-post/page-post.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./page-post.component.scss */ "./src/app/modules/blog/pages/page-post/page-post.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
            ], PagePostComponent);
            /***/ 
        }),
        /***/ "./src/app/shared/api/blog.service.ts": 
        /*!********************************************!*\
          !*** ./src/app/shared/api/blog.service.ts ***!
          \********************************************/
        /*! exports provided: BlogService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogService", function () { return BlogService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _fake_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../fake-server */ "./src/fake-server/index.ts");
            var BlogService = /** @class */ (function () {
                function BlogService(http) {
                    this.http = http;
                }
                /**
                 * Returns a category tree.
                 *
                 * @param parent - If a parent is specified then its descendants will be returned.
                 * @param depth  - Maximum depth of category tree.
                 */
                BlogService.prototype.getCategories = function (parent, depth) {
                    if (parent === void 0) { parent = null; }
                    if (depth === void 0) { depth = 0; }
                    /**
                     * This is what your API endpoint might look like:
                     *
                     * https://example.com/api/blog/categories.json?parent=latest-news&depth=1
                     *
                     * where:
                     * - parent = parent.slug
                     * - depth  = depth
                     */
                    // const params: {[param: string]: string} = {
                    //     parent: parent.slug,
                    //     depth,
                    // };
                    //
                    // return this.http.get<Category[]>('https://example.com/api/blog/categories.json', {params});
                    // This is for demonstration purposes only. Remove it and use the code above.
                    return Object(_fake_server__WEBPACK_IMPORTED_MODULE_3__["getBlogCategoriesTree"])(parent ? parent.slug : null, depth);
                };
                return BlogService;
            }());
            BlogService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            BlogService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
            ], BlogService);
            /***/ 
        }),
        /***/ "./src/data/blog-post-comments.ts": 
        /*!****************************************!*\
          !*** ./src/data/blog-post-comments.ts ***!
          \****************************************/
        /*! exports provided: postComments */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postComments", function () { return postComments; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var postComments = {
                count: 4,
                items: [
                    {
                        avatar: 'assets/images/avatars/avatar-1',
                        author: 'Jessica Moore',
                        date: 'November 30, 2018',
                        text: 'Aliquam ullamcorper elementum sagittis. Etiam lacus lacus, mollis in mattis in, vehicula eu nulla. ' +
                            'Nulla nec tellus pellentesque.',
                        children: [
                            {
                                avatar: 'assets/images/avatars/avatar-2',
                                author: 'Adam Taylor',
                                date: 'December 4, 2018',
                                text: 'Ut vitae finibus nisl, suscipit porttitor urna. Integer efficitur efficitur velit non pulvinar. ' +
                                    'Aliquam blandit volutpat arcu vel tristique. Integer commodo ligula id augue tincidunt faucibus.'
                            },
                            {
                                avatar: 'assets/images/avatars/avatar-3',
                                author: 'Helena Garcia',
                                date: 'December 12, 2018',
                                text: 'Suspendisse dignissim luctus metus vitae aliquam. Vestibulum sem odio, ullamcorper a imperdiet a, ' +
                                    'tincidunt sed lacus. Sed magna felis, consequat a erat ut, rutrum finibus odio.'
                            }
                        ]
                    },
                    {
                        avatar: 'assets/images/avatars/avatar-4',
                        author: 'Ryan Ford',
                        date: 'December 5, 2018',
                        text: 'Nullam at varius sapien. Sed sit amet condimentum elit.'
                    }
                ]
            };
            /***/ 
        }),
        /***/ "./src/data/blog-widget-latest-comments.ts": 
        /*!*************************************************!*\
          !*** ./src/data/blog-widget-latest-comments.ts ***!
          \*************************************************/
        /*! exports provided: latestComments */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "latestComments", function () { return latestComments; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var latestComments = [
                {
                    author: 'Emma Williams',
                    postTitle: 'Nullam at varius sapien sed sit amet condimentum elit',
                    text: 'In one general sense, philosophy is associated with wisdom, intellectual culture and a search for knowledge...',
                    date: '3 minutes ago'
                },
                {
                    author: 'Airic Ford',
                    postTitle: 'Integer efficitur efficitur velit non pulvinar pellentesque dictum viverra',
                    text: 'In one general sense, philosophy is associated with wisdom, intellectual culture and a search for knowledge...',
                    date: '25 minutes ago'
                },
                {
                    author: 'Loyd Walker',
                    postTitle: 'Curabitur quam augue vestibulum in mauris fermentum pellentesque libero',
                    text: 'In one general sense, philosophy is associated with wisdom, intellectual culture and a search for knowledge...',
                    date: '2 hours ago'
                },
                {
                    author: 'Jessica Moore',
                    postTitle: 'Vestibulum leo sapien sollicitudin at magna eu interdum congue feugiat',
                    text: 'In one general sense, philosophy is associated with wisdom, intellectual culture and a search for knowledge...',
                    date: '3 days ago'
                }
            ];
            /***/ 
        })
    }]);
//# sourceMappingURL=modules-blog-blog-module-es2015.js.map
//# sourceMappingURL=modules-blog-blog-module-es5.js.map
//# sourceMappingURL=modules-blog-blog-module-es5.js.map