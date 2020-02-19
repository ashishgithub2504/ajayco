import * as tslib_1 from "tslib";
import { Directive, ElementRef } from '@angular/core';
import { DepartmentsService } from '../services/departments.service';
let DepartmentsAreaDirective = class DepartmentsAreaDirective {
    constructor(el, service) {
        this.el = el;
        this.service = service;
    }
    get element() {
        return this.el.nativeElement;
    }
    ngOnInit() {
        this.service.setAreaElement(this.element);
    }
    ngOnDestroy() {
        this.service.setAreaElement(null);
    }
};
DepartmentsAreaDirective = tslib_1.__decorate([
    Directive({
        selector: '[appDepartmentsArea]'
    }),
    tslib_1.__metadata("design:paramtypes", [ElementRef,
        DepartmentsService])
], DepartmentsAreaDirective);
export { DepartmentsAreaDirective };
//# sourceMappingURL=departments-area.directive.js.map