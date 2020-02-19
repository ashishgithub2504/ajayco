var PaginationComponent_1;
import * as tslib_1 from "tslib";
import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
let PaginationComponent = PaginationComponent_1 = class PaginationComponent {
    constructor() {
        this.siblings = 1;
        this.current = 1;
        this.total = 1;
        this.pageChange = new EventEmitter();
        this.pages = [];
        this.onChange = () => { };
        this.onTouched = () => { };
    }
    ngOnInit() {
        this.calc();
    }
    ngOnChanges(changes) {
        this.calc();
    }
    setPage(value, emitEvent = true) {
        this.onTouched();
        if (value < 1 || value > this.total || value === this.current) {
            return;
        }
        if (this.current !== value) {
            this.onChange(value);
        }
        this.current = value;
        this.calc();
        if (emitEvent) {
            this.pageChange.emit(this.current);
        }
    }
    trackByFn(index) {
        return index;
    }
    calc() {
        const min = Math.max(1, this.current - this.siblings - Math.max(0, this.siblings - this.total + this.current));
        const max = Math.min(this.total, min + this.siblings * 2);
        this.pages = [];
        for (let i = min; i <= max; i++) {
            this.pages.push(i);
        }
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    writeValue(obj) {
        if (typeof obj === 'number') {
            this.setPage(obj, false);
        }
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], PaginationComponent.prototype, "siblings", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], PaginationComponent.prototype, "current", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], PaginationComponent.prototype, "total", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], PaginationComponent.prototype, "pageChange", void 0);
PaginationComponent = PaginationComponent_1 = tslib_1.__decorate([
    Component({
        selector: 'app-pagination',
        templateUrl: './pagination.component.html',
        styleUrls: ['./pagination.component.scss'],
        providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => PaginationComponent_1),
                multi: true
            }
        ]
    }),
    tslib_1.__metadata("design:paramtypes", [])
], PaginationComponent);
export { PaginationComponent };
//# sourceMappingURL=pagination.component.js.map