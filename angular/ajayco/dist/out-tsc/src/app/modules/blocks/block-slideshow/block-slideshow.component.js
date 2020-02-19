import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { DirectionService } from '../../../shared/services/direction.service';
import { HttpClient } from '@angular/common/http';
let BlockSlideshowComponent = class BlockSlideshowComponent {
    constructor(sanitizer, http, direction) {
        this.sanitizer = sanitizer;
        this.http = http;
        this.direction = direction;
        this.withDepartments = false;
        this.APIURL = 'http://localhost:8765/api/webservice/';
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
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], BlockSlideshowComponent.prototype, "withDepartments", void 0);
BlockSlideshowComponent = tslib_1.__decorate([
    Component({
        selector: 'app-block-slideshow',
        templateUrl: './block-slideshow.component.html',
        styleUrls: ['./block-slideshow.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [DomSanitizer,
        HttpClient,
        DirectionService])
], BlockSlideshowComponent);
export { BlockSlideshowComponent };
//# sourceMappingURL=block-slideshow.component.js.map