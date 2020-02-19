import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
let DepartmentsService = class DepartmentsService {
    constructor() {
        this.areaElementSubject$ = new BehaviorSubject(null);
        this.areaElement$ = this.areaElementSubject$.asObservable();
    }
    setAreaElement(value) {
        this.areaElementSubject$.next(value);
    }
};
DepartmentsService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [])
], DepartmentsService);
export { DepartmentsService };
//# sourceMappingURL=departments.service.js.map