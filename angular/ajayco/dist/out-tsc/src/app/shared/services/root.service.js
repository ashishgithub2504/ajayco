import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
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
RootService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [])
], RootService);
export { RootService };
//# sourceMappingURL=root.service.js.map