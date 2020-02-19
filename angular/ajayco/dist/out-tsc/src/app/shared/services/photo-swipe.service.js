import * as tslib_1 from "tslib";
import { Injectable, NgZone } from '@angular/core';
import { ResourcesService } from './resources.service';
import { Observable } from 'rxjs';
import { from } from 'rxjs/internal/observable/from';
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
        return from(this.loadLibrary());
    }
    open(items, options) {
        return new Observable(observer => {
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
PhotoSwipeService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [NgZone,
        ResourcesService])
], PhotoSwipeService);
export { PhotoSwipeService };
//# sourceMappingURL=photo-swipe.service.js.map