import * as tslib_1 from "tslib";
import { Component, TemplateRef, ViewChild } from '@angular/core';
import { QuickviewService } from '../../services/quickview.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
let QuickviewComponent = class QuickviewComponent {
    constructor(quickview, modalService) {
        this.quickview = quickview;
        this.modalService = modalService;
        this.destroy$ = new Subject();
    }
    ngAfterViewInit() {
        this.quickview.show$.pipe(takeUntil(this.destroy$)).subscribe(product => {
            if (this.modalRef) {
                this.modalRef.hide();
            }
            this.product = product;
            this.modalRef = this.modalService.show(this.template, { class: 'modal-dialog-centered modal-xl' });
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
};
tslib_1.__decorate([
    ViewChild('modal', { read: TemplateRef, static: false }),
    tslib_1.__metadata("design:type", TemplateRef)
], QuickviewComponent.prototype, "template", void 0);
QuickviewComponent = tslib_1.__decorate([
    Component({
        selector: 'app-quickview',
        templateUrl: './quickview.component.html',
        styleUrls: ['./quickview.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [QuickviewService,
        BsModalService])
], QuickviewComponent);
export { QuickviewComponent };
//# sourceMappingURL=quickview.component.js.map