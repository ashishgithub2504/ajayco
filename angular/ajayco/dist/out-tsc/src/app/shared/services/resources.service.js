var ResourcesService_1;
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let ResourcesService = ResourcesService_1 = class ResourcesService {
    constructor() {
        this.loaded = {};
        this.libraries = {
            photoSwipe: ResourcesService_1.parallel(this.styleTask('assets/vendor/photoswipe/photoswipe.css'), this.styleTask('assets/vendor/photoswipe/default-skin/default-skin.css'), this.scriptTask('assets/vendor/photoswipe/photoswipe.min.js'), this.scriptTask('assets/vendor/photoswipe/photoswipe-ui-default.min.js'))
        };
    }
    static series(...tasks) {
        if (!tasks.length) {
            return () => Promise.resolve();
        }
        return () => tasks.shift()().then(ResourcesService_1.series(...tasks));
    }
    static parallel(...tasks) {
        if (!tasks.length) {
            return () => Promise.resolve();
        }
        return () => Promise.all(tasks.map(task => task())).then(() => { });
    }
    loadScript(url) {
        return this.scriptTask(url)();
    }
    loadStyle(url) {
        return this.styleTask(url)();
    }
    loadLibrary(library) {
        return this.libraries[library]();
    }
    scriptTask(url) {
        return () => {
            if (!this.loaded.hasOwnProperty(url)) {
                this.loaded[url] = new Promise((resolve, reject) => {
                    const script = document.createElement('script');
                    script.onload = () => resolve();
                    script.onerror = () => reject(new Error('Loading error: ' + url));
                    script.src = url;
                    document.head.appendChild(script);
                });
            }
            return this.loaded[url];
        };
    }
    styleTask(url) {
        return () => {
            if (!this.loaded.hasOwnProperty(url)) {
                this.loaded[url] = new Promise((resolve, reject) => {
                    const link = document.createElement('link');
                    link.onload = () => resolve();
                    link.onerror = () => reject(new Error('Loading error: ' + url));
                    link.type = 'text/css';
                    link.rel = 'stylesheet';
                    link.href = url;
                    document.head.appendChild(link);
                });
            }
            return this.loaded[url];
        };
    }
};
ResourcesService = ResourcesService_1 = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [])
], ResourcesService);
export { ResourcesService };
//# sourceMappingURL=resources.service.js.map