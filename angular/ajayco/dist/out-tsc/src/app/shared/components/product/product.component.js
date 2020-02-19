import * as tslib_1 from "tslib";
import { Component, ElementRef, Inject, Input, PLATFORM_ID, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { CarouselComponent } from 'ngx-owl-carousel-o';
import { FormControl } from '@angular/forms';
import { CartService } from '../../services/cart.service';
import { WishlistService } from '../../services/wishlist.service';
import { CompareService } from '../../services/compare.service';
import { isPlatformBrowser } from '@angular/common';
import { PhotoSwipeService } from '../../services/photo-swipe.service';
import { DirectionService } from '../../services/direction.service';
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
        this.quantity = new FormControl(1);
        this.addingToCart = false;
        this.addingToWishlist = false;
        this.addingToCompare = false;
    }
    set layout(value) {
        this.dataLayout = value;
        if (isPlatformBrowser(this.platformId)) {
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
        if (this.layout !== 'quickview' && isPlatformBrowser(this.platformId)) {
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
tslib_1.__decorate([
    ViewChild('featuredCarousel', { read: CarouselComponent, static: false }),
    tslib_1.__metadata("design:type", CarouselComponent)
], ProductComponent.prototype, "featuredCarousel", void 0);
tslib_1.__decorate([
    ViewChild('thumbnailsCarousel', { read: CarouselComponent, static: false }),
    tslib_1.__metadata("design:type", CarouselComponent)
], ProductComponent.prototype, "thumbnailsCarousel", void 0);
tslib_1.__decorate([
    ViewChildren('imageElement', { read: ElementRef }),
    tslib_1.__metadata("design:type", QueryList)
], ProductComponent.prototype, "imageElements", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String),
    tslib_1.__metadata("design:paramtypes", [String])
], ProductComponent.prototype, "layout", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], ProductComponent.prototype, "product", null);
ProductComponent = tslib_1.__decorate([
    Component({
        selector: 'app-product',
        templateUrl: './product.component.html',
        styleUrls: ['./product.component.scss']
    }),
    tslib_1.__param(0, Inject(PLATFORM_ID)),
    tslib_1.__metadata("design:paramtypes", [Object, CartService,
        WishlistService,
        CompareService,
        PhotoSwipeService,
        DirectionService])
], ProductComponent);
export { ProductComponent };
//# sourceMappingURL=product.component.js.map