import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { getProduct, getShopCategoriesBySlugs, getShopCategoriesTree, getShopCategory, getBrands, getProductsList, } from '../../../fake-server';
let ShopService = class ShopService {
    // APIURL = 'http://phpdev.co.in/ajayco/api/webservice/';
    constructor(http) {
        this.http = http;
        this.APIURL = 'http://localhost:8765/api/webservice/';
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
        // This is for demonstration purposes only. Remove it and use the code above.
        return getShopCategory(slug);
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
        // const params: {[param: string]: string} = {
        //     parent: parent.slug,
        //     depth: depth.toString(),
        // };
        //
        // return this.http.get<Category[]>('https://example.com/api/shop/categories.json', {params});
        // This is for demonstration purposes only. Remove it and use the code above.
        return getShopCategoriesTree(parent ? parent.slug : null, depth);
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
        return getShopCategoriesBySlugs(slugs, depth);
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
        // This is for demonstration purposes only. Remove it and use the code above.
        return getProductsList(categorySlug, options);
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
            .pipe(map((response) => response.data));
        // This is for demonstration purposes only. Remove it and use the code above.
        return getProduct(productSlug);
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
        return getBrands();
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
        //
        // return this.http.get<Product[]>('https://example.com/api/shop/products/bestsellers.json', {params});
        return this.http.get(this.APIURL + 'getproducts', { params })
            .pipe(map((response) => response.data));
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
            .pipe(map((response) => response.data));
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
            .pipe(map((response) => response.data));
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
        // if (category) {
        //     params.category = category;
        // }
        if (limit) {
            params.limit = limit.toString();
        }
        //
        return this.http.get(this.APIURL + 'getproducts', { params })
            .pipe(map((response) => response.data));
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
            .pipe(map((response) => response.data));
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
            .pipe(map((response) => response.data));
        // This is for demonstration purposes only. Remove it and use the code above.
        // return getRelatedProducts(product);
    }
    getStatic(slug) {
        return this.http.post(this.APIURL + 'staticpage', { slug })
            .pipe(map((response) => response.data));
    }
};
ShopService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [HttpClient])
], ShopService);
export { ShopService };
/,.m;
//# sourceMappingURL=shop.service.js.map