export function parseFilterValue(filterType, value) {
    switch (filterType) {
        case 'range':
            return value.split('-').map(x => parseFloat(x));
        case 'check':
        case 'color':
            return value.trim() === '' ? [] : value.split(',');
    }
    return value;
}
//# sourceMappingURL=filter.js.map