import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
import { colorType } from '../helpers/color';
let ColorTypePipe = class ColorTypePipe {
    transform(value) {
        return colorType(value);
    }
};
ColorTypePipe = tslib_1.__decorate([
    Pipe({
        name: 'colorType'
    })
], ColorTypePipe);
export { ColorTypePipe };
//# sourceMappingURL=color-type.pipe.js.map