var InputNumberComponent_1;
import * as tslib_1 from "tslib";
import { Component, ElementRef, forwardRef, HostBinding, Input, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
function parseNumber(value, def) {
    if (typeof value === 'string') {
        value = parseFloat(value);
    }
    else if (typeof value !== 'number') {
        value = def;
    }
    return isNaN(value) ? def : value;
}
let InputNumberComponent = InputNumberComponent_1 = class InputNumberComponent {
    constructor() {
        this.options = {
            step: 1,
            min: null,
            max: null,
            disabled: false,
            readonly: false
        };
        this.class = true;
        this.size = null;
        this.onChange = (_) => { };
        this.onTouched = () => { };
    }
    set step(value) {
        this.options.step = parseNumber(value, 1);
    }
    set min(value) {
        this.options.min = parseNumber(value, null);
    }
    set max(value) {
        this.options.max = parseNumber(value, null);
    }
    set disabled(value) {
        this.options.disabled = !!value;
    }
    set readonly(value) {
        this.options.readonly = !!value;
    }
    get inputElement() {
        return this.inputElementRef.nativeElement;
    }
    get value() {
        return this.inputElement.value === '' ? '' : parseFloat(this.inputElement.value);
    }
    set value(value) {
        this.writeValue(value);
    }
    add() {
        this.change(1);
        this.changeByTimer(1);
    }
    sub() {
        this.change(-1);
        this.changeByTimer(-1);
    }
    input() {
        this.onChange(this.value);
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    writeValue(obj) {
        if (typeof obj === 'number') {
            this.inputElement.value = obj.toString();
        }
        else {
            this.inputElement.value = '';
        }
    }
    /**
     * @param direction - one of [-1, 1]
     */
    change(direction) {
        let value = (this.value === '' || isNaN(this.value) ? 0 : this.value) + this.options.step * direction;
        if (this.options.max !== null) {
            value = Math.min(this.options.max, value);
        }
        if (this.options.min !== null) {
            value = Math.max(this.options.min, value);
        }
        if (value !== this.value) {
            this.onChange(value);
            this.value = value;
        }
    }
    /**
     * @param direction - one of [-1, 1]
     */
    changeByTimer(direction) {
        let interval;
        const timer = setTimeout(() => {
            interval = setInterval(() => this.change(direction), 50);
        }, 300);
        const documentMouseUp = () => {
            clearTimeout(timer);
            clearInterval(interval);
            document.removeEventListener('mouseup', documentMouseUp, false);
        };
        document.addEventListener('mouseup', documentMouseUp, false);
    }
};
tslib_1.__decorate([
    HostBinding('class.input-number'),
    tslib_1.__metadata("design:type", Object)
], InputNumberComponent.prototype, "class", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], InputNumberComponent.prototype, "size", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Number),
    tslib_1.__metadata("design:paramtypes", [Number])
], InputNumberComponent.prototype, "step", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Number),
    tslib_1.__metadata("design:paramtypes", [Number])
], InputNumberComponent.prototype, "min", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Number),
    tslib_1.__metadata("design:paramtypes", [Number])
], InputNumberComponent.prototype, "max", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], InputNumberComponent.prototype, "disabled", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], InputNumberComponent.prototype, "readonly", null);
tslib_1.__decorate([
    ViewChild('inputElement', { static: true }),
    tslib_1.__metadata("design:type", ElementRef)
], InputNumberComponent.prototype, "inputElementRef", void 0);
InputNumberComponent = InputNumberComponent_1 = tslib_1.__decorate([
    Component({
        selector: 'app-input-number',
        templateUrl: './input-number.component.html',
        styleUrls: ['./input-number.component.scss'],
        providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => InputNumberComponent_1),
                multi: true
            }
        ]
    }),
    tslib_1.__metadata("design:paramtypes", [])
], InputNumberComponent);
export { InputNumberComponent };
//# sourceMappingURL=input-number.component.js.map