import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getBlogCategoriesTree } from '../../../fake-server';
let BlogService = class BlogService {
    constructor(http) {
        this.http = http;
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
        return getBlogCategoriesTree(parent ? parent.slug : null, depth);
    }
};
BlogService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [HttpClient])
], BlogService);
export { BlogService };
//# sourceMappingURL=blog.service.js.map