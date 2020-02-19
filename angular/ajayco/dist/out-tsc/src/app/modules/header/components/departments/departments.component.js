import * as tslib_1 from "tslib";
import { Component, ElementRef, Inject, PLATFORM_ID, Renderer2 } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { departments } from '../../../../../data/header-departments';
import { DepartmentsService } from '../../../../shared/services/departments.service';
import { isPlatformBrowser } from '@angular/common';
let DepartmentsComponent = class DepartmentsComponent {
    constructor(platformId, renderer, el, service) {
        this.platformId = platformId;
        this.renderer = renderer;
        this.el = el;
        this.service = service;
        this.destroy$ = new Subject();
        this.items = departments;
        this.hoveredItem = null;
        this.isOpen = false;
        this.fixed = false;
    }
    get element() {
        return this.el.nativeElement;
    }
    ngOnInit() {
        const root = this.element.querySelector('.departments');
        const content = this.element.querySelector('.departments__links-wrapper');
        this.service.areaElement$.pipe(takeUntil(this.destroy$)).subscribe(areaElement => {
            if (areaElement) {
                this.fixed = true;
                this.isOpen = true;
                if (isPlatformBrowser(this.platformId)) {
                    const areaRect = areaElement.getBoundingClientRect();
                    const areaBottom = areaRect.top + areaRect.height + window.scrollY;
                    root.classList.remove('departments--transition');
                    root.classList.add('departments--fixed', 'departments--opened');
                    const height = areaBottom - (content.getBoundingClientRect().top + window.scrollY);
                    content.style.height = `${height}px`;
                    content.getBoundingClientRect(); // force reflow
                }
                else {
                    this.renderer.addClass(root, 'departments--fixed');
                    this.renderer.addClass(root, 'departments--opened');
                }
            }
            else {
                this.fixed = false;
                this.isOpen = false;
                if (isPlatformBrowser(this.platformId)) {
                    root.classList.remove('departments--opened', 'departments--fixed');
                    content.style.height = '';
                }
                else {
                    this.renderer.removeClass(root, 'departments--fixed');
                    this.renderer.removeClass(root, 'departments--opened');
                }
            }
        });
        if (isPlatformBrowser(this.platformId)) {
            fromEvent(document, 'mousedown').pipe(takeUntil(this.destroy$)).subscribe((event) => {
                if (event.target instanceof HTMLElement && !this.element.contains(event.target)) {
                    this.close();
                }
            });
            fromEvent(content, 'transitionend').pipe(takeUntil(this.destroy$)).subscribe((event) => {
                if (event.propertyName === 'height') {
                    root.classList.remove('departments--transition');
                }
            });
        }
    }
    toggle() {
        if (this.isOpen) {
            this.close();
        }
        else {
            this.open();
        }
    }
    open() {
        this.isOpen = true;
        const root = this.element.querySelector('.departments');
        const content = root.querySelector('.departments__links-wrapper');
        const startHeight = content.getBoundingClientRect().height;
        root.classList.add('departments--transition', 'departments--opened');
        const endHeight = content.getBoundingClientRect().height;
        content.style.height = startHeight + 'px';
        content.getBoundingClientRect(); // force reflow
        content.style.height = endHeight + 'px';
    }
    close() {
        if (this.fixed || !this.isOpen) {
            return;
        }
        this.isOpen = false;
        const root = this.element.querySelector('.departments');
        const content = root.querySelector('.departments__links-wrapper');
        const startHeight = content.getBoundingClientRect().height;
        content.style.height = startHeight + 'px';
        root.classList.add('departments--transition');
        root.classList.remove('departments--opened');
        content.getBoundingClientRect(); // force reflow
        content.style.height = '';
    }
    onItemMouseEnter(item) {
        this.hoveredItem = item;
    }
    onItemMouseLeave(item) {
        if (this.hoveredItem === item) {
            this.hoveredItem = null;
        }
    }
    onItemClick() {
        this.close();
    }
    onSubItemClick() {
        this.close();
        this.hoveredItem = null;
    }
};
DepartmentsComponent = tslib_1.__decorate([
    Component({
        selector: 'app-header-departments',
        templateUrl: './departments.component.html',
        styleUrls: ['./departments.component.scss']
    }),
    tslib_1.__param(0, Inject(PLATFORM_ID)),
    tslib_1.__metadata("design:paramtypes", [Object, Renderer2,
        ElementRef,
        DepartmentsService])
], DepartmentsComponent);
export { DepartmentsComponent };
//# sourceMappingURL=departments.component.js.map