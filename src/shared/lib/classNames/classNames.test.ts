import { classNames } from './classNames';

describe('classNames', () => {
    test('Только с одним параметром', () => {
        expect(classNames('FirstClass')).toBe('FirstClass');
    });

    test('С дополнительными классами', () => {
        const expected = 'FirstClass class2 class3';
        expect(classNames('FirstClass', {}, ['class2', 'class3'])).toBe(expected);
    });

    test('С дополнительными модами', () => {
        const expected = 'FirstClass class2 class3 visible scrollable';
        expect(classNames('FirstClass', { visible: true, scrollable: true }, ['class2', 'class3'])).toBe(expected);
    });

    test('С дополнительными модами, когда один из них false', () => {
        const expected = 'FirstClass class2 class3 visible';
        expect(classNames('FirstClass', { visible: true, scrollable: false }, ['class2', 'class3'])).toBe(expected);
    });

    test('С дополнительными модами, когда один из них undefined', () => {
        const expected = 'FirstClass class2 class3 visible';
        expect(classNames('FirstClass', { visible: true, scrollable: undefined }, ['class2', 'class3'])).toBe(expected);
    });
});
